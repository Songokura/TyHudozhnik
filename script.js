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
    kk: { title: 'Ты художник — Алматыдағы академиялық сурет және кескіндеме мектебі | 15 жыл' },
    en: { title: 'Ty Hudozhnik — Academic Drawing & Painting School in Almaty | 15 Years' }
  };

  var KK = {
    'logo.sub': 'арт-мектеп · Алматы',
    'nav.dir': 'Бағыттар', 'nav.met': 'Әдістеме', 'nav.rev': 'Пікірлер', 'nav.price': 'Бағалар',
    'nav.b2b': 'Қабырға суреті', 'nav.cts': 'Байланыс', 'nav.cta': 'Сынақ сабақ',
    'nav.ped': 'Ұстаздар', 'nav.team': 'Тимбилдинг',

    'hero.b1': 'Алматыда 15 жыл', 'hero.b2': 'ЮНЕСКО клубы', 'hero.b3': '2ГИС-те',
    'hero.t1': 'Талант әркімнің бойында бар.',
    'hero.t2': 'Сен — суретшісің.',
    'hero.sub': 'Жасыңыз нешеде екені де, қазір сурет сала алатын-алмайтыныңыз да маңызды емес.',
    'hero.sub2': 'Біз картина жасауды, түс пен пішінмен жұмыс істеуді, мүсіндеуді, мата мен киізбен тәжірибе жасауды үйретеміз — ең бастысы, үдерістен ләззат алуды.',
    'hero.sub3': '15 жыл бойы қайта оралғың келетін орын жасап келеміз.',
    'hero.meta': 'Еркін кесте • жеке көзқарас • сабақтар жанып кетпейді',
    'hero.cta1': 'Сынақ сабаққа жазылу', 'hero.cta2': 'Бағыттар мен бағалар',
    'hero.s1': 'жыл мектепке', 'hero.s2': 'оқыту бағыты', 'hero.s3': '2ГИС рейтингі', 'hero.s4': 'айына сабақ',
    'hero.cap1': 'Майлы бояумен кескіндеме', 'hero.cap2': 'Академиялық сурет',
    'hero.cap3': 'Майлы бояу, мастихин', 'hero.cap4': 'Fashion-иллюстрация',

    'mq': 'Академиялық сурет ✦ Кескіндеме ✦ Батик ✦ Киіз ✦ Сызу ✦ Пастель ✦ Портрет ✦ Скетчинг ✦ Fashion-иллюстрация ✦ Аниме ✦ ',

    'dir.kick': 'Бағыттар', 'dir.t1': 'Дәл сізге лайық', 'dir.t2': 'өнер',
    'dir.lead': 'Академиялық сурет, майлы бояу мен акрилмен кескіндеме, мүсіндеу, батик, киіз және авторлық мастер-кластар.',
    'dir.lead2': 'Балаларға да, ересектерге де — алғашқы қадамнан сенімді шеберлікке дейін. Бағдарламалар оқушының жасын, деңгейін және мақсатын ескереді.',
    'dir.meta': 'Бастаушылар мен жалғастырушылар • шығармашылық емтихандарға дайындық',
    'd.cta': 'Жазылу →',
    'd1.tag': 'Негізгі бағыт', 'd2.tag': 'Негізгі бағыт',
    'd4.tag': 'Мастер-класс', 'd5.tag': 'Мастер-класс',
    'd1.h': 'Кескіндеме: акрил және майлы бояу',
    'd1.p': 'Бір мастер-класста дайын картина немесе 5–10 жұмыстан тұратын курс. Пейзаж, натюрморт, портрет — үйге дайын кенеппен қайтасыз.',
    'd1.pr': 'мастер-класс 6 000 ₸-ден',
    'd2.h': 'Академиялық сурет',
    'd2.p': 'Біздің базамыз әрі басты бағытымыз: қол мен көзді жаттықтыру, құрылым, жарық-көлеңке, пропорция. Әрі қарай — пастель, портрет, скетчинг.',
    'd2.pr': 'айына 35 000 ₸',
    'd3.tag': 'Талапкерлерге',
    'd3.h': 'Сызу және шығармашылық емтиханға дайындық',
    'd3.p': 'ЖОО талаптарына сай сурет пен сызу — тіпті нөлдік деңгейден. Нақты, «іске бағытталған» бағдарлама: оқушыларымыз бейінді ЖОО-ларға, колледждер мен мектептерге түсіп жатыр.',
    'd3.pr': 'айына 35 000 ₸', 'd3.cta': 'Оқуға түсу тарихы →',
    'd4.h': 'Батик — жібекке сурет салу',
    'd4.p': 'Сирек бағыт: табиғи жібектегі авторлық орамал немесе панно. А3 форматы, екі сағат, барлық материал кіреді. Жазылу аптасына бір рет.',
    'd4.pr': '25 000 ₸ · А3 форматы, 2 сағат',
    'd5.h': 'Киіз — сулай басу техникасы',
    'd5.p': '«Жүнмен кескіндеме»: сулай басу техникасындағы жылы киіз панно. А4 форматы, екі сағат, материалдар кіреді.',
    'd5.pr': '25 000 ₸ · А4 панно, 2 сағат',
    'd6.h': 'Fashion-иллюстрация және аниме',
    'd6.p': 'Стиль, кейіпкерлер, қозғалыс. «Өз дүниесін» салатын жасөспірімдер мен ересектерге — киім эскизінен мангаға дейін.',
    'd6.pr': 'айына 35 000 ₸',
    'd7.h': 'Балалар сабақтары',
    'd7.p': 'Бала топта өз жобасын жүргізеді — әр балаға ұстаз назары бөлек. Алғашқы сабақ — сынақ.',
    'd7.pr': 'айына 35 000 ₸',

    'met.kick': 'Әдістеме', 'met.t1': 'Суретшілер ойлап тапқан', 'met.t2': 'ережелер',
    'met.lead': '15 жыл бойы біз тек техниканы емес, сабақ форматын да жетілдірдік — өнер өмірге кедергі емес, серік болуы үшін.',
    'met.i1h': 'Сабақтар жанып кетпейді', 'met.i1p': 'Сабақты жіберіп алсаңыз — ол «мұздатылып», тағы екі ай бойы жарамды болады.',
    'met.i2h': 'Уақыт шектеусіз', 'met.i2p': 'Сабаққа келдіңіз бе — картина «дайынмын» дегенше күні бойы отыруға болады.',
    'met.i3h': 'Еркін кесте', 'met.i3p': 'Ұстаздар әрдайым орнында: өзіңізге ыңғайлы уақытта келіңіз. Айына 8 сабақ.',
    'met.i4h': 'Әркімнің өз жобасы', 'met.i4p': 'Сабақ топпен өтеді, бірақ әркім өз жұмысын өз қарқынымен жүргізеді — жеке талдаумен.',
    'met.i5h': 'Тек студияда, бетпе-бет', 'met.i5p': 'Луганский көшесіндегі студияда тікелей оқимыз: нағыз материалдар, мольберт қасында талдау. Алғашқы сабақ — сынақ.',
    'met.cta': 'Сынақ сабаққа жазылу',

    'usp.cap': 'Оқушы жұмыстарының көрмесі',
    'usp.kick': 'Нәтижелер', 'usp.t1': 'Студиядан —', 'usp.t2': 'ЖОО мен көрмелерге',
    'usp.p1': 'Оқушыларымыз бейінді ЖОО-ларға, колледждер мен көркемөнер мектептеріне түседі — портфолио мен емтихан талаптарын жатқа білеміз.',
    'usp.p2': 'Оқушылардың жұмыстары көрмелер мен байқауларға іріктеліп алынады — Алматыдағы «Космонавтикадан» бастап Сан-Диего мен Австралиядағы халықаралық жобаларға дейін.',
    'usp.l1': 'Оқуға түсуге портфолио дайындау',
    'usp.l2': 'Сызу мен академиялық сурет нөлден',
    'usp.l3': 'Мектеп оқушыларына арналған көрмелер мен байқаулар',
    'usp.cta': 'Емтиханға дайындық',

    'rev.kick': 'Пікірлер', 'rev.t1': 'Бізге ең қымбаттысын', 'rev.t2': 'сеніп тапсырады',
    'rev.gis': '2ГИС-те 57 баға · 33 пікір', 'rev.gisBtn': '2ГИС-тегі пікірлерді оқу',
    'rev.q1': '«Ты художник» студиясын шығармашылық емтихандарға жедел дайындалу үшін ұсынамын. Жасөспірім қысқа мерзімде суретін жақсартып, оқуға түсуге қажетті талаптар бойынша сызудың базалық дағдыларын меңгерді — сызуды іс жүзінде нөлден бастаған едік. Нақты, «іске бағытталған» бағдарлама, әр детальға көңіл бөлінеді, нәтижесі — оқуға түсу. «Ты художник» командасына рақмет!!!',
    'rev.a1': 'Светлана Д.', 'rev.r1': 'шығармашылық емтихандарға дайындық · оқуға түсті',
    'rev.q2': 'Дина, қайырлы күн! София екі емтиханның қорытындысы бойынша мүмкін болатын 100 балдың 85-ін (35+50) жинап, Абай атындағы университеттің бейнелеу өнері мамандығына түсті. Сізге, Төлеубалаға, Дулатқа және мектебіміздің барлық ұстаздарына Софияның осы жылдардағы білімі жолындағы еңбектеріңіз, шыдамдылығыңыз, қолдауыңыз, сүйіспеншілігіңіз бен сеніміңіз үшін үлкен рақмет! Ол «қуаныштан ұшып жүр»! Сурет сапасын біз, кәсіби емес адамдар, бағалай алмаспыз, бірақ мамандар Софияға лайықты балл қойды. Барлығы сіздердің арқаларыңызда!',
    'rev.a2': 'Софияның анасы', 'rev.r2': 'емтиханда 100-ден 85 балл · Абай атындағы университет, бейнелеу өнері',
    'rev.s1': 'Т. Жүргенов атындағы ҚазҰӨА жанындағы мектеп-интернатқа қабылдау — тізімде бірінші орын',
    'rev.s2': 'Сызудан 5-тен 5 балл — және дизайн мамандығына түсу',
    'rev.s3': '«Мен грантқа түстім. Дайындағаныңыз үшін үлкен рақмет!»',
    'rev.s4': 'Жүргенов академиясы жанындағы мектепке 7-сыныпқа қабылдау — оқушыларымыз Қазақстанның колледждері мен жоғары оқу орындарына түседі',
    'rev.s5': '13 жыл бұрын өзі келген — қазір балалары келеді: «Ұлым сіздердің арқаларыңызда мамандық таңдады»',
    'rev.s6': 'Ерекше баланың анасы: «жайлы, кесте ыңғайлы, ең бастысы — шыдамдылық пен түсіністік»',
    'rev.s7': '«Шығармашылық барлық қырынан. Ресми түрде айтамын: бұл студия — жылдың олжасы»',
    'rev.s8': '«Верониканың суреті ең үздігі болды, балалар оған қарап қайталады»',

    'cl.kick': 'Серіктестер мен клиенттер', 'cl.t1': 'Бізге', 'cl.t2': 'сенеді',
    'cl.lead': 'Корпоративтік мастер-кластар, тимбилдингтер және бірлескен жобалар. 15 жыл ішінде мектеп халықаралық компаниялармен, мемлекеттік құрылымдармен, қорлармен және БАҚ-пен жұмыс істеді.',

    'ped.kick': 'Ұжым', 'ped.t1': 'Өздері де жазатын', 'ped.t2': 'ұстаздар',
    'ped.1': '«Ты художник» мектебінің негізін қалаушы. IAIA қауымдастығының тең құрылтайшысы, мәдени-білім жобалары жөніндегі халықаралық директор, Еуразиялық дизайнерлер одағының мүшесі.',
    'ped.2': 'Бейнелеу өнері пәнінің оқытушысы, IAIA және ҚҰПУ мүшесі, сарапшы, зергер-дизайнер.',
    'ped.3': 'Т. Жүргенов атындағы ҚазҰӨА түлегі, «Кескіндеме, мүсін және дизайн» факультеті.',
    'ped.4': 'Қазақстан Республикасы Суретшілер одағының мүшесі (2003 жылдан). ҚР Тұңғыш Президенті қорының «Бейнелеу өнері» номинациясы бойынша сыйлығының лауреаты — гобелен сериясы мен киіз кескіндемесі үшін (медаль, 2010). 2020 жылдан — «Таңшолпан» халықаралық тәуелсіз әйелдер қорының мүшесі.',

    'reg.kick': 'Мойындау', 'reg.t1': 'Әлем білетін', 'reg.t2': 'мектеп',
    'reg.1h': 'ЮНЕСКО клубы', 'reg.1p': 'Мектеп ЮНЕСКО клубтары қозғалысына кіреді.',
    'reg.2h': 'IAIA — халықаралық альянс',
    'reg.2p': 'International Art Innovation Alliance — америкалық әріптестермен бірге құрылған қауымдастық. Дина Мертенова — тең құрылтайшысы.',
    'reg.3h': 'Еуразиялық дизайнерлер одағы', 'reg.3p': 'Кәсіби дизайнерлер одағының мүшелігі.',
    'reg.4h': '«Даму» мемлекеттік бағдарламасы', 'reg.4p': 'Мемлекеттік қолдау бағдарламасы бойынша жұмыс істейміз.',

    'pr.kick': 'Бағалар', 'pr.t1': 'Акварельдей', 'pr.t2': 'мөлдір',
    'pr.lead': 'Барлық материал бағаға кіреді. Нақты құнын жазылу кезінде растаймыз.',
    'pr.c1h': 'Мастер-кластар',
    'pr.c1l1': 'Акрил, кенеп 30×40', 'pr.c1v1': '6 000 ₸-ден',
    'pr.c1l2': 'Акрил, кенеп 40×50', 'pr.c1v2': '8 000 ₸-ден',
    'pr.c1l3': 'Акрил, кенеп 50×60', 'pr.c1v3': '12 000 ₸-ден',
    'pr.c1l4': 'Майлы бояу, кенеп 45×60', 'pr.c1v4': '25 000 ₸',
    'pr.c1l5': 'Жібекке батик, А3 · 2 сағат', 'pr.c1v5': '25 000 ₸',
    'pr.c1l6': 'Киіз, сулай басу, А4 панно · 2 сағат', 'pr.c1v6': '25 000 ₸',
    'pr.c1note': 'Батик пен киіз — бір қатысушыға арналған баға, барлық материал кіреді.',
    'pr.flag': 'танымал',
    'pr.c2h': 'Курстар, айына 8 сабақ',
    'pr.c2l1': 'Кескіндеме: акрил және майлы бояу', 'pr.c2v1': 'айына 35 000 ₸',
    'pr.c2l2': 'Академиялық сурет', 'pr.c2v2': 'айына 35 000 ₸',
    'pr.c2l3': 'Сызу', 'pr.c2v3': 'айына 35 000 ₸',
    'pr.c2l4': 'Пастель · портрет · скетчинг', 'pr.c2v4': 'айына 35 000 ₸',
    'pr.c2l5': 'Fashion-иллюстрация · аниме', 'pr.c2v5': 'айына 35 000 ₸',
    'pr.c2note': 'Жылдық абонемент арзанырақ — айына 25 000 ₸.',
    'pr.c3h': 'Үлкен курстар',
    'pr.c3l1': 'Акрил, 5 картина курсы', 'pr.c3v1': '35 000 ₸-ден',
    'pr.c3l2': 'Майлы бояу, 10 картина курсы', 'pr.c3v2': '200 000 ₸',
    'pr.c3l3': 'Батик, 5 орамал курсы', 'pr.c3v3': '100 000 ₸',
    'pr.c3note': 'Өз жұмыстарыңыздан жеке серия жинағыңыз келсе — тамаша таңдау.',
    'pr.cta': 'Бағаны WhatsApp-та нақтылау',

    'b2b.kick': 'Бизнес пен интерьерге', 'b2b.t1': 'Қабырғаға сурет салу', 'b2b.t2': 'және УФ-басып шығару',
    'b2b.lead': 'Мектеп суретшілері интерьерді қолмен әрлейді және кез келген қатты бетке принтермен сурет басады: бетон, плитка, шыны, ағаш. Құрылыс компаниялары, дизайнерлер, сәулетшілер мен құрылыс салушыларға.',
    'b2b.ch1': 'сыртқы жұмысқа 5 жыл кепілдік', 'b2b.ch2': 'ішкі жұмысқа 10 жылдан астам',
    'b2b.ch3': 'ылғалға, УФ пен үйкеліске төзімді', 'b2b.ch4': 'қолмен салудан бірнеше есе жылдам',
    'b2b.ch5': 'өрнектер, логотиптер, 3D-эффектілер', 'b2b.ch6': 'Астана · Алматы · Шымкент',
    'b2b.g1': 'Интерьерді қолмен әрлеу', 'b2b.g2': 'Қоғамдық кеңістіктер', 'b2b.g3': 'Кафе мен мейрамханалар',
    'b2b.g4': 'Граффити мен каллиграфия', 'b2b.g5': 'Көркем панорамалар', 'b2b.g6': 'Брендтік сюжеттер',
    'b2b.g7': 'Мектептер мен кеңселер', 'b2b.g8': 'Шыныға УФ-басып шығару', 'b2b.g9': 'Жобаға бояу таңдау',
    'b2b.cta': 'Жобаны талқылау',

    'tm.kick': 'Компанияларға', 'tm.t1': 'Бояумен', 'tm.t2': 'тимбилдинг',
    'tm.p1': 'Корпоративтік арт-мастер-кластар: команда сертификат емес, өз қолымен салған картиналарын алып кетеді. Кескіндеме, батик, киіз — форматын командаңыз бен алаңыңызға қарай таңдаймыз.',
    'tm.p2': 'Бізге командаларын сеніп тапсырғандар:',
    'tm.cta': 'Бағдарламаны сұрату', 'tm.cap': 'Киіз кескіндемесі бойынша мастер-класс',

    'sc.kick': 'Бізді қалай табуға болады', 'sc.t1': 'Луганский көшесіндегі', 'sc.t2': 'студия',
    'sc.c1h': 'Кесте',
    'sc.c1l1': 'Сәрсенбі — жексенбі', 'sc.c1l2': 'Түскі үзіліс', 'sc.c1l3': 'Дүйсенбі, сейсенбі', 'sc.c1v3': 'демалыс',
    'sc.c1note': 'Сабақтар алдын ала жазылумен өтеді. Батик пен киіз — аптасына бір рет, орынды ертерек брондаңыз.',
    'sc.c2h': 'Мекенжай',
    'sc.c2p': 'Алматы қ., Луганский к-сі, 5, 69-кеңсе (1-қабат), Медеу ауданы',
    'sc.c2gis': '— студияның 2ГИС рейтингі', 'sc.c2btn': '2ГИС-те ашу',
    'sc.c3h': 'Алғашқы қадам — сынақ сабақ',
    'sc.c3p': 'WhatsApp-қа жазыңыз — бағытты, топты және уақытты өзіңізге лайықтап таңдаймыз.',
    'sc.c3btn': 'Жазылу',

    'ct.kick': 'Байланыс', 'ct.t1': 'Таза кенептен', 'ct.t2': 'бастаймыз ба?',
    'ct.lead': 'Өтінім қалдырыңыз — дайын хабарламасы бар WhatsApp ашылады, тек жіберу ғана қалады.',
    'ct.gis': 'Біз 2ГИС-теміз — 4.9 ★',
    'fm.name': 'Атыңыз', 'fm.dir': 'Не қызықтырады',
    'fm.o0': 'Сынақ сабақ', 'fm.o1': 'Кескіндеме (акрил / майлы бояу)', 'fm.o2': 'Академиялық сурет',
    'fm.o3': 'Сызу / оқуға дайындық', 'fm.o4': 'Батик', 'fm.o5': 'Киіз / сулай басу',
    'fm.o6': 'Fashion-иллюстрация / аниме', 'fm.o7': 'Балаға арналған сабақтар',
    'fm.o8': 'Қабырғаға сурет / УФ-басып шығару', 'fm.o9': 'Корпоративтік тимбилдинг',
    'fm.msg': 'Түсініктеме', 'fm.msgPh': 'Мысалы: қызым 10 жаста, демалыс күндері ыңғайлы',
    'fm.send': 'WhatsApp-қа жіберу',
    'fm.done': 'Рақмет! WhatsApp ашылып жатыр — «Жіберу» батырмасын басыңыз.',

    'ft.sub': 'Кескіндеме және сурет мектебі · Merten Art Academy · Алматы',
    'ft.rights': 'Барлық құқықтар қорғалған.'
  };

  var EN = {
    'logo.sub': 'art school · Almaty',
    'nav.dir': 'Programs', 'nav.met': 'Method', 'nav.rev': 'Reviews', 'nav.price': 'Prices',
    'nav.b2b': 'Wall Art', 'nav.cts': 'Contacts', 'nav.cta': 'Trial lesson',
    'nav.ped': 'Teachers', 'nav.team': 'Team building',

    'hero.b1': '15 years in Almaty', 'hero.b2': 'UNESCO club', 'hero.b3': 'on 2GIS',
    'hero.t1': 'Talent is in everyone.',
    'hero.t2': 'You are an artist.',
    'hero.sub': 'It does not matter how old you are or whether you can draw right now.',
    'hero.sub2': 'We teach you to create paintings, work with colour and form, sculpt, experiment with fabric and felt — and above all, to enjoy the process.',
    'hero.sub3': 'For 15 years we have been building a place you want to come back to.',
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
    'ped.4': 'Member of the Union of Artists of the Republic of Kazakhstan since 2003. Laureate of the First President of Kazakhstan Foundation prize in Fine Arts — for a series of tapestries and felt painting (medal, 2010). Member of the Tansholpan international independent women’s foundation since 2020.',

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

  function applyLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = 'ru';
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
