const langConfig = {
  common: {
    en: {
      siteTitle: "Shuo Liu",
      nav: {
        about: "About",
        education: "Education",
        research: "Research",
        publications: "Publications",
        projects: "Projects",
        cv: "CV",
        blog: "Blog"
      },
      toggleLang: "中文",
      footer: "\u00a9 2026 Shuo Liu | Hosted on GitHub Pages",
      sidebar: {
        name: "Shuo Liu",
        university: "Henan University of Economics and Law",
        tags: ["Reinforcement Learning", "MAS", "AI4CO", "NLP", "LLM"],
        contact: {
          location: 'Zhengzhou, China',
          email: '<a href="mailto:13838152117@139.com">13838152117@139.com</a>',
          github: '<a href="https://github.com/Ricardo-shuo-liu" target="_blank">GitHub</a>',
          scholar: '<a href="#" target="_blank">Google Scholar</a>',
          bluesky: '<a href="https://bsky.app/profile/ricardoshuoliu.bsky.social" target="_blank">Bluesky</a>',
          huggingface: '<a href="https://huggingface.co/flyRicardo" target="_blank">Hugging Face</a>',
          pypi: '<a href="https://pypi.org/user/flyRicardo/" target="_blank">PyPI</a>'
        }
      }
    },
    zh: {
      siteTitle: "\u5218\u7855",
      nav: {
        about: "\u5173\u4e8e",
        education: "\u6559\u80b2",
        research: "\u7814\u7a76",
        publications: "\u8bba\u6587",
        projects: "\u9879\u76ee",
        cv: "\u7b80\u5386",
        blog: "\u535a\u5ba2"
      },
      toggleLang: "English",
      footer: "\u00a9 2026 \u5218\u7855 | \u6258\u7ba1\u4e8e GitHub Pages",
      sidebar: {
        name: "\u5218\u7855",
        university: "\u6cb3\u5357\u8d22\u7ecf\u653f\u6cd5\u5927\u5b66",
        tags: ["\u5f3a\u5316\u5b66\u4e60", "MAS", "AI4CO", "NLP", "LLM"],
        contact: {
          location: '郑州，中国',
          email: '<a href="mailto:13838152117@139.com">13838152117@139.com</a>',
          github: '<a href="https://github.com/Ricardo-shuo-liu" target="_blank">GitHub</a>',
          scholar: '<a href="#" target="_blank">谷歌学术</a>',
          bluesky: '<a href="https://bsky.app/profile/ricardoshuoliu.bsky.social" target="_blank">Bluesky</a>',
          huggingface: '<a href="https://huggingface.co/flyRicardo" target="_blank">Hugging Face</a>',
          pypi: '<a href="https://pypi.org/user/flyRicardo/" target="_blank">PyPI</a>'
        }
      }
    }
  },

  // === About Me ===
  about: {
    en: {
      title: "About Me",
      content: `
        <p>I am an undergraduate student at the <strong>School of Data Science and E-Commerce</strong>, <a href="https://www.huel.edu.cn" target="_blank">Henan University of Economics and Law</a>. I am currently a visiting student at <strong>Zhengzhou University</strong>, where my advisor is <strong>Prof. Qidong Liu</strong>.</p>
        <p>My research interests include <strong>Reinforcement Learning</strong>, <strong>Multi-Agent Systems (MAS)</strong>, <strong>AI for Combinatorial Optimization (AI4CO)</strong>, <strong>NLP</strong>, and <strong>Large Language Models (LLM)</strong>.</p>
      `
    },
    zh: {
      title: "\u5173\u4e8e\u6211",
      content: `
        <p>\u6211\u7684\u672c\u79d1\u5c31\u8bfb\u4e8e<a href="https://www.huel.edu.cn" target="_blank">\u6cb3\u5357\u8d22\u7ecf\u653f\u6cd5\u5927\u5b66</a>\u6570\u636e\u79d1\u5b66\u4e0e\u7535\u5b50\u5546\u52a1\u5b66\u9662\uff0c\u76ee\u524d\u5728<strong>\u90d1\u5dde\u5927\u5b66</strong>\u8bbf\u95ee\u5b66\u4e60\uff0c\u5bfc\u5e08\u662f<strong>\u5218\u8d77\u4e1c\u6559\u6388</strong>\u3002</p>
        <p>\u6211\u611f\u5174\u8da3\u7684\u65b9\u5411\u6709\uff1a<strong>\u5f3a\u5316\u5b66\u4e60</strong>\u3001<strong>MAS\uff08\u591a\u667a\u80fd\u4f53\u7cfb\u7edf\uff09</strong>\u3001<strong>AI4CO\uff08AI\u4e3a\u7ec4\u5408\u4f18\u5316\uff09</strong>\u3001<strong>NLP</strong>\u3001<strong>LLM\uff08\u5927\u8bed\u8a00\u6a21\u578b\uff09</strong>\u3002</p>
      `
    }
  },

  // === Education ===
  education: {
    en: {
      title: "Education",
      items: [
        {
          period: "2024.09 \u2013 Present",
          school: "Henan University of Economics and Law (HUEL)",
          location: "Zhengzhou, Henan, China",
          degree: "Undergraduate Student",
          detail: "School of Data Science and E-Commerce."
        },
        {
          period: "Present",
          school: "Zhengzhou University",
          location: "Zhengzhou, Henan, China",
          degree: "Visiting Student",
          detail: "Advisor: Prof. Qidong Liu."
        }
      ]
    },
    zh: {
      title: "\u6559\u80b2\u80cc\u666f",
      items: [
        {
          period: "2024.09 \u2013 \u81f3\u4eca",
          school: "\u6cb3\u5357\u8d22\u7ecf\u653f\u6cd5\u5927\u5b66",
          location: "\u6cb3\u5357\u90d1\u5dde\uff0c\u4e2d\u56fd",
          degree: "\u672c\u79d1\u5728\u8bfb",
          detail: "\u6570\u636e\u79d1\u5b66\u4e0e\u7535\u5b50\u5546\u52a1\u5b66\u9662\u3002"
        },
        {
          period: "\u81f3\u4eca",
          school: "\u90d1\u5dde\u5927\u5b66",
          location: "\u6cb3\u5357\u90d1\u5dde\uff0c\u4e2d\u56fd",
          degree: "\u8bbf\u95ee\u5b66\u751f",
          detail: "\u5bfc\u5e08\uff1a\u5218\u8d77\u4e1c\u6559\u6388\u3002"
        }
      ]
    }
  },

  // === Research Interests ===
  research: {
    en: {
      title: "Research Interests",
      content: `
        <ul class="research-list">
          <li><strong>Reinforcement Learning</strong></li>
          <li><strong>Multi-Agent Systems (MAS)</strong></li>
          <li><strong>AI for Combinatorial Optimization (AI4CO)</strong></li>
          <li><strong>Natural Language Processing (NLP)</strong></li>
          <li><strong>Large Language Models (LLM)</strong></li>
        </ul>
      `
    },
    zh: {
      title: "\u7814\u7a76\u5174\u8da3",
      content: `
        <ul class="research-list">
          <li><strong>\u5f3a\u5316\u5b66\u4e60</strong></li>
          <li><strong>MAS\uff08\u591a\u667a\u80fd\u4f53\u7cfb\u7edf\uff09</strong></li>
          <li><strong>AI4CO\uff08AI\u4e3a\u7ec4\u5408\u4f18\u5316\uff09</strong></li>
          <li><strong>NLP\uff08\u81ea\u7136\u8bed\u8a00\u5904\u7406\uff09</strong></li>
          <li><strong>LLM\uff08\u5927\u8bed\u8a00\u6a21\u578b\uff09</strong></li>
        </ul>
      `
    }
  },

  // === Publications ===
  publications: {
    en: {
      title: "Publications",
      placeholder: "Publications will be listed here. Stay tuned!"
    },
    zh: {
      title: "\u8bba\u6587\u53d1\u8868",
      placeholder: "\u8bba\u6587\u5c06\u5728\u6b64\u5904\u5c55\u793a\uff0c\u656c\u8bf7\u671f\u5f85\uff01"
    }
  },

  // === Projects ===
  projects: {
    en: {
      title: "Projects",
      categories: [
        {
          name: "Open Source Projects",
          items: [
            {
              name: "PaddlePaddle",
              desc: "PArallel Distributed Deep LEarning: Machine Learning Framework from Industrial Practice. Core framework of 'FeiJiang' for deep learning & machine learning, supporting high-performance single-machine, distributed training and cross-platform deployment.",
              url: "https://github.com/PaddlePaddle/Paddle",
              role: "Contributor"
            },
            {
              name: "docs",
              desc: "Documentations for PaddlePaddle.",
              url: "https://github.com/PaddlePaddle/docs",
              role: "Contributor"
            },
            {
              name: "RAGFlow",
              desc: "A leading open-source Retrieval-Augmented Generation (RAG) engine that fuses cutting-edge RAG with Agent capabilities to create a superior context layer for LLMs.",
              url: "https://github.com/infiniflow/ragflow",
              role: "Contributor"
            }
          ]
        },
        {
          name: "Personal Projects",
          items: [
            {
              name: "Deeptracer",
              desc: "A code analysis tool designed for Python code understanding, runtime observation, and improvement suggestions.",
              url: "https://github.com/FlowMatrix-HUEL/Deeptracer-alpha",
              role: "Owner"
            },
            {
              name: "Tracer",
              desc: "A lightweight intrusive Python function call tracer.",
              url: "https://github.com/Ricardo-shuo-liu/Tracer",
              role: "Owner"
            },
            {
              name: "minipy",
              desc: "A simple Python compiler written in C that supports a subset of Python syntax.",
              url: "https://github.com/Ricardo-shuo-liu/minipy",
              role: "Owner"
            },
            {
              name: "M2x",
              desc: "A lightweight, free Markdown converter that supports fast file processing via terminal and visual editing with one-click conversion to PDF and Word through a web interface.",
              url: "https://github.com/Ricardo-shuo-liu/M2x",
              role: "Owner"
            }
          ]
        }
      ]
    },
    zh: {
      title: "\u9879\u76ee",
      categories: [
        {
          name: "\u5f00\u6e90\u9879\u76ee",
          items: [
            {
              name: "PaddlePaddle",
              desc: "PArallel Distributed Deep LEarning\uff1a\u5de5\u4e1a\u5b9e\u8df5\u4e2d\u7684\u673a\u5668\u5b66\u4e60\u6846\u67b6\u3002\u300e\u98de\u6868\u300f\u6838\u5fc3\u6846\u67b6\uff0c\u652f\u6301\u6df1\u5ea6\u5b66\u4e60\u548c\u673a\u5668\u5b66\u4e60\u7684\u9ad8\u6027\u80fd\u5355\u673a\u3001\u5206\u5e03\u5f0f\u8bad\u7ec3\u548c\u8de8\u5e73\u53f0\u90e8\u7f72\u3002",
              url: "https://github.com/PaddlePaddle/Paddle",
              role: "\u8d21\u732e\u8005"
            },
            {
              name: "docs",
              desc: "PaddlePaddle \u7684\u6587\u6863\u3002",
              url: "https://github.com/PaddlePaddle/docs",
              role: "\u8d21\u732e\u8005"
            },
            {
              name: "RAGFlow",
              desc: "\u9886\u5148\u7684\u5f00\u6e90\u68c0\u7d22\u589e\u5f3a\u751f\u6210\uff08RAG\uff09\u5f15\u64ce\uff0c\u5c06\u524d\u6cbf RAG \u4e0e Agent \u80fd\u529b\u76f8\u878d\u5408\uff0c\u4e3a LLM \u6784\u5efa\u4f18\u8d28\u7684\u4e0a\u4e0b\u6587\u5c42\u3002",
              url: "https://github.com/infiniflow/ragflow",
              role: "\u8d21\u732e\u8005"
            }
          ]
        },
        {
          name: "\u4e2a\u4eba\u9879\u76ee",
          items: [
            {
              name: "Deeptracer",
              desc: "\u4e00\u4e2a\u7528\u4e8e Python \u4ee3\u7801\u7406\u89e3\u3001\u8fd0\u884c\u65f6\u89c2\u5bdf\u548c\u6539\u8fdb\u5efa\u8bae\u7684\u4ee3\u7801\u5206\u6790\u5de5\u5177\u3002",
              url: "https://github.com/FlowMatrix-HUEL/Deeptracer-alpha",
              role: "\u8d1f\u8d23\u4eba"
            },
            {
              name: "Tracer",
              desc: "\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684 Python \u51fd\u6570\u8c03\u7528\u8ddf\u8e2a\u5668\u3002",
              url: "https://github.com/Ricardo-shuo-liu/Tracer",
              role: "\u8d1f\u8d23\u4eba"
            },
            {
              name: "minipy",
              desc: "\u4e00\u4e2a\u7528 C \u8bed\u8a00\u7f16\u5199\u7684\u7b80\u5355 Python \u7f16\u8bd1\u5668\uff0c\u652f\u6301 Python \u8bed\u6cd5\u7684\u5b50\u96c6\u3002",
              url: "https://github.com/Ricardo-shuo-liu/minipy",
              role: "\u8d1f\u8d23\u4eba"
            },
            {
              name: "M2x",
              desc: "\u8f7b\u91cf\u7ea7\u514d\u8d39 Markdown \u8f6c\u6362\u5668\uff0c\u652f\u6301\u7ec8\u7aef\u5feb\u901f\u5904\u7406\u548c Web \u53ef\u89c6\u5316\u7f16\u8f91\uff0c\u4e00\u952e\u8f6c\u6362\u4e3a PDF \u548c Word\u3002",
              url: "https://github.com/Ricardo-shuo-liu/M2x",
              role: "\u8d1f\u8d23\u4eba"
            }
          ]
        }
      ]
    }
  },

  // === CV ===
  cv: {
    en: {
      title: "Curriculum Vitae",
      summary: `
        <h3>Technical Skills</h3>
        <ul>
          <li><strong>Languages:</strong> Python, C++</li>
          <li><strong>Frameworks:</strong> PyTorch, PaddlePaddle</li>
          <li><strong>Expertise:</strong> Deep Learning, NLP, Reinforcement Learning</li>
          <li><strong>Experience:</strong> Fine-tuning BERT and other large language models</li>
        </ul>
        <h3>Community Involvement</h3>
        <ul>
          <li>Member of Baidu PFCC Community</li>
          <li>Member of GTOC AI Infra</li>
          <li>Member of ERNIE Organization on Hugging Face</li>
        </ul>
      `
    },
    zh: {
      title: "\u7b80\u5386",
      summary: `
        <h3>\u6280\u672f\u6280\u80fd</h3>
        <ul>
          <li><strong>\u7f16\u7a0b\u8bed\u8a00\uff1a</strong>Python\u3001C++</li>
          <li><strong>\u6846\u67b6\uff1a</strong>PyTorch\u3001PaddlePaddle</li>
          <li><strong>\u4e13\u957f\u9886\u57df\uff1a</strong>\u6df1\u5ea6\u5b66\u4e60\u3001NLP\u3001\u5f3a\u5316\u5b66\u4e60</li>
          <li><strong>\u7ecf\u9a8c\uff1a</strong>BERT \u53ca\u5176\u4ed6\u5927\u6a21\u578b\u5fae\u8c03\u7ecf\u9a8c</li>
        </ul>
        <h3>\u793e\u533a\u53c2\u4e0e</h3>
        <ul>
          <li>\u767e\u5ea6 PFCC \u793e\u533a\u6210\u5458</li>
          <li>GTOC AI Infra \u6210\u5458</li>
          <li>Hugging Face \u4e0a ERNIE \u7ec4\u7ec7\u6210\u5458</li>
        </ul>
      `
    }
  },

  // === Blog ===
  blog: {
    en: {
      title: "Blog",
      posts: [
        { title: "Python Variables", date: "2026-03-10", desc: "In-depth exploration of Python's variable reference mechanism, memory management, mutable and immutable objects.", url: "blog/posts/python\u53d8\u91cf.html" },
        { title: "Python and Syntactic Sugar", date: "2026-03-10", desc: "Detailed explanation of Python syntactic sugar, including variable swapping, decorators, closures and context management.", url: "blog/posts/python\u4e0e\u8bed\u6cd5\u7cd6.html" },
        { title: "Getting Started with LLM-based Agents", date: "2026-01-12", desc: "Comprehensive guide on building intelligent agents using large language models.", url: "blog/posts/llm.html" }
      ]
    },
    zh: {
      title: "\u535a\u5ba2\u6587\u7ae0",
      posts: [
        { title: "Python\u53d8\u91cf", date: "2026-03-10", desc: "\u6df1\u5165\u63a2\u8ba8 Python \u7684\u53d8\u91cf\u5f15\u7528\u673a\u5236\u3001\u5185\u5b58\u7ba1\u7406\u3001\u53ef\u53d8\u4e0e\u4e0d\u53ef\u53d8\u5bf9\u8c61\u7b49\u6838\u5fc3\u6982\u5ff5\u3002", url: "blog/posts/python\u53d8\u91cf.html" },
        { title: "Python\u4e0e\u8bed\u6cd5\u7cd6", date: "2026-03-10", desc: "\u8be6\u89e3 Python \u4e2d\u7684\u8bed\u6cd5\u7cd6\uff0c\u5305\u62ec\u53d8\u91cf\u4ea4\u6362\u3001\u88c5\u9970\u5668\u3001\u95ed\u5305\u548c\u4e0a\u4e0b\u6587\u7ba1\u7406\u7b49\u7279\u6027\u3002", url: "blog/posts/python\u4e0e\u8bed\u6cd5\u7cd6.html" },
        { title: "LLM-based Agents\u5165\u95e8\u6307\u5357", date: "2026-01-12", desc: "\u5173\u4e8e\u4f7f\u7528\u5927\u578b\u8bed\u8a00\u6a21\u578b\u6784\u5efa\u667a\u80fd\u4ee3\u7406\u7684\u7efc\u5408\u6307\u5357\u3002", url: "blog/posts/llm.html" }
      ]
    }
  }
};
