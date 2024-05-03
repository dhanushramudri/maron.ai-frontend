import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { ClerkProvider } from "@clerk/clerk-react";
import Dashboard from "./components/Dashboard/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
console.log(PUBLISHABLE_KEY);

if (!PUBLISHABLE_KEY) {
  console.log("Missing PUBLISHABLE_KEY");
}

root.render(
  <React.StrictMode>
    <Router>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        {/* <App /> */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </ClerkProvider>
    </Router>
  </React.StrictMode>
);
