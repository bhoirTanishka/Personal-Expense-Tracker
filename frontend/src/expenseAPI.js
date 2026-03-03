import axios from "axios";

const expenseAPI = axios.create({
  baseURL: "http://localhost:5000/api/expenses",
});

export default expenseAPI;
