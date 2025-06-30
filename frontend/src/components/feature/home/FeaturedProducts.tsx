import ProductCard from "@/components/shared/ProductCard";
import { useTranslations } from "next-intl";
import React from "react";

const FeaturedProducts = () => {
  const t = useTranslations("home.featuredProducts");

  return (
    <div className="mt-28">
      <div className="container">
        <div>
          <h1 className="text-3xl font-bold text-center">{t("title")}</h1>
          <p className="text-center text-gray-500 mt-2.5 text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 sm:gap-4 mt-12">
          {Array.from({ length: 5 }).map((_, index) => (
            <ProductCard
              key={index}
              imageSrc="/products/1.jpg"
              title="TACVASEN Mens Bomber Jacket Lightweight Casual Spring Fall Windbreaker Zip Up Coat with Pocket"
              href="/products/1"
              price={300}
              originalPrice={340}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
