import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router.jsx";
import AuthContext from "./Context/AuthContext.jsx";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

const helmetContext = {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <HelmetProvider context={helmetContext}>
        <RouterProvider router={router} />
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
      </HelmetProvider>
    </AuthContext>
  </React.StrictMode>
);
