import logo1 from "../assets/productList/logos/fa-brands-1.svg";
import logo2 from "../assets/productList/logos/fa-brands-2.svg";
import logo3 from "../assets/productList/logos/fa-brands-3.svg";
import logo4 from "../assets/productList/logos/fa-brands-4.svg";
import logo5 from "../assets/productList/logos/fa-brands-5.svg";
import logo6 from "../assets/productList/logos/fa-brands-6.svg";

function Logos() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-2 py-4 sm:py-3.125em">
      <div className="mb-4 sm:mb-0">
        <img src={logo1} alt="logo1" className="w-35 h-35" />
      </div>
      <div className="mb-4 sm:mb-0">
        <img src={logo2} alt="logo2" className="w-35 h-35" />
      </div>
      <div className="mb-4 sm:mb-0">
        <img src={logo3} alt="logo3" className="w-35 h-35" />
      </div>
      <div className="mb-4 sm:mb-0">
        <img src={logo4} alt="logo4" className="w-35 h-35" />
      </div>
      <div className="mb-4 sm:mb-0">
        <img src={logo5} alt="logo5" className="w-35 h-35" />
      </div>
      <div className="mb-4 sm:mb-0">
        <img src={logo6} alt="logo6" className="w-35 h-35" />
      </div>
    </div>
  );
}

export default function ProductLsLogos() {
  return (
    <div className="bg-bgclr-light-gray-1">
      <div className="container-small py-4 sm:py-3.125em">
        <Logos />
      </div>
    </div>
  );
}
