# Setup Guide

This guide will help you set up and deploy **Awesome CloudNatives** to GitHub Pages.

## Prerequisites

- Node.js 18+ installed
- Git installed
- A GitHub account

## Quick Start

### 1. Fork or Clone

If this is your own repository:
```bash
git clone https://github.com/nimeshmora/awesome-cloudnatives.git
cd awesome-cloudnatives
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Update Configuration

Edit `astro.config.mjs` and update these values:

```javascript
export default defineConfig({
  site: 'https://nimeshmora.github.io',
  base: '/awesome-cloudnatives',  // Or '/' if using a custom domain
  // ...
});
```

### 4. Update Links in Code

Search and replace `YOUR-USERNAME` with your actual GitHub username in:
- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`
- `src/pages/about.astro`
- `README.md`
- `CONTRIBUTING.md`

You can do this quickly with:
```bash
# On macOS/Linux
find . -type f \( -name "*.astro" -o -name "*.md" \) -exec sed -i '' 's/YOUR-USERNAME/your-actual-username/g' {} +

# On Linux (without macOS)
find . -type f \( -name "*.astro" -o -name "*.md" \) -exec sed -i 's/YOUR-USERNAME/your-actual-username/g' {} +
```

### 5. Test Locally

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### 6. Build

```bash
npm run build
```

This will:
- Build the Astro site
- Run Pagefind to generate search index
- Output everything to `dist/`

### 7. Deploy to GitHub Pages

#### Option A: Automatic Deployment (Recommended)

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: **GitHub Actions**

3. The `.github/workflows/deploy.yml` will automatically:
   - Build your site on every push to `main`
   - Deploy to GitHub Pages

#### Option B: Manual Deployment

If you prefer to deploy manually:

```bash
npm run build
npx gh-pages -d dist
```

### 8. Configure Custom Domain (Optional)

If you have a custom domain:

1. Add a `CNAME` file to `public/`:
   ```bash
   echo "yourdomain.com" > public/CNAME
   ```

2. Update `astro.config.mjs`:
   ```javascript
   export default defineConfig({
     site: 'https://yourdomain.com',
     base: '/',
   });
   ```

3. Configure DNS:
   - Add a CNAME record pointing to `YOUR-USERNAME.github.io`
   - Or A records pointing to GitHub's IPs

## Validation

Before deploying, validate your data:

```bash
npm run validate
```

This checks:
- JSON syntax
- Duplicate entries
- Required fields
- Data integrity

## Troubleshooting

### Build Fails

**Issue:** `npm run build` fails

**Solutions:**
- Check Node.js version: `node --version` (needs 18+)
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for JSON syntax errors in `data/influencers/`

### GitHub Pages Not Updating

**Issue:** Changes don't appear on the live site

**Solutions:**
- Check GitHub Actions tab for build errors
- Ensure Pages is configured to use "GitHub Actions" as source
- Clear browser cache
- Wait 2-3 minutes for deployment to complete

### Search Not Working

**Issue:** Pagefind search doesn't work

**Solutions:**
- Ensure `npm run build` completed successfully
- Check that `dist/pagefind/` directory exists after build
- Verify Pagefind script is loaded in browser DevTools

### Links Broken

**Issue:** Navigation links return 404

**Solutions:**
- Verify `base` in `astro.config.mjs` matches your repo name
- Check if you're using a custom domain (base should be `/`)
- Ensure trailing slashes are configured correctly

## Directory Structure

```
awesome-cloudnatives/
├── .github/
│   ├── workflows/          # GitHub Actions
│   │   ├── deploy.yml      # Auto-deploy to Pages
│   │   ├── validate-pr.yml # PR validation
│   │   └── welcome.yml     # Welcome first-timers
│   ├── ISSUE_TEMPLATE/     # Issue templates
│   └── PULL_REQUEST_TEMPLATE.md
├── data/
│   ├── categories.json     # Category definitions
│   ├── schema.json         # JSON Schema for validation
│   └── influencers/        # Influencer profiles (JSON)
│       ├── kubernetes/
│       ├── aws/
│       ├── azure/
│       └── ...
├── public/
│   ├── favicon.svg
│   └── images/
├── scripts/
│   └── validate-data.js    # Validation script
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro     # Homepage
│   │   ├── about.astro     # About page
│   │   └── influencers/
│   │       └── [id].astro  # Profile pages
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

## Development Workflow

### Adding a New Influencer

1. Create JSON file in appropriate category:
   ```bash
   cp data/influencers/kubernetes/kelsey-hightower.json \
      data/influencers/kubernetes/new-person.json
   ```

2. Edit the file with their info

3. Validate:
   ```bash
   npm run validate
   ```

4. Test locally:
   ```bash
   npm run dev
   ```

5. Commit and push (or submit PR if contributing to someone else's repo)

### Modifying the Site

1. Edit files in `src/`
2. Changes hot-reload at `localhost:4321`
3. Check styling in `src/styles/global.css`
4. Test build before pushing: `npm run build`

## Environment Variables

Currently, no environment variables are needed. All configuration is in:
- `astro.config.mjs` - Site configuration
- `package.json` - Scripts and dependencies
- `data/` - Content

## Performance

The site is optimized for performance:

- ⚡ **Static generation**: All pages pre-built at build time
- 🔍 **Lazy search**: Pagefind loads search index on-demand
- 📦 **Minimal JS**: Only interactive features ship JavaScript
- 🎨 **CSS only**: Styling is pure CSS, no framework overhead
- 🖼️ **Lazy images**: Avatar images load lazily

## Maintenance

### Regular Tasks

- **Review PRs**: Aim for 7-day turnaround
- **Update dependencies**: Monthly `npm update`
- **Check broken links**: GitHub Actions will catch these
- **Monitor Issues**: Respond to bug reports and suggestions

### Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update all dependencies
npm update

# Test after updating
npm run build
npm run preview
```

## Support

- **Issues**: [GitHub Issues](https://github.com/nimeshmora/awesome-cloudnatives/issues)
- **Discussions**: [GitHub Discussions](https://github.com/nimeshmora/awesome-cloudnatives/discussions)
- **Contributing**: [CONTRIBUTING.md](CONTRIBUTING.md)

---

Need help? Open an issue or check the [Astro docs](https://docs.astro.build) for framework-specific questions.
