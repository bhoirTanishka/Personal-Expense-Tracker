import React, { useState, useEffect } from "react";
 import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseCharts from "./components/ExpenseCharts";
import { Wallet, Plus, LayoutDashboard, List } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [loading, setLoading] = useState(true);

  
  const getExpenseId = (expense) => expense._id || expense.id;

  const fetchExpenses = async () => {
    try {
      
      const baseUrl = window.location.hostname === 'localhost' ? 'http://localhost:5000' : '';
      const response = await axios.get(`${baseUrl}/api/expenses?t=${Date.now()}`);
      
      if (Array.isArray(response.data)) {
        setExpenses(response.data);
      } else {
        console.error("Expected array from API, got:", response.data);
        setExpenses([]);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("Failed to load expenses. Is the backend running on port 5000?");
      setExpenses([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const baseUrl = window.location.hostname === 'localhost' ? 'http://localhost:5000' : '';
        const res = await axios.get(`${baseUrl}/api/health?t=${Date.now()}`);
        console.log("Server health:", res.data);
      } catch (err) {
        console.error("Server health check failed:", err);
        toast.error("Backend server is not responding. Please wait or refresh.");
      }
    };
    checkHealth();
    fetchExpenses();
  }, []);

  const handleAddExpense = async (expense) => {
    try {
      const baseUrl = window.location.hostname === 'localhost' ? 'http://localhost:5000' : '';
      await axios.post(`${baseUrl}/api/expenses`, expense);
      toast.success("Transaction added successfully!");
      setTimeout(fetchExpenses, 500);
      setActiveTab("list");
    } catch (error) {
      const errorMsg = error.response?.data?.details || error.response?.data?.error || "Failed to add transaction";
      toast.error(errorMsg);
      console.error("Add expense error:", error);
    }
  };

  const handleUpdateExpense = async (expense) => {
    const id = getExpenseId(expense);
    try {
      const baseUrl = window.location.hostname === 'localhost' ? 'http://localhost:5000' : '';
      await axios.put(`${baseUrl}/api/expenses/${id}`, expense);
      toast.success("Transaction updated successfully!");
      setEditingExpense(null);
      setTimeout(fetchExpenses, 500);
      setActiveTab("list");
    } catch (error) {
      toast.error("Failed to update transaction");
      console.error("Update error:", error);
    }
  };

  const handleDeleteExpense = async (id) => {
    console.log("handleDeleteExpense called for ID:", id);
    const originalExpenses = [...expenses];
    
    // Optimistic Update
    setExpenses(prev => prev.filter(e => String(getExpenseId(e)) !== String(id)));
    
    try {
      const baseUrl = window.location.hostname === 'localhost' ? 'http://localhost:5000' : '';
      const response = await fetch(`${baseUrl}/api/expenses/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to delete");
      }
      
      toast.success("Transaction deleted!");
      setTimeout(fetchExpenses, 500);
    } catch (error) {
      setExpenses(originalExpenses);
      console.error("Delete error:", error);
      toast.error(error.message || "Failed to delete transaction");
    }
  };

  const totalIncome = Array.isArray(expenses)
    ? expenses
      .filter((e) => e.type === "Income")
      .reduce((acc, curr) => acc + curr.amount, 0)
    : 0;
  
  const totalExpense = Array.isArray(expenses)
    ? expenses
      .filter((e) => e.type === "Expense")
      .reduce((acc, curr) => acc + curr.amount, 0)
    : 0;

  const balance = totalIncome - totalExpense;

  return (
    <div className="min-h-screen bg-base-200 pb-20 md:pb-0">
      <Toaster position="top-right" />
      
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-md px-4 md:px-8 sticky top-0 z-50">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <Wallet className="text-primary-content w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:inline-block">ExpenseTracker</span>
          </div>
        </div>
        <div className="flex-none gap-2">
          <button 
            onClick={fetchExpenses}
            className="btn btn-ghost btn-circle btn-sm"
            title="Refresh Data"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </button>
          <div className="stats shadow bg-base-100 hidden lg:flex">
            <div className="stat py-1 px-4">
              <div className="stat-title text-xs">Balance</div>
              <div className={`stat-value text-sm ${balance >= 0 ? "text-success" : "text-error"}`}>
                ₹{balance.toLocaleString()}
              </div>
            </div>
          </div>
          <button 
            onClick={() => {
              setEditingExpense(null);
              setActiveTab("add");
            }}
            className="btn btn-primary btn-sm md:btn-md"
          >
            <Plus className="w-4 h-4 mr-1" /> Add New
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Mobile Stats */}
        <div className="grid grid-cols-3 gap-2 mb-6 lg:hidden">
          <div className="bg-base-100 p-3 rounded-xl shadow-sm text-center">
            <div className="text-[10px] uppercase opacity-50 font-bold">Income</div>
            <div className="text-success font-bold text-sm">₹{totalIncome.toLocaleString()}</div>
          </div>
          <div className="bg-base-100 p-3 rounded-xl shadow-sm text-center">
            <div className="text-[10px] uppercase opacity-50 font-bold">Expense</div>
            <div className="text-error font-bold text-sm">₹{totalExpense.toLocaleString()}</div>
          </div>
          <div className="bg-base-100 p-3 rounded-xl shadow-sm text-center">
            <div className="text-[10px] uppercase opacity-50 font-bold">Balance</div>
            <div className={`font-bold text-sm ${balance >= 0 ? "text-success" : "text-error"}`}>
              ₹{balance.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <div className="tabs tabs-boxed mb-8 bg-base-100 p-1 w-fit mx-auto md:mx-0">
          <button 
            className={`tab ${activeTab === "dashboard" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("dashboard")}
          >
            <LayoutDashboard className="w-4 h-4 mr-2" /> Dashboard
          </button>
          <button 
            className={`tab ${activeTab === "list" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("list")}
          >
            <List className="w-4 h-4 mr-2" /> Transactions
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Desktop Stats Cards */}
              <div className="hidden lg:grid grid-cols-3 gap-6">
                <div className="stat bg-base-100 rounded-2xl shadow-sm">
                  <div className="stat-figure text-success">
                    <ArrowUpCircle className="w-8 h-8" />
                  </div>
                  <div className="stat-title">Total Income</div>
                  <div className="stat-value text-success">₹{totalIncome.toLocaleString()}</div>
                </div>
                <div className="stat bg-base-100 rounded-2xl shadow-sm">
                  <div className="stat-figure text-error">
                    <ArrowDownCircle className="w-8 h-8" />
                  </div>
                  <div className="stat-title">Total Expense</div>
                  <div className="stat-value text-error">₹{totalExpense.toLocaleString()}</div>
                </div>
                <div className="stat bg-base-100 rounded-2xl shadow-sm">
                  <div className="stat-figure text-primary">
                    <Wallet className="w-8 h-8" />
                  </div>
                  <div className="stat-title">Net Balance</div>
                  <div className={`stat-value ${balance >= 0 ? "text-success" : "text-error"}`}>
                    ₹{balance.toLocaleString()}
                  </div>
                </div>
              </div>

              <ExpenseCharts expenses={expenses} />
            </motion.div>
          )}

          {activeTab === "list" && (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ExpenseList 
                expenses={expenses} 
                onEdit={(expense) => {
                  setEditingExpense(expense);
                  setActiveTab("add");
                }}
                onDelete={handleDeleteExpense}
              />
            </motion.div>
          )}

          {activeTab === "add" && (
            <motion.div
              key="add"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-2xl mx-auto"
            >
              <ExpenseForm 
                onSubmit={editingExpense ? handleUpdateExpense : handleAddExpense}
                initialData={editingExpense}
                onCancel={() => {
                  setEditingExpense(null);
                  setActiveTab("list");
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation for Mobile */}
      <div className="btm-nav md:hidden bg-base-100 border-t border-base-300">
        <button 
          className={activeTab === "dashboard" ? "active text-primary" : ""}
          onClick={() => setActiveTab("dashboard")}
        >
          <LayoutDashboard className="w-5 h-5" />
          <span className="btm-nav-label text-[10px]">Home</span>
        </button>
        <button 
          className={activeTab === "list" ? "active text-primary" : ""}
          onClick={() => setActiveTab("list")}
        >
          <List className="w-5 h-5" />
          <span className="btm-nav-label text-[10px]">History</span>
        </button>
        <button 
          className={activeTab === "add" ? "active text-primary" : ""}
          onClick={() => {
            setEditingExpense(null);
            setActiveTab("add");
          }}
        >
          <Plus className="w-5 h-5" />
          <span className="btm-nav-label text-[10px]">Add</span>
        </button>
      </div>
    </div>
  );
};

// Helper components for stats
const ArrowUpCircle = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const ArrowDownCircle = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const ArrowDownCircleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export default App;
