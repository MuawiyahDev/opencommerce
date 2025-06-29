import React from "react";
import { Truck, RefreshCw, ShieldCheck, Headphones } from "lucide-react";

import BannerSlider from "@/components/feature/home/BannerSlider";
import FeaturedCategory from "@/components/feature/home/FeaturedCategory";
import FeaturedProducts from "@/components/feature/home/FeaturedProducts";
import ValueProps from "@/components/feature/home/ValueProps";
import Brands from "@/components/feature/home/Brands";

const HomePage = () => {
  const valuePropsData = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $50",
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "7-day hassle-free returns",
    },
    {
      icon: ShieldCheck,
      title: "Secure Checkout",
      description: "SSL encrypted payments",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "We're here to help anytime",
    },
  ];

  return (
    <>
      <BannerSlider images={["/banners/1.jpg", "/banners/2.jpg"]} />
      <ValueProps items={valuePropsData} />
      <FeaturedCategory />
      <FeaturedProducts />
      <Brands />
    </>
  );
};

export default HomePage;
