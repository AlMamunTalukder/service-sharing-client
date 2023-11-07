import { createBrowserRouter } from "react-router-dom";

import Error from "../Error/Error";

import Main from "../Layout/Main";
import Home from "./../Pages/Home/Home";
import LogIn from "../LogIn/LogIn";
import Registration from "../Registration/Registration";
import AddServices from "../Services/AddServices/AddServices";
import AllServices from "../Services/Services/AllServices";

import PrivateRouter from "./../PrivateRouter/PrivateRouter";
import ServiceDetails from "../Details/ServiceDetails";

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
        element: (
          <PrivateRouter>
            <AllServices />
          </PrivateRouter>
        ),
        loader: () => fetch("http://localhost:5000/services"),
      },

      {
        path: "/logIn",
        element: <LogIn />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRouter>
            <ServiceDetails />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);
export default router;
