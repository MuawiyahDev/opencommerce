import BannerSlider from "@/components/feature/home/BannerSlider";
import React from "react";

const HomePage = () => {
  return (
    <>
      <BannerSlider images={["/banners/1.jpg", "/banners/2.jpg"]} />
    </>
  );
};

export default HomePage;
