(function () {
  "use strict";
  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Thème clair / sombre ---------- */
  document.getElementById("themeToggle").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* ---------- Navigation ---------- */
  var nav = document.getElementById("nav");
  var burger = document.getElementById("burger");
  var links = document.getElementById("navLinks");

  function onScroll() { nav.classList.toggle("is-scrolled", window.scrollY > 20); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  burger.addEventListener("click", function () {
    var open = links.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  // Lien actif selon la section visible
  var sections = document.querySelectorAll("main section[id]");
  var navMap = {};
  links.querySelectorAll("a[href^='#']").forEach(function (a) { navMap[a.getAttribute("href").slice(1)] = a; });
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting && navMap[e.target.id]) {
        Object.keys(navMap).forEach(function (k) { navMap[k].classList.remove("is-active"); });
        navMap[e.target.id].classList.add("is-active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(function (s) { spy.observe(s); });

  /* ---------- Effet machine à écrire ---------- */
  var typed = document.getElementById("typed");
  if (typed) {
  var words = ["Data Engineering", "Intelligence Artificielle", "Machine Learning", "Data Analytics", "Business Intelligence"];
  if (!reduceMotion) {
    var w = 0, c = words[0].length, deleting = true;
    var tick = function () {
      var word = words[w];
      c += deleting ? -1 : 1;
      typed.textContent = word.slice(0, c);
      var delay = deleting ? 45 : 85;
      if (!deleting && c === word.length) { deleting = true; delay = 2000; }
      else if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; delay = 350; }
      setTimeout(tick, delay);
    };
    setTimeout(tick, 2200);
  }

  }

  /* ---------- Apparition au défilement + compteurs ---------- */
  var revealObs = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-visible");
      var num = e.target.querySelector("[data-count]");
      if (num) countUp(num);
      obs.unobserve(e.target);
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal, .langs").forEach(function (el, i) {
    el.style.transitionDelay = (i % 3) * 80 + "ms";
    revealObs.observe(el);
  });

  function countUp(el) {
    var target = +el.dataset.count, suffix = el.dataset.suffix || "";
    if (reduceMotion) { el.textContent = target + suffix; return; }
    var start = performance.now(), dur = 1400;
    (function step(now) {
      var p = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + (p === 1 ? suffix : "");
      if (p < 1) requestAnimationFrame(step);
    })(start);
  }

  /* ---------- Filtre des projets ---------- */
  var filters = document.querySelectorAll(".filter");
  var projects = document.querySelectorAll(".project");
  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filters.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var f = btn.dataset.filter;
      projects.forEach(function (p) {
        var show = f === "all" || p.dataset.cat.split(" ").indexOf(f) !== -1;
        p.classList.toggle("is-hidden", !show);
        if (show) { p.classList.add("is-visible"); }
      });
    });
  });

  // Halo qui suit la souris sur les cartes projet
  projects.forEach(function (p) {
    p.addEventListener("pointermove", function (e) {
      var r = p.getBoundingClientRect();
      p.style.setProperty("--mx", e.clientX - r.left + "px");
      p.style.setProperty("--my", e.clientY - r.top + "px");
    });
  });

  /* ---------- Copier l'e-mail ---------- */
  var toast = document.getElementById("toast");
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(showToast.t);
    showToast.t = setTimeout(function () { toast.classList.remove("is-visible"); }, 2200);
  }
  document.getElementById("copyEmail").addEventListener("click", function () {
    var email = this.dataset.email;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(function () { showToast("E-mail copié ✓"); },
        function () { showToast(email); });
    } else { showToast(email); }
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Réseau de données animé (hero) ---------- */
  var canvas = document.getElementById("network");
  if (!canvas || reduceMotion) return;
  var ctx = canvas.getContext("2d");
  var nodes = [], W, H, dpr, mouse = { x: -9999, y: -9999 }, running = true;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.offsetWidth; H = canvas.offsetHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var count = Math.round(Math.min(90, (W * H) / 16000));
    nodes = [];
    for (var i = 0; i < count; i++) {
      nodes.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.8 + .8 });
    }
  }

  function draw() {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);
    var rgb = getComputedStyle(root).getPropertyValue("--node").trim();
    for (var i = 0; i < nodes.length; i++) {
      var a = nodes[i];
      a.x += a.vx; a.y += a.vy;
      if (a.x < 0 || a.x > W) a.vx *= -1;
      if (a.y < 0 || a.y > H) a.vy *= -1;
      for (var j = i + 1; j < nodes.length; j++) {
        var b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d = dx * dx + dy * dy;
        if (d < 15000) {
          ctx.strokeStyle = "rgba(" + rgb + "," + (0.12 * (1 - d / 15000)) + ")";
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      var mdx = a.x - mouse.x, mdy = a.y - mouse.y, md = mdx * mdx + mdy * mdy;
      if (md < 26000) {
        ctx.strokeStyle = "rgba(255,122,138," + (0.35 * (1 - md / 26000)) + ")";
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
      ctx.fillStyle = "rgba(" + rgb + ",0.35)";
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  var hero = document.querySelector(".hero");
  hero.addEventListener("pointermove", function (e) {
    var r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  hero.addEventListener("pointerleave", function () { mouse.x = mouse.y = -9999; });

  // Pause de l'animation quand le hero n'est plus visible
  new IntersectionObserver(function (e) {
    var vis = e[0].isIntersecting;
    if (vis && !running) { running = true; draw(); }
    running = vis;
  }).observe(hero);

  window.addEventListener("resize", resize);
  resize();
  draw();
})();
