import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Utility.css";
import "../js/Customjquery";
import "../styles/header.css";
import "../styles/Profile.css";
import { PiSignIn } from "react-icons/pi";
import '../styles/Utility.css'
import { IoMenuSharp } from "react-icons/io5";
import '../styles/MQ.css'
const Headers = ({ data }) => {
  console.log(data);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <header className="bg-purple-50 transition-all duration-1000">
        <div className="container mx-auto">
          <nav className="flex items-center py-4 mx-auto col-12 justify-evenly">
            <div className="nav-links justify-between col-12 flex text-center items-center">
              
              {/* offcanvas */}
              <div className=" px-3 xs:block sm:block md:block lg:hidden xl:hidden">
                <button
                  className="text-4xl"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                >
                  <IoMenuSharp />
                </button>
                <div
                  className="offcanvas offcanvas-start h-screen"
                  data-bs-scroll="true"
                  data-bs-backdrop="false"
                  tabIndex={-1}
                  id="offcanvasScrolling"
                  aria-labelledby="offcanvasScrollingLabel"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                      Colored with scrolling
                    </h5>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div className="offcanvas-body"></div>
                </div>
                <div
                  className="offcanvas offcanvas-start h-screen"
                  tabIndex={-1}
                  id="offcanvasWithBackdrop"
                  aria-labelledby="offcanvasWithBackdropLabel"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">
                      {/* Offcanvas with backdrop */}
                    </h5>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div className="offcanvas-body">
                    <p>.....</p>
                  </div>
                </div>
                <div
                  className="offcanvas offcanvas-start h-screen"
                  data-bs-scroll="true"
                  tabIndex={-1}
                  id="offcanvasWithBothOptions"
                  aria-labelledby="offcanvasWithBothOptionsLabel"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                      {/* Backdroped with scrolling */}
                    </h5>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div className="offcanvas-body">
                    <div className="">
                      <Link 
                        to={"/"}
                        className="block text-start text-xl py-3 text-mainblue font-medium text-decoration-none"
                      >
                        Home
                      </Link>
                      <Link
                        to={"/studentcorner"}
                        className="block text-start text-xl py-3 text-mainblue font-medium text-decoration-none"
                      >
                        Student Corner
                      </Link>
                      <Link
                        to={"/courses"}
                        className="block text-start text-xl py-3 text-mainblue font-medium text-decoration-none"
                      >
                        Courses
                      </Link>
                      <Link
                        to={"/companies"}
                        className="block text-start text-xl py-3 text-mainblue font-medium text-decoration-none"
                      >
                        Our Companies
                      </Link>
                    </div>
                    <div className="">
                      <Link
                        to={"/success"}
                        className="block text-start text-xl py-3 text-mainblue font-medium text-decoration-none"
                      >
                        Success Story
                      </Link>
                      <Link
                        to={"/team"}
                        className="block text-start text-xl py-3 text-mainblue font-medium text-decoration-none"
                      >
                        Team
                      </Link>
                      <Link
                        to={"/contact"}
                        className="block text-start text-xl py-3 text-mainblue font-medium text-decoration-none"
                      >
                        Support Team
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="head1 flex justify-between flex-wrap col-5 xs:hidden sm:hidden md:hidden lg:flex xl:flex">
                <Link
                  to={"/"}
                  className="a-link before:absolute before:content-[''] before:left-0 relative text-mainblue font-medium text-decoration-none" 
                >
                  Home
                </Link>
                <Link
                  to={"/studentcorner"}
                  className="a-link before:absolute before:content-[''] before:left-0 relative text-mainblue font-medium text-decoration-none" 
                >
                  Student Corner
                </Link>
                <Link
                  to={"/courses"}
                  className="a-link before:absolute before:content-[''] before:left-0 relative text-mainblue font-medium text-decoration-none" 
                >
                  Courses
                </Link>
                <Link
                  to={"/companies"}
                  className="a-link before:absolute before:content-[''] before:left-0 relative text-mainblue font-medium text-decoration-none" 
                >
                  Our Companies
                </Link>
              </div>
              <a
                href="#"
                className="text-mainblue text-decoration-none text-4xl font-bold"
              >
                <img src="public/eibmlogo.png" alt="logo" className="h-20"/>
              </a>
              <div className="head2 flex justify-between items-center flex-wrap col-4 xs:hidden sm:hidden md:hidden lg:flex xl:flex">
                <Link
                  to={"/success"}
                  className="a-link before:absolute before:content-[''][10px] before:left-0 relative text-mainblue font-medium text-decoration-none" 
                >
                  Success Story
                </Link>
                <Link
                  to={"/team"}
                  className="a-link before:absolute before:content-[''] before:left-0 relative text-mainblue font-medium text-decoration-none" 
                >
                  Team
                </Link>
                <Link
                  to={"/contact"}
                  className="a-link before:absolute before:content-[''] before:left-0 relative text-mainblue font-medium text-decoration-none" 
                >
                  Support Team
                </Link>
                </div>
                <div className="profile relative group cursor-pointer">
                    <div className="img-box">
                      <img src="https://i.postimg.cc/BvNYhMHS/user-img.jpg" alt="user" className="cursor-pointer"/>
                    </div>
                    <div className="absolute transition-all duration-500 bg-white right-0 hidden opacity-0 z-30 shadow-lg w-40 py-3 px-2
                    before:absolute before:content-[''] before:bg-white before:w-5 before:h-5 before:rotate-45 before:top-[-8px] before:right-[14px] profile-menu">
                    <ul className="m-0 p-0 w-100">
                      <li className="border-b py-2 text-start"><Link to={'/profile'} className="text-decoration-none text-blue-500"><i className="ph-bold ph-user" />&nbsp;Profile</Link></li>
                      <li className="text-start py-2"><Link className="text-decoration-none text-blue-500"><i className="ph-bold ph-sign-out" />&nbsp;Sign Out</Link></li>
                    </ul>
                  </div>
                  </div>
              </div>
          </nav>
        </div>
      </header>
      <div></div>
    </>
  );
};

export default Headers;
