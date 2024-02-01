import React from "react";

export default function CategoryCard({ imgUrl, textBtn, className, onClick }) {
  const handleClick = () => {
    // onClick prop'u varsa ve bir fonksiyon ise çağır
    if (onClick && typeof onClick === "function") {
      onClick();
    }
  };

  return (
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
  );
}
