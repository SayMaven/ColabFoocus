// ══════════════════════════════════════════════════════════════════
// Foocus SayMaven Model Hub — Interactive Logic
// ══════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  const modelsData = window.COLAB_MODELS || [];

  // State
  let state = {
    search: '',
    arch: 'all',
    type: 'all',
    cluster: 'all',
    sort: 'notebook',
    page: 1,
    perPage: 36
  };

  // DOM Elements
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearch');
  const sortSelect = document.getElementById('sortSelect');
  const archFilters = document.getElementById('archFilters');
  const typeFilters = document.getElementById('typeFilters');
  const clusterScroll = document.getElementById('clusterScroll');
  const gridContainer = document.getElementById('gridContainer');
  const resultsCount = document.getElementById('resultsCount');
  const paginationWrap = document.getElementById('paginationWrap');
  const prevPageBtn = document.getElementById('prevPageBtn');
  const nextPageBtn = document.getElementById('nextPageBtn');
  const pageInfo = document.getElementById('pageInfo');
  const detailModal = document.getElementById('detailModal');
  const closeModalBtn = document.getElementById('closeModal');
  const toastContainer = document.getElementById('toastContainer');

  // Stats Counters
  document.getElementById('statTotal').textContent = modelsData.length;
  document.getElementById('statTriggers').textContent = modelsData.filter(m => m.tw && m.tw.length > 0).length;
  document.getElementById('statCheckpoints').textContent = modelsData.filter(m => m.type === 'Checkpoint').length;
  document.getElementById('statAnima').textContent = modelsData.filter(m => m.arch === 'ANIMA').length;
  document.getElementById('statSdxl').textContent = modelsData.filter(m => m.arch === 'SDXL').length;

  // Generate Cluster Buttons
  const popularClusters = [
    { label: 'Semua Seri', id: 'all' },
    { label: '🎸 BanG Dream!', match: 'bangdream' },
    { label: '🌌 HoYoverse', match: 'honkai|zenless|genshin' },
    { label: '💙 Blue Archive', match: 'blue archive' },
    { label: '🎵 Music Anime', match: 'gbc|bocchi|k-on' },
    { label: '🎤 Project Sekai', match: 'project sekai' },
    { label: '⭐ Idolm@ster', match: 'idolm@ster|idolmaster' },
    { label: '🌸 Yuri / Romcom', match: 'watanare|wataten|roshidere|citrus|yagate' },
    { label: '🛠️ Tool & Poses', match: 'tool|poses|concept|clothing' },
    { label: '🎨 Art Styles', match: 'style|favorite' },
    { label: '🎲 Random Chara', match: 'random character' }
  ];

  function renderClusterFilters() {
    clusterScroll.innerHTML = '';
    popularClusters.forEach(item => {
      const btn = document.createElement('button');
      btn.className = `pill-btn ${state.cluster === (item.match || item.id) ? 'active' : ''}`;
      btn.textContent = item.label;
      btn.addEventListener('click', () => {
        state.cluster = item.match || item.id;
        state.page = 1;
        document.querySelectorAll('#clusterScroll .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyFiltersAndRender();
      });
      clusterScroll.appendChild(btn);
    });
  }

  // Filter & Sort Logic
  function getFilteredModels() {
    const q = state.search.trim().toLowerCase();

    return modelsData.filter(m => {
      // Arch filter
      if (state.arch !== 'all' && m.arch !== state.arch) return false;

      // Type filter
      if (state.type !== 'all' && m.type !== state.type) return false;

      // Cluster filter
      if (state.cluster !== 'all') {
        const regex = new RegExp(state.cluster, 'i');
        const inHeader = regex.test(m.header || '');
        const inCat = regex.test(m.cat || '');
        const inName = regex.test(m.filename || '');
        if (!inHeader && !inCat && !inName) return false;
      }

      // Search query
      if (q) {
        const inName = (m.filename || '').toLowerCase().includes(q);
        const inTitle = (m.title || '').toLowerCase().includes(q);
        const inCat = (m.cat || '').toLowerCase().includes(q);
        const inHeader = (m.header || '').toLowerCase().includes(q);
        const inTriggers = (m.tw || []).some(t => t.toLowerCase().includes(q));
        if (!inName && !inTitle && !inCat && !inHeader && !inTriggers) return false;
      }

      return true;
    }).sort((a, b) => {
      if (state.sort === 'notebook') {
        return a.cell - b.cell;
      } else if (state.sort === 'name-asc') {
        return a.filename.localeCompare(b.filename);
      } else if (state.sort === 'name-desc') {
        return b.filename.localeCompare(a.filename);
      } else if (state.sort === 'triggers-desc') {
        return (b.tw ? b.tw.length : 0) - (a.tw ? a.tw.length : 0);
      } else if (state.sort === 'arch') {
        return a.arch.localeCompare(b.arch);
      }
      return 0;
    });
  }

  // Render Grid
  function applyFiltersAndRender() {
    const filtered = getFilteredModels();
    resultsCount.textContent = `Menampilkan ${filtered.length} dari ${modelsData.length} model`;

    const totalPages = Math.ceil(filtered.length / state.perPage) || 1;
    if (state.page > totalPages) state.page = totalPages;

    const startIdx = (state.page - 1) * state.perPage;
    const paginated = filtered.slice(startIdx, startIdx + state.perPage);

    // Update Pagination UI
    pageInfo.textContent = `Halaman ${state.page} dari ${totalPages}`;
    prevPageBtn.disabled = state.page <= 1;
    nextPageBtn.disabled = state.page >= totalPages;

    if (paginated.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 12px; opacity: 0.5;">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3 style="color: #cbd5e1; margin-bottom: 6px;">Tidak ada model yang cocok</h3>
          <p style="font-size: 0.9rem;">Coba ubah kata kunci pencarian atau reset filter di atas.</p>
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = paginated.map(m => createCardHTML(m)).join('');

    // Attach card event listeners
    attachCardEvents();
  }

  // Card HTML Template
  function createCardHTML(m) {
    const archBadgeClass = m.arch === 'ANIMA' ? 'badge-anima' : 'badge-sdxl';
    const triggersCount = m.tw ? m.tw.length : 0;
    const triggersPreview = m.tw && m.tw.length > 0
      ? m.tw.slice(0, 3).map(t => `<span class="trigger-chip" title="${escapeHtml(t)}">${escapeHtml(t)}</span>`).join('')
      : `<span class="no-trigger">Tidak ada trigger khusus</span>`;

    let mediaTag = `<div class="card-img-placeholder"><span>🖼️ Preview N/A</span></div>`;
    if (m.img) {
      if (m.img.endsWith('.mp4')) {
        mediaTag = `<video class="card-img" src="${m.img}" autoplay loop muted playsinline preload="metadata"></video>`;
      } else {
        mediaTag = `<img class="card-img" src="${m.img}" alt="${escapeHtml(m.filename)}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'card-img-placeholder\\'><span>🖼️ Preview N/A</span></div>'">`;
      }
    }

    return `
      <div class="model-card" data-id="${m.id}">
        <div class="card-img-wrap">
          ${mediaTag}
          <div class="card-badges">
            <span class="badge ${archBadgeClass}">${m.arch}</span>
            <span class="badge badge-type">${m.type}</span>
          </div>
          <div class="card-cluster-tag">${escapeHtml(m.cat || 'General')}</div>
        </div>

        <div class="card-body">
          <div class="card-filename" title="${escapeHtml(m.filename)}">${escapeHtml(m.filename)}</div>
          <div class="card-title" title="${escapeHtml(m.title)}">${escapeHtml(m.title || m.filename)}</div>

          <div class="card-triggers">
            <div class="triggers-header">
              <span>Trigger Words (${triggersCount})</span>
              ${triggersCount > 0 ? `
                <button class="btn-copy-chip copy-triggers-btn" data-id="${m.id}" title="Salin seluruh trigger words">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  Salin
                </button>
              ` : ''}
            </div>
            <div class="trigger-chips-wrap">
              ${triggersPreview}
              ${triggersCount > 3 ? `<span class="trigger-chip" style="opacity: 0.7;">+${triggersCount - 3} lagi</span>` : ''}
            </div>
          </div>

          <div class="card-footer">
            <button class="btn btn-secondary view-details-btn" data-id="${m.id}">
              <span>ℹ️ Detail</span>
            </button>
            <a href="${m.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" title="Buka halaman resmi di Civitai">
              <span>🌐 Civitai</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  // Attach Card Events
  function attachCardEvents() {
    // Copy Triggers button
    document.querySelectorAll('.copy-triggers-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const model = modelsData.find(m => String(m.id) === String(id));
        if (model && model.tw && model.tw.length > 0) {
          const text = model.tw.join(', ');
          navigator.clipboard.writeText(text).then(() => {
            showToast(`✨ Trigger kata kunci untuk <b>${escapeHtml(model.filename)}</b> berhasil disalin!`);
          });
        }
      });
    });

    // View Details button
    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const model = modelsData.find(m => String(m.id) === String(id));
        if (model) openModal(model);
      });
    });
  }

  // Modal Logic
  function openModal(m) {
    document.getElementById('modalTitle').textContent = m.filename;
    document.getElementById('modalCivitaiTitle').textContent = m.title || m.filename;
    document.getElementById('modalCivitaiTitle').href = m.url || '#';
    document.getElementById('modalArchBadge').textContent = m.arch;
    document.getElementById('modalArchBadge').className = `badge ${m.arch === 'ANIMA' ? 'badge-anima' : 'badge-sdxl'}`;
    document.getElementById('modalTypeBadge').textContent = m.type;
    document.getElementById('modalBaseModel').textContent = m.base || m.arch;
    document.getElementById('modalCategory').textContent = m.header || m.cat;
    document.getElementById('modalCell').textContent = `Cell ${m.cell}`;
    document.getElementById('modalTarget').textContent = m.target;

    // Image / Video Media
    const modalMediaWrap = document.querySelector('.modal-img-wrap');
    if (m.img) {
      modalMediaWrap.style.display = 'block';
      if (m.img.endsWith('.mp4')) {
        modalMediaWrap.innerHTML = `<video id="modalImage" class="modal-img" src="${m.img}" autoplay loop muted playsinline controls></video>`;
      } else {
        modalMediaWrap.innerHTML = `<img id="modalImage" class="modal-img" src="${m.img}" alt="Preview">`;
      }
    } else {
      modalMediaWrap.style.display = 'none';
    }

    // Triggers
    const triggersWrap = document.getElementById('modalTriggers');
    if (m.tw && m.tw.length > 0) {
      triggersWrap.innerHTML = m.tw.map(t => `
        <div class="trigger-chip" style="padding: 6px 10px; font-size: 0.85rem; cursor: pointer;" title="Klik untuk salin">
          ${escapeHtml(t)}
        </div>
      `).join('');
      // Click chip to copy
      triggersWrap.querySelectorAll('.trigger-chip').forEach((chip, idx) => {
        chip.addEventListener('click', () => {
          navigator.clipboard.writeText(m.tw[idx]).then(() => {
            showToast(`Disalin: <code>${escapeHtml(m.tw[idx])}</code>`);
          });
        });
      });
      document.getElementById('modalCopyAllTriggers').style.display = 'inline-flex';
      document.getElementById('modalCopyAllTriggers').onclick = () => {
        navigator.clipboard.writeText(m.tw.join(', ')).then(() => {
          showToast(`Semua trigger words (${m.tw.length}) berhasil disalin!`);
        });
      };
    } else {
      triggersWrap.innerHTML = '<span class="no-trigger" style="font-size: 0.9rem;">Tidak ada trigger words khusus.</span>';
      document.getElementById('modalCopyAllTriggers').style.display = 'none';
    }

    // Sample Prompt & Meta
    const promptWrap = document.getElementById('modalPromptWrap');
    if (m.prompt) {
      promptWrap.style.display = 'block';
      document.getElementById('modalPrompt').textContent = m.prompt;
      document.getElementById('modalCopyPrompt').onclick = () => {
        navigator.clipboard.writeText(m.prompt).then(() => {
          showToast('Sample prompt berhasil disalin!');
        });
      };
    } else {
      promptWrap.style.display = 'none';
    }

    // Parameters
    document.getElementById('modalSampler').textContent = m.sampler || '-';
    document.getElementById('modalSteps').textContent = m.steps || '-';
    document.getElementById('modalCfg').textContent = m.cfg || '-';

    // Civitai direct button
    document.getElementById('modalCivitaiBtn').href = m.url || '#';

    detailModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    detailModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Toast Notification
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <div>${message}</div>
    `;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // Helper Escape HTML
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Event Listeners
  searchInput.addEventListener('input', (e) => {
    state.search = e.target.value;
    state.page = 1;
    clearSearchBtn.style.display = state.search ? 'block' : 'none';
    applyFiltersAndRender();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.search = '';
    state.page = 1;
    clearSearchBtn.style.display = 'none';
    searchInput.focus();
    applyFiltersAndRender();
  });

  sortSelect.addEventListener('change', (e) => {
    state.sort = e.target.value;
    state.page = 1;
    applyFiltersAndRender();
  });

  // Architecture Filter Buttons
  document.querySelectorAll('#archFilters .pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#archFilters .pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.arch = btn.getAttribute('data-arch');
      state.page = 1;
      applyFiltersAndRender();
    });
  });

  // Model Type Filter Buttons
  document.querySelectorAll('#typeFilters .pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#typeFilters .pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.type = btn.getAttribute('data-type');
      state.page = 1;
      applyFiltersAndRender();
    });
  });

  // Pagination buttons
  prevPageBtn.addEventListener('click', () => {
    if (state.page > 1) {
      state.page--;
      applyFiltersAndRender();
      window.scrollTo({ top: document.querySelector('.controls-wrapper').offsetTop - 30, behavior: 'smooth' });
    }
  });

  nextPageBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(getFilteredModels().length / state.perPage);
    if (state.page < totalPages) {
      state.page++;
      applyFiltersAndRender();
      window.scrollTo({ top: document.querySelector('.controls-wrapper').offsetTop - 30, behavior: 'smooth' });
    }
  });

  // Modal Events
  closeModalBtn.addEventListener('click', closeModal);
  detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) closeModal();
  });

  // Hotkeys
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && detailModal.classList.contains('open')) {
      closeModal();
    }
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  // Initial Load
  renderClusterFilters();
  applyFiltersAndRender();

})();
