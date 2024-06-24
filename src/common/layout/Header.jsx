import React from "react";
import { IoIosSchool } from "react-icons/io";
import { MdOutlineInventory } from "react-icons/md";
import { Link } from "react-router-dom";
// import { APP_URL } from "../../config";

const Header = () => {
  return (
    <header className="w-full h-full flex justify-between items-center px-4 py-1.5 text-inherit shadow-md">
      <div className="flex items-center gap-4">
        <MdOutlineInventory size={30} />
        <span className="text-2xl font-semibold">
          Inventory Management System
        </span>
      </div>

      {/* <Link to={APP_URL.PROFILE}> */}
      <div className="text-xl font-semibold cursor-pointer">Admin</div>
      {/* </Link> */}
    </header>
  );
};

export default Header;
