// Global state
let currentLang = localStorage.getItem('lang') || 'zh';
let currentTheme = localStorage.getItem('theme') || 'light';

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  renderContent();
  initScrollSpy();
  initEventListeners();
});

// Theme management
function initTheme() {
  document.body.setAttribute('data-theme', currentTheme);
  updateThemeIcon();
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
  document.body.setAttribute('data-theme', currentTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.querySelector('#theme-toggle i');
  if (currentTheme === 'dark') {
    icon.className = 'fa-solid fa-sun';
  } else {
    icon.className = 'fa-solid fa-moon';
  }
}

// Language management
function initLang() {
  updateLangUI();
}

function toggleLang() {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  localStorage.setItem('lang', currentLang);
  updateLangUI();
  renderContent();
}

function updateLangUI() {
  const btn = document.getElementById('lang-toggle');
  btn.textContent = currentLang === 'zh' ? 'English' : '中文';
  
  // Update nav links
  const nav = langConfig.common[currentLang].nav;
  document.getElementById('nav-about').textContent = nav.about;
  document.getElementById('nav-education').textContent = nav.education;
  document.getElementById('nav-research').textContent = nav.research;
  document.getElementById('nav-publications').textContent = nav.publications;
  document.getElementById('nav-projects').textContent = nav.projects;
  document.getElementById('nav-cv').textContent = nav.cv;
  document.getElementById('nav-blog').textContent = nav.blog;
  
  // Update sidebar
  const sidebar = langConfig.common[currentLang].sidebar;
  document.getElementById('sidebar-name').textContent = sidebar.name;
  document.getElementById('sidebar-university').textContent = sidebar.university;
  
  // Update tags
  const tagsContainer = document.getElementById('sidebar-tags');
  tagsContainer.innerHTML = sidebar.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  
  // Update contact list - icons are already in HTML template, just update text/links
  document.getElementById('contact-location').textContent = sidebar.contact.location;
  document.getElementById('contact-email').textContent = '13838152117@139.com';
  document.getElementById('contact-github').textContent = 'GitHub';
  document.getElementById('contact-scholar').textContent = currentLang === 'zh' ? '谷歌学术' : 'Google Scholar';
  document.getElementById('contact-bluesky').textContent = 'Bluesky';
  document.getElementById('contact-huggingface').textContent = 'Hugging Face';
  document.getElementById('contact-pypi').textContent = 'PyPI';
  
  // Update footer
  document.getElementById('site-footer').innerHTML = `<p>${langConfig.common[currentLang].footer}</p>`;
}

// Render all content sections
function renderContent() {
  renderAbout();
  renderEducation();
  renderResearch();
  renderPublications();
  renderProjects();
  renderBlog();
}

function renderAbout() {
  const data = langConfig.about[currentLang];
  document.getElementById('about-title').textContent = data.title;
  document.getElementById('about-content').innerHTML = data.content;
}

function renderEducation() {
  const data = langConfig.education[currentLang];
  document.getElementById('education-title').textContent = data.title;
  
  const timeline = document.getElementById('education-content');
  timeline.innerHTML = data.items.map(item => `
    <div class="timeline-item">
      <div class="timeline-period">${item.period}</div>
      <div class="timeline-school">${item.school}, ${item.location}</div>
      <div class="timeline-detail">${item.degree} - ${item.detail}</div>
    </div>
  `).join('');
}

function renderResearch() {
  const data = langConfig.research[currentLang];
  document.getElementById('research-title').textContent = data.title;
  document.getElementById('research-content').innerHTML = data.content;
}

function renderPublications() {
  const data = langConfig.publications[currentLang];
  document.getElementById('publications-title').textContent = data.title;
  document.getElementById('publications-content').innerHTML = `
    <div class="publications-placeholder">
      <p>${data.placeholder}</p>
    </div>
  `;
}

function renderProjects() {
  const data = langConfig.projects[currentLang];
  document.getElementById('projects-title').textContent = data.title;
  
  const container = document.getElementById('projects-content');
  container.innerHTML = data.categories.map(category => `
    <div class="projects-category">
      <h3>${category.name}</h3>
      <div class="projects-grid">
        ${category.items.map(project => `
          <div class="project-card">
            <h4>${project.name}</h4>
            <p>${project.desc}</p>
            <a href="${project.url}" target="_blank" class="project-link">
              <i class="fa-brands fa-github"></i> GitHub
            </a>
            <span class="project-role">${project.role}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderBlog() {
  const data = langConfig.blog[currentLang];
  document.getElementById('blog-title').textContent = data.title;
  
  const container = document.getElementById('blog-content');
  container.innerHTML = `
    <div class="blog-list">
      ${data.posts.map(post => `
        <div class="blog-item">
          <h3>${post.title}</h3>
          <div class="blog-meta">${post.date}</div>
          <p>${post.desc}</p>
          <a href="${post.url}" class="blog-link">
            ${currentLang === 'zh' ? '阅读更多 →' : 'Read more →'}
          </a>
        </div>
      `).join('')}
    </div>
  `;
}

// Scroll spy for navigation highlighting
function initScrollSpy() {
  const sections = document.querySelectorAll('.content-section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-100px 0px -60% 0px',
    threshold: 0
  });
  
  sections.forEach(section => observer.observe(section));
}

// Event listeners
function initEventListeners() {
  // Theme toggle
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  
  // Language toggle
  document.getElementById('lang-toggle').addEventListener('click', toggleLang);
  
  // Smooth scroll for nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
