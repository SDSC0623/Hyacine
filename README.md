# 风堇角色展示页

> 崩坏：星穹铁道角色「风堇」的静态展示网页，使用 Vue 3 + Vite 构建。

![风堇](https://aka.doubaocdn.com/s/j9OJ1wdNYA)

## ✨ 特性

- 🎨 精美的角色展示页面
- 📱 响应式设计，支持移动端
- ⚡ 使用 Vue 3 + Vite 构建
- 🎯 包含角色档案、技能、故事、画廊等模块
- 🚀 支持 GitHub Pages 一键部署

## 📦 技术栈

- **框架**: Vue 3 (Composition API)
- **构建工具**: Vite 5
- **样式**: 原生 CSS (CSS Variables)
- **部署**: GitHub Pages

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 📁 项目结构

```
fengjin-character-page/
├── src/
│   ├── components/          # 组件目录
│   │   ├── HeroSection.vue     # 首屏展示区
│   │   ├── InfoSection.vue     # 角色档案
│   │   ├── SkillsSection.vue   # 角色技能
│   │   ├── StorySection.vue    # 角色故事
│   │   ├── GallerySection.vue  # 角色画廊
│   │   └── FooterSection.vue   # 页脚
│   ├── App.vue              # 根组件
│   ├── main.js              # 入口文件
│   └── style.css            # 全局样式
├── public/                  # 静态资源
├── index.html               # HTML 模板
├── vite.config.js           # Vite 配置
├── package.json             # 项目配置
└── README.md                # 项目说明
```

## 🌐 部署到 GitHub Pages

### 方法一：手动部署

1. 在 GitHub 上创建新仓库
2. 初始化本地 Git 仓库并推送：

```bash
# 初始化 Git
git init
git add .
git commit -m "Initial commit: 风堇角色展示页"

# 添加远程仓库
git remote add origin https://github.com/你的用户名/仓库名.git

# 推送到 main 分支
git branch -M main
git push -u origin main
```

3. 构建项目：

```bash
npm run build
```

4. 将 dist 目录推送到 gh-pages 分支：

```bash
# 使用 gh-pages 工具（推荐）
npm install -g gh-pages
gh-pages -d dist
```

或者手动操作：

```bash
cd dist
git init
git checkout -b gh-pages
git add .
git commit -m "Deploy to GitHub Pages"
git remote add origin https://github.com/你的用户名/仓库名.git
git push -f origin gh-pages
```

5. 在 GitHub 仓库设置中，将 Pages 源设置为 gh-pages 分支

### 方法二：GitHub Actions 自动部署

创建 `.github/workflows/deploy.yml` 文件：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 🎮 角色介绍

**风堇**（Hyacine），本名**雅辛忒丝**，是《崩坏：星穹铁道》中的五星风属性「记忆」命途角色。

- **身份**: 昏光庭院首席护理师、天空之泰坦艾格勒的辅祭
- **种族**: 黄金裔
- **出身**: 翁法罗斯
- **称号**: 疗愈永夜的微光、摇光的医师

## 📝 许可证

本项目仅供学习交流使用，角色版权归米哈游所有。

---

💖 Made with love for 风堇
