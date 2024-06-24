import React from "react";
import Header from "./Header";
import CategoriesSidebar from "../components/CategoriesSidebar/CategoriesSidebar";

const Layout = (props) => {
  return (
    <div className="w-screen h-screen scroll-smooth  ">
      <div className="w-full h-[8%] sticky top-0 z-20">
        <Header />
      </div>
      <div className="flex h-[92%] w-full justify-between ">
        <div className="basis-[17%] h-full overflow-y-auto p-2 custom-scrollbar scrollbar-sm">
          <CategoriesSidebar />
        </div>
        <div className="basis-[83%] h-full overflow-y-auto custom-scrollbar bg-gray-100 scrollbar-md">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
