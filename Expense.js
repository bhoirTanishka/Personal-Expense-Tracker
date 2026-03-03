import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    type: {
      type: String,
      enum: ["Income", "Expense"],
      required: true
    },

  
    amount: {
      type: Number,
      required: true
    },

    date: {
      type: Date,
      required: true
    },

    paymentMethod: {
      type: String,
      enum: ["Cash", "Card", "UPI", "Bank Transfer"],
      required: true
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      
    },

    month: {
      type: String,
     // min: 1,
     // max: 12,
      required: true
    },

    year: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true   //  createdAt & updatedAt
  }
);

export default  mongoose.model("Expense", expenseSchema);