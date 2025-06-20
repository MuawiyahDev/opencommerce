# 🛍️ OpenCommerce – Fullstack E-Commerce Site

This is a modern, open-source eCommerce project with a `frontend/` (Next.js) and `backend/` (Node.js) in a single monorepo.

## 📁 Structure

- `frontend/` – Next.js App (Storefront + Admin UI)
- `backend/` – Node.js/Express API (Products, Orders, Auth, etc.)

## 🚀 Getting Started

```bash
# 1. Clone repo
git clone https://github.com/MuawiyahDev/opencommerce.git
cd opencommerce

# 2. Setup backend
cd backend
cp .env.example .env
npm install
npx prisma migrate dev
npm run dev

# 3. Setup frontend
cd ../frontend
cp .env.example .env
npm install
npm run dev
```
