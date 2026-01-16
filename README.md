# Isolae Website

Premium EU swimwear with personalized fit.

## Pages

- `/` - Pre-launch waitlist page (current homepage)
- `/shop` - Shop collection page
- `/shop/the-essential` - The Essential one-piece product page
- `/shop/bikini-tops` - Bikini tops (Light & High Support) page

## Quick Deploy to Netlify (Easiest)

### Option 1: Drag & Drop (No coding required)

1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. First, build the project locally:
   ```bash
   npm install
   npm run build
   ```
3. Drag the `dist` folder to Netlify's deploy area
4. Done! You'll get a URL like `random-name.netlify.app`

### Option 2: Connect to GitHub (Automatic deploys)

1. Push this folder to a GitHub repository
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import an existing project"
3. Connect your GitHub and select the repo
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click Deploy!

## Quick Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Push this folder to GitHub
3. Import the repo in Vercel
4. It auto-detects Vite - just click Deploy!

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
isolae-website/
├── public/
│   ├── favicon.svg
│   └── _redirects      (Netlify SPA routing)
├── src/
│   ├── pages/
│   │   ├── PreLaunch.jsx    (Waitlist page)
│   │   ├── Shop.jsx         (Collection page)
│   │   ├── ProductPage.jsx  (The Essential)
│   │   └── BikiniTops.jsx   (Bikini tops)
│   ├── App.jsx              (Routing)
│   └── main.jsx             (Entry point)
├── index.html
├── package.json
└── vite.config.js
```

## Adding Real Photos

Replace the photo placeholders in each component. Search for:
- `📷` emoji
- `PRODUCT PHOTO` text
- Gradient backgrounds in product sections

Replace the placeholder `<div>` with actual `<img>` tags:

```jsx
// Before (placeholder)
<div style={{ background: 'linear-gradient(...)' }}>
  <div>📷 PRODUCT PHOTO</div>
</div>

// After (real image)
<img 
  src="/images/essential-front.jpg" 
  alt="The Essential One-Piece"
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>
```

## Custom Domain

Both Netlify and Vercel offer free custom domain setup:
1. Buy a domain (Namecheap, Google Domains, etc.)
2. In Netlify/Vercel dashboard → Domain settings
3. Add your domain and update DNS records

## Need Help?

- Netlify docs: https://docs.netlify.com
- Vercel docs: https://vercel.com/docs
- Vite docs: https://vitejs.dev

---

Built with React + Vite + React Router
