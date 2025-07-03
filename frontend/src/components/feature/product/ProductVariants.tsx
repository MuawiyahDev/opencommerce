"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type VariantProps = {
  colors: string[];
  sizes: string[];
};

const ProductVariants: React.FC<VariantProps> = ({ colors, sizes }) => {
  const t = useTranslations("productDetail");

  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]);

  return (
    <div className="space-y-4 mt-8">
      {/* Color Selector */}
      <div className="flex items-center gap-5">
        <h4 className="text-sm font-medium w-10">{t("color")}: </h4>
        <div className="flex space-x-2.5">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={twMerge(
                "rounded-full border-2 p-0.5 transition cursor-pointer",
                selectedColor === color ? "border-primary" : "border-gray-300"
              )}
              aria-label={`Color ${color}`}
            >
              <span
                className="block w-6 h-6 rounded-full"
                style={{ backgroundColor: color }}
              ></span>
            </button>
          ))}
        </div>
      </div>

      {/* Size Selector */}
      <div className="flex items-center gap-5">
        <h4 className="text-sm font-medium w-10">{t("size")}: </h4>
        <div className="flex space-x-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={twMerge(
                "px-3 py-1 border text-sm font-medium rounded transition cursor-pointer",
                selectedSize === size
                  ? "bg-primary text-white border-primary"
                  : "border-gray-300 hover:border-primary"
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductVariants;
