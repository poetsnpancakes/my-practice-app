import axios from "axios";


const EmpApi = axios.create({
  baseURL: "https://localhost:7098/api", // Change to your .NET API URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default EmpApi;