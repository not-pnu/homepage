import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import axios from "axios";

async function initAxios() {
  axios.defaults.baseURL = import.meta.env.VITE_SERVER_API_URL;
}

initAxios().then(() =>
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
);
