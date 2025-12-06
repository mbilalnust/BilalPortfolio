# Portfolio Website Template

A modern, responsive portfolio website template built with React, TypeScript, Vite, and Tailwind CSS. Perfect for showcasing your professional profile, experience, projects, and blog posts.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Built with Vite for fast development and optimized production builds
- 📱 Fully responsive across all devices
- 🚀 Automatic deployment to GitHub Pages via GitHub Actions
- 📝 Easy content management through TypeScript data files
- 🔗 Integrated Google Forms contact form
- 🎯 SEO-friendly structure
- 🌙 Dark theme optimized sections

## Prerequisites

- Node.js 20+ installed on your system
- A GitHub account
- (Optional) A Google account for creating contact forms

## Quick Start

### 1. Clone or Fork This Repository

```bash
git clone https://github.com/mbilalnust/BilalPortfolio.git
cd BilalPortfolio
```

Or use this repository as a template by clicking "Use this template" on GitHub.

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure for Your Repository

**Important**: If you're using a different repository name, update the base path:

1. Open `vite.config.ts`
2. Update the `base` field to match your repository name:
   ```typescript
   base: '/YourRepositoryName/', // Replace with your actual repository name
   ```
3. Update `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/YourRepositoryName/"
   ```

### 4. Customize Your Content

Edit `data.ts` to update:
- Profile information (name, title, bio, avatar, location, email)
- Social media links
- Work experience
- Education
- Projects
- Blog posts

### 5. Set Up Google Forms Contact Form

1. Go to [Google Forms](https://docs.google.com/forms)
2. Create a new form with your desired fields
3. Click "Send" button (top right)
4. Click the `</>` (Embed HTML) icon
5. Copy the `src` URL from the iframe code
6. Paste it into `data.ts` as the `GOOGLE_FORM_URL` value

See the detailed instructions in `data.ts` comments for more details.

### 6. Run Locally

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio.

### 7. Preview Production Build

```bash
npm run build
npm run preview
```

## Deployment

This template uses GitHub Actions for automatic deployment to GitHub Pages.

### Setup GitHub Pages

1. Go to your repository's **Settings** → **Pages**
2. Under **Build and deployment**, select:
   - **Source**: `GitHub Actions`
3. The workflow will automatically deploy when you push to `main`

### Automatic Deployment

Every time you push changes to the `main` branch:
1. GitHub Actions automatically triggers
2. Builds your React app
3. Deploys to GitHub Pages
4. Your site updates at `https://yourusername.github.io/YourRepositoryName/`

No manual deployment needed! Just commit and push:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

Monitor deployments in the **Actions** tab of your repository.

## Customization Guide

### Updating Content

All content is managed in `data.ts`. Edit the following exports:

- **`PROFILE`**: Your personal information, skills, avatar
- **`SOCIAL_LINKS`**: Links to your social profiles
- **`EXPERIENCE`**: Work experience entries
- **`EDUCATION`**: Educational background
- **`PROJECTS`**: Portfolio projects with images and links
- **`BLOG_POSTS`**: Blog posts or publications
- **`GOOGLE_FORM_URL`**: Contact form embed URL

### Styling

- Styles use Tailwind CSS utility classes
- Custom colors are defined in `index.html` (Tailwind config)
- Component styles are in individual component files under `components/`
- Global styles can be added to `index.html` `<style>` tag

### Adding New Sections

1. Create a new component in `components/`
2. Import and add it to `App.tsx`
3. Optionally add corresponding data types in `types.ts`
4. Add data in `data.ts` if needed

### Changing Images

- Update image URLs in `data.ts` for projects and blog posts
- Use absolute URLs or add images to a `public/` folder
- For GitHub-hosted images, use the `raw` URL from your repository

## Project Structure

```
BilalPortfolio/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── Experience.tsx  # Work experience
│   ├── Projects.tsx    # Projects showcase
│   ├── Blog.tsx        # Blog posts
│   ├── Contact.tsx     # Contact form section
│   └── Footer.tsx      # Footer
├── data.ts             # All content data (EDIT THIS!)
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main app component
├── index.tsx           # React entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Dependencies and scripts
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions deployment workflow
```

## Local Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (creates `dist/` folder)
- `npm run preview` - Preview the production build locally

### Development Workflow

1. Make changes to components or data
2. See changes instantly in the browser (with `npm run dev`)
3. Test production build locally with `npm run preview`
4. Commit and push to deploy automatically

## Google Forms Setup (Detailed)

The contact form uses an embedded Google Form. Here's how to set it up:

1. **Create a Google Form**:
   - Go to https://docs.google.com/forms
   - Create a new form with fields you want (name, email, message, etc.)
   - Customize the form theme if desired

2. **Get the Embed URL**:
   - Click the "Send" button (top right)
   - Click the `</>` (Embed HTML) icon/tab
   - You'll see an iframe code like:
     ```html
     <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd.../viewform?embedded=true" ...></iframe>
     ```
   - Copy **only the URL** from the `src` attribute (the part between quotes)

3. **Add to Your Portfolio**:
   - Open `data.ts`
   - Find `GOOGLE_FORM_URL`
   - Paste your embed URL:
     ```typescript
     export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/.../viewform?embedded=true";
     ```

4. **Test**:
   - The form will appear in the Contact section of your portfolio
   - Make sure the form is set to accept responses

## Troubleshooting

### Site shows blank page after deployment

1. Check that `vite.config.ts` has the correct base path matching your repository name
2. Verify GitHub Pages is set to use "GitHub Actions" as the source
3. Check the Actions tab for any build errors
4. Wait 1-2 minutes after deployment for changes to propagate

### Contact form not showing

- Verify `GOOGLE_FORM_URL` in `data.ts` is set correctly
- Ensure you copied the full embed URL from Google Forms
- Check that the Google Form is published and accepting responses

### Build errors

- Run `npm install` to ensure all dependencies are installed
- Check that Node.js version is 20 or higher
- Review error messages in the GitHub Actions logs

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **GitHub Actions** - CI/CD for deployment
- **GitHub Pages** - Hosting

## License

This template is free to use for personal and commercial projects.

## Contributing

Feel free to fork this repository and customize it for your needs. If you make improvements that could benefit others, pull requests are welcome!

## Support

For issues or questions:
- Open an issue on GitHub
- Check existing issues for solutions
- Review the code comments for guidance

---

Built with ❤️ using React, TypeScript, and Vite
