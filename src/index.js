import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { ClerkProvider } from "@clerk/clerk-react";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateJob from "./components/CreateJob/CreateJob";
import SecondForm from "./components/CreateJobForm/SecondForm";
import PreviewPage from "./components/CreateJobForm/PreviewPage";

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
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/create-job" element={<CreateJob />} />
            <Route path="/dashboard/create-job/des" element={<SecondForm />} />
            <Route path="/about" element={<PreviewPage />} />
          </Routes>
        </Provider>
      </ClerkProvider>
    </Router>
  </React.StrictMode>
);
