'use client';

import { useEffect } from 'react';

export default function ClientScripts() {
  useEffect(() => {
    const nav = document.getElementById('nav');
    const secs = document.querySelectorAll('section[id]');
    const navAs = document.querySelectorAll('.nav-links li a');
    const scrollTopBtn = document.getElementById('scrollTop');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const parallaxBgs = document.querySelectorAll('.pbg');
    const heroGrid = document.getElementById('heroGrid');
    const heroGlow = document.getElementById('heroGlow');
    const parallaxEls = document.querySelectorAll('.parallax');
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;

        if (nav) nav.classList.toggle('stuck', y > 60);
        if (scrollTopBtn) scrollTopBtn.classList.toggle('show', y > 400);

        let cur = '';
        secs.forEach((s) => {
          if (y >= s.offsetTop - 130) cur = s.id;
        });
        navAs.forEach((a) => {
          const href = a.getAttribute('href')?.replace('#', '') ?? '';
          a.parentElement?.classList.toggle('active', href === cur);
        });

        if (!prefersReduced.matches) {
          parallaxBgs.forEach((el) => {
            const parent = el.parentElement;
            if (!parent) return;
            const rect = parent.getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > window.innerHeight) return;
            const speed = Number(el.dataset.speed ?? 0.3);
            const mid = rect.top + rect.height * 0.5 - window.innerHeight * 0.5;
            el.style.transform = `translate3d(0, ${mid * speed}px, 0)`;
          });

          if (heroGrid) heroGrid.style.transform = `translate3d(0, ${y * 0.35}px, 0)`;
          if (heroGlow) heroGlow.style.transform = `translate3d(0, ${y * 0.22}px, 0) scale(${1 + y * 0.00018})`;

          parallaxEls.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.bottom < -120 || rect.top > window.innerHeight + 120) return;
            const speed = Number(el.dataset.speed || 0.12);
            const mid = rect.top + rect.height * 0.5 - window.innerHeight * 0.5;
            el.style.transform = `translate3d(0, ${mid * speed}px, 0)`;
          });
        } else {
          parallaxBgs.forEach((el) => {
            el.style.transform = '';
          });
          parallaxEls.forEach((el) => {
            el.style.transform = '';
          });
          if (heroGrid) heroGrid.style.transform = '';
          if (heroGlow) heroGlow.style.transform = '';
        }

        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const themeBtn = document.getElementById('themeBtn');
    if (localStorage.getItem('bpMode') === 'light') document.body.classList.add('light');
    const onTheme = () => {
      document.body.classList.toggle('light');
      localStorage.setItem('bpMode', document.body.classList.contains('light') ? 'light' : 'dark');
    };
    themeBtn?.addEventListener('click', onTheme);

    const panelBg = document.getElementById('panelBg');
    const sidePanel = document.getElementById('sidePanel');
    const panelClose = document.getElementById('panelClose');
    const hamBtn = document.getElementById('hamBtn');

    const openPanel = () => {
      sidePanel?.classList.add('open');
      panelBg?.classList.add('open');
      hamBtn?.classList.add('open');
      document.body.style.overflow = 'hidden';
    };
    const closePanel = () => {
      sidePanel?.classList.remove('open');
      panelBg?.classList.remove('open');
      hamBtn?.classList.remove('open');
      document.body.style.overflow = '';
    };

    hamBtn?.addEventListener('click', openPanel);
    panelClose?.addEventListener('click', closePanel);
    panelBg?.addEventListener('click', closePanel);
    const onKey = (e) => {
      if (e.key === 'Escape') closePanel();
    };
    document.addEventListener('keydown', onKey);

    const linkEls = Array.from(document.querySelectorAll('a[href^="#"], a[href^="/#"]'));
    const onLinkClick = (e) => {
      const a = e.currentTarget;
      let href = a.getAttribute('href') || '';

      if (href.startsWith('/#')) {
        href = href.slice(1);
      }

      if (href && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          closePanel();
        }
      }
    };
    linkEls.forEach((a) => a.addEventListener('click', onLinkClick));

    const reveals = document.querySelectorAll('.reveal');
    const revObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('vis');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => revObs.observe(el));

    const counters = document.querySelectorAll('.stat-n[data-to]');
    const cntObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const target = Number(el.dataset.to ?? 0);
          const sfx = el.dataset.sfx ?? '';
          let cur = 0;
          const step = Math.ceil(target / 60);
          const t = window.setInterval(() => {
            cur = Math.min(cur + step, target);
            el.textContent = `${cur}${sfx}`;
            if (cur >= target) window.clearInterval(t);
          }, 22);
          cntObs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => cntObs.observe(c));

    const svcItems = Array.from(document.querySelectorAll('.svc-item'));
    const svcImgs = Array.from(document.querySelectorAll('.svc-img'));
    const svcHandlers = svcItems.map((item, i) => {
      const handler = () => {
        svcItems.forEach((s) => s.classList.remove('on'));
        svcImgs.forEach((img) => img.classList.remove('on'));
        item.classList.add('on');
        svcImgs[i]?.classList.add('on');
      };
      item.addEventListener('mouseenter', handler);
      return handler;
    });

    const track = document.getElementById('tTrack');
    const cards = track ? Array.from(track.querySelectorAll('.testi-card')) : [];
    let tPos = 0;
    const visCount = () => (window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    const maxPos = () => Math.max(0, cards.length - visCount());
    const slideTo = () => {
      if (!track || cards.length === 0) return;
      const gap = 24;
      const cw = cards[0].getBoundingClientRect().width + gap;
      track.style.transform = `translateX(-${tPos * cw}px)`;
    };

    const tNext = document.getElementById('tNext');
    const tPrev = document.getElementById('tPrev');
    const onNext = () => {
      tPos = tPos >= maxPos() ? 0 : tPos + 1;
      slideTo();
    };
    const onPrev = () => {
      tPos = tPos <= 0 ? maxPos() : tPos - 1;
      slideTo();
    };
    tNext?.addEventListener('click', onNext);
    tPrev?.addEventListener('click', onPrev);

    const onResize = () => { slideTo(); onScroll(); };
    window.addEventListener('resize', onResize, { passive: true });

    const auto = window.setInterval(() => {
      tPos = tPos >= maxPos() ? 0 : tPos + 1;
      slideTo();
    }, 4500);

    const onScrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    scrollTopBtn?.addEventListener('click', onScrollTop);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      themeBtn?.removeEventListener('click', onTheme);
      hamBtn?.removeEventListener('click', openPanel);
      panelClose?.removeEventListener('click', closePanel);
      panelBg?.removeEventListener('click', closePanel);
      document.removeEventListener('keydown', onKey);
      linkEls.forEach((a) => a.removeEventListener('click', onLinkClick));
      revObs.disconnect();
      cntObs.disconnect();
      svcItems.forEach((item, i) => item.removeEventListener('mouseenter', svcHandlers[i]));
      tNext?.removeEventListener('click', onNext);
      tPrev?.removeEventListener('click', onPrev);
      scrollTopBtn?.removeEventListener('click', onScrollTop);
      window.clearInterval(auto);
    };
  }, []);

  return null;
}




