"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Senior QA Engineer",
    company: "Current Company",
    period: "2022 - Present",
    description:
      "Lead test automation strategy across web, mobile, and API layers. Designed and implemented a Playwright-based E2E framework integrated into GitHub Actions CI/CD pipelines. Mentored QA engineers and drove quality culture across engineering teams.",
  },
  {
    title: "QA Engineer / SDET",
    company: "Previous Company",
    period: "2019 - 2022",
    description:
      "Built REST API test automation suites using REST Assured and Java. Established test data management practices and contributed to shift-left testing initiatives, reducing production defect rates significantly.",
  },
  {
    title: "QA Engineer",
    company: "Earlier Company",
    period: "2017 - 2019",
    description:
      "Performed functional, regression, and exploratory testing across web and mobile applications. Introduced Selenium WebDriver automation to replace manual regression suites and cut release cycle time.",
  },
  {
    title: "Junior QA Engineer",
    company: "First Company",
    period: "2015 - 2017",
    description:
      "Started career in software quality, writing test cases, filing detailed bug reports, and learning test automation fundamentals with Selenium IDE and Java.",
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: false }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
