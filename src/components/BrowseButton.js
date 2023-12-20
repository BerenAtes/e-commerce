import React, { useState } from "react";
import { IoCartOutline, IoCart, IoEyeOutline, IoEye } from "react-icons/io5";

const BrowseButton = () => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleCartClick = () => {
    setAddedToCart(!addedToCart);
  };

  const handleShowDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={handleShowDetailsClick}
        className={`flex items-center p-2 bg-white rounded-full focus:outline-none border border-gray-300 hover:bg-gray-100 transition duration-300 ${
          showDetails ? "text-blue-500" : "text-gray-700"
        }`}
      >
        {showDetails ? (
          <IoEye className="text-xl" />
        ) : (
          <IoEyeOutline className="text-xl" />
        )}
      </button>
    </div>
  );
};

export default BrowseButton;
