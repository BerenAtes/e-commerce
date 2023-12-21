import { useHistory } from "react-router-dom";
import twitter from "../assets/about/tw.png";
import insta from "../assets/about/ins.png";
import facebook from "../assets/about/fb.png";

export default function UserCardSpecial({ imgUrl, className }) {
  const history = useHistory();
  const handleCardClick = () => {
    history.push("/team");
  };

  return (
    <div
      className={`flex flex-col items-center ${className}`}
      onClick={handleCardClick}
    >
      <div className="w-56 h-40 mb-3">
        <img
          src={imgUrl}
          className="w-full h-full object-cover"
          alt="img-product"
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <h5 className="text-clr-dark font-bold text-16px pt-1.5rem">
          User Name
        </h5>
        <h6 className="text-clr-second text-14px font-bold">Profession</h6>
        <div className="flex gap-4 mt-3">
          <img src={facebook} className="w-6 h-6" alt="Facebook" />
          <img src={insta} className="w-6 h-6" alt="Instagram" />
          <img src={twitter} className="w-6 h-6" alt="Twitter" />
        </div>
      </div>
    </div>
  );
}
