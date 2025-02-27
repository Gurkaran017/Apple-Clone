import React from "react";
import Navbar from "./Navbar";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Bottom from "./Bottom";


const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="justify-center text-gray-800 flex">
  <p className="p-5 text-sm tracking-tight">
    Get up to 24 months of No Cost EMI plus up to ₹10000.00 instant cashback on selected products with eligible cards.&nbsp;
    <span className="text-blue-600 inline-flex items-center cursor-pointer hover:underline">
      See offers <MdOutlineKeyboardArrowRight />
    </span>
  </p>
</div>
      <Bottom/>
    </div>
  );
};

export default Home;
