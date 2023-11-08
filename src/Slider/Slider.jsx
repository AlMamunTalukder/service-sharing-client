import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <div className="flex justify-center align-middle items-center w-auto mt-5 mx-10 lg:mx-56 ">
      <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
        <div>
          <img src="https://i.ibb.co/9pkk78x/3.png" alt="Image 1" />
        </div>
        <div>
          <img src="https://i.ibb.co/vH1WQGH/1.png" alt="Image 2" />
        </div>
        <div>
          <img src="https://i.ibb.co/GWxLrCL/2.png" alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
