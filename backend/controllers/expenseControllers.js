import Expense from "../models/Expense.js";
import express from "express";
// CREATE
export const createExpense = async (req, res) => {
  const expense = await Expense.create(req.body);
  res.status(201).json(expense);
};

// READ ALL
export const getExpenses = async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
};

// READ ONE
export const getExpenseById = async (req, res) => {
  const expense = await Expense.findById(req.params.id);
  res.json(expense);
};

// UPDATE
export const updateExpense = async (req, res) => {
  const updatedExpense = await Expense.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedExpense);
};

// DELETE
export const deleteExpense = async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: "Expense deleted successfully" });
};
