import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import HomePage from "./pages/HomePage.tsx";
import SignUp from "./pages/SignUp.tsx";
import LogIn from "./pages/LogIn.tsx";
import Dashboard from "./pages/Dashboard.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<App />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
