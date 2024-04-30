import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home.tsx";
import { WorkoutProvider } from "./context/WorkoutContext.tsx";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />} />)
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WorkoutProvider>
      <RouterProvider router={router} />
    </WorkoutProvider>
  </React.StrictMode>
);
