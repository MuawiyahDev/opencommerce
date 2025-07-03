import ProductCard from "@/components/shared/ProductCard";
import { useTranslations } from "next-intl";
import React from "react";

const RelatedProducts = () => {
  const t = useTranslations("productDetail");

  return (
    <div className="mt-28">
      <div className="container">
        <h1 className="text-3xl font-bold">{t("relatedProducts")}</h1>

        <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 sm:gap-4 mt-8">
          {Array.from({ length: 5 }).map((_, index) => (
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
      </div>
    </div>
  );
};

export default RelatedProducts;
