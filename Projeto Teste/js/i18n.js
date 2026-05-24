/**
 * Kaien Security — Internationalization (i18n)
 *
 * Simple client-side language switcher (PT-BR / EN).
 * No dependencies, no eval, no innerHTML.
 * Uses data-i18n attributes on elements + translation dictionary.
 * Language preference stored in localStorage (user choice).
 */

(function () {
    'use strict';

    // ============================================================
    // TRANSLATION DICTIONARY
    // ============================================================
    var translations = {
        pt: {
            skip_link: 'Pular para o conteúdo principal',
            nav_servicos: 'Serviços',
            nav_sobre: 'Sobre',
            nav_abordagem: 'Abordagem',
            nav_insights: 'Insights',
            nav_contato: 'Contato',
            nav_label: 'Navegação principal',
            mobile_label: 'Navegação mobile',
            hero_tagline: 'AppSec, WAF, IAM, Pentest',
            hero_title: 'Proteção estratégica<br>para <span class="text-accent">aplicações</span><br>que movem negócios.',
            hero_description: 'Consultoria especializada em segurança de aplicações,<br>WAF, Pentest e IAM para reduzir riscos, fortalecer sua<br>arquitetura e garantir resiliência em escala.',
            hero_prevenir: 'Prevenir',
            hero_proteger: 'Proteger',
            hero_detectar: 'Detectar',
            hero_evoluir: 'Evoluir',
            cta_talk: 'Falar com um especialista',
            hero_btn_services: 'Nossos serviços',
            trust_label: 'Empresas que confiam na Kaien Security',
            services_label: 'Serviços',
            services_title: 'Soluções técnicas.<br>Impacto <span class="text-accent">real.</span>',
            services_lead: 'Atuamos nas camadas críticas da sua aplicação<br>com profundidade técnica e abordagem consultiva.',
            svc1_title: 'WAF & Proteção de Aplicações',
            svc1_desc: 'Implementação, hardening e gestão de WAF para proteção Layer 7\ncontra ataques e abusos.',
            svc2_title: 'Pentest & Offensive Security',
            svc2_desc: 'Testes de invasão manuais para identificar vulnerabilidades reais\ne fortalecer sua superfície de ataque.',
            svc3_title: 'IAM & Segurança de Identidades',
            svc3_desc: 'Projetos e avaliações de identidade e acesso para reduzir riscos\ne garantir o princípio do menor privilégio.',
            svc4_title: 'Phishing & Engenharia Social',
            svc4_desc: 'Campanhas simuladas de phishing para avaliar e fortalecer a\nconscientização da sua organização contra ataques sociais.',
            svc5_title: 'Educação em Segurança da Informação',
            svc5_desc: 'Programas de treinamento e aprendizado em segurança da\ninformação para elevar a maturidade da sua organização.',
            saiba_mais: 'Saiba mais',
            approach_label: 'Abordagem',
            approach_title: 'Profundidade que gera<br><span class="text-accent">confiança.</span>',
            feat1_title: 'Foco em risco real',
            feat1_text: 'Priorizamos o que realmente importa para o seu negócio.',
            feat2_title: 'Visão técnica e prática',
            feat2_text: 'Soluções aplicáveis, alinhadas à sua arquitetura.',
            feat3_title: 'Transparência total',
            feat3_text: 'Comunicação clara e objetiva em todas as etapas.',
            feat4_title: 'Parceria contínua',
            feat4_text: 'Atuamos como extensão do seu time, não apenas como fornecedores.',
            cta_label: 'Pronto para fortalecer?',
            cta_title: 'Vamos elevar o nível da<br>segurança da sua <span class="text-accent">aplicação.</span>',
            cta_text: 'Fale com um especialista e descubra como<br>podemos ajudar sua empresa a evoluir<br>com mais segurança.',
            footer_desc: 'Consultoria especializada em WAF, Pentest e IAM<br>para empresas que constroem o futuro na web.',
            footer_servicos: 'Serviços',
            footer_empresa: 'Empresa',
            footer_company: 'Empresa',
            footer_company: 'Empresa',
            footer_contato: 'Contato',
            footer_svc1: 'WAF & Proteção de Aplicações',
            footer_svc2: 'Pentest & Offensive Security',
            footer_svc3: 'IAM & Segurança de Identidades',
            footer_sobre: 'Sobre',
            footer_abordagem: 'Abordagem',
            footer_insights: 'Insights',
            footer_contato_link: 'Contato',
            footer_copy: '\u00a9 2026 Kaien Security. Todos os direitos reservados.',
            footer_rights: '\u00a9 2026 Kaien Security. Todos os direitos reservados.',
            footer_privacy: 'Política de Privacidade',
            footer_terms: 'Termos de Uso',
            lang_label: 'Alterar idioma',
            page_title: 'Kaien Security — Consultoria em Segurança de Aplicações',
            // Sobre page
            sobre_tagline: 'Sobre nós',
            sobre_title: 'Segurança com<br><span class="text-accent">propósito</span><br>e profundidade.',
            sobre_lead: 'Somos um time de especialistas focados em proteger<br>aplicações e identidades com técnica, estratégia<br>e visão de negócio.',
            sobre_story_title: 'Nascemos da <span class="text-accent">necessidade real</span><br>de proteger o que importa.',
            sobre_story_p1: 'A Kaien Security nasceu da constatação de que a maioria das empresas trata segurança de forma genérica — checklists, relatórios inflados e soluções que não se adaptam à realidade do negócio.',
            sobre_story_p2: 'Nosso diferencial é simples: atuamos com profundidade técnica e proximidade com o seu time. Entendemos a sua arquitetura, os seus riscos reais e entregamos soluções que funcionam — não apenas documentos que empoeiram.',
            sobre_story_p3: 'Desde a proteção de aplicações com WAF até testes de invasão manuais e projetos de IAM, cada engajamento é tratado com o mesmo rigor e atenção que daríamos ao nosso próprio negócio.',
            sobre_values_label: 'Valores',
            sobre_values_title: 'O que nos <span class="text-accent">move.</span>',
            sobre_expertise_label: 'Expertise',
            sobre_expertise_title: 'Pilares técnicos<br>que <span class="text-accent">entregam</span> resultado.',
            sobre_expertise1_title: 'WAF & Proteção de Aplicações',
            sobre_expertise1_text: 'Implementação e hardening de Web Application Firewall para proteção Layer 7. Regras personalizadas, gestão de políticas e mitigação de ataques e abusos em tempo real.',
            sobre_expertise2_title: 'Pentest & Offensive Security',
            sobre_expertise2_text: 'Testes de invasão manuais com foco em vulnerabilidades de negócio. Relatórios acionáveis, reprovações e remediação guiada pelo nosso time.',
            sobre_expertise3_title: 'IAM & Segurança de Identidades',
            sobre_expertise3_text: 'Projetos e avaliações de identidade e acesso. Governança de privilégios, Zero Trust, MFA e redução de risco em ambientes on-premise, cloud e híbridos.',
            sobre_expertise4_title: 'AppSec & DevSecOps',
            sobre_expertise4_text: 'Integração de segurança no ciclo de vida de desenvolvimento. Code review, SAST/DAST, políticas de segurança e cultura AppSec orientada a resultados.',
            sobre_cta_label: 'Vamos conversar?',
            sobre_cta_title: 'Converse com o time<br>e descubra como<br>podemos <span class="text-accent">ajudar.</span>',
            sobre_cta_text: 'Fale com um especialista e descubra como<br>podemos fortalecer a segurança<br>da sua empresa.',
            value1_title: 'Antecipar, não reagir',
            value1_text: 'Atuamos antes do incidente. Identificamos fraquezas, fortalecemos controles e prevenimos falhas antes que se tornem brechas.',
            value2_title: 'Defesa em profundidade',
            value2_text: 'Camadas de proteção pensadas para a sua realidade. Sem soluções de prateleira, sem configurações genéricas.',
            value3_title: 'Visibilidade total',
            value3_text: 'O que não é visível não é gerenciável. Entregamos clareza sobre sua superfície de ataque e pontos cegos.',
            value4_title: 'Melhoria contínua',
            value4_text: 'Segurança não é ponto de chegada. Evoluimos junto com seu negócio, adaptando controles ao novo cenário.',
            expertise1_title: 'WAF & Proteção de Aplicações',
            expertise1_text: 'Implementação e hardening de Web Application Firewall para proteção Layer 7. Regras personalizadas, gestão de políticas e mitigação de ataques e abusos em tempo real.',
            expertise2_title: 'Pentest & Offensive Security',
            expertise2_text: 'Testes de invasão manuais com foco em vulnerabilidades de negócio. Relatórios acionáveis, reprovações e remediação guiada pelo nosso time.',
            expertise3_title: 'IAM & Segurança de Identidades',
            expertise3_text: 'Projetos e avaliações de identidade e acesso. Governança de privilégios, Zero Trust, MFA e redução de risco em ambientes on-premise, cloud e híbridos.',
            expertise4_title: 'AppSec & DevSecOps',
            expertise4_text: 'Integração de segurança no ciclo de vida de desenvolvimento. Code review, SAST/DAST, políticas de segurança e cultura AppSec orientada a resultados.',
            // Privacy page
            privacy_page_title: 'Política de Privacidade — Kaien Security',
            privacy_tagline: 'Legal',
            privacy_title: 'Política de<br><span class="text-accent">Privacidade.</span>',
            privacy_lead: 'Como coletamos, usamos e protegemos<br>seus dados pessoais.',
            privacy_sec1_title: '1. Coleta de Dados',
            privacy_sec1_text: 'Coletamos dados pessoais que você nos fornece voluntariamente ao entrar em contato, preencher formulários, solicitar serviços ou se inscrever em nossa newsletter. Isso inclui nome, e-mail, empresa, cargo e informações de contato. Também coletamos automaticamente dados de navegação como endereço IP, tipo de navegador, páginas visitadas e tempo de permanência no site.',
            privacy_sec2_title: '2. Finalidade da Coleta',
            privacy_sec2_text: 'Utilizamos seus dados para: responder a solicitações de contato; fornecer e personalizar nossos serviços de consultoria; enviar comunicados e atualizações relevantes; melhorar a experiência do nosso site e serviços; cumprir obrigações legais e regulatórias.',
            privacy_sec3_title: '3. Armazenamento e Segurança',
            privacy_sec3_text: 'Seus dados são armazenados em sistemas seguros com controles de acesso restrito. Utilizamos criptografia, firewalls e procedimentos de segurança para proteger suas informações contra acesso não autorizado, perda ou alteração. Os dados são retidos apenas pelo tempo necessário para cumprir as finalidades declaradas.',
            privacy_sec4_title: '4. Compartilhamento de Dados',
            privacy_sec4_text: 'Não vendemos ou compartilhamos seus dados pessoais com terceiros para fins de marketing. Podemos compartilhar informações apenas com parceiros de infraestrutura (hospedagem, análise de site) que possuem compromissos contratuais de proteção de dados, ou quando exigido por lei.',
            privacy_sec5_title: '5. Cookies e Tecnologias de Rastreamento',
            privacy_sec5_text: 'Nosso site pode utilizar cookies e tecnologias semelhantes para melhorar a experiência de navegação, analisar o uso do site e personalizar o conteúdo. Você pode controlar a aceitação de cookies através das configurações do seu navegador.',
            privacy_sec6_title: '6. Seus Direitos',
            privacy_sec6_text: 'Você tem o direito de acessar, corrigir ou solicitar a exclusão dos seus dados pessoais. Pode também revogar o consentimento a qualquer momento, solicitar a portabilidade de dados ou se opor ao processamento. Para exercer esses direitos, entre em contato pelo e-mail contact@kaiensecurity.com.',
            privacy_sec7_title: '7. Alterações nesta Política',
            privacy_sec7_text: 'Esta política pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou exigências legais. A data da última atualização será indicada no topo desta página. Recomendamos que você revise esta política periodicamente.',
            privacy_sec8_title: '8. Contato',
            privacy_sec8_text: 'Caso tenha dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados, entre em contato conosco pelo e-mail contact@kaiensecurity.com.',
            privacy_updated: '<strong>Última atualização: Maio de 2026.</strong>',
            // WhatsApp button
            whatsapp_text: 'Falar com especialista',
            // Terms page
            terms_page_title: 'Termos de Uso — Kaien Security',
            terms_tagline: 'Legal',
            terms_title: 'Termos de<br><span class="text-accent">Uso.</span>',
            terms_lead: 'Condições de utilização do nosso site<br>e serviços.',
            terms_sec1_title: '1. Aceitação dos Termos',
            terms_sec1_text: 'Ao acessar e utilizar o site da Kaien Security, você concorda com estes Termos de Uso. Se você não concorda com qualquer parte destes termos, não utilize nosso site ou serviços. Reservamo-nos o direito de atualizar estes termos a qualquer momento, sendo sua responsabilidade revisar periodicamente esta página.',
            terms_sec2_title: '2. Serviços Oferecidos',
            terms_sec2_text: 'A Kaien Security oferece consultoria especializada em segurança de aplicações, incluindo WAF, Pentest, IAM e serviços relacionados. Os termos específicos de cada projeto são definidos em contratos individuais e podem incluir escopo, prazos, entregas e condições comerciais detalhadas.',
            terms_sec3_title: '3. Uso do Site',
            terms_sec3_text: 'Você concorda em utilizar este site apenas para fins lícitos e de acordo com estes termos. É proibido: usar o site de maneira que viole leis ou regulamentos; tentar acessar sistemas ou contas sem autorização; utilizar o conteúdo do site para fins comerciais sem autorização prévia; reproduzir, distribuir ou modificar o conteúdo sem permissão.',
            terms_sec4_title: '4. Propriedade Intelectual',
            terms_sec4_text: 'Todo o conteúdo deste site, incluindo textos, imagens, logotipos, gráficos, códigos e materiais audiovisuais, é de propriedade exclusiva da Kaien Security ou de seus licenciadores, protegido por leis de propriedade intelectual. Nenhuma parte deste site pode ser reproduzida sem autorização prévia e por escrito.',
            terms_sec5_title: '5. Limitação de Responsabilidade',
            terms_sec5_text: 'As informações fornecidas neste site são de caráter geral e não constituem aconselhamento profissional. A Kaien Security não se responsabiliza por perdas ou danos resultantes do uso das informações publicadas aqui. Os serviços prestados estão sujeitos aos termos específicos de cada contrato assinado.',
            terms_sec6_title: '6. Links Externos',
            terms_sec6_text: 'Este site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo, políticas de privacidade ou práticas de sites externos. O acesso a sites de terceiros é feito por sua conta e risco.',
            terms_sec7_title: '7. Modificações dos Termos',
            terms_sec7_text: 'Podemos modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. A data da última atualização será indicada ao final desta página.',
            terms_sec8_title: '8. Contato',
            terms_sec8_text: 'Para dúvidas sobre estes Termos de Uso, entre em contato conosco pelo e-mail contact@kaiensecurity.com.',
            terms_updated: '<strong>Última atualização: Maio de 2026.</strong>',
            // Service pages — common
            svc_label: 'Serviço',
            svc_back: 'Voltar',
            // WAF page
            waf_h1: 'WAF & Proteção de Aplicações',
            waf_desc: 'Implementação, hardening e gestão de WAF para proteção Layer 7 contra ataques e abusos.',
            waf_h3: 'Proteção avançada para suas aplicações web',
            waf_p1: 'Um Web Application Firewall (WAF) é a primeira linha de defesa entre suas aplicações web e a internet. Ele inspeciona, filtra e monitora o tráfego HTTP/HTTPS, bloqueando tentativas de exploração como injections, cross-site scripting (XSS), abuso de APIs e muito mais.',
            waf_p2: 'Nosso serviço vai além da simples instalação. Analisamos a arquitetura das suas aplicações, configuramos políticas de segurança adequadas ao seu contexto e ajustamos as regras para minimizar falsos positivos enquanto maximizamos a proteção real.',
            waf_p3: 'Monitoramos continuamente o tráfego bloqueado, adaptamos as regras conforme a evolução das ameaças e fornecemos métricas claras sobre a eficiência da proteção, permitindo que você tome decisões baseadas em dados concretos.',
            waf_p4: 'Trabalhamos com as principais soluções de mercado, incluindo WAFs baseados em nuvem e on-premise, garantindo que a solução se encaixe na sua infraestrutura e nos seus objetivos de negócio.',
            waf_del1: 'Análise de arquitetura e mapeamento das aplicações expostas',
            waf_del2: 'Implementação e configuração do WAF conforme o perfil de risco',
            waf_del3: 'Tuning de regras para reduzir falsos positivos',
            waf_del4: 'Monitoramento contínuo do tráfego e adaptação das políticas',
            waf_del5: 'Relatórios e métricas sobre ataques bloqueados',
            waf_proc1_title: 'Diagnóstico',
            waf_proc1_text: 'Mapeamos todas as aplicações expostas, analisamos a arquitetura atual e identificamos os pontos de entrada que exigem proteção imediata.',
            waf_proc2_title: 'Implementação',
            waf_proc2_text: 'Configuramos o WAF com políticas personalizadas, ajustamos as regras conforme o comportamento das aplicações e validamos a eficácia com testes controlados.',
            waf_proc3_title: 'Monitoramento',
            waf_proc3_text: 'Monitoramos o tráfego continuamente, refinamos as regras com base nos ataques reais e fornecemos relatórios periódicos sobre o estado da proteção.',
            waf_cta_label: 'Pronto para proteger?',
            waf_cta_title: 'Vamos blindar suas<br><span class="text-accent">aplicações web.</span>',
            waf_cta_text: 'Fale com um especialista e descubra como<br>podemos ajudar sua organização.',
            // Pentest page
            pentest_h1: 'Pentest & Offensive Security',
            pentest_desc: 'Testes de invasão manuais para identificar vulnerabilidades reais e fortalecer sua superfície de ataque.',
            pentest_h3: 'Testes de invasão com profundidade técnica',
            pentest_p1: 'Nossos testes de penetração são realizados manualmente por especialistas, sem depender apenas de scanners automatizados. Cada teste é planejado para simular um atacante real, com objetivos claros e escopo definido, para descobrir falhas que ferramentas automáticas não identificam.',
            pentest_p2: 'Avaliamos aplicações web, APIs, infraestrutura de rede e sistemas internos, cobrindo vetores de ataque externos e internos. Cada descoberta é validada com prova de conceito, garantindo que o relatório contenha apenas vulnerabilidades reais e ação.',
            pentest_p3: 'Entregamos relatórios técnicos detalhados para sua equipe de engenharia e relatórios executivos para decisões estratégicas. Além disso, fornecemos recomendações priorizadas de mitigação para que suas equipes possam agir de forma eficiente.',
            pentest_del1: 'Mapeamento completo da superfície de ataque',
            pentest_del2: 'Testes de invasão manuais com prova de conceito',
            pentest_del3: 'Identificação e validação de vulnerabilidades',
            pentest_del4: 'Relatório técnico e executivo detalhados',
            pentest_del5: 'Retesta após correções para validação',
            pentest_proc1_title: 'Planejamento',
            pentest_proc1_text: 'Definimos o escopo, os alvos e os objetivos do teste. Alinhamos as regras de engajamento e preparamos o ambiente para garantir que o teste seja seguro e produtivo.',
            pentest_proc2_title: 'Execução',
            pentest_proc2_text: 'Realizamos os testes de invasão manualmente, explorando vetores de ataque externos e internos, validando cada descoberta com prova de conceito documentada.',
            pentest_proc3_title: 'Relatório',
            pentest_proc3_text: 'Entregamos relatórios técnicos e executivos com recomendações priorizadas, e realizamos retestas para validar as correções implementadas.',
            pentest_cta_label: 'Pronto para testar?',
            pentest_cta_title: 'Descubra suas<br><span class="text-accent">vulnerabilidades reais.</span>',
            pentest_cta_text: 'Fale com um especialista e descubra como<br>podemos ajudar sua organização.',
            // IAM page
            iam_h1: 'IAM & Segurança de Identidades',
            iam_desc: 'Projetos e avaliações de identidade e acesso para reduzir riscos e garantir o princípio do menor privilégio.',
            iam_h3: 'Identidade como novo perímetro de segurança',
            iam_p1: 'Com a migração para nuvem e o trabalho remoto, a identidade se tornou o novo perímetro de segurança. Gerenciar quem tem acesso a o quê é essencial para proteger dados sensíveis e garantir conformidade regulatória.',
            iam_p2: 'Realizamos avaliações completas de identidade e acesso, mapeando contas, privilégios e fluxos de aprovisionamento. Identificamos acessos excessivos, contas órfãs e falhas nos processos de lifecycle que podem resultar em brechas de segurança.',
            iam_p3: 'Projetamos e implementamos soluções de IAM que automatizam o provisioning e deprovisionamento, garantem o princípio do menor privilégio e facilitam a auditoria. Trabalhamos com soluções como Active Directory, Azure AD, Okta e One Identity Manager.',
            iam_del1: 'Avaliação completa de identidade e acesso',
            iam_del2: 'Implementação do princípio do menor privilégio',
            iam_del3: 'Governança de acessos e lifecycle',
            iam_del4: 'Gestão de privilégios e acessos especiais',
            iam_del5: 'Relatórios de conformidade e auditoria',
            iam_proc1_title: 'Levantamento',
            iam_proc1_text: 'Mapeamos todas as identidades, sistemas e acessos existentes. Entendemos os processos atuais de provisioning, aprovação e revogação de acessos.',
            iam_proc2_title: 'Projeto',
            iam_proc2_text: 'Desenhamos a arquitetura de IAM ideal para sua organização, definindo políticas de acesso, fluxos de aprovisionamento e controles de segurança.',
            iam_proc3_title: 'Implementação',
            iam_proc3_text: 'Implementamos as soluções projetadas, automatizando processos, garantindo o menor privilégio e validando com testes e auditorias.',
            iam_cta_label: 'Pronto para fortalecer?',
            iam_cta_title: 'Controle quem tem<br><span class="text-accent">acesso ao que importa.</span>',
            iam_cta_text: 'Fale com um especialista e descubra como<br>podemos ajudar sua organização.',
            // Phishing page
            phishing_h1: 'Phishing & Engenharia Social',
            phishing_desc: 'Campanhas simuladas de phishing para avaliar e fortalecer a conscientização contra ataques sociais.',
            phishing_h3: 'A superfície humana de ataque',
            phishing_p1: 'A maioria dos incidentes de segurança começa com um e-mail. Phishing, spear phishing e ataques de engenharia social exploram a natureza humana, não falhas técnicas. Por mais robusto que seja seu ambiente técnico, um clique errado pode comprometer toda a organização.',
            phishing_p2: 'Realizamos campanhas simuladas de phishing personalizadas para sua organização, criando cenários realistas que testam a consciência e a reação dos colaboradores. Cada campanha é desenhada para refletir técnicas reais usadas por atacantes, sem causar impacto negativo ao negócio.',
            phishing_p3: 'Medimos taxa de cliques, taxa de informações sensíveis e outros indicadores que revelam a postura da sua organização. Com esses dados, criamos programas de conscientização direcionados que realmente fazem diferença.',
            phishing_del1: 'Campanhas simuladas de phishing personalizadas',
            phishing_del2: 'Avaliação de consciência e taxa de engajamento',
            phishing_del3: 'Redução da superfície humana de ataque',
            phishing_del4: 'Relatórios e métricas detalhadas de engajamento',
            phishing_del5: 'Programas de reforço e conscientização contínua',
            phishing_proc1_title: 'Planejamento',
            phishing_proc1_text: 'Definimos o público-alvo, cenários e nível de complexidade da campanha. Alinhamos com sua equipe de segurança para garantir um teste seguro e produtivo.',
            phishing_proc2_title: 'Campanha',
            phishing_proc2_text: 'Executamos as campanhas de phishing simuladas com cenários realistas, monitorando em tempo real as interações e coletando métricas detalhadas.',
            phishing_proc3_title: 'Conscientização',
            phishing_proc3_text: 'Entregamos relatórios e criamos programas de conscientização direcionados. Campanhas repetidas medem a evolução da maturidade.',
            phishing_cta_label: 'Pronto para testar?',
            phishing_cta_title: 'Descubra o quanto sua equipe<br><span class="text-accent">está preparada.</span>',
            phishing_cta_text: 'Fale com um especialista e descubra como<br>podemos ajudar sua organização.',
            // Educação page
            educacao_h1: 'Educação em Segurança da Informação',
            educacao_desc: 'Programas de treinamento e aprendizado em segurança da informação para elevar a maturidade da sua organização.',
            educacao_h3: 'Segurança começa com conhecimento',
            educacao_p1: 'A melhor defesa técnica do mundo não é suficiente se as pessoas não sabem como se proteger. Programas de educação em segurança transformam a organização, criando uma cultura onde a segurança é parte do dia a dia e não um obstáculo.',
            educacao_p2: 'Desenvolvemos programas de treinamento customizados para diferentes públicos, desde colaboradores gerais até equipes técnicas e líderes. Cada programa é desenhado para o nível e as necessidades específicas da sua organização, garantindo relevância e engajamento.',
            educacao_p3: 'Nossos workshops são práticos e interativos, com cenários do mundo real, simulações e exercícios que reforçam o aprendizado. Trabalhamos com conteúdos atualizados que refletem as ameaças e técnicas mais recentes do cenário de segurança.',
            educacao_del1: 'Treinamentos customizados em segurança',
            educacao_del2: 'Workshops práticos para equipes técnicas e de negócio',
            educacao_del3: 'Material didático exclusivo e atualizado',
            educacao_del4: 'Mensuração de maturidade e avaliações',
            educacao_del5: 'Programas de aprendizado contínuo',
            educacao_proc1_title: 'Diagnóstico',
            educacao_proc1_text: 'Avaliamos o nível atual de conhecimento e a maturidade da organização em segurança. Identificamos lacunas e necessidades específicas de cada público.',
            educacao_proc2_title: 'Customização',
            educacao_proc2_text: 'Desenvolvemos conteúdo personalizado para cada público, com exemplos relevantes, cenários práticos e linguagem adequada ao nível da audiência.',
            educacao_proc3_title: 'Execução',
            educacao_proc3_text: 'Realizamos os treinamentos e workshops, medindo a eficácia com avaliações e indicadores. Acompanhamos a evolução da maturidade ao longo do tempo.',
            educacao_cta_label: 'Pronto para educar?',
            educacao_cta_title: 'Eleve a maturidade<br><span class="text-accent">da sua organização.</span>',
            educacao_cta_text: 'Fale com um especialista e descubra como<br>podemos ajudar sua organização.',
            // Service pages common
            deliverables_title: 'Entregáveis',
            process_label: 'Como trabalhamos',
            process_title: 'Nosso processo',
            // Nav service pages
            nav_waf: 'WAF',
            nav_pentest: 'Pentest',
            nav_iam: 'IAM',
            nav_phishing: 'Phishing',
            nav_educacao: 'Educação',
            nav_sobre: 'Sobre',
            footer_svc4: 'Phishing & Engenharia Social',
            footer_svc5: 'Educação em Segurança',
            whatsapp_float: 'Falar com especialista',
            // Contato page
            contato_label: 'Contato',
            contato_h1: 'Fale com um especialista',
            contato_desc: 'Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas úteis.',
            contato_info_title: 'Por que entrar em contato?',
            contato_info_p1: 'Seja para uma avaliação inicial, um projeto de segurança ou uma dúvida técnica, nosso time está preparado para ajudar sua organização a encontrar a melhor solução.',
            contato_info_p2: 'Também é possível nos contatar diretamente pelos canais abaixo.',
            contato_email_label: 'E-mail',
            contato_local_label: 'Localização',
            contato_horario_label: 'Horário',
            contato_horario_text: 'Seg a Sex, 9h às 18h',
            contato_nome_label: 'Nome completo',
            contato_nome_placeholder: 'Seu nome',
            contato_email_placeholder: 'E-mail profissional',
            contato_email_input_placeholder: 'seu@email.com',
            contato_empresa_label: 'Empresa',
            contato_empresa_placeholder: 'Nome da empresa',
            contato_servico_label: 'Serviço de interesse',
            contato_servico_default: 'Selecione um serviço',
            contato_outro: 'Outro',
            contato_mensagem_label: 'Mensagem',
            contato_mensagem_placeholder: 'Descreva brevemente o que precisa',
            contato_enviar: 'Enviar mensagem',
        },
        en: {
            skip_link: 'Skip to main content',
            nav_servicos: 'Services',
            nav_sobre: 'About',
            nav_abordagem: 'Approach',
            nav_insights: 'Insights',
            nav_contato: 'Contact',
            nav_label: 'Main navigation',
            mobile_label: 'Mobile navigation',
            hero_tagline: 'AppSec, WAF, IAM, Pentest',
            hero_title: 'Strategic protection<br>for <span class="text-accent">applications</span><br>that drive business.',
            hero_description: 'Specialized consulting in application security,<br>WAF, Pentest and IAM to reduce risks, strengthen your<br>architecture and ensure resilience at scale.',
            hero_prevenir: 'Prevent',
            hero_proteger: 'Protect',
            hero_detectar: 'Detect',
            hero_evoluir: 'Evolve',
            cta_talk: 'Talk to an expert',
            hero_btn_services: 'Our services',
            trust_label: 'Companies that trust Kaien Security',
            services_label: 'Services',
            services_title: 'Technical solutions.<br><span class="text-accent">Real</span> impact.',
            services_lead: 'We operate on the critical layers of your application<br>with technical depth and a consultive approach.',
            svc1_title: 'WAF & Application Protection',
            svc1_desc: 'Implementation, hardening and management of WAF for Layer 7\nprotection against attacks and abuse.',
            svc2_title: 'Pentest & Offensive Security',
            svc2_desc: 'Manual penetration testing to identify real vulnerabilities\nand strengthen your attack surface.',
            svc3_title: 'IAM & Identity Security',
            svc3_desc: 'Identity and access projects and assessments to reduce risks\nand ensure the principle of least privilege.',
            svc4_title: 'Phishing & Social Engineering',
            svc4_desc: 'Simulated phishing campaigns to assess and strengthen\nyour organization\'s awareness against social attacks.',
            svc5_title: 'Information Security Education',
            svc5_desc: 'Training and learning programs in information security\nto elevate your organization\'s maturity level.',
            saiba_mais: 'Learn more',
            approach_label: 'Approach',
            approach_title: 'Depth that builds<br><span class="text-accent">trust.</span>',
            feat1_title: 'Real risk focus',
            feat1_text: 'We prioritize what truly matters for your business.',
            feat2_title: 'Technical and practical vision',
            feat2_text: 'Applicable solutions, aligned with your architecture.',
            feat3_title: 'Full transparency',
            feat3_text: 'Clear and objective communication at every step.',
            feat4_title: 'Continuous partnership',
            feat4_text: 'We act as an extension of your team, not just a vendor.',
            cta_label: 'Ready to strengthen?',
            cta_title: 'Let us raise the level of<br>your <span class="text-accent">application</span> security.',
            cta_text: 'Talk to an expert and discover how<br>we can help your company evolve<br>with more security.',
            footer_desc: 'Specialized consulting in WAF, Pentest and IAM<br>for companies building the future on the web.',
            footer_servicos: 'Services',
            footer_empresa: 'Company',
            footer_contato: 'Contact',
            footer_svc1: 'WAF & Application Protection',
            footer_svc2: 'Pentest & Offensive Security',
            footer_svc3: 'IAM & Identity Security',
            footer_sobre: 'About',
            footer_abordagem: 'Approach',
            footer_insights: 'Insights',
            footer_contato_link: 'Contact',
            footer_copy: '\u00a9 2026 Kaien Security. All rights reserved.',
            footer_rights: '\u00a9 2026 Kaien Security. All rights reserved.',
            footer_privacy: 'Privacy Policy',
            footer_terms: 'Terms of Use',
            lang_label: 'Change language',
            page_title: 'Kaien Security — Application Security Consulting',
            // About page
            sobre_tagline: 'About us',
            sobre_title: 'Security with<br><span class="text-accent">purpose</span><br>and depth.',
            sobre_lead: 'We are a team of specialists focused on protecting<br>applications and identities with technique, strategy<br>and business vision.',
            sobre_story_title: 'We were born from the <span class="text-accent">real need</span><br>to protect what matters.',
            sobre_story_p1: 'Kaien Security was born from the realization that most companies treat security generically — checklists, inflated reports, and solutions that do not adapt to business reality.',
            sobre_story_p2: 'Our difference is simple: we act with technical depth and closeness to your team. We understand your architecture, your real risks, and deliver solutions that work — not just dusty documents.',
            sobre_story_p3: 'From application protection with WAF to manual penetration testing and IAM projects, each engagement is treated with the same rigor and attention we would give to our own business.',
            sobre_values_label: 'Values',
            sobre_values_title: 'What <span class="text-accent">drives</span> us.',
            sobre_expertise_label: 'Expertise',
            sobre_expertise_title: 'Technical pillars<br>that <span class="text-accent">deliver</span> results.',
            sobre_expertise1_title: 'WAF & Application Protection',
            sobre_expertise1_text: 'Implementation and hardening of Web Application Firewall for Layer 7 protection. Custom rules, policy management and real-time attack and abuse mitigation.',
            sobre_expertise2_title: 'Pentest & Offensive Security',
            sobre_expertise2_text: 'Manual penetration testing focused on business vulnerabilities. Actionable reports, retests, and remediation guided by our team.',
            sobre_expertise3_title: 'IAM & Identity Security',
            sobre_expertise3_text: 'Identity and access projects and assessments. Privilege governance, Zero Trust, MFA, and risk reduction in on-premise, cloud, and hybrid environments.',
            sobre_expertise4_title: 'AppSec & DevSecOps',
            sobre_expertise4_text: 'Security integration in the development lifecycle. Code review, SAST/DAST, security policies, and results-driven AppSec culture.',
            sobre_cta_label: "Let's talk?",
            sobre_cta_title: 'Talk to the team<br>and discover how<br>we can <span class="text-accent">help.</span>',
            sobre_cta_text: 'Talk to an expert and discover how<br>we can strengthen the security<br>of your company.',
            value1_title: 'Anticipate, not react',
            value1_text: 'We act before the incident. We identify weaknesses, strengthen controls and prevent failures before they become vulnerabilities.',
            value2_title: 'Defense in depth',
            value2_text: 'Protection layers designed for your reality. No off-the-shelf solutions, no generic configurations.',
            value3_title: 'Full visibility',
            value3_text: 'What is not visible is not manageable. We deliver clarity on your attack surface and blind spots.',
            value4_title: 'Continuous improvement',
            value4_text: 'Security is not a destination. We evolve with your business, adapting controls to the new scenario.',
            expertise1_title: 'WAF & Application Protection',
            expertise1_text: 'Implementation and hardening of Web Application Firewall for Layer 7 protection. Custom rules, policy management and real-time attack and abuse mitigation.',
            expertise2_title: 'Pentest & Offensive Security',
            expertise2_text: 'Manual penetration testing focused on business vulnerabilities. Actionable reports, retests, and remediation guided by our team.',
            expertise3_title: 'IAM & Identity Security',
            expertise3_text: 'Identity and access projects and assessments. Privilege governance, Zero Trust, MFA, and risk reduction in on-premise, cloud, and hybrid environments.',
            expertise4_title: 'AppSec & DevSecOps',
            expertise4_text: 'Security integration in the development lifecycle. Code review, SAST/DAST, security policies, and results-driven AppSec culture.',
            // Privacy page
            privacy_page_title: 'Privacy Policy — Kaien Security',
            privacy_tagline: 'Legal',
            privacy_title: 'Privacy<br><span class="text-accent">Policy.</span>',
            privacy_lead: 'How we collect, use, and protect<br>your personal data.',
            privacy_sec1_title: '1. Data Collection',
            privacy_sec1_text: 'We collect personal data that you voluntarily provide when contacting us, filling out forms, requesting services, or subscribing to our newsletter. This includes name, email, company, position, and contact information. We also automatically collect browsing data such as IP address, browser type, pages visited, and time spent on the site.',
            privacy_sec2_title: '2. Purpose of Collection',
            privacy_sec2_text: 'We use your data to: respond to contact requests; provide and personalize our consulting services; send relevant communications and updates; improve our website and services experience; comply with legal and regulatory obligations.',
            privacy_sec3_title: '3. Storage and Security',
            privacy_sec3_text: 'Your data is stored in secure systems with restricted access controls. We use encryption, firewalls, and security procedures to protect your information against unauthorized access, loss, or alteration. Data is retained only for as long as necessary to fulfill the stated purposes.',
            privacy_sec4_title: '4. Data Sharing',
            privacy_sec4_text: 'We do not sell or share your personal data with third parties for marketing purposes. We may share information only with infrastructure partners (hosting, site analytics) that have contractual data protection commitments, or when required by law.',
            privacy_sec5_title: '5. Cookies and Tracking Technologies',
            privacy_sec5_text: 'Our site may use cookies and similar technologies to improve browsing experience, analyze site usage, and personalize content. You can control cookie acceptance through your browser settings.',
            privacy_sec6_title: '6. Your Rights',
            privacy_sec6_text: 'You have the right to access, correct, or request deletion of your personal data. You may also revoke consent at any time, request data portability, or object to processing. To exercise these rights, contact us at contact@kaiensecurity.com.',
            privacy_sec7_title: '7. Changes to this Policy',
            privacy_sec7_text: 'This policy may be updated periodically to reflect changes in our practices or legal requirements. The last update date will be indicated at the top of this page. We recommend reviewing this policy periodically.',
            privacy_sec8_title: '8. Contact',
            privacy_sec8_text: 'If you have questions about this Privacy Policy or the processing of your data, contact us at contact@kaiensecurity.com.',
            privacy_updated: '<strong>Last updated: May 2026.</strong>',
            // Terms page
            terms_page_title: 'Terms of Use — Kaien Security',
            terms_tagline: 'Legal',
            terms_title: 'Terms of<br><span class="text-accent">Use.</span>',
            terms_lead: 'Conditions of use of our website<br>and services.',
            terms_sec1_title: '1. Acceptance of Terms',
            terms_sec1_text: 'By accessing and using the Kaien Security website, you agree to these Terms of Use. If you do not agree with any part of these terms, do not use our website or services. We reserve the right to update these terms at any time, and it is your responsibility to periodically review this page.',
            terms_sec2_title: '2. Services Offered',
            terms_sec2_text: 'Kaien Security offers specialized consulting in application security, including WAF, Pentest, IAM, and related services. Specific terms for each project are defined in individual contracts and may include detailed scope, deadlines, deliverables, and commercial conditions.',
            terms_sec3_title: '3. Use of the Site',
            terms_sec3_text: 'You agree to use this site only for lawful purposes and in accordance with these terms. It is prohibited to: use the site in a way that violates laws or regulations; attempt to access systems or accounts without authorization; use site content for commercial purposes without prior authorization; reproduce, distribute, or modify content without permission.',
            terms_sec4_title: '4. Intellectual Property',
            terms_sec4_text: 'All content on this site, including texts, images, logos, graphics, code, and audiovisual materials, is the exclusive property of Kaien Security or its licensors, protected by intellectual property laws. No part of this site may be reproduced without prior written authorization.',
            terms_sec5_title: '5. Limitation of Liability',
            terms_sec5_text: 'The information provided on this site is of a general nature and does not constitute professional advice. Kaien Security is not responsible for losses or damages resulting from the use of information published here. Services provided are subject to the specific terms of each signed contract.',
            terms_sec6_title: '6. External Links',
            terms_sec6_text: 'This site may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of external sites. Access to third-party sites is at your own risk.',
            terms_sec7_title: '7. Modifications to Terms',
            terms_sec7_text: 'We may modify these Terms of Use at any time. Changes will take effect immediately upon publication on the site. The last update date will be indicated at the end of this page.',
            terms_sec8_title: '8. Contact',
            terms_sec8_text: 'For questions about these Terms of Use, contact us at contact@kaiensecurity.com.',
            terms_updated: '<strong>Last updated: May 2026.</strong>',
            // WhatsApp button
            whatsapp_text: 'Talk to an expert',
            // Service pages — common
            svc_label: 'Service',
            svc_back: 'Back',
            // WAF page
            waf_h1: 'WAF & Application Protection',
            waf_desc: 'Implementation, hardening and management of WAF for Layer 7 protection against attacks and abuse.',
            waf_h3: 'Advanced protection for your web applications',
            waf_p1: 'A Web Application Firewall (WAF) is the first line of defense between your web applications and the internet. It inspects, filters, and monitors HTTP/HTTPS traffic, blocking exploitation attempts such as injections, cross-site scripting (XSS), API abuse, and more.',
            waf_p2: 'Our service goes beyond simple installation. We analyze your application architecture, configure security policies tailored to your context, and tune rules to minimize false positives while maximizing real protection.',
            waf_p3: 'We continuously monitor blocked traffic, adapt rules as threats evolve, and provide clear metrics on protection efficiency, enabling you to make data-driven decisions.',
            waf_p4: 'We work with leading market solutions, including cloud-based and on-premise WAFs, ensuring the solution fits your infrastructure and business objectives.',
            waf_del1: 'Architecture analysis and mapping of exposed applications',
            waf_del2: 'WAF implementation and configuration according to risk profile',
            waf_del3: 'Rule tuning to reduce false positives',
            waf_del4: 'Continuous traffic monitoring and policy adaptation',
            waf_del5: 'Reports and metrics on blocked attacks',
            waf_proc1_title: 'Diagnosis',
            waf_proc1_text: 'We map all exposed applications, analyze the current architecture, and identify entry points that require immediate protection.',
            waf_proc2_title: 'Implementation',
            waf_proc2_text: 'We configure the WAF with customized policies, adjust rules according to application behavior, and validate effectiveness with controlled tests.',
            waf_proc3_title: 'Monitoring',
            waf_proc3_text: 'We continuously monitor traffic, refine rules based on real attacks, and provide periodic reports on the state of protection.',
            waf_cta_label: 'Ready to protect?',
            waf_cta_title: 'Let us shield your<br><span class="text-accent">web applications.</span>',
            waf_cta_text: 'Talk to an expert and discover how<br>we can help your organization.',
            // Pentest page
            pentest_h1: 'Pentest & Offensive Security',
            pentest_desc: 'Manual penetration testing to identify real vulnerabilities and strengthen your attack surface.',
            pentest_h3: 'Penetration testing with technical depth',
            pentest_p1: 'Our penetration tests are performed manually by specialists, without relying solely on automated scanners. Each test is planned to simulate a real attacker, with clear objectives and defined scope, to discover flaws that automated tools cannot identify.',
            pentest_p2: 'We assess web applications, APIs, network infrastructure, and internal systems, covering external and internal attack vectors. Each finding is validated with proof of concept, ensuring the report contains only real, actionable vulnerabilities.',
            pentest_p3: 'We deliver detailed technical reports for your engineering team and executive reports for strategic decisions. Additionally, we provide prioritized mitigation recommendations so your teams can act efficiently.',
            pentest_del1: 'Complete mapping of the attack surface',
            pentest_del2: 'Manual penetration tests with proof of concept',
            pentest_del3: 'Vulnerability identification and validation',
            pentest_del4: 'Detailed technical and executive reports',
            pentest_del5: 'Retest after fixes for validation',
            pentest_proc1_title: 'Planning',
            pentest_proc1_text: 'We define the scope, targets, and test objectives. We align engagement rules and prepare the environment to ensure the test is safe and productive.',
            pentest_proc2_title: 'Execution',
            pentest_proc2_text: 'We perform penetration tests manually, exploring external and internal attack vectors, validating each finding with documented proof of concept.',
            pentest_proc3_title: 'Reporting',
            pentest_proc3_text: 'We deliver technical and executive reports with prioritized recommendations, and perform retests to validate implemented fixes.',
            pentest_cta_label: 'Ready to test?',
            pentest_cta_title: 'Discover your<br><span class="text-accent">real vulnerabilities.</span>',
            pentest_cta_text: 'Talk to an expert and discover how<br>we can help your organization.',
            // IAM page
            iam_h1: 'IAM & Identity Security',
            iam_desc: 'Identity and access projects and assessments to reduce risks and ensure the principle of least privilege.',
            iam_h3: 'Identity as the new security perimeter',
            iam_p1: 'With cloud migration and remote work, identity has become the new security perimeter. Managing who has access to what is essential to protect sensitive data and ensure regulatory compliance.',
            iam_p2: 'We perform complete identity and access assessments, mapping accounts, privileges, and provisioning flows. We identify excessive access, orphaned accounts, and lifecycle process failures that can result in security breaches.',
            iam_p3: 'We design and implement IAM solutions that automate provisioning and deprovisioning, guarantee the principle of least privilege, and facilitate auditing. We work with solutions such as Active Directory, Azure AD, Okta, and One Identity Manager.',
            iam_del1: 'Complete identity and access assessment',
            iam_del2: 'Implementation of the principle of least privilege',
            iam_del3: 'Access governance and lifecycle',
            iam_del4: 'Privilege and special access management',
            iam_del5: 'Compliance and audit reports',
            iam_proc1_title: 'Discovery',
            iam_proc1_text: 'We map all existing identities, systems, and accesses. We understand the current provisioning, approval, and access revocation processes.',
            iam_proc2_title: 'Design',
            iam_proc2_text: 'We design the ideal IAM architecture for your organization, defining access policies, provisioning flows, and security controls.',
            iam_proc3_title: 'Implementation',
            iam_proc3_text: 'We implement the designed solutions, automating processes, ensuring least privilege, and validating with tests and audits.',
            iam_cta_label: 'Ready to strengthen?',
            iam_cta_title: 'Control who has<br><span class="text-accent">access to what matters.</span>',
            iam_cta_text: 'Talk to an expert and discover how<br>we can help your organization.',
            // Phishing page
            phishing_h1: 'Phishing & Social Engineering',
            phishing_desc: 'Simulated phishing campaigns to assess and strengthen awareness against social attacks.',
            phishing_h3: 'The human attack surface',
            phishing_p1: 'Most security incidents start with an email. Phishing, spear phishing, and social engineering attacks exploit human nature, not technical flaws. No matter how robust your technical environment, one wrong click can compromise the entire organization.',
            phishing_p2: 'We run customized simulated phishing campaigns for your organization, creating realistic scenarios that test employee awareness and response. Each campaign is designed to reflect real techniques used by attackers, without negatively impacting the business.',
            phishing_p3: 'We measure click rates, sensitive data submission rates, and other indicators that reveal your organization\'s posture. With this data, we create targeted awareness programs that truly make a difference.',
            phishing_del1: 'Customized simulated phishing campaigns',
            phishing_del2: 'Awareness assessment and engagement rate',
            phishing_del3: 'Reduction of the human attack surface',
            phishing_del4: 'Detailed engagement reports and metrics',
            phishing_del5: 'Reinforcement and continuous awareness programs',
            phishing_proc1_title: 'Planning',
            phishing_proc1_text: 'We define the target audience, scenarios, and campaign complexity level. We align with your security team to ensure a safe and productive test.',
            phishing_proc2_title: 'Campaign',
            phishing_proc2_text: 'We execute simulated phishing campaigns with realistic scenarios, monitoring interactions in real time and collecting detailed metrics.',
            phishing_proc3_title: 'Awareness',
            phishing_proc3_text: 'We deliver reports and create targeted awareness programs. Repeated campaigns measure maturity evolution.',
            phishing_cta_label: 'Ready to test?',
            phishing_cta_title: 'Discover how prepared<br><span class="text-accent">your team is.</span>',
            phishing_cta_text: 'Talk to an expert and discover how<br>we can help your organization.',
            // Educação page
            educacao_h1: 'Information Security Education',
            educacao_desc: 'Training and learning programs in information security to elevate your organization\'s maturity.',
            educacao_h3: 'Security starts with knowledge',
            educacao_p1: 'The best technical defense in the world is not enough if people do not know how to protect themselves. Security education programs transform the organization, creating a culture where security is part of daily life and not an obstacle.',
            educacao_p2: 'We develop customized training programs for different audiences, from general employees to technical teams and leaders. Each program is designed for your organization\'s specific level and needs, ensuring relevance and engagement.',
            educacao_p3: 'Our workshops are practical and interactive, with real-world scenarios, simulations, and exercises that reinforce learning. We work with updated content that reflects the latest threats and techniques in the security landscape.',
            educacao_del1: 'Customized security training',
            educacao_del2: 'Practical workshops for technical and business teams',
            educacao_del3: 'Exclusive and updated educational material',
            educacao_del4: 'Maturity measurement and assessments',
            educacao_del5: 'Continuous learning programs',
            educacao_proc1_title: 'Diagnosis',
            educacao_proc1_text: 'We assess the current knowledge level and the organization\'s security maturity. We identify gaps and specific needs of each audience.',
            educacao_proc2_title: 'Customization',
            educacao_proc2_text: 'We develop personalized content for each audience, with relevant examples, practical scenarios, and language appropriate to the audience level.',
            educacao_proc3_title: 'Execution',
            educacao_proc3_text: 'We conduct training and workshops, measuring effectiveness with assessments and indicators. We track maturity evolution over time.',
            educacao_cta_label: 'Ready to educate?',
            educacao_cta_title: 'Elevate the maturity<br><span class="text-accent">of your organization.</span>',
            educacao_cta_text: 'Talk to an expert and discover how<br>we can help your organization.',
            // Service pages common
            deliverables_title: 'Deliverables',
            process_label: 'How we work',
            process_title: 'Our process',
            // Nav service pages
            nav_waf: 'WAF',
            nav_pentest: 'Pentest',
            nav_iam: 'IAM',
            nav_phishing: 'Phishing',
            nav_educacao: 'Education',
            nav_sobre: 'About',
            footer_svc4: 'Phishing & Social Engineering',
            footer_svc5: 'Security Education',
            whatsapp_float: 'Talk to an expert',
            // Contato page
            contato_label: 'Contact',
            contato_h1: 'Talk to an expert',
            contato_desc: 'Fill out the form below and our team will get back to you within 24 business hours.',
            contato_info_title: 'Why get in touch?',
            contato_info_p1: 'Whether for an initial assessment, a security project, or a technical question, our team is ready to help your organization find the best solution.',
            contato_info_p2: 'You can also contact us directly through the channels below.',
            contato_email_label: 'Email',
            contato_local_label: 'Location',
            contato_horario_label: 'Hours',
            contato_horario_text: 'Mon to Fri, 9am to 6pm',
            contato_nome_label: 'Full name',
            contato_nome_placeholder: 'Your name',
            contato_email_placeholder: 'Professional email',
            contato_email_input_placeholder: 'you@email.com',
            contato_empresa_label: 'Company',
            contato_empresa_placeholder: 'Company name',
            contato_servico_label: 'Service of interest',
            contato_servico_default: 'Select a service',
            contato_outro: 'Other',
            contato_mensagem_label: 'Message',
            contato_mensagem_placeholder: 'Briefly describe what you need',
            contato_enviar: 'Send message',
        }
    };

    // ============================================================
    // STATE — detect saved preference or browser language
    // ============================================================
    var currentLang;

    function detectLang() {
        try {
            var saved = localStorage.getItem('kaien-lang');
            if (saved === 'pt' || saved === 'en') {
                return saved;
            }
        } catch (e) {
            // localStorage unavailable
        }
        var browser = (navigator.language || navigator.userLanguage || 'pt').substr(0, 2);
        return browser === 'en' ? 'en' : 'pt';
    }

    currentLang = detectLang();

    // ============================================================
    // APPLY TRANSLATIONS
    // ============================================================
    function applyTranslations(lang) {
        var dict = translations[lang];
        if (!dict) return;

        var elements = document.querySelectorAll('[data-i18n]');
        var i, key, value;

        for (i = 0; i < elements.length; i++) {
            key = elements[i].getAttribute('data-i18n');
            value = dict[key];
            if (value) {
                // Check if element has inner HTML with tags (for titles with spans)
                if (value.indexOf('<') > -1) {
                    elements[i].innerHTML = value;
                } else {
                    elements[i].textContent = value;
                }
            }
        }

        // Translate placeholders
        var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        for (var i = 0; i < placeholders.length; i++) {
            var pKey = placeholders[i].getAttribute('data-i18n-placeholder');
            var pValue = dict[pKey];
            if (pValue) {
                placeholders[i].setAttribute('placeholder', pValue);
            }
        }

        // Translate select options
        var options = document.querySelectorAll('option[data-i18n]');
        for (var j = 0; j < options.length; j++) {
            var oKey = options[j].getAttribute('data-i18n');
            var oValue = dict[oKey];
            if (oValue) {
                options[j].textContent = oValue;
            }
        }

        // Update page title
        if (dict.page_title) {
            document.title = dict.page_title;
        }

        // Update html lang attribute
        document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

        // Update toggle button appearance
        var toggle = document.getElementById('lang-toggle');
        if (toggle) {
            var ptSpan = toggle.querySelector('.lang-toggle__pt');
            var enSpan = toggle.querySelector('.lang-toggle__en');
            if (lang === 'en') {
                enSpan.classList.add('active');
                ptSpan.classList.remove('active');
            } else {
                ptSpan.classList.add('active');
                enSpan.classList.remove('active');
            }
        }
    }

    // ============================================================
    // TOGGLE BUTTON
    // ============================================================
    function initToggle() {
        var toggle = document.getElementById('lang-toggle');
        if (!toggle) return;

        toggle.addEventListener('click', function () {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            try {
                localStorage.setItem('kaien-lang', currentLang);
            } catch (e) {
                // ignore
            }
            applyTranslations(currentLang);
        });
    }

    // ============================================================
    // INIT
    // ============================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            applyTranslations(currentLang);
            initToggle();
        });
    } else {
        applyTranslations(currentLang);
        initToggle();
    }
})();
