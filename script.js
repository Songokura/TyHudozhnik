/* ============================================================
   ТЫ ХУДОЖНИК — script.js
   i18n (RU/KK/EN) · меню · scroll-анимации · форма → WhatsApp ·
   конверсии Google Ads (AW-18428216713) на tel / WhatsApp / форме
   ============================================================ */
(function () {
  'use strict';

  /* ============================================================
     1. i18n — RU снимается с разметки, KK/EN — словари
     ============================================================ */
  var i18nEls = document.querySelectorAll('[data-i18n]');
  var i18nPhEls = document.querySelectorAll('[data-i18n-ph]');
  var RU = {}, RUPH = {};
  i18nEls.forEach(function (el) {
    var k = el.getAttribute('data-i18n');
    if (!(k in RU)) RU[k] = el.innerHTML;
  });
  i18nPhEls.forEach(function (el) {
    var k = el.getAttribute('data-i18n-ph');
    if (!(k in RUPH)) RUPH[k] = el.getAttribute('placeholder') || '';
  });

  var META = {
    ru: { title: 'Ты художник — школа академического рисунка и живописи в Алматы | 15 лет' },
    en: { title: 'Ty Hudozhnik — Academic Drawing & Painting School in Almaty | 15 Years' }
  };

  /* Казахский словарь - отдельным файлом assets/lang/kk.js, грузится только по выбору KZ
     (кнопка, ?lang=kk, сохранённый выбор): проверка Google Ads видит русский сайт. */
  var KK = null;
  var SCRIPT_V = ((document.currentScript && document.currentScript.src || '').match(/[?&]v=([^&]+)/) || [])[1] || '';


  var EN = {
    'logo.sub': 'art school · Almaty',
    'nav.dir': 'Programs', 'nav.met': 'Method', 'nav.rev': 'Reviews', 'nav.price': 'Prices',
    'nav.b2b': 'Wall Art', 'nav.cts': 'Contacts', 'nav.cta': 'Trial lesson',
    'nav.ped': 'Teachers', 'nav.team': 'Team building',

    'hero.b1': '15 years in Almaty', 'hero.b2': 'UNESCO club', 'hero.b3': 'on 2GIS',
    'hero.t1': 'Talent is in everyone.',
    'hero.t2': 'You are an artist.',
    'hf.kick': 'Two formats of study',
    'hf.h1': 'Art for the joy of it',
    'hf.p1': 'For children who want to draw, build taste, visual awareness and imagination, and simply enjoy art.',
    'hf.h2': 'Preparation for admission',
    'hf.p2': 'For children and teenagers planning to enter an art school, college or creative university. Here studies follow the admission program and requirements, with progress tracking.',
    'hero.meta': 'Flexible schedule • individual approach • lessons never expire',
    'hero.cta1': 'Book a trial lesson', 'hero.cta2': 'Programs & prices',
    'hero.s1': 'years of school', 'hero.s2': 'study programs', 'hero.s3': '2GIS rating', 'hero.s4': 'lessons a month',
    'hero.cap1': 'Oil painting', 'hero.cap2': 'Academic drawing',
    'hero.cap3': 'Oil, palette knife', 'hero.cap4': 'Fashion illustration',

    'mq': 'Academic drawing ✦ Painting ✦ Batik ✦ Felt ✦ Technical drafting ✦ Pastel ✦ Portrait ✦ Sketching ✦ Fashion illustration ✦ Anime ✦ ',

    'dir.kick': 'Programs', 'dir.t1': 'The art that is', 'dir.t2': 'right for you',
    'dir.lead': 'Academic drawing, oil and acrylic painting, sculpting, batik, felt and our own signature workshops.',
    'dir.lead2': 'For children and adults — from the very first steps to confident mastery. Programs take the student\'s age, level and goals into account.',
    'dir.meta': 'Beginners and continuing students • preparation for creative entrance exams',
    'd.cta': 'Sign up →',
    'd1.tag': 'Core program', 'd2.tag': 'Core program',
    'd4.tag': 'Workshop', 'd5.tag': 'Workshop',
    'd1.h': 'Painting: acrylic & oil',
    'd1.p': 'A finished painting in one workshop, or a course of 5–10 works. Landscapes, still lifes, portraits — you leave with a canvas of your own.',
    'd1.pr': 'workshops from 6,000 ₸',
    'd2.h': 'Academic drawing',
    'd2.p': 'Our foundation and main program: training the hand and the eye — construction, light and shade, proportion. Then pastel, portrait, sketching.',
    'd2.pr': '35,000 ₸ / month',
    'd3.tag': 'For applicants',
    'd3.h': 'Technical drafting & exam preparation',
    'd3.p': 'Drawing and drafting tailored to university requirements — even from zero. A focused, no-fluff program: our students get into art universities, colleges and schools.',
    'd3.pr': '35,000 ₸ / month', 'd3.cta': 'An admission story →',
    'd4.h': 'Batik — silk painting',
    'd4.p': 'A rare craft: your own scarf or panel on natural silk. A3 format, two hours, all materials included. Sessions once a week.',
    'd4.pr': '25,000 ₸ · A3, 2 hours',
    'd5.h': 'Felt — wet felting',
    'd5.p': '“Painting with wool”: a warm felt panel made by wet felting. A4 format, two hours, materials included.',
    'd5.pr': '25,000 ₸ · A4 panel, 2 hours',
    'd6.h': 'Fashion illustration & anime',
    'd6.p': 'Style, characters, movement. For teens and adults who draw their own worlds — from clothing sketches to manga.',
    'd6.pr': '35,000 ₸ / month',
    'd7.h': 'Classes for kids',
    'd7.p': 'Each child leads their own project within the group — with the teacher’s personal attention. The first lesson is a trial.',
    'd7.pr': '35,000 ₸ / month',

    'met.kick': 'Method', 'met.t1': 'Rules invented', 'met.t2': 'by artists',
    'met.lead': 'For 15 years we refined not only technique but the format itself — so that art fits into your life, not the other way around.',
    'met.i1h': 'Lessons never expire', 'met.i1p': 'Missed a class? It is frozen and stays valid for two more months.',
    'met.i2h': 'No time limit', 'met.i2p': 'Once you come in, stay all day if you like — until the painting says “done”.',
    'met.i3h': 'Flexible schedule', 'met.i3p': 'Teachers are always in the studio: come when it suits you. 8 lessons a month.',
    'met.i4h': 'A personal project for everyone', 'met.i4p': 'Classes are in groups, but everyone works on their own piece at their own pace — with personal feedback.',
    'met.i5h': 'In the studio only', 'met.i5p': 'We teach in person at our studio on Luganskogo: real materials, feedback right at the easel. The first lesson is a trial.',
    'met.cta': 'Book a trial lesson',

    'usp.cap': 'Exhibition of student works',
    'usp.kick': 'Results', 'usp.t1': 'From the studio —', 'usp.t2': 'to universities and exhibitions',
    'usp.p1': 'Our students get into art universities, colleges and specialized schools — we know portfolio and exam requirements by heart.',
    'usp.p2': 'Our students\' works are selected for exhibitions and competitions — from “Cosmonautics” in Almaty to international projects in San Diego and Australia.',
    'usp.l1': 'Portfolio preparation for admission',
    'usp.l2': 'Technical drafting and academic drawing from zero',
    'usp.l3': 'Exhibitions and competitions for our students',
    'usp.cta': 'Exam preparation',

    'rev.kick': 'Reviews', 'rev.t1': 'Families trust us', 'rev.t2': 'with what matters most',
    'rev.gis': '57 ratings · 33 reviews on 2GIS', 'rev.gisBtn': 'Read reviews on 2GIS',
    'rev.q1': 'I recommend the Ty Hudozhnik studio for fast-track preparation for creative entrance exams. In a short time my teenager improved his drawing and mastered the basics of technical drafting to admission requirements — even though we started drafting practically from zero. A clear, to-the-point program, attention to detail, and the result — admission. Thank you to the whole Ty Hudozhnik team!!!',
    'rev.a1': 'Svetlana D.', 'rev.r1': 'exam preparation · admitted',
    'rev.q2': 'Dina, good afternoon! Across two exams Sofia scored 85 points out of 100 (35+50) and was admitted to Abai University to study Fine Arts. Thank you so much to you, Toleubala, Dulat and every single teacher of our school for the work, patience, support, love, faith and care you put into Sofia’s studies over all the years she has spent at Ty Hudozhnik! She is “beside herself with joy”! I am no professional and cannot judge the quality of her drawing, but the professionals gave Sofia the score she deserved. And it is all thanks to you!',
    'rev.a2': 'Sofia’s mother', 'rev.r2': '85 out of 100 at the exams · Abai University, Fine Arts',
    'rev.s1': 'Admission to the boarding school of the Zhurgenov Academy of Arts — first on the list',
    'rev.s2': '5 out of 5 in technical drafting — and a place on a design program',
    'rev.s3': '“I got in on a state grant. Thank you so much for the preparation!”',
    'rev.s4': 'Admission to the school at the Zhurgenov Academy, 7th grade — our students go on to colleges and universities across Kazakhstan',
    'rev.s5': 'She came here 13 years ago — now her own children do: “Thanks to you my son chose his profession”',
    'rev.s6': 'The mother of a child with autism: “cosy, a convenient schedule and, most of all, patience and understanding”',
    'rev.s7': '“Creativity in all its forms. I officially declare: this studio is the find of the year”',
    'rev.s8': '“Veronika had the best drawing in class, the other kids copied hers”',

    'cl.kick': 'Partners and clients', 'cl.t1': 'Companies that', 'cl.t2': 'trust us',
    'cl.lead': 'Corporate workshops, team-building sessions and joint projects. Over 15 years the school has worked with international companies, government bodies, foundations and media.',

    'ped.kick': 'Team', 'ped.t1': 'Teachers who', 'ped.t2': 'paint themselves',
    'ped.1': 'Founder of the Ty Hudozhnik school. Co-founder of IAIA, international director for cultural and educational projects, member of the Eurasian Union of Designers.',
    'ped.2': 'Art teacher, member of IAIA and KazNPU, expert, jewelry designer.',
    'ped.3': 'Graduate of the Zhurgenov Kazakh National Academy of Arts, faculty of Painting, Sculpture and Design.',

    'reg.kick': 'Recognition', 'reg.t1': 'A school', 'reg.t2': 'known worldwide',
    'reg.1h': 'UNESCO club', 'reg.1p': 'The school is part of the UNESCO clubs movement.',
    'reg.2h': 'IAIA — international alliance',
    'reg.2p': 'International Art Innovation Alliance — an association co-founded with American colleagues. Dina Mertenova is a co-founder.',
    'reg.3h': 'Eurasian Union of Designers', 'reg.3p': 'Membership in the professional union of designers.',
    'reg.4h': 'State program “Damu”', 'reg.4p': 'We work under the state support program.',

    'pr.kick': 'Prices', 'pr.t1': 'Clear', 'pr.t2': 'as watercolor',
    'pr.lead': 'All materials are included. We confirm the exact price when you book.',
    'pr.c1h': 'Workshops',
    'pr.c1l1': 'Acrylic, canvas 30×40', 'pr.c1v1': 'from 6,000 ₸',
    'pr.c1l2': 'Acrylic, canvas 40×50', 'pr.c1v2': 'from 8,000 ₸',
    'pr.c1l3': 'Acrylic, canvas 50×60', 'pr.c1v3': 'from 12,000 ₸',
    'pr.c1l4': 'Oil, canvas 45×60', 'pr.c1v4': '25,000 ₸',
    'pr.c1l5': 'Silk batik, A3 · 2 hours', 'pr.c1v5': '25,000 ₸',
    'pr.c1l6': 'Felt, wet felting, A4 panel · 2 hours', 'pr.c1v6': '25,000 ₸',
    'pr.c1note': 'Batik and felt — price per participant, all materials included.',
    'pr.flag': 'popular',
    'pr.c2h': 'Courses, 8 lessons a month',
    'pr.c2l1': 'Painting: acrylic & oil', 'pr.c2v1': '35,000 ₸/mo',
    'pr.c2l2': 'Academic drawing', 'pr.c2v2': '35,000 ₸/mo',
    'pr.c2l3': 'Technical drafting', 'pr.c2v3': '35,000 ₸/mo',
    'pr.c2l4': 'Pastel · portrait · sketching', 'pr.c2v4': '35,000 ₸/mo',
    'pr.c2l5': 'Fashion illustration · anime', 'pr.c2v5': '35,000 ₸/mo',
    'pr.c2note': 'A yearly pass works out cheaper — 25,000 ₸ per month.',
    'pr.c3h': 'Big courses',
    'pr.c3l1': 'Acrylic, 5-painting course', 'pr.c3v1': 'from 35,000 ₸',
    'pr.c3l2': 'Oil, 10-painting course', 'pr.c3v2': '200,000 ₸',
    'pr.c3l3': 'Batik, 5-scarf course', 'pr.c3v3': '100,000 ₸',
    'pr.c3note': 'Perfect if you want to build your own series of works.',
    'pr.cta': 'Confirm the price on WhatsApp',

    'b2b.kick': 'For business & interiors', 'b2b.t1': 'Wall painting', 'b2b.t2': '& UV printing',
    'b2b.lead': 'Our artists paint interiors by hand and print images directly onto any hard surface: concrete, tile, glass, wood. For construction companies, designers, architects and developers.',
    'b2b.ch1': '5-year warranty outdoors', 'b2b.ch2': '10+ years indoors',
    'b2b.ch3': 'resistant to moisture, UV and abrasion', 'b2b.ch4': 'several times faster than hand painting',
    'b2b.ch5': 'patterns, logos, 3D effects', 'b2b.ch6': 'Astana · Almaty · Shymkent',
    'b2b.g1': 'Hand-painted interiors', 'b2b.g2': 'Public spaces', 'b2b.g3': 'Cafes & restaurants',
    'b2b.g4': 'Graffiti & calligraphy', 'b2b.g5': 'Art panoramas', 'b2b.g6': 'Branded scenes',
    'b2b.g7': 'Schools & offices', 'b2b.g8': 'UV printing on glass', 'b2b.g9': 'Choosing paints for a project',
    'b2b.cta': 'Discuss a project',

    'tm.kick': 'For companies', 'tm.t1': 'Team building', 'tm.t2': 'with paint',
    'tm.p1': 'Corporate art workshops after which your team takes home not certificates, but their own paintings. Painting, batik, felt — we tailor the format to your team and venue.',
    'tm.p2': 'Teams that have already trusted us:',
    'tm.cta': 'Request a program', 'tm.cap': 'Wool painting workshop',

    'sc.kick': 'How to find us', 'sc.t1': 'The studio', 'sc.t2': 'on Luganskogo',
    'sc.c1h': 'Opening hours',
    'sc.c1l1': 'Wednesday — Sunday', 'sc.c1l2': 'Lunch break', 'sc.c1l3': 'Monday, Tuesday', 'sc.c1v3': 'closed',
    'sc.c1note': 'Classes are by appointment. Batik and felting run once a week — book in advance.',
    'sc.c2h': 'Address',
    'sc.c2p': 'Almaty, Luganskogo st. 5, office 69 (1st floor), Medeu district',
    'sc.c2gis': '— studio rating on 2GIS', 'sc.c2btn': 'Open in 2GIS',
    'sc.c3h': 'Step one — a trial lesson',
    'sc.c3p': 'Message us on WhatsApp — we will match a program, group and time to you.',
    'sc.c3btn': 'Sign up',

    'ct.kick': 'Contacts', 'ct.t1': 'Shall we start', 'ct.t2': 'with a blank canvas?',
    'ct.lead': 'Leave a request — WhatsApp will open with a ready message, just press send.',
    'ct.gis': 'Find us on 2GIS — 4.9 ★',
    'fm.name': 'Your name', 'fm.dir': 'What are you interested in',
    'fm.o0': 'Trial lesson', 'fm.o1': 'Painting (acrylic / oil)', 'fm.o2': 'Academic drawing',
    'fm.o3': 'Technical drafting / exam prep', 'fm.o4': 'Batik', 'fm.o5': 'Felting',
    'fm.o6': 'Fashion illustration / anime', 'fm.o7': 'Classes for my child',
    'fm.o8': 'Wall painting / UV printing', 'fm.o9': 'Corporate team building',
    'fm.msg': 'Comment', 'fm.msgPh': 'E.g.: my daughter is 10, weekends work best',
    'fm.send': 'Send via WhatsApp',
    'fm.done': 'Thank you! Opening WhatsApp — just press “Send”.',

    'ft.sub': 'School of painting and drawing · Merten Art Academy · Almaty',
    'ft.rights': 'All rights reserved.'
  };

  var DICTS = { ru: RU, kk: KK, en: EN };
  var LANGS = ['ru', 'kk', 'en'];
  var currentLang = 'ru';

  var kkLoading = null;
  function loadKK(cb) {
    if (KK) return cb();
    if (!kkLoading) {
      kkLoading = [];
      var sc = document.createElement('script');
      sc.src = 'assets/lang/kk.js' + (SCRIPT_V ? '?v=' + SCRIPT_V : '');
      sc.onload = function () {
        KK = window.SITE_KK || {};
        DICTS.kk = KK;
        META.kk = { title: KK._title || META.ru.title };
        kkLoading.forEach(function (f) { f(); });
      };
      sc.onerror = function () { kkLoading = null; };
      document.head.appendChild(sc);
    }
    kkLoading.push(cb);
  }

  function applyLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = 'ru';
    if (lang === 'kk' && !KK) return loadKK(function () { applyLang('kk'); });
    currentLang = lang;
    var dict = DICTS[lang];
    i18nEls.forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v != null) el.innerHTML = v;
    });
    i18nPhEls.forEach(function (el) {
      var k = el.getAttribute('data-i18n-ph');
      var v = lang === 'ru' ? RUPH[k] : dict[k];
      if (v != null) el.setAttribute('placeholder', v);
    });
    document.documentElement.lang = lang === 'kk' ? 'kk' : lang;
    document.title = META[lang].title;
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    try { localStorage.setItem('th-lang', lang); } catch (e) { /* приватный режим */ }
  }

  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  var urlLang = (location.search.match(/[?&]lang=(ru|kk|en)/) || [])[1];
  var savedLang = null;
  try { savedLang = localStorage.getItem('th-lang'); } catch (e) { /* ignore */ }
  var startLang = urlLang || savedLang;
  if (startLang && startLang !== 'ru') applyLang(startLang);

  /* ============================================================
     2. Шапка, бургер, мобильное меню
     ============================================================ */
  var header = document.getElementById('siteHeader');
  var onScrollHeader = function () { header.classList.toggle('scrolled', window.scrollY > 24); };
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  var burger = document.getElementById('burger');
  var mobileMenu = document.getElementById('mobileMenu');
  function toggleMenu(open) {
    var willOpen = typeof open === 'boolean' ? open : !mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open', willOpen);
    burger.classList.toggle('open', willOpen);
    burger.setAttribute('aria-expanded', String(willOpen));
    mobileMenu.setAttribute('aria-hidden', String(!willOpen));
    document.body.classList.toggle('menu-open', willOpen);
  }
  burger.addEventListener('click', function () { toggleMenu(); });
  mobileMenu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { toggleMenu(false); });
  });

  /* ============================================================
     3. Прогресс-«краска»
     ============================================================ */
  var progress = document.getElementById('paintProgress');
  var onScrollProgress = function () {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    progress.style.transform = 'scaleX(' + (max > 0 ? h.scrollTop / max : 0) + ')';
  };
  window.addEventListener('scroll', onScrollProgress, { passive: true });
  onScrollProgress();

  /* ============================================================
     4. Появление секций + счётчики
     ============================================================ */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var revealTargets = document.querySelectorAll(
    '.kicker, .h2, .lead, .bcard, .met-grid li, .reg-card, .price-card, .ped-card, ' +
    '.sched-card, .rev-top, .rev-rail, .mural-grid figure, .tick-list li, .b2b-chips, .clients-row, .lead-form'
  );
  revealTargets.forEach(function (el, i) {
    el.classList.add('rv');
    el.style.transitionDelay = (i % 4) * 70 + 'ms';
  });

  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealTargets.forEach(function (el) { io.observe(el); });
    document.querySelectorAll('.reveal-img').forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('in'); });
    document.querySelectorAll('.reveal-img').forEach(function (el) { el.classList.add('in'); });
  }

  /* счётчики hero */
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var nums = document.querySelectorAll('[data-count]');
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        cio.unobserve(en.target);
        var el = en.target, end = parseInt(el.getAttribute('data-count'), 10), t0 = null;
        function step(ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / 1100, 1);
          el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    nums.forEach(function (el) { cio.observe(el); });
  }

  /* ============================================================
     4b. Горизонтальная лента отзывов: стрелки + состояние
     ============================================================ */
  var revRail = document.getElementById('revRail');
  if (revRail) {
    var arrows = document.querySelectorAll('.rev-arrow');
    function railStep() {
      var first = revRail.firstElementChild;
      if (!first) return revRail.clientWidth * 0.8;
      var gap = parseFloat(getComputedStyle(revRail).columnGap || '22') || 22;
      return first.getBoundingClientRect().width + gap;
    }
    function syncArrows() {
      var max = revRail.scrollWidth - revRail.clientWidth - 2;
      arrows.forEach(function (b) {
        var dir = parseInt(b.getAttribute('data-dir'), 10);
        b.disabled = dir < 0 ? revRail.scrollLeft <= 2 : revRail.scrollLeft >= max;
      });
    }
    arrows.forEach(function (b) {
      b.addEventListener('click', function () {
        var dir = parseInt(b.getAttribute('data-dir'), 10);
        revRail.scrollBy({ left: dir * railStep(), behavior: reduceMotion ? 'auto' : 'smooth' });
      });
    });
    revRail.addEventListener('scroll', syncArrows, { passive: true });
    window.addEventListener('resize', syncArrows);
    syncArrows();
  }

  /* ============================================================
     4c. Лайтбокс для скриншотов отзывов
     ============================================================ */
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbOpener = null;
  function closeLb() {
    if (!lb || lb.hidden) return;
    lb.hidden = true;
    lbImg.src = '';
    document.body.classList.remove('no-scroll');
    if (lbOpener) { lbOpener.focus(); lbOpener = null; }
  }
  if (lb) {
    document.querySelectorAll('.js-shot').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var img = btn.querySelector('img');
        lbImg.src = btn.getAttribute('data-src');
        lbImg.alt = img ? img.alt : '';
        lb.hidden = false;
        lbOpener = btn;
        document.body.classList.add('no-scroll');
        document.getElementById('lbClose').focus();
      });
    });
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.closest('#lbClose')) closeLb();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLb(); });
  }

  /* ============================================================
     4b. Конверсии Google Ads (AW-18428216713)
         phone_call - «Интерактивные номера телефонов»
         lead_form  - «Отправка формы для потенциальных клиентов»
         contact    - «Контакт» (WhatsApp)
     ============================================================ */
  var CONV = {
    phone_call: 'AW-18428216713/Mt22COudxe8cEImLodNE',
    lead_form:  'AW-18428216713/j-IbCLy4vO8cEImLodNE',
    contact:    'AW-18428216713/nYk8CJy8vO8cEImLodNE'
  };

  /* Отправить конверсию. cb (если передан) вызывается после ответа gtag
     или по таймауту 900 мс - чтобы переход не зависел от аналитики. */
  function reportConversion(key, cb) {
    var id = CONV[key];
    if (!id || typeof window.gtag !== 'function') { if (cb) cb(); return; }
    var fired = false;
    var done = function () { if (fired) return; fired = true; if (cb) cb(); };
    window.gtag('event', 'conversion', {
      send_to: id,
      value: 1.0,
      currency: 'USD',
      event_callback: done
    });
    if (cb) window.setTimeout(done, 900);
  }

  /* ============================================================
     5. Форма → WhatsApp (без бэкенда)
     ============================================================ */
  var form = document.getElementById('leadForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (document.getElementById('fmName').value || '').trim();
      var dir = document.getElementById('fmDir').value;
      var msg = (document.getElementById('fmMsg').value || '').trim();
      var text = 'Здравствуйте! Пишу с сайта «Ты художник».';
      if (name) text += '\nИмя: ' + name;
      text += '\nИнтересует: ' + dir;
      if (msg) text += '\nКомментарий: ' + msg;
      var done = document.getElementById('formDone');
      if (done) done.hidden = false;
      reportConversion('lead_form');
      window.open('https://wa.me/77475752520?text=' + encodeURIComponent(text), '_blank', 'noopener');
    });
  }

  /* ============================================================
     6. Делегированные клики tel / WhatsApp - конверсии Google Ads
        tel: переход откладываем до ответа gtag (страница на мобильном
        может уйти в звонилку раньше, чем уйдёт запрос).
        WhatsApp открывается в новой вкладке - страница жива, ждать не нужно.
     ============================================================ */
  document.addEventListener('click', function (e) {
    var call = e.target.closest('.js-call');
    if (call) {
      var href = call.getAttribute('href');
      if (href && !e.defaultPrevented) {
        e.preventDefault();
        reportConversion('phone_call', function () { window.location.href = href; });
      } else {
        reportConversion('phone_call');
      }
      return;
    }
    var wa = e.target.closest('.js-wa');
    if (wa) {
      reportConversion('contact');
      return;
    }
  });

  /* ============================================================
     7. Мелочи
     ============================================================ */
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
