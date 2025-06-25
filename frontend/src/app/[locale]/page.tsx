import BannerSlider from "@/components/feature/home/BannerSlider";
import FeaturedCategory from "@/components/feature/home/FeaturedCategory";
import React from "react";

const HomePage = () => {
  return (
    <>
      <BannerSlider images={["/banners/1.jpg", "/banners/2.jpg"]} />
      <FeaturedCategory />
    </>
  );
};

export default HomePage;
