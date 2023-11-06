import { createBrowserRouter } from "react-router-dom";

import Error from "../Error/Error";

import Main from "../Layout/Main";
import Home from "./../Pages/Home/Home";
import LogIn from "../LogIn/LogIn";
import Registration from "../Registration/Registration";
import AddServices from "../Services/AddServices/AddServices";
import AllServices from "../Services/Services/AllServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addServices",
        element: <AddServices />,
      },
      {
        path: "/allServices",
        element: <AllServices />,
      },
      {
        path: "/logIn",
        element: <LogIn />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);
export default router;
