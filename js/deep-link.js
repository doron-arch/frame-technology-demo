// FRAME deep-linking for frame-technology-demo (Phase 6b)
// Reads URL query params on load and syncs changes back via history.replaceState.
(function () {
  var VALID_SECTIONS = ['adapt', 'pipeline', 'workflow'];
  var PLATFORM_VALUES = window.PLATFORMS ? Object.values(window.PLATFORMS) : [];
  var SEV_VALUES = window.SEVERITY ? Object.values(window.SEVERITY) : [];

  function readUrlState() {
    var p = new URLSearchParams(window.location.search);
    var rawSection = p.get('section');
    var section = VALID_SECTIONS.indexOf(rawSection) !== -1 ? rawSection : null;
    var rawPlatform = p.get('platform');
    var platform = PLATFORM_VALUES.indexOf(rawPlatform) !== -1 ? rawPlatform : null;
    var rawSev = p.get('severity');
    var severity = SEV_VALUES.indexOf(rawSev) !== -1 ? rawSev : null;
    return { section: section, platform: platform, severity: severity };
  }

  function currentSection() {
    // Which section is visible? Look for the active nav-tab.
    var active = document.querySelector('.nav-tab.active');
    if (!active) return 'adapt';
    var m = /showSection\(\s*['"]([^'"]+)['"]/.exec(active.getAttribute('onclick') || '');
    return m ? m[1] : 'adapt';
  }

  function writeUrlState() {
    var p = new URLSearchParams();
    var section = currentSection();
    if (section && section !== 'adapt') p.set('section', section);
    // Preserve platform/severity if they were in the URL originally (we don't re-derive them from UI).
    var current = new URLSearchParams(window.location.search);
    var platform = current.get('platform');
    if (platform && PLATFORM_VALUES.indexOf(platform) !== -1) p.set('platform', platform);
    var severity = current.get('severity');
    if (severity && SEV_VALUES.indexOf(severity) !== -1) p.set('severity', severity);
    var qs = p.toString();
    var newUrl = window.location.pathname + (qs ? '?' + qs : '') + window.location.hash;
    window.history.replaceState(null, '', newUrl);
  }
  window.writeUrlState = writeUrlState;

  function initDeepLink() {
    var state = readUrlState();

    // Activate section if specified and different from default.
    if (state.section && state.section !== 'adapt' && typeof window.showSection === 'function') {
      var btn = document.querySelector('.nav-tab[onclick*="showSection(\'' + state.section + '\'"]');
      if (btn) {
        window.showSection(state.section, btn);
      }
    }

    // Pre-fill adaptInput if platform provided.
    if (state.platform) {
      var input = document.getElementById('adaptInput');
      if (input) {
        input.value = state.platform.toUpperCase();
      }
    }

    // Clean URL: drop any invalid params that were passed in.
    writeUrlState();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDeepLink);
  } else {
    initDeepLink();
  }
})();
