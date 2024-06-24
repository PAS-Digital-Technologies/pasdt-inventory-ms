import React from "react";
import { CategoryCard } from "../../../components";
import { CATEGORY_CARDS_DATA } from "../../../config/const";

const CategoriesSidebar = () => {
  return (
    <div className="w-full ">
      {CATEGORY_CARDS_DATA.map((item, index) => (
        <CategoryCard name={item.name} quantity={item.quantity} index={index} />
      ))}
    </div>
  );
};

export default CategoriesSidebar;
