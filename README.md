# 🏦 Banking Application

![Next.js](https://img.shields.io/badge/Next.js-15.1.8-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern banking web application built with Next.js, featuring Plaid and Dwolla integration for financial management and money transfers.

## 🚀 Live Demo

**🔗 [View Live Demo](https://banking-app.vercel.app)**

## ✨ Features

- 🔐 **Secure Authentication** with Appwrite
- 🏦 **Bank Account Connection** via Plaid API
- 💸 **Money Transfers** using Dwolla
- 📊 **Interactive Charts** and transaction analytics
- 📱 **Responsive Design** for all devices
- 🔄 **Real-time Updates** for balance and transactions
- 📄 **Pagination** and transaction history filtering
- 🎨 **Modern UI** with Radix UI components

## 🛠️ Tech Stack

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-15.1.8-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwind-css)
![Shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Components-000000?logo=shadcnui)

### Backend & Services
![Appwrite](https://img.shields.io/badge/Appwrite-Backend-FD366E?logo=appwrite)
![Plaid](https://img.shields.io/badge/Plaid-API-00D4AA?logo=plaid)
![Dwolla](https://img.shields.io/badge/Dwolla-Payments-FF6B35?logo=dwolla)

### UI/UX
![Shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Design_System-000000?logo=shadcnui)
![Radix UI](https://img.shields.io/badge/Radix_UI-Primitives-161618?logo=radix-ui)
![Chart.js](https://img.shields.io/badge/Chart.js-Graphs-FF6384?logo=chart.js)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-Forms-EC5990?logo=reacthookform)

### Development Tools
![Zod](https://img.shields.io/badge/Zod-Validation-3E67B1?logo=zod)
![Sentry](https://img.shields.io/badge/Sentry-Error_Monitoring-362D59?logo=sentry)
![ESLint](https://img.shields.io/badge/ESLint-Linting-4B32C3?logo=eslint)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Accounts in Plaid, Dwolla, and Appwrite

### Installation

1. **Clone the repository**
- git clone https://github.com/your-username/banking.git
- cd banking


2. **Install dependencies**


3. **Set up environment variables**
- cp .env.example .env.local
- Fill in your `.env.local`:

## Appwrite
```NEXT_PUBLIC_APPWRITE_ENDPOINT=
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET= 
```

## Plaid
```PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=sandbox
```

## Dwolla
```DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```

4. **Run the development server**

```npm run dev```

- Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Live Demo

**🔗 [View Live Demo](https://banking-5w5ak8q4o-ranos-projects.vercel.app)**

## 🌐 Deployed on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://banking-5w5ak8q4o-ranos-projects.vercel.app/sign-in)

This project is deployed and hosted on [Vercel](https://banking-5w5ak8q4o-ranos-projects.vercel.app/sign-in).


## 👤 Test User

Use the following credentials to test the application:

**Email:** `crypto.tester@gmail.com`  
**Password:** `12345678`

**Plaid Test Bank Credentials:**
- **Username:** `user_good`
- **Password:** `pass_good`
- **PIN:** `123456`

---

## ⭐ Star this repo if you find it helpful!


