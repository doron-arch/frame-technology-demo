// ===== NAVIGATION =====
function showSection(id, tab) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (tab) tab.classList.add('active');
  if (typeof window.writeUrlState === 'function') window.writeUrlState();
}

// ===== MODE TOGGLE =====
let isDark = true;
function toggleMode() {
  isDark = !isDark;
  document.body.classList.toggle('light-mode', !isDark);
  localStorage.setItem('frame-theme', isDark ? 'dark' : 'light');
  // Re-render workflow canvas with correct colors
  loadScenario(document.getElementById('scenarioSelect').value);
}

// ── Cross-tab theme sync ──
(function applyStoredTheme() {
  const saved = localStorage.getItem('frame-theme');
  let prefersDark;
  if (saved) {
    prefersDark = saved === 'dark';
  } else {
    prefersDark = !window.matchMedia('(prefers-color-scheme: light)').matches;
  }
  isDark = prefersDark;
  document.body.classList.toggle('light-mode', !prefersDark);
})();

window.addEventListener('storage', function(e) {
  if (e.key === 'frame-theme' && e.newValue) {
    const goLight = e.newValue === 'light';
    document.body.classList.toggle('light-mode', goLight);
    isDark = !goLight;
  }
});
