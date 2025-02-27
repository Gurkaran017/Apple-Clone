import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function ProductSlider({ products }) {

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setStartIndex(window.innerWidth <= 768 ? 1 : 0); // Adjust breakpoint as needed
    };

    handleResize(); // Set initial index
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -1 : 1,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full mx-auto group">
      {/* Left Button (Hidden by Default, Visible on Hover) */}
      <button
        className="lg:visible invisible cursor-pointer absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-70 transition-opacity duration-1000 bg-gray-300 shadow-md rounded-full p-2"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={35} />
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className=" cursor-pointer flex gap-6 overflow-x-scroll scrollbar-hide scroll-smooth p-4 no-scrollbar"
        style={{ scrollSnapType: "x mandatory", whiteSpace: "nowrap" }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            className={`flex flex-col items-center min-w-[120px] snap-center ${
              product.name === "First" || product.name === "Last" ? "opacity-0" : ""
            }`}
          >
            <img src={product.image} alt={product.name} />
            <p className="mt-2 text-sm">{product.name}</p>
          </div>
        )).slice(startIndex)}
      </div>

      {/* Right Button (Hidden by Default, Visible on Hover) */}
      <button
        className="lg:visible invisible cursor-pointer absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-70 transition-opacity duration-1000 bg-gray-300 shadow-md rounded-full p-2"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={35} />
      </button>
    </div>
  );
}
