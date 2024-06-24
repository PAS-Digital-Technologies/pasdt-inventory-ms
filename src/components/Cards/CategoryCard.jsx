import React from "react";

const CategoryCard = ({ name, quantity, index }) => {
  return (
    <div
      className={`w-60   mb-2 rounded-lg px-4 py-1 cursor-pointer ${
        index === 0 ? "bg-primary text-white" : "bg-gray-200"
      } hover:bg-primary hover:text-white`}
    >
      <h1 className="text-lg font-semibold first-letter:uppercase">{name}</h1>
      <p className="text-sm">{quantity} items</p>
    </div>
  );
};

export default CategoryCard;
