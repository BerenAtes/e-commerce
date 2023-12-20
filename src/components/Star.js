import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = () => {
  const [star, setStar] = useState(0);

  const handleStarClick = (index) => {
    setStar(index + 1);
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`cursor-pointer text-xl ${
            index < star ? "text-yellow-500" : "text-gray-300"
          }`}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};

export default Star;
