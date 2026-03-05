// src/app/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import AppShell from "./AppShell";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Revenue from "../pages/Revenue";
import Strategy from "../pages/Strategy";
import Campaigns from "../pages/Campaigns";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "customers", element: <Customers /> },
      { path: "revenue", element: <Revenue /> },
      { path: "strategy", element: <Strategy /> },
      { path: "campaigns", element: <Campaigns /> },
    ],
  },
]);