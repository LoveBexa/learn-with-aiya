gsap.registerPlugin(ScrollTrigger);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------- clock (London — GMT / BST) ---------------- */
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

function refreshScrollEffects() {
  if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
}

/* ---------------- theme ---------------- */
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
    refreshScrollEffects();
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

/* ---------------- cursor ---------------- */
const cur = document.querySelector('.cursor');
const ring = document.querySelector('.cursor-ring');
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
document.querySelectorAll('a,button,.wcard').forEach((el) => {
  el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
});

/* ---------------- WebGL dot field ---------------- */
(function initGL() {
  const canvas = document.getElementById('gl');
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

/* ---------------- loader ---------------- */
const pctEl = document.querySelector('#loader .pct');
const scrollLockKeys = new Set([' ', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End']);

function preventScrollInput(e) {
  e.preventDefault();
}

function preventScrollKeys(e) {
  if (scrollLockKeys.has(e.key)) e.preventDefault();
}

function lockPageScroll() {
  document.documentElement.classList.add('is-loading');
  window.addEventListener('wheel', preventScrollInput, { passive: false });
  window.addEventListener('touchmove', preventScrollInput, { passive: false });
  window.addEventListener('keydown', preventScrollKeys);
}

function unlockPageScroll() {
  document.documentElement.classList.remove('is-loading');
  window.removeEventListener('wheel', preventScrollInput);
  window.removeEventListener('touchmove', preventScrollInput);
  window.removeEventListener('keydown', preventScrollKeys);
  window.scrollTo(0, 0);
  if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
}

lockPageScroll();

const loadTL = gsap.timeline();
loadTL
  .to('#loader .big span', { y: 0, duration: 0.9, stagger: 0.07, ease: 'power4.out' })
  .to(
    { v: 0 },
    {
      v: 100,
      duration: 1.4,
      ease: 'power2.inOut',
      onUpdate() {
        pctEl.textContent = String(Math.round(this.targets()[0].v)).padStart(3, '0');
      },
    },
    '<',
  )
  .to('#loader .big span', { y: '-115%', duration: 0.7, stagger: 0.05, ease: 'power4.in' }, '+=0.15')
  .to('#loader', { yPercent: -100, duration: 0.9, ease: 'power4.inOut' }, '-=0.25')
  .set('#loader', { display: 'none' })
  .call(unlockPageScroll)
  .add(heroIn, '-=0.55');

function heroIn() {
  gsap.to('#hero h1 .l span', { y: 0, duration: 1.1, stagger: 0.08, ease: 'power4.out' });
  gsap.to('#hero .rv', { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.35 });
  if (!reduceMotion) {
    gsap.fromTo(
      '#hero .bang span',
      { rotate: 8 },
      {
        rotate: -6,
        duration: 1.6,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        transformOrigin: '50% 90%',
        delay: 1.2,
      },
    );
  }
}

/* ---------------- generic reveals ---------------- */
document.querySelectorAll('main .rv').forEach((el) => {
  if (el.closest('#hero')) return;
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 85%' },
  });
});

/* ---------------- hero parallax out ---------------- */
gsap.to('#hero .hero-title', {
  yPercent: -18,
  opacity: 0.25,
  ease: 'none',
  scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
});

/* ---------------- manifesto word reveal ---------------- */
(function () {
  const p = document.getElementById('mtext');
  const walk = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((tok) => {
          if (/^\s+$/.test(tok) || tok === '') {
            frag.appendChild(document.createTextNode(tok));
          } else {
            const s = document.createElement('span');
            s.className =
              'w' +
              (node !== p && node.classList.contains('hl') ? ' hl' : '') +
              (node !== p && node.classList.contains('manifesto-emoji') ? ' emoji' : '');
            s.textContent = tok;
            frag.appendChild(s);
          }
        });
        node.replaceChild(frag, n);
      } else if (n.nodeType === 1) {
        walk(n);
      }
    });
  };
  walk(p);
  gsap.to('#mtext .w', {
    opacity: 1,
    stagger: 0.06,
    ease: 'none',
    scrollTrigger: { trigger: '#manifesto', start: 'top 65%', end: 'center 45%', scrub: true },
  });
})();

/* ---------------- horizontal workshops + manual nav ---------------- */
(function initWorkshops() {
  const track = document.getElementById('htrack');
  const prevBtn = document.getElementById('workPrev');
  const nextBtn = document.getElementById('workNext');
  const countEl = document.getElementById('workCount');
  if (!track || !prevBtn || !nextBtn) return;

  const cards = () => [...track.querySelectorAll('.wcard')];
  let index = 0;
  let scrollTween = null;

  function trackPad() {
    return parseFloat(getComputedStyle(track).paddingLeft) || 0;
  }

  function maxTrackX() {
    return Math.min(0, -(track.scrollWidth - innerWidth + 40));
  }

  function targetXForIndex(i) {
    const card = cards()[i];
    if (!card) return 0;
    const maxX = maxTrackX();
    return Math.max(maxX, Math.min(0, -(card.offsetLeft - trackPad())));
  }

  function indexFromX(x) {
    const maxX = maxTrackX();
    let best = 0;
    let bestDist = Infinity;
    cards().forEach((card, i) => {
      const dist = Math.abs(x - targetXForIndex(i));
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    return best;
  }

  function updateUI() {
    const total = cards().length;
    index = Math.max(0, Math.min(total - 1, index));
    if (countEl) {
      countEl.textContent = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
    }
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === total - 1;
  }

  function scrollToIndex(i, smooth = true) {
    const total = cards().length;
    index = Math.max(0, Math.min(total - 1, i));
    updateUI();

    const behavior = smooth && !reduceMotion ? 'smooth' : 'auto';

    if (window.matchMedia('(min-width: 1025px)').matches && scrollTween?.scrollTrigger) {
      const st = scrollTween.scrollTrigger;
      const maxX = maxTrackX();
      const targetX = targetXForIndex(index);
      const progress = maxX === 0 ? 0 : targetX / maxX;
      const y = st.start + progress * (st.end - st.start);
      window.scrollTo({ top: y, behavior });
      return;
    }

    const card = cards()[index];
    if (card) card.scrollIntoView({ behavior, block: 'center' });
  }

  prevBtn.addEventListener('click', () => scrollToIndex(index - 1));
  nextBtn.addEventListener('click', () => scrollToIndex(index + 1));

  ScrollTrigger.matchMedia({
    '(min-width: 1025px)': () => {
      scrollTween = gsap.to(track, {
        x: maxTrackX,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hpin',
          start: 'top 12%',
          pin: true,
          scrub: 1,
          end: () => '+=' + (track.scrollWidth - innerWidth + 200),
          invalidateOnRefresh: true,
          onUpdate() {
            const currentX = gsap.getProperty(track, 'x');
            const next = indexFromX(currentX);
            if (next !== index) {
              index = next;
              updateUI();
            }
          },
        },
      });

      return () => {
        scrollTween.scrollTrigger?.kill();
        scrollTween.kill();
        scrollTween = null;
        gsap.set(track, { clearProps: 'transform' });
      };
    },
  });

  if (typeof IntersectionObserver !== 'undefined') {
    const io = new IntersectionObserver(
      (entries) => {
        if (window.matchMedia('(min-width: 1025px)').matches) return;
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.45) return;
          const i = cards().indexOf(entry.target);
          if (i >= 0 && i !== index) {
            index = i;
            updateUI();
          }
        });
      },
      { threshold: [0.45, 0.6], rootMargin: '-15% 0px' },
    );
    cards().forEach((card) => io.observe(card));
  }

  updateUI();
})();

/* ---------------- marquee ---------------- */
(function () {
  const mq = document.getElementById('mq');
  const half = mq.scrollWidth / 2;
  if (!reduceMotion) {
    gsap.to(mq, { x: -half, duration: 22, ease: 'none', repeat: -1 });
  }
  gsap.to(mq, {
    xPercent: -4,
    ease: 'none',
    scrollTrigger: { trigger: '#marquee', start: 'top bottom', end: 'bottom top', scrub: true },
  });
})();

/* ---------------- magnetic button ---------------- */
document.querySelectorAll('.magnet').forEach((btn) => {
  btn.addEventListener('mousemove', (e) => {
    const r = btn.getBoundingClientRect();
    gsap.to(btn, {
      x: (e.clientX - r.left - r.width / 2) * 0.3,
      y: (e.clientY - r.top - r.height / 2) * 0.4,
      duration: 0.4,
      ease: 'power3.out',
    });
  });
  btn.addEventListener('mouseleave', () => gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,.4)' }));
});

/* ---------------- smooth anchor nav ---------------- */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  });
});
