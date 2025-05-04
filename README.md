# Sahil Karwasra Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- Responsive design
- Dark/light mode
- Smooth animations
- Project showcase
- Skills display
- Contact form

## Environment Variables

This project uses environment variables for configuration. 

### Resume URL

To update your resume URL, you have two options:

#### Option 1: Using Environment Variables (Preferred)

Set the `NEXT_PUBLIC_RESUME_URL` environment variable in your hosting platform (Vercel, Netlify, etc.):

```
NEXT_PUBLIC_RESUME_URL=https://your-actual-resume-link.com
```

#### Option 2: Direct File Edit

If you don't have access to environment variables on your hosting platform, you can directly edit the config file:

1. Open `lib/config.ts`
2. Update the default value in this line:
   ```typescript
   export const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL || "https://example.com/your-resume-link";
   ```

## Development

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

## Deployment

This site can be deployed on any platform that supports Next.js applications, such as Vercel, Netlify, or GitHub Pages. 