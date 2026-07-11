# Source images

Masters, kept in git but **not published**. Jekyll skips underscore-prefixed
directories, so nothing here is copied into `_site/` or served.

Put full-resolution originals here and derive the serving crops into
`assets/img/` (WebP, sized per breakpoint). Never put a master in `assets/` —
Jekyll copies that directory wholesale, and an unreferenced multi-megabyte file
would ship to every visitor's browser cache budget for nothing.

| File | Derived into |
|---|---|
| `hero-hospital-v2.png` | `assets/img/hero-hospital-{wide,tall}-*.webp` |
