/* Bascule de langue FR / EN.
   Le texte français de la page sert de référence : chaque bloc de texte est retrouvé
   dans le dictionnaire EN ci-dessous ; tout ce qui n'y figure pas reste identique. */
(function () {
  "use strict";
  var EN = {
  "H|Aller au contenu": "Skip to content",
  "H|À propos": "About",
  "H|Compétences": "Skills",
  "H|Projets": "Projects",
  "H|Parcours": "Background",
  "H|Me contacter": "Contact me",
  "T|Disponible immédiatement · Stage Data de 6 mois": "Available now · 6-month Data internship",
  "T|Bonjour, je suis": "Hi, I'm",
  "H|Future ingénieure Data &amp; Intelligence Artificielle": "Future Data &amp; Artificial Intelligence Engineer",
  "H|Étudiante en <strong>Master Ingénierie des Données &amp; IA</strong> à Paris Ynov Campus. Je conçois des <strong>pipelines de données fiables et automatisés</strong> et je les mets au service de cas d'usage analytiques et d'intelligence artificielle.": "<strong>Master's student in Data Engineering &amp; AI</strong> at Paris Ynov Campus. I build <strong>reliable, automated data pipelines</strong> and put them to work for analytics and artificial intelligence use cases.",
  "T|Voir mes projets": "View my projects",
  "T|Télécharger mon CV": "Download my CV (French)",
  "H|projets data réalisés": "data projects delivered",
  "H|expériences en entreprise": "professional experiences",
  "H|technologies maîtrisées": "technologies mastered",
  "H|langues parlées": "languages spoken",
  "H|01 · À propos": "01 · About",
  "T|Des données": "Reliable",
  "H|fiables": "data",
  "T|, au service de décisions": ", powering",
  "H|utiles": "better decisions",
  "H|Étudiante en <strong>Master Ingénierie des Données &amp; IA</strong> à Paris Ynov Campus, je recherche un <strong>stage de 6 mois en Data</strong> — Data Engineering, Data Analytics ou IA / Machine Learning — tous secteurs confondus.": "I'm a <strong>Master's student in Data Engineering &amp; AI</strong> at Paris Ynov Campus, looking for a <strong>6-month Data internship</strong> — Data Engineering, Data Analytics or AI / Machine Learning — in any industry.",
  "H|Je conçois des pipelines automatisés (Python, SQL, PostgreSQL, CI/CD) et je les relie à des usages concrets : modèles de Machine Learning, analyses statistiques et tableaux de bord Power BI.": "I design automated pipelines (Python, SQL, PostgreSQL, CI/CD) and connect them to real use cases: Machine Learning models, statistical analyses and Power BI dashboards.",
  "H|Ma première expérience en <strong>environnement bancaire réglementé</strong> chez Bank Al-Maghrib m'a appris que la qualité, la traçabilité et la fiabilité des données ne sont pas négociables.": "My first experience in a <strong>regulated banking environment</strong> at Bank Al-Maghrib (Morocco's central bank) taught me that data quality, traceability and reliability are non-negotiable.",
  "H|Rigoureuse": "Rigorous",
  "H|Autonome": "Autonomous",
  "H|Esprit d'équipe (Scrum)": "Team player (Scrum)",
  "H|Rigueur scientifique": "Scientific rigor",
  "H|Adaptabilité": "Adaptability",
  "H|Ingestion de fichiers hétérogènes, validation de schéma, contrôle qualité et chargement en base.": "Ingesting heterogeneous files, schema validation, quality checks and database loading.",
  "H|IA &amp; Machine Learning": "AI &amp; Machine Learning",
  "H|Détection de profils à risque, segmentation, tests statistiques et prévision.": "At-risk profile detection, segmentation, statistical testing and forecasting.",
  "H|Modélisation en étoile, mesures DAX et dashboards qui racontent une histoire.": "Star schema modeling, DAX measures and dashboards that tell a story.",
  "H|Qualité &amp; gouvernance": "Quality &amp; governance",
  "H|RBAC, journal d'audit et traçabilité, acquis en environnement réglementé.": "RBAC, audit logs and traceability, learned in a regulated environment.",
  "H|02 · Compétences": "02 · Skills",
  "T|Ma boîte à outils": "My",
  "H|data": "data toolkit",
  "H|Du fichier brut au tableau de bord, en passant par le modèle de Machine Learning.": "From raw files to dashboards, through Machine Learning models.",
  "H|POO": "OOP",
  "H|t de Student": "Student's t-test",
  "H|Chi-deux": "Chi-square",
  "T|BI & Visualisation": "BI & Visualization",
  "H|Modélisation en étoile": "Star schema modeling",
  "T|Bases de données": "Databases",
  "T|Qualité & gouvernance": "Quality & governance",
  "H|Validation de schéma": "Schema validation",
  "H|Contrôle qualité": "Quality control",
  "H|Journal d'audit": "Audit log",
  "H|Traçabilité": "Traceability",
  "T|DevOps & outils": "DevOps & tools",
  "H|Arabe": "Arabic",
  "H|Langue maternelle": "Native",
  "H|Français": "French",
  "H|Bilingue": "Bilingual",
  "H|Anglais": "English",
  "H|Conversationnel": "Conversational",
  "H|03 · Projets": "03 · Projects",
  "T|Des projets": "Hands-on",
  "H|concrets": "end-to-end",
  "T|, de bout en bout": " projects",
  "H|Pipelines, Machine Learning, BI et architectures de données.": "Pipelines, Machine Learning, BI and data architectures.",
  "H|Tous": "All",
  "H|Bases de données": "Databases",
  "H|Analyse de performance des étudiants": "Student performance analytics",
  "H|Pipeline ETL (CSV / Excel vers une base relationnelle de 8 tables) avec validation et nettoyage, KPI sur 300 étudiants, détection des profils à risque par <strong>Random Forest</strong> et segmentation <strong>KMeans</strong>, exposés via une API FastAPI et une interface React.": "ETL pipeline (CSV / Excel into an 8-table relational database) with validation and cleaning, KPIs on 300 students, at-risk profile detection with <strong>Random Forest</strong> and <strong>KMeans</strong> segmentation, served through a FastAPI API and a React front end.",
  "H|<b>300</b> étudiants": "<b>300</b> students",
  "H|<b>2</b> modèles ML": "<b>2</b> ML models",
  "H|Voir le code sur GitHub →": "View code on GitHub →",
  "H|ETL &amp; qualité": "ETL &amp; quality",
  "H|Moteur d'ingestion de données": "Data ingestion engine",
  "H|Pipeline ETL en Python qui parse des fichiers hétérogènes (XML, JSON, CSV), valide les schémas, contrôle la qualité et charge les données dans PostgreSQL.": "Python ETL pipeline that parses heterogeneous files (XML, JSON, CSV), validates schemas, checks data quality and loads the data into PostgreSQL.",
  "H|Challenge 48h": "48-hour challenge",
  "H|HARI — Plateforme RH propulsée par l'IA": "HARI — AI-powered HR platform",
  "H|Challenge YDays en équipe de 10 (Scrum). Rôle Data : modèle de données RH et KPI d'absentéisme et de turnover pour une plateforme sécurisée (RBAC, journal d'audit).": "YDays challenge in a team of 10 (Scrum). Data role: HR data model and absenteeism and turnover KPIs for a secure platform (RBAC, audit log).",
  "H|Modélisation": "Data modeling",
  "H|KPI RH": "HR KPIs",
  "H|Voir le code de l'équipe sur GitHub →": "View the team's code on GitHub →",
  "H|SpotifYnov — Persistance polyglotte": "SpotifYnov — Polyglot persistence",
  "H|Backend multi-bases : MongoDB pour les métadonnées, Cassandra pour les séries temporelles, Redis pour le cache et Neo4j pour les recommandations.": "Multi-database backend: MongoDB for metadata, Cassandra for time series, Redis for caching and Neo4j for recommendations.",
  "H|Analyse des ventes — Online Retail II": "Sales analysis — Online Retail II",
  "H|Analyse de 525 000 transactions réelles d'une boutique en ligne britannique : nettoyage (doublons, retours, clients manquants), chiffre d'affaires, top produits, panier moyen et saisonnalité des ventes.": "Analysis of 525,000 real transactions from a UK online store: cleaning (duplicates, returns, missing customers), revenue, top products, average basket and sales seasonality.",
  "H|<b>525K</b> lignes": "<b>525K</b> rows",
  "H|<b>×2</b> en novembre": "<b>×2</b> in November",
  "H|Nettoyage": "Data cleaning",
  "H|Dashboard Power BI — Analyse des ventes": "Power BI dashboard — Sales analysis",
  "H|Modèle en étoile (Ventes, Clients, Produits, Régions, Temps) construit à partir de CSV, mesures DAX et dashboard interactif.": "Star schema (Sales, Customers, Products, Regions, Time) built from CSV files, DAX measures and an interactive dashboard.",
  "H|<b>500</b> ventes": "<b>500</b> sales",
  "H|<b>33 %</b> du CA à Casablanca": "<b>33%</b> of revenue in Casablanca",
  "H|Schéma en étoile": "Star schema",
  "H|ETL Talend — Enrichissement &amp; qualité": "Talend ETL — Enrichment &amp; quality",
  "H|Job Talend qui fusionne des fichiers de transactions hétérogènes, les enrichit (devises, catégories, liste noire), isole les anomalies, produit un rapport de qualité envoyé par e-mail et alimente des rapports Power BI.": "Talend job that merges heterogeneous transaction files, enriches them (currencies, categories, blacklist), isolates anomalies, emails a data quality report and feeds Power BI reports.",
  "H|Plateforme de données sur la consommation électrique en France": "Data platform for electricity consumption in France",
  "H|Plateforme de bout en bout sur 12 régions : ingestion CSV / JSON, <strong>framework de qualité des données</strong> avec quarantaine, entrepôt en couches raw → staging → marts en SQL avancé, <strong>orchestrateur DAG</strong> avec reprises automatiques, <strong>prévision J+1</strong> par gradient boosting et <strong>API REST FastAPI</strong>, le tout testé, conteneurisé (Docker) et intégré en continu.": "End-to-end platform covering 12 regions: CSV / JSON ingestion, <strong>data quality framework</strong> with quarantine, layered raw → staging → marts warehouse in advanced SQL, <strong>DAG orchestrator</strong> with automatic retries, <strong>day-ahead forecasting</strong> with gradient boosting and a <strong>FastAPI REST API</strong> — fully tested, containerized (Docker) and continuously integrated.",
  "H|<b>210K</b> mesures horaires": "<b>210K</b> hourly readings",
  "H|<b>18</b> contrôles qualité": "<b>18</b> quality checks",
  "H|<b>2,2 %</b> d'erreur de prévision": "<b>2.2%</b> forecast error",
  "H|Voir les 8 autres projets": "Show 8 more projects",
  "H|Data Eng. &amp; IA": "Data Eng. &amp; AI",
  "H|Structuration et nettoyage de données BIM, inventaire numérique des matériaux et contribution à des solutions d'IA de classification.": "Structuring and cleaning BIM data, digital inventory of building materials and contribution to AI classification solutions.",
  "H|Données BIM": "BIM data",
  "H|Statistiques": "Statistics",
  "H|Analyse SLA e-commerce": "E-commerce SLA analysis",
  "H|Analyse statistique de 500 échantillons (t de Student, Chi-deux) pour identifier les goulots d'étranglement des serveurs.": "Statistical analysis of 500 samples (Student's t-test, chi-square) to identify server bottlenecks.",
  "H|Tests statistiques": "Statistical tests",
  "H|Administration BDD": "Database administration",
  "H|Administration MySQL": "MySQL administration",
  "H|Sécurisation d'un serveur MySQL 8 : rôles et moindre privilège, chiffrement AES des données sensibles, sauvegarde incrémentale par binary logs, supervision Grafana et alertes Alertmanager.": "Securing a MySQL 8 server: roles and least privilege, AES encryption of sensitive data, incremental backups via binary logs, Grafana monitoring and Alertmanager alerts.",
  "H|Chiffrement": "Encryption",
  "H|Application React + Node.js entièrement conteneurisée (Docker multi-stage, Nginx), testée avec Jest et déployée par un pipeline GitLab CI/CD (install → test → build → deploy) avec une alternative Jenkins.": "Fully containerized React + Node.js app (multi-stage Docker, Nginx), tested with Jest and deployed through a GitLab CI/CD pipeline (install → test → build → deploy), with a Jenkins alternative.",
  "H|IA / NLP": "AI / NLP",
  "H|Assistant conversationnel hybride : recherche par similarité cosinus (TF-IDF) dans une base annotée, génération GPT-2 quand aucune réponse ne correspond, et enrichissement de la base par l'utilisateur.": "Hybrid conversational assistant: cosine-similarity search (TF-IDF) over an annotated knowledge base, GPT-2 generation when no answer matches, and user-driven knowledge base enrichment.",
  "H|Modélisation SQL": "SQL modeling",
  "H|YAir Line — Base de données aérienne": "YAir Line — Airline database",
  "H|Conception du système d'information d'une compagnie aérienne avec la méthode Merise (MCD, MLD, MPD) et implémentation MySQL : 8 tables, clés étrangères et contraintes d'intégrité métier.": "Information system design for an airline using the Merise method (conceptual, logical and physical models) and MySQL implementation: 8 tables, foreign keys and business integrity constraints.",
  "H|Entrepôt SQL en étoile, ETL Python, requêtes analytiques (CTE, RANK, NTILE), segmentation RFM, cohortes, prévision du CA et tableau de bord HTML, testés et intégrés en continu.": "SQL star-schema warehouse, Python ETL, analytical queries (CTE, RANK, NTILE), RFM segmentation, cohorts, revenue forecasting and an HTML dashboard — tested and continuously integrated.",
  "H|Prévision": "Forecasting",
  "H|Prédiction du churn d'un opérateur télécom : nettoyage, KPI SQL, analyse exploratoire, comparaison de 3 modèles scikit-learn (ROC AUC 0,81) et rapport automatique.": "Churn prediction for a telecom operator: data cleaning, SQL KPIs, exploratory analysis, comparison of 3 scikit-learn models (ROC AUC 0.81) and an automated report.",
  "H|04 · Parcours": "04 · Background",
  "T|Expériences &": "Experience &",
  "H|formation": "education",
  "H|💼 Expériences professionnelles": "💼 Professional experience",
  "H|Jan. 2023 – Sept. 2026": "Jan 2023 – Sep 2026",
  "H|Conseillère technique": "Technical Advisor",
  "H|Résolution d'incidents IT complexes pour des comptes entreprises.": "Resolved complex IT incidents for corporate accounts.",
  "H|Suivi et analyse des incidents et des indicateurs de performance avec Power BI.": "Tracked and analyzed incidents and performance indicators with Power BI.",
  "H|Collaboration avec les équipes transverses pour optimiser les protocoles de réponse.": "Worked with cross-functional teams to improve incident response protocols.",
  "H|Juil. – Août 2022": "Jul – Aug 2022",
  "H|Stagiaire Data &amp; Développement": "Data &amp; Development Intern",
  "H|Bank Al-Maghrib (banque centrale du Maroc) · Rabat": "Bank Al-Maghrib (Central Bank of Morocco) · Rabat",
  "H|Analyse fonctionnelle de projets bancaires stratégiques et d'initiatives digitales.": "Functional analysis of strategic banking projects and digital initiatives.",
  "H|Nettoyage, structuration et qualification de données pour le reporting interne.": "Cleaned, structured and qualified data for internal reporting.",
  "H|Sept. 2022": "Sep 2022",
  "H|Stagiaire Digitalisation Maintenance": "Maintenance Digitalization Intern",
  "H|Passage du papier à un suivi digital structuré de l'inventaire et de la maintenance industrielle.": "Moved inventory and industrial maintenance tracking from paper to a structured digital log.",
  "H|🎓 Formation": "🎓 Education",
  "H|Master IA &amp; Data Engineering": "Master's in AI &amp; Data Engineering",
  "H|Bachelor Dev IA &amp; Data Engineering": "Bachelor's in AI Development &amp; Data Engineering",
  "H|DEUG Mathématiques &amp; Informatique": "Two-year university diploma (DEUG) in Mathematics &amp; Computer Science",
  "H|Université Ibn Tofail": "Ibn Tofail University",
  "H|Baccalauréat Sciences Mathématiques A": "High school diploma — Mathematical Sciences",
  "H|Lycée Abdelmalek Essaâdi": "Abdelmalek Essaâdi High School",
  "H|En dehors de la data": "Beyond data",
  "H|✈️ Voyages": "✈️ Travel",
  "H|🎨 Design graphique": "🎨 Graphic design",
  "H|📚 Littérature classique": "📚 Classic literature",
  "H|🛡️ Veille cybersécurité": "🛡️ Cybersecurity watch",
  "T|Construisons ensemble vos": "Let's build your",
  "H|pipelines de demain": "data pipelines of tomorrow",
  "H|Je recherche un <strong>stage Data de 6 mois</strong> (Data Engineering, Data Analytics, IA / ML). <strong>Disponible immédiatement.</strong> Basée à Nanterre, mobile en Île-de-France.": "I'm looking for a <strong>6-month Data internship</strong> (Data Engineering, Data Analytics, AI / ML). <strong>Available now.</strong> Based in Nanterre, open to anywhere in the Paris region.",
  "H|Copier l'e-mail": "Copy email",
  "H|CV (PDF)": "CV (PDF, French)",
  "T|Khadija Ibisk · Conçu avec soin, HTML, CSS & JavaScript.": "Khadija Ibisk · Carefully crafted with HTML, CSS & JavaScript.",
  "A|Aller au contenu": "Skip to content",
  "A|Accueil": "Home",
  "A|Navigation principale": "Main navigation",
  "A|Changer de thème": "Toggle theme",
  "A|Ouvrir le menu": "Open menu",
  "A|E-mail": "Email",
  "A|Portrait de Khadija Ibisk": "Portrait of Khadija Ibisk",
  "A|Défiler vers le bas": "Scroll down",
  "A|Filtrer les projets": "Filter projects",
  "A|Retour en haut": "Back to top",
  "A|Khadija Ibisk — Future ingénieure Data & Intelligence Artificielle": "Khadija Ibisk — Future Data & AI Engineer",
  "A|Portfolio de Khadija Ibisk, étudiante en Master Ingénierie des Données & IA à Paris Ynov Campus. Recherche un stage Data de 6 mois.": "Portfolio of Khadija Ibisk, Master's student in Data Engineering & AI at Paris Ynov Campus, looking for a 6-month Data internship."
};
  var UI = {
    fr: { btn: "EN", btnLabel: "Switch to English", toast: "E-mail copié ✓" },
    en: { btn: "FR", btnLabel: "Passer en français", toast: "Email copied ✓" }
  };
  var INLINE = { STRONG: 1, B: 1, EM: 1, BR: 1 };
  var norm = function (s) { return s.replace(/\s+/g, " ").trim(); };
  var units = [];

  function isRich(el) {
    var all = el.querySelectorAll("*");
    for (var i = 0; i < all.length; i++) if (!INLINE[all[i].tagName]) return false;
    for (var j = 0; j < el.childNodes.length; j++) {
      var c = el.childNodes[j];
      if (c.nodeType === 3 && c.textContent.trim()) return true;
    }
    return false;
  }

  function collect() {
    var seen = new Set();
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var n;
    while ((n = walker.nextNode())) {
      if (!n.textContent.trim() || n.parentElement.closest("script,style,svg,canvas,#langToggle")) continue;
      var el = n.parentElement;
      while (INLINE[el.tagName]) el = el.parentElement;
      if (isRich(el)) {
        if (seen.has(el)) continue;
        seen.add(el);
        var kh = "H|" + norm(el.innerHTML);
        if (EN[kh]) units.push({ type: "html", el: el, fr: el.innerHTML, en: EN[kh] });
      } else {
        var kt = "T|" + norm(n.textContent);
        if (EN[kt]) {
          var lead = n.textContent.match(/^\s*/)[0], trail = n.textContent.match(/\s*$/)[0];
          units.push({ type: "text", node: n, fr: n.textContent, en: lead + EN[kt] + trail });
        }
      }
    }
    document.querySelectorAll("[aria-label],[alt],[title]").forEach(function (e) {
      ["aria-label", "alt", "title"].forEach(function (a) {
        var v = e.getAttribute(a);
        if (v && EN["A|" + v]) units.push({ type: "attr", el: e, attr: a, fr: v, en: EN["A|" + v] });
      });
    });
    var meta = document.querySelector('meta[name="description"]');
    if (meta && EN["A|" + meta.content]) units.push({ type: "attr", el: meta, attr: "content", fr: meta.content, en: EN["A|" + meta.content] });
    units.push({ type: "title", fr: document.title, en: EN["A|" + document.title] || document.title });
  }

  function apply(lang) {
    units.forEach(function (u) {
      var v = lang === "en" ? u.en : u.fr;
      if (u.type === "html") u.el.innerHTML = v;
      else if (u.type === "text") u.node.textContent = v;
      else if (u.type === "attr") u.el.setAttribute(u.attr, v);
      else document.title = v;
    });
    document.documentElement.setAttribute("lang", lang);
    var btn = document.getElementById("langToggle");
    if (btn) {
      btn.textContent = UI[lang].btn;
      btn.setAttribute("aria-label", UI[lang].btnLabel);
      btn.setAttribute("title", UI[lang].btnLabel);
    }
    window.currentLang = lang;
  }

  window.i18nToast = function () { return UI[window.currentLang || "fr"].toast; };

  collect();
  var saved = localStorage.getItem("lang");
  var initial = saved || ((navigator.language || "fr").toLowerCase().indexOf("fr") === 0 ? "fr" : "en");
  apply(initial);

  document.getElementById("langToggle").addEventListener("click", function () {
    var next = window.currentLang === "en" ? "fr" : "en";
    localStorage.setItem("lang", next);
    apply(next);
  });
})();
