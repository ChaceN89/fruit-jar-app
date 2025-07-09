# 🥭 Fruit Jar App

A playful React + TypeScript app that lets users browse, group, and collect virtual fruits into a "fruit jar" for nutritional breakdown and visualization.

> Designed as a take-home project to demonstrate frontend skills using real-world UI logic, state management, and data visualization techniques.

---

## 📦 Features

- 🍇 **Fruit Fetching** — Retrieves fruit data from a JSON file (originally meant to be fetched via CORS-protected API).
- 🧮 **Group By Control** — Users can group fruits by `Family`, `Order`, or `Genus`, or view them ungrouped.
- 📋 **Dual View Modes** — Toggle between **List** and **Table** view for fruit browsing.
- 🫙 **Jar Collection** — Add fruits (individually or entire groups) to your personal fruit jar.
- 📊 **Pie Chart Visualization** — Switch to a pie chart view to analyze calorie distribution in the jar.
- 🧠 **Detailed Inspection** — Hover any fruit in the jar to view its full nutrition breakdown.
- ♻️ **Expandable Sections** — Expand/collapse grouped fruit sections for clarity.
- ✨ **Animated Splash Screen** — Hides app loading and improves first load UX.

---

## 🚀 Tech Stack

- ⚛️ React (w/ TypeScript)
- 🎨 Tailwind CSS
- 📈 Recharts
- 🌍 React Context API
- ☁️ Vercel (for deployment)

---

## 🗂️ File Structure Highlights

- `src/context/FruitContext.tsx` — global state management for fruits, jar, and sorting
- `src/components/AllFruit.tsx` — handles the grouped/tabled UI views
- `src/components/FruitJar.tsx` — renders the visual fruit jar
- `src/components/FruitPieChart.tsx` — renders calorie distribution as a pie chart
- `src/components/SelectedFruit.tsx` — shows detailed nutrition on hover
- `src/data/fruit-data.json` — local fallback fruit data
- `src/data/fruit-icons-list.ts` — icon name mappings for fruit images

---

## ⚙️ Implementation Details

### ❗ CORS & API Access

The original API at `https://fruity-proxy.vercel.app/` is protected via CORS to simulate real-world API access limitations. Although a proxy or server middleware could've been used, I opted to **download the JSON once** and store it locally in `public/fruit-data.json` to focus on feature development.

### 🌐 State Management

All fruit-related state (including fetched data, group sorting, selected fruit, and the jar contents) is stored in a global **React Context**, enabling seamless access across components and reducing prop drilling.

### 🔍 Browsing Experience

- **Group By** allows viewing flat or grouped lists by shared family/order/genus.
- Both **List** and **Table** views are available, switchable via toggle.
- **Add buttons** are available for each fruit and each group.

### 🍽️ Jar Experience

- Added fruits are visualized as icons within a stylized container.
- Fruit hover displays a nutritional info card.
- Optional **pie chart view** available with calorie distribution.
- Total calorie count is always visible.
- A single **Empty Jar** button clears all added fruits.

---

## 🧪 Testing Notes

- The app includes error and loading states during data fetching.
- Responsive design tested on desktop and mobile views.
- Scrollbars are hidden where appropriate to preserve aesthetic but overflow remains usable.

---

## 📤 Deployment

Deployed live via **Vercel**  
🔗 [Live Demo](https://fruit-jar-app-eight.vercel.app/)  
📁 [GitHub Repo](https://github.com/ChaceN89/fruit-jar-app)

---

## 🧠 Evaluation Notes

- Built with modular, typed React components
- Data fetching errors handled gracefully
- Dark mode support and smooth transitions included
- Grouping, collapsing, sorting, and dual-views all implemented cleanly

---

## 👋 Closing Notes

Thank you for reviewing this project. I hope it demonstrates both thoughtful frontend architecture and attention to usability details. I’m excited to chat more!

– Chace Nielson
