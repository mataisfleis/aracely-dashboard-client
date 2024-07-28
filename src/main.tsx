import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./pages/root.tsx";
import Error from "./pages/errors/error.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/main.tsx";
import DashRoot from "./pages/dash/root.tsx";
import '@fontsource-variable/plus-jakarta-sans'
import './css/index.css'

const router = createBrowserRouter([
  {
    errorElement: <Error />,
  },
  {
	path: '/',
	element: <Root />
  },
  {
	path: '/dashboard',
	element: <DashRoot />
  }
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
