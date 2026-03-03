# Personal Expanse Tracker:

A full-stack MERN (MongoDB, Express, React, Node.js) web application that helps users efficiently manage and analyze their personal income and expenses.

This project demonstrates complete CRUD functionality, frontend-backend integration, data visualization, and responsive UI design.

---

# Project Overview #

The Personal Expense Tracker allows users to:

* Record income and expenses
* Search transactions by title
* Filter transactions by type (Income / Expense)
* View priority distribution (High / Medium / Low)
* Analyze monthly income and expense summaries
* Manage financial records with full CRUD operations

The application is designed with a clean and user-friendly interface using Tailwind CSS and DaisyUI.

---

# Features#

# Core Features (CRUD):

* Add new transaction
* View all transactions
* Update transaction details
* Delete transactions

# Search Functionality:

* Search transactions by title in real-time

# Filter by Type:

* Filter transactions by:

  * All
  * Income
  * Expense

# Priority Distribution:

* Visual representation of:

  * High priority
  * Medium priority
  * Low priority
* Displayed using a Pie Chart

# Monthly Summary:

* Calculates total:

  * Monthly Income
  * Monthly Expense
* Helps track financial performance per month

# Toast Notifications:

* Success messages for add/update/delete
* Error handling alerts

#  Responsive UI

* Built with Tailwind CSS
* Styled using DaisyUI components
* Works smoothly on mobile and desktop

---

# Tech Stack #

# Frontend:

* React (Vite)
* Tailwind CSS
* DaisyUI
* Axios
* React Hot Toast
* Recharts (for charts)

# Backend:

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* Dotenv

---

# Database Schema:

Collection Name: `expenses`

| Field         | Type   | Description              |
| ------------- | ------ | ------------------------ |
| title         | String | Transaction title        |
| amount        | Number | Amount of income/expense |
| type          | String | income / expense         |
| date          | Date   | Transaction date         |
| paymentMethod | String | Mode of payment          |
| priority      | String | high / medium / low      |
| month         | String | Transaction month        |
| year          | Number | Transaction year         |
|Timestamp      |float   |created At                |
Total Fields: 9

---

# Project Structure #

```

ExpenseTracker/
├── backend/
│   |   |
│   │   ├── config/
│   │   │   └── db.js               # MongoDB connection
│   │   ├── controllers/
│   │   │   └── expenseController.js
│   │   ├── models/
│   │   │   └── expenseModel.js
│   │   ├── routes/
│   │   │   └── expenseRoutes.js
│   │   └── server.js
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── ExpenseCharts.jsx
    │   │   ├── ExpenseForm.jsx
    │   │   ├── ExpenseList.jsx
    │   │   
    │   |__App.jsx
    │   |__main.jsx
    │   ├── ExpenseAPI.js
    │   ├── index.css
    │   ├── index.html
    │   
    │__package.json 
---

# Installation & setup #

Git repository:-

```
git clone https://github.com/bhoirTanishka/Personal-Expense-Tracker/upload
cd personal-expense-tracker



```


# Backend Setup:

```
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```

PORT=5000
```

Start the backend server:

```
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

# Frontend Setup:

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```
# API EndPoints:

| Method | Endpoint          | Description            |
| ------ | ----------------- | ---------------------- |
| GET    | /api/expenses     | Fetch all transactions |
| POST   | /api/expenses     | Create new transaction |
| PUT    | /api/expenses/:id | Update transaction     |
| DELETE | /api/expenses/:id | Delete transaction     |

# Learning Outcomes #

This project demonstrates:-

* REST API development
* MongoDB schema design
* Full CRUD implementation
* React state management
* Data filtering and searching
* Data visualization using charts
* Responsive UI development
* Full frontend-backend integration

# Future Enhancements #

* User authentication (JWT)
* Export monthly reports (PDF/CSV)
* Dashboard analytics page
* Dark/Light mode toggle
* Cloud deployment

# Author #

Name: Tanishka Avinash Bhoir.
Course: MERN STACK
College: CHM

# Conclusion:#

The Personal Expense Tracker is a complete full-stack web application that fulfills all academic project requirements, including CRUD operations, additional features (search, filter, summaries), and proper integration between frontend and backend.
It provides a practical solution for managing personal finances while demonstrating strong full-stack development skills.
