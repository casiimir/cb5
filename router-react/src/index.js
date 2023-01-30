import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Quote from "./routes/quote";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacts",
    element: <Root />,
  },
  {
    path: "/messages",
    element: (
      <h1>Questa è la pagina dei messaggi, inserisci un id per pescarne uno</h1>
    ),
  },
  {
    path: "/messages/:quote",
    element: <Quote />,
  },
  ,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
