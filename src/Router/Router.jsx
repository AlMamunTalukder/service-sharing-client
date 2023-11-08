import { createBrowserRouter } from "react-router-dom";

import Error from "../Error/Error";

import Main from "../Layout/Main";
import Home from "./../Pages/Home/Home";
import LogIn from "../LogIn/LogIn";
import Registration from "../Registration/Registration";
import AddServices from "../Services/AddServices/AddServices";
import AllServices from "../Services/Services/AllServices";

import PrivateRouter from "./../PrivateRouter/PrivateRouter";

import ManageServices from "../Services/ManageServices/ManageServices";
import MySchedules from "../MySchedules/MySchedules";
import Services from "../Services/Services/Services";
import MyPendingWorks from "../MySchedules/MyPendingWorks";
import MyBookings from "../MySchedules/MyBookings";
import Details from "./../Details/Details";

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
        path: "/services",
        element: <Services />,
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
            <Details />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/manageServices",
        element: (
          <PrivateRouter>
            <ManageServices />
          </PrivateRouter>
        ),
      },
      {
        path: "/mySchedule",
        element: (
          <PrivateRouter>
            <MySchedules />
          </PrivateRouter>
        ),
      },
      {
        path: "/myBookings",
        element: (
          <PrivateRouter>
            <MyBookings />
          </PrivateRouter>
        ),
      },
      {
        path: "/pendingWorks",
        element: (
          <PrivateRouter>
            <MyPendingWorks />
          </PrivateRouter>
        ),
      },
    ],
  },
]);
export default router;
