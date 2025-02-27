import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import React, { useState } from "react";

function App() {
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className="font-custom">
        <Navbar setIsBagOpen={setIsBagOpen} isBagOpen={isBagOpen} setIsSearchOpen={setIsSearchOpen} isSearchOpen={isSearchOpen} />
        <div
          className={`transition-all duration-300 ${
            isBagOpen || isSearchOpen ? "blur-lg" : ""
          }`}
        >
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
