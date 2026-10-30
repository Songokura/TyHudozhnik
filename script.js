/* ============================================================
   ТЫ ХУДОЖНИК - script.js
   i18n (RU/KZ/EN) · меню · появление и мазки · вкладки цен с якорями ·
   ленты со стрелками · до/после · бегущая строка · форма -> WhatsApp ·
   конверсии Google Ads (AW-18428216713) на tel / WhatsApp / форме
   ============================================================ */
(function () {
  'use strict';

  var doc = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SCRIPT_SRC = (document.currentScript && document.currentScript.src) || '';
  var SCRIPT_V = (SCRIPT_SRC.match(/[?&]v=([^&]+)/) || [])[1] || '';
  var WA_NUM = '77475752520';

  /* ============================================================
     1. i18n - RU снимается с разметки, EN здесь, KZ - отдельным файлом
     ============================================================ */
  var i18nEls = document.querySelectorAll('[data-i18n]');
  var RU = {};
  i18nEls.forEach(function (el) {
    var k = el.getAttribute('data-i18n');
    if (!(k in RU)) RU[k] = el.innerHTML;
  });
  var TITLE_RU = document.title;

  var EN = {
    'top.txt': 'Free trial lesson and a month of art materials', 'top.cta': 'Sign up',
    'logo.sub': 'drawing school · Almaty',
    'nav.price': 'Programs & prices', 'nav.dir': 'Programs', 'nav.res': 'Admissions', 'nav.ped': 'Teachers', 'nav.rev': 'Reviews',
    'nav.biz': 'For companies', 'nav.cts': 'Contacts', 'nav.cta': 'Trial lesson', 'nav.trial': 'Trial lesson', 'nav.faq': 'FAQ',

    'hero.sub': 'Drawing and painting school in Almaty. 15 years',
    'hero.t1': 'We teach drawing', 'hero.t2': 'from zero.',
    'hero.t3': 'Children, adults and those preparing for an art entrance exam',
    'hero.p1': 'Flexible schedule', 'hero.p2': 'Lessons stay valid for 2 months', 'hero.p3': 'All materials included',
    'hero.free': 'Free trial lesson', 'hero.mat': 'Art materials for a month - free',
    'hero.cta1': 'Book a free lesson', 'hero.cta2': 'Find your program',
    'hero.ig': 'Student works on Instagram',
    'hero.c1': 'Oil', 'hero.c2': 'Palette knife', 'hero.c3': 'Fashion illustration',
    'hero.tr1': '15 years', 'hero.tr2': 'on 2GIS', 'hero.tr3': 'UNESCO Club', 'hero.tr4': 'Students enter KazNAI and Abai University',

    'hw.kick': 'A party for kids aged 4-12', 'hw.t1': 'Halloween at Ty Hudozhnik:', 'hw.t2': 'October 26-31',
    'hw.lead': 'A kind party with nothing scary: two hours of art, games and a little magic. Kids paint, play, pose for photos and take home a craft they made themselves.',
    'hw.l2': 'Art workshop: ghosts, pumpkins, bats', 'hw.l3': 'Games, contests and sweet prizes',
    'hw.l4': 'Photo zone and face painting', 'hw.l5': 'All materials included',
    'hw.f3v': '2 hours', 'hw.f4v': '5 Luganskogo St.', 'hw.per': 'per child, no extra charges', 'hw.cta': 'Book a spot',
    'hw.gal': 'Pumpkins painted by our students',

    'who.t1': 'Who are you', 'who.t2': 'looking for?',
    'who.c1': 'A child aged 5-12', 'who.c2': 'Exam preparation', 'who.c3': 'Adults from zero', 'who.c4': 'For companies',

    'pain.t1': 'Sound', 'pain.t2': 'familiar?',
    'pain.1': 'Your child is glued to the phone',
    'pain.2': 'At the club everyone draws from a template',
    'pain.3': 'Your child got sick and the paid lessons were lost',
    'pain.4': 'The exam is soon, and technical drawing starts from zero',
    'pain.5': '“I can’t draw, it will be embarrassing”',
    'pain.6': 'No time for a rigid schedule',

    'sol.t1': 'How we', 'sol.t2': 'solve it',
    'sol.1': 'A personal project for every student',
    'sol.2': 'An academic foundation, not templates',
    'sol.3': 'Missed a lesson? It waits for you for 2 months',
    'sol.4': 'A program built around university requirements',
    'sol.5': 'We teach from zero, with no time limit',
    'sol.6': 'Come any day, Wed-Sun 10:00-19:00',

    'res.t1': 'Our students', 'res.t2': 'get in',
    'res.n1': '85&nbsp;of&nbsp;100', 'res.d1': 'Abai University',
    'res.n2': '1st&nbsp;place', 'res.d2': 'boarding school at KazNAI',
    'res.n3': '5&nbsp;of&nbsp;5', 'res.d3': 'in technical drawing',
    'res.d4': 'Admitted on a state grant',
    'ba.t': 'Before and after', 'ba.b': 'Before', 'ba.a': 'After',
    'ba.work': 'Academic drawing by a student', 'ba.phB': 'A student’s first work', 'ba.phA': 'A work after the course',

    'pr.t1': 'Programs', 'pr.t2': 'and prices',
    'pr.year': 'Yearly pass 25,000&nbsp;₸/month',
    'pr.tab1': 'Kids', 'pr.tab2': 'Applicants', 'pr.tab3': 'Adults', 'pr.tab4': 'Workshops',
    'k1.h': 'Classes for kids aged 5-12', 'k1.p': 'A personal project in a group and the teacher’s attention to each child. 8 lessons a month', 'k1.v': '35,000&nbsp;₸/mo',
    'k2.h': 'Painting workshop', 'k2.p': 'An acrylic painting in one session, 30×40 canvas', 'k2.v': 'from 8,000&nbsp;₸',
    'a1.h': 'Technical drawing from zero', 'a1.p': 'A program built around university requirements. 8 lessons a month', 'a1.v': '40,000&nbsp;₸/mo',
    'a2.h': 'Academic drawing for admission', 'a2.p': 'Construction, light and shade, proportion, portfolio. 8 lessons a month', 'a2.v': '35,000&nbsp;₸/mo',
    'v1.h': 'Academic drawing', 'v1.p': 'Training the hand and eye: construction, light and shade, proportion', 'v1.v': '35,000&nbsp;₸/mo',
    'v2.h': 'Painting: acrylic and oil', 'v2.p': 'Landscapes, still lifes, portraits', 'v2.v': '35,000&nbsp;₸/mo',
    'v3.h': 'Pastel, portrait, sketching', 'v3.p': '8 lessons a month', 'v3.v': '35,000&nbsp;₸/mo',
    'v4.h': 'Fashion illustration and anime', 'v4.p': 'For teens and adults: characters, style, movement', 'v4.v': '35,000&nbsp;₸/mo',
    'v5.h': 'Course: 5 acrylic paintings', 'v5.p': 'A series of your own', 'v5.v': 'from 35,000&nbsp;₸',
    'v6.h': 'Course: 10 oil paintings', 'v6.p': 'A series of your own', 'v6.v': '200,000&nbsp;₸',
    'm5.h': 'Batik: silk painting', 'm5.p': 'A3 scarf or panel, 2 hours', 'm5.v': '25,000&nbsp;₸',
    'm6.h': 'Felt: wet felting', 'm6.p': 'A4 panel, 2 hours', 'm6.v': '25,000&nbsp;₸',
    'm1.h': 'Acrylic, 30×40 or 40×50 canvas', 'm1.p': 'A painting in one session', 'm1.v': 'from 8,000&nbsp;₸',
    'm2.h': 'Acrylic, 50×60 canvas', 'm2.p': 'A painting in one session', 'm2.v': 'from 12,000&nbsp;₸',
    'm3.h': 'Oil, 45×60 canvas', 'm3.p': 'A painting in one session', 'm3.v': '25,000&nbsp;₸',
    'm4.h': 'Batik: a course of 5 scarves', 'm4.p': 'Your own collection on natural silk', 'm4.v': '100,000&nbsp;₸',
    'pr.cta1': 'Enrol your child', 'pr.cta2': 'Discuss preparation', 'pr.cta3': 'Book a trial lesson', 'pr.cta4': 'Book a workshop',
    'pr.note': 'All materials are included. We confirm the exact price when you book.',

    'st.t1': 'How a', 'st.t2': 'trial lesson works',
    'st.1': 'You leave a request', 'st.2': 'We match a group and a day', 'st.3': 'You come in, materials are ready', 'st.4': 'You take your first work home',
    'st.cta': 'Leave a request',

    'ped.t1': 'Teachers who', 'ped.t2': 'paint themselves',
    'ped.r1': 'Founder of the school',
    'ped.1': 'Co-founder of IAIA, international director for cultural and educational projects, member of the Eurasian Union of Designers.',
    'ped.cap': 'A work by our teachers',
    'ped.2': 'Art teacher, member of IAIA and KazNPU, expert, jewelry designer.',
    'ped.3': 'Graduate of the Zhurgenov Kazakh National Academy of Arts, Painting, Sculpture and Design.',

    'rev.t1': '4.9 on 2GIS:', 'rev.t2': 'what students say',
    'rev.gis': '57 ratings · 33 reviews on 2GIS',
    'rev.q2': 'Across two exams Sofia scored 85 out of 100 and was admitted to Abai University to study Fine Arts. Thank you so much to you, Toleubala, Dulat and all the teachers for the work, patience, support and faith you put into Sofia’s studies. She is “beside herself with joy”!',
    'rev.a2': 'Sofia’s mother', 'rev.r2': '85 of 100 · Abai University, Fine Arts',
    'rev.q1': 'I recommend the studio for fast-track exam preparation. In a short time my teenager improved his drawing and learned technical drawing to university requirements, though we started practically from zero. A clear, to-the-point program, attention to detail and, as a result, admission.',
    'rev.a1': 'Svetlana D.', 'rev.r1': 'exam preparation',
    'rev.s1': 'Boarding school at KazNAI: first on the list',
    'rev.s2': '5 of 5 in technical drawing and a place in design',
    'rev.s3': '“I got a state grant. Thank you for the preparation!”',
    'rev.s4': 'School at the Zhurgenov Academy, 7th grade',
    'rev.s5': 'She came 13 years ago, now her children do',
    'rev.s6': '“Cosy, a convenient schedule, patience and understanding”',
    'rev.s7': '“This studio is the find of the year”',
    'rev.s8': '“Veronika had the best drawing in class”',
    'rev.gisBtn': 'All reviews on 2GIS', 'rev.ig': 'More works on Instagram',

    'tr.t1': 'They', 'tr.t2': 'trust us',
    'tr.u': 'UNESCO Club', 'tr.up': 'The school is part of the UNESCO clubs movement',
    'tr.ip': 'International art alliance, co-founded by Dina Mertenova',
    'tr.d': '“Damu”', 'tr.dp': 'We work under the state support program',

    'biz.t1': 'For', 'biz.t2': 'companies',
    'biz.c1': 'Team building with paint', 'biz.c1p': 'Your team takes home paintings of their own',
    'biz.c2': 'Wall painting and UV printing', 'biz.c2p': 'Interiors, cafes, schools and offices, from 10,000&nbsp;₸',
    'biz.more1': 'Team building program', 'biz.more2': 'Mural examples',

    'faq.t1': 'Frequently asked', 'faq.t2': 'questions',
    'faq.q1': 'From what age can you study?', 'faq.a1': 'We take children from 5. For adults age does not matter: we teach from zero at 30 and at 60.',
    'faq.q2': 'Do you need talent?', 'faq.a2': 'No. Drawing is a skill: construction, light and shade, proportion. We train the hand and eye with an academic program, and progress shows within a few lessons.',
    'faq.q3': 'How many people are in a group?', 'faq.a3': 'Groups are small and everyone works on their own project. The teacher comes to every easel and reviews each work personally.',
    'faq.q4': 'What should I bring?', 'faq.a4': 'Nothing. Paints, brushes, canvases, paper and aprons are waiting in the studio. Comfortable clothes are enough.',
    'faq.q5': 'How much is a trial lesson?', 'faq.a5': 'The trial lesson is free, and art materials for the first month are free too. You take your work home.',
    'faq.q6': 'What if I miss a lesson?', 'faq.a6': 'The lesson is not lost: it waits for you for 2 months. Come any day from Wednesday to Sunday, 10:00-19:00.',

    'ct.t1': 'Shall we start with', 'ct.t2': 'a blank canvas?',
    'fm.name': 'Your name', 'fm.phone': 'Phone', 'fm.dir': 'Program',
    'fm.o1': 'A child aged 5-12', 'fm.o2': 'Exam preparation', 'fm.o3': 'Adults from zero', 'fm.o4': 'Workshop', 'fm.o5': 'For companies',
    'fm.err': 'Please enter your name and phone', 'fm.send': 'Sign up', 'fm.note': 'We reply on WhatsApp within 15 minutes',
    'fm.done': 'Thank you! Opening WhatsApp, just press “Send”.',
    'ct.addr': 'Almaty, 5 Luganskogo St., office 69 (ground floor)',
    'ct.hours': 'Wed-Sun 10:00-19:00, lunch 13:00-14:00. Mon, Tue closed',
    'ct.ig': 'Works on Instagram', 'ct.gis': 'Open in 2GIS',
    'bar.wa': 'Message on WhatsApp',
    'ft.sub': 'Drawing and painting school · Merten Art Academy · Almaty', 'ft.rights': 'All rights reserved.',

    /* внутренние страницы */
    'rs.crumb': 'Wall painting and UV printing',
    'rs.t1': 'Wall painting', 'rs.t2': 'and UV printing',
    'rs.lead': 'Our artists paint interiors by hand and print images onto any hard surface: concrete, tile, glass, wood. For builders, designers, architects and developers.',
    'rs.ch1': '5-year warranty outdoors', 'rs.ch2': '10+ years indoors', 'rs.ch3': 'resistant to moisture, UV and abrasion',
    'rs.ch4': 'patterns, logos, 3D effects', 'rs.ch5': 'Astana · Almaty · Shymkent',
    'rs.price': 'from 10,000&nbsp;₸', 'rs.cta': 'Discuss a project',
    'rs.gt1': 'Projects', 'rs.gt2': 'we have done',
    'rs.g1': 'Hand-painted interiors', 'rs.g2': 'Public spaces', 'rs.g3': 'Cafes & restaurants', 'rs.g4': 'Graffiti & calligraphy',
    'rs.g5': 'Art panoramas', 'rs.g6': 'Branded scenes', 'rs.g7': 'Schools & offices', 'rs.g8': 'UV printing on glass', 'rs.g9': 'Choosing paints for a project',
    'rs.st1': 'How we', 'rs.st2': 'work',
    'rs.s1': 'You send photos of the wall and the idea', 'rs.s2': 'We prepare a sketch and an estimate', 'rs.s3': 'We paint or print on site', 'rs.s4': 'We hand over the finished wall',
    'tb.crumb': 'Team building',
    'tb.t1': 'Team building', 'tb.t2': 'with paint',
    'tb.lead': 'Corporate art workshops after which your team takes home not certificates, but their own paintings. Painting, batik, felt: we tailor the format to your team and venue.',
    'tb.ch1': 'Painting, batik or felt', 'tb.ch2': 'In our studio or at your venue', 'tb.ch3': 'All materials included', 'tb.ch4': 'Teachers guide every participant',
    'tb.cta': 'Request a program',
    'tb.cl': 'Teams that have already trusted us:',
    'tb.ft1': 'Workshop', 'tb.ft2': 'formats',
    'tb.f1h': 'Acrylic painting', 'tb.f1p': 'Everyone paints a picture in one session',
    'tb.f2h': 'Silk batik', 'tb.f2p': 'A scarf or panel on natural silk, 2 hours',
    'tb.f3h': 'Felt panel', 'tb.f3p': '“Painting with wool” by wet felting, 2 hours',
    'tb.price': 'The price depends on the number of participants and the format: we will calculate it on WhatsApp.'
  };

  var META = { ru: TITLE_RU, en: document.documentElement.getAttribute('data-title-en') || TITLE_RU };
  var DICTS = { ru: RU, kk: null, en: EN };
  var LANGS = ['ru', 'kk', 'en'];

  /* Казахский словарь - файлом assets/lang/kk.js, грузится только по выбору KZ (кнопка, ?lang=kk,
     сохранённый выбор): проверка Google Ads видит русский сайт. */
  var kkQueue = null;
  function loadKK(cb) {
    if (DICTS.kk) return cb();
    if (!kkQueue) {
      kkQueue = [];
      var sc = document.createElement('script');
      sc.src = new URL('assets/lang/kk.js', SCRIPT_SRC || location.href).href + (SCRIPT_V ? '?v=' + SCRIPT_V : '');
      sc.onload = function () {
        DICTS.kk = window.SITE_KK || {};
        META.kk = document.documentElement.getAttribute('data-title-kk-key') ? DICTS.kk[document.documentElement.getAttribute('data-title-kk-key')] : DICTS.kk._title;
        var q = kkQueue; kkQueue = null;
        q.forEach(function (f) { f(); });
      };
      sc.onerror = function () { kkQueue = null; };
      document.head.appendChild(sc);
    }
    kkQueue.push(cb);
  }

  function applyLang(lang, save) {
    if (LANGS.indexOf(lang) === -1) lang = 'ru';
    if (lang === 'kk' && !DICTS.kk) return loadKK(function () { applyLang('kk', save); });
    var dict = DICTS[lang];
    i18nEls.forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v == null) v = RU[el.getAttribute('data-i18n')];
      if (v != null && el.innerHTML !== v) el.innerHTML = v;
    });
    doc.lang = lang;
    document.title = META[lang] || TITLE_RU;
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    if (save) { try { localStorage.setItem('th-lang', lang); } catch (e) { /* приватный режим */ } }
    document.dispatchEvent(new CustomEvent('langchange'));
  }

  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang'), true); });
  });

  /* ?lang= в адресе главнее сохранённого выбора: русское объявление всегда открывает русский сайт */
  var urlLang = (location.search.match(/[?&]lang=(ru|kk|en)/) || [])[1];
  var savedLang = null;
  try { savedLang = localStorage.getItem('th-lang'); } catch (e) { /* ignore */ }
  var startLang = urlLang || savedLang;
  if (startLang && startLang !== 'ru') applyLang(startLang, false);

  /* ============================================================
     2. Шапка, бургер, мобильное меню
     ============================================================ */
  var header = document.getElementById('siteHeader');
  var onScrollHeader = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');
  function toggleMenu(open) {
    var willOpen = typeof open === 'boolean' ? open : menu.hidden;
    /* шапка липкая под баннером: меню начинается сразу под её текущим низом */
    document.body.classList.toggle('menu-open', willOpen);
    if (willOpen) menu.style.paddingTop = Math.round(header.getBoundingClientRect().bottom + 12) + 'px';
    menu.hidden = !willOpen;
    burger.classList.toggle('open', willOpen);
    burger.setAttribute('aria-expanded', String(willOpen));
    burger.setAttribute('aria-label', willOpen ? 'Закрыть меню' : 'Открыть меню');
    document.body.classList.toggle('menu-open', willOpen);
  }
  if (burger && menu) {
    burger.addEventListener('click', function () { toggleMenu(); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) toggleMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) { toggleMenu(false); burger.focus(); } });
    window.matchMedia('(min-width: 1240px)').addEventListener('change', function (m) { if (m.matches) toggleMenu(false); });
  }

  /* ============================================================
     3. Появление блоков и мазок под ключевым словом
     ============================================================ */
  var rvEls = document.querySelectorAll('.rv');
  var brushes = document.querySelectorAll('.brush-word');
  rvEls.forEach(function (el) {
    var i = Array.prototype.indexOf.call(el.parentNode.children, el);
    el.style.transitionDelay = (i % 4) * 70 + 'ms';
  });
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add(en.target.classList.contains('brush-word') ? 'drawn' : 'in');
        io.unobserve(en.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    rvEls.forEach(function (el) { io.observe(el); });
    brushes.forEach(function (el) { io.observe(el); });
  } else {
    rvEls.forEach(function (el) { el.classList.add('in'); });
    brushes.forEach(function (el) { el.classList.add('drawn'); });
  }

  /* ============================================================
     4. Вкладки «Направления и цены» + якоря объявлений внутри вкладок
        (#detyam, #cherchenie, #risunok, #batik ... ведут в нужную вкладку)
     ============================================================ */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  function selectTab(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      var p = document.getElementById(t.getAttribute('aria-controls'));
      if (p) {
        if (on && p.hidden) { p.hidden = false; p.classList.remove('enter'); void p.offsetWidth; p.classList.add('enter'); }
        else if (!on) p.hidden = true;
      }
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { selectTab(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      selectTab(tabs[(i + d + tabs.length) % tabs.length], true);
    });
  });

  function scrollToEl(el) {
    var hdrH = header ? header.getBoundingClientRect().height : 0;
    var y = el.getBoundingClientRect().top + window.scrollY - hdrH - 16;
    window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });
  }
  /* цель якоря в спрятанной вкладке: открыть вкладку, прокрутить, подсветить строку */
  function openHash(hash, smoothOk) {
    if (!hash || hash.length < 2) return false;
    var el;
    try { el = document.getElementById(decodeURIComponent(hash.slice(1))); } catch (e) { return false; }
    if (!el) return false;
    var panel = el.closest('[role="tabpanel"]');
    if (!panel) return false;
    var tab = document.querySelector('[aria-controls="' + panel.id + '"]');
    if (tab) selectTab(tab);
    var target = el.classList.contains('anchor') ? panel : el;
    if (target === panel) target = document.getElementById('tseny') || panel;
    requestAnimationFrame(function () {
      scrollToEl(target);
      /* картинки выше могут догрузиться и сдвинуть цель - сверяем ещё раз */
      setTimeout(function () { scrollToEl(target); }, 450);
      if (el.classList.contains('prow')) { el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash'); }
    });
    return true;
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var h = a.getAttribute('href');
    if (openHash(h)) { e.preventDefault(); history.replaceState(null, '', h); }
  });
  window.addEventListener('hashchange', function () { openHash(location.hash); });
  if (location.hash) {
    if (document.readyState === 'complete') openHash(location.hash);
    else window.addEventListener('load', function () { openHash(location.hash); });
    openHash(location.hash);
  }

  /* ============================================================
     5. Ленты со стрелками: шаг - одна карточка, крайняя кнопка гаснет,
        обе прячутся, если всё влезло
     ============================================================ */
  document.querySelectorAll('[data-rail]').forEach(function (nav) {
    var rail = document.getElementById(nav.getAttribute('data-rail'));
    if (!rail) return;
    var btns = nav.querySelectorAll('.rail-btn');
    function step() {
      var first = rail.firstElementChild;
      var gap = parseFloat(getComputedStyle(rail).columnGap) || 0;
      return first ? first.getBoundingClientRect().width + gap : rail.clientWidth * 0.8;
    }
    function sync() {
      var max = rail.scrollWidth - rail.clientWidth - 2;
      btns.forEach(function (b) {
        b.hidden = max <= 0;
        b.disabled = parseInt(b.getAttribute('data-dir'), 10) < 0 ? rail.scrollLeft <= 2 : rail.scrollLeft >= max;
      });
    }
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        rail.scrollBy({ left: parseInt(b.getAttribute('data-dir'), 10) * step(), behavior: reduceMotion ? 'auto' : 'smooth' });
      });
    });
    rail.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    window.addEventListener('load', sync);
    sync();
  });

  /* ============================================================
     6. До / после: ползунок двигает границу
     ============================================================ */
  document.querySelectorAll('.ba').forEach(function (ba) {
    var r = ba.querySelector('.ba-range');
    if (!r) return;
    r.addEventListener('input', function () { ba.style.setProperty('--pos', r.value + '%'); });
  });

  /* ============================================================
     7. Бегущая строка логотипов: копии до двойной ширины окна,
        шаг цикла - ровно одна копия списка
     ============================================================ */
  var mq = document.getElementById('mqTrack');
  if (mq && !reduceMotion) {
    var orig = Array.prototype.slice.call(mq.children);
    var setupMq = function () {
      var w = mq.scrollWidth;
      if (!w) return;
      var copies = Math.max(1, Math.ceil((window.innerWidth * 2) / w));
      for (var c = 0; c < copies; c++) {
        orig.forEach(function (li) { var n = li.cloneNode(true); n.setAttribute('aria-hidden', 'true'); mq.appendChild(n); });
      }
      mq.style.setProperty('--mq-w', w + 'px');
      mq.style.setProperty('--mq-dur', Math.round(w / 45) + 's');
      mq.classList.add('run');
    };
    var imgs = mq.querySelectorAll('img');
    var left = imgs.length;
    var done = function () { if (--left === 0) setupMq(); };
    imgs.forEach(function (im) {
      im.loading = 'eager';
      if (im.complete) done(); else { im.addEventListener('load', done); im.addEventListener('error', done); }
    });
  }

  /* ============================================================
     8. Лайтбокс
     ============================================================ */
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbOpener = null;
  function closeLb() {
    if (!lb || lb.hidden) return;
    lb.hidden = true; lbImg.removeAttribute('src');
    document.body.classList.remove('no-scroll');
    if (lbOpener) { lbOpener.focus(); lbOpener = null; }
  }
  if (lb) {
    document.querySelectorAll('.js-shot').forEach(function (btn) {
      btn.setAttribute('aria-label', 'Открыть крупнее');
      btn.addEventListener('click', function () {
        var img = btn.querySelector('img');
        lbImg.src = btn.getAttribute('data-src');
        lbImg.alt = img ? img.alt : '';
        lb.hidden = false; lbOpener = btn;
        document.body.classList.add('no-scroll');
        document.getElementById('lbClose').focus();
      });
    });
    lb.addEventListener('click', function (e) { if (e.target === lb || e.target.closest('#lbClose')) closeLb(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLb(); });
  }

  /* ============================================================
     9. Карта и ролики - только когда рядом с экраном
     ============================================================ */
  var lazyIo = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      var el = en.target;
      if (el.tagName === 'IFRAME') {
        if (en.isIntersecting) { el.src = el.getAttribute('data-src'); lazyIo.unobserve(el); }
        return;
      }
      if (en.isIntersecting) {
        if (!el.getAttribute('src')) el.src = el.getAttribute('data-src');
        var pr = el.play();
        if (pr && pr.catch) pr.catch(function () { /* автозапуск запрещён - остаётся постер */ });
      } else if (el.getAttribute('src')) {
        el.pause();
      }
    });
  }, { rootMargin: '900px 0px' }) : null;
  document.querySelectorAll('iframe[data-src]').forEach(function (f) {
    if (lazyIo) lazyIo.observe(f); else f.src = f.getAttribute('data-src');
  });

  /* Хэллоуин: блок сам прячется после даты из data-until */
  var hw = document.getElementById('hellouin');
  if (hw) {
    var until = Date.parse(hw.getAttribute('data-until') || '');
    if (until && Date.now() >= until) {
      hw.hidden = true;
    } else if (lazyIo && !reduceMotion) {
      hw.querySelectorAll('.hw-video').forEach(function (v) {
        v.addEventListener('playing', function () { v.classList.add('is-live'); });
        lazyIo.observe(v);
      });
    }
  }

  /* ============================================================
     10. Конверсии Google Ads (тег грузится только на боевом домене)
         phone_call - «Интерактивные номера телефонов»
         lead_form  - «Отправка формы для потенциальных клиентов»
         contact    - «Контакт» (WhatsApp)
     ============================================================ */
  var CONV = {
    phone_call: 'AW-18428216713/Mt22COudxe8cEImLodNE',
    lead_form: 'AW-18428216713/j-IbCLy4vO8cEImLodNE',
    contact: 'AW-18428216713/nYk8CJy8vO8cEImLodNE'
  };
  function reportConversion(key, cb) {
    var id = CONV[key];
    if (!id || typeof window.gtag !== 'function') { if (cb) cb(); return; }
    var fired = false;
    var done = function () { if (fired) return; fired = true; if (cb) cb(); };
    window.gtag('event', 'conversion', { send_to: id, value: 1.0, currency: 'USD', event_callback: done });
    if (cb) window.setTimeout(done, 900);
  }

  /* ============================================================
     11. Форма -> WhatsApp. Трекер LeadBot сам забирает поля формы
         и склеивает их с WhatsApp, открытым в течение 3 секунд.
     ============================================================ */
  var form = document.getElementById('leadForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nameEl = document.getElementById('fmName');
      var phoneEl = document.getElementById('fmPhone');
      var name = (nameEl.value || '').trim();
      var phone = (phoneEl.value || '').trim();
      var err = document.getElementById('formErr');
      var bad = !name || phone.replace(/\D/g, '').length < 10;
      nameEl.setAttribute('aria-invalid', String(!name));
      phoneEl.setAttribute('aria-invalid', String(phone.replace(/\D/g, '').length < 10));
      if (err) err.hidden = !bad;
      if (bad) { (name ? phoneEl : nameEl).focus(); return; }
      var dirEl = document.getElementById('fmDir');
      var text = 'Здравствуйте! Пишу с сайта «Ты художник».\nИмя: ' + name + '\nТелефон: ' + phone;
      if (dirEl) text += '\nНаправление: ' + dirEl.value;
      var done = document.getElementById('formDone');
      if (done) done.hidden = false;
      reportConversion('lead_form');
      window.open('https://wa.me/' + WA_NUM + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
    });
  }

  /* tel: переход откладываем до ответа gtag (на мобильном страница уходит в звонилку раньше запроса);
     WhatsApp открывается в новой вкладке - страница жива, ждать не нужно */
  document.addEventListener('click', function (e) {
    var call = e.target.closest('.js-call');
    if (call) {
      var href = call.getAttribute('href');
      if (href && !e.defaultPrevented && typeof window.gtag === 'function') {
        e.preventDefault();
        reportConversion('phone_call', function () { window.location.href = href; });
      }
      return;
    }
    if (e.target.closest('.js-wa')) reportConversion('contact');
  });

  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
