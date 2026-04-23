# 🍋 Lahori Zeera — Official Brand Website

<div align="center">

![Lahori Zeera](artifacts/lahori-zeera/public/opengraph.jpg)

**The Original Desi Refresher — Pakistan ka #1 Zeera Drink**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-lahori--zeera.vercel.app-lime?style=for-the-badge)](https://lahori-zeera.vercel.app)
[![Built with Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.x-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com)

</div>

---

## 🌐 Live URL

> **https://lahori-zeera.vercel.app**

---

## ✨ Features

### 🏠 Home Page — Immersive Scroll Experience
- **Sticky animated bottle** that follows the user's scroll — moving, rotating and scaling across 6 full-screen sections
- **Mouse-parallax 3D tilt** for a premium fizzi-style feel
- **Floating ingredient elements** (lemon, mint, ice, splash) that parallax at different speeds
- **6 story sections**: Hero → Jeera Ka Tadka → Street Science → Garmi Ka Ilaaj → 100% Bold → CTA
- Framer Motion powered entrance animations on every section

### 📞 Contact Page — "Baat Karein"
- Glassmorphism contact form with name, email, phone, message fields
- Form submission opens native mail client pre-filled with user's enquiry
- 3D floating bottle preview with mouse-parallax tilt
- Direct phone & email links for instant reach

### 🤖 Zeera Bot — Animated Chatbot
The star feature — a **fully animated walking chatbot** that roams around the screen like a toy:

| Feature | Description |
|---|---|
| 🚶 **Screen Walker** | Bot walks to random positions across the entire screen |
| 🦵 **Animated Legs** | Two orange legs that alternate walking motion |
| ✨ **Orange Glow Rings** | Double pulsing radar rings for strong visibility |
| 💬 **Speech Bubbles** | Random Urdu/English marketing sayings pop up |
| 🤸 **Jumps & Bounces** | Randomly jumps and bounces after reaching destinations |
| 🪑 **Contact Sit Mode** | On `/contact` page, bot parks on the right side and periodically jumps |
| 💬 **Chat Window** | Click to open a full chat panel with Q&A |
| ⚡ **Quick Suggestions** | One-tap question chips for instant answers |

**Bot can answer questions about:**
- Flavor / Taste
- Ingredients
- Price & Sizes
- Availability & Cities
- Health benefits
- Contact info
- Brand story

### 🎨 Design System
- **Dark desi green** brand palette (`hsl(142 71% 15%)`)
- **Punchy lime-yellow** primary accent (`hsl(75 94% 57%)`)
- **Bricolage Grotesque** for headings + **Plus Jakarta Sans** for body
- Full glassmorphism cards with `backdrop-blur`
- `text-stroke` utility for outlined typography

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 7 |
| Styling | TailwindCSS 4 + tw-animate-css |
| Animations | Framer Motion 12 |
| Routing | Wouter 3 |
| UI Components | Radix UI (55+ components) |
| Icons | Lucide React |
| Package Manager | pnpm (workspace monorepo) |
| Deployment | Vercel |

---

## 📁 Project Structure

```
Lahori-Jeera-Site/
├── artifacts/
│   └── lahori-zeera/          # Main web app
│       ├── public/            # Static assets
│       │   ├── lahori-zeera-hero.png   # Hero bottle image (also favicon)
│       │   ├── lemon-slice.png
│       │   ├── mint-leaf.png
│       │   ├── ice-cube.png
│       │   └── water-splash.png
│       ├── src/
│       │   ├── components/
│       │   │   ├── Chatbot.tsx         # 🤖 Animated walking chatbot
│       │   │   └── ui/                 # 55 Radix UI components
│       │   ├── pages/
│       │   │   ├── Home.tsx            # 6-section scroll experience
│       │   │   ├── Contact.tsx         # Contact form + info
│       │   │   └── not-found.tsx       # 404 page
│       │   ├── App.tsx                 # Router + providers
│       │   ├── main.tsx
│       │   └── index.css              # Design tokens + Tailwind
│       ├── index.html
│       ├── vite.config.ts
│       └── vercel.json
├── vercel.json                # Root-level Vercel config for monorepo
├── pnpm-workspace.yaml
└── README.md
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+
- pnpm 10+

### Setup

```bash
# Clone the repo
git clone https://github.com/shantanutewari12/Lahori-Jeera-Site.git
cd Lahori-Jeera-Site

# Install all workspace dependencies
pnpm install

# Navigate to the app
cd artifacts/lahori-zeera

# Start dev server
pnpm dev
```

App opens at **http://localhost:5173**

### Environment Variables

The `.env` file inside `artifacts/lahori-zeera/` is pre-configured:

```env
PORT=5173
BASE_PATH=/
```

No additional setup needed for local dev.

---

## 📦 Build & Deploy

### Build locally

```bash
cd artifacts/lahori-zeera
pnpm build
# Output: artifacts/lahori-zeera/dist/public/
```

### Deploy to Vercel

```bash
# From project root
vercel deploy --prod
```

Vercel auto-detects the `vercel.json` at root which:
1. Runs `pnpm install` from workspace root (resolves all catalog deps)
2. Builds with `cd artifacts/lahori-zeera && pnpm build`
3. Serves from `artifacts/lahori-zeera/dist/public/`
4. Handles SPA routing (all paths → `index.html`)

---

## 📸 Pages Overview

| Page | Route | Description |
|---|---|---|
| Home | `/` | Full-screen scroll experience with sticky bottle |
| Contact | `/contact` | Order form + contact info |
| 404 | `*` | Not found page |

---

## 🤖 Chatbot Knowledge Base

The Zeera Bot responds to queries about:

```
"flavor kaisa hai?"     → Taste description
"price kya hai?"        → Rs 40 / Rs 70 / bulk deals
"kahan milta hai?"      → Lahore, Karachi, Islamabad, Faisalabad
"ingredients kya hain?" → Zeera, kala namak, nimbu, soda
"healthy hai?"          → Digestive benefits
"contact?"              → WhatsApp + email
"sizes?"                → 250ml, 500ml, 1L, packs
"history?"              → Brand story
```

---

## 👤 Contact

**Shantanu Tewari**  
📧 shantanitiwari12@gmail.com  
📞 +91-9368042721  
🌐 [lahori-zeera.vercel.app](https://lahori-zeera.vercel.app)

---

<div align="center">

Made with ❤️ and a lot of 🍋 Zeera

**Garmi ka ilaaj — Lahori Zeera!**

</div>
