import slider2 from "../assets/slider/slider2.svg";
import AwesomeSlider from "react-awesome-slider";
import { Link } from "react-router-dom/cjs/react-router-dom";
import sliderman from "../assets/icons/sliderman.svg";

const HomeSlider2 = () => {
  return (
    <AwesomeSlider
      style={{
        "--slider-height-percentage": "50%",
      }}
    >
      <div className=" relative aspect-[2/1] text-clr-light">
        <img className="img-main" src={slider2} alt="img" />
        <div className="relative container-small z-10 top-[30%]">
          <div className="font-bold w-[60%] flex flex-col  items-start gap-y-[2.1875rem]">
            <span>SUMMER 2020</span>
            <h2 className="text-[3.625rem]">NEW COLLECTION</h2>
            <span className="text-[1.25rem] text-left font-normal w-[60%]">
              We know how large objects will act, but things on a small scale.
            </span>
            <Link className="btn-md btn-success text-[1.25rem]" to="/shop">
              SHOP NOW
            </Link>

            <div className=" absolute  aspect-[2/1] z-20 "></div>
          </div>
        </div>
      </div>
    </AwesomeSlider>
  );
};

export default HomeSlider2;
