import React, { useState } from "react";

export default function Works() {
  const [isActive, setActive] = useState("Design");

  const handleActive = (button) => {
    setActive(button);
  };

  return (
    <section className="text-portfolioTextDark w-screen py-16 xl:py-20 px-4">
      <div className="flex gap-8 flex-col max-w-3xl mx-auto justify-center items-center">

      <p className="text-3xl xl:text-[40px] font-bold">Work</p>
      <div className="text-portfolioTextLight flex w-auto max-w-[270px] bg-gray-300 gap-3 p-1 rounded-full ">
        <button
          type="button"
          className={`py-2 px-6 transition duration-300 ease-in-out rounded-full ${isActive === "Design" ? "bg-portfolioWhite text-portfolioTextDark font-semibold " : ""}`}
          onClick={() => handleActive("Design")}
          aria-current="page"
        >
          Design
        </button>
        
        <button
          type="button"
          className={` py-2 px-6 transition duration-300 ease-in-out rounded-full ${isActive === "Development" ? "bg-portfolioWhite text-portfolioTextDark font-semibold " : ""}`}
          onClick={() => handleActive("Development")}
        >
          Development
        </button>
      </div>
      {isActive === "Design" && <p>render this when Design is selected</p>}
      {isActive === "Development" && <p>Render this when development is selected</p>}
      </div>
    </section>
  );
}
