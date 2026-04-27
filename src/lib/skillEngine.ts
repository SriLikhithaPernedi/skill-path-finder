export interface RoleSkills {
  role: string;
  requiredSkills: string[];
}

export interface AnalysisResult {
  role: string;
  matchPercentage: number;
  matchedSkills: string[];
  missingSkills: string[];
  roadmap: RoadmapStep[];
}

export interface RoadmapStep {
  step: number;
  title: string;
  description: string;
}

const roleDatabase: Record<string, RoleSkills> = {
  "Data Scientist": {
    role: "Data Scientist",
    requiredSkills: [
      "Python", "R", "SQL", "Statistics", "Machine Learning",
      "Data Visualization", "Pandas", "NumPy", "Scikit-learn",
      "TensorFlow", "Deep Learning", "NLP", "Big Data", "Tableau"
    ],
  },
  "Web Developer": {
    role: "Web Developer",
    requiredSkills: [
      "HTML", "CSS", "JavaScript", "TypeScript", "React",
      "Node.js", "Git", "REST APIs", "SQL", "MongoDB",
      "Responsive Design", "Testing", "CI/CD", "Docker"
    ],
  },
  "AI Engineer": {
    role: "AI Engineer",
    requiredSkills: [
      "Python", "Machine Learning", "Deep Learning", "TensorFlow",
      "PyTorch", "NLP", "Computer Vision", "Mathematics",
      "Statistics", "Data Structures", "Algorithms", "MLOps",
      "Cloud Computing", "Docker"
    ],
  },
  "Software Developer": {
    role: "Software Developer",
    requiredSkills: [
      "Data Structures", "Algorithms", "OOP", "Git",
      "SQL", "REST APIs", "Testing", "Design Patterns",
      "CI/CD", "Docker", "Agile", "Problem Solving",
      "System Design", "Debugging"
    ],
  },
  "Cloud Engineer": {
    role: "Cloud Engineer",
    requiredSkills: [
      "Cloud Computing", "AWS", "Azure", "GCP", "Docker",
      "Kubernetes", "Terraform", "CI/CD", "Linux",
      "Networking", "Security", "Monitoring", "Python", "Bash"
    ],
  },
  "DevOps Engineer": {
    role: "DevOps Engineer",
    requiredSkills: [
      "Linux", "Docker", "Kubernetes", "CI/CD", "Git",
      "Terraform", "Ansible", "Monitoring", "Cloud Computing",
      "Bash", "Python", "Networking", "Security", "Jenkins"
    ],
  },
  "Mobile Developer": {
    role: "Mobile Developer",
    requiredSkills: [
      "React Native", "Flutter", "Swift", "Kotlin",
      "JavaScript", "TypeScript", "REST APIs", "Git",
      "UI/UX Design", "Testing", "Firebase", "SQL",
      "App Store Deployment", "Performance Optimization"
    ],
  },
  "Cybersecurity Analyst": {
    role: "Cybersecurity Analyst",
    requiredSkills: [
      "Networking", "Linux", "Security", "Ethical Hacking",
      "SIEM", "Incident Response", "Cryptography", "Firewalls",
      "Vulnerability Assessment", "Python", "Risk Management",
      "Compliance", "Forensics", "Penetration Testing"
    ],
  },
  "UI/UX Designer": {
    role: "UI/UX Designer",
    requiredSkills: [
      "Figma", "UI/UX Design", "Wireframing", "Prototyping",
      "User Research", "Usability Testing", "Typography",
      "Color Theory", "Responsive Design", "Design Systems",
      "Interaction Design", "Accessibility", "HTML", "CSS"
    ],
  },
  "Product Manager": {
    role: "Product Manager",
    requiredSkills: [
      "Product Strategy", "Agile", "User Research", "Data Analysis",
      "Roadmapping", "Stakeholder Management", "A/B Testing",
      "SQL", "Wireframing", "Market Research", "Communication",
      "Problem Solving", "Prioritization", "Analytics"
    ],
  },
  "Machine Learning Engineer": {
    role: "Machine Learning Engineer",
    requiredSkills: [
      "Python", "Machine Learning", "Deep Learning", "TensorFlow",
      "PyTorch", "MLOps", "Data Structures", "Algorithms",
      "Statistics", "SQL", "Docker", "Cloud Computing",
      "Feature Engineering", "Model Deployment"
    ],
  },
  "Database Administrator": {
    role: "Database Administrator",
    requiredSkills: [
      "SQL", "PostgreSQL", "MySQL", "MongoDB", "Database Design",
      "Performance Tuning", "Backup & Recovery", "Data Modeling",
      "Linux", "Security", "Replication", "Cloud Computing",
      "Scripting", "Monitoring"
    ],
  },
  "Blockchain Developer": {
    role: "Blockchain Developer",
    requiredSkills: [
      "Solidity", "Ethereum", "Smart Contracts", "Web3.js",
      "JavaScript", "Cryptography", "Data Structures", "Git",
      "REST APIs", "Node.js", "Testing", "DeFi",
      "NFTs", "Security"
    ],
  },
  "Game Developer": {
    role: "Game Developer",
    requiredSkills: [
      "C++", "C#", "Unity", "Unreal Engine", "Game Design",
      "3D Mathematics", "Physics Simulation", "Animation",
      "Shader Programming", "Version Control", "OOP",
      "Performance Optimization", "AI Programming", "Networking"
    ],
  },
  "Data Engineer": {
    role: "Data Engineer",
    requiredSkills: [
      "Python", "SQL", "Apache Spark", "Kafka", "Airflow",
      "ETL Pipelines", "Data Warehousing", "Cloud Computing",
      "Docker", "Big Data", "Data Modeling", "Bash",
      "Streaming Data", "Data Quality"
    ],
  },
  "Full Stack Developer": {
    role: "Full Stack Developer",
    requiredSkills: [
      "HTML", "CSS", "JavaScript", "TypeScript", "React",
      "Node.js", "SQL", "MongoDB", "REST APIs", "Git",
      "Docker", "CI/CD", "Testing", "System Design"
    ],
  },
  "QA Engineer": {
    role: "QA Engineer",
    requiredSkills: [
      "Testing", "Selenium", "Cypress", "API Testing", "SQL",
      "Git", "Agile", "Performance Testing", "Test Automation",
      "Bug Tracking", "CI/CD", "Python", "JavaScript",
      "Mobile Testing"
    ],
  },
};

const skillRoadmaps: Record<string, Record<string, RoadmapStep>> = {
  "Python": { step: { step: 0, title: "Learn Python Basics", description: "Master Python syntax, data types, loops, and functions through interactive tutorials." }},
  "R": { step: { step: 0, title: "Learn R Programming", description: "Start with R basics for statistical computing and data analysis." }},
  "SQL": { step: { step: 0, title: "Master SQL Queries", description: "Learn database querying, joins, aggregations, and optimization." }},
  "Statistics": { step: { step: 0, title: "Study Statistics Fundamentals", description: "Cover probability, distributions, hypothesis testing, and regression." }},
  "Machine Learning": { step: { step: 0, title: "Learn Machine Learning", description: "Study supervised and unsupervised learning algorithms with hands-on projects." }},
  "Data Visualization": { step: { step: 0, title: "Master Data Visualization", description: "Learn to create compelling charts and dashboards using matplotlib and seaborn." }},
  "Pandas": { step: { step: 0, title: "Learn Pandas Library", description: "Master data manipulation and analysis with Python's Pandas library." }},
  "NumPy": { step: { step: 0, title: "Learn NumPy", description: "Understand numerical computing with arrays and mathematical operations." }},
  "HTML": { step: { step: 0, title: "Learn HTML Fundamentals", description: "Master semantic HTML elements, forms, and page structure." }},
  "CSS": { step: { step: 0, title: "Master CSS Styling", description: "Learn Flexbox, Grid, animations, and responsive design techniques." }},
  "JavaScript": { step: { step: 0, title: "Learn JavaScript", description: "Cover ES6+, DOM manipulation, async programming, and modules." }},
  "TypeScript": { step: { step: 0, title: "Learn TypeScript", description: "Add type safety to JavaScript with interfaces, generics, and advanced types." }},
  "React": { step: { step: 0, title: "Master React", description: "Build component-based UIs with hooks, state management, and routing." }},
  "Node.js": { step: { step: 0, title: "Learn Node.js", description: "Build server-side applications with Express, middleware, and APIs." }},
  "Git": { step: { step: 0, title: "Learn Git & GitHub", description: "Master version control with branching, merging, and collaboration workflows." }},
  "REST APIs": { step: { step: 0, title: "Understand REST APIs", description: "Learn to design, build, and consume RESTful web services." }},
  "Docker": { step: { step: 0, title: "Learn Docker", description: "Containerize applications for consistent deployment across environments." }},
  "TensorFlow": { step: { step: 0, title: "Learn TensorFlow", description: "Build and train neural networks for deep learning applications." }},
  "PyTorch": { step: { step: 0, title: "Learn PyTorch", description: "Master dynamic neural networks and research-oriented deep learning." }},
  "Deep Learning": { step: { step: 0, title: "Study Deep Learning", description: "Understand CNNs, RNNs, transformers, and advanced neural architectures." }},
  "NLP": { step: { step: 0, title: "Learn NLP", description: "Process and analyze text data with tokenization, embeddings, and language models." }},
  "Data Structures": { step: { step: 0, title: "Master Data Structures", description: "Learn arrays, linked lists, trees, graphs, and hash tables." }},
  "Algorithms": { step: { step: 0, title: "Study Algorithms", description: "Practice sorting, searching, dynamic programming, and greedy algorithms." }},
  "OOP": { step: { step: 0, title: "Learn Object-Oriented Programming", description: "Understand encapsulation, inheritance, polymorphism, and design principles." }},
  "Testing": { step: { step: 0, title: "Learn Software Testing", description: "Write unit tests, integration tests, and practice TDD methodology." }},
  "CI/CD": { step: { step: 0, title: "Set Up CI/CD Pipelines", description: "Automate builds, tests, and deployments with GitHub Actions or Jenkins." }},
  "MongoDB": { step: { step: 0, title: "Learn MongoDB", description: "Master NoSQL database design, queries, and aggregation pipelines." }},
  "Design Patterns": { step: { step: 0, title: "Study Design Patterns", description: "Learn common software patterns: Singleton, Observer, Factory, and more." }},
  "Agile": { step: { step: 0, title: "Learn Agile Methodology", description: "Understand Scrum, Kanban, sprints, and agile project management." }},
  "System Design": { step: { step: 0, title: "Study System Design", description: "Learn scalability, load balancing, caching, and distributed systems." }},
  "Debugging": { step: { step: 0, title: "Improve Debugging Skills", description: "Master debugging tools, techniques, and systematic problem-solving." }},
  "Responsive Design": { step: { step: 0, title: "Learn Responsive Design", description: "Build layouts that work across all device sizes with media queries." }},
  "Scikit-learn": { step: { step: 0, title: "Learn Scikit-learn", description: "Implement ML algorithms with Python's most popular ML library." }},
  "Big Data": { step: { step: 0, title: "Learn Big Data Tools", description: "Work with Spark, Hadoop, and distributed data processing frameworks." }},
  "Tableau": { step: { step: 0, title: "Learn Tableau", description: "Create interactive dashboards and business intelligence visualizations." }},
  "Computer Vision": { step: { step: 0, title: "Learn Computer Vision", description: "Process images and video with OpenCV and deep learning models." }},
  "Mathematics": { step: { step: 0, title: "Study Mathematics for AI", description: "Cover linear algebra, calculus, and optimization theory." }},
  "MLOps": { step: { step: 0, title: "Learn MLOps", description: "Deploy and monitor ML models in production with best practices." }},
  "Cloud Computing": { step: { step: 0, title: "Learn Cloud Computing", description: "Get started with AWS, GCP, or Azure for scalable infrastructure." }},
  "Problem Solving": { step: { step: 0, title: "Practice Problem Solving", description: "Solve coding challenges on LeetCode, HackerRank, and Codeforces." }},
  "AWS": { step: { step: 0, title: "Learn AWS", description: "Master core AWS services: EC2, S3, Lambda, RDS, and IAM." }},
  "Azure": { step: { step: 0, title: "Learn Microsoft Azure", description: "Get hands-on with Azure cloud services and certifications." }},
  "GCP": { step: { step: 0, title: "Learn Google Cloud Platform", description: "Explore GCP services including Compute Engine, BigQuery, and Cloud Functions." }},
  "Kubernetes": { step: { step: 0, title: "Learn Kubernetes", description: "Orchestrate containers with Kubernetes for scalable deployments." }},
  "Terraform": { step: { step: 0, title: "Learn Terraform", description: "Define infrastructure as code with HashiCorp Terraform." }},
  "Linux": { step: { step: 0, title: "Learn Linux Administration", description: "Master the Linux command line, file systems, and server management." }},
  "Networking": { step: { step: 0, title: "Learn Networking Fundamentals", description: "Understand TCP/IP, DNS, HTTP, load balancing, and network security." }},
  "Security": { step: { step: 0, title: "Learn Cybersecurity Basics", description: "Study security principles, threats, vulnerabilities, and defense mechanisms." }},
  "Monitoring": { step: { step: 0, title: "Learn Monitoring & Observability", description: "Set up monitoring with Prometheus, Grafana, and alerting systems." }},
  "Bash": { step: { step: 0, title: "Learn Bash Scripting", description: "Automate tasks with shell scripting and command-line tools." }},
  "Ansible": { step: { step: 0, title: "Learn Ansible", description: "Automate configuration management and application deployment." }},
  "Jenkins": { step: { step: 0, title: "Learn Jenkins", description: "Set up CI/CD pipelines with Jenkins for automated builds and deployments." }},
  "React Native": { step: { step: 0, title: "Learn React Native", description: "Build cross-platform mobile apps using React Native and JavaScript." }},
  "Flutter": { step: { step: 0, title: "Learn Flutter", description: "Create beautiful native mobile apps with Google's Flutter framework." }},
  "Swift": { step: { step: 0, title: "Learn Swift", description: "Develop iOS applications with Apple's Swift programming language." }},
  "Kotlin": { step: { step: 0, title: "Learn Kotlin", description: "Build Android applications with modern Kotlin programming." }},
  "Firebase": { step: { step: 0, title: "Learn Firebase", description: "Use Firebase for authentication, database, and hosting in mobile apps." }},
  "App Store Deployment": { step: { step: 0, title: "Learn App Store Deployment", description: "Publish apps to Google Play Store and Apple App Store." }},
  "Performance Optimization": { step: { step: 0, title: "Learn Performance Optimization", description: "Optimize app performance with profiling, caching, and efficient code." }},
  "UI/UX Design": { step: { step: 0, title: "Learn UI/UX Design", description: "Study design principles, user-centered design, and interface best practices." }},
  "Ethical Hacking": { step: { step: 0, title: "Learn Ethical Hacking", description: "Practice penetration testing and ethical hacking techniques." }},
  "SIEM": { step: { step: 0, title: "Learn SIEM Tools", description: "Monitor security events with Splunk, ELK Stack, or similar SIEM tools." }},
  "Incident Response": { step: { step: 0, title: "Learn Incident Response", description: "Develop skills in detecting, responding to, and recovering from security incidents." }},
  "Cryptography": { step: { step: 0, title: "Learn Cryptography", description: "Understand encryption, hashing, digital signatures, and PKI." }},
  "Firewalls": { step: { step: 0, title: "Learn Firewall Management", description: "Configure and manage firewalls for network security." }},
  "Vulnerability Assessment": { step: { step: 0, title: "Learn Vulnerability Assessment", description: "Scan and assess systems for security vulnerabilities using tools like Nessus." }},
  "Risk Management": { step: { step: 0, title: "Learn Risk Management", description: "Assess and mitigate cybersecurity risks in organizations." }},
  "Compliance": { step: { step: 0, title: "Learn Security Compliance", description: "Understand GDPR, HIPAA, SOC 2, and other compliance frameworks." }},
  "Forensics": { step: { step: 0, title: "Learn Digital Forensics", description: "Investigate cybercrimes with forensic analysis tools and techniques." }},
  "Penetration Testing": { step: { step: 0, title: "Learn Penetration Testing", description: "Simulate attacks to find and fix security vulnerabilities." }},
  "Figma": { step: { step: 0, title: "Learn Figma", description: "Design interfaces and prototypes with Figma's collaborative design tool." }},
  "Wireframing": { step: { step: 0, title: "Learn Wireframing", description: "Create low-fidelity wireframes to plan layout and user flows." }},
  "Prototyping": { step: { step: 0, title: "Learn Prototyping", description: "Build interactive prototypes to test and validate design ideas." }},
  "User Research": { step: { step: 0, title: "Learn User Research", description: "Conduct interviews, surveys, and usability tests to understand users." }},
  "Usability Testing": { step: { step: 0, title: "Learn Usability Testing", description: "Test designs with real users to identify pain points and improvements." }},
  "Typography": { step: { step: 0, title: "Learn Typography", description: "Master font pairing, hierarchy, and readability in design." }},
  "Color Theory": { step: { step: 0, title: "Learn Color Theory", description: "Understand color relationships, palettes, and accessibility in design." }},
  "Design Systems": { step: { step: 0, title: "Learn Design Systems", description: "Build and maintain scalable design systems with reusable components." }},
  "Interaction Design": { step: { step: 0, title: "Learn Interaction Design", description: "Design engaging micro-interactions and motion for digital products." }},
  "Accessibility": { step: { step: 0, title: "Learn Accessibility (a11y)", description: "Ensure designs are usable by everyone, including people with disabilities." }},
  "Product Strategy": { step: { step: 0, title: "Learn Product Strategy", description: "Define product vision, goals, and go-to-market strategies." }},
  "Roadmapping": { step: { step: 0, title: "Learn Roadmapping", description: "Create and manage product roadmaps to align teams and stakeholders." }},
  "Stakeholder Management": { step: { step: 0, title: "Learn Stakeholder Management", description: "Communicate effectively with stakeholders and manage expectations." }},
  "A/B Testing": { step: { step: 0, title: "Learn A/B Testing", description: "Run experiments to validate product decisions with data." }},
  "Market Research": { step: { step: 0, title: "Learn Market Research", description: "Analyze market trends, competitors, and customer needs." }},
  "Communication": { step: { step: 0, title: "Improve Communication Skills", description: "Develop written and verbal communication for professional settings." }},
  "Prioritization": { step: { step: 0, title: "Learn Prioritization Frameworks", description: "Use RICE, MoSCoW, and other frameworks to prioritize features." }},
  "Analytics": { step: { step: 0, title: "Learn Product Analytics", description: "Track and analyze user behavior with tools like Mixpanel and Amplitude." }},
  "Data Analysis": { step: { step: 0, title: "Learn Data Analysis", description: "Analyze data sets to extract insights and inform decisions." }},
  "Feature Engineering": { step: { step: 0, title: "Learn Feature Engineering", description: "Create and select features to improve ML model performance." }},
  "Model Deployment": { step: { step: 0, title: "Learn Model Deployment", description: "Deploy ML models to production using APIs and serving frameworks." }},
  "PostgreSQL": { step: { step: 0, title: "Learn PostgreSQL", description: "Master advanced PostgreSQL features including indexing, views, and stored procedures." }},
  "MySQL": { step: { step: 0, title: "Learn MySQL", description: "Learn MySQL database management, queries, and administration." }},
  "Database Design": { step: { step: 0, title: "Learn Database Design", description: "Design normalized schemas, ER diagrams, and data relationships." }},
  "Performance Tuning": { step: { step: 0, title: "Learn Performance Tuning", description: "Optimize database queries, indexes, and server configuration." }},
  "Backup & Recovery": { step: { step: 0, title: "Learn Backup & Recovery", description: "Implement database backup strategies and disaster recovery plans." }},
  "Data Modeling": { step: { step: 0, title: "Learn Data Modeling", description: "Design conceptual, logical, and physical data models." }},
  "Replication": { step: { step: 0, title: "Learn Database Replication", description: "Set up master-slave replication and high availability clusters." }},
  "Scripting": { step: { step: 0, title: "Learn Scripting for Automation", description: "Automate database tasks with Python, Bash, or PowerShell scripts." }},
  "Solidity": { step: { step: 0, title: "Learn Solidity", description: "Write smart contracts for Ethereum blockchain in Solidity." }},
  "Ethereum": { step: { step: 0, title: "Learn Ethereum", description: "Understand Ethereum blockchain, consensus, and ecosystem." }},
  "Smart Contracts": { step: { step: 0, title: "Learn Smart Contracts", description: "Build, test, and deploy smart contracts on blockchain platforms." }},
  "Web3.js": { step: { step: 0, title: "Learn Web3.js", description: "Interact with blockchain from web apps using Web3.js library." }},
  "DeFi": { step: { step: 0, title: "Learn DeFi", description: "Understand decentralized finance protocols, DEXs, and lending." }},
  "NFTs": { step: { step: 0, title: "Learn NFT Development", description: "Create and deploy NFT smart contracts and marketplaces." }},
  "C++": { step: { step: 0, title: "Learn C++", description: "Master C++ programming with memory management and STL." }},
  "C#": { step: { step: 0, title: "Learn C#", description: "Build applications with C# and .NET framework." }},
  "Unity": { step: { step: 0, title: "Learn Unity", description: "Create 2D and 3D games with Unity game engine." }},
  "Unreal Engine": { step: { step: 0, title: "Learn Unreal Engine", description: "Build high-fidelity games with Unreal Engine and Blueprints." }},
  "Game Design": { step: { step: 0, title: "Learn Game Design", description: "Study game mechanics, level design, and player experience." }},
  "3D Mathematics": { step: { step: 0, title: "Learn 3D Mathematics", description: "Master vectors, matrices, quaternions, and transformations for games." }},
  "Physics Simulation": { step: { step: 0, title: "Learn Physics Simulation", description: "Implement realistic physics with collision detection and rigid bodies." }},
  "Animation": { step: { step: 0, title: "Learn Animation", description: "Create character animations, state machines, and blend trees." }},
  "Shader Programming": { step: { step: 0, title: "Learn Shader Programming", description: "Write custom shaders for visual effects in GLSL or HLSL." }},
  "Version Control": { step: { step: 0, title: "Learn Version Control", description: "Use Git and other VCS tools for collaborative development." }},
  "AI Programming": { step: { step: 0, title: "Learn AI Programming for Games", description: "Implement pathfinding, behavior trees, and NPC AI." }},
  "Apache Spark": { step: { step: 0, title: "Learn Apache Spark", description: "Process large-scale data with Spark's distributed computing framework." }},
  "Kafka": { step: { step: 0, title: "Learn Apache Kafka", description: "Build real-time streaming pipelines with Kafka." }},
  "Airflow": { step: { step: 0, title: "Learn Apache Airflow", description: "Orchestrate complex data workflows and ETL pipelines." }},
  "ETL Pipelines": { step: { step: 0, title: "Learn ETL Pipelines", description: "Design Extract, Transform, Load pipelines for data processing." }},
  "Data Warehousing": { step: { step: 0, title: "Learn Data Warehousing", description: "Build data warehouses with Snowflake, Redshift, or BigQuery." }},
  "Streaming Data": { step: { step: 0, title: "Learn Streaming Data", description: "Process real-time data streams with Kafka, Flink, or Kinesis." }},
  "Data Quality": { step: { step: 0, title: "Learn Data Quality", description: "Implement data validation, profiling, and quality monitoring." }},
  "Selenium": { step: { step: 0, title: "Learn Selenium", description: "Automate browser testing with Selenium WebDriver." }},
  "Cypress": { step: { step: 0, title: "Learn Cypress", description: "Write fast, reliable end-to-end tests with Cypress." }},
  "API Testing": { step: { step: 0, title: "Learn API Testing", description: "Test APIs with Postman, REST Assured, or similar tools." }},
  "Performance Testing": { step: { step: 0, title: "Learn Performance Testing", description: "Load test applications with JMeter, k6, or Gatling." }},
  "Test Automation": { step: { step: 0, title: "Learn Test Automation", description: "Build automated test frameworks and CI/CD test pipelines." }},
  "Bug Tracking": { step: { step: 0, title: "Learn Bug Tracking", description: "Use Jira, Bugzilla, or similar tools for defect management." }},
  "Mobile Testing": { step: { step: 0, title: "Learn Mobile Testing", description: "Test mobile apps with Appium, XCUITest, or Espresso." }},
};

export function getAvailableRoles(): string[] {
  return Object.keys(roleDatabase);
}

export function analyzeSkills(role: string, userSkillsRaw: string): AnalysisResult {
  const roleData = roleDatabase[role];
  if (!roleData) {
    return { role, matchPercentage: 0, matchedSkills: [], missingSkills: [], roadmap: [] };
  }

  const userSkills = userSkillsRaw
    .split(",")
    .map(s => s.trim().toLowerCase())
    .filter(s => s.length > 0);

  const matched: string[] = [];
  const missing: string[] = [];

  roleData.requiredSkills.forEach(skill => {
    if (userSkills.some(us => us === skill.toLowerCase() || skill.toLowerCase().includes(us) || us.includes(skill.toLowerCase()))) {
      matched.push(skill);
    } else {
      missing.push(skill);
    }
  });

  const matchPercentage = Math.round((matched.length / roleData.requiredSkills.length) * 100);

  const roadmap: RoadmapStep[] = missing.map((skill, i) => {
    const entry = skillRoadmaps[skill];
    return {
      step: i + 1,
      title: entry ? entry.step.title : `Learn ${skill}`,
      description: entry ? entry.step.description : `Study ${skill} through online courses and practice projects.`,
    };
  });

  return { role, matchPercentage, matchedSkills: matched, missingSkills: missing, roadmap };
}
