gsap.registerPlugin(ScrollTrigger);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------- clock ---------------- */
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
  document.querySelectorAll('a,button,.blog-card,.magnet').forEach((el) => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
  });
}

/* ---------------- WebGL dot field ---------------- */
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

/* ---------------- page intro ---------------- */
gsap.to('.blog-hero .rv, .article-hero .rv', {
  opacity: 1,
  y: 0,
  duration: 0.9,
  stagger: 0.12,
  ease: 'power3.out',
  delay: 0.15,
});

/* ---------------- scroll reveals ---------------- */
document.querySelectorAll('main .rv').forEach((el) => {
  if (el.closest('.blog-hero') || el.closest('.article-hero')) return;
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 85%' },
  });
});

/* ---------------- marquee ---------------- */
(function () {
  const mq = document.getElementById('mq');
  if (!mq) return;
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

/* ---------------- magnetic buttons ---------------- */
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
