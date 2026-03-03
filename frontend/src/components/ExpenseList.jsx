// // function ExpenseList({ expenses, deleteExpense }) {
// //   return (
// //     <div className="space-y-3">
// //       {expenses.map((exp) => (
// //         <div
// //           key={exp._id}
// //           className="card bg-base-200 p-4 shadow flex justify-between"
// //         >
// //           <div>
// //             <p className="font-bold">{exp.title}</p>
// //             <p>₹{exp.amount}</p>
// //             <p className="text-sm">{exp.type}</p>
// //             <p className="text-sm">Priority: {exp.priority}</p>
// //           </div>

// //           <button
// //             onClick={() => deleteExpense(exp._id)}
// //             className="btn btn-error btn-sm"
// //           >
// //             Delete
// //           </button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default ExpenseList;

// // export default function ExpenseList({ expenses, deleteExpense }) {
// //   return (
// //     <div className="overflow-x-auto mt-5">
// //       <table className="table bg-base-100 shadow-md">
// //         <thead>
// //           <tr>
// //             <th>Title</th>
// //             <th>Amount</th>
// //             <th>Type</th>
// //             <th>Priority</th>
// //             <th>Action</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {expenses.map(e => (
// //             <tr key={e._id}>
// //               <td>{e.title}</td>
// //               <td>₹{e.amount}</td>
// //               <td>{e.type}</td>
// //               <td>{e.priority}</td>
// //               <td>
// //                 <button
// //                   onClick={() => deleteExpense(e._id)}
// //                   className="btn btn-error btn-sm">
// //                   Delete
// //                 </button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }
// // <\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\>
// // import axios from "axios";
// // import { toast } from "react-toastify";

// // const ExpenseList = ({ expenses, filter, search, refresh }) => {
// //   const filtered = expenses.filter(e =>
// //     (filter === "All" || e.type === filter) &&
// //     e.title.toLowerCase().includes(search.toLowerCase())
// //   );

// //   const deleteExpense = async (id) => {
// //     await axios.delete(`http://localhost:5000/api/expenses/${id}`);
// //     toast.success("Deleted");
// //     refresh();
// //   };

// //   return (
// //     <table className="table table-zebra">
// //       <thead>
// //         <tr>
// //           <th>Title</th><th>Amount</th><th>Type</th><th>Priority</th><th>Actions</th>
// //         </tr>
// //       </thead>
// //       <tbody>
// //         {filtered.map(e => (
// //           <tr key={e._id}>
// //             <td>{e.title}</td>
// //             <td>₹{e.amount}</td>
// //             <td>{e.type}</td>
// //             <td>{e.priority}</td>
// //             <td>
// //               <button onClick={() => deleteExpense(e._id)} className="btn btn-error btn-sm">
// //                 Delete
// //               </button>
// //             </td>
// //           </tr>
// //         ))}
// //       </tbody>
// //     </table>
// //   );
// // };

// // export default ExpenseList;
// //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// // import { FiEdit2, FiTrash2 } from 'react-icons/fi';
// // import toast from 'react-hot-toast';
// // import { deleteExpense } from '../utils/api';

// // export default function ExpenseList({ expenses, onExpenseDeleted, onEditExpense }) {
// //   const handleDelete = async (id) => {
// //     if (window.confirm('Are you sure you want to delete this expense?')) {
// //       try {
// //         await deleteExpense(id);
// //         toast.success('Expense deleted successfully! ✅');
// //         onExpenseDeleted();
// //       } catch (error) {
// //         toast.error(error.message || 'Failed to delete expense');
// //       }
// //     }
// //   };

// //   const getPriorityColor = (priority) => {
// //     switch (priority) {
// //       case 'high':
// //         return 'badge-error';
// //       case 'medium':
// //         return 'badge-warning';
// //       case 'low':
// //         return 'badge-success';
// //       default:
// //         return 'badge-neutral';
// //     }
// //   };

// //   const getTypeColor = (type) => {
// //     return type === 'income' ? 'text-green-600' : 'text-red-600';
// //   };

// //   return (
// //     <div className="bg-white rounded-lg shadow-lg p-6">
// //       <h3 className="text-xl font-bold mb-4 text-gray-800">📋 Expense Details</h3>

// //       {expenses && expenses.length > 0 ? (
// //         <div className="overflow-x-auto">
// //           <table className="table w-full">
// //             <thead>
// //               <tr className="bg-gray-100">
// //                 <th>Title</th>
// //                 <th>Amount</th>
// //                 <th>Type</th>
// //                 <th>Date</th>
// //                 <th>Payment</th>
// //                 <th>Priority</th>
// //                 <th>Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {expenses.map((expense) => (
// //                 <tr key={expense._id} className="hover:bg-gray-50">
// //                   <td className="font-semibold">{expense.title}</td>
// //                   <td>
// //                     <span className={`font-bold text-lg ${getTypeColor(expense.type)}`}>
// //                       ₹{expense.amount.toFixed(2)}
// //                     </span>
// //                   </td>
// //                   <td>
// //                     <span className={`font-semibold ${getTypeColor(expense.type)}`}>
// //                       {expense.type === 'income' ? '💰 Income' : '💸 Expense'}
// //                     </span>
// //                   </td>
// //                   <td>{new Date(expense.date).toLocaleDateString()}</td>
// //                   <td className="capitalize">{expense.paymentMethod}</td>
// //                   <td>
// //                     <span className={`badge ${getPriorityColor(expense.priority)}`}>
// //                       {expense.priority.toUpperCase()}
// //                     </span>
// //                   </td>
// //                   <td>
// //                     <div className="flex gap-2">
// //                       <button
// //                         onClick={() => onEditExpense(expense)}
// //                         className="btn btn-sm btn-info btn-outline"
// //                         title="Edit"
// //                       >
// //                         <FiEdit2 size={16} />
// //                       </button>
// //                       <button
// //                         onClick={() => handleDelete(expense._id)}
// //                         className="btn btn-sm btn-error btn-outline"
// //                         title="Delete"
// //                       >
// //                         <FiTrash2 size={16} />
// //                       </button>
// //                     </div>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       ) : (
// //         <div className="text-center py-10 text-gray-500">
// //           <p className="text-lg">📭 No expenses found</p>
// //           <p className="text-sm">Start by adding your first expense above!</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// // import toast from 'react-hot-toast';
// // import { api } from '../api';

// // export default function ExpenseList({ expenses, onDelete, onEdit }) {
// //   const handleDelete = async (id) => {
// //     if (window.confirm('Are you sure you want to delete this expense?')) {
// //       try {
// //         await api.deleteExpense(id);
// //         onDelete(id);
// //         toast.success('✅ Expense deleted successfully!');
// //       } catch (error) {
// //         toast.error('❌ Failed to delete expense');
// //         console.error(error);
// //       }
// //     }
// //   };

// //   const getPriorityColor = (priority) => {
// //     const colors = {
// //       High: 'bg-red-100 text-red-800 border-l-4 border-red-500',
// //       Medium: 'bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500',
// //       Low: 'bg-green-100 text-green-800 border-l-4 border-green-500'
// //     };
// //     return colors[priority] || 'bg-gray-100 text-gray-800';
// //   };

// //   const getTypeColor = (type) => {
// //     return type === 'Income' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold';
// //   };

// //   return (
// //     <div className="bg-white rounded-xl shadow-xl overflow-hidden">
// //       {/* Header */}
// //       <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700">
// //         <h2 className="text-xl font-bold text-white">
// //           📊 Expense List ({expenses.length})
// //         </h2>
// //       </div>

// //       {/* Table */}
// //       <div className="overflow-x-auto">
// //         <table className="w-full">
// //           <thead className="bg-gray-100 border-b-2 border-gray-300">
// //             <tr>
// //               <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Title</th>
// //               <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Amount</th>
// //               <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Type</th>
// //               <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Priority</th>
// //               <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Date</th>
// //               <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Method</th>
// //               <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {expenses.length === 0 ? (
// //               <tr>
// //                 <td colSpan="7" className="px-6 py-8 text-center text-gray-500">
// //                   📭 No expenses found. Start by adding one!
// //                 </td>
// //               </tr>
// //             ) : (
// //               expenses.map((expense, index) => (
// //                 <tr 
// //                   key={expense._id} 
// //                   className={`border-b hover:bg-gray-50 transition ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
// //                 >
// //                   <td className="px-6 py-4 text-sm font-medium text-gray-900">
// //                     {expense.title}
// //                   </td>
// //                   <td className="px-6 py-4 text-sm font-bold text-gray-900">
// //                     ₹{parseFloat(expense.amount).toLocaleString('en-IN')}
// //                   </td>
// //                   <td className={`px-6 py-4 text-sm font-semibold ${getTypeColor(expense.type)}`}>
// //                     {expense.type === 'Income' ? '💚 Income' : '💔 Expense'}
// //                   </td>
// //                   <td className="px-6 py-4 text-sm">
// //                     <span className={`px-3 py-1 rounded-full text-xs font-bold ${getPriorityColor(expense.priority)}`}>
// //                       {expense.priority}
// //                     </span>
// //                   </td>
// //                   <td className="px-6 py-4 text-sm text-gray-600">
// //                     {new Date(expense.date).toLocaleDateString('en-IN')}
// //                   </td>
// //                   <td className="px-6 py-4 text-sm text-gray-600">
// //                     {expense.paymentMethod}
// //                   </td>
// //                   <td className="px-6 py-4 text-sm space-x-2 flex">
// //                     <button
// //                       onClick={() => onEdit(expense)}
// //                       className="btn btn-sm btn-info text-white hover:shadow-lg transition"
// //                     >
// //                       ✏️ Edit
// //                     </button>
// //                     <button
// //                       onClick={() => handleDelete(expense._id)}
// //                       className="btn btn-sm btn-error text-white hover:shadow-lg transition"
// //                     >
// //                       🗑️ Delete
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useState } from "react";
// import { Search, Filter, Edit2, Trash2, ArrowUpCircle, ArrowDownCircle } from "lucide-react";
// import { clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

// function cn(...inputs) {
//   return twMerge(clsx(inputs));
// }

// const ExpenseList = ({ expenses, onEdit, onDelete }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [typeFilter, setTypeFilter] = useState("All");

//   const filteredExpenses = expenses.filter((expense) => {
//     const matchesSearch = expense.title.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesType = typeFilter === "All" || expense.type === typeFilter;
//     return matchesSearch && matchesType;
//   });

//   return (
//     <div className="space-y-4">
//       <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-base-100 p-4 rounded-xl shadow-sm">
//         <div className="relative w-full md:w-64">
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/50" />
//           <input
//             type="text"
//             placeholder="Search by title..."
//             className="input input-bordered w-full pl-10"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
        
//         <div className="flex items-center gap-2 w-full md:w-auto">
//           <Filter className="w-4 h-4 text-base-content/50" />
//           <select
//             className="select select-bordered w-full md:w-40"
//             value={typeFilter}
//             onChange={(e) => setTypeFilter(e.target.value)}
//           >
//             <option value="All">All Types</option>
//             <option value="Income">Income</option>
//             <option value="Expense">Expense</option>
//           </select>
//         </div>
//       </div>

//       <div className="overflow-x-auto bg-base-100 rounded-xl shadow-sm">
//         <table className="table table-zebra w-full">
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Month/Year</th>
//               <th>Title</th>
//               <th>Type</th>
//               <th>Amount</th>
//               <th>Method</th>
//               <th>Priority</th>
//               <th>Created At</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredExpenses.length === 0 ? (
//               <tr>
//                 <td colSpan={9} className="text-center py-8 text-base-content/50 italic">
//                   No transactions found.
//                 </td>
//               </tr>
//             ) : (
//               filteredExpenses.map((expense) => (
//                 <tr key={expense.id}>
//                   <td>{expense.date}</td>
//                   <td>
//                     <span className="badge badge-outline badge-sm">{expense.month} {expense.year}</span>
//                   </td>
//                   <td className="font-medium">{expense.title}</td>
//                   <td>
//                     <div className={cn(
//                       "flex items-center gap-1 font-semibold",
//                       expense.type === "Income" ? "text-success" : "text-error"
//                     )}>
//                       {expense.type === "Income" ? <ArrowUpCircle className="w-4 h-4" /> : <ArrowDownCircle className="w-4 h-4" />}
//                       {expense.type}
//                     </div>
//                   </td>
//                   <td className="font-mono font-bold">
//                     ₹{expense.amount.toLocaleString()}
//                   </td>
//                   <td>
//                     <span className="badge badge-ghost">{expense.paymentMethod}</span>
//                   </td>
//                   <td>
//                     <span className={cn(
//                       "badge badge-sm",
//                       expense.priority === "High" ? "badge-error" : 
//                       expense.priority === "Medium" ? "badge-warning" : "badge-info"
//                     )}>
//                       {expense.priority}
//                     </span>
//                   </td>
//                   <td className="text-xs opacity-70">
//                     {(() => {
//                       if (!expense.timestamp) return expense.date || "N/A";
//                       // Handle SQLite datetime format (YYYY-MM-DD HH:MM:SS)
//                       // Replace space with T to make it a valid ISO string for JS
//                       const timestamp = expense.timestamp.includes(' ') && !expense.timestamp.includes('T') 
//                         ? expense.timestamp.replace(' ', 'T') + 'Z' 
//                         : expense.timestamp;
//                       const date = new Date(timestamp);
//                       if (isNaN(date.getTime())) return expense.timestamp;
//                       return new Intl.DateTimeFormat('en-IN', {
//                         day: '2-digit',
//                         month: 'short',
//                         year: 'numeric',
//                         hour: '2-digit',
//                         minute: '2-digit',
//                         second: '2-digit',
//                         hour12: true
//                       }).format(date);
//                     })()}
//                   </td>
//                   <td>
//                     <div className="flex gap-2">
//                       <button
//                         onClick={() => onEdit(expense)}
//                         className="btn btn-square btn-ghost btn-sm text-info"
//                       >
//                         <Edit2 className="w-4 h-4" />
//                       </button>
//                       <button
//                         onClick={() => {
//                           console.log("Delete button clicked. Expense ID:", expense.id, "Type:", typeof expense.id);
//                           if (expense.id !== undefined && expense.id !== null) {
//                             onDelete(expense.id);
//                           } else {
//                             console.error("Expense ID is missing in object:", expense);
//                           }
//                         }}
//                         className="btn btn-square btn-ghost btn-sm text-error"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ExpenseList;
import React, { useState } from "react";
import { Search, Filter, Edit2, Trash2, ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");

  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch = expense.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "All" || expense.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-base-100 p-4 rounded-xl shadow-sm">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/50" />
          <input
            type="text"
            placeholder="Search by title..."
            className="input input-bordered w-full pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter className="w-4 h-4 text-base-content/50" />
          <select
            className="select select-bordered w-full md:w-40"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto bg-base-100 rounded-xl shadow-sm">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th>Month/Year</th>
              <th>Title</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Priority</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center py-8 text-base-content/50 italic">
                  No transactions found.
                </td>
              </tr>
            ) : (
              filteredExpenses.map((expense) => (
                <tr key={expense._id || expense.id}>
                  <td>{expense.date}</td>
                  <td>
                    <span className="badge badge-outline badge-sm">{expense.month} {expense.year}</span>
                  </td>
                  <td className="font-medium">{expense.title}</td>
                  <td>
                    <div className={cn(
                      "flex items-center gap-1 font-semibold",
                      expense.type === "Income" ? "text-success" : "text-error"
                    )}>
                      {expense.type === "Income" ? <ArrowUpCircle className="w-4 h-4" /> : <ArrowDownCircle className="w-4 h-4" />}
                      {expense.type}
                    </div>
                  </td>
                  <td className="font-mono font-bold">
                    ₹{expense.amount.toLocaleString()}
                  </td>
                  <td>
                    <span className="badge badge-ghost">{expense.paymentMethod}</span>
                  </td>
                  <td>
                    <span className={cn(
                      "badge badge-sm",
                      expense.priority === "High" ? "badge-error" : 
                      expense.priority === "Medium" ? "badge-warning" : "badge-info"
                    )}>
                      {expense.priority}
                    </span>
                  </td>
                  <td className="text-xs opacity-70">
                    {(() => {
                      const rawTimestamp = expense.createdAt || expense.timestamp;
                      if (!rawTimestamp) return expense.date || "N/A";
                      
                      // Handle SQLite datetime format (YYYY-MM-DD HH:MM:SS)
                      // Replace space with T to make it a valid ISO string for JS
                      const timestamp = String(rawTimestamp).includes(' ') && !String(rawTimestamp).includes('T') 
                        ? String(rawTimestamp).replace(' ', 'T') + 'Z' 
                        : rawTimestamp;
                        
                      const date = new Date(timestamp);
                      if (isNaN(date.getTime())) return String(rawTimestamp);
                      return new Intl.DateTimeFormat('en-IN', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: true
                      }).format(date);
                    })()}
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <button
                        onClick={() => onEdit(expense)}
                        className="btn btn-square btn-ghost btn-sm text-info"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          const id = expense._id || expense.id;
                          console.log("Delete button clicked. Expense ID:", id);
                          if (id !== undefined && id !== null) {
                            onDelete(id);
                          } else {
                            console.error("Expense ID is missing in object:", expense);
                          }
                        }}
                        className="btn btn-square btn-ghost btn-sm text-error"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;

