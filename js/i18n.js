/**
 * AI Token Hub — i18n (zh-CN / en)
 * Auto-detects browser language, defaults to zh.
 * Usage: add data-i18n="key" to elements for text, data-i18n-html="key" for innerHTML.
 */

const I18N = {
  zh: {
    // ── Meta / HTML lang ──
    _lang: 'zh-CN',
    _title: 'AI Token Hub — 企业 AI 算力的总闸与电表 | Zaokit',
    _description: '企业上 AI 的第一步，不是给每个人买 Pro，而是先建一个 Token Hub。把算力当水电一样统一计量、统一分配、统一管控。',

    // ── Nav ──
    nav_home: '首页',
    nav_why: '为什么',
    nav_solution: '解决方案',
    nav_arch: '架构',
    nav_pricing: '方案',
    nav_faq: 'FAQ',
    nav_contact: '联系我们',

    // ── Hero ──
    hero_eyebrow: '⚡ 企业 AI 算力的总闸与电表',
    hero_title: '不是给每个人买 Pro，<br><span>而是先建一个 Token Hub。</span>',
    hero_desc: '把 AI 算力当水电一样统一计量、统一分配、统一管控。Token Hub 是你公司 AI 算力的第一块总闸——所有人经过它来用 AI，成本清清楚楚，权限安安全全，升级一步到位。',
    hero_cta_primary: '立即咨询',
    hero_cta_secondary: '了解方案',
    hero_meta_1: '支持私有化部署',
    hero_meta_2: '可开票 · ToB 合规',

    // ── Hero Diagram ──
    hub_team: '👥 全公司员工 · 统一入口',
    hub_center: '🔌 Token Hub<br><small>统一计量 · 统一分配 · 统一管控</small>',
    hub_pool: '号池<br><small>主力</small>',
    hub_api: 'API<br><small>兜底</small>',
    hub_cloud: '云网关<br><small>Bedrock</small>',

    // ── Stats ──
    stat_1_label: '高可用保障',
    stat_2_label: '成本可追溯',
    stat_3_suffix: ' 朵云',
    stat_3_label: '上游已接入',
    stat_4_suffix: ' 天',
    stat_4_label: '最快交付上线',

    // ── Pain Points ──
    pain_tag: '痛点洞察',
    pain_title: '各买各的 Pro，是 AI 时代的「自备发电机」',
    pain_desc: '销售开 Pro，产品开 Plus，工程师各自申请 API key——看着全员 AI 化了，可往公司层面一问：四个问题，四个黑箱。',
    pain_1_title: '成本算不清',
    pain_1_desc: '订阅散落十几个人名下，财务只看到零碎发票，永远说不出「到底花了多少」。',
    pain_2_title: '用量看不见',
    pain_2_desc: '谁在重度产出、谁开了闲置、哪个团队该追加——全凭感觉。',
    pain_3_title: '权限管不住',
    pain_3_desc: '每个人用哪个模型、数据流向哪里，全靠个人自觉，公司没有一道闸。',
    pain_4_title: '能力升不动',
    pain_4_desc: '出了更强的模型，得挨个通知、挨个换，全员升级慢得像蜗牛。',
    analogy_title: '这不是多买几个 Pro 能解决的',
    analogy_desc: '这就像工厂通电初期，每个车间各自买柴油发电机。短期灵活，长期灾难——油耗算不清、功率忙的不够闲的浪费。工业化的拐点从来不是「每家发电更猛」，而是出现了<strong style="color:var(--primary-strong)">电网、总闸和电表</strong>。',
    analogy_badge: '电网思维',

    // ── Solution ──
    sol_tag: '解决方案',
    sol_title: 'Token Hub 解决了 Pro 解决不了的四件事',
    sol_desc: 'Pro 让每个员工用上了 AI，Token Hub 才让整个公司用上了 AI。这是两件事。',
    sol_1_title: '成本从「一摞发票」变成「一张账单」',
    sol_1_desc: '所有用量汇到一个入口。这个月一共消耗了多少、每个部门花了多少、人均成本是多少——一行数字，清清楚楚。',
    sol_2_title: '用量从「凭感觉」变成「看得见」',
    sol_2_desc: '谁是重度产出者、哪个团队的额度该追加、哪些闲置该回收——一块看板全说清楚。资源倾斜不靠拍脑袋。',
    sol_3_title: '权限从「靠自觉」变成「有闸口」',
    sol_3_desc: '哪些岗位用哪些模型、哪些数据允许出门、调用要不要审计留痕——安全收敛成一道公司亲手把守的闸门。',
    sol_4_title: '升级从「挨个通知」变成「改一处、全员升级」',
    sol_4_desc: '出了更强的模型，只需在 Token Hub 一个地方切换，全公司当天用上。员工无感，总闸统一决定。',

    // ── Compare Table ──
    cmp_header_cap: '能力',
    cmp_header_pro: '各买各的 Pro',
    cmp_header_hub: 'Token Hub',
    cmp_cost: '成本核算',
    cmp_cost_pro: '散落发票',
    cmp_cost_hub: '一张账单，按部门、模型拆分',
    cmp_usage: '用量可视',
    cmp_usage_pro: '凭感觉',
    cmp_usage_hub: '实时看板',
    cmp_perm: '权限管控',
    cmp_perm_pro: '靠个人自觉',
    cmp_perm_hub: '集中闸口，审计留痕',
    cmp_upgrade: '模型升级',
    cmp_upgrade_pro: '挨个通知',
    cmp_upgrade_hub: '改一处，全员升级',
    cmp_peak: '削峰填谷',
    cmp_peak_pro: '人头固定预留',
    cmp_peak_hub: '共享资源池，按真实消耗付费',
    cmp_invoice: '合规开票',
    cmp_invoice_pro: '个人付/代付',
    cmp_invoice_hub: 'ToB 对公结算，正规发票',

    // ── Architecture ──
    arch_tag: '技术架构',
    arch_title: '私有化部署 · 号池优先 · API 兜底',
    arch_desc: 'Token Hub 可以直接私有化部署在你自己的环境，数据不出门。上游灵活接入，两条腿走路。',
    arch_team_title: '👥 你的团队',
    arch_team_desc: '全公司统一入口<br>员工无感使用',
    arch_hub_title: '🔌 Token Hub',
    arch_hub_desc: '私有化 · 部署在你内网',
    arch_hub_label: '数据不出门 🔒',
    arch_upstream_title: '☁️ 上游模型',
    arch_upstream_desc: '号池优先 · API 兜底<br>自动切换，不掉线',
    arch_card_1_title: '完全私有化',
    arch_card_1_desc: '整套部署在你的环境，数据不出门。统一入口、管控看板、用量计量全在你内网里跑。',
    arch_card_2_title: '号池 + API 双保障',
    arch_card_2_desc: '日常主力走号池，多账号负载均衡突破 Tier 限制；号池波动自动切 API 兜底，既要性价比也要不掉线。',
    arch_card_3_title: '多云网关直连',
    arch_chip_api: '官方 API',
    arch_chip_pool: '号池',
    arch_card_3_desc: '已支持 AWS Bedrock、Google Vertex AI、Azure OpenAI。你公司用哪朵云，Token Hub 就接哪朵。',

    // ── Security ──
    sec_tag: '安全合规',
    sec_title: 'ToB 基因，安全这块您放心',
    sec_1_title: '天生 ToB',
    sec_1_desc: '合规、发票、对公结算、审计留痕，从第一天起就是产品的一部分，不是事后补丁。',
    sec_2_title: '私有化交付',
    sec_2_desc: '连「从我这儿过」都不放心？Token Hub 直接给你私有化，数据不出你的门。',
    sec_3_title: '上游你来定',
    sec_3_desc: '私有化后上游接什么由你说了算：官方 API、号池、AWS/GCP/Azure 企业网关，都可以接。',

    // ── Pricing ──
    price_tag: '接入方案',
    price_title: '灵活方案，按需选择',
    price_desc: '从轻量试用到完整私有化，总有一档适合你。',
    price_1_name: '托管版',
    price_1_price: '¥3,000',
    price_1_unit: ' 起/月',
    price_1_note: '适合小型团队快速上手',
    price_1_f1: '统一入口 + 用量看板',
    price_1_f2: '按实际 Token 消耗计费',
    price_1_f3: '多模型支持',
    price_1_f4: '提供增值税普通发票',
    price_1_f5: '工作日技术支持',
    price_1_btn: '选择方案',
    price_badge: '推荐',
    price_2_name: '私有化标准版',
    price_2_price: '¥15,000',
    price_2_unit: ' 起',
    price_2_note: '企业级私有化部署',
    price_2_f1: '部署在你的环境，数据不出门',
    price_2_f2: '号池 + API 双保障',
    price_2_f3: '完整管控面板与审计',
    price_2_f4: '专属 FDE 陪跑上线',
    price_2_f5: '增值税专用/普通发票',
    price_2_f6: '优先技术支持',
    price_2_btn: '联系采购',
    price_3_name: '企业定制版',
    price_3_price: '按需定价',
    price_3_note: '大规模 + 深度定制',
    price_3_f1: '多云网关深度对接',
    price_3_f2: '多部门权限分级',
    price_3_f3: '定制看板与报表',
    price_3_f4: '年度框架协议',
    price_3_f5: '7×24 小时紧急响应',
    price_3_f6: '专家驻场可选',
    price_3_btn: '定制方案',

    // ── Process ──
    proc_tag: '落地路径',
    proc_title: 'FDE 陪跑，4 步落地',
    proc_desc: '我们不是卖你一套软件、塞给你一本说明书就走人。FDE（Forward Deployed Engineer）带着方案下场，陪你把 Token Hub 真正跑起来。',
    proc_1_title: '需求摸底',
    proc_1_desc: '了解你公司现在的 AI 用量、多少人在用、哪些模型、多少预算，给出适配方案。',
    proc_2_title: '部署上线',
    proc_2_desc: 'FDE 带着方案下场，在你的环境里把 Token Hub 部署、调通、跑顺。最快 1 天交付。',
    proc_3_title: '接入上游',
    proc_3_desc: '配置号池、API 兜底、云网关，调好自动切换策略。确保稳定且性价比最优。',
    proc_4_title: '持续运营',
    proc_4_desc: '看板上线、权限分好、发票开具。后续模型升级、策略调优，随时支持。',
    proc_why_title: '为什么是我们？因为这条路我们自己先走过。',
    proc_why_desc: '我们自己就是从「各买各的 Pro」一路走过来的。踩过的坑、算过的账、调过的参数都是一手的。<a href="https://cx.zaokit.com" target="_blank" rel="noopener" style="color:var(--primary-strong)">cx.zaokit.com</a>、<a href="https://cc.zaokit.com" target="_blank" rel="noopener" style="color:var(--primary-strong)">cc.zaokit.com</a> 这些 ToB 服务底座上已经在真实跑着的东西，不是 PPT 上的设想。',
    proc_why_badge: 'FDE 陪跑',

    // ── FAQ ──
    faq_tag: 'FAQ',
    faq_title: '常见问题解答',
    faq_1_q: '有了 Token Hub，是不是就不用给每个人买 Pro 了？',
    faq_1_a: '大多数情况下，是的。Pro 是按人头的固定订阅——多数人一个月用不满，少数重度用户又不够用，钱花在了「为峰值预留」上。Token Hub 是按实际用量走的统一资源池，能削峰填谷：闲的人不占额度，忙的人随时取用，公司只为真实消耗买单。',
    faq_2_q: '私有化之后，上游接什么？号池和官方 API 怎么选？',
    faq_2_a: '都可以接，而且可以同时接。Token Hub 只是你这边的统一入口和管控层，上游可以是官方 API、号池、AWS Bedrock、Google Vertex AI 或 Azure OpenAI。默认策略是「号池优先、API 兜底」——号池走日常主力，API 稳定兜底，自动切换。',
    faq_3_q: '部署需要多长时间？需要我们有技术团队吗？',
    faq_3_a: 'FDE 团队会全程陪跑。最快 1 天即可完成基础部署上线。你不需要额外的技术团队，我们负责搭建、调试、上线全过程，你只需要告诉我们业务需求。',
    faq_4_q: '数据安全怎么保障？',
    faq_4_a: '私有化部署意味着所有数据在你自己的环境里跑，不经过任何第三方。Token Hub 本身不记录、不缓存任何 prompt 和对话内容。调用日志和用量数据完全在你的管控下。',
    faq_5_q: '支持哪些模型？',
    faq_5_a: '支持 OpenAI 全系列（GPT-4o / o3 / o1 等）、Anthropic Claude 全系列、Google Gemini 等主流大模型。通过 Bedrock / Vertex / Azure 网关，还可以接入这些平台上的所有可用模型。',
    faq_6_q: '能开发票吗？支持什么类型？',
    faq_6_a: '当然。我们从第一天起就是 ToB 的，支持开具 6% 增值税专用发票（一般纳税人可抵扣）和增值税普通发票。对公结算、正规合同，扫除企业财务合规风险。',

    // ── CTA ──
    cta_title: '企业上 AI 的第一步，从 Token Hub 开始',
    cta_desc: '把复杂留给我们，把简单交给你。立即联系，获取适配你公司的 Token Hub 方案。',
    cta_email: '发送邮件咨询',
    cta_wechat: '添加微信沟通',

    // ── Modal ──
    modal_title: '📬 联系我们',
    modal_desc: '选择您方便的联系方式，我们会在 24 小时内回复。',
    modal_email_label: '邮箱',
    modal_email_btn: '复制并发送',
    modal_wechat_label: '微信号（请备注：Token Hub 咨询）',
    modal_wechat_btn: '复制微信号',
    modal_copied: '✓ 已复制',
    modal_hours: '工作时间：9:00 ~ 23:00',

    // ── Footer ──
    footer_brand: 'AI Token Hub · Zaokit',
    footer_note: '企业 AI 算力的总闸与电表。把算力当水电一样统一计量、统一分配、统一管控。',
    footer_nav_title: '快速导航',
    footer_nav_1: '为什么需要',
    footer_nav_2: '解决方案',
    footer_nav_3: '技术架构',
    footer_nav_4: '接入方案',
    footer_nav_5: '常见问题',
    footer_contact_title: '联系我们',
    footer_hours: '工作时间：9:00~23:00',
    footer_products_title: '相关产品',
    footer_product_1: 'Zaokit · AI 创作入口',
    footer_product_2: 'Zaokit CX · API 服务',
    footer_product_3: 'Zaokit CC · AI 全家桶',

    // ── Lang Toggle ──
    lang_toggle: 'EN',
  },

  en: {
    _lang: 'en',
    _title: 'AI Token Hub — The Master Switch & Meter for Enterprise AI | Zaokit',
    _description: 'The first step for enterprises adopting AI isn\'t buying everyone a Pro subscription — it\'s building a Token Hub. Unified metering, allocation, and governance for AI compute.',

    nav_home: 'Home',
    nav_why: 'Why',
    nav_solution: 'Solution',
    nav_arch: 'Architecture',
    nav_pricing: 'Pricing',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',

    hero_eyebrow: '⚡ The Master Switch & Meter for Enterprise AI',
    hero_title: 'Don\'t buy everyone a Pro.<br><span>Build a Token Hub first.</span>',
    hero_desc: 'Meter, allocate, and govern AI compute like a utility. Token Hub is your company\'s master switch for AI — unified access, transparent costs, secure permissions, and instant upgrades.',
    hero_cta_primary: 'Get in Touch',
    hero_cta_secondary: 'Learn More',
    hero_meta_1: 'On-premise deployment',
    hero_meta_2: 'B2B compliant · Invoicing',

    hub_team: '👥 All Employees · Unified Access',
    hub_center: '🔌 Token Hub<br><small>Meter · Allocate · Govern</small>',
    hub_pool: 'Pool<br><small>Primary</small>',
    hub_api: 'API<br><small>Fallback</small>',
    hub_cloud: 'Gateway<br><small>Bedrock</small>',

    stat_1_label: 'Uptime SLA',
    stat_2_label: 'Cost Traceability',
    stat_3_suffix: ' Clouds',
    stat_3_label: 'Upstream Connected',
    stat_4_suffix: ' Day',
    stat_4_label: 'Fastest Deployment',

    pain_tag: 'The Problem',
    pain_title: 'Buying Pro for everyone is the "diesel generator" of the AI era',
    pain_desc: 'Sales gets Pro, PM gets Plus, engineers each grab their own API keys — looks like company-wide AI adoption, but ask at the company level: four questions, four black boxes.',
    pain_1_title: 'Costs are opaque',
    pain_1_desc: 'Subscriptions scattered across a dozen names. Finance sees fragmented receipts and can never say "how much did we actually spend."',
    pain_2_title: 'Usage is invisible',
    pain_2_desc: 'Who\'s a power user, who\'s idle, which team needs more — all guesswork.',
    pain_3_title: 'No access control',
    pain_3_desc: 'Which models, where data flows — all on personal discretion. The company has zero gatekeeping.',
    pain_4_title: 'Upgrades are painful',
    pain_4_desc: 'New model drops? Notify everyone one by one, switch them one by one. Company-wide upgrades crawl.',
    analogy_title: 'Buying more Pro subscriptions won\'t fix this',
    analogy_desc: 'It\'s like a factory in the early days of electricity — each workshop buying its own diesel generator. Flexible short-term, disastrous long-term. The real inflection point was never "more powerful generators" — it was <strong style="color:var(--primary-strong)">the power grid, the master switch, and the meter</strong>.',
    analogy_badge: 'Grid Thinking',

    sol_tag: 'Solution',
    sol_title: 'Token Hub solves what Pro subscriptions never could',
    sol_desc: 'Pro gives each employee AI access. Token Hub gives the entire company AI governance. These are two different things.',
    sol_1_title: 'From scattered receipts to one unified bill',
    sol_1_desc: 'All usage flows through one entry point. Monthly spend, per-department breakdown, per-capita cost — crystal clear in one report.',
    sol_2_title: 'From guesswork to real-time dashboards',
    sol_2_desc: 'Who\'s a power user, which team needs more quota, what\'s idle — all visible on one dashboard. Data-driven resource allocation.',
    sol_3_title: 'From self-discipline to centralized access control',
    sol_3_desc: 'Which roles use which models, what data can leave the network, audit trails for every call — security through a single, company-controlled gate.',
    sol_4_title: 'From one-by-one notifications to instant company-wide upgrades',
    sol_4_desc: 'New model released? Change it once at the Token Hub, the whole company is upgraded today. Employees see the same interface; the backend is managed centrally.',

    cmp_header_cap: 'Capability',
    cmp_header_pro: 'Individual Pro',
    cmp_header_hub: 'Token Hub',
    cmp_cost: 'Cost Tracking',
    cmp_cost_pro: 'Scattered receipts',
    cmp_cost_hub: 'Unified bill, split by dept & model',
    cmp_usage: 'Usage Visibility',
    cmp_usage_pro: 'Guesswork',
    cmp_usage_hub: 'Real-time dashboard',
    cmp_perm: 'Access Control',
    cmp_perm_pro: 'Self-discipline',
    cmp_perm_hub: 'Centralized gate + audit trail',
    cmp_upgrade: 'Model Upgrades',
    cmp_upgrade_pro: 'One-by-one',
    cmp_upgrade_hub: 'Change once, upgrade all',
    cmp_peak: 'Load Balancing',
    cmp_peak_pro: 'Per-seat reservation',
    cmp_peak_hub: 'Shared pool, pay for actual usage',
    cmp_invoice: 'Invoicing',
    cmp_invoice_pro: 'Personal payment',
    cmp_invoice_hub: 'B2B settlement, official invoices',

    arch_tag: 'Architecture',
    arch_title: 'On-Premise · Pool-First · API Fallback',
    arch_desc: 'Token Hub can be deployed on-premise in your own environment. Data never leaves your network. Flexible upstream connections.',
    arch_team_title: '👥 Your Team',
    arch_team_desc: 'Unified entry point<br>Seamless for employees',
    arch_hub_title: '🔌 Token Hub',
    arch_hub_desc: 'On-premise · In your network',
    arch_hub_label: 'Data stays in-house 🔒',
    arch_upstream_title: '☁️ Upstream Models',
    arch_upstream_desc: 'Pool-first · API fallback<br>Auto-switch, zero downtime',
    arch_card_1_title: 'Fully On-Premise',
    arch_card_1_desc: 'Entire stack deployed in your environment. Data never leaves. Unified access, dashboards, and metering all run in your intranet.',
    arch_card_2_title: 'Pool + API Dual Guarantee',
    arch_card_2_desc: 'Primary traffic through multi-account pool for best cost & concurrency. Auto-failover to official API when pool fluctuates.',
    arch_card_3_title: 'Multi-Cloud Gateway',
    arch_chip_api: 'Official API',
    arch_chip_pool: 'Pool',
    arch_card_3_desc: 'Already supports AWS Bedrock, Google Vertex AI, and Azure OpenAI. Whichever cloud you use, Token Hub connects to it.',

    sec_tag: 'Security & Compliance',
    sec_title: 'Built for B2B from day one',
    sec_1_title: 'B2B DNA',
    sec_1_desc: 'Compliance, invoicing, B2B settlement, and audit trails are built into the product from day one — not afterthoughts.',
    sec_2_title: 'On-Premise Delivery',
    sec_2_desc: 'Don\'t trust any third party with your data? Deploy Token Hub entirely on-premise. Data never leaves your premises.',
    sec_3_title: 'You Choose the Upstream',
    sec_3_desc: 'After on-premise deployment, you decide the upstream: official API, account pool, AWS/GCP/Azure enterprise gateways — all supported.',

    price_tag: 'Plans',
    price_title: 'Flexible plans, choose what fits',
    price_desc: 'From lightweight hosted to full on-premise deployment — there\'s a tier for every stage.',
    price_1_name: 'Hosted',
    price_1_price: '$400',
    price_1_unit: ' /mo',
    price_1_note: 'Perfect for small teams getting started',
    price_1_f1: 'Unified access + usage dashboard',
    price_1_f2: 'Pay-per-token billing',
    price_1_f3: 'Multi-model support',
    price_1_f4: 'Standard invoicing',
    price_1_f5: 'Business-day support',
    price_1_btn: 'Choose Plan',
    price_badge: 'Recommended',
    price_2_name: 'On-Premise Standard',
    price_2_price: '$2,000',
    price_2_unit: ' starting',
    price_2_note: 'Enterprise-grade on-premise deployment',
    price_2_f1: 'Deployed in your environment',
    price_2_f2: 'Pool + API dual guarantee',
    price_2_f3: 'Full control panel & audit',
    price_2_f4: 'Dedicated FDE onboarding',
    price_2_f5: 'VAT special/general invoices',
    price_2_f6: 'Priority support',
    price_2_btn: 'Contact Sales',
    price_3_name: 'Enterprise Custom',
    price_3_price: 'Custom',
    price_3_note: 'Large scale + deep customization',
    price_3_f1: 'Multi-cloud deep integration',
    price_3_f2: 'Multi-dept permission tiers',
    price_3_f3: 'Custom dashboards & reports',
    price_3_f4: 'Annual framework agreement',
    price_3_f5: '7×24 emergency response',
    price_3_f6: 'On-site expert (optional)',
    price_3_btn: 'Custom Plan',

    proc_tag: 'Getting Started',
    proc_title: 'FDE-guided, 4 steps to go live',
    proc_desc: 'We don\'t sell you software and walk away. FDE (Forward Deployed Engineer) comes with the plan, deploying and tuning Token Hub in your environment until it runs smoothly.',
    proc_1_title: 'Discovery',
    proc_1_desc: 'Understand your current AI usage, headcount, models, and budget. Deliver a tailored plan.',
    proc_2_title: 'Deployment',
    proc_2_desc: 'FDE deploys Token Hub in your environment, configures and tests everything. As fast as 1 day.',
    proc_3_title: 'Upstream Setup',
    proc_3_desc: 'Configure account pool, API fallback, cloud gateways, and auto-switch policies for optimal cost & stability.',
    proc_4_title: 'Ongoing Ops',
    proc_4_desc: 'Dashboards live, permissions set, invoicing ready. Continuous support for model upgrades and tuning.',
    proc_why_title: 'Why us? Because we\'ve walked this road ourselves.',
    proc_why_desc: 'We went from "everyone buying their own Pro" to a unified hub ourselves. Every pitfall, every cost calculation, every parameter — first-hand experience. <a href="https://cx.zaokit.com" target="_blank" rel="noopener" style="color:var(--primary-strong)">cx.zaokit.com</a> and <a href="https://cc.zaokit.com" target="_blank" rel="noopener" style="color:var(--primary-strong)">cc.zaokit.com</a> are already running in real production — not slides.',
    proc_why_badge: 'FDE Guided',

    faq_tag: 'FAQ',
    faq_title: 'Frequently Asked Questions',
    faq_1_q: 'With Token Hub, do we still need Pro subscriptions for everyone?',
    faq_1_a: 'In most cases, no. Pro is a fixed per-seat subscription — most people underuse it, power users run out. Token Hub is a shared pool billed by actual consumption: idle seats don\'t waste quota, busy ones draw freely. You pay only for what\'s actually used.',
    faq_2_q: 'After on-premise deployment, what upstream do we connect to?',
    faq_2_a: 'Anything — and multiple sources simultaneously. Token Hub is your unified gateway. Upstream can be official API, account pool, AWS Bedrock, Google Vertex AI, or Azure OpenAI. Default strategy: pool-first, API fallback.',
    faq_3_q: 'How long does deployment take? Do we need a tech team?',
    faq_3_a: 'Our FDE team handles everything. Basic deployment can be done in as little as 1 day. You don\'t need an in-house tech team — we handle setup, debugging, and launch. Just tell us your requirements.',
    faq_4_q: 'How is data security ensured?',
    faq_4_a: 'On-premise deployment means all data runs in your own environment, never touching any third party. Token Hub itself does not log or cache any prompts or conversations. Usage logs and data are entirely under your control.',
    faq_5_q: 'Which models are supported?',
    faq_5_a: 'All OpenAI models (GPT-4o / o3 / o1 etc.), full Anthropic Claude lineup, Google Gemini, and more. Through Bedrock / Vertex / Azure gateways, all models available on those platforms are accessible.',
    faq_6_q: 'Can you issue invoices? What types?',
    faq_6_a: 'Absolutely. We\'ve been B2B from day one. We issue VAT special invoices (deductible for general taxpayers) and VAT general invoices. B2B settlement, formal contracts — fully compliant.',

    cta_title: 'Your enterprise AI journey starts with Token Hub',
    cta_desc: 'We handle the complexity, you get simplicity. Get in touch for a Token Hub plan tailored to your company.',
    cta_email: 'Send Email',
    cta_wechat: 'Add on WeChat',

    modal_title: '📬 Contact Us',
    modal_desc: 'Choose your preferred channel. We\'ll respond within 24 hours.',
    modal_email_label: 'Email',
    modal_email_btn: 'Copy & Send',
    modal_wechat_label: 'WeChat ID (Note: Token Hub inquiry)',
    modal_wechat_btn: 'Copy WeChat ID',
    modal_copied: '✓ Copied',
    modal_hours: 'Business hours: 9:00 AM – 11:00 PM (CST)',

    footer_brand: 'AI Token Hub · Zaokit',
    footer_note: 'The master switch & meter for enterprise AI. Unified metering, allocation, and governance.',
    footer_nav_title: 'Quick Links',
    footer_nav_1: 'Why Token Hub',
    footer_nav_2: 'Solution',
    footer_nav_3: 'Architecture',
    footer_nav_4: 'Plans',
    footer_nav_5: 'FAQ',
    footer_contact_title: 'Contact',
    footer_hours: 'Hours: 9:00 AM – 11:00 PM CST',
    footer_products_title: 'Products',
    footer_product_1: 'Zaokit · AI Creation',
    footer_product_2: 'Zaokit CX · API Service',
    footer_product_3: 'Zaokit CC · AI Suite',

    lang_toggle: '中文',
  },
};

/* ── i18n Engine ── */
let currentLang = 'zh';

function detectLanguage() {
  const saved = localStorage.getItem('tokenhub-lang');
  if (saved && I18N[saved]) return saved;
  const browserLang = (navigator.language || navigator.userLanguage || 'zh').toLowerCase();
  if (browserLang.startsWith('zh')) return 'zh';
  return 'en';
}

function applyLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  localStorage.setItem('tokenhub-lang', lang);

  const dict = I18N[lang];

  // Update html lang
  document.documentElement.lang = dict._lang;
  document.title = dict._title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', dict._description);

  // Apply text translations
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // Apply HTML translations (for elements with <br>, <span>, <strong>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  // Update stat suffixes
  document.querySelectorAll('[data-i18n-suffix]').forEach((el) => {
    const key = el.getAttribute('data-i18n-suffix');
    if (dict[key] !== undefined) el.dataset.countSuffix = dict[key];
  });

  // Update language toggle button text
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) toggleBtn.textContent = dict.lang_toggle;
}

function toggleLanguage() {
  const newLang = currentLang === 'zh' ? 'en' : 'zh';
  applyLanguage(newLang);
  // Re-run counter animations with new suffixes
  document.querySelectorAll('[data-count-to]').forEach((el) => {
    const target = parseFloat(el.dataset.countTo);
    const suffix = el.dataset.countSuffix || '';
    const decimal = el.dataset.countDecimal ? parseInt(el.dataset.countDecimal, 10) : 0;
    el.textContent = (decimal > 0 ? target.toFixed(decimal) : Math.round(target).toLocaleString()) + suffix;
  });
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  currentLang = detectLanguage();
  applyLanguage(currentLang);
});
