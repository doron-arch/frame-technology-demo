// ===== NAVIGATION =====
function showSection(id, tab) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (tab) tab.classList.add('active');
}

// ===== MODE TOGGLE =====
let isDark = true;
function toggleMode() {
  isDark = !isDark;
  document.body.classList.toggle('light-mode', !isDark);
  // Re-render workflow canvas with correct colors
  loadScenario(document.getElementById('scenarioSelect').value);
}
