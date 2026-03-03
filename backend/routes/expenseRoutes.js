import express from "express";
import {
  createExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense
} from "../controllers/expenseControllers.js";

const router = express.Router();

router.post("/", createExpense);
router.get("/", getExpenses);
router.get("/:id", getExpenseById);
router.put("/:id", updateExpense);
router.delete("/:id", deleteExpense);

// //Monthly Summary
// router.get("/summary/monthly", async (req, res) => {
//   const result = await Expense.aggregate([
//     { $group: { _id: "$month", total: { $sum: "$amount" } } }
//   ]);
//   res.json(result);
// });

// // Priority Summary
// router.get("/summary/priority", async (req, res) => {
//   const result = await Expense.aggregate([
//     { $group: { _id: "$priority", total: { $sum: "$amount" } } }
//   ]);
//   res.json(result);
// });

export default router;