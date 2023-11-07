import Services from "../../Services/Services/Services";
import GetService from "./../GetService/GetService";
import DownloadApp from "./../DownloadApp/DownloadApp";
import GetInTouch from "./../GetInTouch/GetInTouch";
import Slider from "./../../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Services />
      <GetService />
      <DownloadApp />
      <GetInTouch />
    </div>
  );
};

export default Home;
