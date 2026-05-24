/**
 * Kaien Security — Main Script
 *
 * SECURITY NOTES:
 * - No third-party dependencies
 * - No eval(), no innerHTML, no dangerouslySetInnerHTML
 * - No external API calls
 * - No localStorage/sessionStorage (no data persistence)
 * - Uses nonce attribute for CSP compliance (set in HTML)
 *
 * PERFORMANCE NOTES:
 * - Minimal DOM queries — cached references
 * - Uses passive event listeners where applicable
 * - requestAnimationFrame for scroll-related updates
 * - IntersectionObserver for reveal animations (GPU-accelerated)
 * - No blocking synchronous operations
 */

(function () {
    'use strict';

    // ============================================================
    // DOM REFERENCES — cached on init, never re-queried
    // ============================================================
    var header = document.querySelector('.site-header');
    var toggle = document.querySelector('.navbar__toggle');
    var mobileMenu = document.querySelector('.mobile-menu');
    var mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    var revealElements = document.querySelectorAll('.reveal');

    // ============================================================
    // NAVBAR — Scroll effect
    // Adds 'scrolled' class when user scrolls past threshold.
    // Uses requestAnimationFrame to avoid layout thrashing.
    // ============================================================
    var scrollTicking = false;
    var scrollThreshold = 20;

    function onScroll() {
        if (!scrollTicking) {
            window.requestAnimationFrame(function () {
                if (window.scrollY > scrollThreshold) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }

    // Passive listener — tells browser scroll won't be prevented
    window.addEventListener('scroll', onScroll, { passive: true });

    // ============================================================
    // MOBILE MENU — Toggle with accessibility support
    // ============================================================
    if (toggle && mobileMenu) {
        var menuOpen = false;

        toggle.addEventListener('click', function () {
            menuOpen = !menuOpen;
            mobileMenu.classList.toggle('is-open', menuOpen);
            toggle.setAttribute('aria-expanded', String(menuOpen));
            toggle.setAttribute(
                'aria-label',
                menuOpen ? 'Close menu' : 'Open menu'
            );

            // Prevent body scroll when menu is open
            document.body.style.overflow = menuOpen ? 'hidden' : '';
        });

        // Close menu on link click
        for (var i = 0; i < mobileLinks.length; i++) {
            mobileLinks[i].addEventListener('click', function () {
                menuOpen = false;
                mobileMenu.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Open menu');
                document.body.style.overflow = '';
            });
        }

        // Close menu on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && menuOpen) {
                menuOpen = false;
                mobileMenu.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Open menu');
                document.body.style.overflow = '';
                toggle.focus();
            }
        });
    }

    // ============================================================
    // REVEAL ANIMATIONS — IntersectionObserver
    // Elements fade in when scrolled into view.
    // Respects prefers-reduced-motion via CSS media query.
    // ============================================================
    if ('IntersectionObserver' in window && revealElements.length > 0) {
        // Convert NodeList to array for compatibility
        var reveals = Array.prototype.slice.call(revealElements);

        var observer = new IntersectionObserver(
            function (entries) {
                for (var j = 0; j < entries.length; j++) {
                    if (entries[j].isIntersecting) {
                        entries[j].target.classList.add('is-visible');
                        observer.unobserve(entries[j].target); // Observe once only
                    }
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        reveals.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: show everything immediately
        reveals.forEach(function (el) {
            el.classList.add('is-visible');
        });
    }

    // ============================================================
    // SMOOTH SCROLL — for anchor links (progressive enhancement)
    // Uses native CSS scroll-behavior, JS fallback for older browsers
    // ============================================================
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var headerHeight = header.offsetHeight;
                var targetPosition =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth',
                });

                // Set focus for accessibility
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            }
        });
    });
})();
