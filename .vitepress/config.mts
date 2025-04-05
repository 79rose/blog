import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "leewahjoel",
  description: "leewahjoel's blog",
  head: [
    ['link',{ rel: 'icon', href: '/images/site/favicon.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
       {
        text: '文章',
        items: [
          { text: '前端', link: '/blog/fe' },
          { text: '设计模式', link: '/blog/design-pattern' },
        ]
      },

    ],
    logo: '/images/home/leewahjoel.jpg',

    sidebar: [
      {
        items: [
          { text: ' 前端', link: '/blog/fe' },
          { text: '设计模式', link: '/blog/design-pattern' },
        ]
      }
    ],
    socialLinks: [
      {
        icon: 'juejin',
        link: 'https://juejin.cn/user/1876179903053869'
      },
      { icon: 'github', link: 'https://github.com/79rose' }
    ],
    search: {
      provider: 'algolia',
      options: {
        appId: 'QY1X2R9K8L',
        apiKey: 'f0d7a4c8b5e3b3f3d6f4a2e5c1e0a2f7',
        indexName: 'leewahjoel',
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
        }
      } 
    },
  outline: { 
    level: [2,4], 
    label: '当前页大纲' 
  }, 
  //上次更新时间
  lastUpdated: {
    text: '最后更新于',
    formatOptions: {
      dateStyle: 'short', 
      timeStyle: 'medium'
    },
    },
  
  docFooter: { 
    prev: '上一页', 
    next: '下一页', 
  }, 
  returnToTopLabel:'返回顶部', 
  footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-2026 leewahjoel',
    },
  }
})
