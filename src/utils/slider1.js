import { Link } from "react-router-dom/cjs/react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import slider from "../assets/slider/sliderimg.svg";
import slider2 from "../assets/slider/slider2.svg";

export default function HomeSlider() {
  const mobileImageStyle = {
    height: "100%", // Mobil boyutta tam ekran olacak şekilde ayarlandı
  };

  const mobileTextContainerStyle = {
    top: "50%",
    transform: "translateY(-50%)",
    padding: "2rem", // Mobilde daha küçük bir iç boşluk
    width: "100%", // Mobilde tam genişlik
    right: 0,
  };

  return (
    <>
      <div className="relative aspect-[2/1] text-clr-light">
        <img
          className="img-main object-cover w-full h-full"
          style={mobileImageStyle}
          src={slider}
          alt="img"
        />
        <div
          className="relative container-small z-10 top-[50%] transform -translate-y-1/2 p-4 md:p-0 md:w-[60%] md:right-0 absolute"
          style={mobileTextContainerStyle}
        >
          <div className="font-bold flex flex-col items-start gap-y-4">
            <span className="text-base md:text-lg">SUMMER 2020</span>
            <h2 className="text-2xl md:text-4xl">NEW COLLECTION</h2>
            <span className="text-lg md:text-xl">
              We know how large objects will act, but things on a small scale.
            </span>
            <Link className="btn-md btn-success text-lg md:text-xl" to="/shop">
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
