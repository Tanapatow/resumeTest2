import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Github, Mail, Phone, ExternalLink } from 'lucide-react';
import profileImage from 'figma:asset/4a7564e857df88addd8cbb2cf7fc675b1ef10ec8.png';

const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <FadeInSection>
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20">
                  <img 
                    src={profileImage} 
                    alt="Tanapat Kongnomnan" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Hero Content */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-5xl md:text-6xl mb-3 text-foreground">
                  Tanapat Kongnomnan
                </h1>
                <p className="text-xl md:text-2xl text-primary mb-6">
                  Junior Full-stack Developer
                </p>
                <p className="text-lg text-muted-foreground mb-2">
                  ไม่มีอะไรที่เราทำไม่ได้
                </p>
                <p className="text-base text-muted-foreground mb-8">
                  สายเทคกำลังมา
                </p>

                {/* CTA Links */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href="https://github.com/Tanapatow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                  <a
                    href="mailto:tanapat.ow@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-card text-card-foreground border border-border rounded-lg hover:bg-accent transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-20 space-y-32">
        {/* Tech Stack Section */}
        <section id="tech-stack">
          <FadeInSection delay={0.1}>
            <h2 className="text-4xl mb-12 text-center text-foreground">Tech Stack</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Programming Languages */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl mb-4 text-muted-foreground">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-accent text-accent-foreground rounded-lg">
                    JavaScript
                  </span>
                  <span className="px-4 py-2 bg-accent text-accent-foreground rounded-lg">
                    TypeScript
                  </span>
                </div>
              </div>

              {/* Frontend */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl mb-4 text-muted-foreground">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-accent text-accent-foreground rounded-lg">
                    Next.js
                  </span>
                  <span className="px-4 py-2 bg-accent text-accent-foreground rounded-lg">
                    React
                  </span>
                </div>
              </div>

              {/* Backend */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl mb-4 text-muted-foreground">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-accent text-accent-foreground rounded-lg">
                    NestJS
                  </span>
                  <span className="px-4 py-2 bg-accent text-accent-foreground rounded-lg">
                    Node.js
                  </span>
                </div>
              </div>

              {/* Database */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl mb-4 text-muted-foreground">Database</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-accent text-accent-foreground rounded-lg">
                    Prisma
                  </span>
                  <span className="px-4 py-2 bg-accent text-accent-foreground rounded-lg">
                    PostgreSQL
                  </span>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* Projects Section - Main Focus */}
        <section id="projects">
          <FadeInSection delay={0.2}>
            <h2 className="text-4xl mb-12 text-center text-foreground">Featured Projects</h2>
            
            <div className="space-y-8">
              {/* Project 1: Nextpense */}
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-3xl mb-4 text-foreground">Nextpense</h3>
                    
                    <p className="text-lg text-muted-foreground mb-6">
                      Website สำหรับจัดการรายรับ-รายจ่าย ช่วยให้ผู้ใช้สามารถติดตามการเงินส่วนตัวได้อย่างมีประสิทธิภาพ
                    </p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm">Next.js</span>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm">NestJS</span>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm">Prisma</span>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm">PostgreSQL</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">Role</h4>
                        <p className="text-foreground">Solo Developer - Full-stack Development</p>
                      </div>

                      <div>
                        <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">Key Features</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Track income and expenses with categories</li>
                          <li>• Generate financial reports and analytics</li>
                          <li>• Real-time data synchronization</li>
                          <li>• Responsive design for mobile and desktop</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://github.com/Tanapatow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                      <button className="inline-flex items-center gap-2 px-4 py-2 bg-card text-card-foreground border border-border rounded-lg hover:bg-accent transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Project Placeholder */}
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-all opacity-60">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-3xl mb-4 text-foreground">More Projects Coming Soon</h3>
                    
                    <p className="text-lg text-muted-foreground mb-6">
                      Currently working on additional projects to showcase full-stack development capabilities.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">Focus Areas</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-sm">E-commerce</span>
                          <span className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-sm">Real-time Apps</span>
                          <span className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-sm">API Development</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* Education Section */}
        <section id="education">
          <FadeInSection delay={0.3}>
            <h2 className="text-4xl mb-12 text-center text-foreground">Education</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* University */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-foreground">Srinakharinwirot University</h3>
                    <p className="text-muted-foreground mb-1">Computer Communication</p>
                    <p className="text-sm text-muted-foreground">Graduated 2024</p>
                  </div>
                </div>
              </div>

              {/* Bootcamp */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-foreground">Devnest</h3>
                    <p className="text-muted-foreground mb-1">Full-stack Development Bootcamp</p>
                    <p className="text-sm text-muted-foreground">1st Generation</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* Soft Skills Section */}
        <section id="soft-skills">
          <FadeInSection delay={0.4}>
            <h2 className="text-4xl mb-12 text-center text-foreground">Developer Skills</h2>
            
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="mb-1 text-foreground">Problem-solving</h4>
                    <p className="text-sm text-muted-foreground">Breaking down complex issues into manageable solutions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="mb-1 text-foreground">Logical Thinking</h4>
                    <p className="text-sm text-muted-foreground">Structured approach to coding challenges</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="mb-1 text-foreground">Self-learning</h4>
                    <p className="text-sm text-muted-foreground">Continuously learning new technologies</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="mb-1 text-foreground">Debugging Mindset</h4>
                    <p className="text-sm text-muted-foreground">Systematic approach to finding and fixing bugs</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="mb-1 text-foreground">Team Collaboration</h4>
                    <p className="text-sm text-muted-foreground">Working effectively with other developers</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <FadeInSection delay={0.5}>
            <h2 className="text-4xl mb-12 text-center text-foreground">Get In Touch</h2>
            
            <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-center text-muted-foreground mb-8">
                สนใจร่วมงานหรือมีโปรเจกต์ที่น่าสนใจ ติดต่อได้ทุกช่องทางเลยครับ
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:tanapat.ow@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground">tanapat.ow@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:0626965050"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground">062-696-5050</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Tanapatow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="text-foreground">github.com/Tanapatow</p>
                  </div>
                </a>
              </div>
            </div>
          </FadeInSection>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-muted-foreground">
          <p>© 2026 Tanapat Kongnomnan. Built with Next.js & NestJS.</p>
        </div>
      </footer>
    </div>
  );
}
