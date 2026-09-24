/**
 * ============================================================
 *  data.js — YOUR SINGLE SOURCE OF TRUTH
 *  Edit ONLY this file to update skills, experience, projects
 * ============================================================
 */

const PORTFOLIO_DATA = {

  /* ── PERSONAL INFO ──────────────────────────────────────── */
  personal: {
    name: "Karan Bastola",
    title: "Backend Developer",
    subtitle: "PHP · Laravel · Node.js · AngularJS · Nginx",
    description: "Building <strong>scalable APIs</strong>, enterprise Laravel systems, and real-time backends. 2+ years delivering production-grade software at <strong>Lepide</strong>, Delhi.",
    location: "Delhi, India",
    available: true, // toggle the green "available" pill
    email: "karanbastola87@gmail.com",
    phone: "+91-8860922438",
    linkedin: "https://linkedin.com/in/karanbastola",
  },

  /* ── STATS (hero section) ───────────────────────────────── */
  stats: [
    { num: "2+",  label: "Years experience" },
    { num: "8+",  label: "Technologies" },
    { num: "∞",   label: "Bugs squashed" },
  ],

  /* ── SKILLS ─────────────────────────────────────────────── */
  /*
   * To ADD a new skill category: copy one object block and add it to the array.
   * To ADD a skill to a category: add { name: "Skill" } to its `skills` array.
   * Mark a skill as new with: { name: "Skill", isNew: true }
   */
  skills: [
    {
      category: "Backend",
      skills: [
        { name: "PHP" },
        { name: "Laravel" },
        { name: "Node.js", isNew: true },
        { name: "RESTful APIs" },
        { name: "Webhooks" },
        { name: "Event-Driven" },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript" },
        { name: "AngularJS", isNew: true },
        { name: "AJAX" },
        { name: "Bootstrap" },
      ],
    },
    {
      category: "Database & Server",
      skills: [
        { name: "MySQL" },
        { name: "Nginx", isNew: true },
        { name: "Git" },
        { name: "Performance Optimization" },
      ],
    },
    {
      category: "Practices",
      skills: [
        { name: "MVC Architecture" },
        { name: "Debugging" },
        { name: "Live Chat Integration" },
        { name: "Client Handling" },
      ],
    },
  ],

  /* ── EXPERIENCE ─────────────────────────────────────────── */
  /*
   * To ADD a new job: copy one object block and add it at the TOP of the array
   * (most recent first).
   */
  experience: [
    {
      role: "Product Developer",
      company: "Lepide",
      location: "Noida, India",
      period: "May 2024 – Present",
      bullets: [
        "Maintained and enhanced enterprise-level Laravel applications, improving performance and system reliability.",
        "Identified, debugged, and resolved critical production bugs, reducing downtime and improving user experience.",
        "Designed new modules and features using Laravel, PHP, and MySQL following MVC best practices.",
        "Collaborated across teams to deliver client projects on schedule and to quality standards.",
        "Managed client deliveries — requirement gathering, demos, and post-launch support.",
        "Resolved live production escalations by troubleshooting and coordinating rapid fixes.",
      ],
    },
    // ── ADD NEW JOB BELOW ──
    // {
    //   role: "Senior Backend Developer",
    //   company: "New Company",
    //   location: "Remote",
    //   period: "Jan 2026 – Present",
    //   bullets: [
    //     "Did something awesome.",
    //   ],
    // },
  ],

  /* ── PROJECTS ───────────────────────────────────────────── */
  /*
   * To ADD a project: copy one object block and add it to the array.
   * Icons are emojis — pick any you like.
   */
  projects: [
    {
      icon: "⚡",
      title: "Real-Time Laravel Application",
      description: "Full-stack Laravel app with secure authentication, role-based authorization, and real-time notifications via webhooks and event-driven architecture. Production-grade with query optimization and clean code patterns.",
      tags: ["Laravel", "PHP", "MySQL", "Webhooks", "AngularJS", "Bootstrap"],
      link: "", // optional: add a GitHub/live URL
    },
    {
      icon: "🏗️",
      title: "Enterprise Backend Systems",
      description: "Contributed to multiple enterprise-grade codebases at Lepide — RESTful APIs, live chat module integration, scalable backend features, and Nginx server configuration for high-traffic production environments.",
      tags: ["Laravel", "Node.js", "Nginx", "REST API", "MySQL", "Git"],
      link: "",
    },
    // ── ADD NEW PROJECT BELOW ──
    // {
    //   icon: "🚀",
    //   title: "My New Project",
    //   description: "What it does.",
    //   tags: ["Node.js", "Express"],
    //   link: "https://github.com/yourrepo",
    // },
  ],

  /* ── EDUCATION ──────────────────────────────────────────── */
  education: [
    {
      icon: "🎓",
      degree: "Master of Computer Applications (MCA)",
      institution: "Indira Gandhi National Open University, Delhi",
      year: "In Progress",
    },
    {
      icon: "📘",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Indira Gandhi National Open University, Delhi",
      year: "2025",
    },
    {
      icon: "💡",
      degree: "Master Diploma in Computer Application",
      institution: "Indian Institute of Computer Science, Delhi",
      year: "2024",
    },
  ],
};
