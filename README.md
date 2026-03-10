# PromptFlow Website

Official website for PromptFlow - AI Prompt Management Platform.

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
website/
├── public/              # Static assets
│   └── favicon.svg     # Site favicon
├── src/
│   ├── scripts/        # JavaScript files
│   │   └── main.js     # Main script with smooth scroll, FAQ accordion, mobile menu
│   ├── styles/         # CSS files
│   │   └── main.css    # Main styles with Tailwind directives
│   └── assets/         # Images, icons, etc.
├── index.html          # Main HTML file
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── vercel.json         # Vercel deployment configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Scrolling**: Anchor links with smooth scroll behavior
- **FAQ Accordion**: Interactive FAQ section with expand/collapse
- **Mobile Menu**: Hamburger menu for mobile devices
- **SEO Optimized**: Complete meta tags and Open Graph support
- **Performance**: Optimized builds with Vite and PurgeCSS

## 🛠️ Technology Stack

- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **Google Fonts** - Inter font family

## 📝 Content Updates

### Updating Pricing Information

Edit the Pricing section in `index.html`:

```html
<div class="mb-6">
  <span class="text-5xl font-bold">$9</span>
  <span class="text-gray-600">/month</span>
</div>
```

### Updating Contact Information

1. Update links in the Contact section of `index.html`
2. Update environment variables in `.env`:

```env
VITE_CONTACT_EMAIL=support@promptflow.dev
VITE_GITHUB_URL=https://github.com/promptflow
VITE_TWITTER_URL=https://twitter.com/promptflow
```

### Updating FAQ

Add new FAQ items in `index.html`:

```html
<div class="faq-item border border-gray-200 rounded-lg">
  <button class="faq-button w-full text-left p-6 flex justify-between items-center">
    <span class="text-lg font-semibold">Your Question Here?</span>
    <svg class="w-5 h-5 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>
  <div class="faq-content px-6 overflow-hidden transition-all duration-300" style="max-height: 0;">
    <p class="pb-6 text-gray-600">
      Your answer here.
    </p>
  </div>
</div>
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Vercel will automatically detect settings from `vercel.json`
4. Deploy!

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains the production build
# Upload dist/ to any static hosting service
```

## 🔧 Environment Variables

Create a `.env` file based on `.env.example`:

```env
VITE_SITE_URL=https://promptflow.dev
VITE_CONTACT_EMAIL=support@promptflow.dev
VITE_GITHUB_URL=https://github.com/promptflow
VITE_TWITTER_URL=https://twitter.com/promptflow
```

## 📋 Maintenance Checklist

- [ ] Review and update pricing information (quarterly)
- [ ] Update FAQ with common customer questions
- [ ] Verify all links are working
- [ ] Check responsive design on new devices
- [ ] Update copyright year in footer (annually)
- [ ] Review and update product features list
- [ ] Test contact forms and email links

## 🎯 Stripe审核要求检查清单

Before submitting to Stripe, ensure:

- [x] Complete product description
- [x] Clear pricing information
- [x] Real contact information
- [x] Privacy Policy link
- [x] Terms of Service link
- [x] All content in English
- [x] Website publicly accessible
- [x] Fast loading speed
- [x] Professional design

## 📄 License

ISC

## 🤝 Support

For questions or issues:
- Email: support@promptflow.dev
- GitHub: https://github.com/promptflow
