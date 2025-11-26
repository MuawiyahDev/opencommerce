import React from "react";
import ProductCard from "@/components/shared/ProductCard";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShopPage = () => {
  return (
    <>
      <div className="bg-white shadow-custom py-3 px-5 rounded-md mb-5 flex items-center justify-between">
        <h4 className="font-medium text-lg">Shop</h4>

        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex items-center gap-3">
            <Label>Show</Label>
            <Select defaultValue="12">
              <SelectTrigger className="w-[100px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[12, 24, 36, 48, 75, 90].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-3">
            <Label>Sort by</Label>
            <Select defaultValue="Default">
              <SelectTrigger className="w-[100px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {["Default", "Price (Low > High)", "Price (High > Low)"].map(
                  (val) => (
                    <SelectItem key={val} value={val}>
                      {val}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 sm:gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductCard
            key={index}
            imageSrc={`/products/${index + 1}.png`}
            title="Full Sleeve Hoodie Jacket Full Sleeve Hoodie Jacket"
            href="/product/1"
            price={300}
            originalPrice={340}
          />
        ))}
      </div>
    </>
  );
};

export default ShopPage;
