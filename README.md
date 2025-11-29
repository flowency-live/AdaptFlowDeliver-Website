# Adapt Flow Deliver Website

Modern website for Adapt Flow Deliver built with Next.js 14 and the Loveable design system.

## Features

- **Loveable Design System**: Beautiful glassmorphism effects, mesh gradients, and smooth animations
- **AFD Branding**: Your existing logo and header navigation integrated
- **Responsive**: Works perfectly on all devices
- **Modern Stack**: Next.js 14 + TypeScript + Tailwind CSS

## Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
AdaptFlowDeliver-Website/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main page with all sections
│   └── globals.css       # Loveable design system CSS
├── public/
│   └── afd-logo.png      # Your AFD logo
├── Loveable/             # Reference files (not used in build)
└── package.json
```

## Sections

1. **Hero** - Animated background with floating elements
2. **About** - Company introduction with glassmorphic cards
3. **Services** - 6 service cards with hover effects
4. **People Development** - Capability building focus
5. **Rebecca** - Founder profile
6. **Contact** - Contact section (form integration pending)

## Design System

The Loveable design system includes:
- Mesh gradient backgrounds
- Glassmorphism effects (blur + transparency)
- Floating animations
- Text glow effects
- Smooth transitions
- Noise texture overlays

## Next Steps

- Integrate Cal.com for booking
- Add contact form functionality
- Deploy to Amplify or Vercel
- Add more animations as needed
