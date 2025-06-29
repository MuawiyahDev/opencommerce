import React from "react";
import BrandCard from "@/components/shared/BrandCard";
import { useTranslations } from "next-intl";

const data = [
  { name: "Maxtrax", image: "/brands/maxtrax.jpg" },
  { name: "DECKED", image: "/brands/decked.jpg" },
  { name: "STEDI", image: "/brands/stedi.jpg" },
  { name: "Alu-Cab", image: "/brands/alucab.png" },
  { name: "IRONMAN", image: "/brands/ironman.jpg" },
  { name: "FRONT RUNNER", image: "/brands/frontrunner.jpg" },
  { name: "KAON", image: "/brands/kaon.jpg" },
  { name: "AFN", image: "/brands/afn.jpg" },
  { name: "Maxtrax", image: "/brands/maxtrax.jpg" },
  { name: "DECKED", image: "/brands/decked.jpg" },
  { name: "STEDI", image: "/brands/stedi.jpg" },
  { name: "Alu-Cab", image: "/brands/alucab.png" },
  { name: "IRONMAN", image: "/brands/ironman.jpg" },
  { name: "FRONT RUNNER", image: "/brands/frontrunner.jpg" },
  { name: "KAON", image: "/brands/kaon.jpg" },
  { name: "AFN", image: "/brands/afn.jpg" },
];

const Brands = ({}) => {
  const t = useTranslations("home.brands");

  return (
    <div className="mt-28">
      <div className="container">
        <div>
          <h1 className="text-3xl font-bold text-center">{t("title")}</h1>
          <p className="text-center text-gray-500 mt-2.5 text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-2 mt-12">
          {data.map((brand, index) => (
            <BrandCard key={index} name={brand.name} logo={brand.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
