// main.jsx
import React from "react";
import ReactDOM from "react-dom/client"; // Perbaikan impor ReactDOM
import "./index.css";
import App from "./App";
import Home from "./Pages/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Pastikan RouterProvider diimpor
import Sidebar from "./components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import RegisterPage from "./Pages/RegisterPage";
import LaporanPage from "./Pages/LaporanPage";
import RoutePage from "./Pages/RoutePage";

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
  {
    path:"/dashboard",
    element: <Dashboard />
  },
  {
    path:"/register",
    element: <RegisterPage />
  },
  {
    path:"/dashboard/laporan",
    element: <LaporanPage />
  },
  {
    path:"/dashboard/route",
    element: <RoutePage />
  }
]);

// Buat root dan render komponen dengan RouterProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
