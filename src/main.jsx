// main.jsx
import React from "react";
import ReactDOM from "react-dom/client"; // Perbaikan impor ReactDOM
import "./index.css";
import App from "./App";
import Home from "./Pages/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Pastikan RouterProvider diimpor

// Definisikan router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Home />,
  },
]);

// Buat root dan render komponen dengan RouterProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
