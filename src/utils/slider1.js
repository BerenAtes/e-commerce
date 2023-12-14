import { Link } from "react-router-dom/cjs/react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import slider from "../assets/slider/sliderimg.svg";
import slider2 from "../assets/slider/slider2.svg";

export default function HomeSlider() {
  return (
    <AwesomeSlider
      style={{
        "--slider-height-percentage": "47%",
      }}
    >
      <div className="relative aspect-[2/1] text-clr-light">
        <img className="img-absolute" src={slider} alt="img" />
        <div className="relative container-small z-10 top-[29%]">
          <div className="font-bold w-[60%] flex flex-col items-start gap-y-[2.1875rem]">
            <span>SUMMER 2020</span>
            <h2 className="text-[3.625rem]">NEW COLLECTION</h2>
            <span className="text-[1.25rem] text-left font-normal w-[60%]">
              We know how large objects will act, but things on a small scale.
            </span>
            <Link className="btn-md btn-success text-[1.25rem]" to="/shop">
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
      <div className="relative aspect-[2/1]">
        <img className="img-absolute" src={slider2} alt="img" />
      </div>
    </AwesomeSlider>
  );
}
