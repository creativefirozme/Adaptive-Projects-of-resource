import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./Providers/AuthProvider.jsx";
import router from "./Routes/router.jsx";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="max-w-screen-xl mx-auto">
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
