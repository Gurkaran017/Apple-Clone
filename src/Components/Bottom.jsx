import React from "react";
import girl from "../assets/images/girl.jpeg";
import { FaApple } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import mac from "../assets/images/mac1.png";
import iphone from "../assets/images/iphone.png";
import ipad from "../assets/images/ipad.png";
import Apple_Watch from "../assets/images/Apple_Watch.png";
import AirPods from "../assets/images/AirPods.png";
import AirTags from "../assets/images/AirTags.png";
import Apple_TV from "../assets/images/AppleTV4k.png";
import HomePod from "../assets/images/HomePod.png";
import Acces from "../assets/images/Accessories.png";
import ProductSlider from "./ProductSlider";
import iPhone16 from "../assets/images/iphone16e.jpeg";
import iPhone16Pro from "../assets/images/iphone16Pro.jpeg";
import Series10 from "../assets/images/AppleWatchSeries10.jpeg";
import MacPro from "../assets/images/MacBookPro.jpeg";
import costEMI from "../assets/images/EMI.jpeg";
import BlackUnity from "../assets/images/BlackUnity.jpeg";
import ipadMini from "../assets/images/iPadMini.jpeg";
import Slider1 from "./Slider1";
import Specialist from "../assets/images/Specialist.jpeg";
import Session from "../assets/images/Join_Free_Session.jpeg";
import enterprise from "../assets/images/enterprise.jpeg";
import Personal from "../assets/images/Personal_Setup.jpeg";
import Discover from "../assets/images/Discover_a_new.jpeg";
import Explore from "../assets/images/Explore_recom.jpeg";
import Browse from "../assets/images/Browse_Save.jpeg";
import Learn from "../assets/images/Learn_how_to.jpeg";
import Slider2 from "./Slider2";
import { IoCardOutline } from "react-icons/io5";
import { MdOutlineComputer } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import silicone from "../assets/images/Silicone_case.jpeg";
import mag_safe from "../assets/images/Magsafe.jpeg";
import Sport_Loop from "../assets/images/Sport_Loop.jpeg";
import plum_sport from "../assets/images/Plum_Sport.jpeg";
import Milanese from "../assets/images/Milanese.jpeg";
import Ultra from "../assets/images/Ultramarine.jpeg";
import Fine from "../assets/images/FineWoven.jpeg";
import charger from "../assets/images/Charger.jpeg";
import Slider3 from "./Slider3";
import get_3 from "../assets/images/Get_3.jpeg";
import airpods_4 from "../assets/images/airpods-4.jpeg";
import airpods_pro_2 from "../assets/images/airpods-pro-2.jpeg";
import powerbeat from "../assets/images/powerbeat.jpeg";
import airpod_max from "../assets/images/airpods-max.jpeg";
import homepod_midnight from "../assets/images/homepod-midnight.jpeg";
import homepod_mini from "../assets/images/homepod-mini.jpeg";
import beat_solo from "../assets/images/beats-solo.jpeg";
import beat_pill from "../assets/images/beat-pill.jpeg";
import inWith from "../assets/images/In_with_the.jpeg";
import Buy_a_new from "../assets/images/Buy_a_new_Mac.jpeg";
import Footer from "./Footer";

const Bottom = () => {
  const products = [
    { name: "First", image: mac },
    { name: "Mac", image: mac },
    { name: "iPhone", image: iphone },
    { name: "iPad", image: ipad },
    { name: "Apple Watch", image: Apple_Watch },
    { name: "AirPods", image: AirPods },
    { name: "AirTag", image: AirTags },
    { name: "Apple TV 4K", image: Apple_TV },
    { name: "HomePod", image: HomePod },
    { name: "Accessories", image: Acces },
    { name: "Last", image: Acces },
  ];

  const Slider_1 = [
    {
      name: "iPhone 16e",
      First: "f",
      I: "W",
      desc: "Build for Apple Intelligence.",
      price: "From ₹59,900.00",
      image: iPhone16,
    },
    {
      name: "iPhone 16 Pro",
      I: "B",
      desc: "Build for Apple Intelligence.",
      price: "From ₹1,19,900.00",
      image: iPhone16Pro,
    },
    {
      name: "Apple Watch Series 10",
      I: "W",
      desc: "Thinstant classic",
      price: "From ₹46,900.00",
      image: Series10,
    },
    {
      name: "MacBook Pro",
      I: "B",
      desc: "Build for Apple Intelligence.",
      price: "From ₹1,99,900.00",
      image: MacPro,
    },
    {
      name: "Get up to 24 months of No Cost EMI on selected products with eligible cards.",
      I: "W",
      image: costEMI,
    },
    {
      name: "Apple Watch Black Unity Sport Loop",
      I: "B",
      price: "From ₹24,900.00",
      image: BlackUnity,
    },
    {
      name: "iPad mini",
      Last: "l",
      I: "W",
      desc: "Build for Apple Intelligence.",
      price: "From ₹2,99,900.00",
      image: ipadMini,
    },
  ];

  const Slider_2 = [
    {
      name: "Shop one on one with a Specialist online.",
      First: "f",
      I: "W",
      image: Specialist,
    },
    { name: "Join free sessions at your Apple Store.", I: "W", image: Session },
    {
      name: "From enterprise to small business, we'll work with you.",
      I: "B",
      image: enterprise,
    },
    {
      name: "Get to know your new device with Personal Setup.",
      Last: "l",
      I: "W",
      price:
        "Let us guide you through setup, data transfer and the latest features in an online session.",
      image: Personal,
    },
  ];

  const Slider_3 = [
    {
      name: "Discover a new way to shop.",
      B: "APPLE STORE APP",
      First: "f",
      I: "W",
      image: Discover,
    },
    {
      name: "Explore recommendations customised for you.",
      B: "PERSONALISATION",
      I: "W",
      image: Explore,
    },
    {
      name: "Browse. Save. Pick up where you left off.",
      B: "SEAMLESS SHOPING",
      I: "W",
      image: Browse,
    },
    {
      name: "Learn how to get more from your devices.",
      B: "GO FURTHER",
      Last: "l",
      I: "W",
      image: Learn,
    },
  ];

  const features = [
    {
      icon: IoCardOutline,
      text: "green",
      First: "f",
      title: "Instant Cashback.",
      description: "Plus no cost EMI.",
    },
    {
      icon: MdOutlineComputer,
      text: "blue",
      title: "Exchange your smartphone",
      description: "Get up to ₹67,500 in credit towards a new one.",
    },
    {
      icon: FaApple,
      text: "orange",
      title: "Customize your Mac",
      description: "Personalize it with your choice of specs and engraving.",
    },
    {
      icon: FaRegSmile,
      text: "purple",
      title: "Make them yours",
      description: "Engrave emoji, names, and numbers for free.",
    },
    {
      icon: BsTruck,
      text: "green",
      title: "Free delivery",
      description: "Enjoy free delivery and easy pickup from the Apple Store.",
    },
    {
      icon: MdOutlineComputer,
      text: "blue",
      Last: "l",
      title:
        "Trade in your eligible Mac, Apple Watch or iPad for instant credit.*",
      description: "In-store only.",
    },
  ];

  const accessories_1 = [
    {
      id: 1,
      title: "iPhone 16e Silicone Case - Fuchsia",
      price: "MRP ₹3900.00 (Incl. of all taxes)",
      img: silicone, // Replace with actual image URL
      tag: "New",
    },
    {
      id: 2,
      title: "iPhone 16 Pro Clear Case with MagSafe",
      price: "MRP ₹4900.00 (Incl. of all taxes)",
      img: mag_safe, // Replace with actual image URL
    },
    {
      id: 3,
      title: "46mm Black Unity Sport Loop",
      price: "MRP ₹4500.00 (Incl. of all taxes)",
      img: Sport_Loop, // Replace with actual image URL
      tag: "New",
    },
    {
      id: 4,
      title: "40mm Plum Sport Loop",
      price: "MRP ₹4500.00 (Incl. of all taxes)",
      img: plum_sport, // Replace with actual image URL
      tag: "New",
    },
    {
      id: 5,
      title: "49mm Natural Titanium Milanese Loop - Medium",
      price: "MRP ₹24500.00 (Incl. of all taxes)",
      img: Milanese, // Replace with actual image URL
    },
    {
      id: 6,
      title: "Phone 16 Silicone Case with MagSafe Ultramarine",
      price: "MRP ₹4900.00 (Incl. of all taxes)",
      img: Ultra, // Replace with actual image URL
    },
    {
      id: 7,
      title: "iPhone FineWoven Wallet with MagSafe - Deep Blue",
      price: "MRP ₹5900.00 (incl. of all taxes)",
      img: Fine, // Replace with actual image URL
    },
    {
      id: 8,
      title: "MagSafe Charger (1m)",
      price: "MRP ₹4500.00 (Incl. of all taxes)",
      img: charger, // Replace with actual image URL
      Last: "l",
    },
  ];

  const accessories_2 = [
    {
      id: 1,
      title: "AirPods 4 with Active Noise Cancellation",
      price: "MRP ₹17900.00 (Incl. of all taxes)",
      img: airpods_4, // Replace with actual image URL
      tag: "Free Engraving",
    },
    {
      id: 2,
      title: "AirPods Pro 2",
      price: "MRP ₹24900.00 (Incl. of all taxes)",
      img: airpods_pro_2, // Replace with actual image URL
      tag: "Free Engraving",
    },
    {
      id: 3,
      title: "Powerbeats Pro 2 - High- Performance Earbuds -...",
      price: "MRP ₹29900.00 (Incl. of all taxes)",
      img: powerbeat, // Replace with actual image URL
      tag: "New",
    },
    {
      id: 4,
      title: "AirPods Max - Midnight",
      price: "MRP ₹59900.00 (Incl. of all taxes)",
      img: airpod_max, // Replace with actual image URL
      tag: "New colours",
    },
    {
      id: 5,
      title: "HomePod - Midnight",
      price: "MRP ₹32900.00 (Incl. of all taxes)",
      img: homepod_midnight, // Replace with actual image URL
    },
    {
      id: 6,
      title: "HomePod mini - Orange",
      price: "MRP ₹10900.00 (Incl. of all taxes)",
      img: homepod_mini, // Replace with actual image URL
    },
    {
      id: 7,
      title: "Beats Solo 4 - On-Ear Wireless Headphones - Cloud Pink",
      price: "MRP ₹22900.00 (incl. of all taxes)",
      img: beat_solo, // Replace with actual image URL
    },
    {
      id: 8,
      title: "Beats Pill-Wireless Bluetooth® Speaker -...",
      price: "MRP ₹16900.00 (Incl. of all taxes)",
      img: beat_pill, // Replace with actual image URL
      Last: "l",
    },
  ];

  const first_img_1 = {
    img: inWith,
    headng: "In with the new.",
    para: "Your favourite accessories. Now available in bold new colours and with innovative new features.",
  };
  const first_img_2 = {
    img: get_3,
    headng: "Get 3 months of Apple Music free.",
    para: "Included with the purchase of selected Apple devices.*",
  };

  return (
    <>
      <div className="bg-[#f5f5f7]">
        <div className="lg:flex lg:p-20 lg:px-32 p-8 justify-between text">
          <div className="lg:text-5xl text-3xl font-medium text-gray-500 lg:w-7/12 tracking-tight">
            <span className="text-black">Store.</span> The best way to buy the
            products you love.
          </div>
          <div className="text-sm mt-6 lg:mt-0 space-y-3">
            <div className="flex items-center space-x-2">
              <img className="h-8" src={girl} />
              <div>
                <p className="font-medium text-gray-900">Need shopping help?</p>
                <p className="text-blue-700 flex items-center cursor-pointer hover:underline">
                  Ask a Specialist
                  <GoArrowUpRight />
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaApple className="text-xl ml-1" />
              <div>
                <p className="font-medium text-gray-900">
                  Visit an Apple Store
                </p>
                <p className="text-blue-700 flex items-center cursor-pointer hover:underline">
                  Find one near you
                  <MdOutlineKeyboardArrowRight />
                </p>
              </div>
            </div>
          </div>
        </div>
        <ProductSlider products={products} />
        <div className="text-2xl font-semibold text-gray-500  lg:pt-20 pt-8 lg:px-32 px-5 tracking-tight">
          <span className="text-gray-900">The latest.</span> Take a look at
          what’s new right now.
        </div>
        <Slider1 products={Slider_1} />
        <div className="text-2xl font-semibold text-gray-500  pt-5 px-5 lg:px-32 tracking-tight">
          <span className="text-gray-900">Help is here.</span> Whenever and
          however you need it.
        </div>
        <Slider1 products={Slider_2} />
        <div className="text-2xl font-semibold text-gray-500  pt-5 px-5 lg:px-32 tracking-tight">
          <span className="text-gray-900">Apple Store App.</span> Your own
          personal store.
        </div>
        <Slider1 products={Slider_3} />
        <div className="text-2xl font-semibold text-gray-500  pt-5 px-5 lg:px-32 tracking-tight">
          <span className="text-gray-900">The Apple Store difference.</span>{" "}
          Even more reasons to shop with us.
        </div>
        <Slider2 features={features} />;
        <div className="text-2xl font-semibold text-gray-500  pt-5 px-5 lg:px-32 tracking-tight">
          <span className="text-gray-900">Accessories.</span> Essentials that
          pair perfectly with your favourite devices.
        </div>
        <Slider3 first_img={first_img_1} products={accessories_1} />
        <div className="text-2xl font-semibold text-gray-500  pt-5 px-5 lg:px-32 tracking-tight">
          <span className="text-gray-900">Loud and clear.</span> Unparalleled
          choices for rich, high-quality sound.
        </div>
        <Slider3 first_img={first_img_2} products={accessories_2} />
        <div className="text-2xl font-semibold text-gray-500  pt-5 px-5 lg:px-32 tracking-tight">
          <span className="text-gray-900">The Apple experience.</span> Do even
          more with Apple products and services.
        </div>
        <div className="lg:ml-32 lg:mx-5 mx-auto my-16 cursor-pointer  transition-transform duration-500 ease-in-out hover:shadow-lg hover:scale-[101%] relative lg:w-[380px] w-[330px] h-[500px] snap-center flex-shrink-0 rounded-3xl overflow-hidden bg-white">
          <div className="flex justify-center">
            <img
              src={Buy_a_new}
              alt="New Accessories"
              className="absolute h-full object-cover rounded-lg mb-4 "
            />
          </div>
          <div className="absolute top-2  w-full p-8 space-y-9">
            <p className="text-gray-600 text-xs absolute font-medium ">
              EDUCATION
            </p>
            <h2 className="text-2xl font-semibold">
              Buy a new Mac or iPad with education savings.
            </h2>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Bottom;
