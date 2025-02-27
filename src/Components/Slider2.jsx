import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
const colors = {
    green: "text-green-600",
    blue: "text-blue-600",
    orange: "text-orange-600",
    purple: "text-purple-600",
  };


export default function Slider2({ features }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full mx-auto group overflow-hidden p-6 bg-gray-100">
      {/* Left Button */}
      <button
        className="lg:visible invisible cursor-pointer z-10 absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-70 transition-opacity duration-1000 bg-gray-300 shadow-md rounded-full p-2"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={30} />
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-scroll p-3 scroll-smooth scrollbar-hide snap-x"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className={`cursor-pointer t hover:scale-[101%] transition-transform duration-500 ease-in-out w-[320px] h-[230px] ${feature.First === "f" ? "lg:ml-24" : ""} ${
                feature.Last === "l" ? "lg:mr-24" : ""
              } bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:shadow-gray-300 transition-shadow duration-300 flex flex-col  items-start space-y-3`}
          >
            <feature.icon className={`text-4xl ${colors[feature.text]}`} /> {/* React Icon */}
            <div className="space-y-1">
              <h3 className={`text-xl font-semibold  leading-tight  ${colors[feature.text]}`}>{feature.title}</h3>
            <p className="text-black font-medium leading-tight text-xl">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        className="lg:visible invisible cursor-pointer absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-70 transition-opacity duration-1000 bg-gray-300 shadow-md rounded-full p-2"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
}
