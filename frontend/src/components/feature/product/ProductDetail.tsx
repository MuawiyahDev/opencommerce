import React from "react";
import { Check, Minus, Plus } from "lucide-react";
import ProductVariants from "./ProductVariants";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import { convertNumberToLocale } from "@/lib/convertNumberToLocale";

const ProductDetail = () => {
  const t = useTranslations();
  const locale = useLocale();

  const images = [
    "/products/1.png",
    "/products/2.png",
    "/products/3.png",
    "/products/4.png",
    "/products/5.png",
  ];

  return (
    <div>
      <div className="container">
        <div className="flex lg:flex-row flex-col gap-16">
          <div className="lg:w-2/5 flex lg:flex-row flex-col gap-5 mx-auto">
            <div className="flex lg:flex-col flex-row flex-wrap gap-2 lg:order-1 order-2">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={twMerge(
                    "border rounded-lg overflow-hidden p-1 transition",
                    index === 0 && "border-primary"
                  )}
                >
                  <Image
                    src={img}
                    alt=""
                    width={80}
                    height={80}
                    className="bg-gray-100 object-cover rounded-lg w-[80px] h-[80px]"
                  />
                </div>
              ))}
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden max-w-[480px] max-h-[480px] lg:order-2 order-1">
              <Image
                src="/products/1.png"
                alt=""
                width={480}
                height={480}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="flex md:flex-row flex-col justify-between gap-5">
              <h1 className="text-3xl font-semibold">
                Full Sleeve Hoodie Jacket
              </h1>

              <div className="items-center justify-end md:flex hidden">
                <Image
                  src="/brands/kaon.jpg"
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-lg w-full h-[50px] object-cover"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <span className="block text-primary text-2xl font-semibold">
                $480
              </span>

              <span className="block text-gray-500 text-lg font-semibold line-through">
                $500
              </span>
            </div>

            <p className="text-gray-500 my-6">
              Organise your camping gear with our new branded Ammo Boxes – Ideal
              for camping, overlanding or storing of equipment. Organise your
              camping gear with our new branded Ammo Boxes – Ideal for camping,
              overlanding or storing of equipment.
            </p>

            <div className="text-green-600 font-semibold flex items-center gap-2">
              <Check size={20} />
              <span>{t("productDetail.inStock")}</span>
            </div>

            <ProductVariants
              colors={["#000000", "#FF0000", "#00FF00", "#0000FF"]}
              sizes={["S", "M", "L", "XL"]}
            />

            <div className="mt-10 flex items-center gap-6">
              <div className="flex items-center gap-4">
                <button className="w-8 h-8 bg-gray-100 text-gray-500 flex items-center justify-center rounded-full">
                  <Minus size={18} />
                </button>
                <span className="block text-sm text-center">
                  {convertNumberToLocale(1, locale)}
                </span>
                <button className="w-8 h-8 bg-gray-100 text-gray-500 flex items-center justify-center rounded-full">
                  <Plus size={18} />
                </button>
              </div>

              <Button>{t("common.addToCart")}</Button>
            </div>

            <div className="mt-6 pt-6 border-t">
              <ul className="space-y-3">
                <li className="text-sm text-gray-500 flex items-center">
                  <b className="text-foreground w-24 block">
                    {t("productDetail.inStock")}:
                  </b>{" "}
                  HRYUSG67EG
                </li>
                <li className="text-sm text-gray-500 flex items-center">
                  <b className="text-foreground w-24 block">
                    {t("productDetail.category")}:
                  </b>{" "}
                  Fashion
                </li>
                <li className="text-sm text-gray-500 flex items-center">
                  <b className="text-foreground w-24 block">
                    {t("productDetail.brand")}:
                  </b>{" "}
                  KAON
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
