import { useHistory } from "react-router-dom";
import Product from "../pages/Product";

export default function ProductCard({
  imgUrl,
  className,
  name,
  description,
  price,
  discountedPrice,
  rating,
}) {
  const history = useHistory();
  const handleCardClick = () => {
    history.push("/shop/product");
  };
  const truncatedDescription =
    description && description.length > 20
      ? `${description.slice(0, 20)}...`
      : description;

  return (
    <div className={className} onClick={handleCardClick}>
      <div className="w-[230px] relative  aspect-[80/100] ">
        <img src={imgUrl} className="" alt="img-product" />
      </div>
      <div className="flex flex-col grow gap-y-[0.5rem]">
        <h5 className="text-clr-dark font-bold text-[16px] pt-[1.5rem]">
          {name}
        </h5>
        <span className="text-clr-second text-[14px] font-bold">
          {truncatedDescription}
        </span>
        <div className="">
          <span className="text-clr-muted text-[16px] font-bold pr-[.5rem]">
            {price}
          </span>
          <span className="text-clr-secondary-1 text-[16px] font-bold">
            {price} $
          </span>
        </div>
        <div className="flex  gap-x-[.2rem] justify-center ">
          <div className=" pr-[1rem] w-[5%] aspect-square rounded-full bg-bgclr-primary" />
          <div className="pr-[1rem] w-[5%] aspect-square rounded-full bg-bgclr-secondary-1" />
          <div className="pr-[1rem] w-[5%] aspect-square rounded-full bg-bgclr-alert" />
          <div className="pr-[1rem] w-[5%] aspect-square rounded-full bg-bgclr-dark" />
        </div>
      </div>
    </div>
  );
}
