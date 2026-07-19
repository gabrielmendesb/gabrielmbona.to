import type { Content } from './types'

export const en: Content = {
  htmlLang: 'en',
  meta: {
    title: 'Gabriel Mendes Bonato — Software Engineer · Industrial IoT & Energy',
    description:
      'Full-stack software engineer working in industrial IoT and energy. Lead engineer of a monitoring and remote-control platform running across a fleet of utility-scale solar plants.',
  },
  ui: {
    skip: 'Skip to content',
    cv: 'CV',
    getInTouch: 'Get in touch',
    copy: 'Copy',
    copied: 'Copied',
    source: 'Site source on GitHub',
    navLabel: 'Page sections',
    sections: {
      top: 'Intro',
      work: 'Current work',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
    },
  },
  intro: {
    title: 'Full-stack software engineer — industrial IoT & energy',
    whoLabel: 'Who am I',
    who:
      'I’m from Araraquara, Brazil. I was hooked on computers from childhood — playing games and hanging around the online communities. With most of my family being programmers and logical problems coming easy to me, software was a short step. Since then I’ve worked across fairly different fields — factory equipment, point-of-sale systems, now solar plants. Currently venturing into Mandarin.',
    workLabel: 'My work',
    work:
      'I lead the engineering of MeuWatt, a monitoring and remote-control platform for utility-scale solar plants. I designed and built most of the system — from device drivers on plant networks, through the backend ingesting fleet telemetry, to the operator dashboard — and I operate it: deploys, incidents, and on-site commissioning included.',
  },
  caseStudy: {
    kicker: 'Current work',
    heading: 'MeuWatt — solar plant monitoring & control',
    period: '2025 — present',
    summary:
      'MeuWatt is the operations platform of a Brazilian solar O&M company. It collects telemetry from every device on a plant — inverters, protection relays, weather stations, energy meters — detects equipment faults, quantifies the energy each failure costs, and lets operators act remotely. I work across the whole of it: the on-site collector, the cloud services, and the dashboard operators use.',
    meta: [
      { label: 'Role', value: 'Lead engineer' },
      { label: 'Scope', value: 'Architecture · device drivers · backend · frontend · infrastructure' },
      { label: 'Stack', value: 'Python · FastAPI · TimescaleDB · React · TypeScript · Docker · Ansible' },
    ],
    builtLabel: 'What I built',
    built: [
      {
        title: 'Edge data collection',
        body:
          'A containerized service runs at each plant and polls every device on it. A driver registry absorbs vendor differences, and a fault-detection state machine follows each inverter through its daily lifecycle. Protection and thermal relays are read alongside them, so an operator can see what tripped and what state the plant is in before deciding what to do next.',
      },
      {
        title: 'Cloud ingestion & loss analytics',
        body:
          'A cloud service ingests telemetry from every plant and serves monitoring, generation reports, alerting, and energy-loss attribution — idempotent and replay-safe.',
      },
      {
        title: 'Remote operations',
        body:
          'An audited command rail carries operator actions to plant equipment — every mutation is authenticated, two-factor gated, and logged end to end.',
      },
      {
        title: 'Operations dashboard',
        body:
          'The daily working surface for plant operators: real-time monitoring, generation and availability reporting, breakdown management, and fleet health.',
      },
      {
        title: 'Delivery pipeline',
        body:
          'From commit to a running plant: automated tests, image builds, cloud deploys, and fleet-wide rollout to every site, with centralized logging across all of them.',
      },
      {
        title: 'Field commissioning tool',
        body:
          'A desktop tool technicians run inside the plant network to probe and validate any device before go-live — reads and confirmation-guarded writes from a single panel.',
      },
    ],
    outcomesLabel: 'Outcomes',
    outcomes: [
      'Traced a production database cost overrun to the read path and brought spend back to baseline within one billing cycle.',
      'Built the multi-vendor device layer behind the collector: register maps and drivers for inverters, protection relays, thermal relays, weather stations, energy meters and RS-485 gateways.',
      'Built two-factor-gated remote operation and updates across that same equipment — configuration and power state, so routine intervention no longer requires a trip to the plant.',
    ],
    note: 'Repositories are private. Happy to go deep on the architecture and the reasoning behind it.',
  },
  experience: {
    label: 'Experience',
    items: [
      {
        company: 'MeuWatt',
        role: 'Software Engineer, Industrial IoT & Energy',
        period: '2025 — present',
        bullets: [
          'Lead engineering on the platform described above — architecture, data model, and rollout decisions across the edge collector, cloud services, and dashboard.',
          'Operate the system in production: fleet deploys, incident response, on-site commissioning.',
        ],
      },
      {
        company: 'JN Moura',
        role: 'Full-Stack / Mobile Developer',
        period: '2024 — 2025',
        bullets: [
          'Developed and maintained a Flutter ERP with multi-acquirer point-of-sale integrations; extended a React system processing university entrance-exam lists of up to 500,000 records.',
          'Mentored junior developers and automated the team’s Git workflows on GitLab, reducing merge errors.',
        ],
      },
      {
        company: 'Fabrisense',
        role: 'Front-End Developer',
        period: '2023 — 2024',
        bullets: [
          'Built dashboards and device-monitoring views in React for industrial IoT factory equipment — first contact with the hardware-software boundary that became my specialty.',
        ],
      },
    ],
  },
  skills: {
    label: 'Skills',
    groups: [
      { name: 'Languages', items: 'Python · TypeScript · JavaScript · SQL · Dart' },
      {
        name: 'Backend & data',
        items: 'FastAPI · SQLAlchemy · Alembic · PostgreSQL · TimescaleDB · REST · WebSockets · OAuth2/JWT · TOTP 2FA · pytest',
      },
      { name: 'Frontend & mobile', items: 'React 19 · Vite · SPA architecture · dashboards & charting · Flutter' },
      { name: 'Infrastructure', items: 'Docker · Ansible · GitHub Actions · CI/CD · Vercel · Render · Graylog · Linux' },
      {
        name: 'Industrial',
        items: 'Modbus communication protocol · multi-vendor device drivers — inverters, protection & thermal relays, weather stations, combiner boxes, pulse-counter energy meters · RS-485 gateways · SCADA-style monitoring',
      },
      { name: 'AI tooling', items: 'Claude Code · MCP · prompt & context engineering · agentic workflows' },
    ],
    langLabel: 'Spoken languages',
    languages: [
      { name: 'Portuguese', level: 'Native' },
      { name: 'English', level: 'Fluent' },
      { name: 'Mandarin', level: 'Learning' },
    ],
  },
  principles: {
    label: 'How I work',
    items: [
      {
        title: 'End to end',
        body:
          'I work across the whole of a system: architecture, data model, implementation, rollout, and what it does in production afterwards. Best with real autonomy and a say in the decisions that matter — on a team or on my own.',
      },
      {
        title: 'AI-native',
        body:
          'Agentic tooling is my default working method. Conventions and architecture contracts live in context files agents load every session; tests and review hold the merge bar.',
      },
    ],
  },
  availability: {
    label: 'Working together',
    body: 'Open to remote full-time roles and contract work. Based in Brazil, GMT−3.',
  },
  cats: { label: 'Cats', note: 'Not everything I maintain is software.' },
}
