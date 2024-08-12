---
outline: deep
---

# VitePress是什么？

VitePress是一个静态站点生成器(SSG)，转为构建快熟、以内容为中心的站点而设计。简言之，获取markdown编写的内容，对其应用主题，并生成可以轻松部署到任何地方的静态HTML页面



## 使用场景

+ 文档

官方文档。如：vite、rollup、pinia

+ 博客

支持完全自定义主题，具有vite + Vue应用开发体验，提供灵活的API加载数据，也可以动态生成路由

## 性能

+ 快速的初始加载

+ 加载完成后可以快速切换

+ 搞笑的交互

# 快速开始

## 环境

nodejs 18及以上版本

### 安装向导

`pnpm add -D vitepress`

初始化 `pnpm vitepress init`

![image-20240108190215775](https://camo.githubusercontent.com/2a60fd6607945d39f8a507f4ffbbb0174a78a9faf111fbbddc46992c47041331/68747470733a2f2f6d792d706963747572652d626564312d313332313130303230312e636f732e61702d6265696a696e672e6d7971636c6f75642e636f6d2f6d7970696374757265732f696d6167652d32303234303130383139303231353737352e706e67)

### 目录结构

- .vitepress，最核心的目录，
- theme目录。自定义主题配置，css样式等
- config.mjs。最核心的文件，各种配置导航栏、侧边栏、标题什么的都是在这里
- node_modules。安装的依赖
- api-examples.md和markdown-examples.md。官方给的两个示例
- index.md。主页相关
- package.json和pnpm-lock.yml。包管理工具需要用的

![image-20240108190658316](https://camo.githubusercontent.com/bc768b4950cfcb43dc245191f9c6cc9f116160332f77f57f04263fc6c28f2fd2/68747470733a2f2f6d792d706963747572652d626564312d313332313130303230312e636f732e61702d6265696a696e672e6d7971636c6f75642e636f6d2f6d7970696374757265732f696d6167652d32303234303130383139303635383331362e706e67)

### 启动项目

`pnpm run docs:dev`

## 路由



## 部署

package.json中设置一下脚本

```json
{
    "scripts":{
        "docs:build":"vitepress build docs",
        "docs:preview":"vitepress preview docs"
    }
}
```

#### 构建文档 
`pnpm run docs:build`

#### 预览项目 
`pnpm run docs:preview`

#### 指定端口 
`vitepress preview docs --port 8080`

#### 部署到云端（借助github）

## 写作



## 自定义配置

### 自定义主页

主页，自定义8处，接下来叙述8个地方怎么自定义的

![homePage](/public/front-end/vitepress/home.png)

name<==>2,text<==>3,tagline<==>4

5对应的配置

```yml
actions:
    - theme: brand
      text: 建站原因
      link: /reason
    - theme: alt
      text: 自述
      link: /api-examples
```

6对应的配置

```yml
image:
   src: *** /background.svg
   alt: 背景图片
```

7对应的配置

```yml
features:
  - icon: 💡
    title: 小建议
    details: 选择大于努力
  - title: 努力
    icon: 
      src: ***/background.svg
    details: 如果做一件事就努力把它做好
  - title: 思考
    icon: 
      dark: *** /background.svg
      light: /排队叫号.png
    details: 要有自己的想法，不要人云亦云
```



### 其他

#### 标题

`title:'殷桃小丸子'`

#### logo

`logo:'https://vitepress.dev/vitepress-logo-mini.svg',`

#### 侧边栏

```json
{
    sidebar: [
      {
        text: '示例',
        items: [
          { text: 'Markdown示例', link: '/markdown-examples' },
          { text: 'API示例', link: '/api-examples' },
          { text: '建站原因', link: '/reason' }
        ]
      }
    ],
}
```



#### 导航栏

```json
{
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
      { text: '关于', link: '/docs/about/about' }
    ],
}
```



#### 社交链接

```json
{
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
}
```



#### 上下文

```json
{
    docFooter: {
      prev: '上一下',
      next: '下一页'
    },
}
```



#### 页脚

```json
{
    footer: {
      message :'版权所有：贵州****科技有限公司',
      copyright: '地址：贵州省贵阳市观山湖区金融城***C栋918'
    }
}
```



#### 本地搜索

```json
 {search:{
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
    }
 }
```

#### 碳广告

```json
{
    carbonAds: {
       code: 'your-carbon-code',
       placement: 'your-carbon-placement'
    },
}
```

关闭侧边栏，设置右侧侧边栏在左侧显示

```json
sidebar:false ,//关闭侧边栏
aside: "left", //设置右边侧边栏在左侧显示
```




