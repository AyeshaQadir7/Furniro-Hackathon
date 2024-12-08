import HeroSection from "@/components/Shop/HeroSection";
import React from "react";
import PageSelection from "@/components/PageSelection/Pageselection";
import IconsSection from "@/components/Shop/IconsSection";
import ProductSection from "@/components/ProductSection/ProductSection";

function page() {
  return (
    <div>
      <HeroSection />
      <ProductSection />
      <PageSelection />
      <IconsSection />
    </div>
  );
}

export default page;
