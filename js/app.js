// ── DATE ──
document.getElementById('currentDate').textContent =
    new Date().toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });

// ── SIDEBAR MOBILE ──
const sidebar = document.getElementById('sidebar');
const mobileToggle = document.getElementById('mobileToggle');
const overlay = document.getElementById('sidebarOverlay');

mobileToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
});
overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
});

// ── SIDEBAR ACTIVE ──
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        e.currentTarget.classList.add('active');
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        }
    });
});

// ── TABS ──
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    });
});

// ── KPI EXPAND ──
const expandBtn = document.getElementById('expandKpi');
const subKpi = document.getElementById('subKpiContainer');
const kpiSub = document.querySelector('.kpi-sub');

expandBtn.addEventListener('click', () => {
    subKpi.classList.toggle('open');
    expandBtn.classList.toggle('rotated');
    kpiSub.classList.toggle('expanded');
    const isOpen = subKpi.classList.contains('open');
    expandBtn.innerHTML = isOpen
        ? 'Hide Details <i class="fas fa-chevron-down"></i>'
        : 'Show Details <i class="fas fa-chevron-down"></i>';
});

// ── FINANCIALS TOGGLE ──
document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.toggle-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('toggle-' + btn.dataset.target).classList.add('active');
    });
});

// ── FAB ──
const fabBtn = document.getElementById('fabBtn');
const fabMenu = document.getElementById('fabMenu');

fabBtn.addEventListener('click', () => {
    fabBtn.classList.toggle('open');
    fabMenu.classList.toggle('open');
});
document.addEventListener('click', (e) => {
    if (!fabBtn.contains(e.target) && !fabMenu.contains(e.target)) {
        fabBtn.classList.remove('open');
        fabMenu.classList.remove('open');
    }
});

// ── LOCAL STORAGE HELPERS ──
function saveData(key, data) {
    localStorage.setItem('tdqs_' + key, JSON.stringify(data));
}
function loadData(key, fallback) {
    try {
        const d = localStorage.getItem('tdqs_' + key);
        return d ? JSON.parse(d) : fallback;
    } catch { return fallback; }
}
