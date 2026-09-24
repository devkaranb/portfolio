/**
 * ============================================================
 *  main.js — Renders all content from data.js
 *  You should NOT need to edit this file to update content.
 *  Only edit if you want to change how things look/behave.
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildHero();
  buildSkills();
  buildExperience();
  buildProjects();
  buildEducation();
  buildContact();
  buildFooter();
  initInteractions();
});

/* ── HELPERS ── */
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
}
function svgIcon(type) {
  const icons = {
    email: `<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>`,
    linkedin: `<svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zm2-3a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>`,
    phone: `<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.92 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    arrow: `<svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10"/></svg>`,
  };
  return icons[type] || '';
}

/* ── NAV ── */
function buildNav() {
  const nav = document.getElementById('nav');
  const d = PORTFOLIO_DATA.personal;
  nav.innerHTML = `
    <div class="nav-left">
      <img src="${d.avatar}" alt="${d.name}" style="width:34px;height:34px;border-radius:50%;object-fit:cover;border:2px solid rgba(99,179,237,0.4);">
    </div>
    <div class="nav-links">
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>
    </div>`;
}

/* ── HERO ── */
function buildHero() {
  const d = PORTFOLIO_DATA.personal;
  const stats = PORTFOLIO_DATA.stats;
  const statsHTML = stats.map(s => `
    <div>
      <div class="stat-num">${s.num}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');

  document.getElementById('hero').innerHTML = `
    <div class="hero-orbs">
      <div class="orb orb1"></div>
      <div class="orb orb2"></div>
      <div class="orb orb3"></div>
    </div>
    <div class="hero-content">
      ${d.available ? `<div class="status-pill"><span class="dot-live"></span> Open to new opportunities</div>` : ''}
      <h1>
        <span class="line1">${d.name}</span>
        <span class="line2">${d.title}</span>
      </h1>
      <p class="hero-desc">${d.description}</p>
      <div class="hero-actions">
        <a class="btn-main" href="#contact">Let's work together</a>
        <a class="btn-outline" href="#experience">See my work</a>
      </div>
      <div class="stats-row">${statsHTML}</div>
    </div>`;
}

/* ── SKILLS ── */
function buildSkills() {
  const rows = PORTFOLIO_DATA.skills.map(cat => {
    const pills = cat.skills.map(s =>
      `<span class="pill${s.isNew ? ' new' : ''}" ${s.isNew ? 'title="Recently added"' : ''}>${s.name}</span>`
    ).join('');
    return `
      <div class="skill-row-item reveal">
        <div class="skill-cat">${cat.category}</div>
        <div class="skill-pills">${pills}</div>
      </div>`;
  }).join('');

  document.getElementById('skills-list').innerHTML = rows;
}

/* ── EXPERIENCE ── */
function buildExperience() {
  const cards = PORTFOLIO_DATA.experience.map(job => {
    const bullets = job.bullets.map(b => `<li>${b}</li>`).join('');
    return `
      <div class="exp-card reveal">
        <div class="exp-top">
          <div class="exp-role">${job.role}</div>
          <div class="exp-meta">
            <span class="exp-company-badge">${job.company}</span>
            <span class="exp-date">${job.period}</span>
          </div>
        </div>
        <div class="exp-loc">📍 ${job.location}</div>
        <ul class="exp-list">${bullets}</ul>
      </div>`;
  }).join('');

  document.getElementById('exp-timeline').innerHTML = cards;
}

/* ── PROJECTS ── */
function buildProjects() {
  const cards = PORTFOLIO_DATA.projects.map((proj, i) => {
    const tags = proj.tags.map(t => `<span class="proj-tag">${t}</span>`).join('');
    const link = proj.link
      ? `<a class="proj-link" href="${proj.link}" target="_blank" rel="noopener">View project ${svgIcon('arrow')}</a>`
      : '';
    return `
      <div class="proj-card reveal">
        <div class="proj-num">${String(i + 1).padStart(2, '0')}</div>
        <div class="proj-icon">${proj.icon}</div>
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        <div class="proj-tags">${tags}</div>
        ${link}
      </div>`;
  }).join('');

  document.getElementById('proj-grid').innerHTML = cards;
}

/* ── EDUCATION ── */
function buildEducation() {
  const cards = PORTFOLIO_DATA.education.map(edu => `
    <div class="edu-card reveal">
      <div class="edu-left">
        <div class="edu-icon">${edu.icon}</div>
        <div>
          <div class="edu-degree">${edu.degree}</div>
          <div class="edu-inst">${edu.institution}</div>
        </div>
      </div>
      <span class="edu-year">${edu.year}</span>
    </div>`).join('');

  document.getElementById('edu-grid').innerHTML = cards;
}

/* ── CONTACT ── */
function buildContact() {
  const d = PORTFOLIO_DATA.personal;
  document.getElementById('contact-cards').innerHTML = `
    <a class="contact-card" href="mailto:${d.email}">
      <div class="cc-icon">${svgIcon('email')}</div>${d.email}
    </a>
    <a class="contact-card" href="${d.linkedin}" target="_blank" rel="noopener">
      <div class="cc-icon">${svgIcon('linkedin')}</div>LinkedIn
    </a>
    <a class="contact-card" href="tel:${d.phone.replace(/\s/g,'')}">
      <div class="cc-icon">${svgIcon('phone')}</div>${d.phone}
    </a>`;
}

/* ── FOOTER ── */
function buildFooter() {
  const d = PORTFOLIO_DATA.personal;
  document.getElementById('footer').innerHTML = `
    <span>© ${new Date().getFullYear()} ${d.name}</span>
    <span>${d.location} · Available remotely</span>`;
}

/* ── INTERACTIONS ── */
function initInteractions() {
  // Cursor glow
  const glow = document.getElementById('glow');
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });

  // Project card spotlight
  document.addEventListener('mousemove', e => {
    document.querySelectorAll('.proj-card').forEach(card => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
  });

  // Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe after a tick so dynamic content is in DOM
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }, 50);

  // Active nav link on scroll
  const sections = ['skills','experience','projects','education','contact'];
  const navLinks = document.querySelectorAll('.nav-links a');
  const scrollObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) scrollObs.observe(el);
  });
}
