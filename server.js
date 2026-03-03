import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import dns from "node:dns";
debugger;
dns.setServers(["1.1.1.1","8.8.8.8"]);

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/expenses", expenseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// Add this to your server.js
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", database: mongoose.connection.readyState === 1 ? "connected" : "disconnected" });
});
















//Yc7r3wdYqle8vQyX

//{
  //"title": "Bus Ticket",
  //"amount": 120,
  //"type": "Expense",
  //"date": "2026-02-01",
  //"paymentMethod": "Cash",
  //"priority": "Low",
 // "month": "Feb",
    //"year":"2026"
//}