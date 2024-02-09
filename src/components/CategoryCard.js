import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({
  imgUrl,
  textBtn,
  className,
  onClick,
  categoryId,
}) {
  const handleClick = () => {
    if (onClick && typeof onClick === "function") {
      onClick();
    }
  };

  return (
    <Link to={`/shop/${categoryId}`} className={className}>
      <div
        className={className}
        onClick={handleClick}
        style={{ position: "relative" }}
      >
        <img className="m-[1rem] " src={imgUrl} alt="Category" />
        <button className="absolute text-clr-dark bg-bgclr-light font-bold min-w-[35%] py-[.6rem] px-[1.5em] left-[0.8rem] ml-[1rem] bottom-[1rem]">
          {textBtn}
        </button>
      </div>
    </Link>
  );
}
