# kbagalo.github.io

Personal site. Jekyll 4, no theme gem, no npm. Deployed to GitHub Pages by GitHub Actions.

## Local development

Ruby is pinned by `.ruby-version` (3.4.10, via rbenv).

```
bundle install
bundle exec jekyll serve
```

Then open <http://127.0.0.1:4000>.

## Editing

| I want to… | Edit |
| --- | --- |
| Add or change a selected-work entry | `_data/work.yml` — append a block, nothing else |
| Change the nav | `_includes/nav.html` (one place, all pages) |
| Change colors, type, spacing | `_sass/_base.scss` (tokens), `_type.scss`, `_layout.scss` |
| Change print output for the resume | `_sass/_print.scss` |
| Write a note | New file in `_posts/` named `YYYY-MM-DD-slug.md` with `layout: post` |
| Update the resume | `resume.md` for the web version, and drop a new PDF in `assets/` |

Plugins are limited to `jekyll-feed`, `jekyll-seo-tag`, and `jekyll-sitemap`.

## Deploying

Every push to `main` triggers `.github/workflows/pages.yml`, which builds with the
project's own `Gemfile` and deploys the result. `Gemfile.lock` carries both
`arm64-darwin` and `x86_64-linux` platforms so the Linux runner can resolve it.

**One-time setup:** in the repo on GitHub, go to **Settings → Pages → Build and
deployment → Source** and select **GitHub Actions** (not "Deploy from a branch").
Nothing deploys until this is set.

## Custom domain (later)

1. Buy the domain.
2. Add a file named `CNAME` at the repo root containing the bare domain, e.g. `example.com`.
3. At the DNS registrar, create four `A` records for the apex pointing at GitHub
   Pages' IPs — look up the current addresses in GitHub's "Managing a custom domain"
   docs at the time you do this, since they have changed before. For `www`, add a
   `CNAME` record pointing to `kbagalo.github.io`.
4. In **Settings → Pages**, enter the domain and wait for the DNS check to pass.
5. Tick **Enforce HTTPS** once the certificate is issued (can take up to 24 hours).
