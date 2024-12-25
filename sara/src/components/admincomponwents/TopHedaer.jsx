import React from "react";
import { IoMenuSharp } from "react-icons/io5";

import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import { FaRegUserCircle } from "react-icons/fa";


const TopHedaer = () => {
  return (
    <div className="pb-3">
      <div className="bg-white px-4 py-2">
        <div className="flex flex-wrap items-center content-between">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 h-16 flex items-center">
            <h5 className="text-blue-600 font-bold text-3xl">EIBM</h5>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 h-16">
            <div className="w-100 flex items-center h-100 w-100 justify-content-end">
              <div className="flex items-center h-100 pe-2 border-e-2 border-gray-200 border-spacing-1">
                
                <button className="w-7 h-7 border-1 border-gray-200 rounded-md mx-2 p-3" style={{height:"100%",width:"100%" }}>
                  <a
                    className="text-decoration-none text-black leading-[1px] text-lg"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                  >
                    {" "}
                    <IoMenuSharp className="mx-auto" />
                  </a>
                </button>
              </div>
              
            </div>
          </div>
        </div>
        {/* offcanvas */}
        <div>
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                EIBM
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul>
                <li className="py-3 rounded-md px-3 flex items-center">
                  <FaHome className="text-blue-600 me-3 text-sm" />
                  <Link
                    className="text-dark font-semibold text-decoration-none text-sm"
                    to={"/admin/dashboard"}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="py-3 rounded-md px-3 flex items-center">
                  <FaRegUserCircle className="text-blue-600 me-3 text-sm" />
                  <Link
                    className="text-dark font-semibold text-decoration-none text-sm"
                    to={"/admin/manageusers"}
                  >
                    Manage Users
                  </Link>
                </li>
                <li className="py-3 rounded-md px-3 flex items-center">
                  <FaRegUserCircle className="text-blue-600 me-3 text-sm" />
                  <Link
                    className="text-dark font-semibold text-decoration-none text-sm"
                    to={"/admin/addBlog"}
                  >
                    Add Blogs
                  </Link>
                </li>
                <li className="py-3 rounded-md px-3 flex items-center">
                  <FaRegUserCircle className="text-blue-600 me-3 text-sm" />
                  <Link
                    className="text-dark font-semibold text-decoration-none text-sm"
                    to={"/admin/showblog"}
                  >
                    Show Blogs
                  </Link>
                </li>
                <li className="py-3 rounded-md px-3 flex items-center">
                  <FaRegUserCircle className="text-blue-600 me-3 text-sm" />
                  <Link
                    className="text-dark font-semibold text-decoration-none text-sm"
                    to={"/admin/showcontact"}
                  >
                    Manage Contact 
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHedaer;
