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
    <div className={className} onClick={handleCardClick}>
      <div className="w-[230px] relative  aspect-[80/100] ">
        <img src={imgUrl} className="" alt="img-product" />
      </div>
      <div className="flex flex-col grow gap-y-[0.5rem]">
        <h5 className="text-clr-dark font-bold text-[16px] pt-[1.5rem]">
          User Name
        </h5>
        <h6 className="text-clr-second text-[14px] font-bold">Profession</h6>
        <div className="">
          <img src={facebook} className="" alt="img-product" />
          <img src={insta} className="" alt="img-product" />
          <img src={twitter} className="" alt="img-product" />
        </div>
      </div>
    </div>
  );
}
