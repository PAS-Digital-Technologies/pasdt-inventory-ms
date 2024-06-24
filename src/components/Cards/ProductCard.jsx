import React from "react";
import dummyProduct from "../../assets/dummy-product.jpg";
import dummyQR from "../../assets/dummy-qr.png";

const ProductCard = () => {
  return (
    <div className="h-28 w-96 flex justify-between gap-x-3 rounded-lg p-2 hover:shadow-md  cursor-pointer">
      <div className="h-24 w-24 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover"
          src={dummyProduct}
          alt="dummy-product"
        />
      </div>
      <div className="w-[60%]">
        <h2 className="text-lg font-semibold">Product Name</h2>
        <p className="text-sm opacity-90 max-w-full line-clamp-3 break-words">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="my-auto">
        <img width={40} src={dummyQR} alt="dummy-qr" />
        <p className="text-xs text-center">P-193</p>
      </div>
    </div>
  );
};

export default ProductCard;
