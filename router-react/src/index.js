import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/mainLayout";
import Quote from "./routes/quote";
import Root from "./routes/root";
import User from "./routes/user";
import Users from "./routes/users";
import ErrorPage from "./error-page";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/contacts",
//     element: <Root />,
//   },
//   {
//     path: "/messages",
//     element: (
// <>
//   <h1>
//     Questa è la pagina dei messaggi, inserisci un id per pescarne uno
//   </h1>
//   <Link to="/messages/1">Vai alla quote</Link>
// </>
//     ),
//   },
//   {
//     path: "/messages/:quote",
//     element: <Quote />,
//   },
//   {
//     path: "/users",
//     element: <Users />,
//   },
//   {
//     path: "/users/:userId",
//     element: <User />,
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route>
        <Route path="/" element={<App />} errorElement={<ErrorPage />}>
          <Route path="contacts" element={<Root />} />
          <Route
            path="messages"
            element={
              <>
                <h1>
                  Questa è la pagina dei messaggi, inserisci un id per pescarne
                  uno
                </h1>
                <Link to="messages/1">Vai alla quote</Link>
              </>
            }
          />
          <Route path="messages/:quote" element={<Quote />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<User />} />
        </Route>
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
