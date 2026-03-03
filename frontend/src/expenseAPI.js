import axios from "axios";

const expenseAPI = axios.create({
  baseURL: // Copy and paste this:
axios.get(`${import.meta.env.VITE_API_URL}/api/expenses`)
});

export default expenseAPI;
