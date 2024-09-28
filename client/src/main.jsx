import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Record from "./components/Record";
import RecordList from "./components/RecordList";
import RecordAgents from "./components/RecordAgents"; // Import RecordAgents
import RecordListAgents from "./components/RecordListAgents"; // Import RecordListAgents
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RecordList />,
      },
    ],
  },
  {
    path: "/edit/:id",
    element: <App />,
    children: [
      {
        path: "/edit/:id",
        element: <Record />,
      },
    ],
  },
  {
    path: "/create",
    element: <App />,
    children: [
      {
        path: "/create",
        element: <Record />,
      },
    ],
  },
  {
    path: "/agents", // Add the route for agents
    element: <App />,
    children: [
      {
        path: "/agents",
        element: <RecordListAgents />, // Display all agents
      },
    ],
  },
  {
    path: "/agents/create", // Route for creating a new agent
    element: <App />,
    children: [
      {
        path: "/agents/create",
        element: <RecordAgents />, // Form to create a new agent
      },
    ],
  },
  {
    path: "/agents/edit/:id", // Route for editing an existing agent
    element: <App />,
    children: [
      {
        path: "/agents/edit/:id",
        element: <RecordAgents />, // Form to edit an existing agent
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
