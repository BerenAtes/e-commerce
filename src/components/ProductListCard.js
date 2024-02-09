import React from "react";
import { Link } from "react-router-dom";
export default function ProductListCard({
  imgUrl,
  text,
  title,
  className,
  gender,
  categoryId,
}) {
  return (
    <div className="relative overflow-hidden">
      <Link
        to={`/shop/${gender}/${categoryId}`} // ilgili kategoriye yönlendirme
        className="relative overflow-hidden"
      ></Link>
      <img
        className="w-full h-60 object-cover"
        src={imgUrl}
        alt="imgShopCard"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-clr-light">
        <span className="font-bold block">{title}</span>
        <span className="text-[0.875rem] block">
          {text} {gender}
        </span>
      </div>
    </div>
  );
}
