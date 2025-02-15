# Music Market

A Next.js project configured for GitHub Pages deployment.

## Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch. The deployment process is handled by GitHub Actions.

### Setup Steps

1. Create a new repository on GitHub
2. Push this code to your repository
3. Go to your repository Settings > Pages
4. In the "Build and deployment" section:
   - Set "Source" to "Deploy from a branch"
   - Set "Branch" to "gh-pages"
   - Click Save

The site will be available at: `https://[your-username].github.io/music-market`

### Manual Deployment

If you want to deploy manually:

```bash
# Install dependencies
bun install

# Build the project
bun run build

# The static files will be in the 'out' directory
```

## Development

To run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
