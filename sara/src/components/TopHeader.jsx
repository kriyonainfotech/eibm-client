import React from "react";
import "../styles/Utility.css"
const TopHeader = () => {
  return (
    <div className="bg-mainblue">
        <marquee
          behavior="scroll"
          className=" pb-2 pt-3 w-100 text-white font-semibold text-xs"
        >
          At EBIM, we’re thrilled to have you here! Whether you’re exploring our innovative solutions, learning about our services, or simply getting to know us better, we’re committed to making your experience exceptional. Dive in and discover how we can help you achieve your goals with our expertise and dedication.
        </marquee>
    </div>
  );
};

export default TopHeader;
