import logo1 from "../assets/productList/logos/fa-brands-1.svg";
import logo2 from "../assets/productList/logos/fa-brands-2.svg";
import logo3 from "../assets/productList/logos/fa-brands-3.svg";
import logo4 from "../assets/productList/logos/fa-brands-4.svg";
import logo5 from "../assets/productList/logos/fa-brands-5.svg";
import logo6 from "../assets/productList/logos/fa-brands-6.svg";

function Logos() {
  return (
    <div className="flex flex-wrap justify-between items-center gap-[2rem] py-[3.125em]">
      <div className="flex flex-col items-center">
        <img src={logo1} alt="logo1" />
      </div>
      <div className="flex flex-col items-center">
        <img src={logo2} alt="logo2" />
      </div>
      <div className="flex flex-col items-center">
        <img src={logo3} alt="logo3" />
      </div>
      <div className="flex flex-col items-center">
        <img src={logo4} alt="logo4" />
      </div>
      <div className="flex flex-col items-center">
        <img src={logo5} alt="logo5" />
      </div>
      <div className="flex flex-col items-center">
        <img src={logo6} alt="logo6" />
      </div>
    </div>
  );
}

export default function ProductLsLogos() {
  return (
    <div className="bg-bgclr-ligth-gray-1">
      <div className="container-small py-[3.125em]">
        <Logos />
      </div>
    </div>
  );
}
