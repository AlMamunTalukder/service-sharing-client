import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services/Services";
import GetInTouch from "../Pages/GetInTouch/GetInTouch";
import GetService from "../Pages/GetService/GetService";
import DownloadApp from "./../Pages/DownloadApp/DownloadApp";

const Main = () => {
  return (
    <div>
      <Header />
      <Services />
      <Outlet />
      <GetService />
      <DownloadApp />
      <GetInTouch />
      <Footer />
    </div>
  );
};
export default Main;
