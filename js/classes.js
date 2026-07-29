gsap.registerPlugin(ScrollTrigger);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function statusPill(status) {
  const isOpen = status === 'open';
  return `<span class="status-pill status-pill--${isOpen ? 'open' : 'coming-soon'}">${isOpen ? 'Open' : 'Coming Soon'}</span>`;
}

function trackUrl(categoryId, trackId) {
  return window.AIYA_trackUrl(categoryId, trackId);
}

function workshopUrl(slug) {
  return `session.html?s=${encodeURIComponent(slug)}`;
}

function getTrackIdFromParams(params) {
  return params.get('t') || params.get('l') || null;
}

function renderBreadcrumb(items) {
  return items
    .map((item, i) => {
      const sep = i > 0 ? '<span class="sep">/</span>' : '';
      if (item.current) return `${sep}<span class="current">${escapeHtml(item.label)}</span>`;
      return `${sep}<a href="${item.href}">${escapeHtml(item.label)}</a>`;
    })
    .join('');
}

function renderPathBanner(breadcrumbItems, showPathTrail = false) {
  const trail = showPathTrail
    ? `<div class="path-banner-trail" aria-hidden="true">
        <span>Start here</span>
        <span class="arrow">→</span>
        <span class="highlight">Discover AI</span>
        <span class="arrow">→</span>
        <span>Build Sessions</span>
        <span class="arrow">→</span>
        <span>Build Labs</span>
      </div>`
    : '';

  return `
    <div class="path-banner">
      <div class="path-banner-row">
        <nav class="classes-breadcrumb" aria-label="Breadcrumb">${renderBreadcrumb(breadcrumbItems)}</nav>
        ${trail}
      </div>
    </div>`;
}

function renderCatalogueSidebar(activeCategory, activeTrack, options = {}) {
  const { showWorkshops = false, workshops = [], activeSlug = null } = options;

  const categories = AIYA_SESSIONS.paths
    .map((path) => {
      const isActive = path.id === activeCategory;
      const tracks = AIYA_getTracks(path.id);
      const tracksHtml =
        isActive && tracks.length
          ? `<ul class="sidebar-tracks">
              ${tracks
                .map((track) => {
                  const isTrackActive = track.id === activeTrack;
                  return `<li>
                    <a href="${trackUrl(path.id, track.id)}" class="sidebar-track${isTrackActive ? ' is-active' : ''}">
                      ${track.emoji ? `${track.emoji} ` : ''}${escapeHtml(track.name)}
                    </a>
                  </li>`;
                })
                .join('')}
            </ul>`
          : '';

      return `<li class="sidebar-category${isActive ? ' is-active' : ''}">
        <a href="${trackUrl(path.id, tracks[0]?.id || 'all')}" class="sidebar-category-link">${escapeHtml(path.name)}</a>
        ${tracksHtml}
      </li>`;
    })
    .join('');

  let workshopsHtml = '';
  if (showWorkshops && workshops.length) {
    workshopsHtml = `
      <div class="sidebar-terminal" aria-label="Workshops in this track">
        <div class="sidebar-terminal-bar">
          <span class="sidebar-terminal-dot sidebar-terminal-dot--close" aria-hidden="true"></span>
          <span class="sidebar-terminal-dot sidebar-terminal-dot--min" aria-hidden="true"></span>
          <span class="sidebar-terminal-dot sidebar-terminal-dot--max" aria-hidden="true"></span>
          <span class="sidebar-terminal-title mono">Related workshops</span>
        </div>
        <div class="sidebar-terminal-body">
          <ul class="sidebar-terminal-list">
            ${workshops
              .map((w) => {
                const title = w.fullName || w.name;
                return `<li>
                  <a href="${workshopUrl(w.slug)}" class="sidebar-workshop${w.slug === activeSlug ? ' is-active' : ''}">
                    <span class="sidebar-workshop-marker" aria-hidden="true">${w.slug === activeSlug ? '●' : '○'}</span>
                    ${escapeHtml(title)}
                  </a>
                </li>`;
              })
              .join('')}
          </ul>
        </div>
      </div>`;
  }

  return `
    <aside class="catalogue-sidebar" aria-label="Browse classes">
      <nav>
        <ul class="sidebar-categories">${categories}</ul>
      </nav>
      ${workshopsHtml}
    </aside>`;
}

function workshopCard(session) {
  const title = session.fullName || session.name;
  return `
    <article class="workshop-card rv">
      <h3 class="workshop-card-title">${escapeHtml(title)}</h3>
      <div class="workshop-card-image" aria-hidden="true">
        <span class="mono dim">${escapeHtml(session.outcome)}</span>
      </div>
      <p class="workshop-card-desc">${escapeHtml(session.outcome)}</p>
      <div class="workshop-card-meta">
        <span class="mono">${escapeHtml(session.price)}</span>
        <span class="mono dim">${escapeHtml(session.duration)}</span>
        ${statusPill(session.status)}
      </div>
      <a class="magnet workshop-card-cta" href="${workshopUrl(session.slug)}"><span>More info</span><span>→</span></a>
    </article>`;
}

function renderCategories() {
  const grid = document.getElementById('categoryGrid');
  if (grid) window.AIYA_renderPathCards(grid);
}

function renderTrack() {
  const root = document.getElementById('trackRoot');
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const categoryId = params.get('c') || 'discover';
  const category = AIYA_getCategory(categoryId);

  if (!category) {
    root.innerHTML = `
      ${renderPathBanner([
        { href: 'index.html', label: 'Home' },
        { href: 'classes.html', label: 'Classes' },
        { href: '#', label: 'Not found', current: true },
      ])}
      <div class="track-main">
        <h1>Category not found</h1>
        <a class="magnet" href="classes.html"><span>Back to classes</span><span>→</span></a>
      </div>`;
    return;
  }

  const tracks = AIYA_getTracks(categoryId);
  const trackId = getTrackIdFromParams(params) || tracks[0]?.id || 'all';
  const track = tracks.find((t) => t.id === trackId) || tracks[0];
  const workshops = AIYA_getWorkshops(categoryId, track?.id);
  const trackIntro = AIYA_getTrackIntro(categoryId, track?.id);
  const categoryIntro = AIYA_getCategoryIntro(categoryId);

  const mobileTracksNav =
    tracks.length > 1
      ? `<nav class="mobile-tracks-nav" aria-label="Browse tracks">
          ${tracks
            .map(
              (t) =>
                `<a href="${trackUrl(categoryId, t.id)}" class="${t.id === track?.id ? 'is-active' : ''}">${t.emoji ? `${t.emoji} ` : ''}${escapeHtml(t.name.replace(' Track', ''))}</a>`,
            )
            .join('')}
        </nav>`
      : '';

  document.title = `${track?.name || category.name} — AIYA✦ Classes`;

  const breadcrumbItems = [
    { href: 'index.html', label: 'Home' },
    { href: 'classes.html', label: 'Classes' },
    { href: trackUrl(categoryId, 'all'), label: category.name },
  ];
  if (track && track.id !== 'all') {
    breadcrumbItems.push({ href: trackUrl(categoryId, track.id), label: track.name, current: true });
  } else {
    breadcrumbItems[breadcrumbItems.length - 1].current = true;
  }

  root.innerHTML = `
    ${renderPathBanner(breadcrumbItems)}
    <div class="track-layout-inner">
      ${renderCatalogueSidebar(categoryId, track?.id)}
      <div class="track-main">
        <header class="track-hero">
          <h1>${escapeHtml(track?.name || category.name)}</h1>
          <p class="track-intro">${escapeHtml(track?.id === 'all' ? categoryIntro : trackIntro || categoryIntro)}</p>
          <div class="track-meta mono dim">
            ${escapeHtml(category.format)} · ${escapeHtml(category.duration)} · ${escapeHtml(category.price)}
          </div>
        </header>

        ${mobileTracksNav}

        <section class="workshops-section" aria-labelledby="workshops-heading">
          <h2 id="workshops-heading" class="workshops-heading">Workshops</h2>
          <div class="workshop-grid" id="workshopGrid">
            ${workshops.map((w) => workshopCard(categoryId === 'build-sessions' ? { ...w, fullName: w.fullName } : w)).join('')}
          </div>
        </section>
      </div>
    </div>`;
}

function renderWorkshop() {
  const root = document.getElementById('workshopRoot');
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('s');
  const session = slug ? AIYA_getSession(slug) : null;

  if (!session) {
    root.innerHTML = `
      ${renderPathBanner([
        { href: 'index.html', label: 'Home' },
        { href: 'classes.html', label: 'Classes' },
        { href: '#', label: 'Not found', current: true },
      ])}
      <div class="track-main">
        <div class="session-hero rv">
          <h1>Workshop not found</h1>
          <p class="classes-hero-strap">That workshop doesn't exist yet — or the link may be wrong.</p>
          <a class="magnet session-cta" href="classes.html"><span>Browse all classes</span><span>→</span></a>
        </div>
      </div>`;
    return;
  }

  const title = session.fullName || session.name;
  const isOpen = session.status === 'open';
  const ctaLabel = isOpen ? 'Book now' : 'Notify me';
  const ctaHref = isOpen ? '#book' : '#notify';
  const categoryId = session.category;
  const trackId = session.trackId || 'all';
  const sidebarWorkshops = AIYA_getWorkshops(categoryId, trackId);

  document.title = `${title} — AIYA✦ Classes`;

  const breadcrumbItems = [
    { href: 'index.html', label: 'Home' },
    { href: 'classes.html', label: 'Classes' },
    { href: trackUrl(categoryId, trackId), label: session.categoryName },
  ];
  if (session.trackName) {
    breadcrumbItems.push({ href: trackUrl(categoryId, trackId), label: session.trackName });
  }
  breadcrumbItems.push({ href: workshopUrl(slug), label: session.name, current: true });

  let progressionHtml = '';
  let upNextHtml = '';

  if (session.trackSessions) {
    const steps = session.trackSessions
      .map((s, i) => {
        const isCurrent = s.slug === session.slug;
        const arrow = i < session.trackSessions.length - 1 ? '<span class="progression-arrow">→</span>' : '';
        return `
          <a class="progression-step${isCurrent ? ' is-current' : ''}" href="${workshopUrl(s.slug)}">
            <span class="num">${String(i + 1).padStart(2, '0')}</span>
            ${escapeHtml(s.shortName || s.name.replace(/^Build (a |an |your first |your )/i, ''))}
          </a>${arrow}`;
      })
      .join('');

    progressionHtml = `
      <section class="progression-block rv">
        <h2>Your track</h2>
        <div class="progression-strip">${steps}</div>
      </section>`;

    const nextIndex = session.step;
    if (nextIndex != null && nextIndex < session.trackSessions.length) {
      const next = session.trackSessions[nextIndex];
      upNextHtml = `
        <section class="up-next-block rv">
          <h2>Up next</h2>
          <a class="up-next-card" href="${workshopUrl(next.slug)}">
            <div class="fill"></div>
            <div>
              <div class="mono dim">Step ${String(nextIndex + 1).padStart(2, '0')}</div>
              <h3>${escapeHtml(next.fullName || next.name)}</h3>
              <p>${escapeHtml(next.outcome)}</p>
            </div>
            <span class="up-next-arrow">→</span>
          </a>
        </section>`;
    }
  }

  root.innerHTML = `
    ${renderPathBanner(breadcrumbItems)}
    <div class="track-layout-inner">
      ${renderCatalogueSidebar(categoryId, trackId, {
        showWorkshops: true,
        workshops: sidebarWorkshops.map((w) =>
          categoryId === 'build-sessions' ? { ...w, fullName: w.fullName } : w,
        ),
        activeSlug: slug,
      })}
      <div class="track-main">
        <header class="session-hero">
          <h1>${escapeHtml(title)}</h1>
          <a class="magnet session-cta" href="${ctaHref}"><span>${ctaLabel}</span><span>→</span></a>
          <div class="session-meta-row">
            <div class="session-meta-item">
              <span class="label">Format</span>
              <span class="value">${escapeHtml(session.format)}</span>
            </div>
            <div class="session-meta-item">
              <span class="label">Duration</span>
              <span class="value">${escapeHtml(session.duration)}</span>
            </div>
            <div class="session-meta-item">
              <span class="label">Price</span>
              <span class="value">${escapeHtml(session.price)}</span>
            </div>
            <div class="session-meta-item">
              <span class="label">Level</span>
              <span class="value">${escapeHtml(session.level)}</span>
            </div>
            <div class="session-meta-item">
              <span class="label">Status</span>
              <span class="value">${statusPill(session.status)}</span>
            </div>
          </div>
        </header>

        <section class="build-block rv">
          <h2>What you'll build</h2>
          <ul class="build-outcomes">
            ${session.outcomes.map((o) => `<li>${escapeHtml(o)}</li>`).join('')}
          </ul>
          <div class="build-image" aria-hidden="true">
            <div class="build-image-inner">${escapeHtml(session.outcome)}</div>
          </div>
        </section>

        <section class="audience-block rv">
          <h2>Who it's for</h2>
          ${session.audience.map((line) => `<p>${escapeHtml(line)}</p>`).join('')}
        </section>

        ${progressionHtml}
        ${upNextHtml}
      </div>
    </div>`;
}

function tickClock() {
  const clock = document.getElementById('clock');
  if (!clock) return;

  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZoneName: 'short',
  }).formatToParts(new Date());

  const hour = parts.find((p) => p.type === 'hour')?.value ?? '--';
  const minute = parts.find((p) => p.type === 'minute')?.value ?? '--';
  const zone = parts.find((p) => p.type === 'timeZoneName')?.value ?? '';

  clock.textContent = `${hour}:${minute} ${zone}`.trim();
}
tickClock();
setInterval(tickClock, 10000);

(function initTheme() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  function syncThemeButton() {
    const isDark = document.documentElement.classList.contains('dark');
    const icon = btn.querySelector('.theme-toggle-icon');
    const label = btn.querySelector('.theme-toggle-label');

    if (icon) icon.textContent = isDark ? '☀️' : '🌙';
    if (label) label.textContent = isDark ? 'Light' : 'Dark';

    btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    btn.setAttribute('aria-pressed', String(isDark));
  }

  function setTheme(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('aiya-theme', isDark ? 'dark' : 'light');
    } catch (e) {}
    window.__setGLTheme?.();
    syncThemeButton();
  }

  let saved = null;
  try {
    saved = localStorage.getItem('aiya-theme');
  } catch (e) {}

  setTheme(saved === 'dark');
  btn.addEventListener('click', () => {
    setTheme(!document.documentElement.classList.contains('dark'));
  });
})();

const cur = document.querySelector('.cursor');
const ring = document.querySelector('.cursor-ring');
if (cur && ring) {
  let mx = innerWidth / 2;
  let my = innerHeight / 2;
  let rx = mx;
  let ry = my;
  addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
  });
  (function loopCursor() {
    rx += (mx - rx) * 0.16;
    ry += (my - ry) * 0.16;
    cur.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loopCursor);
  })();
  function bindCursorHover() {
    document
      .querySelectorAll('a,button,.category-card,.workshop-card,.up-next-card,.magnet,.path-card')
      .forEach((el) => {
        if (el.dataset.cursorBound) return;
        el.dataset.cursorBound = '1';
        el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
        el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
      });
  }
  bindCursorHover();
  window.__bindCursorHover = bindCursorHover;
}

(function initGL() {
  const canvas = document.getElementById('gl');
  if (!canvas || typeof THREE === 'undefined') return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 100);
  camera.position.set(0, 3.2, 9);
  camera.lookAt(0, 0, 0);

  const COLS = 90;
  const ROWS = 55;
  const GAP = 0.28;
  const count = COLS * ROWS;
  const pos = new Float32Array(count * 3);
  const rand = new Float32Array(count);
  let i = 0;
  for (let x = 0; x < COLS; x++) {
    for (let y = 0; y < ROWS; y++) {
      pos[i * 3] = (x - COLS / 2) * GAP;
      pos[i * 3 + 1] = 0;
      pos[i * 3 + 2] = (y - ROWS / 2) * GAP;
      rand[i] = Math.random();
      i++;
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aRand', new THREE.BufferAttribute(rand, 1));

  const uniforms = {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uScroll: { value: 0 },
    uInk: { value: new THREE.Color('#101014') },
    uAccent: { value: new THREE.Color('#2438FF') },
  };

  const mat = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    vertexShader: `
      uniform float uTime; uniform vec2 uMouse; uniform float uScroll;
      attribute float aRand; varying float vMix; varying float vFade;
      void main(){
        vec3 p = position;
        float d = distance(p.xz, uMouse * 12.0);
        float ripple = sin(d * 1.4 - uTime * 2.2) * 0.35 * smoothstep(6.0, 0.0, d);
        float wave = sin(p.x * 0.55 + uTime * 0.7) * cos(p.z * 0.5 + uTime * 0.5) * 0.45;
        p.y += wave + ripple + uScroll * aRand * 2.0;
        vMix = smoothstep(0.15, 0.85, 0.5 + 0.5*sin(aRand*6.28 + uTime*0.4)) * smoothstep(4.5,0.0,d);
        vFade = 1.0 - smoothstep(8.0, 14.0, length(p.xz));
        vec4 mv = modelViewMatrix * vec4(p,1.0);
        gl_PointSize = (3.8 + ripple*5.0 + vMix*3.0) * (300.0 / -mv.z) * 0.028;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      uniform vec3 uInk; uniform vec3 uAccent;
      varying float vMix; varying float vFade;
      void main(){
        vec2 uv = gl_PointCoord - 0.5;
        if(length(uv) > 0.5) discard;
        vec3 col = mix(uInk, uAccent, vMix);
        gl_FragColor = vec4(col, (0.30 + vMix*0.56) * vFade);
      }`,
  });
  scene.add(new THREE.Points(geo, mat));

  window.__setGLTheme = () => {
    const s = getComputedStyle(document.documentElement);
    uniforms.uInk.value.set(s.getPropertyValue('--ink').trim());
    uniforms.uAccent.value.set(s.getPropertyValue('--accent').trim());
  };
  window.__setGLTheme();

  const tMouse = new THREE.Vector2(0, 0);
  addEventListener('mousemove', (e) => {
    tMouse.set((e.clientX / innerWidth) * 2 - 1, -((e.clientY / innerHeight) * 2 - 1));
  });
  addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });

  const clock = new THREE.Clock();
  (function animate() {
    requestAnimationFrame(animate);
    if (!reduceMotion) uniforms.uTime.value = clock.getElapsedTime();
    uniforms.uMouse.value.lerp(tMouse, 0.05);
    const sc = scrollY / Math.max(1, document.body.scrollHeight - innerHeight);
    uniforms.uScroll.value += (sc * 0.6 - uniforms.uScroll.value) * 0.04;
    camera.position.y = 3.2 + sc * 2.5;
    camera.position.x = uniforms.uMouse.value.x * 0.6;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  })();
})();

function runPageIntro() {
  gsap.to('.classes-hero .rv, .path-banner.rv, .session-hero, .session-hero .rv, .track-hero, .track-hero .rv', {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.08,
    ease: 'power3.out',
    delay: 0.1,
    clearProps: 'transform',
  });
}

if (document.body.classList.contains('page-categories')) {
  renderCategories();
  afterRender();
  runPageIntro();
} else if (document.body.classList.contains('page-track')) {
  renderTrack();
  afterRender();
  runPageIntro();
} else if (document.body.classList.contains('page-workshop')) {
  renderWorkshop();
  afterRender();
  runPageIntro();
} else {
  runPageIntro();
}

function initScrollReveals() {
  document.querySelectorAll('main .rv').forEach((el) => {
    if (el.dataset.revealed) return;
    if (el.closest('.classes-hero') || el.closest('.session-hero') || el.closest('.track-hero')) return;
    if (el.closest('.path-banner')) return;
    el.dataset.revealed = '1';
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
    });
  });
}

function bindMagneticButtons() {
  document.querySelectorAll('.magnet').forEach((btn) => {
    if (btn.dataset.magnetBound) return;
    btn.dataset.magnetBound = '1';
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      gsap.to(btn, {
        x: (e.clientX - r.left - r.width / 2) * 0.3,
        y: (e.clientY - r.top - r.height / 2) * 0.4,
        duration: 0.4,
        ease: 'power3.out',
      });
    });
    btn.addEventListener('mouseleave', () =>
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,.4)' }),
    );
  });
}

function clipGLToSiteNav() {
  const canvas = document.getElementById('gl');
  const siteHeader = document.querySelector('body > header');
  if (!canvas || !siteHeader) return;

  const isCataloguePage =
    document.body.classList.contains('page-categories') ||
    document.body.classList.contains('page-track') ||
    document.body.classList.contains('page-workshop');
  if (!isCataloguePage) return;

  document.body.classList.add('gl-nav-only');

  const update = () => {
    const bottom = siteHeader.getBoundingClientRect().bottom;
    const clipBottom = Math.max(0, window.innerHeight - bottom);
    canvas.style.clipPath = `inset(0 0 ${clipBottom}px 0)`;
    document.documentElement.style.setProperty('--site-header-h', `${bottom}px`);
  };

  update();
  window.addEventListener('resize', update);
}

function afterRender() {
  initScrollReveals();
  bindMagneticButtons();
  window.__bindCursorHover?.();
  clipGLToSiteNav();
}

initScrollReveals();
bindMagneticButtons();
