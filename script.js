/* =========================================================
   Claude Code Skills — From Data to Business Insights
   Vanilla JS: i18n (EN/PT-BR), navigation, reveal, counters,
   skill cards, chart modal. No dependencies.
   ========================================================= */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------
     1. Translations
     English is the source text in index.html (captured at load).
     Portuguese (Brazil) lives here.
     --------------------------------------------------------- */
  var PT = {
    pageTitle: "Claude Code Skills — De Dados a Insights de Negócio | Bruno Moreau",
    skip: "Pular para o conteúdo",
    navLabel: "Navegação principal",
    brandLabel: "Voltar ao topo",
    navOverview: "Visão geral",
    navStack: "Tecnologias",
    navProcess: "Desenvolvimento",
    navResults: "Resultados",
    navInsights: "Conclusões",
    langLabel: "Idioma",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",

    heroEyebrow: "Case prático · Claude Code · Python · Análise de negócios",
    heroTitle: "De Dados Brutos<br>a <em>Insights de Negócio</em>",
    heroSub: "Criando fluxos de trabalho reutilizáveis com IA para transformar dados empresariais em insights acionáveis.",
    ctaExplore: "Explorar o projeto",
    ctaResults: "Ver resultados",
    kpiLabel: "O projeto em números",
    kpiRecords: "registros de vendas",
    kpiColumns: "colunas",
    kpiSkills: "Skills principais",
    kpiCharts: "gráficos produzidos",

    problemTag: "O problema",
    problemTitle: "Dado bruto ainda não é informação.",
    problemText: "Empresas têm grandes volumes de dados comerciais, mas transformar registros brutos em análises confiáveis exige procedimentos consistentes de validação, processamento e visualização — todas as vezes.",
    approachTag: "A abordagem",
    approachTitle: "Escrever o procedimento uma vez. Reutilizar.",
    approachText: "O projeto usou Claude Code, Python e três Skills reutilizáveis — instruções escritas que padronizam como os dados são perfilados, visualizados e reportados — aplicadas a um ano de vendas de varejo.",

    stackTitle: "Tecnologias",
    stackLead: "Uma stack propositalmente enxuta. Cada ferramenta tem uma função clara.",
    techClaudeCode: "Ambiente de execução e desenvolvimento assistido por IA. Lê as regras do projeto, aciona as Skills e executa o Python.",
    evProject: "Regras do projeto: .claude/CLAUDE.md",
    techSkills: "Instruções reutilizáveis em arquivos SKILL.md que padronizam um procedimento: entradas, etapas, regras e formato de saída.",
    evSkills: "3 principais + 2 experimentais",
    techPython: "Processamento e visualização de dados. Executado inline (stdin) por decisão de projeto — as regras proíbem deixar arquivos de script.",
    evPython: "Sem arquivos .py, por regra",
    techPandas: "Manipulação e análise de dados: perfil, contagem de nulos, outliers por IQR, verificações de integridade e agregações.",
    evPandas: "Citado em data-profile-conventions",
    techViz: "<strong>Matplotlib</strong> é a biblioteca especificada no protocolo da chart-patterns (PNG, 150 dpi, sem plt.show()). <strong>Seaborn</strong> consta como disponível nas Skills; seu uso em um gráfico específico não é verificável só pelos resultados.",
    evViz: "Especificado vs. documentado",
    techCsv: "Formato do dataset: 500 pedidos de 2024 em 12 colunas — produto, categoria, região, vendedor, quantidade, preço, desconto, total, status e canal.",
    evCsv: "Fonte somente leitura",
    techMd: "Regras do projeto, definições das Skills e o relatório executivo final são Markdown puro — legível, versionável e reutilizável.",
    evMd: "CLAUDE.md · SKILL.md · relatório",

    processTitle: "Desenvolvimento",
    processLead: "Cinco etapas, de um CSV bruto a um relatório pronto para decisão.",
    flowDataset: "Dataset",
    flowCCsub: "lê as regras",
    flowSkillsSub: "procedimentos padrão",
    flowAnalysis: "Análise",
    flowOutputs: "Gráficos e Relatório",
    flowOutSub: "6 PNG · 1 .md",
    flowCap: "Skills são instruções, não agentes autônomos: o Claude Code as segue quando a tarefa corresponde.",

    tlh1: "Preparação dos dados",
    tl1: "Verificação de estrutura e qualidade do CSV. Correções aplicadas ao arquivo de referência: categoria “Acessórios” padronizada, 7 descontos recalculados e 3 valores totais corrigidos.",
    tlh2: "Skills reutilizáveis",
    tl2: "Três Skills principais criadas para padronizar o trabalho: <code>data-profile-conventions</code>, <code>chart-patterns</code> e <code>report-style</code>.",
    tlh3: "Análise de dados",
    tl3: "Exploração dos 500 pedidos por categoria, produto, região, vendedor, canal, status e mês.",
    tlh4: "Visualização de dados",
    tl4: "Seis gráficos produzidos a partir do dataset com um único padrão visual: laranja #D4631A + cinza escuro, títulos em negrito, eixos rotulados, grid sutil, 150 dpi.",
    tlh5: "Relatório executivo",
    tl5: "Descobertas organizadas em um relatório executivo: conclusão primeiro, depois a evidência, cada número ligado a uma fonte, limitações declaradas.",

    skillsTitle: "Arquitetura das Skills",
    skillsLead: "Cada Skill define um papel, um protocolo, regras absolutas e um formato de saída. Clique em um card para ler o trecho real.",
    badgeCore: "Principal",
    procLabel: "Procedimento",
    benefitLabel: "Benefício",
    showExcerpt: "Ver trecho do SKILL.md",
    hideExcerpt: "Ocultar trecho",
    s1Goal: "Perfila a qualidade de qualquer dataset CSV e reporta apenas fatos objetivos — sem recomendações de negócio.",
    s1Proc: "Dimensões e tipos → % de nulos → outliers por IQR → grafias de categorias → duplicatas, datas, valores impossíveis, fórmula das colunas derivadas.",
    s1Benefit: "Todo dataset é verificado do mesmo jeito antes de qualquer conclusão.",
    s2Goal: "Gera gráficos claros e padronizados com Python e matplotlib, escolhendo o tipo de gráfico a partir da pergunta.",
    s2Proc: "Ler os dados → escolher o tipo (distribuição, comparação, tempo, correlação) → executar Python inline → salvar PNG em output/charts/.",
    s2Benefit: "Seis gráficos que formam um conjunto coerente, com nomes de arquivo previsíveis.",
    s3Goal: "Transforma análises brutas em uma narrativa executiva clara para quem decide. Acionada apenas manualmente.",
    s3Proc: "Ler as análises → escolher os 3 a 5 insights mais relevantes → estrutura fixa → salvar em output/relatorio-executivo-[data].md.",
    s3Benefit: "Números concretos, fontes citadas e limitações em seção própria.",
    badgeExp: "Experimental",
    expLead: "Duas Skills iniciais usadas para testar o formato antes do conjunto principal — mantidas à parte em Conceitos/skill-experimento-1/.",
    exp1: "Resume qualquer texto em 3 bullets objetivos, em linguagem simples.",
    exp2: "Resume um texto colado ou um arquivo em exatamente 5 linhas de no máximo 20 palavras, sem acrescentar opinião.",

    resultsTitle: "Resultados",
    resultsLead: "Valores confirmados no relatório executivo e no dataset (vendas de 2024, 500 pedidos).",
    mGross: "Valor bruto registrado",
    vGross: "R$ 1.672.029,36",
    nGross: "Todos os 500 pedidos, qualquer status",
    mValid: "Receita válida",
    vValid: "R$ 1.427.333,56",
    nValid: "Entregues + Em trânsito",
    mOrders: "Pedidos válidos",
    nOrders: "326 entregues · 89 em trânsito",
    mLost: "Cancelados ou devolvidos",
    nLost: "60 cancelados · 25 devolvidos",
    mLostValue: "Valor de cancelamentos e devoluções",
    vLost: "R$ 244.695,80",
    nLostValue: "14,6% do valor bruto",
    statusCap: "Para onde foi o valor bruto de R$ 1,67 mi, por status do pedido",
    statusAria: "Entregue 68,6%, Em trânsito 16,8%, Cancelado 9,6%, Devolvido 5,0%",
    lgDelivered: "Entregue",
    lgDeliveredV: "R$ 1.146.226,64 · 326",
    lgTransit: "Em trânsito",
    lgTransitV: "R$ 281.106,92 · 89",
    lgCancel: "Cancelado",
    lgCancelV: "R$ 160.305,88 · 60",
    lgReturn: "Devolvido",
    lgReturnV: "R$ 84.389,92 · 25",
    defTitle: "Como ler estes números",
    def1: "<strong>Receita válida</strong> = pedidos <em>Entregues</em> + <em>Em trânsito</em>. Não é o mesmo que faturamento entregue (R$ 1.146.226,64, já confirmado).",
    def2: "<strong>Não é lucro.</strong> O dataset não tem custo dos produtos, então não é possível calcular margem nem lucro — apenas receita.",
    def3: "<strong>Os gráficos usam valores brutos</strong> (todos os status, como gerados pela chart-patterns). O relatório usa a receita válida. Por isso as participações podem diferir um pouco (ex.: Notebooks: 36,6% bruto vs 36,7% válido).",

    galleryTitle: "Galeria de gráficos",
    galleryLead: "Os seis PNGs originais, sem edição. Clique em um gráfico para ampliar.",
    open0: "Ampliar gráfico: Faturamento por categoria",
    open1: "Ampliar gráfico: Vendedores, volume × valor médio",
    open2: "Ampliar gráfico: Status dos pedidos por vendedor",
    open3: "Ampliar gráfico: Mapa de calor região × categoria",
    open4: "Ampliar gráfico: Faturamento mensal",
    open5: "Ampliar gráfico: Faturamento por canal de venda",
    alt0: "Gráfico de barras horizontais do faturamento bruto de 2024 por categoria: Notebooks R$ 612.538 (36,6%), Smartphones 20,2%, Tablets 17,8%, Monitores 12,0%, Periféricos 9,8%, Acessórios 3,5%.",
    alt1: "Gráfico de bolhas dos vendedores: número de pedidos no eixo x, valor médio por pedido no eixo y, tamanho da bolha igual ao faturamento total. Patrícia Gomes tem o maior valor médio e o maior total.",
    alt2: "Gráfico de barras empilhadas 100% do status dos pedidos por vendedor: entregue, em trânsito, devolvido e cancelado. Fernanda Costa tem a maior parcela de cancelados, 20%.",
    alt3: "Mapa de calor do faturamento bruto por região e categoria. Notebooks dominam no Sul, Centro-Oeste e Sudeste; no Norte, Smartphones superam Notebooks.",
    alt4: "Gráfico de linha do faturamento bruto mensal de 2024 com média mensal de R$ 139,3 mil. Pico em outubro, R$ 189,2 mil; mínimo em setembro, R$ 96,4 mil.",
    alt5: "Gráfico de rosca do faturamento bruto por canal de venda, total R$ 1,65 mi: Site 23,1%, Parceiro 22,7%, Loja Física 20,9%, Marketplace 19,5%, App 13,8%.",
    c0t: "Faturamento por categoria",
    c0d: "Notebooks lideram com R$ 612,5 mil, 36,6% do valor bruto. Acessórios fecham o ranking com 3,5%.",
    c1t: "Vendedores: volume × valor médio",
    c1d: "Patrícia Gomes combina o maior valor médio por pedido com o maior total. Diego Santos e Carlos Souza ganham em volume, com tíquete menor.",
    c2t: "Status dos pedidos por vendedor",
    c2d: "Fernanda Costa tem a maior parcela de cancelamentos (20%). Diego Santos tem mais pedidos ainda em trânsito (28%).",
    c3t: "Região × categoria",
    c3d: "Notebooks dominam em todas as regiões menos uma: no Norte, Smartphones (R$ 65,7 mil) vendem mais que Notebooks (R$ 53,2 mil).",
    c4t: "Faturamento mensal",
    c4d: "O valor bruto atinge o pico em outubro (R$ 189,2 mil), logo após o mínimo de setembro (R$ 96,4 mil). Na receita válida, outubro continua sendo o pico.",
    c5t: "Faturamento por canal de venda",
    c5d: "Cinco canais, nenhum dominante. O App tem a menor participação (13,8%) — e, segundo o relatório, a maior taxa de perda.",

    insightsTitle: "Insights de negócio",
    insightsLead: "Documentados no relatório executivo. Base: receita válida.",
    b1: "36,7%", b2: "24,1%", b3: "14,6%", b4: "8,8%", b5: "R$ 0", b6: "28,9%",
    i1t: "Notebooks sustentam a receita",
    i1d: "R$ 524.081,90 da receita válida. Um único produto, o Notebook Gamer X, responde sozinho por 17,7% — um risco de concentração.",
    i2t: "Canais não performam igual",
    i2d: "Parceiro e Site lideram com 46,1% da receita válida. O App tem a menor receita e perde 24,1% dos pedidos — quase o dobro do canal Parceiro (12,3%).",
    i3t: "Cancelamentos e devoluções",
    i3d: "R$ 244.695,80 do valor bruto perdidos: 60 pedidos cancelados (R$ 160.305,88) e 25 devolvidos (R$ 84.389,92).",
    i4t: "Pedidos sem vendedor",
    i4d: "44 registros sem vendedor: R$ 89.312,20 da receita válida (6,3%) não podem ser atribuídos — e esses pedidos têm a maior taxa de perda (27,3%).",
    i5t: "Sem custo, sem visão de lucro",
    i5d: "O dataset não tem custo dos produtos. Mostra o que mais vende, não o que é lucrativo — nenhuma margem ou lucro é afirmado.",
    i6t: "Muitos pedidos, pouca receita",
    i6d: "Acessórios são 28,9% dos pedidos válidos (120 de 415), mas só 3,5% da receita válida (R$ 49.380,28).",

    reportTag: "Relatório executivo · 15/11/2026",
    reportTitle: "Conclusão primeiro, evidência depois.",
    r1: "Sumário de vendas com números concretos e indicação de fonte ([F1], [F2], [F3]) em cada valor.",
    r2: "Veredito de qualidade: base confiável — sem duplicatas, sem datas inválidas, os 500 totais batem com quantidade × preço × (1 − desconto); 83 campos em branco em 3 colunas.",
    r3: "Recortes por categoria, produto, região, vendedor, canal e mês.",
    r4: "Seis alertas de risco, incluindo R$ 281.106,92 ainda em trânsito e 53 pedidos com descontos de 15–20%.",
    r5: "Limitações explícitas: sem custo, sem metas, um único ano, sem motivo de cancelamento, sem dados de cliente.",
    reportLink: "Abrir o relatório original (Markdown)",

    concTitle: "Principais conclusões",
    concLead: "O que este case demonstra, do ponto de vista técnico e de negócio.",
    kh1: "Fluxos reutilizáveis",
    k1: "Procedimentos repetitivos merecem instruções escritas e padronizadas. Uma Skill é escrita uma vez e aplicada do mesmo jeito sempre.",
    kh2: "Qualidade dos dados",
    k2: "Validar antes de concluir. O perfil dos dados revelou correções e campos vazios que, de outra forma, distorceriam os rankings.",
    kh3: "Automação e produtividade",
    k3: "Skills tornam os procedimentos mais consistentes: mesmas verificações, mesmo estilo de gráfico, mesma estrutura de relatório — menos retrabalho.",
    kh4: "Storytelling com dados",
    k4: "Seis gráficos e um relatório transformam 500 linhas em algo que um gestor lê em minutos.",
    kh5: "Tomada de decisão",
    k5: "Os indicadores apontam para perguntas concretas: dependência de produto, perdas no App, pedidos sem atribuição, receita ainda em trânsito.",
    kh6: "Organização técnica",
    k6: "Separação clara entre regras, Skills, dados de origem e resultados — com arquivos protegidos que nunca são modificados.",
    quote: "“O verdadeiro valor da IA não está apenas em gerar resultados. Está em construir fluxos confiáveis que transformam informação em decisões melhores.”",

    footerSub: "Um case prático de Bruno Moreau.",
    footerRepo: "Código-fonte",
    footerTop: "Voltar ao topo ↑",
    close: "Fechar",
    prev: "Gráfico anterior",
    next: "Próximo gráfico"
  };

  var EN_EXTRA = {
    pageTitle: document.title,
    menuOpen: "Open menu",
    menuClose: "Close menu",
    showExcerpt: "Show SKILL.md excerpt",
    hideExcerpt: "Hide excerpt"
  };

  var EN = {};
  var nodes = {
    text: document.querySelectorAll("[data-i18n]"),
    html: document.querySelectorAll("[data-i18n-html]"),
    aria: document.querySelectorAll("[data-i18n-aria]"),
    alt: document.querySelectorAll("[data-i18n-alt]")
  };

  // Capture English source text from the HTML
  nodes.text.forEach(function (el) { EN[el.getAttribute("data-i18n")] = el.textContent; });
  nodes.html.forEach(function (el) { EN[el.getAttribute("data-i18n-html")] = el.innerHTML; });
  nodes.aria.forEach(function (el) { EN[el.getAttribute("data-i18n-aria")] = el.getAttribute("aria-label"); });
  nodes.alt.forEach(function (el) { EN[el.getAttribute("data-i18n-alt")] = el.getAttribute("alt"); });
  Object.keys(EN_EXTRA).forEach(function (k) { EN[k] = EN_EXTRA[k]; });

  var DICT = { en: EN, pt: PT };
  var currentLang = "en";

  function t(key) {
    var d = DICT[currentLang];
    return (d && d[key] != null) ? d[key] : EN[key];
  }

  function applyLang(lang) {
    currentLang = DICT[lang] ? lang : "en";
    document.documentElement.lang = currentLang === "pt" ? "pt-BR" : "en";
    document.title = t("pageTitle");

    nodes.text.forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    nodes.html.forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
    nodes.aria.forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });
    nodes.alt.forEach(function (el) { el.setAttribute("alt", t(el.getAttribute("data-i18n-alt"))); });

    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === currentLang));
    });

    // Elements whose label depends on state
    document.querySelectorAll(".skill-toggle").forEach(function (btn) {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.textContent = t(open ? "hideExcerpt" : "showExcerpt");
    });
    syncMenuLabel();
    if (modal.isOpen) modal.render();

    try { localStorage.setItem("site-lang", currentLang); } catch (e) { /* storage unavailable */ }
  }

  function detectLang() {
    var param = null;
    try { param = new URLSearchParams(window.location.search).get("lang"); } catch (e) { /* ignore */ }
    if (param === "pt" || param === "en") return param;
    try {
      var saved = localStorage.getItem("site-lang");
      if (saved === "pt" || saved === "en") return saved;
    } catch (e) { /* ignore */ }
    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("pt") === 0 ? "pt" : "en";
  }

  /* ---------------------------------------------------------
     2. Header: mobile menu, scrolled state, progress, active link
     --------------------------------------------------------- */
  var header = document.querySelector(".site-header");
  var menuBtn = document.querySelector(".menu-toggle");
  var navList = document.getElementById("nav-links");
  var progressBar = document.getElementById("progress-bar");

  function syncMenuLabel() {
    var open = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-label", t(open ? "menuClose" : "menuOpen"));
  }
  function setMenu(open) {
    menuBtn.setAttribute("aria-expanded", String(open));
    navList.classList.toggle("open", open);
    syncMenuLabel();
  }
  menuBtn.addEventListener("click", function () {
    setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
  });
  navList.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navList.classList.contains("open")) { setMenu(false); menuBtn.focus(); }
  });

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      var y = window.scrollY;
      header.classList.toggle("scrolled", y > 8);
      var max = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.transform = "scaleX(" + (max > 0 ? Math.min(y / max, 1) : 0) + ")";
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Active section highlight
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  var sections = links.map(function (a) { return document.querySelector(a.getAttribute("href")); }).filter(Boolean);
  if ("IntersectionObserver" in window) {
    var activeObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = "#" + entry.target.id;
        links.forEach(function (a) {
          var on = a.getAttribute("href") === id;
          a.classList.toggle("active", on);
          if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { activeObs.observe(s); });
  }

  /* ---------------------------------------------------------
     3. Reveal on scroll + KPI counters + status bar
     --------------------------------------------------------- */
  function countUp(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    if (reduceMotion || !target) { el.textContent = String(target); return; }
    var start = null, dur = 1100;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * eased));
      if (p < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  var reveals = document.querySelectorAll(".reveal, .status-bar");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var revObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.classList.add("in");
        el.querySelectorAll("[data-count]").forEach(countUp);
        obs.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el, i) {
      // light stagger for siblings in grids
      var idx = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.transitionDelay = Math.min(idx, 6) * 60 + "ms";
      revObs.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------------------------------------------------------
     4. Skill cards: toggle real SKILL.md excerpts
     --------------------------------------------------------- */
  document.querySelectorAll("[data-skill]").forEach(function (card, i) {
    var btn = card.querySelector(".skill-toggle");
    var panel = card.querySelector(".skill-excerpt");
    var id = "skill-excerpt-" + (i + 1);
    panel.id = id;
    btn.setAttribute("aria-controls", id);
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", String(open));
      panel.hidden = !open;
      card.classList.toggle("open", open);
      btn.textContent = t(open ? "hideExcerpt" : "showExcerpt");
    });
  });

  /* ---------------------------------------------------------
     5. Chart modal (keyboard: Esc, ←, →; focus trap)
     --------------------------------------------------------- */
  var modalEl = document.getElementById("chart-modal");
  var modalImg = document.getElementById("modal-img");
  var modalTitle = document.getElementById("modal-title");
  var modalDesc = document.getElementById("modal-desc");
  var modalCount = document.getElementById("modal-count");
  var openers = Array.prototype.slice.call(document.querySelectorAll(".chart-open"));

  var modal = {
    isOpen: false,
    index: 0,
    lastFocus: null,
    render: function () {
      var btn = openers[this.index];
      var img = btn.querySelector("img");
      var cap = btn.parentNode.querySelector("figcaption");
      modalImg.src = img.getAttribute("src");
      modalImg.alt = img.getAttribute("alt");
      modalTitle.textContent = cap.querySelector("h4").textContent;
      modalDesc.textContent = cap.querySelector("p").textContent;
      modalCount.textContent = (this.index + 1) + " / " + openers.length;
    },
    open: function (i) {
      this.index = i;
      this.lastFocus = document.activeElement;
      this.render();
      modalEl.hidden = false;
      document.body.classList.add("modal-open");
      this.isOpen = true;
      modalEl.querySelector(".modal-close").focus();
    },
    close: function () {
      modalEl.hidden = true;
      document.body.classList.remove("modal-open");
      this.isOpen = false;
      if (this.lastFocus) this.lastFocus.focus();
    },
    go: function (d) {
      this.index = (this.index + d + openers.length) % openers.length;
      this.render();
    }
  };

  openers.forEach(function (btn, i) {
    btn.addEventListener("click", function () { modal.open(i); });
  });
  modalEl.addEventListener("click", function (e) {
    if (e.target.closest("[data-close]")) modal.close();
  });
  modalEl.querySelector(".prev").addEventListener("click", function () { modal.go(-1); });
  modalEl.querySelector(".next").addEventListener("click", function () { modal.go(1); });

  document.addEventListener("keydown", function (e) {
    if (!modal.isOpen) return;
    if (e.key === "Escape") { e.preventDefault(); modal.close(); }
    else if (e.key === "ArrowLeft") modal.go(-1);
    else if (e.key === "ArrowRight") modal.go(1);
    else if (e.key === "Tab") {
      var f = modalEl.querySelectorAll("button");
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------------------------------------------------------
     6. Language switch
     --------------------------------------------------------- */
  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
  });

  applyLang(detectLang());
})();
