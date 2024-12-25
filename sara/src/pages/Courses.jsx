import React from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import "../styles/courses.css";
import "../styles/Utility.css";
import Footer from "../components/Footer";
import "../styles/MQ.css";
import Copyright from "../components/Copyright";
import TopBtn from "../components/Topbtn";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { GiDuration } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect } from "react";
import BasicCourse from "../pages/BasicCourse";
import Whatsapp from "../components/Whatsapp";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Courses = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [message, setmessage] = useState();
  const apiurl = import.meta.env.VITE_API_URL;
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

  const batchroom = [
    { src: "/s1.jpg", alt: "" },
    { src: "/s4.jpg", alt: "" },
    { src: "/batch1.JPG", alt: "" },
    { src: "/batch2.JPG", alt: "" },
  ];
  const handlecourse = async (e) => {
    // e.preventDefault();
    // try {
    //   let res = await axios.get(`${apiurl}/auth/buycourse`, {
    //     withCredentials: true,
    //   });
    //   console.log(res.data);
    //   if (res.data.status == "Success") {
    //     navigate("/accesscourse");
    //   }
    // } catch (error) {
    //   console.log(error);
    //   setmessage(error.response.data);
    //   navigate('/signin')
    //   toast.error(error.response.data.message, {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    //   return false;
    // }
    navigate('/contact')
  };
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
      time: "07:00 PM to 09:00 PM",
      certificate: "Certificate from (UKA TARSADIA UNIVERSITY )",
    },
    {
      batch: "Personal Batch (certificate will be provided)",
      day: "30+ Hours Monday To Friday",
      personal: "Personal Classes",
      duration: "Duration: 15 Days",
      icon: <FaMedal />,
      certificate: "Certificate from (UKA TARSADIA UNIVERSITY )",
      coaching: "Coaching By Comapny CEO",
    },
  ];
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  return (
    <div>
      {/* {loading ? (
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
      ) : ( */}
      <div className="courses bg-mainpurple">
        <ToastContainer />
        <TopHeader></TopHeader>
        <Header></Header>
        <section className="py-28 bg-mainpurple">
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
                    <div className="card-img bg-[url('/advance.png')] bg-contain bg-no-repeat bg-left h-100 py-10 bg-mainpurple">
                      <h2 className="text-center pt-20 ps-40">{card.course}</h2>
                    </div>
                    <div
                      className="card__overlay pb-2 bg-transparent"
                      style={{ backdropFilter: "blur(8px)" }}
                    >
                      <div className="card__header bg-transparent">
                        <div className="card__header-text mb-1">
                          <h5 className="text-center">{card.title}</h5>
                        </div>
                      </div>
                      {card.course === "Basic Course" && (
                        <Link
                          to={"/courses/basic_course"}
                          className="inline-block text-decoration-none text-center pt-2  pb-1 button-main bg-mainblue transition-all duration-700 border-blue rounded-3xl w-44 h-12 leading-7 ms-4 mb-2  text-white font-bold"
                        >
                          View Course
                        </Link>
                      )}
                      {card.course === "Advance Course" && (
                        <button
                          onClick={handlecourse}
                          className="inline-block text-decoration-none text-center pt-2  pb-1 button-main bg-mainblue transition-all duration-700 border-blue rounded-3xl w-44 h-12 leading-7 ms-6 mb-2  text-white font-bold"
                        >
                          Buy Course
                        </button>
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="batchtime pb-28 bg-mainpurple">
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
                                {v.batch ===
                                "Personal Batch (certificate will be provided)" ? (
                                  <li className="flex items-center pb-4">
                                    <FaChalkboardTeacher className="me-3" />
                                    {v.coaching}
                                  </li>
                                ) : (
                                  <li className="flex items-center pb-4">
                                    <FaCalendarAlt className="me-3" />
                                    {v.time}
                                  </li>
                                )}

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
        {/* gallery */}
        <section className="seminar pb-28 bg-mainpurple">
          <div className="container">
            <h3 className="text-4xl text-center py-4 font-bold">
              Export Import
              <font className="text-mainblue"> Batch </font>
            </h3>
            <p className="pt-3 text-mainblue text-center">
              Media Coverage of Our Batch Rooms
            </p>
            <div>
              <div className="flex flex-wrap items-center">
                {batchroom.map((b, index) => (
                  <div
                    key={index}
                    className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 py-5 px-3"
                  >
                    <img
                      src={b.src}
                      alt={b.alt}
                      className="transition-all duration-700 bg-black opacity-65 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
        <Copyright></Copyright>
        <TopBtn />
        <Whatsapp />
      </div>
      {/* )} */}
    </div>
  );
};

export default Courses;
