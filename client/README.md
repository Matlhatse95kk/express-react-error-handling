# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
[2025/07/16 19:28] Mᴀᴛʟʜᴀᴛsᴇ Kᴇᴋᴀɴᴀ: # Express + React Fullstack App

## 📁 Structure

- /client: React frontend
- /server: Express backend

## 📦 Install

```bash
pnpm install
cd server && pnpm install
cd ../client && pnpm install
 

🚀 Running the App

# Server
cd server
pnpm dev

# Client
cd client
pnpm dev


🧪 Running Tests

# Server
cd server
pnpm test

# Client
cd client
pnpm test
 
🛠 Debugging Techniques

Used console.log, stack traces

Client: Browser dev tools

Server: morgan for logs, error middleware

🧪 Testing Approach
Unit + integration tests with jest and supertest on server

React Testing Library for client components

Error boundaries capture and display graceful UI messages

 ---
### ✅ STEP 6: GitHub Submission

*6.1. Create GitHub Repo*

- Go to GitHub > New Repository
- Name it e.g. express-react-error-handling
- Do NOT initialize with README

*6.2. Push Code from Terminal*

```bash
git remote add origin https://github.com/your-username/express-react-error-handling.git
git add .
git commit -m "Initial commit"
git push -u origin main