/**
 * Kaien Security — Hero Wave Canvas
 * Procedural topographic wave matching Onda.jpg reference.
 *
 * Generates dense parallel contour lines along an S-curve path,
 * with white-to-red gradient coloring, glow on the core line,
 * and a dot mesh texture in the peripheral areas.
 */

(function () {
    'use strict';

    var canvas = document.getElementById('hero-wave');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var W = canvas.width;
    var H = canvas.height;

    // ============================================================
    // BASE CURVE DEFINITION
    // Key points of the main S-curve (normalized, then scaled)
    // ============================================================
    var keyPoints = [
        { x: 0.08, y: 0.55 },   // Start: center-left
        { x: 0.20, y: 0.50 },   // Gentle right
        { x: 0.28, y: 0.42 },   // Curving up
        { x: 0.35, y: 0.30 },   // Sharp bend up
        { x: 0.42, y: 0.20 },   // Peak area
        { x: 0.50, y: 0.22 },   // Slight dip
        { x: 0.58, y: 0.16 },   // Rising again
        { x: 0.68, y: 0.10 },   // Going up-right
        { x: 0.78, y: 0.08 },   // Flat top
        { x: 0.90, y: 0.07 },   // Almost flat
        { x: 1.02, y: 0.06 },   // Exit: top-right off-screen
    ];

    // Interpolate smooth curve through key points using Catmull-Rom
    function catmullRom(points, segments) {
        var result = [];
        var n = points.length;

        for (var i = 0; i < n - 1; i++) {
            var p0 = points[Math.max(i - 1, 0)];
            var p1 = points[i];
            var p2 = points[i + 1];
            var p3 = points[Math.min(i + 2, n - 1)];

            for (var t = 0; t < segments; t++) {
                var tt = t / segments;
                var tt2 = tt * tt;
                var tt3 = tt2 * tt;

                var x = 0.5 * ((2 * p1.x) + (-p0.x + p2.x) * tt +
                    (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * tt2 +
                    (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * tt3);

                var y = 0.5 * ((2 * p1.y) + (-p0.y + p2.y) * tt +
                    (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * tt2 +
                    (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * tt3);

                result.push({ x: x * W, y: y * H });
            }
        }

        // Add last point
        result.push({ x: points[n - 1].x * W, y: points[n - 1].y * H });
        return result;
    }

    // Compute unit normals for each point along the curve
    function computeNormals(curve) {
        var normals = [];
        for (var i = 0; i < curve.length; i++) {
            var prev = curve[Math.max(i - 1, 0)];
            var next = curve[Math.min(i + 1, curve.length - 1)];
            var dx = next.x - prev.x;
            var dy = next.y - prev.y;
            var len = Math.sqrt(dx * dx + dy * dy) || 1;
            normals.push({ x: -dy / len, y: dx / len }); // Perpendicular
        }
        return normals;
    }

    // ============================================================
    // GENERATE OFFSET CURVES
    // ============================================================
    var baseCurve = catmullRom(keyPoints, 30);
    var normals = computeNormals(baseCurve);

    // Generate parallel curves at varying offsets
    var contourCount = 50;
    var maxOffset = 140; // pixels
    var contours = [];

    for (var i = 0; i < contourCount; i++) {
        // Map contour index to offset (negative = one side, positive = other)
        // Core line at index ~15, then spread outward
        var offset;
        if (i < 15) {
            offset = -maxOffset + (i / 15) * (maxOffset * 0.65);
        } else {
            offset = (maxOffset * 0.65) + ((i - 15) / (contourCount - 15)) * (maxOffset * 0.7);
        }

        var contourPoints = [];
        for (var j = 0; j < baseCurve.length; j++) {
            contourPoints.push({
                x: baseCurve[j].x + normals[j].x * offset,
                y: baseCurve[j].y + normals[j].y * offset,
            });
        }
        contours.push({ points: contourPoints, offset: offset, index: i });
    }

    // ============================================================
    // DRAW
    // ============================================================

    // Clear
    ctx.clearRect(0, 0, W, H);

    // --- Draw dot mesh texture (background) ---
    // Dots concentrated around the wave area, fading out
    ctx.save();
    var dotSpacing = 16;
    for (var dx = 0; dx < W; dx += dotSpacing) {
        for (var dy = 0; dy < H; dy += dotSpacing) {
            // Find distance to nearest base curve point (approximate)
            // Use a few sample points for performance
            var dist = Infinity;
            var sampleStep = 20;
            for (var s = 0; s < baseCurve.length; s += sampleStep) {
                var ddx = dx - baseCurve[s].x;
                var ddy = dy - baseCurve[s].y;
                var d = ddx * ddx + ddy * ddy;
                if (d < dist) dist = d;
            }
            dist = Math.sqrt(dist);

            // Only draw dots within a certain range of the curve
            if (dist < 350 && dist > 60) {
                var opacity = 0.03 + 0.04 * (1 - dist / 350);
                var dotR = 0.5 + 0.4 * (1 - dist / 350);

                // Red tint for dots below the core, white for above
                if (dist < 200) {
                    ctx.fillStyle = 'rgba(255,43,43,' + opacity + ')';
                } else {
                    ctx.fillStyle = 'rgba(255,255,255,' + opacity + ')';
                }
                ctx.beginPath();
                ctx.arc(dx, dy, dotR, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
    ctx.restore();

    // --- Draw contour lines ---
    function drawContour(points, color, lineWidth) {
        if (points.length < 2) return;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        // Smooth curve through points
        for (var i = 1; i < points.length - 1; i++) {
            var xc = (points[i].x + points[i + 1].x) / 2;
            var yc = (points[i].y + points[i + 1].y) / 2;
            ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }

        // Last segment
        var last = points[points.length - 1];
        ctx.quadraticCurveTo(
            points[points.length - 2].x,
            points[points.length - 2].y,
            last.x,
            last.y
        );

        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
    }

    // Draw contours from outermost to innermost
    for (var c = 0; c < contours.length; c++) {
        var cont = contours[c];
        var idx = cont.index;

        // Color: white on one side, red on the other
        // Core line (idx == 14) gets the brightest treatment
        var color;
        var lineWidth;

        if (idx === 14) {
            // Core line — bright red with glow handled separately
            color = 'rgba(255,43,43,0.9)';
            lineWidth = 2.5;
        } else if (idx === 15) {
            // Inner white-hot line
            color = 'rgba(255,255,255,0.35)';
            lineWidth = 1;
        } else if (idx > 15) {
            // Above core — red fading to white
            var t = (idx - 15) / (contourCount - 15);
            var r = 255;
            var g = Math.round(43 - t * 20);
            var b = Math.round(43 - t * 30);
            var a;
            if (t < 0.3) {
                a = 0.7 - t * 1.2;
            } else if (t < 0.6) {
                a = 0.34 - (t - 0.3) * 0.4;
            } else {
                a = 0.22 - (t - 0.6) * 0.3;
            }
            a = Math.max(0.02, Math.min(0.8, a));
            color = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
            lineWidth = 0.5 + (1 - t) * 0.6;
        } else {
            // Below core — white fading to dark
            var t2 = 1 - idx / 15;
            var a2;
            if (t2 < 0.5) {
                a2 = 0.5 * t2;
            } else {
                a2 = 0.25 - (t2 - 0.5) * 0.35;
            }
            a2 = Math.max(0.015, Math.min(0.5, a2));
            var bright = Math.round(200 - (1 - t2) * 140);
            color = 'rgba(' + bright + ',' + bright + ',' + Math.min(255, bright + 10) + ',' + a2 + ')';
            lineWidth = 0.4 + t2 * 0.5;
        }

        drawContour(cont.points, color, lineWidth);
    }

    // --- Redraw core line with glow ---
    ctx.save();
    ctx.shadowColor = 'rgba(255, 43, 43, 0.6)';
    ctx.shadowBlur = 20;
    drawContour(contours[14].points, 'rgba(255,43,43,0.85)', 2.5);
    ctx.restore();

    // Second glow pass for wider bloom
    ctx.save();
    ctx.shadowColor = 'rgba(255, 43, 43, 0.3)';
    ctx.shadowBlur = 40;
    drawContour(contours[14].points, 'rgba(255,43,43,0.4)', 3.5);
    ctx.restore();

    // White-hot core on top
    ctx.save();
    ctx.shadowColor = 'rgba(255,255,255,0.3)';
    ctx.shadowBlur = 8;
    drawContour(contours[15].points, 'rgba(255,255,255,0.3)', 0.8);
    ctx.restore();

    // --- Draw particles along the core ---
    var particlePositions = [0.2, 0.3, 0.42, 0.5, 0.62, 0.72, 0.82, 0.92];
    var corePts = contours[14].points;

    for (var p = 0; p < particlePositions.length; p++) {
        var pos = particlePositions[p];
        var idx = Math.floor(pos * (corePts.length - 1));
        var pt = corePts[idx];

        if (!pt) continue;

        var radius = 1.5 + pos * 1.5;
        var alpha = 0.3 + Math.sin(pos * Math.PI) * 0.6;

        // Glow halo
        ctx.save();
        ctx.shadowColor = 'rgba(255, 43, 43, ' + alpha + ')';
        ctx.shadowBlur = 12;
        ctx.fillStyle = 'rgba(255, 43, 43, ' + alpha + ')';
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Bright center
        ctx.fillStyle = pos > 0.4 && pos < 0.7
            ? 'rgba(255, 255, 255, ' + alpha + ')'
            : 'rgba(255, 43, 43, ' + alpha + ')';
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, radius * 0.5, 0, Math.PI * 2);
        ctx.fill();
    }

    // --- Secondary wave (above the main one) ---
    var secondaryPoints = [];
    for (var sp = 0; sp < baseCurve.length; sp++) {
        secondaryPoints.push({
            x: baseCurve[sp].x + normals[sp].x * (maxOffset * 0.65 + 90),
            y: baseCurve[sp].y + normals[sp].y * (maxOffset * 0.65 + 90),
        });
    }

    ctx.save();
    ctx.shadowColor = 'rgba(255, 43, 43, 0.2)';
    ctx.shadowBlur = 12;
    drawContour(secondaryPoints, 'rgba(255,43,43,0.25)', 1.5);
    ctx.restore();

    // Faint secondary glow
    drawContour(secondaryPoints, 'rgba(255,43,43,0.12)', 3);

    // --- Ambient glow overlay ---
    var gradient = ctx.createRadialGradient(W * 0.6, H * 0.25, 0, W * 0.6, H * 0.25, W * 0.5);
    gradient.addColorStop(0, 'rgba(255, 43, 43, 0.04)');
    gradient.addColorStop(0.5, 'rgba(255, 43, 43, 0.01)');
    gradient.addColorStop(1, 'rgba(255, 43, 43, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, W, H);

})();
