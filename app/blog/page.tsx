import BlogSection from "@/components/Blog/BlogSection";
import HeroSection from "@/components/Blog/HeroSection";
import PageSelection from "@/components/PageSelection/Pageselection";
import IconsSection from "@/components/Shop/IconsSection";
import React from "react";

function page() {
  return (
    <div>
      <HeroSection />
      <BlogSection />
      <PageSelection />
      <IconsSection />
    </div>
  );
}

export default page;
