import React, { useState } from "react";
import { IoCartOutline, IoCart } from "react-icons/io5";

const ShoppingCartButton = () => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleCartClick = () => {
    setAddedToCart(!addedToCart);
  };

  return (
    <button
      onClick={handleCartClick}
      className={`flex items-center p-2 bg-white rounded-full focus:outline-none border border-gray-300 hover:bg-gray-100 transition duration-300 ${
        addedToCart ? "bg-green-500 text-white" : "text-gray-700"
      }`}
    >
      {addedToCart ? (
        <IoCart className="text-xl" />
      ) : (
        <IoCartOutline className="text-xl" />
      )}
    </button>
  );
};

export default ShoppingCartButton;
