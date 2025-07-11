import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Chat from "./pages/chatPage/Chat";
import Home from "./pages/homapage/Home";
import Dashboard from './pages/dashboardpage/Dashboard'
import RootLayout from "./layouts/rootLayout/RootLayout";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout";

let router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard />
          },
          {
            path: '/dashboard/chats/:id',
            element: <Chat />
          },
        ]
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);