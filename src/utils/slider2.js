import slider2 from "../assets/slider/slider2.svg";
import AwesomeSlider from "react-awesome-slider";
import { Link } from "react-router-dom/cjs/react-router-dom";
import sliderman from "../assets/icons/sliderman.svg";

const HomeSlider2 = () => {
  return (
    <>
      <div className="relative aspect-w-2 aspect-h-1 text-clr-light">
        <img className="object-cover w-full h-full" src={slider2} alt="img" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative container-small z-10 text-center">
            <div className="flex flex-col justify-start font-bold w-full md:w-[60%]">
              <span className="text-xl md:text-2xl block">SUMMER 2020</span>
              <h2 className="text-4xl md:text-6xl mb-4">NEW COLLECTION</h2>
              <span className="text-lg md:text-xl block">
                We know how large objects will act, but things on a small scale.
              </span>
              <Link
                className="btn-md btn-success text-lg md:text-xl mt-4"
                to="/shop"
              >
                ADD TO CART
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSlider2;
