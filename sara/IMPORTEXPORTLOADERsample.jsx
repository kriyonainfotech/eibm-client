import React from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import "../styles/courses.css";
import "../styles/Utility.css";
import Footer from "../components/Footer";
import '../styles/MQ.css'
import Copyright from "../components/Copyright";
import TopBtn from "../components/Topbtn";
import { Link, Route, Routes } from "react-router-dom";
import { IoTimerOutline } from "react-icons/io5";
import { GiDuration } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";
import { useState,useEffect } from "react";
import BasicCourse from "../pages/BasicCourse";
import Whatsapp from "../components/Whatsapp";
const cardData = [
  {
    course: "Basic Course",
    title: "Free Course to Explore",
    status: "1 hour ago",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?",
  },
  {
    course: "Advance Course",
    title: "View Our Advance Course",
    status: "3 hours ago",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?",
  },
];

const Batch = [
  {
    batch: "Morning Batch (certificate will be provided)",
    day: "30+ Hours Monday To Friday",
    duration: "Duration: 15 Days",
    time: "07:30 AM to 09:30 AM",
    certificate: "Certificate from (UKA TARSADIA UNIVERSITY )",
  },
  {
    batch: "Evening Batch (certificate will be provided)",
    day: "30+ Hours Monday To Friday",
    duration: "Duration: 15 Days",
    time: "07:00 AM to 09:00 PM",
    certificate: "Certificate from (UKA TARSADIA UNIVERSITY )",
  },
  {
    batch: "Personal Batch (certificate will be provided)",
    day: "30+ Hours Monday To Friday",
    personal: "Personal Classes",
    duration: "Duration: 15 Days",
    icon: <FaMedal />,
    certificate: "Certificate from (UKA TARSADIA UNIVERSITY )",
  },
];

const Courses = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },8000);
  }, []);
  return (
    <div className="load bg-mainpurple">
      {loading ? (
        <div className="h-screen bg-mainpurple">
          <div className="flex justify-center py-44">
            <div
              className="loader fixed z-[999999999] top-1/3 bg-mainpurple bg-[url(public/loader.gif)] h-52 w-52 bg-no-repeat"
              style={{ backgroundSize: "198px 168px" }}
            ></div>
          </div>
        </div>
      ) : (
        <div className="courses bg-mainpurple">
          <TopHeader></TopHeader>
          <Header></Header>
          <section className="py-28">
            <div className="container">
              <h5 className="font-bold text-mainblue text-center text-3xl">
                COURSES
              </h5>
              <ul className="cards">
                {cardData.map((card, index) => (
                  <li
                    key={index}
                    className="col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 mx-auto border-2 border-blue-600 my-20  h-96 shadow-xl rounded-xl"
                  >
                    <a href className="card h-100 bg-mainlightblue">
                      <div className="card-img bg-[url('public/advance.png')] bg-contain bg-no-repeat bg-left h-100 py-10 bg-mainpurple">
                        <h2 className="text-center pt-32 ps-40">
                          {card.course}
                        </h2>
                      </div>
                      <div
                        className="card__overlay pb-10 bg-transparent"
                        style={{ backdropFilter: "blur(8px)" }}
                      >
                        <div className="card__header bg-transparent">
                          <div className="card__header-text">
                            <h5 className="text-center">{card.title}</h5>
                          </div>
                        </div>
                        <Link
                          to={"/basic_course"}
                          className="inline-block text-decoration-none text-center pt-2  pb-1 button-main bg-mainblue transition-all duration-700 border-blue rounded-3xl w-44 h-12 leading-7 ms-4 mb-2  text-white font-bold"
                        >
                          View Course
                        </Link>
                        {card.course === "Advance Course" && (
                          <Link
                            to={"/payment"}
                            className="inline-block text-decoration-none text-center pt-2  pb-1 button-main bg-mainblue transition-all duration-700 border-blue rounded-3xl w-44 h-12 leading-7 ms-6 mb-2  text-white font-bold"
                          >
                            Buy Course
                          </Link>
                        )}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="batchtime pb-28">
            <div className="container">
              <div>
                <h5 className="font-bold text-mainblue text-center text-3xl pb-5">
                  BATCH SCHEDULE
                </h5>
              </div>
              <div className="px-3">
                <div className="flex flex-wrap items-center justify-center">
                  <div className="flex flex-wrap my-7">
                    {Batch.map((v) => {
                      return (
                        <div className="px-2 mb-5 col-xs-12 col-sm-10 col-md-6 col-lg-4 col-xl-4 mx-auto">
                          <div className="boxs px-3 py-5">
                            <div className="w-100">
                              <div className="pb-3 border-b-2 border-blue-600">
                                <h5>{v.batch}</h5>
                              </div>
                              <div className="pt-4 px-3">
                                <ul className="m-0 p-0">
                                  <li className="flex items-center pb-4">
                                    <IoTimerOutline className="me-3" />
                                    {v.day}
                                  </li>
                                  <li className="flex items-center pb-4">
                                    <GiDuration className="me-3" />
                                    {v.duration}
                                  </li>
                                  <li className="flex items-center pb-4">
                                    <FaCalendarAlt className="me-3" />
                                    {v.time}
                                  </li>
                                  {Batch.batch ===
                                    "Personal Batch (certificate will be provided)" && (
                                    <li className="flex items-center pb-4">
                                      <FaCalendarAlt className="me-3" />
                                      <p>{v.personal}</p>
                                    </li>
                                  )}
                                  <li className="flex items-center pb-4">
                                    <FaMedal className="me-3" />
                                    {v.certificate}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer></Footer>
          <Copyright></Copyright>
          <TopBtn />
          <Whatsapp/>
        </div>
      )}
    </div>
  );
};

export default Courses;
