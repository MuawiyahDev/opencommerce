import { useTranslations } from "next-intl";
import React from "react";
import CategoryItem from "./CategoryItem";

const FeaturedCategory = () => {
  const t = useTranslations("home.featuredCategory");

  return (
    <div className="mt-20">
      <div className="container">
        <div>
          <h1 className="text-3xl font-bold text-center">{t("title")}</h1>
          <p className="text-center text-gray-500 mt-2.5 text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid xl:grid-cols-8 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-12">
          <CategoryItem
            iconSrc="/categories/car.png"
            label="Vehicles"
            href="/categories/vehicles"
          />
          <CategoryItem
            iconSrc="/categories/home.png"
            label="Real Estate"
            href="/categories/real-estate"
          />
          <CategoryItem
            iconSrc="/categories/computer.png"
            label="Computers"
            href="/categories/computers"
          />
          <CategoryItem
            iconSrc="/categories/car.png"
            label="Vehicles"
            href="/categories/vehicles"
          />
          <CategoryItem
            iconSrc="/categories/home.png"
            label="Real Estate"
            href="/categories/real-estate"
          />
          <CategoryItem
            iconSrc="/categories/computer.png"
            label="Computers"
            href="/categories/computers"
          />
          <CategoryItem
            iconSrc="/categories/home.png"
            label="Real Estate"
            href="/categories/real-estate"
          />
          <CategoryItem
            iconSrc="/categories/computer.png"
            label="Computers"
            href="/categories/computers"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategory;
