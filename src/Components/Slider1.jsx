import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider1({ products }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -350 : 350, // Adjust scroll speed
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
        className="flex gap-4 cursor-pointer overflow-x-scroll scroll-smooth scrollbar-hide snap-x py-2 "
      >
        {products.map((product, index) => (
          <div
            key={index}
            className={` ${product.First === "f" ? "ml-32" : ""} ${
              product.Last === "l" ? "mr-32" : ""
            } transition-transform duration-500 ease-in-out hover:shadow-lg hover:scale-[101%] relative lg:min-w-[400px] min-w-[320px] h-[500px] snap-center flex-shrink-0 rounded-3xl overflow-hidden `}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[510px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent "></div>
            <div
              className={`absolute text-sm top-5 left-5 mx-3 font-semibold text-blue-400 space-y-2 tracking-tighter`}
            >{product.B}</div>
            <div
              className={`absolute top-14 left-5 mx-3 ${
                product.I === "W" ? "text-gray-900" : "text-white"
              } space-y-2 tracking-tighter`}
            >
              <h3 className="text-3xl font-medium ">{product.name}</h3>
              <p className=" font-semibold">{product.desc}</p>
              <p className="text-sm ">{product.price}</p>
            </div>
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
