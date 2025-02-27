import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import inWith from "../assets/images/In_with_the.jpeg";

export default function Slider3({ products ,first_img }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full mx-auto group m-10 overflow-hidden">
      {/* Left Button */}
      <button
        className="lg:visible invisible cursor-pointer z-10 absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-70 transition-opacity duration-1000 bg-gray-300 shadow-md rounded-full p-2"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={35} />
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-4 cursor-pointer overflow-x-scroll scroll-smooth scrollbar-hide snap-x py-2"
      >
        {/* Introductory Card */}
        <div className="ml-32 transition-transform duration-500 ease-in-out hover:shadow-lg hover:scale-[101%] relative w-[320px] h-[500px] snap-center flex-shrink-0 rounded-3xl overflow-hidden bg-white">
          <img
            src={first_img.img}
            alt="New Accessories"
            className="absolute h-full object-cover rounded-lg mb-4 "
          />
          <div className="absolute top-5  w-full p-8 space-y-3">
          <h2 className="text-2xl font-semibold">{first_img.headng}</h2>
          <p className="text-gray-600 absolute font-medium ">
          {first_img.para}
          </p>
          </div>
        </div>

        {/* Product Cards */}
        {products.map((product, index) => (
          <div
            key={index}
            className={`transition-transform duration-500 ease-in-out ${
              product.Last === "l" ? "mr-32" : ""
            } hover:shadow-lg hover:scale-[101%] relative w-[320px] h-[500px] snap-center flex-shrink-0 rounded-3xl overflow-hidden bg-white`}
          >
            <div className="flex justify-center h-[360px] py-14 ">
              <img src={product.img} alt={product.title} className="h-full" />
            </div>
            {product.tag && (
                <div className="text-orange-600 p-2 px-7 absolute text-xs font-semibold mb-2">
                  {product.tag}
                </div>
              )}
            <div className="p-2 px-7 absolute top-96">
              
              <div className="flex-col justify-center space-y-5">
                <h3 className="text font-semibold text-gray-900 ">
                  {product.title}
                </h3>
              </div>
            </div>
            <p className="absolute bottom-3 left-7 text-sm">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        className="lg:visible invisible cursor-pointer absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-70 transition-opacity duration-1000 bg-gray-300 shadow-md rounded-full p-2"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={35} />
      </button>
    </div>
  );
}
