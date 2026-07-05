const portfolioData = {
  researchCore: [
    {
      title: "AI in Education",
      description:
        "Researching how artificial intelligence reorganizes learning environments, instructional interaction, and student engagement in technology-enhanced education systems."
    },
    {
      title: "Student Learning Autonomy",
      description:
        "Examining how learners develop self-regulated learning capacities, agency, and adaptive learning practices within AI-supported educational contexts."
    }
  ],
  statement:
    "My research focuses on how artificial intelligence reshapes learning environments and how students develop autonomous learning abilities within technology-enhanced education systems. I am particularly interested in the interaction between AI-enhanced learning systems, learner behavior, and self-regulated learning processes, with attention to how educational technologies mediate students' capacity to plan, monitor, and evaluate their own learning. This portfolio is positioned toward Education PhD study, with a primary interest in Hong Kong research programs and a broader interest in Mainland China and European doctoral opportunities.",
  questions: [
    "How do AI-enhanced learning systems transform the conditions under which students develop autonomous and self-regulated learning practices in higher education contexts?",
    "In what ways do students interpret, negotiate, and adapt their learning behaviors when artificial intelligence becomes embedded in everyday educational environments?",
    "How can qualitative case study research explain the relationship between AI-mediated learning environments, learner agency, and the development of student learning autonomy?"
  ],
  academicSignal: "Bachelor Thesis: The Recognition and Measurement of Data Assets",
  methods: [
    "Qualitative research design",
    "Case study approach",
    "Interview-based analysis",
    "Theoretical interpretation"
  ],
  projects: [
    {
      title: "Education Research Vault",
      description:
        "A structured archive for Education PhD literature, theoretical concepts, methodological notes, and potential dissertation directions."
    },
    {
      title: "AI & Learning Systems Notes",
      description:
        "A focused research notes module tracking AI-enhanced learning environments, student autonomy, learning behavior, and educational technology debates."
    },
    {
      title: "Faculty Mapping Database",
      description:
        "A supervision-fit database for Hong Kong priority programs, Mainland China secondary options, and selected Europe PhD positions."
    }
  ],
  architecture: [
    "Publications",
    "Conferences",
    "Supervisor Interactions",
    "Research Progress Updates"
  ]
};

const renderList = (targetId, items, template) => {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = items.map(template).join("");
};

document.getElementById("research-statement").textContent = portfolioData.statement;
document.getElementById("academic-signal").textContent = portfolioData.academicSignal;

renderList(
  "research-core-list",
  portfolioData.researchCore,
  (item) => `
    <article class="core-card">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `
);

renderList(
  "research-questions-list",
  portfolioData.questions,
  (question) => `<li>${question}</li>`
);

renderList("methodology-list", portfolioData.methods, (method) => `<li>${method}</li>`);

renderList(
  "projects-list",
  portfolioData.projects,
  (project) => `
    <article class="project-card">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </article>
  `
);

renderList(
  "architecture-list",
  portfolioData.architecture,
  (item, index) => `
    <div class="architecture-item">
      <span>Module ${String(index + 1).padStart(2, "0")}</span>
      <strong>${item}</strong>
    </div>
  `
);
