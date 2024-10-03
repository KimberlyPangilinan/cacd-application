import { createBrowserRouter } from "react-router-dom";
import { UserRoutes } from "../pages/user/Route";
import { HomePage } from "../pages/user/HomePage";
import { Login } from "../pages/Login";


export const router = createBrowserRouter([
  { 
    path: "/",
    element:  <UserRoutes/>,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  { 
    path: "/login",
    element:  <Login/>,
  },
]);
