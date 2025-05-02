
# 📊 User Directory App

A full-stack web application built for a front-end internship assignment.  
It displays paginated and virtualized user data with infinite scroll, sorting, and search.

---

## 🔧 Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: React.js (Hooks + Functional Components)
- **Libraries**:
  - `@tanstack/react-table` – for flexible table rendering
  - `@tanstack/react-virtual` – for efficient virtualization
- **Styling**: Plain CSS
- **Data**: Static `users.json` file (~5000 users)

---

## 📂 Project Structure

```
├── backend/
│   ├── index.js
│   ├── routes/
│   │   └── users.js
│   └── data/
│       └── users.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── UserTable.jsx
│   │   ├── hooks/
│   │   │   └── usePaginatedUsers.js
│   │   ├── pages/
│   │   │   └── HomePage.jsx
│   │   └── App.js
│   └── public/
```

---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js and npm installed

---

### 🖥️ Running the Backend

```bash
cd backend
npm install
npm run dev
```

> The API will be available at: `http://localhost:5000/api/users?page=1&limit=50`

---

### 💻 Running the Frontend

```bash
cd frontend
npm install
npm run dev
```

> App will run at: `http://localhost:5173` (or similar Vite port)

---

## 🔄 Features

- ✅ Paginated API from static JSON file
- ✅ Virtualized Table using `@tanstack/react-virtual`
- ✅ Infinite Scroll (manual scroll detection + debounce)
- ✅ Sorting on Name & Email
- ✅ Search bar (Name or Email, with manual debounce)
- ✅ Formatted Phone Numbers (`+1-XXX-XXX-XXXX`)
- ✅ Company + City merge (`Company (City)`)
- ✅ Loading states and error handling
- ✅ Modular file structure

---
