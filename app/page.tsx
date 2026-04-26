"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { skills } from "@/data/skills"
import { links } from "@/data/links"
import { profile } from "@/data/profile"
import { content } from "@/data/content"
import { projects } from "@/data/projects"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export default function Portfolio() {
  return (
    <div id="portfolio-root" className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section id="hero" aria-label="Hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div id="hero-bg-blobs" aria-hidden="true" className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div id="hero-content" className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            id="hero-text"
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.div
              className="inline-block"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              <div id="hero-tagline-badge" className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
                <span className="relative z-10">{profile.tagline}</span>
                <span aria-hidden="true" className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="text-5xl md:text-7xl font-bold tracking-tight"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <span className="block">{content.hero.greeting}</span>
              <span id="hero-name" className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                {profile.name}
              </span>
            </motion.h1>

            <motion.p
              id="hero-description"
              className="text-xl text-zinc-400 max-w-[600px]"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              {content.hero.description}
            </motion.p>

            <motion.div
              id="hero-cta-buttons"
              className="flex flex-wrap gap-4 pt-4"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              <Button id="hero-btn-experience" className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0" asChild>
                <Link href="#experience" aria-label="View work experience">
                  <span className="relative z-10 flex items-center">
                    {content.hero.ctaPrimary} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Link>
              </Button>
              <Button
                id="hero-btn-contact"
                variant="outline"
                className="border-zinc-700 text-pink-500 hover:text-pink-700 hover:border-zinc-500"
                asChild
              >
                <Link href="#contact" aria-label="Go to contact section">{content.hero.ctaSecondary}</Link>
              </Button>
            </motion.div>

            <motion.div
              id="hero-social-links"
              className="flex gap-4 pt-4"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              <Link id="hero-link-github" href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link id="hero-link-linkedin" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link id="hero-link-email" href={`mailto:${links.email}`} aria-label="Send email">
                <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            id="hero-animation"
            className="flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <CreativeHero />
          </motion.div>
        </div>

        <div id="hero-scroll-indicator" aria-hidden="true" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ─── About ────────────────────────────────────────────── */}
      <section id="about" aria-label="About me" className="py-32 relative">
        <div id="about-bg-blobs" aria-hidden="true" className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div id="about-content" className="container relative z-10">
          <SectionHeading title={content.about.sectionTitle} subtitle={content.about.sectionSubtitle} />

          <div id="about-grid" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div id="about-avatar" className="relative">
              <div aria-hidden="true" className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800 flex items-center justify-center bg-zinc-900">
                <Image
                  id="about-avatar-photo"
                  src="/avatar.png"
                  alt={profile.name}
                  fill
                  className="object-cover object-[100%_60%]"
                  priority
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div id="about-availability-badge" className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div aria-hidden="true" className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">{content.about.availabilityLabel}</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="about-bio" className="space-y-6">
              <GlassmorphicCard>
                <div id="about-bio-text">
                  {profile.bio.map((para, i) => (
                    <p key={i} className={`text-lg text-zinc-300 ${i > 0 ? "mt-4" : ""}`}>{para}</p>
                  ))}
                </div>

                <dl id="about-details" className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <dt className="text-sm text-zinc-500">{content.about.detailLabels.name}</dt>
                    <dd id="about-detail-name" className="font-medium">{profile.name}</dd>
                  </div>
                  <div className="space-y-1">
                    <dt className="text-sm text-zinc-500">{content.about.detailLabels.email}</dt>
                    <dd id="about-detail-email" className="font-medium">{links.email}</dd>
                  </div>
                  <div className="space-y-1">
                    <dt className="text-sm text-zinc-500">{content.about.detailLabels.location}</dt>
                    <dd id="about-detail-location" className="font-medium">{profile.location}</dd>
                  </div>
                  <div className="space-y-1">
                    <dt className="text-sm text-zinc-500">{content.about.detailLabels.availability}</dt>
                    <dd id="about-detail-availability" className="font-medium text-green-500">{content.about.availabilityLabel}</dd>
                  </div>
                </dl>

                <div id="about-resume-download" className="mt-8">
                  <a href={links.resume} download={profile.resumeFilename} aria-label="Download resume PDF">
                    <Button id="about-btn-resume" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0 text-white">{content.about.resumeButton}</Button>
                  </a>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Skills ───────────────────────────────────────────── */}
      <section id="skills" aria-label="Skills" className="py-32 relative">
        <div id="skills-bg-blobs" aria-hidden="true" className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div id="skills-content" className="container relative z-10">
          <SectionHeading title={content.skills.sectionTitle} subtitle={content.skills.sectionSubtitle} />

          <ul id="skills-grid" aria-label="Skills list" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 list-none p-0">
            {skills.map((skill) => (
              <li key={skill} id={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
                <SkillBadge name={skill} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Projects ─────────────────────────────────────────── */}
      <section id="projects" aria-label="Featured projects" className="py-32 relative">
        <div id="projects-bg-blobs" aria-hidden="true" className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div id="projects-content" className="container relative z-10">
          <SectionHeading title={content.projects.sectionTitle} subtitle={content.projects.sectionSubtitle} />

          <ul id="projects-grid" aria-label="Projects list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 list-none p-0">
            {projects.map((project, index) => (
              <li key={index} id={`project-${project.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
                <ProjectCard {...project} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Experience ───────────────────────────────────────── */}
      <section id="experience" aria-label="Work experience" className="py-32 relative">
        <div id="experience-bg-blobs" aria-hidden="true" className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div id="experience-content" className="container relative z-10">
          <SectionHeading title={content.experience.sectionTitle} subtitle={content.experience.sectionSubtitle} />

          <div id="experience-timeline" className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* ─── Contact ──────────────────────────────────────────── */}
      <section id="contact" aria-label="Contact" className="py-32 relative">
        <div id="contact-bg-blobs" aria-hidden="true" className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div id="contact-content" className="container relative z-10">
          <SectionHeading title={content.contact.sectionTitle} subtitle={content.contact.sectionSubtitle} />

          <div id="contact-grid" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 id="contact-info-heading" className="text-2xl font-bold mb-6">{content.contact.infoHeading}</h3>
              <ul id="contact-info-list" className="space-y-6 list-none p-0">
                <li id="contact-info-email" className="flex items-center gap-4">
                  <div aria-hidden="true" className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">{content.contact.contactLabels.email}</div>
                    <a href={`mailto:${links.email}`} className="font-medium hover:text-purple-400 transition-colors">{links.email}</a>
                  </div>
                </li>
                <li id="contact-info-linkedin" className="flex items-center gap-4">
                  <div aria-hidden="true" className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">{content.contact.contactLabels.linkedin}</div>
                    <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-purple-400 transition-colors">{links.linkedin.replace("https://www.", "")}</a>
                  </div>
                </li>
                <li id="contact-info-github" className="flex items-center gap-4">
                  <div aria-hidden="true" className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">{content.contact.contactLabels.github}</div>
                    <a href={links.github} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-purple-400 transition-colors">{links.github.replace("https://", "")}</a>
                  </div>
                </li>
              </ul>

              <div id="contact-status" className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">{content.contact.statusHeading}</h4>
                <div className="flex items-center gap-2">
                  <div aria-hidden="true" className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>{content.about.availabilityStatus}</span>
                </div>
              </div>
            </GlassmorphicCard>

            <div id="contact-form-wrapper">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ───────────────────────────────────────────── */}
      <footer id="site-footer" aria-label="Site footer" className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div id="footer-brand">
            <Link id="footer-logo" href="/" aria-label={`${profile.name} — back to top`} className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{profile.brandName}</span>
              <span className="text-white">{profile.brandSuffix}</span>
            </Link>
            <p id="footer-copyright" className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
          </div>
          <div id="footer-social-links" className="flex gap-4">
            <Link id="footer-link-github" href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link id="footer-link-linkedin" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link id="footer-link-email" href={`mailto:${links.email}`} aria-label="Send email">
              <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
