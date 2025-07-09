# 🥭 Fruit Jar App

A playful React + TypeScript app that lets users browse, group, and collect virtual fruits into a "fruit jar" for nutritional breakdown and visualization.

> Designed as a take-home project to demonstrate frontend skills using real-world UI logic, state management, and data visualization techniques.

---

## 🔗 Links

- 🧾 [GitHub Repo — Main App](https://github.com/ChaceN89/fruit-jar-app)
- 🧩 [GitHub Repo — Proxy Server](https://github.com/ChaceN89/fruit-jar-app-proxy-server)
- 🖥️ [Live App (Vercel)](https://fruit-jar-app-eight.vercel.app)
- 📦 [Live App (S3)](http://fruit-jar-app.s3-website-us-east-1.amazonaws.com/)
- 🔁 [Proxy server](https://myvwdd4mpq.us-east-1.awsapprunner.com)
- 🔁 [Proxy endpoint](https://myvwdd4mpq.us-east-1.awsapprunner.com/api/fruits)

---

## 📦 Features

- 🍇 **Fruit Fetching** — Retrieves fruit data through a CORS-friendly proxy hosted on AWS App Runner.
- 🧮 **Group By Control** — Users can group fruits by `Family`, `Order`, or `Genus`, or view them ungrouped.
- 📋 **Dual View Modes** — Toggle between **List** and **Table** view for fruit browsing.
- 🫙 **Jar Collection** — Add fruits (individually or entire groups) to your personal fruit jar.
- 📊 **Pie Chart Visualization** — Switch to a pie chart view to analyze calorie distribution in the jar.
- 🧠 **Detailed Inspection** — Hover any fruit in the jar to view its full nutrition breakdown.
- ♻️ **Expandable Sections** — Expand/collapse grouped fruit sections for clarity.
- ✨ **Animated Splash Screen** — Hides app loading and improves first load UX.
- 📱 **Responsive Layout** — Fully mobile and desktop friendly.
- 🌒 **Dark Mode Support** — Seamless light/dark mode integration.

---

## 🚀 Tech Stack

- ⚛️ React (w/ TypeScript)
- 🎨 Tailwind CSS
- 📈 Recharts
- 🌍 React Context API
- ☁️ AWS S3 (static hosting)
- 🧭 AWS App Runner (proxy server)

---

## 🌐 Proxy API Setup

The original fruit API is protected by strict CORS headers and only allows `localhost:5173`. To solve this, I created a custom **proxy server** hosted with **AWS App Runner**.

- 🔄 **Proxy Base URL**: [`https://myvwdd4mpq.us-east-1.awsapprunner.com`](https://myvwdd4mpq.us-east-1.awsapprunner.com)
- 🍎 **API Endpoint**: [`https://myvwdd4mpq.us-east-1.awsapprunner.com/api/fruits`](https://myvwdd4mpq.us-east-1.awsapprunner.com/api/fruits)
- 📁 **Proxy Source Repo**: [fruit-jar-app-proxy-server](https://github.com/ChaceN89/fruit-jar-app-proxy-server)

To use this in the main app:

```env
# .env.production
VITE_API_PATH=https://myvwdd4mpq.us-east-1.awsapprunner.com/api/fruits
```

---

## 📤 Deployment

### 🔗 Live URLs

- 🧪 **Vercel Deployment**: [https://fruit-jar-app-eight.vercel.app](https://fruit-jar-app-eight.vercel.app)
- ☁️ **AWS S3 Static Hosting**: [http://fruit-jar-app.s3-website-us-east-1.amazonaws.com](http://fruit-jar-app.s3-website-us-east-1.amazonaws.com)
- 🧭 **Proxy API (App Runner)**: [https://myvwdd4mpq.us-east-1.awsapprunner.com/api/fruits](https://myvwdd4mpq.us-east-1.awsapprunner.com/api/fruits)

### 🛠️ Required Environment Variable

Make sure to include the following variable in `.env.production` before running `vite build`:

```env
VITE_API_PATH=https://myvwdd4mpq.us-east-1.awsapprunner.com/api/fruits
```

---

## 📁 Deploying to S3

To deploy a new build to an S3 bucket, use the included `Makefile` workflow.

### 🧾 Required Variables in `.env.deploy`

```env
AWS_S3_BUCKET_NAME=...
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_REGION=us-east-1
```

### 🧱 Build & Upload

```bash
make deploy      # Builds and uploads to S3
```

> Your S3 bucket must have **static website hosting enabled** and a **public read policy**.

---

## 📂 File Structure Highlights

- `src/context/FruitContext.tsx` — Global state management
- `src/components/leftSideComponents/AllFruit.tsx` — Grouping, sorting, and UI logic
- `src/components/rightSideComponents/FruitJar.tsx` — Visual representation of the user's fruit jar
- `src/components/rightSideComponents/FruitPieChart.tsx` — Pie chart of calorie distribution
- `src/data/fruit-data.json` — Local fallback (not used in production)

---

## 👨‍💻 Author

**Chace Nielson**  
🔗 [chacenielson.com](https://chacenielson.com)

