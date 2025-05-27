# 🛒 Food Ordering App

A responsive mini food ordering web app featuring **product listing**, **shopping cart**, **discounts**, and **order placement** functionalities.

Built using **React**, **Tailwind CSS**, and **Zustand** for state management.

---

## 📦 Features

✅ Product Listing with Images  
✅ Add/Remove Items to/from Cart  
✅ Increase/Decrease Item Quantity  
✅ Show Order Total (with Discounts)  
✅ Discount Code Support:  
- `HAPPYHOURS` → 18% off  
- `BUYGETONE` → Lowest-priced item for free  
✅ Order Confirmation  
✅ Responsive Design  
✅ Interactive Hover/Focus States  

---

## 🛠️ Tech Stack

- **Frontend:** React + Tailwind CSS + Vite
- **State Management:** Zustand
- **Typography:** [Red Hat Text](https://fonts.google.com/specimen/Red+Hat+Text)
- **Design:** Figma (Responsive for Mobile: 375px & Desktop: 1440px)

---

## 📂 Project Structure

```bash
src/
├── components/    # Reusable UI components (e.g., ProductCard, CartItem, Button)
├── pages/         # Page components (e.g., ProductsPage, CartPage, NotFoundPage)
├── store/         # Zustand store for cart and coupon state management
├── utils/         # Utility functions (e.g., discount calculations, helpers)
├── config/        # Config files (e.g., coupon definitions)
├── App.jsx        # App entry point and router setup
└── main.jsx       # React DOM entry point (renders App)



## 📦 Getting Started

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/rajhimanshu83/kart-app.git
cd food-ordering-app
npm install

Create a .env file at the project root:

VITE_API_URL=https://orderfoodonline.deno.dev/api

Run the App Locally

npm run dev





