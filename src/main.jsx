import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router.jsx";
import AuthContext from "./Context/AuthContext.jsx";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const helmetContext = {};
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <QueryClientProvider  client={queryClient}>
        <HelmetProvider context={helmetContext}>
          <RouterProvider router={router} />
          <Toaster position="top-center" reverseOrder={false} />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthContext>
  </React.StrictMode>
);
