# FRAME Technology Platform Demo

> Interactive demo of the FRAME technology stack — platforms, analytics, networks, narratives.

**🔗 Live demo:** https://doron-arch.github.io/frame-technology-demo/

## Overview

This demo walks through the FRAME technology platform: data ingestion from social platforms, network analysis, narrative classification, and partner-specific views. Built as a single-page vanilla JS site with no build step.

## Screenshots

> _TODO: add screenshots to `docs/screenshots/` and uncomment the lines below._

<!--
![Overview](docs/screenshots/overview.png)
![Platform view](docs/screenshots/platform.png)
![Deep-linked state](docs/screenshots/deep-link.png)
-->

## Deep-linking

Demo state can be shared via URL query parameters:

| Param      | Values                                                           | Example                  |
| ---------- | ---------------------------------------------------------------- | ------------------------ |
| `platform` | `Telegram`, `X`, `Facebook`, `TikTok`, `YouTube`, `Instagram`    | `?platform=Telegram`     |
| `mode`     | `posts`, `networks`, `narratives`                                | `?mode=networks`         |

Combine freely: `?platform=X&mode=narratives`. Invalid or unknown params are stripped from the URL automatically.

## Tech stack

- Vanilla JavaScript (no build step)
- HTML + CSS (custom design tokens)
- GitHub Pages hosting
- Shared schemas via `js/frame-schemas.js` (globals, single source of truth across FRAME repos)

## Local development

    git clone https://github.com/doron-arch/frame-technology-demo.git
    cd frame-technology-demo
    # any static file server works, e.g.:
    python3 -m http.server 8000
    # open http://localhost:8000

## Project structure

    .
    ├── index.html
    ├── css/
    ├── js/
    │   ├── frame-schemas.js       # shared enums + typedefs
    │   ├── nav.js                 # navigation / view switching
    │   ├── deep-link.js           # URL query-param sync (Phase 6b)
    │   └── ...                    # module scripts per view
    └── docs/screenshots/          # (TODO)

## Related FRAME repos

- [dashboard](https://github.com/doron-arch/dashboard) — FRAME Shared Analytics (vanilla JS) · [live](https://doron-arch.github.io/dashboard/)
- [frame-dashboard](https://github.com/doron-arch/frame-dashboard) — FRAME operational dashboard (Vite + React) · [live](https://doron-arch.github.io/frame-dashboard/)

## License

All rights reserved © FRAME.
