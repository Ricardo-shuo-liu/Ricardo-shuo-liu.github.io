// 全局状态：默认英文+深色主题
let currentLang = "en";
let currentTheme = "dark";
let currentPage = "index";

// 页面加载后初始化
document.addEventListener('DOMContentLoaded', function() {
  // 1. 初始化主题（优先读取本地存储，适配用户偏好）
  initTheme();
  // 2. 初始化语言（优先读取本地存储，适配用户偏好）
  initLang();
  // 3. 初始化通用UI（导航/侧边栏/页脚）
  initCommonUI();
  // 4. 初始化当前页面内容
  loadPageContent(currentPage);

  // 5. 事件绑定：语言切换
  document.getElementById('lang-toggle').addEventListener('click', function() {
    currentLang = currentLang === "en" ? "zh" : "en";
    saveLang();
    initCommonUI();
    loadPageContent(currentPage);
  });

  // 6. 事件绑定：主题切换（月亮/太阳图标）
  document.getElementById('theme-toggle').addEventListener('click', function() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    updateTheme();
  });

  // 7. 事件绑定：导航链接点击
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const pageId = this.getAttribute('data-page');
      if (pageId) {
        navigateToPage(pageId);
      }
    });
  });

  // 8. 占位内容提示（鼠标悬浮高亮）
  document.querySelectorAll('.placeholder').forEach(item => {
    // 修正后的代码
    item.addEventListener('mouseover', () => {
    // 正确获取CSS变量 --hover-color 的实际值
    const hoverColor = getComputedStyle(document.documentElement).getPropertyValue('--hover-color');
    item.style.backgroundColor = hoverColor; // 赋值具体颜色值
    item.style.padding = '2px 4px';
    item.style.borderRadius = '3px';
    });
    item.addEventListener('mouseout', () => {
      item.style.backgroundColor = 'transparent';
      item.style.padding = '0';
    });
  });

  // 9. 处理浏览器前进/后退
  window.addEventListener('popstate', function() {
    const pageId = window.location.hash.substring(1) || 'index';
    loadPageContent(pageId);
  });
});

// 导航到指定页面
function navigateToPage(pageId) {
  currentPage = pageId;
  window.history.pushState(null, null, `#${pageId}`);
  loadPageContent(pageId);
}

// 加载页面内容
function loadPageContent(pageId) {
  currentPage = pageId;
  document.body.dataset.page = pageId;
  
  // 清空内容容器
  const contentContainer = document.getElementById('page-content-container');
  contentContainer.innerHTML = '';
  
  if (!langConfig[pageId]) {
    contentContainer.innerHTML = '<h1>Page Not Found</h1><p>The requested page does not exist.</p>';
    return;
  }
  
  const lang = langConfig[pageId][currentLang];
  
  // 按页面类型加载内容
  switch(pageId) {
    case 'index':
      contentContainer.innerHTML = `
        ${lang.title ? `<h1 id="page-title">${lang.title}</h1>` : ''}
        
        <h2 id="about-title">${lang.about.title}</h2>
        <div id="about-content">${lang.about.content}</div>

        <h2 id="personal-projects-title">${lang.personalProjects.title}</h2>
        <p id="personal-projects-note">${lang.personalProjects.note}</p>
        <div class="projects-grid">
          <div class="project-card">
            <h3 id="repo1-name">${lang.personalProjects.repo1.name}</h3>
            <p id="repo1-desc">${lang.personalProjects.repo1.desc}</p>
            <p><a href="${lang.personalProjects.repo1.link}" target="_blank" id="repo1-link">🔗 GitHub Repository Link</a></p>
            <p class="project-role" id="repo1-role">Role: ${lang.personalProjects.repo1.role}</p>
          </div>
          <div class="project-card">
            <h3 id="repo2-name">${lang.personalProjects.repo2.name}</h3>
            <p id="repo2-desc">${lang.personalProjects.repo2.desc}</p>
            <p><a href="${lang.personalProjects.repo2.link}" target="_blank" id="repo2-link">🔗 GitHub Repository Link</a></p>
            <p class="project-role" id="repo2-role">Role: ${lang.personalProjects.repo2.role}</p>
          </div>
        </div>

        <h2 id="contributed-projects-title">${lang.contributedProjects.title}</h2>
        <p id="contributed-projects-note">${lang.contributedProjects.note}</p>
        <div class="projects-grid">
          <div class="project-card">
            <h3 id="contrib-repo1-name">${lang.contributedProjects.repo1.name}</h3>
            <p id="contrib-repo1-desc">${lang.contributedProjects.repo1.desc}</p>
            <p><a href="${lang.contributedProjects.repo1.link}" id="contrib-repo1-link" target="_blank">🔗 GitHub Repository Link</a></p>
            <p class="project-role" id="contrib-repo1-role">Role: ${lang.contributedProjects.repo1.role}</p>
          </div>
          <div class="project-card">
            <h3 id="contrib-repo2-name">${lang.contributedProjects.repo2.name}</h3>
            <p id="contrib-repo2-desc">${lang.contributedProjects.repo2.desc}</p>
            <p><a href="${lang.contributedProjects.repo2.link}" id="contrib-repo2-link" target="_blank">🔗 GitHub Repository Link</a></p>
            <p class="project-role" id="contrib-repo2-role">Role: ${lang.contributedProjects.repo2.role}</p>
          </div>
          <div class="project-card">
            <h3 id="contrib-repo3-name">${lang.contributedProjects.repo3.name}</h3>
            <p id="contrib-repo3-desc">${lang.contributedProjects.repo3.desc}</p>
            <p><a href="${lang.contributedProjects.repo3.link}" id="contrib-repo3-link" target="_blank">🔗 GitHub Repository Link</a></p>
            <p class="project-role" id="contrib-repo3-role">Role: ${lang.contributedProjects.repo3.role}</p>
          </div>
        </div>

        <h2>${lang.blogPosts.title}</h2>
        <p>${lang.blogPosts.intro}</p>
        <ul>
          <li><a href="https://blog.csdn.net/2401_88165744/article/details/151224614?spm=1001.2014.3001.5501" target="_blank">${lang.blogPosts.post1.title}</a> - ${lang.blogPosts.post1.desc}</li>
          <li><a href="https://blog.csdn.net/2401_88165744/article/details/150499136?spm=1001.2014.3001.5501" target="_blank">${lang.blogPosts.post2.title}</a> - ${lang.blogPosts.post2.desc}</li>
        </ul>
      `;
      break;
    case 'cv':
    case 'talks':
    case 'teaching':
    case 'portfolio':
    case 'publications':
    case 'guide':
      contentContainer.innerHTML = `
        <h1 id="page-title">${lang.title}</h1>
        <div id="page-content">${lang.content}</div>
      `;
      break;
    case 'blog':
      contentContainer.innerHTML = `
        <h1 id="page-title">${lang.title}</h1>
        <p id="blog-intro">${lang.intro}</p>
        <div class="blog-posts">
          <div class="blog-post">
            <h2 id="post1-title">${lang.post1.title}</h2>
            <p id="post1-date">${lang.post1.date}</p>
            <p id="post1-desc">${lang.post1.desc}</p>
            <a href="blog/posts/python变量.html" target="_blank" class="read-more">Read More →</a>
          </div>
          <div class="blog-post">
            <h2 id="post2-title">${lang.post2.title}</h2>
            <p id="post2-date">${lang.post2.date}</p>
            <p id="post2-desc">${lang.post2.desc}</p>
            <a href="blog/posts/python与语法糖.html" target="_blank" class="read-more">Read More →</a>
          </div>
          <div class="blog-post">
            <h2 id="post3-title">${lang.post3.title}</h2>
            <p id="post3-date">${lang.post3.date}</p>
            <p id="post3-desc">${lang.post3.desc}</p>
            <a href="blog/posts/llm.html" target="_blank" class="read-more">Read More →</a>
          </div>
        </div>
      `;
      break;
    case 'post1':
    case 'post2':
      contentContainer.innerHTML = `
        <h1 id="page-title">${lang.title}</h1>
        <div id="post-content">${lang.content}</div>
        <button class="back-button" onclick="navigateToPage('blog')">Back to Blog</button>
      `;
      break;
  }
  
  // 重新绑定占位内容提示事件
  document.querySelectorAll('.placeholder').forEach(item => {
    item.addEventListener('mouseover', () => {
      const hoverColor = getComputedStyle(document.documentElement).getPropertyValue('--hover-color');
      item.style.backgroundColor = hoverColor;
      item.style.padding = '2px 4px';
      item.style.borderRadius = '3px';
    });
    item.addEventListener('mouseout', () => {
      item.style.backgroundColor = 'transparent';
      item.style.padding = '0';
    });
  });
}

// 初始化语言（读取本地存储+更新UI）
function initLang() {
  // 优先读取本地存储的语言偏好
  const savedLang = localStorage.getItem('site-lang');
  if (savedLang) {
    currentLang = savedLang;
  }
}

// 保存语言设置到本地存储
function saveLang() {
  localStorage.setItem('site-lang', currentLang);
}

// 初始化主题（读取本地存储+更新UI）
function initTheme() {
  // 优先读取本地存储的主题偏好
  const savedTheme = localStorage.getItem('site-theme');
  if (savedTheme) {
    currentTheme = savedTheme;
  }
  updateTheme();
}

// 更新主题（修改CSS变量+切换图标+保存到本地）
function updateTheme() {
  // 修改根元素的data-theme属性
  document.documentElement.setAttribute('data-theme', currentTheme);
  // 切换图标（月亮/太阳）
  const themeBtn = document.getElementById('theme-toggle');
  themeBtn.innerHTML = currentTheme === "dark" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  // 保存到本地存储
  localStorage.setItem('site-theme', currentTheme);
}

// 初始化通用UI（导航/侧边栏/页脚）
function initCommonUI() {
  const lang = langConfig.common[currentLang];
  // 更新网站标题
  document.title = lang.siteTitle;
  // 更新顶部标题
  document.getElementById('site-title').textContent = lang.siteTitle;
  // 更新导航栏
  Object.keys(lang.nav).forEach(key => {
    const el = document.getElementById(`nav-${key}`);
    if (el) el.textContent = lang.nav[key];
  });
  // 更新语言按钮
  document.getElementById('lang-toggle').textContent = lang.toggleLang;
  // 更新侧边栏
  document.getElementById('sidebar-name').textContent = lang.sidebar.name;
  document.getElementById('sidebar-bio').textContent = lang.sidebar.bio;
  // 侧边栏快捷链接（复刻参考站的所有项）
  document.getElementById('contact-location').innerHTML = lang.sidebar.contact.location;
  document.getElementById('contact-university').innerHTML = lang.sidebar.contact.university;
  document.getElementById('contact-email').innerHTML = lang.sidebar.contact.email;
  document.getElementById('contact-scholar').innerHTML = lang.sidebar.contact.scholar;
  document.getElementById('contact-pubmed').innerHTML = lang.sidebar.contact.pubmed;
  document.getElementById('contact-github').innerHTML = lang.sidebar.contact.github;
  document.getElementById('contact-bluesky').innerHTML = lang.sidebar.contact.bluesky;
  document.getElementById('contact-huggingface').innerHTML = lang.sidebar.contact.huggingface;
  document.getElementById('contact-pypi').innerHTML = lang.sidebar.contact.pypi;
  // 更新页脚
  document.getElementById('site-footer').textContent = lang.footer;
}
