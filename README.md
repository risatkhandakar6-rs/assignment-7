# KeenKeeper 🌿

**KeenKeeper** is a personal relationship-tracking app that helps you stay connected with the friends who matter most. Browse your friend list, check who you haven't talked to in a while, log quick "knocks" (calls, texts, or video chats), and visualize your interaction habits — all in one clean dashboard.

> Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **React.js / Next.js (App Router)** | Building the UI and app structure |
| **Next.js App Router** | Handling page navigation and dynamic routes |
| **Tailwind CSS + DaisyUI** | Styling, layout, and responsive design |
| **Recharts** | Rendering the Friendship Analytics pie chart |
| **React Context API** | Global state management for friend knocks (Call/Text/Video) |
| **react-toastify** | Toast notifications for quick check-in actions |
| **react-icons** | Icons used across the app (navigation, buttons, timeline entries) |
| **localStorage** | Persisting timeline/knock data across page reloads |

---

## ✨ Key Features

1. **Quick Check-In & Timeline Logging** — From any friend's details page, log a Call, Text, or Video interaction in one click. Each entry is saved with the friend's name, interaction type, and the current date, and instantly appears at the top of the Timeline.

2. **Filterable Timeline** — The Timeline page lists every logged interaction and lets you filter entries by type (Call, Text, or Video) using a simple dropdown, so you can quickly review a specific kind of interaction history.

3. **Friendship Analytics Dashboard** — The Stats page visualizes your interaction habits with a donut/pie chart (built with Recharts) that breaks down your total Call, Text, and Video interactions at a glance.

---

## 📱 Fully Responsive

KeenKeeper is designed to work smoothly across devices — from mobile (with a collapsible hamburger navigation) to desktop, using Tailwind's responsive utility classes throughout.

---

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.