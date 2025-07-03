import React from "react";
import { useTranslations } from "next-intl";

const Specifications = () => {
  const t = useTranslations("productDetail.productTabs");

  return (
    <div className="bg-background rounded-md p-5">
      <h3 className="text-xl font-semibold mb-6">{t("specification")}</h3>

      <div className="grid gap-5">
        <div>
          <div className="bg-primary/10 text-primary font-medium text-sm px-3.5 py-2.5 rounded-md">
            Display Features
          </div>

          <ul>
            <li className="p-3.5 border-b transition hover:bg-gray-50 text-xs flex items-center gap-2">
              <span className="text-gray-500 block sm:w-1/4 w-2/4">
                Display Size
              </span>
              <span className="font-medium block sm:w-3/4 w-2/4">27 inch</span>
            </li>
            <li className="p-3.5 border-b transition hover:bg-gray-50 text-xs flex items-center gap-2">
              <span className="text-gray-500 block sm:w-1/4 w-2/4">
                Display Type
              </span>
              <span className="font-medium block sm:w-3/4 w-2/4">LCD</span>
            </li>
            <li className="p-3.5 border-b transition hover:bg-gray-50 text-xs flex items-center gap-2">
              <span className="text-gray-500 block sm:w-1/4 w-2/4">
                Panel Type
              </span>
              <span className="font-medium block sm:w-3/4 w-2/4">Fast IPS</span>
            </li>
            <li className="p-3.5 border-b transition hover:bg-gray-50 text-xs flex items-center gap-2">
              <span className="text-gray-500 block sm:w-1/4 w-2/4">
                Resolution
              </span>
              <span className="font-medium block sm:w-3/4 w-2/4">
                FHD (1920x1080)
              </span>
            </li>
            <li className="p-3.5 border-b transition hover:bg-gray-50 text-xs flex items-center gap-2">
              <span className="text-gray-500 block sm:w-1/4 w-2/4">
                Display Size
              </span>
              <span className="font-medium block sm:w-3/4 w-2/4">27 inch</span>
            </li>
            <li className="p-3.5 border-b transition hover:bg-gray-50 text-xs flex items-center gap-2">
              <span className="text-gray-500 block sm:w-1/4 w-2/4">
                Display Type
              </span>
              <span className="font-medium block sm:w-3/4 w-2/4">LCD</span>
            </li>
            <li className="p-3.5 border-b transition hover:bg-gray-50 text-xs flex items-center gap-2">
              <span className="text-gray-500 block sm:w-1/4 w-2/4">
                Panel Type
              </span>
              <span className="font-medium block sm:w-3/4 w-2/4">Fast IPS</span>
            </li>
            <li className="p-3.5 border-b transition hover:bg-gray-50 text-xs flex items-center gap-2">
              <span className="text-gray-500 block sm:w-1/4 w-2/4">
                Resolution
              </span>
              <span className="font-medium block sm:w-3/4 w-2/4">
                FHD (1920x1080)
              </span>
            </li>
          </ul>
        </div>

        <div>
          <div className="bg-primary/10 text-primary font-medium text-sm px-3.5 py-2.5 rounded-md">
            Video Features
          </div>

          <ul>
            <li className="p-3.5 border-b transition hover:bg-gray-50 text-xs flex items-center gap-2">
              <span className="text-gray-500 block sm:w-1/4 w-2/4">
                Display Size
              </span>
              <span className="font-medium block sm:w-3/4 w-2/4">27 inch</span>
            </li>
            <li className="p-3.5 border-b transition hover:bg-gray-50 text-xs flex items-center gap-2">
              <span className="text-gray-500 block sm:w-1/4 w-2/4">
                Display Type
              </span>
              <span className="font-medium block sm:w-3/4 w-2/4">LCD</span>
            </li>
            <li className="p-3.5 border-b transition hover:bg-gray-50 text-xs flex items-center gap-2">
              <span className="text-gray-500 block sm:w-1/4 w-2/4">
                Panel Type
              </span>
              <span className="font-medium block sm:w-3/4 w-2/4">Fast IPS</span>
            </li>
            <li className="p-3.5 border-b transition hover:bg-gray-50 text-xs flex items-center gap-2">
              <span className="text-gray-500 block sm:w-1/4 w-2/4">
                Resolution
              </span>
              <span className="font-medium block sm:w-3/4 w-2/4">
                FHD (1920x1080)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
