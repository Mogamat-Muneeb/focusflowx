import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContectProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContectProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContectProvider>
);
