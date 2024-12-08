import HeroSection from "@/components/Home/HeroSection/HeroSection";

import RangeSection from "@/components/Home/RangeSection/RangeSection";
import React from "react";
import ShareSetup from "@/components/Home/ShareSetup/ShareSetup";
import RoomInspo from "@/components/Home/RoomInspo/RoomInspo";
import ProductSection from "@/components/ProductSection/ProductSection";
import Button1 from "@/components/Button/Button1";

function page() {
  return (
    <div>
      <HeroSection />
      <RangeSection />
      <ProductSection />
      <Button1 />
      <RoomInspo />
      <ShareSetup />
    </div>
  );
}

export default page;
