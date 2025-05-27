# 🛒 Food Ordering App

A responsive mini food ordering web app featuring **product listing**, **shopping cart**, **discounts**, and **order placement** functionalities. This project integrates with a **demo e-commerce API** based on an OpenAPI 3.1 spec.

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
✅ Accessible (WCAG compliant)  

---

## 🚀 Live Demo

**[View the Live App Here](#)**

## 🛠️ Tech Stack

- **Frontend:** React + Tailwind CSS + Vite
- **State Management:** Zustand
- **API:** [Demo E-commerce API](https://orderfoodonline.deno.dev/api)
- **Typography:** [Red Hat Text](https://fonts.google.com/specimen/Red+Hat+Text)
- **Design:** Figma (Responsive for Mobile: 375px & Desktop: 1440px)

---

## 📂 Project Structure

src/
├── components/ # Reusable UI components
├── pages/ # Page components (Products, Cart, NotFound)
├── store/ # Zustand store for cart management
├── utils/ # Utility functions (e.g., discounts)
├── config/ # Config files (e.g., coupons)
├── App.jsx # App entry point
└── main.jsx # React root


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





