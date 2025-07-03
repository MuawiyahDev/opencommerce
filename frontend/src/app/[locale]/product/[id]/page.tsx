import ProductDetail from "@/components/feature/product/ProductDetail";
import RelatedProducts from "@/components/feature/product/RelatedProducts";
import React from "react";

const ProductPage = () => {
  return (
    <div className="my-10">
      <ProductDetail />
      <RelatedProducts />
    </div>
  );
};

export default ProductPage;
