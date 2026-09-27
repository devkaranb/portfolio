document.addEventListener('DOMContentLoaded', () => {
  buildNav(); buildHero(); buildSkills(); buildExperience(); buildProjects(); buildEducation(); buildContact(); buildFooter(); initInteractions();
});

function svgIcon(type) {
  const icons = { email: '&#9993;', linkedin: 'in', phone: '&#9742;', arrow: '&#8599;' };
  return icons[type] || '';
}

function buildNav() {
  const d = PORTFOLIO_DATA.personal;
  document.getElementById('nav').innerHTML = `<a class="nav-brand" href="#hero"><img src="${d.avatar}" alt="${d.name}"><span>${d.name}</span><span class="nav-mark">/ dev</span></a><div class="nav-links"><a href="#skills">Toolkit</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#education">Education</a><a class="nav-cta" href="#contact">Contact <span aria-hidden="true">&#8599;</span></a></div><button class="nav-toggle" aria-expanded="false" aria-controls="nav-mobile" aria-label="Toggle navigation">&#9776;</button><div class="nav-mobile" id="nav-mobile"><a href="#skills">Toolkit</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#education">Education</a><a href="#contact">Contact</a></div>`;
}

function buildHero() {
  const d = PORTFOLIO_DATA.personal;
  const stats = PORTFOLIO_DATA.stats.map(s => `<div><div class="stat-num">${s.num}</div><div class="stat-label">${s.label}</div></div>`).join('');
  document.getElementById('hero').innerHTML = `<div class="hero-content"><div class="hero-kicker">Backend engineering / Delhi, India</div>${d.available ? '<div class="status-line"><span class="dot-live"></span> Open to new opportunities</div>' : ''}<h1><span>${d.name}</span><span class="accent">${d.title}</span></h1><p class="hero-desc">${d.description}</p><div class="hero-actions"><a class="btn btn-main" href="#contact">Start a conversation <span>&#8599;</span></a><a class="btn btn-outline" href="assets/resume.pdf" download>Download resume <span>&#8595;</span></a></div><div class="stats-row">${stats}</div></div><aside class="hero-aside"><img class="hero-photo" src="${d.heroAvatar}" alt="Portrait of ${d.name}"><p class="hero-note">Currently building at Lepide.<br>Interested in reliable systems.</p></aside>`;
}

function buildSkills() {
  document.getElementById('skills-list').innerHTML = PORTFOLIO_DATA.skills.map(cat => `<div class="skill-row-item reveal"><div class="skill-cat">${cat.category}</div><div class="skill-pills">${cat.skills.map(skill => `<span class="pill">${skill}</span>`).join('')}</div></div>`).join('');
}

function buildExperience() {
  document.getElementById('exp-timeline').innerHTML = PORTFOLIO_DATA.experience.map(job => `<article class="exp-card reveal"><div class="exp-top"><div class="exp-role">${job.role}</div><div class="exp-meta"><span class="exp-company-badge">${job.company}</span><span class="exp-date">${job.period}</span></div></div><div class="exp-loc">${job.location}</div><ul class="exp-list">${job.bullets.map(b => `<li>${b}</li>`).join('')}</ul></article>`).join('');
}

function buildProjects() {
  document.getElementById('proj-grid').innerHTML = PORTFOLIO_DATA.projects.map(proj => `<article class="proj-card reveal"><div class="proj-top"><span class="proj-num">${proj.code}</span><span>${proj.type}</span></div><h3>${proj.title}</h3><p>${proj.description}</p><div class="proj-tags">${proj.tags.map(tag => `<span class="proj-tag">${tag}</span>`).join('')}</div></article>`).join('');
}

function buildEducation() {
  document.getElementById('edu-grid').innerHTML = PORTFOLIO_DATA.education.map(edu => `<article class="edu-card reveal"><div class="edu-degree">${edu.degree}</div><div class="edu-inst">${edu.institution}</div><span class="edu-year">${edu.year}</span></article>`).join('');
}

function buildContact() {
  const d = PORTFOLIO_DATA.personal;
  document.getElementById('contact-cards').innerHTML = `<a class="contact-card" href="mailto:${d.email}"><span class="cc-icon">${svgIcon('email')}</span>${d.email}</a><a class="contact-card" href="${d.linkedin}" target="_blank" rel="noopener"><span class="cc-icon">${svgIcon('linkedin')}</span>LinkedIn</a><a class="contact-card" href="tel:${d.phone.replace(/\s/g, '')}"><span class="cc-icon">${svgIcon('phone')}</span>${d.phone}</a>`;
}

function buildFooter() { document.getElementById('footer').innerHTML = `<span>&copy; ${new Date().getFullYear()} ${PORTFOLIO_DATA.personal.name}</span><span>${PORTFOLIO_DATA.personal.location} / Available remotely</span>`; }

function initInteractions() {
  const nav = document.getElementById('nav');
  const cursorOrb = document.getElementById('cursor-orb');
  const interactiveTargets = document.querySelectorAll('.btn, .contact-card, .nav-cta');
  if (cursorOrb && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('pointermove', event => {
      cursorOrb.style.left = `${event.clientX}px`;
      cursorOrb.style.top = `${event.clientY}px`;
      cursorOrb.classList.add('visible');
      const x = (event.clientX / window.innerWidth - .5) * 2;
      const y = (event.clientY / window.innerHeight - .5) * 2;
      const hero = document.querySelector('.hero-content');
      const aside = document.querySelector('.hero-aside');
      if (hero) hero.style.transform = `translate(${x * 3}px, ${y * 2}px)`;
      if (aside) aside.style.transform = `translate(${x * -4}px, ${y * -3}px)`;
    }, { passive: true });
    window.addEventListener('pointerleave', () => cursorOrb.classList.remove('visible'));
  }
  interactiveTargets.forEach(target => {
    target.addEventListener('pointermove', event => {
      if (!window.matchMedia('(pointer: fine)').matches) return;
      const bounds = target.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - .5;
      const y = (event.clientY - bounds.top) / bounds.height - .5;
      target.style.transform = `translate(${x * 5}px, ${y * 4}px)`;
    });
    target.addEventListener('pointerleave', () => { target.style.transform = ''; });
  });
  const progress = document.getElementById('scroll-progress');
  const heroPhoto = document.querySelector('.hero-photo');
  const updateNav = () => {
    nav.classList.toggle('scrolled', window.scrollY > 12);
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (progress && maxScroll > 0) progress.style.width = `${Math.min(100, (window.scrollY / maxScroll) * 100)}%`;
    if (heroPhoto && window.innerWidth > 800) heroPhoto.style.transform = `translateY(${Math.min(18, window.scrollY * 0.045)}px)`;
  };
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });
  const io = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); } }), { threshold: .1 });
  document.querySelectorAll('.reveal').forEach(item => io.observe(item));
  const sections = ['skills', 'experience', 'projects', 'education', 'contact'];
  const navLinks = document.querySelectorAll('.nav-links a');
  const scrollObs = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { navLinks.forEach(a => a.classList.remove('active')); const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`); if (link) link.classList.add('active'); } }), { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(id => { const section = document.getElementById(id); if (section) scrollObs.observe(section); });
  const toggle = document.querySelector('.nav-toggle'); const mobile = document.getElementById('nav-mobile');
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); mobile.classList.toggle('open'); });
  mobile.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { toggle.setAttribute('aria-expanded', 'false'); mobile.classList.remove('open'); }));

  document.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('pointermove', event => {
      if (window.innerWidth <= 800) return;
      const bounds = card.getBoundingClientRect();
      const rotateX = ((event.clientY - bounds.top) / bounds.height - .5) * -3;
      const rotateY = ((event.clientX - bounds.left) / bounds.width - .5) * 3;
      card.style.transform = `perspective(700px) translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
}
