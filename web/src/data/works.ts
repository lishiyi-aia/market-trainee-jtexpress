export type WorkLanguage = 'zh' | 'en'

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export type WorkItem = WorkListItem

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export type WorksCopy = WorksLang

export const WORKS: Record<WorkLanguage, WorksLang> = {
  "zh": {
    "title": "项目经历",
    "closeLabel": "返回",
    "openLabel": "展开作品",
    "hint": "继续下滑",
    "awardsLabel": "项目成果",
    "visitLabel": "查看完整项目",
    "detailPlaceholder": "项目详情",
    "phImageLabel": "项目预览",
    "phButtonLabel": "打开项目",
    "countLabel": (n: number) => `${n} 个项目`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "品牌传播与媒体信息分析",
        "tagline": "传播策划｜稿件资料｜媒体监测｜AI复盘",
        "items": [
          {
            "name": "AI资讯产品品牌传播与媒体信息分析",
            "meta": "Brand Communication & Media Analysis",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "传播策划：产品更新、用户案例与活动信息整理",
              "稿件资料：100+条内容，初稿撰写与品牌口径校对",
              "媒体监测：行业报道、竞品动态、用户评论与AI看板",
              "效果复盘：注册较前一期+50%，首次专题创建率相对约+15%"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "活动传播与跨境沟通",
        "tagline": "资料准备｜信息摘要｜现场沟通｜英文协作",
        "items": [
          {
            "name": "AI教育产品活动传播与跨境沟通",
            "meta": "Event Communication & Cross-border Coordination",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "活动传播：宣讲体验、演示资料、现场口径与答疑",
              "信息整理：100+条反馈，沉淀摘要、FAQ与案例",
              "内容协作：30+篇内容，东南亚英文沟通及交接",
              "反馈迭代：10条建议，期间核心功能使用率+30%"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "海外内容与本地化传播",
        "tagline": "当地受众｜英文文案｜渠道口径｜社媒反馈",
        "items": [
          {
            "name": "ZUS Coffee海外内容与本地化传播",
            "meta": "Overseas Content & Localized Communication",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "本地调研：马来西亚用户偏好、社媒反馈与竞品表达",
              "英文内容：50条Instagram，选题、制作与素材整理",
              "渠道协同：线上首发、FamilyMart资料及发布排期",
              "持续复盘：15+次复盘，协同账号粉丝增长1.1w+"
            ]
          }
        ]
      }
    ]
  },
  "en": {
    "title": "Project Experience",
    "closeLabel": "Back",
    "openLabel": "Open case",
    "hint": "Scroll to continue",
    "awardsLabel": "Outcomes",
    "visitLabel": "View full case",
    "detailPlaceholder": "Project details",
    "phImageLabel": "Project preview",
    "phButtonLabel": "Open project",
    "countLabel": (n: number) => `${n} projects`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "Brand Communication & Media Analysis",
        "tagline": "Story Planning · Media Materials · Monitoring · AI Reviews",
        "items": [
          {
            "name": "AI Information Product: Brand Communication & Media Analysis",
            "meta": "From information to clear messages and feedback-led revisions",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "Planning: product updates, user cases and event information",
              "Materials: 100+ posts, initial drafts and brand-message checks",
              "Monitoring: coverage, competitors, comments and an AI dashboard",
              "Review: registrations +50% vs prior period; first-topic rate approx. +15% relatively"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "Event Communication & Cross-border Coordination",
        "tagline": "Materials · Information Summaries · Events · Working English",
        "items": [
          {
            "name": "AI Education Product: Events & Cross-border Communication",
            "meta": "From audience feedback to materials, events and handoff",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "Events: presentations, demonstrations, message checks and questions",
              "Information: 100+ feedback items, summaries, FAQs and cases",
              "Coordination: 30+ articles and Southeast Asia English communication",
              "Iteration: 10 recommendations; core-feature usage +30% during the period"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "Overseas Content & Localized Communication",
        "tagline": "Local Audiences · English Copy · Channels · Social Feedback",
        "items": [
          {
            "name": "ZUS Coffee: Overseas Content & Localized Communication",
            "meta": "Malaysian audience insights, English content and weekly reviews",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "Research: Malaysian preferences, social feedback and competitor messages",
              "Content: 50 Instagram posts, planning, production and assets",
              "Channels: online launch and FamilyMart materials and schedules",
              "Review: 15+ reviews; contributed to 11k+ account follower growth"
            ]
          }
        ]
      }
    ]
  }
}

export const WORKS_CONTENT = WORKS

export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/education-pilot.png`,
  'project-4': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}
