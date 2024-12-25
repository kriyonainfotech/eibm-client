import React from "react";
import "../styles/Utility.css";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import HashLoader from "react-spinners/HashLoader";
import { useState,useEffect } from "react";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import "../styles/MQ.css";
const BasicCourse = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="load bg-mainpurple">
          <div>
            <HashLoader
              color={"blue"}
              className="h-100 w-100"
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      ) : (
        <div className="bg-mainpurple">
          <TopHeader></TopHeader>
          <Header></Header>
          <div className="basiccourse bg-mainlightpurple py-28">
            <div className="container">
              <h3 className="text-center">Basic Course</h3>
              <table class="table col-9 mx-auto my-5 text-center table-hover table-primary">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="border-e-2 col-6 text-white border-b-8 border-b-white border-e-white py-3"
                      style={{ backgroundColor: "#5577ff" }}
                    >
                      CONTENT & FACILITIES
                    </th>
                    <th
                      scope="col"
                      className="col-6 text-white border-s-2 border-b-8 border-b-white py-3 border-s-white"
                      style={{ backgroundColor: "#5577ff" }}
                    >
                      BASIC COURSE
                    </th>
                  </tr>
                </thead>
                <tbody className="border-t-4 border-white">
                  <tr>
                    <td scope="row">COURSE CONTENT</td>
                    <th>30hrs</th>
                  </tr>
                  <tr>
                    <td scope="row">FACULTIES</td>
                    <th>EXPERT</th>
                  </tr>
                  <tr>
                    <td scope="row">Product Selection</td>
                    <th>As per your product</th>
                  </tr>

                  <tr>
                    <td scope="row">Market Selection</td>
                    <th>As per your product</th>
                  </tr>
                  <tr>
                    <td scope="row">Buyer Finding</td>
                    <th>UNLIMITED</th>
                  </tr>
                  <tr>
                    <td scope="row">Export Import Materials</td>
                    <th className=" text-center">
                      <img
                        src="/check.png"
                        alt="check"
                        className="h-[25px] mx-auto"
                      />
                    </th>
                  </tr>
                  <tr>
                    <td scope="row">MARKET ANALYSIS & RESEARCH​</td>
                    <th>UNLIMITED</th>
                  </tr>
                  <tr>
                    <td scope="row">PAYMENT TERMS</td>
                    <th>SAFE PAYMENT METHODS</th>
                  </tr>
                  <tr>
                    <td scope="row">RISK MANAGEMENT</td>
                    <th>KNOWLEDGE OF ALL RISK</th>
                  </tr>
                  <tr>
                    <td scope="row">GOVERNMENT BENEFITS AND POLICIES</td>
                    <th>COVER ALL THE UPDATED POLICIES</th>
                  </tr>
                  <tr>
                    <td scope="row">ESTABLISHED YOUR FIRM</td>
                    <th className=" text-center">
                      <img
                        src="/check.png"
                        alt="check"
                        className="h-[25px] mx-auto"
                      />
                    </th>
                  </tr>
                  <tr>
                    <td scope="row">PORT VISIT</td>
                    <th className=" text-center">
                      <img
                        src="/check.png"
                        alt="check"
                        className="h-[25px] mx-auto"
                      />
                    </th>
                  </tr>
                  <tr>
                    <td scope="row">COLD STORAGE VISIT</td>
                    <th className=" text-center">
                      <img
                        src=" /check.png"
                        alt="check"
                        className="h-[25px] mx-auto"
                      />
                    </th>
                  </tr>

                  <tr>
                    <td scope="row">COLD STORAGE VISIT</td>
                    <th className=" text-center">
                      <img
                        src="/check.png"
                        alt="check"
                        className="h-[25px] mx-auto"
                      />
                    </th>
                  </tr>
                  <tr>
                    <td scope="row">BUYER MEETINGS</td>
                    <th className=" text-center">
                      <img
                        src="/check.png"
                        alt="check"
                        className="h-[25px] mx-auto"
                      />
                    </th>
                  </tr>
                  <tr>
                    <td scope="row">SUPPORT IN YOUR STARUPS</td>
                    <th className=" text-center">
                      <img
                        src="/check.png"
                        alt="check"
                        className="h-[25px] mx-auto"
                      />
                    </th>
                  </tr>
                  <tr>
                    <td scope="row">SUPPORT AFTER TRAINING</td>
                    <th className=" text-center">
                      <h6 className="text-center">LIFETIME SUPPORT</h6>
                    </th>
                  </tr>
                  <tr>
                    <td scope="row">FREE CONSULTING AND SUPPORT</td>
                    <th className=" text-center">
                      <img
                        src="/check.png"
                        alt="check"
                        className="h-[25px] mx-auto"
                      />
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <Footer></Footer>
          <Copyright></Copyright>
        </div>
      )}
    </>
  );
};

export default BasicCourse;
