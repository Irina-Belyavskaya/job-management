import axios from "axios";


export const API_URL = "https://startup-summer-2023-proxy.onrender.com/2.0";

export const api = axios.create({
  baseURL: API_URL
})