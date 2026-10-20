# 🪔 Royal Tamil Wedding Invitation Website | சந்தோஷ் & அக்ஷயா திருமண அழைப்பிதழ்

An exceptionally elegant, culturally rich, and interactive digital wedding invitation (E-Lagunapatrika / கல்யாண அழைப்பிதழ்) created for the sacred union of **Santhosh & Akshaya**.

Built with **React 19**, **Vite**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**, featuring traditional South Indian aesthetic motifs, auspicious Nadaswaram melodies, real-time Muhurtham countdown, interactive maps, RSVP, and floral blessings.

---

## ✨ Features & Highlights

- 🕉️ **Auspicious Tamil Heritage & Invocations**: Traditional Vinayagar invocation (*ஓம்*), Subha Muhurtham emblems, and ornate deep maroon & antique gold temple aesthetics.
- 🎵 **Mangala Vaidyam & Background Music**: Integrated audio player featuring soul-stirring Nadaswaram & classical instrumental melodies, complete with floating play/mute controls.
- ✉️ **Interactive Royal Invitation Card**: Royal envelope unboxing animation with traditional Tamil invitation typography and formal family invites.
- ⏳ **Live Muhurtham Countdown**: Dynamic real-time countdown timer ticking down to the auspicious Kalyanam on **October 30, 2026**.
- 📅 **Event Itinerary & Timeline**:
  - **Reception (வரவேற்பு)**: Thursday, October 29, 2026 — 6:00 PM onwards
  - **Marriage (திருமங்கல தாரணம் / சுபமுகூர்த்தம்)**: Friday, October 30, 2026 — 6:00 AM to 7:30 AM
- 📍 **Venue Location & Direct Navigation**: Detailed venue address (**SVK Mahal, Kavarapettai**) with embedded Google Maps view and one-click Google Maps GPS navigation.
- 🌸 **Floral Shower & Confetti Celebrations**: Interactive flower blessing button showering auspicious rose and marigold petals across the screen.
- 💬 **WhatsApp RSVP & Heartfelt Wishes**: Direct WhatsApp integration with pre-filled auspicious Tamil congratulations message.
- 📱 **Mobile-First & Ultra-Responsive**: Pixel-perfect presentation optimized for guests viewing via WhatsApp or mobile browsers.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Celebration Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Linter**: [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)

---

## 📋 Prerequisites

Before running the project, ensure you have the following installed on your machine:

- **Node.js**: `v18.0.0` or higher (recommended: Node `v20.x` or `v22.x`)
- **npm**: `v9.0.0` or higher (bundled with Node.js)
  - Alternatively, you can use `yarn`, `pnpm`, or `bun`.

You can verify your current Node and npm versions by running:
```bash
node -v
npm -v
```

---

## 🚀 How to Run the Website Locally

### 1. Open the Project Directory
Open your terminal and navigate to the project directory:
```bash
cd /path/to/tamil-wedding-invitation
```

### 2. Install Dependencies
Install all required project packages:
```bash
npm install
```

### 3. Start the Development Server
Run the Vite development server:
```bash
npm run dev
```

### 4. Open in Your Browser
Once the server starts, you will see output similar to:
```text
  VITE v8.3.4  ready in 180 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Open [http://localhost:5173/](http://localhost:5173/) in your web browser to explore the wedding invitation website!

---

## 📦 Available Scripts

In the project directory, you can run the following commands:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server with instant Hot Module Replacement (HMR). |
| `npm run build` | Runs TypeScript compilation (`tsc -b`) and bundles an optimized production build into the `dist/` folder. |
| `npm run preview` | Locally serves the compiled production build from `dist/` to verify performance and assets before deployment. |
| `npm run lint` | Runs the high-performance Oxlint linter to check for code issues. |

---

## ⚙️ Customizing the Invitation Details

All wedding content is centrally managed in **`src/data/weddingConfig.ts`**, making customization quick and simple without modifying UI components:

```typescript
// Location: src/data/weddingConfig.ts

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: {
      name: 'SANTHOSH',
      tamilName: 'சந்தோஷ்',
      title: 'M.Tech',
    },
    bride: {
      name: 'AKSHAYA',
      tamilName: 'அக்ஷயா',
      title: 'B.E',
    },
    monogram: 'S & A',
    // ...
  },
  events: [
    // Modify reception and marriage timings, dates, and descriptions
  ],
  venue: {
    name: 'SVK MAHAL',
    city: 'Kavarapettai',
    fullAddress: 'SVK Mahal, GNT Road, Kavarapettai, Tiruvallur District...',
    googleMapsUrl: 'https://www.google.com/maps/...',
  },
  countdown: {
    targetDate: '2026-10-30T06:00:00+05:30', // Set the target Muhurtham timestamp
  },
  contact: {
    whatsappNumber: '+919876543210', // Set family RSVP phone number
  },
  // ...
};
```

### Adding Your Own Music or Images
- **Audio**: Place your background music file (e.g., MP3) in the `public/music/` directory and update `weddingConfig.music.src`.
- **Images**: Add couple portraits or invitation card artwork inside `public/assets/` and link them in `weddingConfig.couple`.

---

## 🌐 Deploying to the Web

You can deploy the website to any static hosting provider in minutes:

### Vercel
1. Install the Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root and follow the prompts.

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`

### GitHub Pages
1. In `vite.config.ts`, set `base: '/<repository-name>/'`.
2. Run `npm run build`.
3. Deploy the contents of the `dist/` directory to the `gh-pages` branch.

---

## 📁 Directory Structure

```text
tamil-wedding-invitation/
├── public/                     # Static assets (images, music audio files)
│   ├── assets/                 # Invitation cards, gallery photos, illustrations
│   └── music/                  # Mangala Vaidyam instrumental audio
├── src/
│   ├── components/             # Reusable modular React UI components
│   │   ├── IntroScreen.tsx     # Auspicious landing / welcome screen
│   │   ├── Navbar.tsx          # Floating navigation bar with quick links
│   │   ├── HeroSection.tsx     # Couple showcase & royal portrait
│   │   ├── Countdown.tsx       # Live countdown to Subha Muhurtham
│   │   ├── InvitationMessage.tsx # Auspicious traditional wedding card message
│   │   ├── WeddingEvents.tsx   # Reception and Kalyanam event details
│   │   ├── VenueSection.tsx    # SVK Mahal address & Google Maps integration
│   │   ├── ClosingSection.tsx  # RSVP, blessings, WhatsApp wishes & petals
│   │   ├── MusicPlayer.tsx     # Floating Nadaswaram audio control
│   │   └── FloatingDecorations.tsx # Ambient falling petals & golden motifs
│   ├── data/
│   │   └── weddingConfig.ts    # Centralized configuration (names, dates, venue)
│   ├── App.tsx                 # Main application layout
│   ├── index.css               # Global styling, fonts, and animations
│   └── main.tsx                # React entry point
├── dist/                       # Production bundle output (generated on build)
├── package.json                # Project dependencies & npm scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration
```

---

## 🪷 Auspicious Wishes

> **"மங்களம் பொங்க, நலம் பல பெருக, இருமனம் இணையும் நன்னாளில் உங்கள் வருகை எமக்கு பெருமகிழ்ச்சி தரும்."**  
> *"May prosperity bloom and happiness abound. Your presence on this sacred day will bring us immense joy and blessings."*
