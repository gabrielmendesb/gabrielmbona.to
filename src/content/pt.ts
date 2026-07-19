import type { Content } from './types'

export const pt: Content = {
  htmlLang: 'pt-BR',
  meta: {
    title: 'Gabriel Mendes Bonato — Engenheiro de Software · IoT Industrial e Energia',
    description:
      'Engenheiro de software full-stack atuando em IoT industrial e energia. Responsável pela engenharia de uma plataforma de monitoramento e controle remoto que roda em usinas solares de grande porte.',
  },
  ui: {
    skip: 'Pular para o conteúdo',
    cv: 'CV',
    getInTouch: 'Fale comigo',
    copy: 'Copiar',
    copied: 'Copiado',
    source: 'Código do site no GitHub',
    navLabel: 'Seções da página',
    sections: {
      top: 'Início',
      work: 'Trabalho atual',
      experience: 'Experiência',
      skills: 'Competências',
      contact: 'Contato',
    },
  },
  intro: {
    title: 'Engenheiro de software full-stack — IoT industrial e energia',
    whoLabel: 'Quem sou eu',
    who:
      'Sou de Araraquara, no interior de São Paulo. Cresci grudado no computador — jogando e frequentando comunidades online. Como quase todo mundo na minha família é programador e problemas de lógica sempre vieram fácil, o caminho até software foi curto. De lá pra cá passei por áreas bem diferentes: equipamentos de fábrica, sistemas de ponto de venda e agora usinas solares. No momento, me aventurando no mandarim.',
    workLabel: 'Meu trabalho',
    work:
      'Sou responsável pela engenharia da MeuWatt, uma plataforma de monitoramento e controle remoto para usinas solares de grande porte. Projetei e construí a maior parte do sistema — dos drivers de dispositivos na rede da usina ao backend que recebe a telemetria da frota e ao painel dos operadores — e sou eu quem opera: deploys, incidentes e comissionamento em campo.',
  },
  caseStudy: {
    kicker: 'Trabalho atual',
    heading: 'MeuWatt — monitoramento e controle de usinas solares',
    period: '2025 — atual',
    summary:
      'A MeuWatt é a plataforma de operação de uma empresa brasileira de O&M solar. Ela coleta telemetria de todos os dispositivos da usina — inversores, relés de proteção, estações meteorológicas e medidores de energia —, identifica falhas de equipamento, calcula quanta energia cada falha custou e permite que os operadores atuem à distância. Trabalho em todas as partes: o coletor em campo, os serviços em nuvem e o painel usado pelos operadores.',
    meta: [
      { label: 'Função', value: 'Tech Lead' },
      { label: 'Escopo', value: 'Arquitetura · drivers de dispositivos · backend · frontend · infraestrutura' },
      { label: 'Stack', value: 'Python · FastAPI · TimescaleDB · React · TypeScript · Docker · Ansible' },
    ],
    builtLabel: 'O que construí',
    built: [
      {
        title: 'Coleta de dados em campo',
        body:
          'Um serviço containerizado roda em cada usina e faz a leitura de todos os dispositivos dela. Um registro de drivers isola as diferenças entre fabricantes, e uma máquina de estados acompanha cada inversor ao longo do ciclo diário para identificar falhas. Relés de proteção e térmicos são lidos em conjunto, então o operador enxerga o que atuou e em que estado a usina está antes de decidir o próximo passo.',
      },
      {
        title: 'Ingestão em nuvem e análise de perdas',
        body:
          'Um serviço em nuvem recebe a telemetria de todas as usinas e entrega monitoramento, relatórios de geração, alertas e atribuição de perda de energia — idempotente e à prova de reprocessamento.',
      },
      {
        title: 'Operação remota',
        body:
          'Um canal de comandos auditado leva as ações do operador até os equipamentos da usina — toda alteração passa por autenticação, segundo fator e registro de ponta a ponta.',
      },
      {
        title: 'Painel de operação',
        body:
          'A tela em que os operadores trabalham: monitoramento em tempo real, relatórios de geração e disponibilidade, gestão de paradas e visão geral da frota.',
      },
      {
        title: 'Pipeline de entrega',
        body:
          'Do commit até a usina rodando: testes automatizados, build de imagens, deploy em nuvem e distribuição para todos os sites, com logs centralizados de todos eles.',
      },
      {
        title: 'Ferramenta de comissionamento em campo',
        body:
          'Uma ferramenta desktop que os técnicos rodam dentro da rede da usina para testar e validar qualquer dispositivo antes da entrada em operação — leituras e escritas com confirmação, tudo em um painel só.',
      },
    ],
    outcomesLabel: 'Resultados',
    outcomes: [
      'Descobri que um estouro de custo do banco em produção vinha do caminho de leitura e trouxe o gasto de volta ao normal em um ciclo de cobrança.',
      'Construí a camada de dispositivos multifabricante por trás do coletor: mapas de registradores e drivers para inversores, relés de proteção, relés térmicos, estações meteorológicas, medidores de energia e gateways RS-485.',
      'Construí a operação e a atualização remotas desses mesmos equipamentos, com segundo fator — configuração e liga/desliga —, de modo que intervenção de rotina não exige mais ir até a usina.',
    ],
    note: 'Os repositórios são privados. Posso detalhar a arquitetura e as decisões por trás dela.',
  },
  experience: {
    label: 'Experiência',
    items: [
      {
        company: 'MeuWatt',
        role: 'Engenheiro de Software, IoT Industrial e Energia',
        period: '2025 — atual',
        bullets: [
          'Conduzo a engenharia da plataforma descrita acima — arquitetura, modelo de dados e decisões de rollout no coletor em campo, nos serviços em nuvem e no painel.',
          'Opero o sistema em produção: deploys na frota, resposta a incidentes e comissionamento em campo.',
        ],
      },
      {
        company: 'JN Moura',
        role: 'Desenvolvedor Full-Stack / Mobile',
        period: '2024 — 2025',
        bullets: [
          'Desenvolvi e mantive um ERP em Flutter com integrações de ponto de venda de várias adquirentes; ampliei um sistema React que processa listas de vestibular de até 500 mil registros.',
          'Orientei desenvolvedores juniores e automatizei o fluxo de Git do time no GitLab, reduzindo erros de merge.',
        ],
      },
      {
        company: 'Fabrisense',
        role: 'Desenvolvedor Front-End',
        period: '2023 — 2024',
        bullets: [
          'Construí painéis e telas de monitoramento em React para equipamentos industriais de IoT — primeiro contato com a fronteira entre hardware e software, que virou minha especialidade.',
        ],
      },
    ],
  },
  skills: {
    label: 'Competências',
    groups: [
      { name: 'Linguagens', items: 'Python · TypeScript · JavaScript · SQL · Dart' },
      {
        name: 'Backend e dados',
        items: 'FastAPI · SQLAlchemy · Alembic · PostgreSQL · TimescaleDB · REST · WebSockets · OAuth2/JWT · TOTP 2FA · pytest',
      },
      { name: 'Frontend e mobile', items: 'React 19 · Vite · arquitetura SPA · painéis e gráficos · Flutter' },
      { name: 'Infraestrutura', items: 'Docker · Ansible · GitHub Actions · CI/CD · Vercel · Render · Graylog · Linux' },
      {
        name: 'Industrial',
        items: 'Protocolo de comunicação Modbus · drivers multifabricante — inversores, relés de proteção e térmicos, estações meteorológicas, string boxes, medidores de energia por pulso · gateways RS-485 · monitoramento no estilo SCADA',
      },
      { name: 'Ferramentas de IA', items: 'Claude Code · MCP · engenharia de prompt e contexto · fluxos com agentes' },
    ],
    langLabel: 'Idiomas',
    languages: [
      { name: 'Português', level: 'Nativo' },
      { name: 'Inglês', level: 'Fluente' },
      { name: 'Mandarim', level: 'Aprendendo' },
    ],
  },
  principles: {
    label: 'Como eu trabalho',
    items: [
      {
        title: 'Ponta a ponta',
        body:
          'Trabalho no sistema inteiro: arquitetura, modelo de dados, implementação, rollout e o que acontece em produção depois. Rendo melhor com autonomia de verdade e espaço nas decisões que importam — em time ou sozinho.',
      },
      {
        title: 'AI-native',
        body:
          'Trabalho com ferramentas de agentes por padrão. Convenções e contratos de arquitetura ficam em arquivos de contexto que os agentes carregam a cada sessão; testes e code review definem o que entra.',
      },
    ],
  },
  availability: {
    label: 'Vamos trabalhar juntos',
    body: 'Aberto a vagas remotas em tempo integral e a trabalhos por contrato. Baseado no Brasil, GMT−3.',
  },
  cats: { label: 'Gatos', note: 'Nem tudo que eu mantenho é software.' },
}
