export type Project = {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl: string
  repoUrl: string
}

export const projects: Project[] = [
  {
    title: "E2E Automation Framework",
    description:
      "A scalable Page Object Model framework using Playwright and TypeScript with GitHub Actions CI integration and Allure reporting.",
    tags: ["Playwright", "TypeScript", "GitHub Actions", "Allure"],
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "https://github.com/schhunju",
    repoUrl: "https://github.com/schhunju",
  },
  {
    title: "API Test Suite",
    description:
      "Comprehensive REST API testing framework built with REST Assured and Java, covering auth flows, contract testing, and performance benchmarks.",
    tags: ["REST Assured", "Java", "TestNG", "JSON Schema"],
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "https://github.com/schhunju",
    repoUrl: "https://github.com/schhunju",
  },
  {
    title: "Mobile Test Automation",
    description:
      "Cross-platform mobile automation suite using Appium for Android and iOS apps with BDD Cucumber integration.",
    tags: ["Appium", "Cucumber", "BDD", "Java"],
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "https://github.com/schhunju",
    repoUrl: "https://github.com/schhunju",
  },
  {
    title: "Performance Testing Suite",
    description:
      "Load and stress testing setup using JMeter to establish baseline metrics and catch performance regressions in CI.",
    tags: ["JMeter", "CI/CD", "Python", "Docker"],
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "https://github.com/schhunju",
    repoUrl: "https://github.com/schhunju",
  },
  {
    title: "QA Dashboard",
    description:
      "Real-time quality metrics dashboard aggregating test results, flakiness rates, and coverage trends from multiple pipelines.",
    tags: ["React", "Node.js", "PostgreSQL", "Recharts"],
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "https://github.com/schhunju",
    repoUrl: "https://github.com/schhunju",
  },
  {
    title: "Test Data Factory",
    description:
      "A utility library for generating deterministic, reproducible test data for complex domain models to eliminate test interdependencies.",
    tags: ["Python", "Faker", "SQLAlchemy", "Docker"],
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "https://github.com/schhunju",
    repoUrl: "https://github.com/schhunju",
  },
]
