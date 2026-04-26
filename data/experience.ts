export type Role = {
  title: string
  period: string
  description: string
}

export type Experience = {
  company: string
  roles: Role[]
}

export const experiences: Experience[] = [
  {
    company: "UBA Solutions · Monotype",
    roles: [
      {
        title: "Senior SDET / Acting QA Lead",
        period: "Nov 2022 – Present",
        description:
          "Led end-to-end quality strategy, test planning, and release readiness across multiple product teams. Architected automation frameworks using Python, Selenium, Pytest, and Accelq. Increased automation coverage by 40%, implemented Jenkins CI/CD with automated reporting, and developed a multilingual email localization framework covering 20+ languages. Mentored junior QAs and interns.",
      },
    ],
  },
  {
    company: "InfoDevelopers Pvt. Ltd.",
    roles: [
      {
        title: "Senior QA Engineer",
        period: "Jul 2022 – Nov 2022",
        description:
          "Promoted to Senior QA Engineer, taking ownership of QA strategy and end-to-end quality for financial applications. Led test planning, facilitated UAT with business teams, and mentored junior QA members.",
      },
      {
        title: "QA Engineer",
        period: "Jun 2021 – Jul 2022",
        description:
          "Performed Cypress automation, functional, API, and load testing for financial applications. Created test plans, test cases, and documentation to improve coverage and structure. Collaborated with developers and analysts to identify issues early in the lifecycle.",
      },
    ],
  },
  {
    company: "ITGlance",
    roles: [
      {
        title: "Junior QA Engineer",
        period: "May 2019 – Jun 2021",
        description:
          "Performed manual and regression testing across multiple applications. Introduced Cypress automation for specific modules, reducing test cycle time. Created structured test cases and defect reports, and trained interns on QA fundamentals.",
      },
    ],
  },
]
