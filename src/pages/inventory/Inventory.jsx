import React, { useState } from "react";
import { AddProductModal, ProductCard } from "../../components";
import Button from "../../common/components/button/Button";

const Inventory = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center p-2 bg-gray-100 sticky top-0 z-10 ">
        <div className="w-96">
          <input
            className="w-full p-2 px-4 rounded-lg outline-none shadow-md"
            type="search"
            placeholder="Search Students"
          />
        </div>
        <div>
          <Button color="blue" onClick={() => setOpen(!open)}>
            Add Product
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 overflow-y-auto">
        {Array(21)
          .fill(0)
          .map((item) => (
            <ProductCard />
          ))}
      </div>
      <AddProductModal
        open={open}
        name={"Add Product"}
        onClose={() => setOpen(!open)}
      />
    </div>
  );
};

export default Inventory;
