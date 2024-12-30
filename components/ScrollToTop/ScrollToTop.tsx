"use client";
import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-Gold hover:bg-yellow-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 z-50"
        >
          <ChevronUp strokeWidth={1.5} size={25} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
