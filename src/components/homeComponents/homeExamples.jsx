import Image from "next/image";
import React from "react";
import Side1 from "../../../public/assets/sideTable1.png";
import Side2 from "../../../public/assets/sideTable2.png";

const HomeExamples = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around mb-8 items-center bg-[#FAF4F4] px-8 sm:px-16 py-8 sm:py-16 w-full">
      {/* Left Side Table */}
      <div className="text-center sm:text-left mb-8 sm:mb-0">
        <Image src={Side1} width={400} height={400} className="mx-auto sm:mx-0" />
        <h3 className="text-3xl sm:text-4xl font-medium text-black mb-4">Side table</h3>
        <h3 className="text-black text-lg sm:text-xl font-medium mb-4">View More</h3>
        <div className="bg-black h-0.5 w-28 mx-auto sm:mx-0"></div>
      </div>

      {/* Right Side Table */}
      <div className="text-center sm:text-left">
        <Image src={Side2} width={432} height={432} className="mx-auto sm:mx-0" />
        <h3 className="text-3xl sm:text-4xl font-medium text-black mb-4">Side table</h3>
        <h3 className="text-black text-lg sm:text-xl font-medium mb-4">View More</h3>
        <div className="bg-black h-0.5 w-28 mx-auto sm:mx-0"></div>
      </div>
    </div>
  );
};

export default HomeExamples;
