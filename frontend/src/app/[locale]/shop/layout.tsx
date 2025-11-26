import Sidebar from "@/components/feature/shop/Sidebar";
import React from "react";

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="lg:w-[300px]">
          <Sidebar />
        </div>
        <div className="lg:w-[calc(100%_-_300px)]">{children}</div>
      </div>
    </div>
  );
};

export default ShopLayout;
