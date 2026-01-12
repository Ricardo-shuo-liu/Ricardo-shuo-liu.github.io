# Ricardo-shuo-liu.github.io

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

一个基于HTML、CSS和JavaScript构建的赛博朋克风格个人主页，具有Three.js 3D效果和现代交互设计。

## 🚀 GitHub Pages

该网站已部署在GitHub Pages上，可通过以下链接访问：

[https://ricardo-shuo-liu.github.io](https://ricardo-shuo-liu.github.io)

## 📋 目录

- [特性](#特性)
- [技术栈](#技术栈)
- [导航](#导航)
- [项目结构](#项目结构)
- [设置](#设置)
- [部署](#部署)
- [许可证](#许可证)

## ✨ 特性

- **赛博朋克设计**：深色主题搭配霓虹色调、故障效果和扫描线
- **3D背景**：交互式Three.js场景，包含粒子、旋转立方体和网格
- **多页面结构**：不同部分独立页面
- **响应式设计**：适配所有屏幕尺寸
- **交互元素**：平滑滚动、项目筛选、主题切换
- **博客系统**：完整的博客系统，包含列表页和详情页
- **学术论文**：用于展示研究论文和出版物的部分

## 🛠️ 技术栈

- **HTML5**：语义化标记
- **CSS3**：赛博朋克样式、动画和响应式设计
- **JavaScript (ES6+)**：交互功能
- **Three.js**：3D背景效果
- **Font Awesome**：图标
- **Google Fonts**：Orbitron和Rajdhani字体

## 🧭 导航

网站包含以下页面：

- **Home**：带有3D背景的主页面和介绍
- **About**：个人背景、技能和教育
- **Research**：研究方向和兴趣
- **Projects**：项目组合，具有筛选功能
- **Experience**：学术和专业经历时间线
- **Contact**：联系信息和表单
- **Publications**：学术论文和研究贡献
- **Blog**：技术文章和见解

## 📁 项目结构

```
├── css/
│   └── style.css          # 主样式表
├── js/
│   └── main.js            # 主JavaScript文件
├── blog/
│   ├── index.html         # 博客列表页
│   └── *.html             # 单个博客文章
├── index.html             # 主页
├── about.html             # 关于页面
├── research.html          # 研究页面
├── projects.html          # 项目页面
├── experience.html        # 经历页面
├── contact.html           # 联系页面
├── publications.html      # 出版物页面
├── README.md              # 英文说明文档
└── README_zh.md           # 中文说明文档
```

## 📦 设置

要在本地运行此网站：

1. 克隆仓库：
   ```bash
   git clone https://github.com/Ricardo-shuo-liu/Ricardo-shuo-liu.github.io.git
   ```

2. 导航到项目目录：
   ```bash
   cd Ricardo-shuo-liu.github.io
   ```

3. 启动本地Web服务器：
   ```bash
   # 使用Python 3
   python -m http.server 8000
   
   # 使用Node.js（需要安装http-server包）
   npx http-server -p 8000
   ```

4. 在浏览器中打开：
   ```
   http://localhost:8000
   ```

## 🚀 部署

当更改推送到`main`分支时，该网站会自动部署到GitHub Pages。

手动部署步骤：

1. 确保所有更改已提交并推送到GitHub
2. 进入GitHub上的仓库设置
3. 导航到"Pages"部分
4. 将源设置为"main"分支
5. 点击"保存"

## 📝 许可证

本项目采用MIT许可证 - 查看[LICENSE](LICENSE)文件了解详情。

## 🌐 语言

- [English README](README.md)
- [中文 README](README_zh.md)（当前文件）

---

由 Ricardo-shuo-liu 用心构建 ❤️
