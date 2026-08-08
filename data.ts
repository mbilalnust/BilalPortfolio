import {
  Profile, Experience, Project, SocialLink, Education,
  Metric, WorkItem, Publication, SkillGroup,
} from './types';

export const PROFILE: Profile = {
  name: "Bilal Muhammad",
  title: "Data Scientist / AI Engineer",
  tagline: "Seven years turning messy data into decisions — enterprise LLM agents, predictive modelling, and the pipelines underneath — across e-commerce, logistics, mobility and the public sector.",
  // The storyline, per cv/profile.yml `storyline:` — analysis, ML, engineering,
  // AI, learned in that order. Coverage of the whole stack is the claim, and the
  // pairing with the stakeholder-facing half is the differentiator. Everything
  // is approached from a data perspective; this is deliberately not SWE framing.
  about: "I have spent seven years working outward across the data stack — analytics first, then machine learning, then the data engineering underneath, and now production AI agents. I have run classical ETL where correctness means the numbers reconcile, and AI pipelines where the output is scored against a golden dataset instead. What ties it together is where I start: talking to the people with the problem, agreeing the metric that decides whether it worked, then building the thing and owning the result. I look at every problem from a data perspective.",
  avatarUrl: "https://github.com/mbilalnust.png", // Using your GitHub avatar
  location: "Seoul, South Korea",
  email: "mbilalnust@gmail.com",
  languages: "English (PTE Core 90) · Korean (KIIP 6) · Urdu",
  skills: [
    "Python", "SQL", "R", "PySpark",
    "AWS (Redshift, Athena, Lambda, EMR)",
    "Machine Learning (XGBoost, LightGBM)",
    "Tableau", "Power BI", "Airflow", "Docker",
    "LLM/RAG", "Prompt Engineering"
  ]
};

/** Headline figures. Every one traces to a bullet in EXPERIENCE. */
export const METRICS: Metric[] = [
  { value: "1 wk → 1 hr", label: "Concrete report evaluation, Samsung" },
  { value: "+313%",       label: "Sales qualified leads YoY, Protopie" },
  { value: "60%",         label: "Less manual reporting, DP World" },
  { value: "30%",         label: "Churn reduction, Datarize" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/mbilalnust", icon: "github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/m-bilal", icon: "linkedin" },
  { platform: "Tableau Public", url: "https://public.tableau.com/profile/bilal6377#!/", icon: "tableau" },
  // The Gamma deck link was retired 2026-08-08. It was superseded by the
  // Reveal.js deck in the archive (cv/portfolio/deck/), and pointing visitors
  // at the older, thinner version of the same story worked against this site.
  // No replacement link yet: the new deck is not hosted publicly. When it is,
  // add it back here as "Portfolio".
  { platform: "Email", url: "mailto:mbilalnust@gmail.com", icon: "mail" },
];

/**
 * Mirrors cv/src/resume.tex in the PortfolioManagement archive — same bullets,
 * same dates. `**text**` marks the measurable part; components render it bold.
 */
export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Data Scientist (AI Engineer)",
    company: "Samsung C&T — Data Team",
    location: "Seoul, South Korea",
    period: "Aug 2025 - Present",
    description: [
      "Built enterprise AI agents (Financial, Contract, ITB, Engineering Drawings) end to end — requirements with finance, legal and procurement stakeholders through AWS deployment, RAG evaluation and MAU/VoC monitoring.",
      "Built a multi-agent finance report system on LangGraph with advanced RAG — custom chunking and Graph RAG over Amazon Neptune — synthesising market and competitor data for C-level decisions.",
      "Shipped a concrete-evaluation agent that turns unstructured field reports into structured records and scores them against rules, **cutting evaluation from one week to one hour**.",
      "Deployed a golden-dataset pipeline and dashboard (manual entry, LLM generation, page-level annotation) on a customised deepEval library, so every agent has measurable quality.",
      // The platform is deliberately unnamed here. It is a launched, public product,
      // but that Bilal built its SaaS business case is internal strategy work, and
      // this page is a public URL rather than a resume sent to a named recruiter.
      // cv/src/resume.tex does name it, on purpose — different audience.
      "Developing the business feasibility plan for taking a home IoT living platform to SaaS."
    ],
    tech: ["AWS Bedrock", "Neptune", "LangGraph", "Graph RAG", "Python", "Neo4j", "React"]
  },
  {
    id: "2",
    role: "Data Analyst (Scientist)",
    company: "Datarize — Data Team",
    location: "Seoul, South Korea",
    period: "May 2024 - Jun 2025",
    description: [
      "Built LTV and churn prediction models (BG/NBD, Gamma-Gamma) with sales AMs to sharpen retention targeting — **30% churn reduction**, and ~12% better conversion than the old rule-based segments.",
      "Owned the end-to-end pipeline, CRM data-mart design and dashboard serving **600+ B2B e-commerce clients** — CVR, CTR, ROAS, iROAS, funnel, cohort and channel performance — with backend developers and data engineers.",
      "Defined and shipped **iROAS (incremental ROAS)**, comparing exposed against non-exposed user groups, scoped with C-level and sales. Client campaign usage rose 20%.",
      "Caught a tracking bug where orders exceeded checkout events across hundreds of client sites, fixed the logging, and turned the fix into a platform-wide onboarding QA standard.",
      "Rewrote campaign attribution to enforce strict last-click within a 48-hour window, restoring trustworthy ROAS, CAC and LTV."
    ],
    tech: ["Python", "PySpark", "R", "SQL", "Athena", "EMR / EKS", "MWAA Airflow", "Superset"]
  },
  {
    id: "3",
    role: "Data Scientist, Growth & Corporate Analytics",
    company: "Protopie (Studio XID)",
    location: "Seoul, South Korea",
    period: "Aug 2022 - Apr 2024",
    description: [
      "Owned growth analytics across the product-led funnel — inflow, signup, pro, enterprise — joining Amplitude, Postgres, Apollo and Redshift.",
      "Built the ML lead-scoring service (PQL/MQL/SQL) on LightGBM with Bayesian optimisation, wired into Salesforce and retrained quarterly: **+313% SQLs YoY and +63% enterprise revenue**.",
      "Ran K-Means segmentation enriched with LLM embeddings of free-text intent — **75% more signups YoY**, 123% more corporate registrations, free-to-paid conversion from 6 months to 3.5.",
      "Built executive KPI dashboards — MRR, ARR, LTV, NDR/GDR, CPC, cohort and funnel — supporting revenue forecasting and investor reporting.",
      "Cut the data team's ad-hoc load 40% with a self-service system: Notion SQL snippet library, JIRA intake with required metadata, and biweekly training for CS."
    ],
    tech: ["Python", "LightGBM", "Redshift", "Amplitude", "Salesforce", "SQL"]
  },
  {
    id: "4",
    role: "Data Scientist, Business Analytics",
    company: "DP World",
    location: "Seoul, South Korea",
    period: "Jul 2021 - Jul 2022",
    description: [
      "Built the real-time IoT dashboard for seaport operations — truck congestion, crane productivity, turnaround — with GIS/GPS integration across 3 ports. **60% less manual reporting**, bottlenecks found 30% faster, truck waiting down ~12%.",
      "Implemented DeepTTE, a sequence-to-sequence model for truck ETA on sparse, noisy IoT data: **30% lower ETA error** and 18% less resource consumption.",
      "Built real-time anomaly detection on device telemetry (speed, engine temperature) using rate-of-change algorithms, plus OEE and equipment-productivity reporting."
    ],
    tech: ["Python", "Tableau", "Deep learning", "GIS", "SQL"]
  },
  {
    id: "5",
    role: "Data Scientist, Research Analytics",
    company: "Datawiz",
    location: "Daejeon, South Korea",
    period: "Sep 2020 - Jul 2021",
    description: [
      "Mapped flood-prone areas with DBSCAN over rainfall, elevation and drainage data, visualised in Tableau for municipal decision-makers — **27% more accurate than manual mapping**, ~15% faster flood response the following monsoon.",
      "Analysed dangerous driving from Digital Tacho Graph data across Sejong City's bus fleet, correlated it with citizen complaints, and identified Routes 222, 601 and 1000 for targeted driver education.",
      "Built the Sejong digital-twin transportation dataset and analysed new inter-area express bus routes; developed a patented traffic-signal synchronisation algorithm."
    ],
    tech: ["Python", "DBSCAN", "Tableau", "Oracle", "SQL"]
  },
  {
    id: "6",
    role: "Researcher, Mobility Analytics",
    company: "TOPS Lab, KAIST",
    location: "Daejeon, South Korea",
    period: "Sep 2018 - Sep 2020",
    description: [
      "Benchmarked classical forecasting (ARIMA, SARIMA, Prophet) against CNNs for traffic congestion prediction; the winning CNN **cut congestion 20%** and its weights went to Daejeon Traffic Institute.",
      "Found pedestrian accident rates drop significantly when speed humps sit 30m apart — submitted to local government.",
      "Modelled Jeju Island traveller behaviour, showing mode choice precedes itinerary planning; informed destination-marketing and tourism-mobility policy."
    ],
    tech: ["Python", "R", "PostgreSQL", "GIS"]
  },
  {
    id: "7",
    role: "Project Analyst, Project Management Unit",
    company: "National Highway Authority",
    location: "Islamabad, Pakistan",
    period: "Aug 2016 - Aug 2017",
    description: [
      "Tracked progress and spend on 5 highway projects built by Chinese–Pakistani contractor joint ventures under Korean consulting engineers, in the Project Management Unit standing between contractors, consultants and NHA leadership.",
      "Defined the KPI set the programme was steered on — planned versus actual physical progress, schedule and cost variance against baseline, budget utilisation, burn rate, forecast completion — normalised so five contractors could be compared on the same terms.",
      "Replaced the manual Excel reporting cycle with a load into a relational database feeding Tableau — **60% less manual reporting effort**, and the weekly progress meeting was chaired on the dashboard.",
      "Cross-checked claimed progress against site visits before it reached leadership, so decisions rested on verified quantities rather than contractor self-reporting."
    ],
    tech: ["Tableau", "SQL", "Python", "Excel"]
  }
];

/**
 * Selected work, from the Portfolio_Bilal_Gamma deck. Employer projects are
 * described at the architecture level only — no proprietary code or client data.
 * `githubUrl` is present only where a PUBLIC repo generalises the same pattern.
 */
export const WORK_ITEMS: WorkItem[] = [
  {
    id: "1",
    title: "Customer segmentation with K-Means + LLM embeddings",
    where: "Protopie",
    description: "Broad campaigns sent identical messaging to every prospect, and B2B buyers in different industries converted poorly. Built an unsupervised clustering pipeline over interaction behaviour, company size and usage — then enriched profiles with LLM embeddings of free-text intent.",
    result: "**75% more signups YoY** · 123% more corporate registrations · free-to-paid down from 6 months to 3.5"
    // No githubUrl. The Protopie work itself is unpublishable, and the repo that
    // used to be linked here (Customer-Segmentation-Advanced) started as
    // damiangilgonzalez1995's KMeans notebook — 4 of its 12 commits are his. The
    // LLM-embedding half is Bilal's, but the link read as "here is my code for
    // this", which overclaims. See cv/projects.md, "borrowed, not yet reworked".
  },
  {
    id: "2",
    title: "Lead scoring for growth acceleration",
    where: "Protopie",
    description: "Sales had a flood of inbound leads and no way to rank them, so reps prioritised on intuition. Trained a LightGBM classifier on CRM profiles, product interaction logs and purchase history with Bayesian optimisation, pushed scores into Salesforce, and retrained quarterly on real outcomes.",
    result: "**+313% SQLs YoY** · +63% enterprise revenue · shorter sales cycle",
    githubUrl: "https://github.com/mbilalnust/Lead-Scoring"
  },
  {
    id: "3",
    title: "Incremental ROAS as a self-serve CRM feature",
    where: "Datarize",
    description: "Standard ROAS can't tell you what a campaign added versus doing nothing. Designed a test/control split with strict attribution, computed iROAS daily through Python and Airflow ETL into Silver and Gold marts, then shipped it to clients as a Lab Report rather than a slide.",
    result: "**20% more client campaign usage** — clients could finally see incremental revenue"
  },
  {
    id: "4",
    title: "LTV and churn probability modelling",
    where: "Datarize",
    description: "Segmentation ran on rules like \"inactive 7 days = churned\", which mis-targeted campaigns. Engineered RFM features, trained BG/NBD and Gamma-Gamma models, and automated daily scoring so clients could build audiences like \"high-LTV at-risk\".",
    result: "**30% churn reduction** · ~12% better conversion than rule-based",
    githubUrl: "https://github.com/mbilalnust/B2C-Customer-Churn-Prediction"
  },
  {
    id: "5",
    title: "Real-time IoT dashboard for seaport operations",
    where: "DP World",
    description: "IoT devices captured truck movements and loading times, but operators still filled in each job by hand and no unified view existed. Built GIS-mapped Tableau dashboards for congestion, crane productivity and turnaround, with threshold alerts and per-device utilisation reports.",
    result: "**60% less manual reporting** · bottlenecks found 30% faster · truck waiting down ~12%"
  },
  {
    id: "6",
    title: "DeepTTE arrival-time prediction",
    where: "DP World",
    description: "Bad truck ETAs cause berth congestion and cascading delays, and rule-based estimates couldn't handle traffic, weather or driver variability. Implemented a deep sequence-to-sequence travel-time model suited to sparse, noisy IoT data, wired live into the operations dashboard.",
    result: "**30% lower ETA error** · 18% less resource consumption"
  },
  {
    id: "7",
    title: "Checkout-event QA and funnel restoration",
    where: "Datarize",
    description: "Spotted a logical impossibility while monitoring client metrics: orders outnumbered checkout events on some sites. Traced the tracking faults across hundreds of client websites, fixed the logging, and turned the process into an onboarding QA standard.",
    result: "New platform-wide QA standard · restored trust in funnel metrics"
  },
  {
    id: "8",
    title: "Attribution data-quality governance",
    where: "Datarize",
    description: "The CRM sometimes credited one order to several campaigns, breaking last-click attribution and making ROAS, CAC and LTV unreliable. Rewrote the attribution logic to enforce strict last-click within a 48-hour exposure window.",
    result: "Pre-merge QA checklist on every ETL PR — adopted by the whole analytics team"
  },
  {
    id: "9",
    title: "Flood-prone area identification",
    where: "Datawiz · published research",
    description: "Korean municipalities identified flood zones from patchy historical incident reports. Applied DBSCAN density clustering across rainfall, elevation models and drainage capacity, then built interactive Tableau maps so officials could prioritise drainage upgrades.",
    result: "**27% more accurate than manual mapping** · ~15% faster flood response"
  },
  {
    id: "10",
    title: "Bus safety analysis from tachograph data",
    where: "Datawiz · published research",
    description: "Sejong City had rising complaints about dangerous bus driving. Analysed a week of Digital Tacho Graph data — speed, acceleration, GPS, steering angle — for every city bus and correlated detected incidents against citizen complaint records.",
    result: "Complaints validated · Routes 222, 601, 1000 flagged for targeted driver education"
  },
  {
    id: "11",
    title: "Bronze → Silver → Gold analytics stack",
    where: "Side project",
    description: "An early-stage team needed an analytics stack scalable enough for growth but lean enough for one engineer. Layered medallion architecture: S3 storage, DuckDB or Athena/Spark as engine, Glue for table management, Postgres for the serving mart, MWAA for orchestration, Docker images built on PR merge.",
    result: "Clear lineage, production-ready, affordable to run solo",
    githubUrl: "https://github.com/mbilalnust/ETL-poor-man-pipeline"
  },
  {
    id: "12",
    title: "Local PDF RAG on open-source LLMs",
    where: "Side project",
    description: "Sensitive documents can't go to a hosted API. Built fully local retrieval-augmented generation with Llama 3.2 (2GB), Streamlit, LangChain and Ollama — real-time answers on consumer hardware, zero API cost, nothing leaving the device. Tested on a 22-page Korean tax law document.",
    result: "Accurate on Korean legal text · deployable on any cloud instance"
  }
];

/**
 * Peer-reviewed papers. Source of truth is cv/profile.yml `publications:`.
 *
 * Each venue line ends with the org whose work the paper was — not always the
 * affiliation the journal printed. The flood paper printed "DP World" because
 * the CEO published it after Bilal had moved, but the research was his Datawiz
 * work, so it is credited to Datawiz here (his call, 2026-08-08).
 *
 * The contribution note on the two Datawiz papers is deliberate: he is listed as
 * co-author on both, which is what a verifier sees, but he did more than the
 * byline suggests — and the two are not the same case. On the DTG paper (Korean)
 * the analysis was his and the co-authors drafted it; on the flood paper
 * (English) he wrote the manuscript as well. Saying what he did is both honest
 * and stronger than the byline for a data role.
 *
 * Citation counts are live from Google Scholar (2026-08-08), NOT from
 * scholar_profile.pdf, which is a year stale and understates two of the three.
 */
export const PUBLICATIONS: Publication[] = [
  {
    id: "1",
    title: "Traveler's interactive decision-making behavior between itinerary and mode choice using Copula-based discrete-count joint modeling",
    venue: "Transportation (2023) · SCI(E), Scopus · Impact factor 4.3 · First author, with S. Son and K. Jang · KAIST"
  },
  {
    id: "2",
    title: "Analysis of Dangerous Driving Behavior by Bus Type Using Digital Tacho Graph in Sejong City",
    venue: "Journal of Korean Society of Transportation (2020) · Vol. 38(6), pp. 462–472 · KCI · Datawiz — all DTG analysis mine, ~20M records/file",
    url: "https://www.researchgate.net/publication/348387184_Analysis_of_Dangerous_Driving_Behavior_by_Bus_Type_Using_Digital_Tacho_Graph_in_Sejong_City"
  },
  {
    id: "3",
    title: "Identifying and Clustering the Flood Impacted Areas for Strategic Information Provision",
    venue: "Journal of the Korea Institute of Intelligent Transport Systems (2021) · Vol. 20(6) · KCI · Datawiz — DBSCAN clustering and the English manuscript mine",
    url: "https://www.researchgate.net/publication/357578064_jeonlyagjeog_jeongbojegong-eul_wihan_chimsuyeonghyang-guyeog_keulleoseuteoling_Identifying_and_Clustering_the_Flood_Impacted_Areas_for_Strategic_Information_Provision_bag_eun_mibillal_muhamedeu_yo_yag"
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  { heading: "Languages", items: "Python · PySpark · SQL · R" },
  { heading: "AI / ML", items: "LangGraph · RAG & Graph RAG · LLM fine-tuning · MCP · TensorFlow · scikit-learn · XGBoost · LightGBM" },
  { heading: "Cloud & data", items: "AWS (Bedrock, Neptune, MWAA Airflow, Athena, S3, Lambda, Glue, Redshift, EMR, EKS, DynamoDB, OpenSearch) · DuckDB · Postgres · Neo4j" },
  { heading: "Visualisation", items: "Tableau · Power BI · Superset · Streamlit · R Shiny" },
  { heading: "DevOps", items: "Docker · GitHub Actions · CI/CD" },
  { heading: "Certifications", items: "TensorFlow Developer · Prompt Engineering · Data Engineering on AWS · Data Science Specialization · SaaS Metrics Fundamentals" }
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    school: "Korea Advanced Institute of Science and Technology (KAIST)",
    degree: "MS Transportation Engineering (Thesis: Applied Machine Learning)",
    period: "Sep 2018 - Aug 2020",
    description: "KGSP Scholarship Recipient (Approx. $62K USD)"
  },
  {
    id: "2",
    school: "National University of Sciences and Technology (NUST)",
    degree: "BS Civil Engineering",
    period: "Aug 2012 - Jun 2016"
  }
];

/**
 * Open source. Every entry checked against cv/projects.md, which is generated
 * from the GitHub API and the local clones: PUBLIC, and every commit Bilal's.
 *
 * Two rounds of removals, both for the same reason — claiming someone else's
 * work — caught by two different checks:
 *
 *  - 2026-08-05: Graphify and rag-enterprise-local. Forks with zero commits of
 *    Bilal's (upstream Graphify-Labs/graphify, I3K-IT/RAG-Enterprise).
 *  - 2026-08-07: Customer-Segmentation-Advanced. NOT a fork per the API, so the
 *    first check cleared it — but it began as damiangilgonzalez1995's KMeans
 *    notebook. A repo created by uploading files carries no parent, so nothing
 *    in the API flags it; only the commit-author list does. It comes back once
 *    it's genuinely reworked, with the upstream credited in its README.
 *
 * The rule that survives both: `isFork: false` is not evidence of authorship.
 */
export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "my-local-rag",
    description: "Retrieval over your own PDFs running on a local model — the pattern for when the documents can't leave the machine.",
    technologies: ["Python", "RAG", "Ollama", "Self-hosted"],
    githubUrl: "https://github.com/mbilalnust/my-local-rag"
  },
  {
    id: "2",
    title: "SaaS-metrics",
    description: "The growth and corporate KPI definitions I kept reaching for — MRR, ARR, NDR/GDR, cohort and funnel maths, written down once with sample files.",
    technologies: ["SQL", "Analytics", "SaaS KPIs"],
    githubUrl: "https://github.com/mbilalnust/SaaS-metrics"
  },
  {
    id: "3",
    title: "UniversalParser",
    description: "One interface for pulling structured text out of the document formats that actually arrive in enterprise workflows — PDF, Office, scanned images.",
    technologies: ["Python", "Document parsing", "OCR"],
    githubUrl: "https://github.com/mbilalnust/UniversalParser"
  },
  {
    id: "4",
    title: "TTS video automation",
    description: "Script to finished video — Edge-TTS voiceover, MoviePy assembly, automatic subtitles, no manual editing step.",
    technologies: ["Python", "Edge-TTS", "MoviePy"],
    githubUrl: "https://github.com/mbilalnust/multimodal_tts_VideoAutomation"
  }
];


/**
 * Google Forms Contact Form Setup
 * 
 * To enable the contact form in your portfolio:
 * 
 * 1. Go to https://docs.google.com/forms
 * 2. Create a new form with your desired fields (name, email, message, etc.)
 * 3. Customize your form's theme and settings as needed
 * 4. Click the "Send" button (top right corner)
 * 5. Click the chain link icon (or "Get link" tab)
 * 6. Copy the form URL - it should look like:
 *    "https://docs.google.com/forms/d/e/1FAIpQLSd.../viewform"
 * 7. Paste that URL below between the quotes
 * 
 * Important: Use the regular form URL (NOT the embed URL). Do NOT include "?embedded=true"
 * Since the form opens in a new tab, we don't need the embedded version.
 * 
 * If left empty (""), the contact form will show a placeholder message.
 */
export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfjt5GtbNyyyk-ILFDFdp0FATeAorRJyDuCPdToNafo3SZUVg/viewform";

/**
 * Formats all portfolio data into a readable context string for the chatbot
 */
export function getPortfolioContext(): string {
  let context = `PORTFOLIO INFORMATION FOR BILAL MUHAMMAD:\n\n`;
  
  // Profile Information
  context += `PROFILE:\n`;
  context += `Name: ${PROFILE.name}\n`;
  context += `Title: ${PROFILE.title}\n`;
  context += `Tagline: ${PROFILE.tagline}\n`;
  context += `About: ${PROFILE.about}\n`;
  context += `Location: ${PROFILE.location}\n`;
  context += `Email: ${PROFILE.email}\n`;
  context += `Languages: ${PROFILE.languages}\n`;
  context += `Skills: ${PROFILE.skills.join(', ')}\n\n`;

  // Headline figures
  context += `HEADLINE OUTCOMES:\n`;
  METRICS.forEach(m => {
    context += `${m.value} — ${m.label}\n`;
  });
  context += `\n`;
  
  // Social Links
  context += `SOCIAL LINKS:\n`;
  SOCIAL_LINKS.forEach(link => {
    context += `${link.platform}: ${link.url}\n`;
  });
  context += `\n`;
  
  // Experience
  context += `WORK EXPERIENCE:\n`;
  EXPERIENCE.forEach(exp => {
    context += `${exp.role} at ${exp.company} (${exp.location})\n`;
    context += `Period: ${exp.period}\n`;
    context += `Responsibilities:\n`;
    exp.description.forEach(desc => {
      context += `- ${desc}\n`;
    });
    context += `\n`;
  });
  
  // Education
  context += `EDUCATION:\n`;
  EDUCATION.forEach(edu => {
    context += `${edu.degree} from ${edu.school}\n`;
    context += `Period: ${edu.period}\n`;
    if (edu.description) {
      context += `${edu.description}\n`;
    }
    context += `\n`;
  });
  
  // Projects
  context += `PROJECTS:\n`;
  PROJECTS.forEach(project => {
    context += `${project.title}\n`;
    context += `Description: ${project.description}\n`;
    context += `Technologies: ${project.technologies.join(', ')}\n`;
    if (project.githubUrl) {
      context += `GitHub: ${project.githubUrl}\n`;
    }
    context += `\n`;
  });
  
  // Selected work — the detailed problem/result write-ups
  context += `SELECTED WORK (problem, approach, result):\n`;
  WORK_ITEMS.forEach(item => {
    context += `${item.title} (${item.where})\n`;
    context += `${item.description}\n`;
    context += `Result: ${item.result.replace(/\*\*/g, '')}\n`;
    if (item.githubUrl) {
      context += `GitHub: ${item.githubUrl}\n`;
    }
    context += `\n`;
  });

  // Peer-reviewed papers
  context += `PUBLICATIONS:\n`;
  PUBLICATIONS.forEach(pub => {
    context += `${pub.title}\n`;
    context += `${pub.venue}\n`;
    if (pub.url) {
      context += `URL: ${pub.url}\n`;
    }
    context += `\n`;
  });

  // Technical stack, grouped
  context += `TECHNICAL STACK:\n`;
  SKILL_GROUPS.forEach(group => {
    context += `${group.heading}: ${group.items}\n`;
  });
  context += `\n`;

  return context;
}