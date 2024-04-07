import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assets/img/banner1.png";
import banner2 from "../../assets/img/banner2.png";
import banner3 from "../../assets/img/banner3.png";

const Banner = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div>
        <img src={banner1} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={banner2} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={banner3} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Banner;
