import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={handleLikeClick}
      className={`flex items-center p-2 bg-white rounded-full focus:outline-none border border-gray-300 hover:bg-gray-100 transition duration-300 ${
        liked ? "bg-red-500 text-white" : "text-gray-700"
      }`}
    >
      {liked ? (
        <FaHeart className="text-xl" />
      ) : (
        <FaRegHeart className="text-xl" />
      )}
    </button>
  );
};

export default LikeButton;
