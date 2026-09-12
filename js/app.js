/* DKT Practice — a small vanilla-JS quiz app.
   Data comes from data/questions.js (window.QUESTIONS). Progress lives in localStorage. */
(function () {
  'use strict';

  var ALL = window.QUESTIONS || [];
  var MOCK_SIZE = 45;      // questions in a mock test
  var MOCK_PASS = 41;      // correct answers needed to pass
  var LETTERS = ['A', 'B', 'C', 'D'];
  var STORE_KEY = 'dkt.progress.v1';

  // Section order matches the numbered subfolders the questions were sourced from:
  // 1_General, 2_Alcohol & Drugs, 3_Fatigue & driving, 4_Intersections, 5_Traffic Lanes,
  // 6_Negligent Driving, 7_Pedestrians, 8_Seat Belts, 9_Speed Limits, 10_Street Signs.
  var CATEGORY_ORDER = [
    'General Knowledge',
    'Alcohol and Drugs',
    'Fatigue and Driving',
    'Intersections',
    'Traffic Lanes',
    'Negligent Driving',
    'Pedestrians',
    'Seat Belts',
    'Speed Limits',
    'Street Signs'
  ];

  /* ---------------- storage ---------------- */

  var store = load();

  function load() {
    var blank = { stats: {}, fav: [], shuffle: false };
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return blank;
      var parsed = JSON.parse(raw);
      return {
        stats: parsed.stats || {},
        fav: parsed.fav || [],
        shuffle: !!parsed.shuffle
      };
    } catch (err) {
      return blank;
    }
  }

  function save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(store));
    } catch (err) {
      /* private mode / quota — progress just won't persist */
    }
  }

  function statOf(id) {
    return store.stats[id] || { right: 0, wrong: 0, last: null };
  }

  function record(id, wasRight) {
    var s = statOf(id);
    if (wasRight) s.right++; else s.wrong++;
    s.last = wasRight ? 'right' : 'wrong';
    store.stats[id] = s;
    save();
  }

  function isFav(id) { return store.fav.indexOf(id) !== -1; }

  function toggleFav(id) {
    var i = store.fav.indexOf(id);
    if (i === -1) store.fav.push(id); else store.fav.splice(i, 1);
    save();
    return isFav(id);
  }

  function wrongIds() {
    return ALL.filter(function (q) { return statOf(q.id).last === 'wrong'; })
              .map(function (q) { return q.id; });
  }

  /* ---------------- helpers ---------------- */

  var $ = function (id) { return document.getElementById(id); };

  function shuffled(list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function byId(id) {
    for (var i = 0; i < ALL.length; i++) if (ALL[i].id === id) return ALL[i];
    return null;
  }

  function categories() {
    var names = [];
    ALL.forEach(function (q) { if (names.indexOf(q.cat) === -1) names.push(q.cat); });
    names.sort(function (a, b) {
      var ia = CATEGORY_ORDER.indexOf(a); if (ia === -1) ia = 999;
      var ib = CATEGORY_ORDER.indexOf(b); if (ib === -1) ib = 999;
      return ia - ib;
    });
    return names;
  }

  // "1. General Knowledge" — numbered the same way as the source subfolders.
  function catLabel(cat) {
    var idx = CATEGORY_ORDER.indexOf(cat);
    return (idx === -1 ? '' : (idx + 1) + '. ') + cat;
  }

  function questionsIn(cat) {
    return ALL.filter(function (q) { return q.cat === cat; })
              .sort(function (a, b) { return a.num - b.num; });
  }

  function accuracy(list) {
    var right = 0, total = 0;
    list.forEach(function (q) {
      var s = statOf(q.id);
      right += s.right;
      total += s.right + s.wrong;
    });
    return { right: right, total: total, pct: total ? Math.round(right / total * 100) : 0 };
  }

  // How much of a section is done, not how accurate you've been on what you've tried:
  // right/wrong are counted once per question (by its most recent answer), as a share
  // of every question in the section — not just the ones you've attempted so far.
  function progress(list) {
    var right = 0, wrong = 0, total = list.length;
    list.forEach(function (q) {
      var last = statOf(q.id).last;
      if (last === 'right') right++;
      else if (last === 'wrong') wrong++;
    });
    return {
      right: right, wrong: wrong, total: total,
      rightPct: total ? Math.round(right / total * 100) : 0,
      wrongPct: total ? Math.round(wrong / total * 100) : 0,
      donePct: total ? Math.round((right + wrong) / total * 100) : 0
    };
  }

  function setRingSplit(el, labelEl, prog) {
    el.style.setProperty('--pct-right', prog.rightPct);
    el.style.setProperty('--pct-wrong', prog.wrongPct);
    if (labelEl) labelEl.textContent = prog.donePct + '%';
  }

  function setRing(el, labelEl, pct) {
    el.style.setProperty('--pct', pct);
    if (labelEl) labelEl.textContent = pct + '%';
  }

  /* ---------------- run state ---------------- */

  var run = null;   // { mode, title, items:[{q, order, picked}], idx, instant }

  function startRun(mode) {
    var pool, title, instant = true, parentSection, size = 0;

    if (mode === 'mock') {
      pool = shuffled(ALL).slice(0, MOCK_SIZE);
      title = 'Mock test';
      instant = false;
    } else if (mode === 'all') {
      pool = shuffled(ALL);
      title = 'All questions';
    } else if (mode === 'wrong') {
      pool = shuffled(wrongIds().map(byId));
      title = 'My mistakes';
    } else if (mode === 'fav') {
      pool = shuffled(store.fav.map(byId).filter(Boolean));
      title = 'Favourites';
    } else {                                    // a category name — "practice all in section"
      pool = shuffled(questionsIn(mode));
      title = catLabel(mode);
      parentSection = mode;
    }

    if (!pool.length) return;
    size = pool.length;

    run = {
      mode: mode,
      title: title,
      instant: instant,
      parentSection: parentSection,
      idx: 0,
      startedAt: Date.now(),
      items: pool.map(function (q) {
        var order = [0, 1, 2, 3].slice(0, q.options.length);
        if (store.shuffle) order = shuffled(order);
        return { q: q, order: order, picked: null };
      })
    };

    $('topbar-title').textContent = title + ' · ' + size + ' questions';
    show('quiz');
    renderQuestion();
  }

  function startSingle(qid, cat) {
    // Picking a question from a section's list drills the whole section in order
    // (not shuffled), starting right at the question you picked — Back and Next both
    // work from there, "Finish" only shows once you reach the section's last question.
    var qs = questionsIn(cat);
    var startIdx = -1;
    for (var i = 0; i < qs.length; i++) if (qs[i].id === qid) { startIdx = i; break; }
    if (startIdx === -1) return;

    run = {
      mode: 'single',
      title: catLabel(cat),
      instant: true,
      parentSection: cat,
      idx: startIdx,
      startedAt: Date.now(),
      items: qs.map(function (q) {
        var order = [0, 1, 2, 3].slice(0, q.options.length);
        if (store.shuffle) order = shuffled(order);
        return { q: q, order: order, picked: null };
      })
    };

    $('topbar-title').textContent = catLabel(cat) + ' · ' + qs.length + ' questions';
    show('quiz');
    renderQuestion();
  }

  /* ---------------- views ---------------- */

  function show(which) {
    ['home', 'section', 'quiz', 'result'].forEach(function (name) {
      $('view-' + name).hidden = (name !== which);
    });
    $('btn-home').hidden = (which === 'home');
    $('btn-fav').hidden = (which !== 'quiz');
    $('progressbar').hidden = (which !== 'quiz');
    if (which === 'home') $('topbar-title').textContent = 'DKT Practice';
    if (which === 'result') $('topbar-title').textContent = 'Results';
    window.scrollTo(0, 0);
  }

  /* ---------------- home ---------------- */

  function renderHome() {
    var acc = accuracy(ALL);
    var seen = ALL.filter(function (q) { return statOf(q.id).last !== null; }).length;
    var wrong = wrongIds().length;

    $('stat-total').textContent = ALL.length;
    setRing($('ring-overall'), $('ring-overall-label'), acc.pct);
    $('stat-attempts').textContent = acc.total ? acc.total + ' answers given' : 'not started';
    $('stat-seen').textContent = seen;
    $('stat-right').textContent = acc.right;
    $('stat-wrong').textContent = wrong;

    $('mock-count').textContent = MOCK_SIZE;
    $('mock-pass').textContent = MOCK_PASS;
    $('card-wrong').querySelector('small').textContent =
      wrong === 1 ? '1 question you have answered incorrectly'
                  : wrong + ' questions you have answered incorrectly';
    $('card-fav').querySelector('small').textContent =
      store.fav.length === 1 ? '1 saved question' : store.fav.length + ' saved questions';
    $('card-wrong').disabled = wrong === 0;
    $('card-fav').disabled = store.fav.length === 0;
    $('opt-shuffle').checked = store.shuffle;

    var list = $('cat-list');
    list.innerHTML = '';
    categories().forEach(function (cat) {
      var qs = questionsIn(cat);
      var prog = progress(qs);
      var btn = document.createElement('button');
      btn.className = 'card';
      btn.setAttribute('data-section', cat);
      btn.innerHTML =
        '<span class="card__icon">' + iconFor(cat) + '</span>' +
        '<span class="card__body"><strong></strong><small></small></span>' +
        '<span class="ring ring--split card__ring"><span></span></span>';
      btn.querySelector('strong').textContent = catLabel(cat);
      btn.querySelector('small').textContent =
        qs.length + ' questions' + ((prog.right + prog.wrong) ? ' · ' + prog.right + ' correct, ' + prog.wrong + ' incorrect' : '');
      setRingSplit(btn.querySelector('.ring'), btn.querySelector('.ring span'), prog);
      list.appendChild(btn);
    });
  }

  function iconFor(cat) {
    if (/intersection/i.test(cat)) return '&#128678;';       // construction/junction
    if (/alcohol/i.test(cat)) return '&#127866;';            // beer
    if (/fatigue/i.test(cat)) return '&#128564;';            // sleepy
    if (/lane/i.test(cat)) return '&#128663;';                // car in lane
    if (/negligent/i.test(cat)) return '&#9888;';             // warning triangle
    if (/pedestrian/i.test(cat)) return '&#128694;';          // pedestrian
    if (/seat belt/i.test(cat)) return '&#128663;';           // car (belted)
    if (/speed/i.test(cat)) return '&#9201;';                 // stopwatch
    if (/street sign/i.test(cat)) return '&#128737;';         // sign shield
    return '&#128218;';                                      // book (general knowledge)
  }

  /* ---------------- section (per-topic list) ---------------- */

  function statusIcon(status) {
    if (status === 'right') return '&#10003;';   // check
    if (status === 'wrong') return '&#10007;';   // cross
    return '&#8212;';                            // em dash: not attempted yet
  }

  function openSection(cat) {
    var qs = questionsIn(cat);
    if (!qs.length) return;
    var prog = progress(qs);

    $('section-eyebrow').textContent = 'Topic';
    $('section-title').textContent = catLabel(cat);
    $('section-sub').textContent =
      qs.length + ' questions' + ((prog.right + prog.wrong) ? ' · ' + prog.right + ' correct, ' + prog.wrong + ' incorrect' : '');
    setRingSplit($('section-ring'), $('section-ring-label'), prog);
    $('section-practice-all').setAttribute('data-mode', cat);
    $('section-practice-all').querySelector('small').textContent =
      qs.length + ' questions, shuffled order, instant feedback after each answer';

    var list = $('qlist');
    list.innerHTML = '';
    qs.forEach(function (q) {
      var status = statOf(q.id).last;
      var li = document.createElement('li');
      var btn = document.createElement('button');
      btn.className = 'qrow';
      btn.setAttribute('data-qid', q.id);
      btn.setAttribute('data-cat', cat);
      btn.innerHTML =
        '<span class="qrow__num">Q' + q.num + '</span>' +
        '<span class="qrow__text"></span>' +
        '<span class="qrow__status qrow__status--' + (status || 'none') + '">' + statusIcon(status) + '</span>';
      btn.querySelector('.qrow__text').textContent = q.short || q.q;
      li.appendChild(btn);
      list.appendChild(li);
    });

    $('topbar-title').textContent = catLabel(cat);
    show('section');
  }

  /* ---------------- quiz ---------------- */

  function current() { return run.items[run.idx]; }

  function renderQuestion() {
    var item = current();
    var q = item.q;

    $('counter').textContent = (run.mode === 'single')
      ? 'Question ' + q.num + ' of ' + run.items.length
      : 'Question ' + (run.idx + 1) + ' of ' + run.items.length;
    $('progressbar-fill').style.width = ((run.idx) / run.items.length * 100) + '%';

    if (q.img) {
      $('qimg').src = q.img;
      $('qimg').alt = 'Diagram for: ' + q.q;
      $('qimage').hidden = false;
    } else {
      $('qimage').hidden = true;
    }

    $('qtext').textContent = q.q;
    $('btn-fav').setAttribute('aria-pressed', isFav(q.id) ? 'true' : 'false');
    $('btn-fav').innerHTML = isFav(q.id) ? '&#9829;' : '&#9825;';

    var box = $('options');
    box.innerHTML = '';
    item.order.forEach(function (optIndex, position) {
      var btn = document.createElement('button');
      btn.className = 'option';
      btn.type = 'button';
      btn.setAttribute('data-opt', optIndex);
      btn.innerHTML = '<span class="option__key">' + LETTERS[position] + '</span><span></span>';
      btn.lastChild.textContent = q.options[optIndex];
      btn.addEventListener('click', function () { pick(optIndex); });
      box.appendChild(btn);
    });

    $('btn-prev').disabled = run.idx === 0;
    $('btn-next').textContent = (run.idx === run.items.length - 1) ? 'Finish' : 'Next';

    if (item.picked === null) {
      $('feedback').hidden = true;
      $('btn-next').disabled = run.instant;      // in practice mode, answer first
    } else {
      paintAnswered(item);
    }
  }

  function paintAnswered(item) {
    var q = item.q;
    var buttons = $('options').querySelectorAll('.option');

    Array.prototype.forEach.call(buttons, function (btn) {
      var idx = Number(btn.getAttribute('data-opt'));
      btn.disabled = run.instant;
      btn.setAttribute('aria-pressed', idx === item.picked ? 'true' : 'false');
      btn.classList.remove('is-correct', 'is-wrong');
      if (!run.instant) return;                  // mock test: no reveal until the end
      if (idx === q.answer) btn.classList.add('is-correct');
      else if (idx === item.picked) btn.classList.add('is-wrong');
    });

    if (run.instant) {
      var right = item.picked === q.answer;
      $('feedback').hidden = false;
      $('feedback-head').textContent = right ? 'Correct' : 'Not quite';
      $('feedback-head').className = 'feedback__head ' + (right ? 'is-ok' : 'is-bad');
      $('feedback-body').textContent = q.explain;
    }
    $('btn-next').disabled = false;
  }

  function pick(optIndex) {
    var item = current();
    if (run.instant && item.picked !== null) return;    // locked in
    var first = item.picked === null;
    item.picked = optIndex;
    // Practice modes lock the answer in straight away; a mock test lets you change
    // your mind, so its answers are only recorded when the test is submitted.
    if (run.instant && first) record(item.q.id, optIndex === item.q.answer);
    paintAnswered(item);
  }

  function next() {
    if (run.idx < run.items.length - 1) {
      run.idx++;
      renderQuestion();
    } else {
      finish();
    }
  }

  function prev() {
    if (run.idx > 0) { run.idx--; renderQuestion(); }
  }

  /* ---------------- results ---------------- */

  function finish() {
    // Practising a single question from a section list: skip the results page
    // (the answer was already shown inline) and drop straight back to that list,
    // refreshed with the new correct/incorrect status.
    if (run.mode === 'single' && run.parentSection) {
      openSection(run.parentSection);
      return;
    }

    if (!run.instant) {                      // mock test: bank the answers now
      run.items.forEach(function (i) {
        if (i.picked !== null) record(i.q.id, i.picked === i.q.answer);
      });
    }
    var answered = run.items.filter(function (i) { return i.picked !== null; });
    var right = run.items.filter(function (i) { return i.picked === i.q.answer; }).length;
    var pct = run.items.length ? Math.round(right / run.items.length * 100) : 0;
    var mins = Math.max(1, Math.round((Date.now() - run.startedAt) / 60000));

    var card = $('result-card');
    setRing($('ring-result'), $('result-pct'), pct);

    if (run.mode === 'mock') {
      var passed = right >= MOCK_PASS;
      card.className = 'result ' + (passed ? 'is-pass' : 'is-fail');
      $('result-verdict').textContent = passed ? 'Pass' : 'Not yet';
      $('result-line').textContent =
        right + ' of ' + run.items.length + ' correct — you need ' + MOCK_PASS +
        ' to pass. About ' + mins + ' min.';
    } else {
      card.className = 'result';
      $('result-verdict').textContent = right + ' / ' + run.items.length + ' correct';
      $('result-line').textContent =
        answered.length + ' answered · ' + run.title + ' · about ' + mins + ' min.';
    }

    var missed = run.items.filter(function (i) { return i.picked !== i.q.answer; });
    $('btn-retry-wrong').hidden = missed.length === 0;
    $('btn-retry-wrong').textContent = 'Retry the ' + missed.length + ' I missed';

    var ol = $('review');
    ol.innerHTML = '';
    run.items.forEach(function (item, n) {
      var q = item.q;
      var ok = item.picked === q.answer;
      var li = document.createElement('li');
      li.className = 'review__item' + (ok ? '' : ' is-wrong');

      var head = document.createElement('p');
      head.className = 'review__q';
      head.textContent = (n + 1) + '. ' + q.q;
      li.appendChild(head);

      if (q.img) {
        var img = document.createElement('img');
        img.className = 'review__img';
        img.src = q.img;
        img.alt = '';
        img.loading = 'lazy';
        li.appendChild(img);
      }

      li.appendChild(row('Your answer', item.picked === null ? 'not answered' : q.options[item.picked]));
      if (!ok) li.appendChild(row('Correct answer', q.options[q.answer]));

      var why = document.createElement('p');
      why.className = 'review__why';
      why.textContent = q.explain;
      li.appendChild(why);

      ol.appendChild(li);
    });

    show('result');
  }

  function row(label, value) {
    var p = document.createElement('p');
    p.className = 'review__row';
    var b = document.createElement('b');
    b.textContent = label + ': ';
    p.appendChild(b);
    p.appendChild(document.createTextNode(value));
    return p;
  }

  function retryMissed() {
    var missed = run.items.filter(function (i) { return i.picked !== i.q.answer; })
                          .map(function (i) { return i.q; });
    if (!missed.length) return;
    var parentSection = run.parentSection;      // keep the "back" target, if any
    run = {
      mode: 'retry',
      title: 'Retry',
      instant: true,
      parentSection: parentSection,
      idx: 0,
      startedAt: Date.now(),
      items: shuffled(missed).map(function (q) {
        var order = [0, 1, 2, 3].slice(0, q.options.length);
        if (store.shuffle) order = shuffled(order);
        return { q: q, order: order, picked: null };
      })
    };
    $('topbar-title').textContent = 'Retry · ' + run.items.length + ' questions';
    show('quiz');
    renderQuestion();
  }

  /* ---------------- events ---------------- */

  document.addEventListener('click', function (e) {
    var modeBtn = e.target.closest ? e.target.closest('[data-mode]') : null;
    var sectionBtn = e.target.closest ? e.target.closest('[data-section]') : null;
    var qBtn = e.target.closest ? e.target.closest('[data-qid]') : null;
    if (modeBtn && !modeBtn.disabled) startRun(modeBtn.getAttribute('data-mode'));
    else if (sectionBtn && !sectionBtn.disabled) openSection(sectionBtn.getAttribute('data-section'));
    else if (qBtn) startSingle(Number(qBtn.getAttribute('data-qid')), qBtn.getAttribute('data-cat'));
  });

  $('btn-next').addEventListener('click', next);
  $('btn-prev').addEventListener('click', prev);

  // The back arrow returns to wherever this run was launched from: a section's
  // question list if it has one, otherwise straight home.
  $('btn-home').addEventListener('click', function () {
    // Already looking at a section's question list? Its "back" always means Home —
    // don't fall through to a stale run's parentSection from an earlier quiz, or the
    // arrow just reopens the same section and looks like it did nothing.
    if (!$('view-section').hidden) { renderHome(); show('home'); return; }
    if (run && run.parentSection) openSection(run.parentSection);
    else { renderHome(); show('home'); }
  });
  $('btn-result-home').addEventListener('click', function () {
    renderHome();
    show('home');
  });
  $('btn-again').addEventListener('click', function () { startRun(run ? run.mode : 'mock'); });
  $('btn-retry-wrong').addEventListener('click', retryMissed);

  $('btn-fav').addEventListener('click', function () {
    var on = toggleFav(current().q.id);
    this.setAttribute('aria-pressed', on ? 'true' : 'false');
    this.innerHTML = on ? '&#9829;' : '&#9825;';
  });

  $('opt-shuffle').addEventListener('change', function () {
    store.shuffle = this.checked;
    save();
  });

  $('btn-reset').addEventListener('click', function () {
    if (!window.confirm('Clear all your answers, stats and favourites?')) return;
    store = { stats: {}, fav: [], shuffle: store.shuffle };
    save();
    renderHome();
  });

  document.addEventListener('keydown', function (e) {
    if ($('view-quiz').hidden) return;
    if (e.key === '1' || e.key.toLowerCase() === 'a') pickByPosition(0);
    else if (e.key === '2' || e.key.toLowerCase() === 'b') pickByPosition(1);
    else if (e.key === '3' || e.key.toLowerCase() === 'c') pickByPosition(2);
    else if (e.key === 'Enter' || e.key === 'ArrowRight') { if (!$('btn-next').disabled) next(); }
    else if (e.key === 'ArrowLeft') prev();
  });

  function pickByPosition(position) {
    var item = current();
    if (position >= item.order.length) return;
    pick(item.order[position]);
  }

  /* ---------------- go ---------------- */

  if (!ALL.length) {
    $('view-home').innerHTML = '<p>Could not load the questions. Make sure <code>data/questions.js</code> sits next to this page.</p>';
  } else {
    renderHome();
    show('home');
  }
})();
