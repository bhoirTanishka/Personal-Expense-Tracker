import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const ExpenseForm = ({ onSubmit, initialData, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: 0,
    type: "Expense",
    date: format(new Date(), "yyyy-MM-dd"),
    paymentMethod: "Cash",
    priority: "Medium",
    month: format(new Date(), "MMM"),
    year: format(new Date(), "yyyy"),
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "date") {
      const date = new Date(value);
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        month: format(date, "MMM"),
        year: format(date, "yyyy"),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: name === "amount" ? parseFloat(value) || 0 : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!initialData) {
      setFormData({
        title: "",
        amount: 0,
        type: "Expense",
        date: format(new Date(), "yyyy-MM-dd"),
        paymentMethod: "Cash",
        priority: "Medium",
        month: format(new Date(), "MMM"),
        year: format(new Date(), "yyyy"),
      });
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-4">{initialData ? "Edit Transaction" : "Add New Transaction"}</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label"><span className="label-text">Title</span></label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Salary, Rent, Groceries"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label"><span className="label-text">Amount</span></label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="0.00"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label"><span className="label-text">Type</span></label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label"><span className="label-text">Date</span></label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label"><span className="label-text">Payment Method</span></label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
            <option value="UPI">UPI</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label"><span className="label-text">Priority</span></label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="col-span-1 md:col-span-2 flex gap-2 mt-4">
          <button type="submit" className="btn btn-primary flex-1">
            {initialData ? "Update Transaction" : "Add Transaction"}
          </button>
          {onCancel && (
            <button type="button" onClick={onCancel} className="btn btn-ghost">
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
