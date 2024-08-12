---
outline: deep
---

# 使用GitHub Pages部署

## 部署步骤

> GitHub Pages专门用来托管静态内容，有余不需要服务器且给予Git,支持CI、CD，成为很多静态网站比如博客、文档网站。

1. 再GitHub上创建仓库，如果没有GitHub账号，需要注册

2. 初始化git仓库
   
   `git init`

3. 添加gitnore文件
   
   ```ignore
   node_modules
   .DS_Store
   dist
   dist-ssr
   cache
   .cache
   .temp
   *.local
   ```

4. 添加本地所有文件到git仓库
   
   `git add`

5. 创建第一次提交
   
   `git commit -m "frist commit"`

6. 添加远程仓库地址到本地
   
   `git remote add origin https://github.com/userHeRong/my-wib-site.git`

7. 推送项目到GitHub
   
   `git bpush -u origin master`

8. 选择GitHub actions
   
   Settings => Pages => Deploy from branch(GitHub Actions)

9. 设置工作流
   
   actions => set up a workflow yourself
   
   > 这个比较复杂

10. 重命名设置deploy脚本
    
    ❗node版本和pnpm版本需要一致
    
    ❗对于npm的部署可以参考这个博客[GitHub Action一键部署个人博客 | Ahao (helloahao096.github.io)](https://helloahao096.github.io/helloahao/posts/GitHub Action一键部署个人博客.html)
    
    ❗需要注意项目的根目录（.vitepress所在的目录）

```yml
name: Deploy VitePress site to Pages

on:
  push:
    branches: [master]

# 设置tokenn访问权限
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      - name: Setup pnpm
        uses: pnpm/action-setup@v2 # 安装pnpm并添加到环境变量
        with:
          version: 8.6.12 # 指定需要的 pnpm 版本
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm # 设置缓存
      - name: Setup Pages
        uses: actions/configure-pages@v3  # 在工作流程自动配置GithubPages
      - name: Install dependencies
        run: pnpm install # 安装依赖
      - name: Build with VitePress
        run: |
          pnpm run docs:build # 启动项目
          touch .nojekyll  # 通知githubpages不要使用Jekyll处理这个站点，不知道为啥不生效，就手动搞了
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2  # 上传构建产物
        with:
          path: .vitepress/dist # 指定上传的路径，当前是根目录，如果是docs需要加docs/的前缀

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }} # 从后续的输出中获取部署后的页面URL
    needs: build    # 在build后面完成
    runs-on: ubuntu-latest  # 运行在最新版本的ubuntu系统上
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment  # 指定id
        uses: actions/deploy-pages@v2 # 将之前的构建产物部署到github pages中

```

11. 点击确定，耐心等待，接下来查看域名
    
    setting => pages=> your site is live at ...

___

## 配置自定义域名

直接配置子域名，别配置4条A记录，没必要，并且域名服务商只允许添加5条，多了就得加钱了。

在自己的域名服务商那里添加一条CNAME记录，直接指向自己的github分配的域名就好了，另外需要把这个base给注释掉（不然css文件和页面都找不到），等待分配完成。
