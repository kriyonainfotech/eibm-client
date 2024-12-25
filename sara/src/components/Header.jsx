import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Utility.css";
import "../js/Customjquery";
import "../styles/header.css";
import { PiSignIn } from "react-icons/pi";
import { IoMenuSharp } from "react-icons/io5";
import "../styles/MQ.css";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [user, setUser] = useState(null);
  const [googleUser, setGoogleUser] = useState(null);
  // const [isMenuActive, setIsMenuActive] = useState(false);
  const navigate = useNavigate();
  const apiurl = import.meta.env.VITE_API_URL
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

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${apiurl}/auth/getuser`, {
          withCredentials: true,
        });
       
        if (res.data.users) {
          setUser(res.data.users);
        } else if (res.data.googleuser) {
          setGoogleUser(res.data.googleuser);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []); // Add dependency array to avoid infinite loop

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${apiurl}/auth/logout`, {
        withCredentials: true,
      });
      
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className="bg-purple-50 transition-all duration-1000">
        <div className="container mx-auto">
          <nav className="flex items-center py-4 mx-auto col-12 justify-between">
            <div className="nav-links justify-between col-12 flex text-center items-center">
              {/* Offcanvas */}
              <div className=" px-3 xs:block sm:block md:block lg:hidden xl:hidden">
              {" "}
              <button
                className="text-4xl"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                <IoMenuSharp/>
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
                <div className="offcanvas-body">
                  
                </div>
              </div>
              <div
                className="offcanvas offcanvas-start h-screen"
                tabIndex={-1}
                id="offcanvasWithBackdrop"
                aria-labelledby="offcanvasWithBackdropLabel"
              >
                <div className="offcanvas-header">
                  <h5
                    className="offcanvas-title"
                    id="offcanvasWithBackdropLabel"
                  >
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
                  <h5
                    className="offcanvas-title"
                    id="offcanvasWithBothOptionsLabel"
                  >
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
                  <p>
                  <div className="">
                <Link 
                  to={"/"}
                  className="block text-center text-xl py-3 text-mainblue font-medium text-decoration-none"
                >
                  Home
                </Link>
                <Link
                  to={"/studentcorner"}
                  className="block text-center text-xl py-3 text-mainblue font-medium text-decoration-none"
                >
                  Student Corner
                </Link>
                <Link
                  to={"/courses"}
                  className="block text-center text-xl py-3 text-mainblue font-medium text-decoration-none"
                >
                  Courses
                </Link>
                <Link
                  to={"/companies"}
                  className="block text-center text-xl py-3 text-mainblue font-medium text-decoration-none"
                >
                  Our Companies
                </Link>
              </div>
              <div className="">
                <Link
                  to={"/success"}
                  className="block text-center text-xl py-3 text-mainblue font-medium text-decoration-none"
                >
                  Success Story
                </Link>
                <Link
                  to={"/team"}
                  className="block text-center text-xl py-3 text-mainblue font-medium text-decoration-none"
                >
                  Team
                </Link>
                <Link
                  to={"/contact"}
                  className="block text-center text-xl py-3 text-mainblue font-medium text-decoration-none"
                >
                  Support Team
                </Link>
              </div>
                  </p>
                </div>
              </div>
             </div>

              {/* Navigation Links */}
              <div className="head1 flex items-center justify-between flex-wrap col-5 xs:hidden sm:hidden md:hidden lg:flex xl:flex">
                <Link
                  to="/"
                  className="a-link text-mainblue font-medium text-decoration-none"
                >
                  Home
                </Link>
                <Link
                  to="/studentcorner"
                  className="a-link text-mainblue font-medium text-decoration-none"
                >
                  Student Corner
                </Link>
                <Link
                  to="/courses"
                  className="a-link text-mainblue font-medium text-decoration-none"
                >
                  Courses
                </Link>
                <Link
                  to="/companies"
                  className="a-link text-mainblue font-medium text-decoration-none"
                >
                  Our Companies
                </Link>
              </div>

              {/* Logo */}
              <Link
                to="/"
                className="text-mainblue text-decoration-none text-4xl font-bold"
              >
                <img src="/eibmlogo.png" alt="logo" className="h-20" />
              </Link>

              {/* Additional Links */}
              <div className="head2 flex items-center justify-between flex-wrap col-4 xs:hidden sm:hidden md:hidden lg:flex xl:flex">
                <Link
                  to="/success"
                  className="a-link text-mainblue font-medium text-decoration-none"
                >
                  Success Story
                </Link>
                <Link
                  to="/team"
                  className="a-link text-mainblue font-medium text-decoration-none"
                >
                  Team
                </Link>
                <Link
                  to="/blog"
                  className="a-link text-mainblue font-medium text-decoration-none"
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="a-link text-mainblue font-medium text-decoration-none"
                >
                  Support Team
                </Link>
              </div>

              {/* User Profile Dropdown or Sign In Button */}
              {user || googleUser ? (
                <div className="dropdown">
                  <div
                    className="img-profile btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      key={user ? user.profilePic : googleUser.profilePic}
                      src={
                        user
                          ? `${apiurl}/uploads/${user.profilePic}`
                          : googleUser.profilePic
                      }
                      alt="profile"
                      className="rounded-full h-10"
                    />
                  </div>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                    { 
                      user?.role == "admin" ? (
                        <li>
                        <Link className="dropdown-item" to={'/admin/dashboard'}>
                          Admin
                        </Link>
                      </li>
                       ):(
                        ""
                      )
                    } 
                  </ul>
                </div>
              ) : (
                <div>
                  <Link
                    to="/signin"
                    className="a-link text-mainblue font-medium text-decoration-none flex items-center"
                  >
                    <PiSignIn /> Sign In
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
      {/* <ToastContainer /> */}
    </>
  );
};

export default Header;