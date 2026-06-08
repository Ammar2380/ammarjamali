// ═══════════════════════════════════════════════════════════════
//  data.js — All editable content for Muhammad Ammar Jamali site
//  Edit ONLY this file. The HTML renders everything from here.
// ═══════════════════════════════════════════════════════════════

const SITE = {

  // ── Personal info ──────────────────────────────────────────
  name: "Muhammad Ammar Jamali",
  nameShort: "Muhammad Ammar",
  nameLast: "Jamali",
  title: "AI Engineer",
  location: "Karachi, Pakistan",
  email: "ammarjamali2006@gmail.com",
  phone: "+92 312 3980106",
  github: "https://github.com/Ammar2380",
  linkedin: "https://www.linkedin.com/in/muhammad-ammar-jamali-4557b2366/",
  twitter: "https://x.com/___Ammar___1",
  huggingface: "https://huggingface.co/spaces/AmmarJamali/spamscan",
  photo: "photo.jpg",
  year: "2026",

  // ── Nav tabs ───────────────────────────────────────────────
  tabs: [
    { id: "ai",       label: "AI Engineer"  },
    { id: "web",      label: "Web Dev"       },
    { id: "exp",      label: "Experience"    },
    { id: "about",    label: "About"         },
    { id: "personal", label: "Personal"      },
  ],

  // ══════════════════════════════════════════════════════════
  // PAGE: AI ENGINEER
  // ══════════════════════════════════════════════════════════
  ai: {
    eyebrow: "Available for AI roles · Remote & Worldwide",
    headline: ["Building ML systems", "that actually ship."],
    headlineItalic: "that actually ship.",   // which part is <em>
    bio: "AI Engineer specializing in end-to-end ML, deep learning & NLP — fine-tuned transformers, production CNNs, live Hugging Face deployments. Ask my agent anything.",
    cta1: { label: "Ask ammar.ai ✦", action: "openAgent()" },
    cta2: { label: "ammarjamali2006@gmail.com", href: "mailto:ammarjamali2006@gmail.com" },
    cta3: { label: "GitHub ↗", href: "https://github.com/Ammar2380" },

    about: [
      "I'm Muhammad Ammar Jamali — an AI Engineer and ML Developer with hands-on experience designing and deploying end-to-end machine learning systems. My work spans NLP, computer vision, and predictive modeling, always with a bias toward shipping things that run in production — not just notebooks.",
      "Currently advancing through a B.S. in Data Science at University of Sindh, having successfully completed SMIT's Artificial Intelligence and Data Science program and PITP's Data Science initiative. Track record of measurable results: 97% F1 on a live NLP deployment, 87% accuracy on CIFAR-10, 88% F1 on clinical classification. Builds fast. Ships faster.",
    ],

    skills: [
      { cat: "Languages",     vals: "Python · SQL · HTML / CSS" },
      { cat: "Frameworks",    vals: "TensorFlow · Keras · PyTorch · scikit-learn · Hugging Face Transformers" },
      { cat: "Deep Learning", vals: "ANN · CNN · Transfer Learning · DistilBERT Fine-tuning · NLP · Computer Vision" },
      { cat: "Data",          vals: "Pandas · NumPy · Matplotlib · Seaborn · EDA · Feature Engineering" },
      { cat: "Deployment",    vals: "Flask · Gradio · Streamlit · Hugging Face Spaces · OpenCV · Git & GitHub" },
      { cat: "Concepts",      vals: "Supervised / Unsupervised · Classification · Regression · Hyperparameter Tuning · Regularization" },
    ],

    projects: [
      {
        index: "01 / Retrieval-Augmented Generation",
        title: "Vektor — AI Research Assistant",
        description: "Production-ready RAG pipeline engineered with strict mathematical safety guardrails. Ingests dense, symbol-heavy documents (like discrete mathematics slides) to enforce absolute grounding without hallucination. Backend powered by FastAPI and customized dense embeddings (all-MiniLM-L6-v2).",
        tags: ["RAG", "FastAPI", "Python", "Vector DB"],
        links: [
          { label: "GitHub ↗", href: "https://github.com/Ammar2380/vektor-ai-research-assistant" },
        ],
        visual: `<div class="code-header"><div class="code-dot"></div><span>vektor_rag_pipeline.py</span></div>
<div style="color: var(--muted2);">> Initializing context safety parameters...</div>
<div style="color: var(--cli-green); margin-top: 0.3rem;">[Mathematical Guardrails Active]</div>
<div style="color: var(--muted); font-size: 10px;">High-Fidelity Extraction: <span style="color: #fff;">100%</span><br>Hallucination Drift: <span style="color: #fff;">0%</span></div>`,
        visualStyle: "display:flex;flex-direction:column;justify-content:center;gap:8px;",
      },
      {
        index: "02 / NLP Transformers",
        title: "SpamScan",
        description: "Fine-tuned DistilBERT on 5,500+ SMS/email messages for binary spam classification. Full pipeline — tokenization, data collation, evaluation metrics. Deployed on Hugging Face Spaces with real-time inference.",
        tags: ["NLP", "DistilBERT", "PyTorch", "Hugging Face"],
        links: [
          { label: "GitHub ↗", href: "https://github.com/Ammar2380/SpamScan" },
          { label: "Demo ↗",   href: "https://huggingface.co/spaces/AmmarJamali/spamscan" },
        ],
        visual: `<div style="color: var(--cli-green);">>> Ingesting structural token tensor collations...</div>
<div style="color: var(--muted2); margin: 0.2rem 0;">[DistilBERT Training Loop Initialized]</div>
<div style="color: var(--muted);">Validation Metric Target achieved.<br>F1 Classification Output: <span style="color: #fff;">0.972</span><br>Inference Latency Reduction: <span style="color: #fff;">-40%</span><br>Live Predictions: <span style="color: #fff;">100+</span></div>`,
        visualHeader: "spamscan_transformer.py",
      },
      {
        index: "03 / Computer Vision",
        title: "Face Recognition CNN — Dataset Builder",
        description: "Flask + OpenCV pipeline to capture, label, and organize face datasets of 200–500 images per person. Auto 80/20 train-test split with diversity enforcement, reducing data prep time by 60%.",
        tags: ["Computer Vision", "Flask", "OpenCV"],
        links: [
          { label: "GitHub ↗", href: "https://github.com/Ammar2380/cnn-face-recognition-flask" },
        ],
        visual: `<div style="color: var(--muted2);">> Capturing array frames from CV2 camera sequence...</div>
<div style="color: var(--cli-green); margin-top: 0.3rem;">[Array parsing verified: 500 vectors mapped]</div>
<div style="color: var(--muted); font-size: 10px;">Automated train-test separation complete (80/20 partitioning) <br>Time Saved: -60%</div>`,
        visualHeader: "cv_dataset_orchestrator.sh",
      },
      {
        index: "04 / Deep Learning",
        title: "CIFAR-10 Image Classification",
        description: "Custom CNN from scratch on 60,000 images across 10 classes. Conv2D + MaxPooling → Dense with Dropout (0.5). Trained 30 epochs, validation loss converged in 15.",
        tags: ["CNN", "TensorFlow", "Keras"],
        links: [{ label: "GitHub ↗", href: "https://github.com/Ammar2380" }],
        visual: `<div style="font-size:10px; color:var(--muted2);">Topology: Conv2D -> MaxPool2D -> Dropout(0.5) -> Dense</div>
<div style="background: rgba(255,255,255,0.02); padding: 0.6rem; border-radius: 4px; border: 1px solid rgba(255,255,255,0.04);">Output Metrics Explored: <span style="color:var(--cli-green);">Test Accuracy: 87%</span> (+22% baseline)</div>
<div style="font-size:10px; color:var(--muted2);">Convergence verified within 15 epochs via Adam Optimizer.</div>`,
        visualStyle: "display:flex;flex-direction:column;justify-content:center;gap:8px;",
      },
      {
        index: "05 / Predictive Modeling",
        title: "Diabetes Progression Prediction",
        description: "4-layer fully-connected ANN. StandardScaler normalization, Dropout (0.1), EarlyStopping (patience=20). Inverse-scaled predictions for interpretable output.",
        tags: ["ANN", "Regression", "Healthcare"],
        links: [{ label: "GitHub ↗", href: "https://github.com/Ammar2380" }],
        visual: `<div style="font-size:13px; color:var(--text);">ANN Registry Network</div>
<div style="font-size:11px; color:var(--cli-green);">Diabetes Progression MSE: 2,900</div>
<div style="font-size:10px; color:var(--muted2);">Convergence Speed: +35% faster</div>`,
        visualStyle: "display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px;",
      },
      {
        index: "06 / Machine Learning Ensembles",
        title: "Heart Disease Prediction",
        description: "Benchmarked 3 models on 303 clinical records. Feature engineering with correlation analysis to select top 10 predictive features.",
        tags: ["Classification", "scikit-learn", "ML"],
        links: [{ label: "GitHub ↗", href: "https://github.com/Ammar2380" }],
        visual: `<div class="code-header"><div class="code-dot"></div><span>sklearn_ensemble.py</span></div>
<div style="font-size:11px; color:var(--muted);">Benchmarking: Logistic Regression | SVM | Random Forest</div>
<div style="font-size:13px; color:var(--text);">Target Acquired: Heart Disease Classification</div>
<div style="font-size:11px; color:var(--cli-green);">Performance Yield: 88% F1-score</div>`,
        visualStyle: "display:flex;flex-direction:column;justify-content:center;gap:8px;",
      },
      {
        index: "07 / Exploratory Data Analysis",
        title: "Pakistan Real Estate EDA",
        description: "Exploratory analysis of 10,000+ property listings across 5 major Pakistani cities. Surfaced 3 key pricing trends with Pandas, Seaborn, and Matplotlib dashboards.",
        tags: ["EDA", "Visualization", "Pandas"],
        links: [{ label: "GitHub ↗", href: "https://github.com/Ammar2380" }],
        visual: `<div style="font-size:11px; color:var(--muted2);">// Data Analytic Dashboard Matrices</div>
<div style="font-size:13px; color:var(--text);">Real Estate: 10,000+ Record Dataset</div>
<div style="font-size:11px; color:var(--muted);">Geographic Scope: 5 Major Pakistani Cities</div>`,
        visualStyle: "display:flex;flex-direction:column;justify-content:center;gap:6px;",
      },
      {
        index: "08 / Business Intelligence",
        title: "Supermarket Sales EDA Dashboard",
        description: "Sales analysis of 1,000 transactions across 3 branches. Identified top product line generating 34% of total revenue via KPI dashboards using Pandas and Seaborn.",
        tags: ["EDA", "KPI", "Data Insights"],
        links: [{ label: "GitHub ↗", href: "https://github.com/Ammar2380" }],
        visual: `<div style="border: 1px solid rgba(255,255,255,0.06); padding: 1.2rem; background:rgba(0,0,0,0.3); border-radius:6px; font-size:12px; text-align:center;">
  <span style="color:var(--text);">Supermarket Sales KPI</span><br>
  <span style="color:var(--cli-green);">Top Product Line: 34% Total Revenue Insight</span>
</div>`,
        visualStyle: "display:flex;flex-direction:column;justify-content:center;align-items:center;",
      },
    ],

    education: [
      { name: "B.S. in Data Science",    sub: "University of Sindh, Jamshoro",               yr: "2024 – 2027" },
      { name: "Artificial Intelligence and Data Science",   sub: "SMIT — Saylani Mass IT Training",   yr: "Mar 2025 – May 2026"     },
      { name: "Data Science Program",    sub: "PITP — Government of Sindh Initiative",         yr: "Completed"     },
    ],

    contact: [
      { label: "Email",        href: "mailto:ammarjamali2006@gmail.com",                                             text: "ammarjamali2006@gmail.com"                   },
      { label: "Phone",        href: "tel:+923123980106",                                                            text: "+92 312 3980106"                             },
      { label: "GitHub",       href: "https://github.com/Ammar2380",                                                 text: "github.com/Ammar2380"                        },
      { label: "Hugging Face", href: "https://huggingface.co/spaces/AmmarJamali/spamscan",                          text: "huggingface.co/AmmarJamali ↗"                },
      { label: "LinkedIn",     href: "https://www.linkedin.com/in/muhammad-ammar-jamali-4557b2366/",                text: "linkedin.com/in/muhammad-ammar-jamali ↗"     },
      { label: "X / Twitter",  href: "https://x.com/___Ammar___1",                                                  text: "@___Ammar___1 ↗"                             },
    ],

    footer: "Muhammad Ammar · Jamali · AI Engineer",
  },

  // ══════════════════════════════════════════════════════════
  // PAGE: WEB DEV
  // ══════════════════════════════════════════════════════════
  web: {
    eyebrow: "Frontend · React.js · MERN Stack",
    headline: ["Building the web,", "one interface at a time."],
    headlineItalic: "one interface at a time.",
    bio: "React.js developer with proven client delivery — agency sites, product pages, AI SaaS, and portfolio builds. Responsive, component-driven, production-deployed on Vercel.",
    cta1: { label: "Get in touch ↗", href: "mailto:ammarjamali2006@gmail.com" },
    cta2: { label: "GitHub ↗",       href: "https://github.com/Ammar2380"    },

    stack: [
      { cat: "Frontend", vals: "React.js · JavaScript (ES6+) · HTML5 · CSS3" },
      { cat: "Design",   vals: "Responsive & Mobile-First · Component-Based Architecture · UI/UX" },
      { cat: "Tools",    vals: "Git & GitHub · Vercel · VS Code" },
      { cat: "Data",     vals: "Python · Pandas · NumPy · Seaborn · Matplotlib" },
    ],

    projects: [
      {
        index: "01 / Corporate Deployments",
        title: "Team Uraan",
        description: "Full website for a creative agency. Modern layout, service sections, mobile-first responsive design built in React.",
        tags: ["React.js", "Responsive", "Agency"],
        links: [{ label: "View Site ↗", href: "https://teamuraan.vercel.app/" }],
        visual: `<div style="font-size:11px; color:var(--muted2);">// Agency Ingress Core</div>
<div style="font-size:14px; color:var(--text); font-weight:400; letter-spacing:-0.01em;">TEAM URAAN ARCHITECTURE</div>
<div style="font-size:11px; color:var(--muted);">Creative Agency UI Deploy</div>`,
        visualStyle: "display:flex;flex-direction:column;justify-content:center;gap:8px;",
      },
      {
        index: "02 / SaaS Platforms",
        title: "HayViral AI SaaS",
        description: "Company website for an AI SaaS platform. Clean UI with animated sections and clear product messaging, continuously integrated via Vercel.",
        tags: ["React.js", "SaaS", "AI"],
        links: [{ label: "View Site ↗", href: "https://app2-2z52.vercel.app/" }],
        visual: `<div style="border: 1px solid rgba(255,255,255,0.06); padding: 1.2rem; background:rgba(0,0,0,0.3); border-radius:6px; font-size:12px;">
  <span style="color:var(--cli-green);">hayviral_saas_portal.jsx</span>
</div>`,
        visualStyle: "display:flex;flex-direction:column;justify-content:center;align-items:center;",
      },
      {
        index: "03 / Personal Branding",
        title: "Jawad Ahmed — Portfolio",
        description: "Personal portfolio website for a client. Custom design, smooth transitions, fully responsive layout built for conversion and aesthetic pacing.",
        tags: ["React.js", "Portfolio"],
        links: [{ label: "View Site ↗", href: "https://jawad-ahmed-iixx.vercel.app/" }],
        visual: `<div style="font-size:11px; color:var(--muted2);">// Freelance Client Render</div>
<div style="font-size:14px; color:var(--text); font-weight:400;">Jawad Ahmed Portfolio</div>
<div style="font-size:11px; color:var(--muted);">Custom Smooth Transitions</div>`,
        visualStyle: "display:flex;flex-direction:column;justify-content:center;gap:8px;",
      },
      {
        index: "04 / Logic & Tracking",
        title: "Habitanova",
        description: "Habit-tracking application built under pressure at a hackathon. React, component architecture, clean UX.",
        tags: ["React.js", "Hackathon"],
        links: [{ label: "View Site ↗", href: "https://habita-nova.vercel.app/" }],
        visual: `<div style="font-size:13px; color:var(--text);">Habit Tracker Application</div>
<div style="font-size:11px; color:var(--cli-green);">Hackathon Project Execution</div>`,
        visualStyle: "display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px;",
      },
      {
        index: "05 / E-Commerce Systems",
        title: "Gulacci",
        description: "Full brand website for a shoes label. Product showcase, responsive grid layout, modern minimalist design built for conversions.",
        tags: ["React.js", "E-commerce", "Branding"],
        links: [{ label: "live ↗", href: "https://gulacci.vercel.app/" }],
        visual: `<div style="font-size:11px; color:var(--muted2);">// Product Showcase Logic</div>
<div style="font-size:14px; color:var(--text); font-weight:400;">Gulacci — Shoes Brand</div>
<div style="font-size:11px; color:var(--muted);">E-commerce Grid Layout</div>`,
        visualStyle: "display:flex;flex-direction:column;justify-content:center;gap:8px;",
      },
      {
        index: "06 / Visual Architecture",
        title: "Pixels — Creative Portfolio",
        description: "A visual creative portfolio site. Clean grid-based layout, strong typography, built for showcasing visual work seamlessly.",
        tags: ["React.js", "Portfolio", "Design"],
        links: [{ label: "View Site ↗", href: "https://pixels-sigma-drab.vercel.app/" }],
        visual: `<div style="border: 1px solid rgba(255,255,255,0.06); padding: 1.2rem; background:rgba(0,0,0,0.3); border-radius:6px; font-size:12px;">
  <span style="color:var(--text);">Pixels Portfolio System</span><br>
  <span style="color:var(--muted2);">Visual Grid Engine</span>
</div>`,
        visualStyle: "display:flex;flex-direction:column;justify-content:center;align-items:center;",
      },
      {
        index: "07 / API Integration",
        title: "ISS Live Tracker",
        description: "Live International Space Station tracker. Real-time orbital position updates via NASA's open API, interactive map visualization, live coordinate display.",
        tags: ["API Integration", "Real-time", "JavaScript"],
        links: [
          { label: "Live ↗",   href: "https://iss-live-tracker-two.vercel.app/" },
          { label: "GitHub ↗", href: "https://github.com/Ammar2380/ISS-live-tracker" },
        ],
        visual: `<div class="code-header"><div class="code-dot"></div><span>nasa_api_socket.js</span></div>
<div style="font-size:11px; color:var(--muted);">Fetching live coordinates...</div>
<div style="font-size:13px; color:var(--text);">ISS Orbital Position Synced</div>
<div style="font-size:11px; color:var(--cli-green);">Real-time map rendering online.</div>`,
        visualStyle: "display:flex;flex-direction:column;justify-content:center;gap:8px;",
      },
    ],

    contact: [
      { label: "Email",       href: "mailto:ammarjamali2006@gmail.com",                              text: "ammarjamali2006@gmail.com"               },
      { label: "GitHub",      href: "https://github.com/Ammar2380",                                  text: "github.com/Ammar2380"                    },
      { label: "LinkedIn",    href: "https://www.linkedin.com/in/muhammad-ammar-jamali-4557b2366/", text: "linkedin.com/in/muhammad-ammar-jamali ↗" },
      { label: "X / Twitter", href: "https://x.com/___Ammar___1",                                   text: "@___Ammar___1 ↗"                         },
    ],

    footer: "Muhammad Ammar · Jamali · Web Dev",
  },

  // ══════════════════════════════════════════════════════════
  // PAGE: EXPERIENCE
  // ══════════════════════════════════════════════════════════
  exp: {
    experience: [
      {
        date: "2025 – JAN 2026",
        role: "Frontend Web Engineer / UI Developer",
        company: "HayViral — AI SaaS Company",
        summary: [
          "Built and shipped production React.js web applications for the company and its clients. Delivered mobile-first responsive UIs for an AI SaaS platform (HayViral) and a creative agency website (Team Uraan).",
          "Worked directly with client briefs and deployed all projects on Vercel. Hands-on experience in component architecture, cross-browser compatibility, and production deployment workflows.",
        ],
      },
      {
        date: "Freelance",
        role: "Frontend Developer",
        company: "Independent · Remote",
        summary: [
          "Designed and built custom web experiences for individual clients. Delivered Jawad Ahmed's personal portfolio (custom design, smooth transitions, fully responsive).",
          "Built Habitanova — a habit-tracking web app developed under hackathon conditions using React with clean component architecture and UX.",
        ],
      },
    ],

    education: [
      { name: "B.S. in Data Science",    sub: "University of Sindh, Jamshoro",               yr: "2024 – 2027" },
      { name: "Artificial Intelligence and Data Science",   sub: "SMIT — Saylani Mass IT Training",   yr: "Mar 2025 – May 2026"     },
      { name: "Data Science Program",    sub: "PITP — Government of Sindh Initiative",         yr: "Completed"     },
    ],

    contact: [
      { label: "Email",       href: "mailto:ammarjamali2006@gmail.com",                              text: "ammarjamali2006@gmail.com"               },
      { label: "GitHub",      href: "https://github.com/Ammar2380",                                  text: "github.com/Ammar2380"                    },
      { label: "LinkedIn",    href: "https://www.linkedin.com/in/muhammad-ammar-jamali-4557b2366/", text: "linkedin.com/in/muhammad-ammar-jamali ↗" },
      { label: "X / Twitter", href: "https://x.com/___Ammar___1",                                   text: "@___Ammar___1 ↗"                         },
    ],

    footer: "Muhammad Ammar · Jamali · Experience",
  },

  // ══════════════════════════════════════════════════════════
  // PAGE: ABOUT
  // ══════════════════════════════════════════════════════════
  about: {
    eyebrow: "Muhammad Ammar · Jamali · Pakistan",
    headline: ["The person", "behind the models."],
    headlineItalic: "models.",
    intro: "An AI Engineer who builds machines that learn and ships code that runs in production. Based in Pakistan, working with the world.",

    bioParas: [
      "I grew up in Pakistan — a place that taught me to be resourceful, move fast, and never wait for perfect conditions. In a Jamali household, ambition was expected and consistency was the standard. Both shaped how I work: with urgency, with focus, and with a strong belief that things should actually get done.",
      "My first real encounter with computers wasn't about games — it was about the realization that the screen was a window into a different kind of thinking. By secondary school, I knew I wanted to build things that think, not just use things that run.",
    ],

    chapters: [
      {
        label: "the turn",
        text: "When I discovered machine learning, something shifted. The idea that you could show a model enough examples and it would learn the pattern on its own — that felt like real engineering magic. I enrolled in Data Science at University of Sindh in 2024, simultaneously joined SMIT's Deep Learning program and PITP's Data Science program, and started building immediately. SpamScan was the proof of concept: DistilBERT fine-tuned to 97% F1, deployed live on Hugging Face Spaces, serving real predictions. That changed everything.",
      },
      {
        label: "the work",
        text: "I've fine-tuned transformers, designed CNNs from scratch, built data pipelines on tens of thousands of records, and shipped React.js applications for real paying clients at HayViral. Across AI and web, the standard is the same: does it work in production? Every project added something the lecture notes didn't cover. I measure progress by what ships, not what looks good in a notebook.",
      },
      {
        label: "now",
        text: "I'm actively building in public, studying across three programs simultaneously, and genuinely driven by where all of this is heading. I want to work on AI systems that matter — not toy demos, but production systems that change how someone does their job or lives their day. Open to AI Engineer roles globally, remote or on-site. If you've read this far, we should talk.",
      },
    ],

    contact: [
      { label: "Email",       href: "mailto:ammarjamali2006@gmail.com",                              text: "ammarjamali2006@gmail.com"               },
      { label: "GitHub",      href: "https://github.com/Ammar2380",                                  text: "github.com/Ammar2380"                    },
      { label: "LinkedIn",    href: "https://www.linkedin.com/in/muhammad-ammar-jamali-4557b2366/", text: "linkedin.com/in/muhammad-ammar-jamali ↗" },
      { label: "X / Twitter", href: "https://x.com/___Ammar___1",                                   text: "@___Ammar___1 ↗"                         },
    ],

    footer: "Muhammad Ammar · Jamali",
  },

  // ══════════════════════════════════════════════════════════
  // PAGE: PERSONAL
  // ══════════════════════════════════════════════════════════
  personal: {
    eyebrow: "Media · Interests · Experiments",
    headline: ["Beyond the model.", "The person behind it."],
    headlineItalic: "The person behind it.",
    bio: "Side interests, interactive experiments, and a snapshot of how I think outside the codebase.",

    reels: [
      { src: "reel1.mp4", index: "Reel 01", caption: "Add your caption here" },
      { src: "reel2.mp4", index: "Reel 02", caption: "Add your caption here" },
      { src: "reel3.mp4", index: "Reel 03", caption: "Add your caption here" },
    ],

    visuals: [
      { src: "visual1.jpg", alt: "Ammar Jamali", label: "visual 01" },
      { src: "visual2.jpg", alt: "",             label: "visual 02" },
      { src: "visual3.jpg", alt: "",             label: "visual 03" },
    ],

    novapad: {
      title: "NovaPad: C-Minor Pentatonic Matrix",
      hint:  "Press 1–4 · Q–R · A–F to trigger generative audio · hold to sustain",
      pads: [
        { pitch: 261.63,  trigger: "1", key: "1", note: "C4"  },
        { pitch: 311.13,  trigger: "2", key: "2", note: "Eb4" },
        { pitch: 349.23,  trigger: "3", key: "3", note: "F4"  },
        { pitch: 392.00,  trigger: "4", key: "4", note: "G4"  },
        { pitch: 466.16,  trigger: "q", key: "Q", note: "Bb4" },
        { pitch: 523.25,  trigger: "w", key: "W", note: "C5"  },
        { pitch: 622.25,  trigger: "e", key: "E", note: "Eb5" },
        { pitch: 698.46,  trigger: "r", key: "R", note: "F5"  },
        { pitch: 783.99,  trigger: "a", key: "A", note: "G5"  },
        { pitch: 932.33,  trigger: "s", key: "S", note: "Bb5" },
        { pitch: 1046.50, trigger: "d", key: "D", note: "C6"  },
        { pitch: 1244.51, trigger: "f", key: "F", note: "Eb6" },
      ],
    },

    logs: [
      {
        num: "Log 01",
        tag: "Telemetry & Missile Systems",
        body: "Fascinated by real-world system constraints. Beyond pure code frameworks, I track defense and aerospace system designs — specifically auditing historical telemetry logic and construction constraints behind systems like Tomahawk and Babur rockets.",
      },
      {
        num: "Log 02",
        tag: "Simulation Mechanics",
        body: "Interested in state-tracking constraints within driving and open-world simulator games. Studying physics modeling configurations like those seen in Motor Town ensures a strong appreciation for mathematical translation in real-time interfaces.",
      },
      {
        num: "Log 03",
        tag: "The Craft of Engineering",
        body: "I want to engineer AI paradigms that feel indistinguishable from magic to the end user, while remaining boringly stable and heavily documented underneath. That specific gap — between perceived sorcery and rigorous mechanical reality — is where the actual craft lives.",
      },
    ],

    footer: "Muhammad Ammar · Jamali",
  },

  // ══════════════════════════════════════════════════════════
  // AI AGENT REPLIES
  // ══════════════════════════════════════════════════════════
  agent: {
    greeting:   ["Hey! I'm Ammar's AI agent.", "Ask me about his projects, skills, experience, or how to contact him."],
    who:        ["Muhammad Ammar Jamali — AI Engineer & ML Developer based in Karachi, Pakistan.", "He builds end-to-end ML systems and React.js frontends. Currently studying B.S. Data Science at Uni of Sindh (2024–2027).", "Available for remote or on-site AI roles worldwide."],
    projects:   ["Ammar has shipped 8 AI/ML projects and 6+ web projects.", "AI/ML: Vektor RAG Pipeline, SpamScan, Face Recognition CNN, CIFAR-10, Diabetes ANN, Heart Disease, Real Estate EDA, Supermarket EDA.", "Web: HayViral SaaS, Team Uraan, Jawad Ahmed portfolio, Habitanova, Gulacci, Pixels, ISS Live Tracker.", "Ask about any specific project for details."],
    vektor:     ["Vektor — AI Research Assistant.", "A custom RAG pipeline engineered with strict mathematical safety guardrails to process dense, symbol-heavy documents.", "Built with FastAPI and dense embeddings (all-MiniLM-L6-v2) for absolute grounding."],
    spamscan:   ["SpamScan — fine-tuned DistilBERT spam classifier.", "97% F1 score. 40% lower latency vs TF-IDF baseline.", "Live demo → huggingface.co/spaces/AmmarJamali/spamscan", "Stack: Python, HuggingFace Transformers, Gradio."],
    face:       ["Face Recognition CNN Builder — custom CNN with Flask + OpenCV.", "Reduced data prep time by 60%.", "GitHub → github.com/Ammar2380/cnn-face-recognition-flask", "Stack: Python, Flask, OpenCV, TensorFlow."],
    cifar:      ["CIFAR-10 Image Classifier — custom CNN with TensorFlow/Keras.", "87% accuracy. +22% improvement over baseline.", "10 object categories, trained from scratch."],
    diabetes:   ["Diabetes Prediction ANN — 4-layer neural network.", "MSE of 2900. 35% faster convergence vs standard setup.", "Stack: Python, Keras, Pandas, NumPy."],
    heart:      ["Heart Disease Classifier — benchmarked 3 ML models.", "Best model hit 88% F1 score.", "Stack: Python, scikit-learn, Pandas, Matplotlib."],
    realestate: ["Pakistan Real Estate EDA — 10,000+ property listings across 5 cities.", "Uncovered key pricing patterns and location-based insights.", "Stack: Python, Pandas, Seaborn, Matplotlib."],
    supermarket:["Supermarket Sales EDA — retail transaction analysis.", "Found 34% revenue insight uplift through visual analysis.", "Stack: Python, Pandas, Matplotlib, Seaborn."],
    hayviral:   ["Ammar worked at HayViral (2025 – Jan 2026) as a Frontend Developer.", "Built the HayViral AI SaaS platform and Team Uraan creative agency site.", "Live → app2-2z52.vercel.app", "Stack: React.js, JavaScript ES6+, Vercel."],
    uraan:      ["Team Uraan — creative agency website.", "Live → teamuraan.vercel.app", "Stack: React.js, responsive design."],
    jawad:      ["Jawad Ahmed portfolio — personal branding site for a client.", "Live → jawad-ahmed-iixx.vercel.app", "Custom design, smooth transitions, fully responsive."],
    habitanova: ["Habitanova — habit tracking app built at a hackathon.", "Live → habita-nova.vercel.app", "Built fast under pressure with React, clean UX."],
    gulacci:    ["Gulacci — shoes brand website.", "GitHub → github.com/Ammar2380/Gulacci", "Product showcase, responsive grid, minimalist design."],
    pixels:     ["Pixels — creative portfolio site.", "Live → pixels-sigma-drab.vercel.app", "Grid-based layout, strong typography."],
    iss:        ["ISS Live Tracker — real-time International Space Station tracker.", "Live → iss-live-tracker-two.vercel.app", "GitHub → github.com/Ammar2380/ISS-live-tracker", "Pulls live coordinates from NASA's open API."],
    skills:     ["AI/ML: Python, TensorFlow, Keras, PyTorch, scikit-learn, HuggingFace Transformers, OpenCV, Gradio, Streamlit, FastAPI.", "Data: Pandas, NumPy, Matplotlib, Seaborn.", "Web: React.js, JavaScript ES6+, HTML5/CSS3, Vercel.", "Tooling: Git, GitHub, Jupyter, Google Colab."],
    python:     ["Yes, Python is Ammar's primary language.", "He uses it for ML pipelines, data analysis, FastAPI/Flask backends, and scripting."],
    react:      ["Ammar builds frontends with React.js — functional components, hooks, and clean UI.", "Used at HayViral and across all freelance projects."],
    education:  ["B.S. Data Science — University of Sindh, Jamshoro (2024–2027). In progress.", "Artificial Intelligence and Data Science — SMIT (Completed 2026).", "Data Science — PITP, Government of Sindh initiative (Completed)."],
    experience: ["HayViral — Frontend Developer (2025 – Jan 2026).", "Built React.js web apps: HayViral AI SaaS + Team Uraan agency site.", "Also active freelancer — 6+ web projects delivered independently."],
    hire:       ["Ammar is open to AI/ML and engineering roles — remote or on-site, worldwide.", "Email: ammarjamali2006@gmail.com", "Phone/WhatsApp: +92 312 3980106"],
    contact:    ["Email → ammarjamali2006@gmail.com", "Phone/WhatsApp → +92 312 3980106", "GitHub → github.com/Ammar2380", "LinkedIn → linkedin.com/in/muhammad-ammar-jamali-4557b2366", "X/Twitter → x.com/___Ammar___1"],
    github:     ["GitHub → github.com/Ammar2380", "All major projects are public — Vektor, SpamScan, Face Recognition, ISS Tracker, and more."],
    linkedin:   ["LinkedIn → linkedin.com/in/muhammad-ammar-jamali-4557b2366"],
    twitter:    ["X / Twitter → x.com/___Ammar___1"],
    location:   ["Ammar is based in Karachi, Pakistan.", "Available for remote roles globally, on-site in Pakistan."],
    age:        ["Ammar was born in 2006 — 19 years old.", "Already shipping production ML systems and React apps."],
    hf:         ["SpamScan is live on HuggingFace Spaces with 100+ predictions served.", "→ huggingface.co/spaces/AmmarJamali/spamscan"],
    thanks:     ["Anytime! Reach Ammar at ammarjamali2006@gmail.com."],
    help:       ["You can ask me about:", "→ Projects (Vektor, SpamScan, Face Recognition, ISS Tracker, etc.)", "→ Skills & tech stack", "→ Work experience & education", "→ How to hire or contact Ammar", "Just type naturally — I'll understand."],
    fallback:   ["I'm not sure about that specific detail.", "Try asking about Ammar's projects, skills, experience, or contact info.", "Or reach him directly → ammarjamali2006@gmail.com"],
  },
}