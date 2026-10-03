//  ==================================================================
// Foocus SayMaven Model Hub Interactive Logic v2
//  ==================================================================

(function () {
  'use strict';

  const modelsData = window.COLAB_MODELS || [];

  //  State 
  let state = {
    search:   '',
    arch:     'all',
    type:     'all',
    cluster:  'all',
    sort:     'notebook',
    twFilter: 'all',    // 'all' | 'has' | 'none'
    favOnly:  false,    // boolean
    viewMode: 'grid',   // 'grid' | 'list'
    page:     1,
    perPage:  36
  };

  //  DOM Elements 
  const searchInput             = document.getElementById('searchInput');
  const clearSearchBtn          = document.getElementById('clearSearch');
  const searchShortcutHint      = document.getElementById('searchShortcutHint');
  const sortSelect              = document.getElementById('sortSelect');
  const sortDropdownWrap        = document.getElementById('sortDropdownWrap');
  const sortDropdownTrigger     = document.getElementById('sortDropdownTrigger');
  const sortDropdownLabel       = document.getElementById('sortDropdownLabel');
  const sortDropdownCurrentIcon = document.getElementById('sortDropdownCurrentIcon');
  const sortDropdownMenu        = document.getElementById('sortDropdownMenu');
  const archFilters             = document.getElementById('archFilters');
  const typeFilters             = document.getElementById('typeFilters');
  const triggerFilters          = document.getElementById('triggerFilters');
  const filterFavBtn            = document.getElementById('filterFavBtn');
  const favCountEl              = document.getElementById('favCount');
  const viewGridBtn             = document.getElementById('viewGridBtn');
  const viewListBtn             = document.getElementById('viewListBtn');
  const clusterScroll           = document.getElementById('clusterScroll');
  const gridContainer           = document.getElementById('gridContainer');
  const resultsCount            = document.getElementById('resultsCount');
  const paginationWrap          = document.getElementById('paginationWrap');
  const prevPageBtn             = document.getElementById('prevPageBtn');
  const nextPageBtn             = document.getElementById('nextPageBtn');
  const pageInfo                = document.getElementById('pageInfo');
  const activeFiltersBar        = document.getElementById('activeFiltersBar');
  const detailModal             = document.getElementById('detailModal');
  const closeModalBtn           = document.getElementById('closeModal');
  const modalFavBtn             = document.getElementById('modalFavBtn');
  const modalCopyFooocus        = document.getElementById('modalCopyFooocus');
  const toastContainer          = document.getElementById('toastContainer');
  const backToTopBtn            = document.getElementById('backToTopBtn');

  //  ==================================================================
  // FAVORITES PERSISTENCE (LocalStorage)
  //  ==================================================================

  let favorites = new Set();
  try {
    const rawFavs = localStorage.getItem('colabfoocus_favs');
    if (rawFavs) {
      JSON.parse(rawFavs).forEach(function(id) { favorites.add(String(id)); });
    }
    const savedView = localStorage.getItem('colabfoocus_view');
    if (savedView === 'list' || savedView === 'grid') state.viewMode = savedView;
    const savedPerPage = localStorage.getItem('colabfoocus_perpage');
    if (savedPerPage) state.perPage = savedPerPage === 'all' ? 99999 : (parseInt(savedPerPage) || 36);
  } catch(e) {
    favorites = new Set();
  }

  function saveFavorites() {
    try {
      localStorage.setItem('colabfoocus_favs', JSON.stringify(Array.from(favorites)));
    } catch(e) {}
    updateFavCounter();
  }

  function updateFavCounter() {
    if (favCountEl) favCountEl.textContent = favorites.size;
  }

  function toggleFavorite(id, modelFilename) {
    id = String(id);
    if (favorites.has(id)) {
      favorites.delete(id);
      showToast('Dihapus dari favorit: <b>' + escapeHtml(modelFilename || 'Model') + '</b>');
    } else {
      favorites.add(id);
      showToast('💖 Disimpan ke favorit: <b>' + escapeHtml(modelFilename || 'Model') + '</b>');
    }
    saveFavorites();
    updateFavButtonsUI(id);
    if (state.favOnly) {
      applyFiltersAndRender();
    }
  }

  function updateFavButtonsUI(targetId) {
    document.querySelectorAll('.card-fav-btn[data-id="' + targetId + '"]').forEach(function(btn) {
      var isFav = favorites.has(targetId);
      btn.classList.toggle('active', isFav);
      btn.setAttribute('title', isFav ? 'Hapus dari favorit' : 'Simpan ke favorit');
      var svg = btn.querySelector('svg');
      if (svg) {
        svg.style.fill = isFav ? '#ec4899' : 'none';
        svg.style.stroke = isFav ? '#ec4899' : '#fff';
      }
    });

    if (modalFavBtn && modalFavBtn.getAttribute('data-id') === targetId) {
      var isFavModal = favorites.has(targetId);
      modalFavBtn.classList.toggle('active', isFavModal);
      modalFavBtn.setAttribute('title', isFavModal ? 'Hapus dari favorit' : 'Simpan ke favorit');
      var modalSvg = modalFavBtn.querySelector('svg');
      if (modalSvg) {
        modalSvg.style.fill = isFavModal ? '#ec4899' : 'none';
        modalSvg.style.stroke = isFavModal ? '#ec4899' : 'currentColor';
      }
    }
  }

  //  ==================================================================
  // HELPERS
  //  ==================================================================

  /**
   * Fix: field `cat` kadang berisi URL Civitai (bug di add_model.py untuk
   * beberapa model lama). Fungsi ini membersihkannya menjadi label readable.
   */
  function getDisplayCat(m) {
    const cat = m.cat || '';
    if (cat.startsWith('http') || cat.startsWith('#')) {
      const header = (m.header || '')
        .replace(/^#\s*/, '')
        .replace(/https?:\/\/[^\s]+/g, '')
        .trim();
      return header || m.type || 'General';
    }
    return cat || m.type || 'General';
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  //  ==================================================================
  // STATS Counter-Up Animation
  //  ==================================================================

  function animateCounter(el, target, duration) {
    if (!el) return;
    duration = duration || 1400;
    const start = performance.now();
    const update = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 4); // easeOutQuart
      el.textContent = Math.round(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  function initStats() {
    const total       = modelsData.length;
    const triggers    = modelsData.filter(function(m) { return m.tw && m.tw.length > 0; }).length;
    const checkpoints = modelsData.filter(function(m) { return m.type === 'Checkpoint'; }).length;
    const anima       = modelsData.filter(function(m) { return m.arch === 'ANIMA'; }).length;
    const sdxl        = modelsData.filter(function(m) { return m.arch === 'SDXL'; }).length;

    ['statTotal', 'statTriggers', 'statCheckpoints', 'statAnima', 'statSdxl'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.textContent = '0';
    });

    var statsGrid = document.querySelector('.stats-grid');
    if (!statsGrid) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCounter(document.getElementById('statTotal'),       total);
          animateCounter(document.getElementById('statTriggers'),    triggers);
          animateCounter(document.getElementById('statCheckpoints'), checkpoints);
          animateCounter(document.getElementById('statAnima'),       anima);
          animateCounter(document.getElementById('statSdxl'),        sdxl);
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });
    observer.observe(statsGrid);

    // Interactive Quick Filters on Stat Cards
    var cardTotal = document.getElementById('cardStatTotal');
    if (cardTotal) {
      cardTotal.addEventListener('click', function() {
        resetAllFilters();
        scrollToGrid();
      });
      cardTotal.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); cardTotal.click(); }
      });
    }

    var cardTriggers = document.getElementById('cardStatTriggers');
    if (cardTriggers) {
      cardTriggers.addEventListener('click', function() {
        state.sort = 'triggers-desc';
        if (sortSelect) sortSelect.value = 'triggers-desc';
        updateCustomSortUI('triggers-desc');
        state.page = 1;
        applyFiltersAndRender();
        scrollToGrid();
        updateURL();
        showToast('✨ Diurutkan berdasarkan <b>Trigger Terbanyak</b>');
      });
      cardTriggers.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); cardTriggers.click(); }
      });
    }

    var cardCheckpoints = document.getElementById('cardStatCheckpoints');
    if (cardCheckpoints) {
      cardCheckpoints.addEventListener('click', function() {
        var btn = document.querySelector('#typeFilters .pill-btn[data-type="Checkpoint"]');
        if (btn) btn.click();
        scrollToGrid();
      });
      cardCheckpoints.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); cardCheckpoints.click(); }
      });
    }

    var cardAnima = document.getElementById('cardStatAnima');
    if (cardAnima) {
      cardAnima.addEventListener('click', function() {
        var btn = document.querySelector('#archFilters .pill-btn[data-arch="ANIMA"]');
        if (btn) btn.click();
        scrollToGrid();
      });
      cardAnima.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); cardAnima.click(); }
      });
    }

    var cardSdxl = document.getElementById('cardStatSdxl');
    if (cardSdxl) {
      cardSdxl.addEventListener('click', function() {
        var btn = document.querySelector('#archFilters .pill-btn[data-arch="SDXL"]');
        if (btn) btn.click();
        scrollToGrid();
      });
      cardSdxl.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); cardSdxl.click(); }
      });
    }
  }

  // SVG icons (Lucide-style, stroke-based, 24x24 viewBox)
  var ICONS = {
    all:         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
    style:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
    concept:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
    poses:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path d="M5.5 8.5 10 10l-1.5 5.5 5-3 3 3.5"/><path d="M14.5 10.5 11 9"/></svg>',
    clothing:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/></svg>',
    background:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m21 15-5-5L5 21"/><circle cx="8.5" cy="8.5" r="1.5"/></svg>',
    tool:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    bangdream:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
    hoyoverse:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    bluearchive: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    musicanime:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
    projectsekai:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>',
    idolmaster:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/><line x1="5" y1="20" x2="19" y2="20"/></svg>',
    yuri:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    random:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>'
  };

  var popularClusters = [
    { label: 'Semua Seri',   id: 'all' },
    { label: 'Art Styles',  id: 'style' },
    { label: 'Concept',     id: 'concept' },
    { label: 'Poses',       id: 'poses' },
    { label: 'Clothing',    id: 'clothing' },
    { label: 'Background',  id: 'background' },
    { label: 'Tools',       id: 'tool' },
    { label: 'BanG Dream!', id: 'bangdream' },
    { label: 'HoYoverse',   id: 'hoyoverse' },
    { label: 'Blue Archive',id: 'bluearchive' },
    { label: 'Music Anime', id: 'musicanime' },
    { label: 'Project Sekai', id: 'projectsekai' },
    { label: 'Idolm@ster',  id: 'idolmaster' },
    { label: 'Yuri/Romcom', id: 'yuri' },
    { label: 'Random Chara',id: 'random' }
  ];

  function renderClusterFilters() {
    clusterScroll.innerHTML = '';
    popularClusters.forEach(function(item) {
      var btn = document.createElement('button');
      btn.className = 'pill-btn cluster-pill' + (state.cluster === item.id ? ' active' : '');
      btn.setAttribute('aria-pressed', state.cluster === item.id ? 'true' : 'false');
      btn.innerHTML = (ICONS[item.id] || '') + '<span>' + item.label + '</span>';
      btn.addEventListener('click', function() {
        state.cluster = item.id;
        state.page = 1;
        document.querySelectorAll('#clusterScroll .pill-btn').forEach(function(b) {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        applyFiltersAndRender();
        updateURL();
      });
      clusterScroll.appendChild(btn);
    });
  }

  //  ==================================================================
  // ACTIVE FILTERS BAR
  //  ==================================================================

  function renderActiveFilters() {
    if (!activeFiltersBar) return;
    var chips = [];

    if (state.search)         chips.push({ label: '\uD83D\uDD0D "' + state.search + '"', key: 'search' });
    if (state.favOnly)        chips.push({ label: '💖 Favorit (' + favorites.size + ')', key: 'fav' });
    if (state.arch !== 'all') chips.push({ label: '\u26A1 ' + state.arch, key: 'arch' });
    if (state.type !== 'all') chips.push({ label: '\uD83D\uDDC2 ' + state.type, key: 'type' });
    if (state.twFilter !== 'all') {
      chips.push({ label: state.twFilter === 'has' ? '⚡ Ada Trigger' : '⚪ Tanpa Trigger', key: 'twFilter' });
    }
    if (state.cluster !== 'all') {
      var cl = popularClusters.find(function(c) { return c.id === state.cluster; });
      chips.push({ label: cl ? cl.label : state.cluster, key: 'cluster' });
    }

    if (chips.length === 0) {
      activeFiltersBar.style.display = 'none';
      return;
    }

    activeFiltersBar.style.display = 'flex';
    activeFiltersBar.innerHTML =
      '<span class="active-filter-label">Filter aktif:</span>' +
      chips.map(function(c) {
        return '<span class="active-filter-chip" data-key="' + c.key + '">' +
          escapeHtml(c.label) +
          '<button class="active-filter-remove" aria-label="Hapus filter ' + escapeHtml(c.label) + '">\u2715</button>' +
          '</span>';
      }).join('') +
      '<button class="reset-all-btn" id="resetAllFilters">\u21BA Reset Semua</button>';

    activeFiltersBar.querySelectorAll('.active-filter-chip').forEach(function(chip) {
      chip.querySelector('.active-filter-remove').addEventListener('click', function() {
        resetFilter(chip.getAttribute('data-key'));
      });
    });
    var resetBtn = document.getElementById('resetAllFilters');
    if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);
  }

  function resetFilter(key) {
    if (key === 'search') {
      state.search = '';
      searchInput.value = '';
      clearSearchBtn.style.display = 'none';
      if (searchShortcutHint) searchShortcutHint.style.display = 'flex';
    } else if (key === 'fav') {
      state.favOnly = false;
      if (filterFavBtn) filterFavBtn.classList.remove('active');
    } else if (key === 'twFilter') {
      state.twFilter = 'all';
      document.querySelectorAll('#triggerFilters .pill-btn').forEach(function(b) {
        b.classList.toggle('active', b.getAttribute('data-tw') === 'all');
      });
    } else if (key === 'arch') {
      state.arch = 'all';
      document.querySelectorAll('#archFilters .pill-btn').forEach(function(b) { b.classList.remove('active'); });
      var allBtn = document.querySelector('#archFilters .pill-btn[data-arch="all"]');
      if (allBtn) allBtn.classList.add('active');
    } else if (key === 'type') {
      state.type = 'all';
      document.querySelectorAll('#typeFilters .pill-btn').forEach(function(b) { b.classList.remove('active'); });
      var allTypeBtn = document.querySelector('#typeFilters .pill-btn[data-type="all"]');
      if (allTypeBtn) allTypeBtn.classList.add('active');
    } else if (key === 'cluster') {
      state.cluster = 'all';
      renderClusterFilters();
    }
    state.page = 1;
    applyFiltersAndRender();
    updateURL();
  }

  function resetAllFilters() {
    state.search = ''; state.arch = 'all'; state.type = 'all';
    state.cluster = 'all'; state.sort = 'notebook'; state.twFilter = 'all'; state.favOnly = false; state.page = 1;
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    if (searchShortcutHint) searchShortcutHint.style.display = 'flex';
    if (filterFavBtn) filterFavBtn.classList.remove('active');
    document.querySelectorAll('#triggerFilters .pill-btn').forEach(function(b) {
      b.classList.toggle('active', b.getAttribute('data-tw') === 'all');
    });
    if (sortSelect) sortSelect.value = 'notebook';
    updateCustomSortUI('notebook');
    document.querySelectorAll('#archFilters .pill-btn').forEach(function(b) { b.classList.remove('active'); });
    var archAll = document.querySelector('#archFilters .pill-btn[data-arch="all"]');
    if (archAll) archAll.classList.add('active');
    document.querySelectorAll('#typeFilters .pill-btn').forEach(function(b) { b.classList.remove('active'); });
    var typeAll = document.querySelector('#typeFilters .pill-btn[data-type="all"]');
    if (typeAll) typeAll.classList.add('active');
    renderClusterFilters();
    applyFiltersAndRender();
    updateURL();
  }

  //  ==================================================================
  // URL QUERY PARAMS shareable filter links
  //  ==================================================================

  function updateURL() {
    var params = new URLSearchParams();
    if (state.search)              params.set('q',       state.search);
    if (state.favOnly)             params.set('fav',     '1');
    if (state.twFilter !== 'all')  params.set('tw',      state.twFilter);
    if (state.arch !== 'all')      params.set('arch',    state.arch);
    if (state.type !== 'all')      params.set('type',    state.type);
    if (state.cluster !== 'all')   params.set('cluster', state.cluster);
    if (state.sort !== 'notebook') params.set('sort',    state.sort);
    if (state.page > 1)            params.set('page',    state.page);
    var newURL = params.toString()
      ? window.location.pathname + '?' + params.toString()
      : window.location.pathname;
    history.replaceState(null, '', newURL);
  }

  function initFromURL() {
    var params = new URLSearchParams(window.location.search);
    if (params.get('q')) {
      state.search = params.get('q');
      searchInput.value = state.search;
      clearSearchBtn.style.display = 'block';
      if (searchShortcutHint) searchShortcutHint.style.display = 'none';
    }
    if (params.get('fav') === '1') {
      state.favOnly = true;
      if (filterFavBtn) filterFavBtn.classList.add('active');
    }
    if (params.get('tw')) {
      state.twFilter = params.get('tw');
      document.querySelectorAll('#triggerFilters .pill-btn').forEach(function(b) {
        b.classList.toggle('active', b.getAttribute('data-tw') === state.twFilter);
      });
    }
    if (params.get('arch'))    state.arch    = params.get('arch');
    if (params.get('type'))    state.type    = params.get('type');
    if (params.get('cluster')) state.cluster = params.get('cluster');
    if (params.get('sort')) {
      state.sort = params.get('sort');
      if (sortSelect) sortSelect.value = state.sort;
      updateCustomSortUI(state.sort);
    }
    if (params.get('page')) state.page = parseInt(params.get('page')) || 1;

    if (state.arch !== 'all') {
      document.querySelectorAll('#archFilters .pill-btn').forEach(function(b) {
        b.classList.toggle('active', b.getAttribute('data-arch') === state.arch);
      });
    }
    if (state.type !== 'all') {
      document.querySelectorAll('#typeFilters .pill-btn').forEach(function(b) {
        b.classList.toggle('active', b.getAttribute('data-type') === state.type);
      });
    }
  }

  //  ==================================================================
  // FILTER & SORT LOGIC
  //  ==================================================================

  function getFilteredModels() {
    var q = state.search.trim().toLowerCase();

    return modelsData.filter(function(m) {
      if (state.favOnly && !favorites.has(String(m.id))) return false;
      if (state.twFilter === 'has' && (!m.tw || m.tw.length === 0)) return false;
      if (state.twFilter === 'none' && m.tw && m.tw.length > 0) return false;
      if (state.arch !== 'all' && m.arch !== state.arch) return false;
      if (state.type !== 'all' && m.type !== state.type) return false;

      if (state.cluster !== 'all') {
        var cId    = state.cluster;
        var cat    = (m.cat    || '').toLowerCase();
        var header = (m.header || '').toLowerCase();
        var cell   = m.cell;

        if      (cId === 'style')        { if (cat !== 'style'      && !header.includes('style'))       return false; }
        else if (cId === 'concept')      { if (cat !== 'concept'    && !header.includes('concept'))     return false; }
        else if (cId === 'poses')        { if (cat !== 'poses'      && !header.includes('poses'))       return false; }
        else if (cId === 'clothing')     { if (cat !== 'clothing'   && !header.includes('clothing'))    return false; }
        else if (cId === 'background')   { if (cat !== 'background' && !header.includes('background'))  return false; }
        else if (cId === 'tool')         { if (cat !== 'tool'       && !header.includes('tool'))        return false; }
        else if (cId === 'bangdream')    { if ((cell < 34 || cell > 49) && !cat.includes('bang dream') && !header.includes('bang dream') && !header.includes('roselia') && !header.includes('afterglow') && !header.includes('morfonica') && !header.includes('mygo') && !header.includes('mujica') && !header.includes('poppin')) return false; }
        else if (cId === 'hoyoverse')    { if ((cell < 52 || cell > 58) && !header.includes('honkai') && !header.includes('genshin') && !header.includes('zenless') && !header.includes('zzz') && !header.includes('hoyoverse')) return false; }
        else if (cId === 'bluearchive')  { if (cell !== 79 && !cat.includes('blue archive') && !header.includes('blue archive')) return false; }
        else if (cId === 'musicanime')   { if ((cell < 49 || cell > 51) && !header.includes('girls band cry') && !header.includes('bocchi') && !header.includes('k-on')) return false; }
        else if (cId === 'projectsekai') { if ((cell < 61 || cell > 62) && !cat.includes('project sekai') && !header.includes('project sekai')) return false; }
        else if (cId === 'idolmaster')   { if ((cell < 59 || cell > 60) && !cat.includes('idolm@ster') && !cat.includes('idolmaster') && !header.includes('idolm@ster') && !header.includes('idolmaster')) return false; }
        else if (cId === 'yuri') {
          var yuriCells = [63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 80, 93, 101, 102];
          var isYuri = yuriCells.indexOf(cell) !== -1 || header.includes('watanare') || header.includes('wataten') || header.includes('adachi') || header.includes('takopi') || header.includes('gnp');
          if (!isYuri) return false;
        }
        else if (cId === 'random')       { if ((cell < 103 || cell > 104) && !header.includes('random')) return false; }
      }

      if (q) {
        var inName     = (m.filename || '').toLowerCase().indexOf(q) !== -1;
        var inTitle    = (m.title    || '').toLowerCase().indexOf(q) !== -1;
        var inCat      = getDisplayCat(m).toLowerCase().indexOf(q) !== -1;
        var inHeader   = (m.header  || '').toLowerCase().indexOf(q) !== -1;
        var inTriggers = (m.tw      || []).some(function(t) { return t.toLowerCase().indexOf(q) !== -1; });
        if (!inName && !inTitle && !inCat && !inHeader && !inTriggers) return false;
      }
      return true;

    }).sort(function(a, b) {
      if (state.sort === 'notebook')      return a.cell - b.cell;
      if (state.sort === 'name-asc')      return a.filename.localeCompare(b.filename);
      if (state.sort === 'name-desc')     return b.filename.localeCompare(a.filename);
      if (state.sort === 'triggers-desc') return (b.tw ? b.tw.length : 0) - (a.tw ? a.tw.length : 0);
      if (state.sort === 'arch')          return a.arch.localeCompare(b.arch);
      return 0;
    });
  }

  // Render Grid
  function applyFiltersAndRender() {
    var filtered   = getFilteredModels();
    var total      = modelsData.length;
    resultsCount.textContent =
      'Menampilkan ' + filtered.length.toLocaleString() + ' dari ' + total.toLocaleString() + ' model';

    var totalPages = Math.ceil(filtered.length / state.perPage) || 1;
    if (state.page > totalPages) state.page = totalPages;

    var startIdx  = (state.page - 1) * state.perPage;
    var paginated = filtered.slice(startIdx, startIdx + state.perPage);

    renderPagination(totalPages);
    renderActiveFilters();

    if (paginated.length === 0) {
      gridContainer.innerHTML = [
        '<div style="grid-column:1/-1;text-align:center;padding:80px 20px;color:var(--text-muted);">',
        '<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"',
        '     style="margin-bottom:16px;opacity:.4;">',
        '  <circle cx="11" cy="11" r="8"></circle>',
        '  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
        '</svg>',
        '<h3 style="color:#cbd5e1;margin-bottom:8px;font-family:var(--font-heading);">Tidak ada model yang cocok</h3>',
        '<p style="font-size:.9rem;margin-bottom:20px;">Coba ubah kata kunci atau reset filter di atas.</p>',
        '<button onclick="document.getElementById(\'resetAllFilters\')?.click()" class="empty-reset-btn">',
        '\u21BA Reset Semua Filter</button>',
        '</div>'
      ].join('');
      return;
    }

    gridContainer.innerHTML = paginated.map(function(m, i) { return createCardHTML(m, i); }).join('');
    attachCardEvents();

    // Staggered card fade-in animation
    requestAnimationFrame(function() {
      gridContainer.querySelectorAll('.model-card').forEach(function(card, i) {
        card.style.setProperty('--card-delay', Math.min(i * 28, 420) + 'ms');
        card.classList.add('card-animate-in');
      });
    });
  }

  //  ==================================================================
  // CARD HTML TEMPLATE
  //  ==================================================================

  function createCardHTML(m, index) {
    index = index || 0;
    var archBadgeClass  = m.arch === 'ANIMA' ? 'badge-anima' : 'badge-sdxl';
    var triggersCount   = m.tw ? m.tw.length : 0;
    var displayCat      = getDisplayCat(m);
    var isFav           = favorites.has(String(m.id));

    var triggersPreview = m.tw && m.tw.length > 0
      ? m.tw.slice(0, 3).map(function(t) {
          return '<span class="trigger-chip" title="' + escapeHtml(t) + '">' + escapeHtml(t) + '</span>';
        }).join('')
      : '<span class="no-trigger">Tidak ada trigger khusus</span>';

    var mediaTag = [
      '<div class="card-img-placeholder">',
      '<span style="font-size:2rem;">\uD83D\uDDBC\uFE0F</span>',
      '<span style="font-size:.72rem;margin-top:4px;color:var(--text-muted);">No Preview</span>',
      '</div>'
    ].join('');

    if (m.img) {
      if (m.img.endsWith('.mp4')) {
        mediaTag = '<video class="card-img" src="' + m.img + '" autoplay loop muted playsinline preload="metadata"></video>';
      } else {
        mediaTag = '<img class="card-img" src="' + m.img + '" alt="' + escapeHtml(m.filename) + '" loading="lazy"' +
          ' onload="this.parentElement.classList.remove(\'loading\')"' +
          ' onerror="this.parentElement.classList.remove(\'loading\');this.parentElement.innerHTML=\'<div class=\\\'card-img-placeholder\\\'>' +
          '<span style=\\\'font-size:2rem;\\\'>\uD83D\uDDBC\uFE0F</span>' +
          '<span style=\\\'font-size:.72rem;margin-top:4px;\\\'>No Preview</span></div>\'">';
      }
    }

    var copyBtn = triggersCount > 0
      ? '<button class="btn-copy-chip copy-triggers-btn" data-id="' + m.id + '"' +
        ' aria-label="Salin trigger words ' + escapeHtml(m.filename) + '">' +
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<rect x="9" y="9" width="13" height="13" rx="2"/>' +
        '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Salin</button>'
      : '';

    var moreChip = triggersCount > 3
      ? '<span class="trigger-chip" style="opacity:.7;">+' + (triggersCount - 3) + ' lagi</span>'
      : '';

    // Compact List View Layout
    if (state.viewMode === 'list') {
      return [
        '<div class="model-card list-card" data-id="' + m.id + '">',
        '  <div class="card-img-wrap' + (m.img ? ' loading' : '') + '">',
        '    ' + mediaTag,
        '  </div>',
        '  <div class="card-body">',
        '    <div class="list-main-info">',
        '      <div class="card-filename" title="' + escapeHtml(m.filename) + '">' + escapeHtml(m.filename) + '</div>',
        '      <div class="card-title" title="' + escapeHtml(m.title) + '">' + escapeHtml(m.title || m.filename) + '</div>',
        '    </div>',
        '    <div class="list-badges-cluster">',
        '      <span class="badge ' + archBadgeClass + '">' + m.arch + '</span>',
        '      <span class="badge badge-type">' + m.type + '</span>',
        '      <span class="trigger-chip" style="background:rgba(255,255,255,0.06);border-color:var(--border-subtle);color:var(--text-secondary);">' + escapeHtml(displayCat) + '</span>',
        '    </div>',
        '    <div class="card-triggers">',
        '      <div class="triggers-header">',
        '        <span>Triggers (' + triggersCount + ')</span>',
        '        ' + copyBtn,
        '      </div>',
        '      <div class="trigger-chips-wrap">' + triggersPreview + moreChip + '</div>',
        '    </div>',
        '    <div class="card-footer">',
        '      <button class="list-fav-btn card-fav-btn' + (isFav ? ' active' : '') + '" data-id="' + m.id + '"' +
        '        title="' + (isFav ? 'Hapus dari favorit' : 'Simpan ke favorit') + '" aria-label="Favorit ' + escapeHtml(m.filename) + '">' +
        '        <svg width="15" height="15" viewBox="0 0 24 24" fill="' + (isFav ? '#ec4899' : 'none') + '" stroke="' + (isFav ? '#ec4899' : '#fff') + '" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
        '      </button>',
        '      <button class="btn btn-secondary view-details-btn" data-id="' + m.id + '" aria-label="Lihat detail ' + escapeHtml(m.filename) + '">Detail</button>',
        '      <a href="' + m.url + '" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" aria-label="Buka di Civitai">Civitai</a>',
        '    </div>',
        '  </div>',
        '</div>'
      ].join('\n');
    }

    // Default Grid Card Layout
    return [
      '<div class="model-card" data-id="' + m.id + '">',
      '  <div class="card-img-wrap' + (m.img ? ' loading' : '') + '">',
      '    ' + mediaTag,
      '    <button class="card-fav-btn' + (isFav ? ' active' : '') + '" data-id="' + m.id + '"' +
      '      title="' + (isFav ? 'Hapus dari favorit' : 'Simpan ke favorit') + '" aria-label="Favorit ' + escapeHtml(m.filename) + '">' +
      '      <svg width="16" height="16" viewBox="0 0 24 24" fill="' + (isFav ? '#ec4899' : 'none') + '" stroke="' + (isFav ? '#ec4899' : '#fff') + '" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
      '    </button>',
      '    <div class="card-badges">',
      '      <span class="badge ' + archBadgeClass + '">' + m.arch + '</span>',
      '      <span class="badge badge-type">' + m.type + '</span>',
      '    </div>',
      '    <div class="card-cluster-tag" title="' + escapeHtml(displayCat) + '">' + escapeHtml(displayCat) + '</div>',
      '  </div>',
      '  <div class="card-body">',
      '    <div class="card-filename" title="' + escapeHtml(m.filename) + '">' + escapeHtml(m.filename) + '</div>',
      '    <div class="card-title" title="' + escapeHtml(m.title) + '">' + escapeHtml(m.title || m.filename) + '</div>',
      '    <div class="card-triggers">',
      '      <div class="triggers-header">',
      '        <span>Trigger Words (' + triggersCount + ')</span>',
      '        ' + copyBtn,
      '      </div>',
      '      <div class="trigger-chips-wrap">' + triggersPreview + moreChip + '</div>',
      '    </div>',
      '    <div class="card-footer">',
      '      <button class="btn btn-secondary view-details-btn" data-id="' + m.id + '"' +
      '        aria-label="Lihat detail ' + escapeHtml(m.filename) + '">' +
      '        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>' +
      '        Detail</button>',
      '      <a href="' + m.url + '" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"' +
      '        aria-label="Buka ' + escapeHtml(m.filename) + ' di Civitai">' +
      '        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>' +
      '        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' +
      '        Civitai</a>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join('\n');
  }

  //  Card Events 
  function attachCardEvents() {
    document.querySelectorAll('.card-fav-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var mId = btn.getAttribute('data-id');
        var model = modelsData.find(function(m) { return String(m.id) === mId; });
        toggleFavorite(mId, model ? model.filename : '');
      });
    });

    document.querySelectorAll('.copy-triggers-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var model = modelsData.find(function(m) { return String(m.id) === btn.getAttribute('data-id'); });
        if (model && model.tw && model.tw.length > 0) {
          navigator.clipboard.writeText(model.tw.join(', ')).then(function() {
            showToast('\u2728 Trigger words <b>' + escapeHtml(model.filename) + '</b> berhasil disalin!');
          });
        }
      });
    });

    document.querySelectorAll('.view-details-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var model = modelsData.find(function(m) { return String(m.id) === btn.getAttribute('data-id'); });
        if (model) openModal(model);
      });
    });
  }

  //  ==================================================================
  // NUMBERED PAGINATION
  //  ==================================================================

  function renderPagination(totalPages) {
    prevPageBtn.disabled = state.page <= 1;
    nextPageBtn.disabled = state.page >= totalPages;

    pageInfo.textContent = state.page + ' / ' + totalPages;

    // Remove old dynamic buttons
    paginationWrap.querySelectorAll('.page-num-btn, .page-ellipsis').forEach(function(el) { el.remove(); });

    if (totalPages <= 1) return;

    var range    = buildPageRange(state.page, totalPages);
    var fragment = document.createDocumentFragment();

    range.forEach(function(item) {
      if (item === '...') {
        var el = document.createElement('span');
        el.className   = 'page-ellipsis';
        el.textContent = '\u2026';
        fragment.appendChild(el);
      } else {
        var btn = document.createElement('button');
        btn.className   = 'page-btn page-num-btn' + (item === state.page ? ' active' : '');
        btn.textContent = item;
        btn.disabled    = item === state.page;
        btn.setAttribute('aria-label', 'Halaman ' + item);
        if (item === state.page) btn.setAttribute('aria-current', 'page');
        btn.addEventListener('click', function() {
          state.page = item;
          applyFiltersAndRender();
          scrollToGrid();
          updateURL();
        });
        fragment.appendChild(btn);
      }
    });

    pageInfo.parentNode.insertBefore(fragment, pageInfo);
  }

  function buildPageRange(current, total) {
    if (total <= 7) {
      var arr = [];
      for (var i = 1; i <= total; i++) arr.push(i);
      return arr;
    }
    if (current <= 4)         return [1, 2, 3, 4, 5, '...', total];
    if (current >= total - 3) return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
    return [1, '...', current - 1, current, current + 1, '...', total];
  }

  function scrollToGrid() {
    var grid = document.getElementById('gridContainer');
    if (grid) {
      var top = grid.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  }

  //  ==================================================================
  // MODAL with FOCUS TRAP
  //  ==================================================================

  var _trapFirst = null, _trapLast = null;

  function setupFocusTrap(container) {
    var focusable = Array.from(container.querySelectorAll(
      'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
    ));
    _trapFirst = focusable[0];
    _trapLast  = focusable[focusable.length - 1];
  }

  function handleTrap(e) {
    if (e.key !== 'Tab') return;
    if (e.shiftKey) {
      if (document.activeElement === _trapFirst) { e.preventDefault(); if (_trapLast) _trapLast.focus(); }
    } else {
      if (document.activeElement === _trapLast)  { e.preventDefault(); if (_trapFirst) _trapFirst.focus(); }
    }
  }

  function openModal(m) {
    var displayCat = getDisplayCat(m);

    document.getElementById('modalTitle').textContent = m.filename;
    document.getElementById('modalCivitaiTitle').textContent = m.title || m.filename;
    document.getElementById('modalCivitaiTitle').href        = m.url  || '#';
    document.getElementById('modalArchBadge').textContent   = m.arch;
    document.getElementById('modalArchBadge').className     = 'badge ' + (m.arch === 'ANIMA' ? 'badge-anima' : 'badge-sdxl');
    document.getElementById('modalTypeBadge').textContent   = m.type;
    document.getElementById('modalBaseModel').textContent   = m.base || m.arch;
    document.getElementById('modalCategory').textContent    = m.header ? m.header.replace(/^#\s*/, '').replace(/https?:\/\/[^\s]+/g, '').trim() : displayCat;
    document.getElementById('modalCell').textContent        = 'Cell ' + m.cell;
    document.getElementById('modalTarget').textContent      = m.target;

    // Modal Favorite Button
    if (modalFavBtn) {
      modalFavBtn.setAttribute('data-id', String(m.id));
      var isFav = favorites.has(String(m.id));
      modalFavBtn.classList.toggle('active', isFav);
      modalFavBtn.setAttribute('title', isFav ? 'Hapus dari favorit' : 'Simpan ke favorit');
      var modalFavSvg = modalFavBtn.querySelector('svg');
      if (modalFavSvg) {
        modalFavSvg.style.fill = isFav ? '#ec4899' : 'none';
        modalFavSvg.style.stroke = isFav ? '#ec4899' : 'currentColor';
      }
      modalFavBtn.onclick = function() {
        toggleFavorite(m.id, m.filename);
      };
    }

    // Modal Format Fooocus Button
    if (modalCopyFooocus) {
      var loraName = m.filename.replace(/\.(safetensors|pt|ckpt)$/i, '');
      var fooocusStr = (m.tw && m.tw.length > 0)
        ? '<lora:' + loraName + ':0.8>, ' + m.tw.join(', ')
        : '<lora:' + loraName + ':0.8>';
      modalCopyFooocus.onclick = function() {
        navigator.clipboard.writeText(fooocusStr).then(function() {
          showToast('✨ Format Fooocus disalin: <code>' + escapeHtml(fooocusStr) + '</code>');
        });
      };
    }

    var modalMediaWrap = document.querySelector('.modal-img-wrap');
    if (m.img) {
      modalMediaWrap.style.display = 'flex';
      if (m.img.endsWith('.mp4')) {
        modalMediaWrap.innerHTML = '<video id="modalImage" class="modal-img" src="' + m.img + '" autoplay loop muted playsinline controls></video>';
      } else {
        modalMediaWrap.innerHTML = '<img id="modalImage" class="modal-img" src="' + m.img + '" alt="Preview">';
      }
    } else {
      modalMediaWrap.style.display = 'flex';
      modalMediaWrap.innerHTML = [
        '<div class="card-img-placeholder" style="min-height:180px;border-radius:var(--radius-md);width:100%;">',
        '<span style="font-size:3rem;">\uD83D\uDDBC\uFE0F</span>',
        '<span style="font-size:.85rem;color:var(--text-muted);margin-top:8px;">Preview tidak tersedia</span>',
        '</div>'
      ].join('');
    }

    // Triggers
    var triggersWrap  = document.getElementById('modalTriggers');
    var triggersTitle = document.getElementById('modalTriggersTitle');
    var triggersCount = m.tw ? m.tw.length : 0;
    if (triggersTitle) triggersTitle.textContent = 'Trigger Words (' + triggersCount + ')';

    if (m.tw && m.tw.length > 0) {
      triggersWrap.className = 'modal-triggers-container';
      triggersWrap.innerHTML = m.tw.map(function(t) {
        return '<div class="modal-trigger-item" title="Klik untuk salin">' +
          '<span class="modal-trigger-text">' + escapeHtml(t) + '</span>' +
          '<span class="modal-trigger-copy-hint">' +
          '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<rect x="9" y="9" width="13" height="13" rx="2"/>' +
          '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Salin</span>' +
          '</div>';
      }).join('');

      triggersWrap.querySelectorAll('.modal-trigger-item').forEach(function(item, idx) {
        item.addEventListener('click', function() {
          navigator.clipboard.writeText(m.tw[idx]).then(function() {
            showToast('Disalin: <code>' + escapeHtml(m.tw[idx]) + '</code>');
          });
        });
      });
      var copyAllBtn = document.getElementById('modalCopyAllTriggers');
      copyAllBtn.style.display = 'inline-flex';
      copyAllBtn.onclick = function() {
        navigator.clipboard.writeText(m.tw.join(', ')).then(function() {
          showToast('Semua trigger words (' + m.tw.length + ') berhasil disalin!');
        });
      };
    } else {
      triggersWrap.className = '';
      triggersWrap.innerHTML = '<span class="no-trigger" style="font-size:.9rem;">Tidak ada trigger words khusus.</span>';
      document.getElementById('modalCopyAllTriggers').style.display = 'none';
    }

    var promptWrap = document.getElementById('modalPromptWrap');
    if (m.prompt) {
      promptWrap.style.display = 'block';
      document.getElementById('modalPrompt').textContent = m.prompt;
      document.getElementById('modalCopyPrompt').onclick = function() {
        navigator.clipboard.writeText(m.prompt).then(function() { showToast('Sample prompt berhasil disalin!'); });
      };
    } else {
      promptWrap.style.display = 'none';
    }

    document.getElementById('modalSampler').textContent = m.sampler || '-';
    document.getElementById('modalSteps').textContent   = m.steps   || '-';
    document.getElementById('modalCfg').textContent     = m.cfg     || '-';
    document.getElementById('modalCivitaiBtn').href     = m.url     || '#';

    detailModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    setupFocusTrap(document.querySelector('.modal-content'));
    document.addEventListener('keydown', handleTrap);
    setTimeout(function() { if (closeModalBtn) closeModalBtn.focus(); }, 60);
  }

  function closeModal() {
    detailModal.classList.remove('open');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleTrap);
  }

  //  ==================================================================
  // TOAST
  //  ==================================================================

  function showToast(message) {
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = [
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
      '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
      '<div>' + message + '</div>'
    ].join('');
    toastContainer.appendChild(toast);
    setTimeout(function() {
      toast.style.opacity   = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all .3s ease';
      setTimeout(function() { toast.remove(); }, 300);
    }, 2800);
  }

  //  ==================================================================
  // BACK TO TOP
  //  ==================================================================

  if (backToTopBtn) {
    window.addEventListener('scroll', function() {
      backToTopBtn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  //  ==================================================================
  // CUSTOM GLASSMORPHIC SORT DROPDOWN
  //  ==================================================================

  function updateCustomSortUI(val) {
    if (!sortDropdownMenu) return;
    var options = sortDropdownMenu.querySelectorAll('.custom-select-option');
    options.forEach(function(opt) {
      var match = opt.getAttribute('data-value') === val;
      opt.classList.toggle('selected', match);
      opt.setAttribute('aria-selected', match ? 'true' : 'false');
      if (match) {
        if (sortDropdownLabel) {
          var textEl = opt.querySelector('.option-text');
          sortDropdownLabel.textContent = textEl ? textEl.textContent : opt.textContent.trim();
        }
        if (sortDropdownCurrentIcon) {
          var iconEl = opt.querySelector('.option-icon svg');
          if (iconEl) {
            sortDropdownCurrentIcon.innerHTML = iconEl.outerHTML;
          }
        }
      }
    });
  }

  function openCustomSortDropdown() {
    if (!sortDropdownWrap || !sortDropdownTrigger) return;
    sortDropdownWrap.classList.add('open');
    sortDropdownTrigger.setAttribute('aria-expanded', 'true');
  }

  function closeCustomSortDropdown() {
    if (!sortDropdownWrap || !sortDropdownTrigger) return;
    sortDropdownWrap.classList.remove('open');
    sortDropdownTrigger.setAttribute('aria-expanded', 'false');
  }

  function initCustomSortDropdown() {
    if (!sortDropdownWrap || !sortDropdownTrigger || !sortDropdownMenu) return;

    updateCustomSortUI(state.sort);

    // Toggle dropdown open/close on trigger click
    sortDropdownTrigger.addEventListener('click', function(e) {
      e.stopPropagation();
      var isOpen = sortDropdownWrap.classList.contains('open');
      if (isOpen) {
        closeCustomSortDropdown();
      } else {
        openCustomSortDropdown();
      }
    });

    // Option items click & keyboard
    sortDropdownMenu.querySelectorAll('.custom-select-option').forEach(function(opt) {
      opt.addEventListener('click', function(e) {
        e.stopPropagation();
        var val = opt.getAttribute('data-value');
        if (val) {
          state.sort = val;
          if (sortSelect) sortSelect.value = val;
          updateCustomSortUI(val);
          closeCustomSortDropdown();
          sortDropdownTrigger.focus();
          state.page = 1;
          applyFiltersAndRender();
          updateURL();
        }
      });

      opt.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          opt.click();
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          var next = opt.nextElementSibling;
          if (next && next.classList.contains('custom-select-option')) next.focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          var prev = opt.previousElementSibling;
          if (prev && prev.classList.contains('custom-select-option')) prev.focus();
        } else if (e.key === 'Escape') {
          closeCustomSortDropdown();
          sortDropdownTrigger.focus();
        }
      });
    });

    // Keyboard support on the trigger button
    sortDropdownTrigger.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCustomSortDropdown();
        var selected = sortDropdownMenu.querySelector('.custom-select-option.selected') || sortDropdownMenu.firstElementChild;
        if (selected) selected.focus();
      }
    });

    // Close on click outside
    document.addEventListener('click', function(e) {
      if (sortDropdownWrap && !sortDropdownWrap.contains(e.target)) {
        closeCustomSortDropdown();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && sortDropdownWrap.classList.contains('open')) {
        closeCustomSortDropdown();
        sortDropdownTrigger.focus();
      }
    });
  }

  //  ==================================================================
  // EVENT LISTENERS
  //  ==================================================================

  searchInput.addEventListener('input', function(e) {
    state.search = e.target.value;
    state.page = 1;
    clearSearchBtn.style.display = state.search ? 'block' : 'none';
    if (searchShortcutHint) searchShortcutHint.style.display = state.search ? 'none' : 'flex';
    applyFiltersAndRender();
    updateURL();
  });

  clearSearchBtn.addEventListener('click', function() {
    searchInput.value = '';
    state.search = '';
    state.page = 1;
    clearSearchBtn.style.display = 'none';
    if (searchShortcutHint) searchShortcutHint.style.display = 'flex';
    searchInput.focus();
    applyFiltersAndRender();
    updateURL();
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', function(e) {
      state.sort = e.target.value;
      updateCustomSortUI(state.sort);
      state.page = 1;
      applyFiltersAndRender();
      updateURL();
    });
  }

  document.querySelectorAll('#archFilters .pill-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('#archFilters .pill-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      state.arch = btn.getAttribute('data-arch');
      state.page = 1;
      applyFiltersAndRender();
      updateURL();
    });
  });

  document.querySelectorAll('#typeFilters .pill-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('#typeFilters .pill-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      state.type = btn.getAttribute('data-type');
      state.page = 1;
      applyFiltersAndRender();
      updateURL();
    });
  });

  // Favorite filter pill
  if (filterFavBtn) {
    filterFavBtn.addEventListener('click', function() {
      state.favOnly = !state.favOnly;
      filterFavBtn.classList.toggle('active', state.favOnly);
      state.page = 1;
      applyFiltersAndRender();
      updateURL();
    });
  }

  // Trigger presence filters
  document.querySelectorAll('#triggerFilters .pill-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('#triggerFilters .pill-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      state.twFilter = btn.getAttribute('data-tw') || 'all';
      state.page = 1;
      applyFiltersAndRender();
      updateURL();
    });
  });

  // Per page selector
  document.querySelectorAll('.per-page-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var val = btn.getAttribute('data-perpage') || btn.getAttribute('data-count');
      var count = val === 'all' ? 99999 : (parseInt(val, 10) || 36);
      if (state.perPage === count) return;
      state.perPage = count;
      try { localStorage.setItem('colabfoocus_perpage', val); } catch(e) {}
      document.querySelectorAll('.per-page-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      state.page = 1;
      applyFiltersAndRender();
    });
  });

  // View mode switcher (Grid vs Compact List)
  if (viewGridBtn && viewListBtn) {
    viewGridBtn.addEventListener('click', function() {
      if (state.viewMode === 'grid') return;
      state.viewMode = 'grid';
      try { localStorage.setItem('colabfoocus_view', 'grid'); } catch(e) {}
      viewGridBtn.classList.add('active');
      viewListBtn.classList.remove('active');
      if (gridContainer) gridContainer.classList.remove('list-view');
      applyFiltersAndRender();
    });

    viewListBtn.addEventListener('click', function() {
      if (state.viewMode === 'list') return;
      state.viewMode = 'list';
      try { localStorage.setItem('colabfoocus_view', 'list'); } catch(e) {}
      viewListBtn.classList.add('active');
      viewGridBtn.classList.remove('active');
      if (gridContainer) gridContainer.classList.add('list-view');
      applyFiltersAndRender();
    });
  }

  prevPageBtn.addEventListener('click', function() {
    if (state.page > 1) {
      state.page--;
      applyFiltersAndRender();
      scrollToGrid();
      updateURL();
    }
  });

  nextPageBtn.addEventListener('click', function() {
    var totalPages = Math.ceil(getFilteredModels().length / state.perPage);
    if (state.page < totalPages) {
      state.page++;
      applyFiltersAndRender();
      scrollToGrid();
      updateURL();
    }
  });

  closeModalBtn.addEventListener('click', closeModal);
  detailModal.addEventListener('click', function(e) {
    if (e.target === detailModal) closeModal();
  });

  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && detailModal.classList.contains('open')) closeModal();
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  //  ==================================================================
  // INITIAL LOAD
  //  ==================================================================

  initFromURL();
  initCustomSortDropdown();
  renderClusterFilters();
  initStats();

  // Restore View Mode
  if (state.viewMode === 'list') {
    if (gridContainer) gridContainer.classList.add('list-view');
    if (viewListBtn) viewListBtn.classList.add('active');
    if (viewGridBtn) viewGridBtn.classList.remove('active');
  } else {
    if (gridContainer) gridContainer.classList.remove('list-view');
    if (viewGridBtn) viewGridBtn.classList.add('active');
    if (viewListBtn) viewListBtn.classList.remove('active');
  }

  // Restore Per-Page Active UI
  document.querySelectorAll('.per-page-btn').forEach(function(btn) {
    var val = btn.getAttribute('data-perpage') || btn.getAttribute('data-count');
    var isAll = val === 'all' && state.perPage >= 99999;
    var isCount = parseInt(val, 10) === state.perPage;
    btn.classList.toggle('active', isAll || isCount);
  });

  // Update favorites counter badge
  updateFavCounter();

  applyFiltersAndRender();

})();


