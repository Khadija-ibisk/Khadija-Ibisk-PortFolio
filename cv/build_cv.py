"""Génère les CV PDF (français et anglais) de Khadija Ibisk.

Usage :  python3 cv/build_cv.py
Sortie : assets/CV_Khadija_Ibisk.pdf (FR) et assets/CV_Khadija_Ibisk_EN.pdf (EN)

Pour modifier le CV, changer le texte dans CONTENT ci-dessous puis relancer le script.
Nécessite : pip install reportlab
"""
from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_JUSTIFY
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (HRFlowable, Image, KeepTogether, Paragraph,
                                SimpleDocTemplate, Spacer, Table, TableStyle)

ROOT = Path(__file__).resolve().parent.parent
NAVY = HexColor("#1F3A5F")
ACCENT = HexColor("#C0294D")
TEXT = HexColor("#1A1A1A")
GREY = HexColor("#555555")
LINK = HexColor("#1F3A6B")

PORTFOLIO = "khadija-ibisk.github.io/Khadija-Ibisk-PortFolio"

CONTENT = {
    "fr": {
        "file": "CV_Khadija_Ibisk.pdf",
        "title": "CV Khadija Ibisk — Stage Data de 3 mois (Master 1) à partir de mai 2027",
        "subtitle": "Master 1 Ingénierie des Données & IA — Stage Data de 3 mois",
        "availability": "À partir de mai 2027",
        "portfolio": "Portfolio",
        "colon": " :",
        "sections": ["PROFIL", "COMPÉTENCES TECHNIQUES", "PROJETS CLÉS",
                     "EXPÉRIENCES PROFESSIONNELLES", "FORMATION", "INFORMATIONS COMPLÉMENTAIRES"],
        "profile": (
            "Étudiante en <b>Master 1 Ingénierie des Données &amp; IA</b> à Paris Ynov Campus, je recherche un "
            "<b>stage de 3 mois en Data à partir de mai 2027</b> (Data Engineering, Data Analytics, IA / Machine Learning), "
            "tous secteurs confondus. Je conçois des pipelines de données fiables et automatisés (Python, SQL, PostgreSQL, CI/CD) "
            "et les mets au service de cas d'usage analytiques et d'IA (Random Forest, KMeans, analyse statistique, Power BI). "
            "Première expérience en environnement bancaire réglementé (Bank Al-Maghrib), où qualité, traçabilité et fiabilité "
            "des données sont essentielles. Rigoureuse, autonome, à l'aise en équipe Scrum."
        ),
        "skills": [
            ("Data Engineering &amp; Dev", "Python, SQL, PostgreSQL, ETL / pipelines de données, FastAPI, Programmation Orientée Objet"),
            ("Qualité &amp; gouvernance", "validation de schéma, contrôle qualité, RBAC, journal d'audit, traçabilité des données"),
            ("Data Science &amp; ML", "Pandas, NumPy, SciPy, scikit-learn (Random Forest, KMeans), tests statistiques (t de Student, Chi-deux)"),
            ("BI &amp; Visualisation", "Power BI, DAX, modélisation en étoile, Matplotlib, Seaborn, Grafana"),
            ("Bases de données", "SQL (PostgreSQL) et NoSQL (MongoDB, Cassandra, Neo4j, Redis)"),
            ("DevOps &amp; outils", "Git / GitHub Actions (CI/CD), Docker, Linux, Bash, Jira, Confluence, Prometheus"),
            ("Langues", "Arabe (langue maternelle), Français (courant), Anglais (conversationnel)"),
        ],
        "projects": [
            ("Moteur d'Ingestion de Données (Python) — Pipeline ETL &amp; qualité", "2026",
             ["Pipeline ETL pour le parsing de fichiers hétérogènes (XML, JSON, CSV), avec validation de schéma, contrôle qualité et chargement dans PostgreSQL."]),
            ("HARI – Plateforme RH propulsée par l'IA — Challenge 48h YDays", "2026",
             ["Équipe de 10 en Scrum (Git, Jira, CI/CD). Rôle Data : modèle de données RH et KPI d'analytique (absentéisme, turnover) pour une plateforme sécurisée (RBAC, journal d'audit)."]),
            ("RENEW – Smart Building — Data Engineering &amp; IA", "2026",
             ["Structuration et nettoyage de données BIM, inventaire numérique des matériaux et contribution à des solutions d'IA de classification."]),
            ("EduTrack Analytics – Analyse de performance des étudiants — Data &amp; ML", "2025",
             ["Pipeline ETL (CSV/Excel vers base relationnelle de 8 tables, validation, nettoyage), KPI sur 300 étudiants, détection des profils à risque (Random Forest), segmentation KMeans, API FastAPI + React."]),
            ("Dashboard Power BI – Analyse des ventes — BI &amp; DAX", "2025",
             ["Modèle en étoile (Ventes, Clients, Produits, Régions, Temps) à partir de CSV, mesures DAX et dashboard interactif : 732K de CA, 500 ventes, Casablanca : environ 33 % du CA."]),
            ("SpotifYnov – Architecture de Persistance Polyglotte", "2025",
             ["Backend multi-bases : MongoDB (métadonnées), Cassandra (séries temporelles), Redis (cache), Neo4j (recommandations)."]),
            ("Analyse SLA E-commerce — Statistiques", "2024",
             ["Analyse statistique de 500 échantillons (t de Student, Chi-deux) pour identifier les goulots d'étranglement serveur."]),
        ],
        "experience": [
            ("Conseillère Technique (temps partiel) — Foundever, Rabat", "Jan 2023 – Sep 2026",
             ["Résolution d'incidents IT complexes pour des comptes entreprises ; suivi et analyse des incidents et des indicateurs de performance avec Power BI (reporting).",
              "Collaboration avec les équipes transversales pour optimiser les protocoles de réponse aux incidents."]),
            ("Stagiaire Data &amp; Développement — Bank Al-Maghrib (BAM), Rabat", "Juil – Août 2022",
             ["Participation à l'analyse fonctionnelle de projets bancaires stratégiques et d'initiatives digitales.",
              "Nettoyage, structuration et qualification de données pour le reporting interne, avec rigueur et fiabilité en environnement réglementé."]),
            ("Stagiaire Digitalisation Maintenance — Lear Corporation, Kénitra", "Septembre 2022",
             ["Transition du papier vers un suivi digital structuré (journalisation) de l'inventaire et de la maintenance industrielle."]),
        ],
        "education": [
            ("Master IA &amp; Data Engineering (1<super>re</super> année en cours) — Paris Ynov Campus", "2026 – 2028"),
            ("Bachelor, Dev IA &amp; Data Engineering — Ynov Campus Casablanca", "2024 – 2026"),
            ("DEUG, Mathématiques &amp; Informatique — Université Ibn Tofail", "2021"),
            ("Baccalauréat, Sciences Mathématiques A — Lycée Abdelmalek Essaâdi", "2018"),
        ],
        "extra": [
            ("Soft skills", "résolution de problèmes complexes, adaptabilité rapide, communication, rigueur scientifique, sens de la fiabilité."),
            ("Centres d'intérêt", "voyages, design graphique digital, littérature classique, veille en cybersécurité."),
        ],
    },
    "en": {
        "file": "CV_Khadija_Ibisk_EN.pdf",
        "title": "Khadija Ibisk Resume — 3-month Data internship (1st-year Master's) from May 2027",
        "subtitle": "1st-year Master's in Data Engineering &amp; AI — 3-month Data internship",
        "availability": "From May 2027",
        "portfolio": "Portfolio",
        "colon": ":",
        "sections": ["PROFILE", "TECHNICAL SKILLS", "KEY PROJECTS",
                     "PROFESSIONAL EXPERIENCE", "EDUCATION", "ADDITIONAL INFORMATION"],
        "profile": (
            "<b>1st-year Master's student in Data Engineering &amp; AI</b> at Paris Ynov Campus, looking for a "
            "<b>3-month Data internship starting May 2027</b> (Data Engineering, Data Analytics, AI / Machine Learning) "
            "in any industry. I build reliable, automated data pipelines (Python, SQL, PostgreSQL, CI/CD) and use them for "
            "analytics and AI use cases (Random Forest, KMeans, statistical analysis, Power BI). First experience in a "
            "regulated banking environment (Bank Al-Maghrib, Morocco's central bank), where data quality, traceability and "
            "reliability are critical. Rigorous, autonomous and comfortable working in Scrum teams."
        ),
        "skills": [
            ("Data Engineering &amp; Dev", "Python, SQL, PostgreSQL, ETL / data pipelines, FastAPI, Object-Oriented Programming"),
            ("Data quality &amp; governance", "schema validation, quality checks, RBAC, audit logging, data lineage"),
            ("Data Science &amp; ML", "Pandas, NumPy, SciPy, scikit-learn (Random Forest, KMeans), statistical tests (Student's t, Chi-squared)"),
            ("BI &amp; Visualization", "Power BI, DAX, star schema modeling, Matplotlib, Seaborn, Grafana"),
            ("Databases", "SQL (PostgreSQL) and NoSQL (MongoDB, Cassandra, Neo4j, Redis)"),
            ("DevOps &amp; tools", "Git / GitHub Actions (CI/CD), Docker, Linux, Bash, Jira, Confluence, Prometheus"),
            ("Languages", "Arabic (native), French (fluent), English (conversational)"),
        ],
        "projects": [
            ("Data Ingestion Engine (Python) — ETL pipeline &amp; data quality", "2026",
             ["ETL pipeline parsing heterogeneous files (XML, JSON, CSV), with schema validation, quality checks and loading into PostgreSQL."]),
            ("HARI – AI-powered HR platform — 48h YDays Challenge", "2026",
             ["Team of 10 in Scrum (Git, Jira, CI/CD). Data role: HR data model and analytics KPIs (absenteeism, turnover) for a secure platform (RBAC, audit log)."]),
            ("RENEW – Smart Building — Data Engineering &amp; AI", "2026",
             ["Structuring and cleaning BIM data, digital inventory of building materials and contribution to AI classification solutions."]),
            ("EduTrack Analytics – Student performance analysis — Data &amp; ML", "2025",
             ["ETL pipeline (CSV/Excel into an 8-table relational database, validation, cleaning), KPIs on 300 students, at-risk profile detection (Random Forest), KMeans segmentation, FastAPI + React API."]),
            ("Power BI Dashboard – Sales analysis — BI &amp; DAX", "2025",
             ["Star schema (Sales, Customers, Products, Regions, Time) built from CSV, DAX measures and interactive dashboard: 732K revenue, 500 sales, Casablanca ≈ 33% of revenue."]),
            ("SpotifYnov – Polyglot persistence architecture", "2025",
             ["Multi-database backend: MongoDB (metadata), Cassandra (time series), Redis (cache), Neo4j (recommendations)."]),
            ("E-commerce SLA analysis — Statistics", "2024",
             ["Statistical analysis of 500 samples (Student's t, Chi-squared) to identify server bottlenecks."]),
        ],
        "experience": [
            ("Technical Advisor (part-time) — Foundever, Rabat", "Jan 2023 – Sep 2026",
             ["Resolved complex IT incidents for business accounts; tracked and analyzed incidents and performance indicators with Power BI (reporting).",
              "Worked with cross-functional teams to improve incident response procedures."]),
            ("Data &amp; Development Intern — Bank Al-Maghrib (BAM), Rabat", "Jul – Aug 2022",
             ["Contributed to the functional analysis of strategic banking projects and digital initiatives.",
              "Cleaned, structured and qualified data for internal reporting, with rigor and reliability in a regulated environment."]),
            ("Maintenance Digitalization Intern — Lear Corporation, Kénitra", "Sep 2022",
             ["Moved inventory and industrial maintenance tracking from paper to a structured digital log."]),
        ],
        "education": [
            ("Master's in AI &amp; Data Engineering (1st year, in progress) — Paris Ynov Campus", "2026 – 2028"),
            ("Bachelor's, AI Development &amp; Data Engineering — Ynov Campus Casablanca", "2024 – 2026"),
            ("DEUG (2-year university degree), Mathematics &amp; Computer Science — Ibn Tofail University", "2021"),
            ("Baccalaureate, Mathematical Sciences A — Abdelmalek Essaâdi High School", "2018"),
        ],
        "extra": [
            ("Soft skills", "complex problem solving, quick adaptability, communication, scientific rigor, reliability."),
            ("Interests", "travel, digital graphic design, classic literature, cybersecurity watch."),
        ],
    },
}

F, FB, FI = "Helvetica", "Helvetica-Bold", "Helvetica-Oblique"
S = {
    "name": ParagraphStyle("name", fontName=FB, fontSize=21.3, leading=24, textColor=NAVY),
    "sub": ParagraphStyle("sub", fontName=FB, fontSize=9.7, leading=12.5, textColor=TEXT),
    "contact": ParagraphStyle("contact", fontName=F, fontSize=8.05, leading=10.9, textColor=GREY),
    "section": ParagraphStyle("section", fontName=FB, fontSize=9.4, leading=11, textColor=NAVY),
    "body": ParagraphStyle("body", fontName=F, fontSize=8.44, leading=10.96, textColor=TEXT, alignment=TA_JUSTIFY),
    "bullet": ParagraphStyle("bullet", fontName=F, fontSize=8.44, leading=10.6, textColor=TEXT,
                             leftIndent=10, bulletIndent=1, bulletFontSize=8.44),
    "entry": ParagraphStyle("entry", fontName=FB, fontSize=8.83, leading=11, textColor=TEXT),
    "date": ParagraphStyle("date", fontName=FI, fontSize=8.0, leading=11, textColor=GREY, alignment=2),
}
PAGE_W, PAGE_H = A4
MARGIN = 39.7
WIDTH = PAGE_W - 2 * MARGIN - 12  # largeur utile (le cadre ReportLab a 6 pt de marge interne de chaque côté)


def link(url, label=None):
    return f'<a href="https://{url}" color="#1F3A6B"><b>{label or url}</b></a>'


def section(title):
    return [Spacer(1, 5.5), Paragraph(title, S["section"]), Spacer(1, 1.5),
            HRFlowable(width="100%", thickness=0.9, color=NAVY, spaceBefore=0, spaceAfter=3.5)]


def entry(title, date, bullets=()):
    head = Table([[Paragraph(title, S["entry"]), Paragraph(date, S["date"])]],
                 colWidths=[WIDTH - 110, 110])
    head.setStyle(TableStyle([("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                              ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0.5),
                              ("VALIGN", (0, 0), (-1, -1), "BOTTOM")]))
    return KeepTogether([head] + [Paragraph(b, S["bullet"], bulletText="•") for b in bullets]
                        + [Spacer(1, 1.8)])


def build(lang):
    c = CONTENT[lang]
    sec = c["sections"]
    header_text = [
        Paragraph("KHADIJA IBISK", S["name"]), Spacer(1, 3),
        Paragraph(f'{c["subtitle"]} <font color="#C0294D">· {c["availability"]}</font>', S["sub"]),
        Spacer(1, 3),
        Paragraph(f'Nanterre, France | +33 7 76 13 36 07 | khadija.ibisk@ynov.com | {link("github.com/Khadija-ibisk")}', S["contact"]),
        Paragraph(f'{link("www.linkedin.com/in/khadija-ibisk", "linkedin.com/in/khadija-ibisk")} | '
                  f'{c["portfolio"]}{c["colon"]} {link(PORTFOLIO)}', S["contact"]),
    ]
    photo = Image(str(ROOT / "assets" / "photo.jpg"), width=82, height=82)
    header = Table([[header_text, photo]], colWidths=[WIDTH - 90, 90])
    header.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("ALIGN", (1, 0), (1, 0), "RIGHT"),
                                ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                                ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0)]))

    story = [header, Spacer(1, 2)]
    story += section(sec[0]) + [Paragraph(c["profile"], S["body"])]
    story += section(sec[1]) + [Paragraph(f"<b>{k}{c['colon']}</b> {v}", S["bullet"], bulletText="•") for k, v in c["skills"]]
    story += section(sec[2]) + [entry(*p) for p in c["projects"]]
    story += section(sec[3]) + [entry(*e) for e in c["experience"]]
    story += section(sec[4]) + [entry(t, d) for t, d in c["education"]]
    story += section(sec[5]) + [Paragraph(f"<b>{k}{c['colon']}</b> {v}", S["bullet"], bulletText="•") for k, v in c["extra"]]

    out = ROOT / "assets" / c["file"]
    doc = SimpleDocTemplate(str(out), pagesize=A4, leftMargin=MARGIN, rightMargin=MARGIN,
                            topMargin=36, bottomMargin=26, title=c["title"], author="Khadija Ibisk",
                            subject=c["title"], creator="Khadija Ibisk", lang=lang)
    doc.build(story)
    return out


if __name__ == "__main__":
    for lang in CONTENT:
        print(build(lang))
