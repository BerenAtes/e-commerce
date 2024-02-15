import React from "react";
import { Link } from "react-router-dom";

export default function ProductListCard({
  imgUrl,
  text,
  title,
  className,
  categoryId,
  handleCategoryClick,
  category,
  gender,
  categorySlug,
}) {
  const genderText = gender === "k" ? "Kadın" : gender === "e" ? "Erkek" : "";
  return (
    <div className="relative overflow-hidden">
      <div className="cursor-pointer relative overflow-hidden">
        <img
          className="w-full h-60 object-cover"
          src={imgUrl}
          alt="imgShopCard"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-clr-light">
        <span className="font-bold block">
          {genderText} {title}
        </span>
        <span className="text-[0.875rem] block">{text}</span>
        <span className="text-[0.875rem] block"></span>
      </div>
    </div>
  );
}
