import React, { useEffect } from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import { home } from "../Datas";
import "../js/Slider";
import "../js/cardss";
import "../styles/Slider.css";
import "../styles/Utility.css";
import Testimonial from "../components/Testimonial";
import Book from "../components/Book";
import Footer from "../components/Footer";
import TopBtn from "../components/Topbtn";
import HashLoader from "react-spinners/HashLoader";
import Copyright from "../components/Copyright";
import { useState } from "react";
import Whatsapp from '../components/Whatsapp';
import '../styles/MQ.css'
const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  const certificates = [
    { src: "/c1.jpg", alt: "" },
    { src: "/c3.jpg", alt: "" },
    { src: "/c5.jpg", alt: "" },
    { src: "/c7.jpg", alt: "" },
    
  ];
  const seminars = [
    { src: "/s1.jpg", alt: "" },
    { src: "/s4.jpg", alt: "" },
    { src: "/s10.jpeg", alt: "" },
    { src: "/s11.jpeg", alt: "" },
    { src: "/s6.jpeg", alt: "" },
    { src: "/s7.jpeg", alt: "" },
    { src: "/s8.jpeg", alt: "" },
    { src: "/s5 (1).jpeg", alt: "" },
    
  ];
  return (
    <div>
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
        <div>
          <TopHeader></TopHeader>
          <Header></Header>
          {/* banner */}
          <section className="bannermain pt-28 pb-60 bg-purple-50">
            <div className="container">
              <div className="flex flex-wrap items-center col-12">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 h-[350px]">
                  <div className="slider">
                    <ul className="items">
                      <li className="item current">
                        <h1 className="text-5xl leading-snug">
                          Welcome to the{" "}
                          <font className="pe-4 text-mainblue">
                          Export Import
                          </font>
                          Bussiness Management
                        </h1>
                        {/* <p className="pt-3">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Asperiores distinctio odio, ad quae unde quidem
                          tempora nostrum veniam dolores illo iure perspiciatis,
                          illum repellendus quasi pariatur doloribus provident
                          quibusdam harum.
                        </p> */}
                      </li>
                      <li className="item">
                        <h1 className="text-5xl leading-snug">
                          Transform Your Future with{" "}
                          <font className="pe-4 text-mainblue">EIBM</font>
                          Institute
                        </h1>
                        {/* <p className="pt-3">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Asperiores distinctio odio, ad quae unde quidem
                          tempora nostrum veniam dolores illo iure perspiciatis,
                          illum repellendus quasi pariatur doloribus provident
                          quibusdam harum.
                        </p> */}
                      </li>
                      <li className="item">
                        <h1 className="text-5xl leading-snug">
                          Make a Carrer in{" "}
                          <font className="pe-4 text-mainblue">
                            Import Export
                          </font>
                          Field
                        </h1>
                        {/* <p className="pt-3">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Asperiores distinctio odio, ad quae unde quidem
                          tempora nostrum veniam dolores illo iure perspiciatis,
                          illum repellendus quasi pariatur doloribus provident
                          quibusdam harum.
                        </p> */}
                      </li>
                    </ul>
                    <div className="buttons">
                      <button type="button" id="prev" className="button prev" />
                      <button type="button" id="next" className="button next" />
                    </div>
                    <div className="dots hidden">
                      <button type="button" className="dot current" />
                      <button type="button" className="dot" />
                      <button type="button" className="dot" />
                      <button type="button" className="dot" />
                    </div>
                    <div className="flex pt-4 items-center">
                    <div className="flex">
                      <img
                        src="/student1.jpg"
                        alt="stu1"
                        className="rounded-circle h-12 border border-1 border-white -me-3"
                      />
                      <img
                        src="/student2.jpeg"
                        alt="stu2"
                        className="rounded-circle h-12  border-2 border-white -me-3"
                      />
                      <img
                        src="/student3.jpeg"
                        alt="stu3"
                        className="rounded-circle h-12  border-2 border-white "
                      />
                    </div>
                    <p className="p-0 m-0 ps-4">
                      <font className="text-mainblue font-bold">3K+</font>{" "}
                      students are already with us
                    </p>
                  </div>
                  </div>
                  
                </div>
                <div className="bannerimg col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 lg:h-[350px] sm:h-[500px] sm:pt-32 md:pt-0 md:h-[470px]">
                  <div className="w-100 h-100">
                    <div className="relative h-100">
                      <img
                        src="/eibm1.jpg"
                        data-value="-6"
                        alt="v1"
                        className="obj obj1 absolute -bottom-[70%] -left-3 rounded-full h-[230px]"
                      />
                      <img
                        src="/eibm2.jpg"
                        data-value="4"
                        alt="v3"
                        className="obj obj3 absolute top-0  rounded-full h-[180px]"
                      />
                      <img
                        src="/eibm.png"
                        data-value="6"
                        alt="v4"
                        className="obj obj4 absolute top-[150px] left-[90px] z-10  rounded-full h-[250px] "
                      />
                      <img
                        src="/vector4.png"
                        data-value="-8"
                        alt="v5"
                        className="obj obj5 absolute top-0 rounded-circle h-[300px] right-0"
                      />
                      <img
                        src="/eibm7.jpg"
                        data-value="-4"
                        alt="v6"
                        className="obj obj6 absolute top-[300px] rounded-circle h-[300px] right-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 2nd section */}
          <section className="py-28 relative">
            <img
              src="/import.png"
              alt="import"
              className="absolute right-12 animate-spin duration-1000 -rotate-6 opacity-5 h-36"
            />
            <img
              src="/export.png"
              alt="export"
              className="absolute right-12 top-50 animate-spin duration-1000 -rotate-6 opacity-5 h-36"
            />
            <img
              src="/shipping.png"
              alt="shipping"
              className="absolute right-80 top-[430px] animate-spin duration-1000 -rotate-6 opacity-5 h-28"
            />
            <img
              src="/user.png"
              alt="user"
              className="absolute right-80 bottom-64 animate-spin duration-1000 -rotate-6 opacity-5 h-28"
            />
            <div className="container">
              <div className="flex flex-wrap relative items-center">
                <div className="col-sm-12 col-md-10 col-lg-7 col-xl-7 sm:mx-auto md:mx-auto lg:me-auto xl:me-auto">
                  {/* card1 */}
                  <div className="stickycard w-100 mx-auto bg-mainlightblue border-2 border-blue-400 shadow-lg rounded-xl p-5 -rotate-2 mb-8 sticky top-[39%]">
                    <div className="stickycard flex items-center justify-between">
                      <h3 className="m-0 font-bold">400 + Seminar Done</h3>
                      <p className="m-0 text-3xl font-bold">01</p>
                    </div>
                    <p className="p font-thin text-center xs:pt-2 sm:pt-3 md:pt-4 lg:pt-5 xl:pt-5 sm:text-sm md:text-base lg:text-xl">
                      Browse through our wide range of courses to find the
                      perfect fit for your educational needs.
                    </p>
                  </div>
                  {/* card2 */}
                  <div className="stickycard w-100 mx-auto  bg-mainpurple border-2 border-purple-600 shadow-lg rounded-xl p-5 rotate-2 mb-8 sticky top-[40%]">
                    <div className="flex items-center justify-between">
                      <h3 className="m-0 font-bold">70 + Batches Done</h3>
                      <p className="m-0 text-3xl font-bold">02</p>
                    </div>
                    <p className="p font-thin text-center pt-5 sm:text-sm md:text-base lg:text-xl">
                      Browse through our wide range of courses to find the
                      perfect fit for your educational needs.
                    </p>
                  </div>
                  {/* card3 */}
                  <div className="stickycard w-100 mx-auto bg-mainlightblue border-2 border-blue-400 shadow-lg rounded-xl p-5 -rotate-2 mb-8 sticky top-[39%]">
                    <div className="flex items-center justify-between">
                      <h3 className="m-0 font-bold">3000 + Happy Students</h3>
                      <p className="m-0 text-3xl font-bold">03</p>
                    </div>
                    <p className="p font-thin text-center pt-5 sm:text-sm md:text-base lg:text-xl">
                      Browse through our wide range of courses to find the
                      perfect fit for your educational needs.
                    </p>
                  </div>
                  {/* card4 */}
                  <div className="stickycard w-100 mx-auto  bg-mainpurple border-2 border-purple-600 shadow-lg rounded-xl p-5 rotate-2 mb-8 sticky top-[40%]">
                    <div className="flex items-center justify-between">
                      <h3 className="m-0 font-bold">10 + Years</h3>
                      <p className="m-0 text-3xl font-bold">04</p>
                    </div>
                    <p className="p font-thin text-center pt-5 sm:text-sm md:text-base lg:text-xl">
                      Browse through our wide range of courses to find the
                      perfect fit for your educational needs.
                    </p>
                  </div>
                  {/* card5 */}
                  <div className="stickycard w-100 mx-auto bg-mainlightblue border-2 border-blue-400 shadow-lg rounded-xl p-5 -rotate-2 mb-8 sticky top-[39%]">
                    <div className="flex items-center justify-between">
                      <h3 className="m-0 font-bold">
                        12 + Branches all over the world
                      </h3>
                      <p className="m-0 text-3xl font-bold">05</p>
                    </div>
                    <p className="p font-thin text-center pt-5 sm:text-sm md:text-base lg:text-xl">
                      Browse through our wide range of courses to find the
                      perfect fit for your educational needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 3rd section */}
          <section className="supportbeforecourse py-24 bg-mainpurple">
            <div className="container">
              <div className="flex flex-wrap">
                <div className="col-sm-10 col-md-10 col-lg-8 col-xl-8 relative mx-auto">
                  <img
                    src="/bulb.png"
                    alt="bulb"
                    className="absolute -top-20 right-10 swing h-16"
                  />
                  <h2 className="font-bold sm:text-3xl lg:text-4xl xl:text-4xl">
                    Support during the{" "}
                    <font className="text-mainblue">Course</font> 
                  </h2>
                  <ul className="list-decimal pt-4">
                    <li className="py-2 sm:text-sm lg:text-base">
                      Lecture recording provided for technical glitches & missed
                      class.
                    </li>
                    <li className="py-2 sm:text-sm lg:text-base">
                      Participants can ask individual questions during the
                      class.
                    </li>
                    <li className="py-2 sm:text-sm lg:text-base">
                      Home work after the class.
                    </li>
                    <li className="py-2 sm:text-sm lg:text-base">
                      Course Completion Certificate.
                    </li>
                    <li className="py-2 sm:text-sm lg:text-base">
                      All PPT's and useful links will be provided with
                      documents.
                    </li>
                  </ul>
                </div>
                <div className="col-sm-10 col-md-10 col-lg-4 col-xl-4 mx-auto">
                  <img
                    src="/framevec2.svg"
                    alt="framevec1"
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="supportaftercourse py-24 relative">
            <img
              src="/vector8.png"
              alt="v8"
              className="absolute right-0 animate-pulse"
            />
            <div className="container">
              <div className="flex flex-wrap justify-between">
                <div className="col-sm-10 col-md-10 col-lg-4 col-xl-4 mx-auto sm:pb-10 lg:pb-0">
                  <img
                    src="/framevec1.svg"
                    alt="framevec1"
                    className="mx-auto"
                  />
                </div>
                <div className="col-sm-10 col-md-10 col-lg-8 col-xl-8 relative mx-auto ps-16">
                  <h2 className="font-bold sm:text-3xl lg:text-4xl xl:text-4xl">
                    Support after the{" "}
                    <font className="text-mainblue">Course</font>
                  </h2>
                  <ul className="list-decimal pt-4 text-lg">
                    <li className="py-2 sm:text-sm md:text-sm lg:text-base">
                      Practical support.
                    </li>
                    <li className="py-2 sm:text-sm md:text-sm lg:text-base">
                      First Consignment support.
                    </li>
                    <li className="py-2 sm:text-sm md:text-sm lg:text-base">
                      Anytime assistance regarding queries 24*7 (on call
                      support).
                    </li>
                    <li className="py-2 sm:text-sm md:text-sm lg:text-base">
                      Exporting Community.
                    </li>
                    <li className="py-2 sm:text-sm md:text-sm lg:text-base">
                      All PPT's and useful links will be provided with
                      documents.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* 4th section */}
          <Book></Book>
          {/* 5th section */}
          <Testimonial></Testimonial>
          {/* 6th section */}
          <section className="certificates py-28">
            <div class="container">
              <h2 className="text-center py-4 sm:text-3xl lg:text-4xl xl:text-4xl font-bold">
                <font className="text-mainblue"> EIBM </font>
                Certificate
              </h2>
              <p className="pt-3 text-mainblue text-center">
                Our Extra Ordinary Way to Appreciate Your Achievement
              </p>
              <div className="flex flex-wrap items-center">
                {certificates.map((certificate, index) => (
                  <div
                    key={index}
                    className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-3 py-5 px-3"
                  >
                    <img
                      src={certificate.src}
                      alt={certificate.alt}
                      className="transition-all duration-700 bg-black opacity-65 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
              <marquee>
                Export Import bussiness management certificate with a lifetime
                online certification facility is a best way to showcase your
                Genuine Achievement professionally.
              </marquee>
            </div>
          </section>
          {/* 7th section */}
          <section className="seminar pb-28">
            <div className="container">
              <h3 className="sm:text-3xl lg:text-4xl xl:text-4xl text-center py-4 font-bold">
              Export Import Awareness
                <font className="text-mainblue"> Seminar </font>
                
              </h3>
              <p className="pt-3 text-mainblue text-center">
                Media Coverage plus Experience of our Studentss
              </p>
              <div>
              <div className="flex flex-wrap items-center">
                {seminars.map((s, index) => (
                  <div
                    key={index}
                    className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 py-5 px-3"
                  >
                    <img
                      src={s.src}
                      alt={s.alt}
                      className="transition-all duration-700 bg-black opacity-65 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
              </div>
            </div>
          </section>
          {/* last section */}
          <Footer></Footer>
          {/* copyright */}
          <Copyright></Copyright>
          {/* topbtn */}
          <TopBtn />
          {/* social  */}
          <Whatsapp/>

        </div>
      )}
    </div>
  );
};

export default Home;