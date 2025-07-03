import ProductDetail from "@/components/feature/product/ProductDetail";
import ProductTabs from "@/components/feature/product/ProductTabs";
import RelatedProducts from "@/components/feature/product/RelatedProducts";
import React from "react";

const ProductPage = () => {
  return (
    <div className="my-10">
      <ProductDetail />
      <ProductTabs />
      <RelatedProducts />
    </div>
  );
};

export default ProductPage;
