export const CONTACT = {
  email: 'gabriel.mbonato@gmail.com',
  github: 'https://github.com/gabrielmendesb',
  linkedin: 'https://www.linkedin.com/in/g-mendes-bonato/',
}

export const INTRO = {
  name: 'Gabriel Mendes Bonato',
  title: 'Full-stack software engineer — industrial IoT & energy',
  paragraph:
    'I lead the engineering of MeuWatt, a monitoring and remote-control platform for utility-scale solar plants, running in production with real operators depending on it. I designed and built most of the system — from Modbus TCP device drivers on plant networks, through a FastAPI + TimescaleDB backend ingesting fleet telemetry at one-minute granularity, to the React dashboard operators use every day — and I operate it: deploys, incidents, and on-site commissioning included.',
  meta: 'Araraquara, Brazil · GMT−3 · Fluent English · Open to remote full-time & contract',
}

export const CASE = {
  heading: 'MeuWatt — solar plant monitoring & control',
  period: '2025 — present',
  summary:
    'MeuWatt is the operations platform of a Brazilian solar O&M company. It collects telemetry from every device on a plant — inverters, protection relays, weather stations, energy meters — detects equipment faults, quantifies the energy each failure costs, and lets operators act remotely. I have led its engineering from the first commit: sole author of the on-site collector, lead author of the cloud API and dashboard.',
  meta: [
    { label: 'Role', value: 'Lead engineer' },
    { label: 'Scope', value: '4 repositories, edge to UI' },
    { label: 'Scale', value: 'Multi-plant fleet · 1-min telemetry' },
    { label: 'Stack', value: 'Python · FastAPI · TimescaleDB · React · TypeScript · Docker · Ansible' },
  ],
  built: [
    {
      title: 'Edge data collection',
      body:
        'A containerized Python service runs at each plant and polls every device over Modbus TCP on a 60-second cycle. A driver registry absorbs vendor differences (Sungrow, Huawei, GoodWe), and a fault-detection state machine follows each inverter through its daily lifecycle — waking, producing, sleeping — so genuine failures are separated from communication noise before an alert is raised.',
    },
    {
      title: 'Cloud ingestion & loss analytics',
      body:
        'A FastAPI service ingests fleet telemetry into TimescaleDB at one-minute granularity and serves monitoring, generation reports, and alerting. Its energy-loss attribution engine estimates what a failed inverter would have produced from its healthy peers’ output — designed idempotent and replay-safe, so duplicate or out-of-order uploads can never corrupt results.',
    },
    {
      title: 'Remote operations',
      body:
        'An audited command rail carries operator actions to plant equipment: idempotency keys, claim timeouts, dual WebSocket/HTTP transports, and TOTP two-factor step-up on every mutation. Collectors update themselves over the same rail by delegating a detached container recreate to the Docker daemon — software reaches every site with no SSH.',
    },
    {
      title: 'Operations dashboard',
      body:
        'A React 19 + TypeScript application of roughly sixty screens: real-time monitoring, generation and availability reporting, breakdown management, and fleet health. It is the daily working surface for plant operators.',
    },
    {
      title: 'Delivery pipeline',
      body:
        'From commit to a running plant: pytest suites, GitHub Actions multi-arch image builds, automatic cloud deploys, and Ansible-driven fleet deployment, with centralized logging across all sites.',
    },
  ],
  outcomes: [
    'Root-caused a production database cost overrun to unindexed read paths and fixed it with targeted indexes and query rewrites — spend returned to baseline within one billing cycle.',
    'Reverse-engineered undocumented vendor Modbus fault registers by probing live inverters on-site; the platform now decodes fault codes the official documentation doesn’t list.',
    'Replaced site visits and SSH sessions with 2FA-gated remote operations and over-the-air updates across the whole fleet.',
    'Shipped, measured, and retired my own traffic-batching optimization after profiling showed the cost sat in the read path — the fix that stayed was the boring one: indexes.',
  ],
}

export const ALSO = [
  {
    title: 'Field commissioning tool',
    tag: 'Shipped',
    body:
      'A desktop tool technicians run inside a plant network to probe and validate any Modbus device before go-live — reads and confirmation-guarded writes through one local panel, replacing a pile of single-purpose scripts. Packaged as a self-contained Windows installer.',
  },
  {
    title: 'AI analytics layer',
    tag: 'In development',
    body:
      'Structuring fleet telemetry into training-ready datasets and evaluating ML/LLM pipelines for automated operational insight. Early stage, built against real production data.',
  },
]

export const EXPERIENCE = [
  {
    company: 'MeuWatt',
    role: 'Software Engineer, Industrial IoT & Energy',
    period: '2025 — present',
    bullets: [
      'Architected and lead development of the platform described above; made the technical calls — architecture, data model, rollout, rollback — across all four repositories.',
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
]

export const SKILL_GROUPS = [
  { name: 'Languages', items: 'Python · TypeScript · JavaScript · SQL · Dart' },
  {
    name: 'Backend & data',
    items: 'FastAPI · SQLAlchemy · Alembic · PostgreSQL · TimescaleDB · REST · WebSockets · OAuth2/JWT · TOTP 2FA · pytest',
  },
  { name: 'Frontend & mobile', items: 'React 19 · Vite · SPA architecture · dashboards & charting · Flutter' },
  {
    name: 'Infrastructure',
    items: 'Docker · Docker Compose · Ansible · GitHub Actions · CI/CD · Vercel · Render · Graylog · Linux',
  },
  {
    name: 'Industrial',
    items: 'Modbus TCP · inverters (Sungrow / Huawei / GoodWe) · protection relays · energy meters · SCADA-style monitoring',
  },
  { name: 'AI tooling', items: 'Claude Code · MCP · prompt & context engineering · agentic workflows' },
]

export const PRINCIPLES = [
  {
    title: 'End to end',
    body:
      'I’m most effective owning a system whole: architecture, data model, implementation, rollout, and the operational aftermath. Decisions get written down; the documentation is part of the system.',
  },
  {
    title: 'In production',
    body:
      'I operate what I ship. Design choices are made with operations in mind — idempotency, replay safety, observability — because I’m the one who answers when they’re wrong.',
  },
  {
    title: 'AI-native',
    body:
      'Agentic tooling (Claude Code, MCP) is my daily method. Conventions live in context files agents load every session; tests and review hold the merge bar. The leverage is real and the accountability stays mine.',
  },
]

export const CONTACT_TEXT =
  'I’m open to remote full-time roles and contract work — especially in energy, climate, and industrial IoT, where software meets physical systems. The fastest way to reach me is email.'
