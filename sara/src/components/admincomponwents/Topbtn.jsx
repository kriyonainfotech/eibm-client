import React, { useState, useEffect } from "react";
import { FaRegHandPointUp } from "react-icons/fa";

const TopBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <>
      {visible && (
        <button onClick={scrollToTop} className="topbtn">
          <FaRegHandPointUp className="mx-auto"/>
        </button>
      )}
    </>
  );
};

export default TopBtn;