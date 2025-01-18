import HeroSection from "@/components/Shop/HeroSection";
import React from "react";
import PageSelection from "@/components/PageSelection/Pageselection";
import IconsSection from "@/components/Shop/IconsSection";
import ShopProduct from "@/components/Shop/ShopProduct";

function page() {
  return (
    <div>
      <HeroSection />
      <ShopProduct />
      <PageSelection />
      <IconsSection />
    </div>
  );
}

export default page;
