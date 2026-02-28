export interface Project {
  slug: string;
  title: string;
  problem: string;
  techStack: string[];
  featured: boolean; // Controls homepage visibility (max 4 shown)
  githubUrl?: string;
  liveUrl?: string;
}

export interface ProjectDetail extends Project {
  constraints: string[];
  systemDesign: string;
  implementation: string[];
  outcome: string;
  lessons: string[];
}

/**
 * Centralized project data
 * 
 * To control homepage visibility:
 * - Set `featured: true` for projects to appear on homepage
 * - Maximum 4 featured projects will be shown
 * - All projects appear on the /projects page regardless
 */
export const projects: ProjectDetail[] = [
  {
    slug: "mordern-tech-solutions",
    title: "Modern Tech Solutions",
    problem: "Employee information was being kept in spreadsheets making the whole operation tedious and unmanageble.",
    techStack: ["Vue.js", "Node.js", "SQL", "HTML", "CSS"],
    featured: true,
    githubUrl: "https://github.com/Brayn-Meyer/moderntech-solutions-hr-system.git",
    liveUrl: "https://moderntech-solutions-hr-system.vercel.app/",
    constraints: [
      "Worked in a group of 3",
      "Had 2 weeks to complete the project",
      "Was restricted to using only the specified tech stack"
    ],
    systemDesign: "Data and employee information is store in a digital database. This allows hr to keep track of all information in one place and easily access it. The system also allows for easy updates and changes to employee information without the need for manual updates to spreadsheets.",
    implementation: [
      "Built overall design and asethic in Vue.js with HTML and CSS",
      "Made api calls to the backend using Node.js to fetch and update employee information",
      "Stored employee information in a SQL database for easy access and management",
      "Intergrated Vue.js frontend with Node.js backend to create a seamless user experience for hr staff"
    ],
    outcome: "Reduced the time it took to update employee information and kept all employee information in one place.",
    lessons: [
      "How to work in a small group and divide tasks effectively",
      "How to manage time effectively to complete a project within a tight deadline",
      "How to work with a specific tech stack and leverage its strengths to build a functional and user-friendly application"
    ]
  },
  {
    slug: "we-plan-ecommerce",
    title: "We Plan E-Commerce",
    problem: "New client setup required manual coordination across 5 departments with no visibility into progress.",
    techStack: ["PHP", "SQL", "HTML", "CSS"],
    featured: true,
    githubUrl: "https://github.com/Brayn-Meyer/weplan-e-commerce-website.git",
    // liveUrl: "https://moderntech-solutions-hr-system.vercel.app/",
    constraints: [
      "Each department had different internal systems",
      "Compliance requirements mandated specific task ordering",
      "No dedicated IT staff for ongoing maintenance",
      "Must work with existing email-based culture"
    ],
    systemDesign: "Created a state machine-based pipeline where each client moves through defined stages. Tasks are assigned automatically based on stage transitions. The system integrates with email for notifications but stores all state centrally, providing a single source of truth.",
    implementation: [
      "Modeled onboarding as a directed acyclic graph of dependent tasks",
      "Built REST API for status updates from department-specific tools",
      "Implemented escalation logic for overdue tasks",
      "Created admin interface for pipeline customization without code changes"
    ],
    outcome: "Reduced average onboarding time from 3 weeks to 5 days. Task completion visibility went from 0% to 100%. Zero missed compliance steps since deployment.",
    lessons: [
      "State machines provide clarity that ad-hoc status fields cannot match",
      "Email notifications work when they link to a canonical status page",
      "Building for configurability upfront saved significant maintenance time"
    ]
  },
  {
    slug: "overdrive-tech-enterprise",
    title: "Overdrive Tech Enterprise",
    problem: "Monthly reports took 2 days to compile from multiple data sources with frequent errors.",
    techStack: ["Oracle Apex", "SQL"],
    featured: true,
    // githubUrl: "https://github.com/username/reporting-dashboard",
    liveUrl: "https://oracleapex.com/ords/r/lifechoicesacademy/ot-enterprise/dashboard",
    constraints: [
      "Data sources included legacy systems with no APIs",
      "Some data required manual review before inclusion",
      "Reports needed to match existing format exactly",
      "Finance team had no SQL or programming experience"
    ],
    systemDesign: "Built a data pipeline that extracts from each source on a schedule, transforms data into a unified schema, and loads it into a reporting database. A React dashboard provides real-time access, while a scheduled job generates the monthly PDF matching the legacy format.",
    implementation: [
      "Created adapters for each data source, including screen-scraping for legacy systems",
      "Built a staging area for manual data review with approval workflow",
      "Implemented incremental updates to minimize extraction load",
      "Added data quality checks that flag anomalies before report generation"
    ],
    outcome: "Reduced monthly reporting time from 2 days to 2 hours (mostly review). Eliminated data entry errors. Enabled weekly metrics access that wasn't previously feasible.",
    lessons: [
      "Matching existing output formats exactly builds trust faster than 'improved' formats",
      "Human review steps can be systematized without being eliminated",
      "Data quality issues are best caught at ingestion, not report generation"
    ]
  },
  // {
  //   slug: "document-workflow",
  //   title: "Document Workflow Engine",
  //   problem: "Approval processes relied on email chains, leading to lost documents and compliance gaps.",
  //   techStack: ["Go", "PostgreSQL", "S3", "React"],
  //   featured: true,
  //   githubUrl: "https://github.com/username/document-workflow",
  //   constraints: [
  //     "Documents contained sensitive client information",
  //     "Approval chains varied by contract type and value",
  //     "Mobile access required for traveling executives",
  //     "Must integrate with existing document storage"
  //   ],
  //   systemDesign: "Implemented a workflow engine where documents are stored once and referenced by ID. Approval chains are defined as templates and instantiated for each document. All actions are logged immutably, creating a complete audit trail without email archaeology.",
  //   implementation: [
  //     "Built document versioning with diff visualization",
  //     "Created dynamic approval chains based on document metadata",
  //     "Implemented secure mobile-friendly approval interface",
  //     "Added scheduled reminders with escalation to backup approvers"
  //   ],
  //   outcome: "Average approval cycle reduced from 8 days to 2 days. Audit preparation time reduced by 90%. Zero compliance findings related to document approvals in subsequent reviews.",
  //   lessons: [
  //     "Immutable audit logs are worth the storage cost",
  //     "Backup approvers prevent single points of failure in time-sensitive processes",
  //     "Mobile approval interfaces need to be extremely simple to get adoption"
  //   ]
  // },
  // {
  //   slug: "fleet-maintenance",
  //   title: "Fleet Maintenance Tracker",
  //   problem: "Vehicle maintenance was tracked on paper, leading to missed service intervals and unexpected breakdowns.",
  //   techStack: ["TypeScript", "PostgreSQL", "React Native"],
  //   featured: false,
  //   githubUrl: "https://github.com/username/fleet-maintenance",
  //   liveUrl: "https://fleet.example.com",
  //   constraints: [
  //     "Drivers had varying levels of technical comfort",
  //     "Vehicles operated in areas with poor connectivity",
  //     "Integration required with existing fuel card system",
  //     "Budget constraints limited hardware changes"
  //   ],
  //   systemDesign: "Built a mobile-first system that tracks mileage and service history per vehicle. Maintenance schedules are calculated dynamically based on manufacturer recommendations and actual usage patterns. Offline-capable sync ensures data capture regardless of connectivity.",
  //   implementation: [
  //     "Developed React Native app with offline-first architecture",
  //     "Created predictive maintenance alerts based on mileage and time",
  //     "Built integration layer for fuel card transaction imports",
  //     "Implemented driver-friendly interface with minimal required input"
  //   ],
  //   outcome: "Reduced unexpected breakdowns by 72%. Extended average vehicle lifespan by 18 months. Maintenance costs decreased 23% through better scheduling.",
  //   lessons: [
  //     "Offline-first isn't optional for field applications",
  //     "Predictive alerts are only useful if they're actionable",
  //     "Driver adoption required making data entry faster than paper"
  //   ]
  // },
  // {
  //   slug: "shift-scheduler",
  //   title: "Shift Scheduling System",
  //   problem: "Shift scheduling consumed 6+ hours weekly for managers and still resulted in coverage gaps and last-minute scrambles.",
  //   techStack: ["Python", "PostgreSQL", "React", "Redis"],
  //   featured: false,
  //   githubUrl: "https://github.com/username/shift-scheduler",
  //   constraints: [
  //     "Complex union rules governed shift assignments",
  //     "Employee availability changed frequently",
  //     "Multiple locations with different staffing requirements",
  //     "Managers needed mobile access for approvals"
  //   ],
  //   systemDesign: "Developed a constraint-based scheduling engine that generates optimal schedules while respecting all rules. The system learns from historical patterns and manager overrides to improve suggestions over time. Real-time notifications handle shift swaps and coverage requests.",
  //   implementation: [
  //     "Built constraint solver with configurable rule sets per location",
  //     "Created availability management portal for employees",
  //     "Implemented shift swap marketplace with automatic rule validation",
  //     "Added real-time notifications for urgent coverage needs"
  //   ],
  //   outcome: "Reduced scheduling time from 6 hours to 45 minutes weekly. Coverage gaps decreased by 89%. Employee satisfaction with schedules improved measurably.",
  //   lessons: [
  //     "Constraint solvers need escape hatches for manager judgment",
  //     "Employee self-service reduces administrative burden significantly",
  //     "Union rules are complex but can be encoded systematically"
  //   ]
  // }
];

/**
 * Get projects for homepage display
 * Returns only featured projects, limited to 4
 */
export const getFeaturedProjects = (): Project[] => {
  return projects
    .filter(p => p.featured)
    .slice(0, 4)
    .map(({ slug, title, problem, techStack, featured, githubUrl, liveUrl }) => ({
      slug,
      title,
      problem,
      techStack,
      featured,
      githubUrl,
      liveUrl
    }));
};

/**
 * Get all projects for the projects page
 */
export const getAllProjects = (): Project[] => {
  return projects.map(({ slug, title, problem, techStack, featured, githubUrl, liveUrl }) => ({
    slug,
    title,
    problem,
    techStack,
    featured,
    githubUrl,
    liveUrl
  }));
};

/**
 * Get full project details by slug
 */
export const getProjectBySlug = (slug: string): ProjectDetail | undefined => {
  return projects.find(p => p.slug === slug);
};
