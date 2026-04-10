import './App.css'

const resumeHref = '/Harsheet-Sharma-Resume.pdf'

const impactMetrics = [
  { value: '5,000+', label: 'Concurrent job simulations handled in OpsFlow tests' },
  { value: '99%', label: 'Uptime target reached under workflow load' },
  { value: '90.5%', label: 'Job success rate achieved with retries and recovery logic' },
  { value: '85%', label: 'Reduction in failed job conflicts after persistent execution tracking' },
]

const featuredProjects = [
  {
    title: 'OpsFlow',
    subtitle: 'Distributed workflow orchestration engine',
    stack: ['TypeScript', 'Node.js', 'Redis', 'BullMQ', 'PostgreSQL'],
    summary:
      'A control-plane and worker-plane architecture for async job execution, retry orchestration, and observable background processing.',
    highlights: [
      'Separated API coordination from stateless workers so the system can scale horizontally without shared state.',
      'Implemented exponential backoff and resilient retries for thousands of concurrent jobs.',
      'Stored execution logs and state transitions in PostgreSQL to support auditability and debugging.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/harsheetsharma/opsflow' }],
  },
  {
    title: 'Payment System',
    subtitle: 'Transaction-safe transfer engine',
    stack: ['Node.js', 'PostgreSQL', 'Prisma', 'Stripe'],
    summary:
      'A backend-first payment product focused on correctness under concurrency, row-level locking, and idempotent transaction flows.',
    highlights: [
      'Used database transactions and row-level locking to prevent race conditions and double spending.',
      'Designed idempotent APIs that safely tolerate retries, webhook callbacks, and partial failure scenarios.',
      'Validated ledger consistency across more than 100 concurrent user scenarios.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/harsheetsharma/paytm-complete' }],
  },
  {
    title: 'Open Source Contributions',
    subtitle: 'Production code shipped into established projects',
    stack: ['Rocket.Chat', 'AsyncAPI', 'TypeScript', 'API tooling'],
    summary:
      'Hands-on contributions to mature codebases where review quality, backward compatibility, and engineering discipline matter.',
    highlights: [
      'Migrated Rocket.Chat API endpoints toward AJV-validated structured formats during their OpenAPI migration effort.',
      'Refactored federation code in Rocket.Chat and caught a review-stage bug before merge.',
      'Fixed a mobile layout issue in AsyncAPI Studio with a clean, low-regression change that passed quality gates.',
    ],
    links: [{ label: 'GitHub Profile', href: 'https://github.com/harsheetsharma' }],
  },
]

const openSourceTimeline = [
  {
    period: 'March 2026',
    title: 'Rocket.Chat',
    detail:
      'Migrated the rooms.createDiscussion endpoint into the new API structure with AJV validation to support the broader OpenAPI modernization effort.',
  },
  {
    period: 'March 2026',
    title: 'Rocket.Chat Federation',
    detail:
      'Extracted Matrix user ID generation into a reusable utility and resolved a bug during review iteration before it landed.',
  },
  {
    period: 'March 2026',
    title: 'AsyncAPI Studio',
    detail:
      'Fixed mobile overflow caused by unwrapped monospace strings and kept the contribution clean enough to pass SonarCloud with no new issues.',
  },
]

const skillGroups = [
  {
    heading: 'Backend',
    items: ['Node.js', 'TypeScript', 'Express', 'Hono', 'REST APIs', 'BullMQ', 'WebSockets'],
  },
  {
    heading: 'Data',
    items: ['PostgreSQL', 'Redis', 'Prisma', 'MySQL', 'MongoDB'],
  },
  {
    heading: 'Systems',
    items: ['Distributed systems', 'Idempotency', 'Retries and backoff', 'Concurrency control', 'Caching', 'Fault tolerance'],
  },
  {
    heading: 'Tooling',
    items: ['Docker', 'GitHub Actions', 'Linux', 'Git', 'Postman', 'Swagger', 'AWS essentials'],
  },
]

const engineeringFocus = [
  {
    title: 'Correctness under load',
    copy: 'I care about race conditions, retries, and data integrity before I care about buzzwords.',
  },
  {
    title: 'Clear system boundaries',
    copy: 'I like splitting control-plane logic from worker execution so services stay understandable and scalable.',
  },
  {
    title: 'Production-minded APIs',
    copy: 'Validation, observability, and idempotency are part of the design, not cleanup work after shipping.',
  },
]

function App() {
  return (
    <div className="page-shell">
      <div className="page-glow glow-one" />
      <div className="page-glow glow-two" />

      <header className="site-header">
        <a className="wordmark" href="#top">
          Harsheet Sharma
        </a>
        <nav className="site-nav" aria-label="Primary">
          <a href="#projects">Projects</a>
          <a href="#open-source">Open source</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy reveal">
            <p className="eyebrow">Backend Engineer / Node.js / TypeScript / PostgreSQL / Redis</p>
            <h1>Building reliable systems that stay calm under concurrency.</h1>
            <p className="hero-text">
              I am Harsheet Sharma, a backend-focused engineer from Nagpur who enjoys building
              idempotent APIs, queue-driven architectures, and distributed systems that behave
              correctly when real traffic, retries, and failure modes show up.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://github.com/harsheetsharma"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
              <a className="button button-secondary" href={resumeHref} target="_blank" rel="noreferrer">
                Download Resume
              </a>
            </div>
            <div className="hero-meta">
              <span>Open to remote / relocation</span>
              <span>Available immediately</span>
              <span>BCA, RTM Nagpur University</span>
            </div>
          </div>

          <aside className="signal-card reveal reveal-delay">
            <div className="signal-terminal">
              <div className="terminal-top">
                <span />
                <span />
                <span />
              </div>
              <div className="terminal-body">
                <p>$ engineer.profile</p>
                <p>
                  role: <strong>Backend Engineer</strong>
                </p>
                <p>
                  focus: <strong>distributed systems</strong>
                </p>
                <p>
                  current: <strong>open-source contributor</strong>
                </p>
                <p>
                  tools: <strong>Node.js, TypeScript, PostgreSQL, Redis</strong>
                </p>
                <p>
                  location: <strong>Nagpur, Maharashtra</strong>
                </p>
              </div>
            </div>
            <div className="signal-grid">
              {engineeringFocus.map((item) => (
                <article className="signal-block" key={item.title}>
                  <h2>{item.title}</h2>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </aside>
        </section>

        <section className="metrics-section reveal">
          {impactMetrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </section>

        <section className="section-grid reveal">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Backend-first, with a strong bias for engineering fundamentals.</h2>
          </div>
          <div className="section-copy">
            <p>
              My work sits at the intersection of APIs, data consistency, background processing,
              and operational reliability. I am most comfortable in TypeScript-heavy backend
              systems where thoughtful validation, retries, observability, and transactional
              safety make the difference between something that demos well and something that
              survives production.
            </p>
            <p>
              Beyond personal projects, I actively contribute to open-source teams like
              Rocket.Chat and AsyncAPI, which has helped me sharpen review discipline, codebase
              navigation, and the ability to land focused improvements inside larger systems.
            </p>
          </div>
        </section>

        <section className="content-section reveal" id="projects">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Featured Work</p>
              <h2>Projects shaped around reliability, scale, and system correctness.</h2>
            </div>
            <a
              className="inline-link"
              href="https://github.com/harsheetsharma?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              See all repositories
            </a>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-head">
                  <div>
                    <p className="project-title">{project.title}</p>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                  <div className="chip-row">
                    {project.stack.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="project-summary">{project.summary}</p>

                <ul className="project-points">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section reveal" id="open-source">
          <div className="section-heading">
            <p className="eyebrow">Open Source</p>
            <h2>Recent contributions in production-facing codebases.</h2>
          </div>

          <div className="timeline">
            {openSourceTimeline.map((item) => (
              <article className="timeline-item" key={item.title}>
                <span className="timeline-period">{item.period}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section reveal" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools and concepts I reach for when building backend products.</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.heading}>
                <h3>{group.heading}</h3>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span className="chip chip-soft" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section reveal" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build backend systems that are fast, observable, and dependable.</h2>
          </div>
          <div className="contact-links">
            <a href="mailto:harshitsharma8012@gmail.com">harshitsharma8012@gmail.com</a>
            <a href="https://github.com/harsheetsharma" target="_blank" rel="noreferrer">
              github.com/harsheetsharma
            </a>
            <a href="https://www.linkedin.com/in/harsheet-sharma-64f63" target="_blank" rel="noreferrer">
              linkedin.com/in/harsheet-sharma-64f63
            </a>
            <a href="tel:+919960437210">+91 9960437210</a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
