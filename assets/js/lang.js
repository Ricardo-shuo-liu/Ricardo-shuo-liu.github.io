const langConfig = {
  // 通用文本（补充参考站的所有侧边栏/导航项）
  common: {
    en: {
      siteTitle: "Shuo Liu (Ricardo) | Academic Profile",
      nav: { 
        home: "Home", publications: "Publications", talks: "Talks", 
        teaching: "Teaching", portfolio: "Portfolio", blog: "Blog Posts", 
        cv: "CV" 
      },
      toggleLang: "Switch to 中文",
      footer: "© 2024 Shuo Liu (Ricardo) | Hosted on GitHub Pages",
      sidebar: {
        name: "Shuo Liu (Ricardo)",
        bio: "Aspiring to be an outstanding developer, passionate about reinforcement learning and AI infra",
        contact: {
          location: "Location: Zhengzhou",
          university: "University: HUEL",
          email: "Email: <a href='mailto:13838152117@139.com'>13838152117@139.com</a>",
          scholar: "Google Scholar: <a href='#'>Google Scholar Profile</a>",
          pubmed: "PubMed: <a href='#'>PubMed Profile</a>",
          github: "GitHub: <a href='https://github.com/Ricardo-shuo-liu?tab=repositories' target='_blank'>Ricardo-shuo-liu</a>",
          bluesky: "Bluesky: <a href='https://bsky.app/profile/ricardoshuoliu.bsky.social' target='_blank'>ricardoshuoliu.bsky.social</a>",
          huggingface: "Hugging Face: <a href='https://huggingface.co/flyRicardo' target='_blank'>flyRicardo</a>",
          pypi: "PyPI: <a href='https://pypi.org/user/flyRicardo/' target='_blank'>flyRicardo</a>",
        }
      }
    },
    zh: {
      siteTitle: "刘硕 (Ricardo) | 学术主页",
      nav: { 
        home: "主页", publications: "论文发表", talks: "学术报告", 
        teaching: "教学", portfolio: "作品集", blog: "博客文章", 
        cv: "简历" 
      },
      toggleLang: "Switch to English",
      footer: "© 2024 刘硕 (Ricardo) | 托管于 GitHub Pages",
      sidebar: {
        name: "刘硕 (Ricardo)",
        bio: "希望成为一个杰出的开发者，热衷于强化学习和AI infra领域",
        contact: {
          location: "位置: 郑州",
          university: "院校: 河南财经政法大学",
          email: "邮箱: <a href='mailto:13838152117@139.com'>13838152117@139.com</a>",
          scholar: "谷歌学术: <a href='#'>谷歌学术主页</a>",
          pubmed: "PubMed: <a href='#'>PubMed 主页</a>",
          github: "GitHub: <a href='https://github.com/Ricardo-shuo-liu?tab=repositories' target='_blank'>Ricardo-shuo-liu</a>",
          bluesky: "Bluesky: <a href='https://bsky.app/profile/ricardoshuoliu.bsky.social' target='_blank'>ricardoshuoliu.bsky.social</a>",
          huggingface: "Hugging Face: <a href='https://huggingface.co/flyRicardo' target='_blank'>flyRicardo</a>",
          pypi: "PyPI: <a href='https://pypi.org/user/flyRicardo/' target='_blank'>flyRicardo</a>",
        }
      }
    }
  },
  // 主页文本（适配学术排版）
  index: {
    en: {
      title: "",
      about: {
        title: "About Me",
        content: `GitHub Username: <a href='https://github.com/Ricardo-shuo-liu' target='_blank'>Ricardo-shuo-liu</a><br>
        Repository Status: Based on public GitHub page, you own personal repositories (see below)<br>
        Research Interests: NLP, AI Infrastructure<br>
        Education Background: Undergraduate Student, Henan University of Economics and Law (HUEL), Zhengzhou`
      },
      personalProjects: {
        title: "Personal Projects (Owned Repositories)",
        note: "📌 Below are GitHub repositories I created and own:",
        repo1: { 
          name: "Deeptracer", 
          desc: "A personal project focused on AI infrastructure and reinforcement learning. Please visit the GitHub repository for more details.", 
          link: "https://github.com/Ricardo-shuo-liu/Deeptracer", 
          role: "Project Owner" 
        },
        repo2: { 
          name: "M2x", 
          desc: "A personal project related to NLP and AI infrastructure. Please visit the GitHub repository for more details.", 
          link: "https://github.com/Ricardo-shuo-liu/M2x", 
          role: "Project Owner" 
        }
      },
      contributedProjects: {
        title: "Contributed Projects (Participated Repositories)",
        note: "📌 Below are GitHub repositories I participated in:",
        repo1: { 
          name: "Paddle", 
          desc: "Contributed to the PaddlePaddle framework, focusing on AI infrastructure.", 
          link: "https://github.com/Ricardo-shuo-liu/Paddle", 
          role: "Contributor" 
        },
        repo2: { 
          name: "docs", 
          desc: "Contributed to documentation for AI projects.", 
          link: "https://github.com/Ricardo-shuo-liu/docs", 
          role: "Contributor" 
        },
        repo3: { 
          name: "objprint", 
          desc: "Contributed to the objprint library for better object printing in Python.", 
          link: "https://github.com/Ricardo-shuo-liu/objprint", 
          role: "Contributor" 
        }
      },
      blogPosts: {
        title: "My Blog Posts",
        intro: "Here are some of my technical blog posts:",
        post1: {
          title: "Python与语法糖",
          desc: "A detailed explanation of Python syntax sugar and decorators"
        },
        post2: {
          title: "Python变量",
          desc: "An in-depth look at Python's variable reference mechanism and memory management"
        }
      }
    },
    zh: {
      title: "",
      about: {
        title: "关于我",
        content: `GitHub 用户名: <a href='https://github.com/Ricardo-shuo-liu' target='_blank'>Ricardo-shuo-liu</a><br>
        仓库状态: 基于公开 GitHub 页面，我拥有个人仓库（见下方）<br>
        研究方向: NLP、AI基础设施<br>
        教育背景: 河南财经政法大学本科生，郑州`
      },
      personalProjects: {
        title: "个人项目（自有仓库）",
        note: "📌 以下是我创建并拥有的 GitHub 仓库：",
        repo1: { 
          name: "Deeptracer", 
          desc: "一个专注于AI基础设施和强化学习的个人项目。请访问GitHub仓库了解更多详情。", 
          link: "https://github.com/Ricardo-shuo-liu/Deeptracer", 
          role: "项目所有者" 
        },
        repo2: { 
          name: "M2x", 
          desc: "一个与NLP和AI基础设施相关的个人项目。请访问GitHub仓库了解更多详情。", 
          link: "https://github.com/Ricardo-shuo-liu/M2x", 
          role: "项目所有者" 
        }
      },
      contributedProjects: {
        title: "贡献项目（参与仓库）",
        note: "📌 以下是我参与的 GitHub 仓库：",
        repo1: { 
          name: "Paddle", 
          desc: "为PaddlePaddle框架做出贡献，专注于AI基础设施。", 
          link: "https://github.com/Ricardo-shuo-liu/Paddle", 
          role: "贡献者" 
        },
        repo2: { 
          name: "docs", 
          desc: "为AI项目的文档做出贡献。", 
          link: "https://github.com/Ricardo-shuo-liu/docs", 
          role: "贡献者" 
        },
        repo3: { 
          name: "objprint", 
          desc: "为Python中更好的对象打印库objprint做出贡献。", 
          link: "https://github.com/Ricardo-shuo-liu/objprint", 
          role: "贡献者" 
        }
      },
      blogPosts: {
        title: "我的博客文章",
        intro: "以下是我的一些技术博客文章：",
        post1: {
          title: "Python与语法糖",
          desc: "详细解释Python语法糖和装饰器"
        },
        post2: {
          title: "Python变量",
          desc: "深入探讨Python的变量引用机制和内存管理"
        }
      }
    }
  },
  // 功能页面文本（适配学术风）
  cv: { 
    en: { title: "Curriculum Vitae", content: `<h3>Education</h3>
      <p>Undergraduate Student, Henan University of Economics and Law (HUEL), Zhengzhou</p>
      <h3>Research Interests</h3>
      <p>Reinforcement Learning, AI Infrastructure</p>
      <h3>Technical Skills</h3>
      <p>Programming Languages: Python, C++</p>
      <p>Frameworks: PyTorch, PaddlePaddle</p>
      <p>Areas of Expertise: Deep Learning, Natural Language Processing</p>
      <p>Experience: Fine-tuning of BERT and other large language models</p>
      <h3>Community Involvement</h3>
      <p>Member of Baidu PFCC Community</p>
      <p>Member of GTOC AI Infra</p>
      <p>Member of ERNIE Organization on Hugging Face</p>
      <h3>Projects</h3>
      <h4>Deeptracer</h4>
      <p>An AI-driven intelligent code analysis and refactoring platform that provides professional code optimization solutions through deep code understanding, multi-dimensional visual analysis, and natural language interaction. Features include code analysis, performance analysis, memory analysis, and AI refactoring suggestions.</p>
      <h4>M2x</h4>
      <p>A lightweight online Markdown editor that implements basic Markdown editing functionality directly in the browser. It also provides convenient APIs to quickly convert Markdown files to PDF and Word formats.</p>` }, 
    zh: { title: "个人简历", content: `<h3>教育背景</h3>
      <p>河南财经政法大学本科生，郑州</p>
      <h3>研究方向</h3>
      <p>强化学习、AI基础设施</p>
      <h3>技术技能</h3>
      <p>编程语言：Python、C++</p>
      <p>框架：PyTorch、PaddlePaddle</p>
      <p>专长领域：深度学习、自然语言处理</p>
      <p>经验：BERT及其他大模型微调经验</p>
      <h3>社区参与</h3>
      <p>百度PFCC社区成员</p>
      <p>GTOC AI Infra成员</p>
      <p>Hugging Face上ERNIE组织成员</p>
      <h3>项目</h3>
      <h4>Deeptracer</h4>
      <p>一个AI驱动的智能代码分析和重构平台，通过深度代码理解、多维度可视化分析和自然语言交互提供专业的代码优化解决方案。功能包括代码分析、性能分析、内存分析和AI重构建议。</p>
      <h4>M2x</h4>
      <p>一个轻量级的在线Markdown编辑器，直接在浏览器中实现基本的Markdown编辑功能。它还提供便捷的API，可以快速将Markdown文件转换为PDF和Word格式。</p>` } 
  },
  talks: { 
    en: { title: "Talks & Presentations", content: `<p>Currently no talks or presentations available.</p>` }, 
    zh: { title: "学术报告", content: `<p>目前暂无学术报告。</p>` } 
  },
  teaching: { 
    en: { title: "Teaching Experience", content: `<p>Currently no teaching experience available.</p>` }, 
    zh: { title: "教学经历", content: `<p>目前暂无教学经历。</p>` } 
  },
  portfolio: { 
    en: { title: "Portfolio", content: `<h2>Personal Projects</h2>
      <div class="projects-grid">
        <div class="project-card">
          <h3>Deeptracer</h3>
          <p>Personal project repository</p>
          <p><a href="https://github.com/Ricardo-shuo-liu/Deeptracer" target="_blank">🔗 GitHub Repository</a></p>
          <p class="project-role">Role: Project Owner</p>
        </div>
        <div class="project-card">
          <h3>M2x</h3>
          <p>Personal project repository</p>
          <p><a href="https://github.com/Ricardo-shuo-liu/M2x" target="_blank">🔗 GitHub Repository</a></p>
          <p class="project-role">Role: Project Owner</p>
        </div>
      </div>
      
      <h2>Contributed Projects</h2>
      <div class="projects-grid">
        <div class="project-card">
          <h3>Paddle</h3>
          <p>Contributed project repository</p>
          <p><a href="https://github.com/Ricardo-shuo-liu/Paddle" target="_blank">🔗 GitHub Repository</a></p>
          <p class="project-role">Role: Contributor</p>
        </div>
        <div class="project-card">
          <h3>docs</h3>
          <p>Contributed project repository</p>
          <p><a href="https://github.com/Ricardo-shuo-liu/docs" target="_blank">🔗 GitHub Repository</a></p>
          <p class="project-role">Role: Contributor</p>
        </div>
        <div class="project-card">
          <h3>objprint</h3>
          <p>Contributed project repository</p>
          <p><a href="https://github.com/Ricardo-shuo-liu/objprint" target="_blank">🔗 GitHub Repository</a></p>
          <p class="project-role">Role: Contributor</p>
        </div>
      </div>` }, 
    zh: { title: "作品集", content: `<h2>个人项目</h2>
      <div class="projects-grid">
        <div class="project-card">
          <h3>Deeptracer</h3>
          <p>个人项目仓库</p>
          <p><a href="https://github.com/Ricardo-shuo-liu/Deeptracer" target="_blank">🔗 GitHub Repository</a></p>
          <p class="project-role">Role: 项目所有者</p>
        </div>
        <div class="project-card">
          <h3>M2x</h3>
          <p>个人项目仓库</p>
          <p><a href="https://github.com/Ricardo-shuo-liu/M2x" target="_blank">🔗 GitHub Repository</a></p>
          <p class="project-role">Role: 项目所有者</p>
        </div>
      </div>
      
      <h2>贡献项目</h2>
      <div class="projects-grid">
        <div class="project-card">
          <h3>Paddle</h3>
          <p>贡献项目仓库</p>
          <p><a href="https://github.com/Ricardo-shuo-liu/Paddle" target="_blank">🔗 GitHub Repository</a></p>
          <p class="project-role">Role: 贡献者</p>
        </div>
        <div class="project-card">
          <h3>docs</h3>
          <p>贡献项目仓库</p>
          <p><a href="https://github.com/Ricardo-shuo-liu/docs" target="_blank">🔗 GitHub Repository</a></p>
          <p class="project-role">Role: 贡献者</p>
        </div>
        <div class="project-card">
          <h3>objprint</h3>
          <p>贡献项目仓库</p>
          <p><a href="https://github.com/Ricardo-shuo-liu/objprint" target="_blank">🔗 GitHub Repository</a></p>
          <p class="project-role">Role: 贡献者</p>
        </div>
      </div>` } 
  },
  publications: { 
    en: { title: "Publications", content: `<p>Currently no publications available.</p>` }, 
    zh: { title: "论文发表", content: `<p>目前暂无论文发表。</p>` } 
  },
  // Blog页面文本
  blog: {
    en: { 
      title: "Blog Posts", 
      intro: "My technical and academic notes (updated regularly):", 
      post1: { title: "Python Variables", desc: "In-depth exploration of Python's variable reference mechanism, memory management, mutable and immutable objects", date: "2026-03-10" }, 
      post2: { title: "Python and Syntactic Sugar", desc: "Detailed explanation of Python syntactic sugar, including variable swapping, decorators, closures and context management", date: "2026-03-10" },
      post3: { title: "Getting Started with LLM-based Agents", desc: "Comprehensive guide on building intelligent agents using large language models", date: "2026-01-12" } 
    },
    zh: { 
      title: "博客文章", 
      intro: "我的技术与学术笔记（定期更新）：", 
      post1: { title: "Python变量", desc: "深入探讨Python的变量引用机制、内存管理、可变与不可变对象等核心概念", date: "2026-03-10" }, 
      post2: { title: "Python与语法糖", desc: "详解Python中的语法糖，包括变量交换、装饰器、闭包和上下文管理等特性", date: "2026-03-10" },
      post3: { title: "LLM-based Agents入门指南", desc: "关于使用大型语言模型构建智能代理的综合指南", date: "2026-01-12" } 
    }
  },
  // 单篇Blog文章
  post1: { 
    en: { title: "Getting Started with GitHub Pages for Academic Websites", content: `<p>GitHub Pages is a free service for hosting static websites directly from a GitHub repository. It is widely used in academia for personal profiles, research project pages, and documentation.</p>
      <h3>Key Steps</h3>
      <ol>
        <li>Create a repository named <code>username.github.io</code></li>
        <li>Add HTML/CSS/JS files to the repository</li>
        <li>Enable GitHub Pages in the repository settings</li>
        <li>Customize the content to match your academic needs</li>
      </ol>
      <p>This website is an example of adapting the Academic Pages template to GitHub Pages, with support for dark/light mode and bilingual switching.</p>` }, 
    zh: { title: "GitHub Pages 搭建学术个人网站入门", content: `<p>GitHub Pages 是一项免费服务，可直接从 GitHub 仓库托管静态网站，在学术界广泛用于个人主页、研究项目页面和文档托管。</p>
      <h3>核心步骤</h3>
      <ol>
        <li>创建名为 <code>username.github.io</code> 的仓库</li>
        <li>向仓库添加 HTML/CSS/JS 文件</li>
        <li>在仓库设置中启用 GitHub Pages</li>
        <li>自定义内容以适配学术需求</li>
      </ol>
      <p>本网站就是适配 Academic Pages 模板的示例，支持深色/浅色模式和双语切换。</p>` } 
  },
  post2: { 
    en: { title: "Open-Source Development for Academic Research", content: "<p>Open-source software has become an essential part of modern academic research. This post discusses how to leverage open-source tools to accelerate research, improve reproducibility, and collaborate with the global community.</p>" }, 
    zh: { title: "学术研究中的开源开发实践", content: "<p>开源软件已成为现代学术研究的重要组成部分。本文探讨如何利用开源工具加速研究、提高可复现性，并与全球社区协作。</p>" } 
  }
};
