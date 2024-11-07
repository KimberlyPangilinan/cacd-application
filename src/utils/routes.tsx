import { createBrowserRouter } from "react-router-dom";
import { UserRoutes } from "../pages/user/Route";
import { HomePage } from "../pages/user/HomePage";
import { Login } from "../pages/Login";
import EventsPage from "../pages/user/EventsPage";


export const router = createBrowserRouter([
  { 
    path: "/",
    element:  <UserRoutes/>,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
    ],
  },
  { 
    path: "/login",
    element:  <Login/>,
  },
]);
