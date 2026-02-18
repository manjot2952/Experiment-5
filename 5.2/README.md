# 🚀 React Router with Lazy Loading & Suspense

## 📌 Experiment Title
Implementation of React Router with Lazy Loading and Suspense.

---

## 🎯 Aim
To implement routing in React using React Router and optimize performance using Lazy Loading and Suspense.

---

## 📚 Objective
- To understand React Router
- To implement multiple routes
- To implement Lazy Loading using `React.lazy()`
- To display fallback UI using `Suspense`
- To improve application performance using code splitting

---

## 🛠️ Technologies Used
- React JS
- React Router DOM
- JavaScript (ES6)
- CSS

---

## 📂 Project Structure

```
src
 ├── component
 │     ├── Home.jsx
 │     └── About.jsx
 ├── App.jsx
 ├── main.jsx
 └── App.css
```

---

## 🔹 Features
✔ Routing between Home and About pages  
✔ Lazy Loading using React.lazy()  
✔ Suspense fallback loader  
✔ Code Splitting  
✔ Performance Optimization  

---

## ⚙️ Working Explanation

- Components are loaded only when required.
- `React.lazy()` dynamically imports components.
- `Suspense` displays a fallback loading UI.
- Reduces initial bundle size.
- Improves performance of the application.

---

# 📸 Screenshots

## 1️⃣ Loading Screen

![Loading Screen](screenshots/Screenshot 2026-02-17 115353.png)

---

## 2️⃣ Home Page

![Home Page](screenshots/Screenshot 2026-02-17 115402.png)

---

## 3️⃣ About Page

![About Page](screenshots/Screenshot 2026-02-17 123619.png)

---

## 🚀 How to Run

```bash
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 🧠 Learning Outcomes
- Learned client-side routing in React
- Implemented lazy loading
- Used Suspense for fallback UI
- Understood code splitting
- Improved application performance

---

## ✅ Result
Successfully implemented React Router with Lazy Loading and Suspense. The application dynamically loads components and shows a loading screen while components are being fetched.

---

## 📖 References
- React Official Documentation
- React Router Documentation
