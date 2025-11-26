import React from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

const PriceRange = () => {
  return (
    <div className="bg-white shadow-custom py-4 rounded-md">
      <h4 className="font-medium text-lg px-4 border-b pb-4 mb-4">
        Price Range
      </h4>

      <div className="space-y-5 px-4">
        <Slider defaultValue={[1, 100]} min={1} max={100} step={1} />

        <div className="flex items-center justify-between gap-10">
          <Input type="number" defaultValue={1} className="w-[100px]" />
          <Input type="number" defaultValue={100} className="w-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
