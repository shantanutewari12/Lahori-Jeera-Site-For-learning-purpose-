
<div align="center">

```
██╗      █████╗ ██╗  ██╗ ██████╗ ██████╗ ██╗    ███████╗███████╗███████╗██████╗  █████╗
██║     ██╔══██╗██║  ██║██╔═══██╗██╔══██╗██║    ╚════██║██╔════╝██╔════╝██╔══██╗██╔══██╗
██║     ███████║███████║██║   ██║██████╔╝██║        ██╔╝█████╗  █████╗  ██████╔╝███████║
██║     ██╔══██║██╔══██║██║   ██║██╔══██╗██║       ██╔╝ ██╔══╝  ██╔══╝  ██╔══██╗██╔══██║
███████╗██║  ██║██║  ██║╚██████╔╝██║  ██║██║       ██║  ███████╗███████╗██║  ██║██║  ██║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝       ╚═╝  ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝
```

### 🍋 _The Original Desi Refresher — Pakistan Ka #1 Zeera Drink_ 🍋

<br/>

[![🚀 Live Site](https://img.shields.io/badge/🚀%20LIVE%20SITE-lahori--zeera.vercel.app-84cc16?style=for-the-badge&labelColor=1a3a1a)](https://lahori-zeera.vercel.app)
&nbsp;
[![React](https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
&nbsp;
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
&nbsp;
[![Vite](https://img.shields.io/badge/Vite%207-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
&nbsp;
[![Vercel](https://img.shields.io/badge/Deployed%20on%20Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

<br/>

> **Roasted Zeera · Kala Namak · Nimbu · Fizzy Soda**
> 
> _Ek baar try karo, doosri baar khud aao ge!_

</div>

---

## 🌐 Live Demo

<div align="center">

### **[https://lahori-zeera.vercel.app](https://lahori-zeera.vercel.app)**

</div>

---

## ✨ What Makes This Special

<table>
<tr>
<td width="50%">

### 🏠 Immersive Home Page
- **Sticky 3D bottle** that animates across scroll
- **Mouse-parallax tilt** — premium fizzi-style feel
- **Floating ingredients** — lemon, mint, ice, splash
- **6 cinematic scroll sections** with entrance animations
- Deep desi green + punchy lime color palette

</td>
<td width="50%">

### 📞 Contact Page
- Glassmorphism contact form
- Auto-fills your mail client on submit
- 3D floating bottle with mouse tracking
- Direct click-to-call & click-to-email
- Smooth slide-in animations

</td>
</tr>
<tr>
<td width="50%">

### 🤖 Zeera Bot — The Star Feature
An **animated bottle character** that literally walks, jumps and bounces around your screen like a toy, then opens a full chat panel when clicked.

</td>
<td width="50%">

### 🪑 Smart Context Awareness
On the `/contact` page, the bot **stops walking** and sits on the side, periodically jumping to grab your attention — without disturbing your form.

</td>
</tr>
</table>

---

## 🤖 Zeera Bot Deep Dive

```
┌─────────────────────────────────────────────────────────┐
│                    🍋 ZEERA BOT                          │
├─────────────────┬───────────────────────────────────────┤
│  🚶 Walk Mode   │  Roams entire screen randomly         │
│  🦵 Animations  │  Alternating orange legs              │
│  🔶 Glow Rings  │  Double pulsing orange radar rings    │
│  💬 Speech      │  Random Urdu/English sayings pop up   │
│  🤸 Actions     │  Jumps & bounces on arrival           │
│  🪑 Sit Mode    │  Parks on contact page, jumps idle    │
│  💬 Chat Window │  Full Q&A panel on click              │
│  ⚡ Quick Chips  │  One-tap suggestion buttons           │
└─────────────────┴───────────────────────────────────────┘
```

**Zeera Bot can answer:**

| Topic | Example Query |
|---|---|
| 🍋 Flavor | `"flavor kaisa hai?"` |
| 💰 Price | `"price kya hai?"` |
| 📍 Availability | `"kahan milta hai?"` |
| 🌿 Ingredients | `"ingredients kya hain?"` |
| 💪 Health | `"healthy hai?"` |
| 🍾 Sizes | `"sizes kya hain?"` |
| 📞 Contact | `"contact number?"` |
| 📖 Story | `"brand ki kahani?"` |

---

## 🛠️ Tech Stack

```
Frontend      →  React 19 + TypeScript
Build         →  Vite 7
Styling       →  TailwindCSS 4 + tw-animate-css
Animations    →  Framer Motion 12
Routing       →  Wouter 3
UI Primitives →  Radix UI (55+ components)
Icons         →  Lucide React
Fonts         →  Bricolage Grotesque + Plus Jakarta Sans
Pkg Manager   →  pnpm (workspace monorepo)
Deployment    →  Vercel
```

---

## 📁 Project Structure

```
Lahori-Jeera-Site/
├── artifacts/
│   └── lahori-zeera/              ← Main web app
│       ├── public/
│       │   ├── lahori-zeera-hero.png   ← Hero bottle (also favicon)
│       │   ├── lemon-slice.png
│       │   ├── mint-leaf.png
│       │   ├── ice-cube.png
│       │   └── water-splash.png
│       └── src/
│           ├── components/
│           │   ├── Chatbot.tsx         ← 🤖 Animated walking chatbot
│           │   └── ui/                 ← 55 Radix UI components
│           ├── pages/
│           │   ├── Home.tsx            ← 6-section scroll experience
│           │   ├── Contact.tsx         ← Contact form + info
│           │   └── not-found.tsx
│           ├── App.tsx
│           └── index.css              ← Design tokens
├── vercel.json                    ← Monorepo deploy config
├── pnpm-workspace.yaml
└── README.md
```

---

## 🚀 Local Development

```bash
# Clone
git clone https://github.com/shantanutewari12/Lahori-Jeera-Site.git
cd Lahori-Jeera-Site

# Install all workspace deps from root
pnpm install

# Run dev server
cd artifacts/lahori-zeera
pnpm dev

# Open → http://localhost:5173
```

`.env` is pre-configured — no extra setup needed.

---

## 📦 Deploy to Vercel

```bash
# From project root
vercel deploy --prod
```

The root `vercel.json` handles everything:
- ✅ `pnpm install` from workspace root (resolves all catalog deps)
- ✅ `cd artifacts/lahori-zeera && pnpm build`
- ✅ Serves from `dist/public/`
- ✅ SPA routing (all paths → `index.html`)

---

## 🎨 Design Language

```
Background   →  hsl(142 71% 15%)   Deep desi green
Primary      →  hsl(75 94% 57%)    Punchy lime-yellow
Foreground   →  hsl(60 100% 95%)   Warm cream white
Bot Accent   →  #ff6b00            Vivid orange (for visibility)

Heading Font →  Bricolage Grotesque (Black 800)
Body Font    →  Plus Jakarta Sans
Style        →  Glassmorphism + backdrop-blur cards
```

---

## 👤 Contact

<div align="center">

**Shantanu Tewari**

📧 [shantanitiwari12@gmail.com](mailto:shantanitiwari12@gmail.com) &nbsp;|&nbsp; 📞 +91-9368042721

🌐 **[lahori-zeera.vercel.app](https://lahori-zeera.vercel.app)**

<br/>

---

_Made with ❤️, lots of 🍋 and Zeera power 💪_

**Garmi ka ilaaj — Lahori Zeera!**

</div>
