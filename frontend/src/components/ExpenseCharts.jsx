import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const ExpenseCharts = ({ expenses }) => {
  // Priority Summary Data
  const priorityData = [
    { name: "High", value: expenses.filter(e => e.priority === "High").length },
    { name: "Medium", value: expenses.filter(e => e.priority === "Medium").length },
    { name: "Low", value: expenses.filter(e => e.priority === "Low").length },
  ].filter(d => d.value > 0);

  const PRIORITY_COLORS = ["#ef4444", "#f59e0b", "#3b82f6"];

  // Monthly Summary Data
  const monthlySummary = expenses.reduce((acc, curr) => {
    const month = curr.month || "Unknown";
    const year = curr.year || "";
    const key = `${month} ${year}`.trim();
    if (!acc[key]) {
      acc[key] = { month: key, income: 0, expense: 0 };
    }
    if (curr.type === "Income") {
      acc[key].income += curr.amount || 0;
    } else {
      acc[key].expense += curr.amount || 0;
    }
    return acc;
  }, {});

  const monthlyData = Object.values(monthlySummary).slice(-6); // Last 6 months

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Priority Pie Chart */}
      <div className="card bg-base-100 shadow-xl p-6">
        <h3 className="text-xl font-bold mb-4">Priority Distribution</h3>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer width="100%" height={"300"}>
            <PieChart>
              <Pie
                data={priorityData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {priorityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PRIORITY_COLORS[index % PRIORITY_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Monthly Bar Chart */}
      <div className="card bg-base-100 shadow-xl p-6">
        <h3 className="text-xl font-bold mb-4">Monthly Summary</h3>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer width="100%" height={"300"}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#22c55e" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expense" fill="#ef4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCharts;
