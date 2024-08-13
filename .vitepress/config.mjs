// 开启智能提示
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/my-web-site/",
  title: "樱桃小丸子的在线教学网站",
  description: "记录樱桃小丸子的学习日常",
  themeConfig: {
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    // https://vitepress.dev/reference/default-theme-config
    logo:'https://vitepress.dev/vitepress-logo-mini.svg',  //logo
    //本地搜索
    search:{
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText:'搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText:'无法找到相关结果',
            resetButtonTitle: '清楚查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    //显示碳广告，暂时没用
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // },
    // 导航栏
    nav: [
      { text: '主页', link: '/' },
      { 
        text: '前端',
        items:[
          { text: 'Vue' ,link :'/'},
          { text: 'Uniapp' ,link :'/'},
          { text: 'Electron' ,link :'/'},
          { text: 'threeJs' ,link :'/'},
          { text: 'vitePress' ,link :'/docs/front-end/vitepress'}
        ]
      },
      { text: '后端', link: '/markdown-examples' },
      { text: '其他',
        items:[
          { text: 'GitHub',link : '/docs/other/github.md'}
        ]
      },
      { text: '关于', link: '/docs/about/about' }
    ],
    //siteTitle: '哈哈哈',

    //侧边栏
    // sidebar: [
    //   {
    //     text: '示例',
    //     items: [
    //       { text: 'Markdown示例', link: '/markdown-examples' },
    //       { text: 'API示例', link: '/api-examples' },
    //       { text: '建站原因', link: '/reason' }
    //     ]
    //   }
    // ],

    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    //上下文
    docFooter: {
      prev: '上一下',
      next: '下一页'
    },

    //页脚
    footer: {
      message :'版权所有：贵州****科技有限公司',
      copyright: '地址：贵州省贵阳市观山湖区金融城***C栋918'
    }
  }
})
