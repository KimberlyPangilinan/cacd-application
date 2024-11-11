import { createBrowserRouter } from "react-router-dom";
import { UserRoutes, UserRoutesWithoutFooter } from "../pages/user/Route";
import { HomePage } from "../pages/user/HomePage";
import { Login } from "../pages/Login";
import EventsPage from "../pages/user/EventsPage";
import GalleryPage from "../pages/user/GalleryPage";
import { AboutPage } from "../pages/user/AboutPage";
import { ContactPage } from "../pages/user/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserRoutes />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "/gallery",
    element: <UserRoutesWithoutFooter />,
    children: [
      {
        path: "",
        element: <GalleryPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
