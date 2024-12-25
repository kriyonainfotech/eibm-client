import React from "react";

import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import "../styles/Companies.css";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import HashLoader from "react-spinners/HashLoader";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import TopBtn from "../components/Topbtn";
import Whatsapp from "../components/Whatsapp";
import "../styles/MQ.css";

import { useState, useEffect } from "react";
import Slider from "../components/slidersucess";
const Success = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);



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
        <div className="success bg-mainpurple">
          <TopHeader />
          <Header />
          <h3 className="text-mainblue text-center bg-mainpurple m-0 pt-7 text-3xl font-bold">
            Our Success Story
          </h3>
          <section className="py-32 bg-mainpurple relative">
            <div className="container">
              <div className="col-10 mx-auto shadow-lg p-5 mb-28 rounded-xl">
                <div className="flex flex-wrap items-center">
                  <div className="pb-28 col-sm-12 col-md-10 col-lg-5 col-xl-5">
                    <img
                      src="/satishsir.jpg"
                      alt="satishsir"
                      className="transition-all duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="pb-28 col-sm-12 col-md-10 col-lg-7 col-xl-7 ps-5">
                    <h2 className="text-3xl font-bold">
                      The Inspiring Journey of{" "}
                      <font className="text-mainblue">Satish Hirpara</font>, A
                      Testament to Resilience and Determination
                    </h2>
                    <h6 className="pt-3 font-semibold">
                      CEO & founder Eveg International Private Limited
                    </h6>
                    <br />
                    <p>
                      A Gujarati boy born on May 05, 1994, about whom no one
                      knew what he would do when he grew up, what kind of man
                      would he become? How will he move forward in the race of
                      his life?? Today we have to talk about such a brave,
                      fearless and helpful person i.e., Satish Hirpara. He has
                      seen a lot in his youth and struggled a lot and today he
                      is a successful businessman and owner of a company.
                    </p>
                    <div className="py-7">
                      <ul className="flex m-0 p-0 pt-lg-4">
                        <li className="bg-mainblue rounded-full h-10 w-10 pt-[11px] me-3">
                          <a href="">
                            <FaTwitter className="text-white mx-auto align-middle leading-5"></FaTwitter>
                          </a>
                        </li>
                        <li className="bg-mainblue rounded-full h-10 w-10 pt-[11px] me-3">
                          <a
                            href="https://www.linkedin.com/company/eveginternational/"
                            target="_blank"
                          ></a>
                          <FaLinkedinIn
                            className="text-white mx-auto align-middle leading-5"
                            style={{ cursor: "pointer" }}
                          ></FaLinkedinIn>
                        </li>
                        <li className="bg-mainblue rounded-full h-10 w-10 pt-[11px] me-3">
                          <a href="">
                            <FaInstagram
                              className="text-white mx-auto align-middle leading-5"
                              style={{ cursor: "pointer" }}
                            ></FaInstagram>
                          </a>
                        </li>
                        <li className="bg-mainblue rounded-full h-10 w-10 pt-[11px] me-3">
                          <a href="">
                            <FaFacebookF
                              className="text-white mx-auto align-middle leading-5"
                              style={{ cursor: "pointer" }}
                            ></FaFacebookF>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-32 bg-mainpurple relative">
            <div className="container">
              <div className="col-10 mx-auto shadow-lg p-5 mb-28 rounded-xl">
                <div className="flex flex-wrap items-center">
                <div className=" pe-3 ">
                    <h4 className="">
                    At EVEG Foundation, we are dedicated to nurturing the future by <font className="text-mainblue">planting trees,providing education</font>   to underprivileged children, and ensuring they have access to essential resources. Together, we strive to create a world where every child thrives.
                    </h4>
                    <h6 className="pt-3 font-semibold">
                      CEO & founder Eveg International Private Limited
                    </h6>
                    <br />
                    <p>
                    1. Celebrating Our Achievement
"We are proud to have planted 11,111 trees, setting a world record for our commitment to a greener planet! 🌳 This milestone showcases our dedication to sustainability and environmental conservation."
<br /><br />
2. A Greener Tomorrow
"Together, we planted 11,111 trees, creating a sustainable future for generations to come. 🌍 Join us in our mission to protect our planet!"
<br /><br />
3. Record-Breaking Initiative
"With great pride, we announce our achievement of planting 11,111 trees, earning recognition as a world record holder. 🌱 Let's continue to strive for a healthier environment!"
<br /><br />
4. Making a Difference
"We planted 11,111 trees and set a world record! 🌿 Our efforts highlight the importance of environmental stewardship and inspire others to take action."
<br /><br />
5. Inspiring Change
"Setting a world record by planting 11,111 trees is just the beginning. 🌲 Let's work together for a sustainable and greener future!"
                    </p>
                    <div className="py-7">
                      <ul className="flex m-0 p-0 pt-lg-4">
                        <li className="bg-mainblue rounded-full h-10 w-10 pt-[11px] me-3">
                          <a href="">
                            <FaTwitter className="text-white mx-auto align-middle leading-5"></FaTwitter>
                          </a>
                        </li>
                        <li className="bg-mainblue rounded-full h-10 w-10 pt-[11px] me-3">
                          <a
                            href="https://www.linkedin.com/company/eveginternational/"
                            target="_blank"
                          ></a>
                          <FaLinkedinIn
                            className="text-white mx-auto align-middle leading-5"
                            style={{ cursor: "pointer" }}
                          ></FaLinkedinIn>
                        </li>
                        <li className="bg-mainblue rounded-full h-10 w-10 pt-[11px] me-3">
                          <a href="">
                            <FaInstagram
                              className="text-white mx-auto align-middle leading-5"
                              style={{ cursor: "pointer" }}
                            ></FaInstagram>
                          </a>
                        </li>
                        <li className="bg-mainblue rounded-full h-10 w-10 pt-[11px] me-3">
                          <a href="">
                            <FaFacebookF
                              className="text-white mx-auto align-middle leading-5"
                              style={{ cursor: "pointer" }}
                            ></FaFacebookF>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>  
                 
                </div>
              </div>
            </div>
          </section>
          <section className=" bg-mainpurple relative">
            <div className="container d-flex justify-center">
              <Slider/>
            </div>
          </section>
          <section className="py-32 bg-mainpurple relative">
            <div className="container">
              <div className="general-container">
                <input
                  className="radio"
                  type="radio"
                  name="card"
                  id="cardUno"
                  defaultChecked
                />
                <label className="content" htmlFor="cardUno"></label>
                <input
                  className="radio"
                  type="radio"
                  name="card"
                  id="cardDos"
                />
                <label className="content" htmlFor="cardDos">
                  {/* <h1 className="title-card">
                    <span className="marg-bott">EXAMPLE TITLE OF MY CARD</span>
                    <span className="subtitle">
                      EXAMPLE SOME SUBTILTE OR HEADER
                    </span>
                  </h1>
                  <h3 className="card-title subsubtitle">
                    <span>EXAMPLE SOME ADDITIONS</span>
                  </h3> */}
                </label>
                <input
                  className="radio"
                  type="radio"
                  name="card"
                  id="cardTres"
                />
                <label className="content" htmlFor="cardTres"></label>
                <input
                  className="radio"
                  type="radio"
                  name="card"
                  id="cardCuatro"
                />
                <label className="content" htmlFor="cardCuatro"></label>
              </div>
            </div>
          </section>
          <section className="pb-32 bg-mainpurple relative">
            <div className="container">
              <div className="col-10 mx-auto shadow-lg p-5 mb-28 rounded-xl">
                <div className="flex flex-wrap items-center">
                  <div className="pb-20 col-sm-12 col-md-10 col-lg-7 col-xl-7">
                    <h2 className="text-3xl font-bold">
                      Eveg from
                      <font className="text-mainblue px-1">
                        Satish Hirpara's
                      </font>{" "}
                      point of view
                    </h2>
                    <br />
                    <p>
                      Satish who was not already interested in teaching but went
                      to study out of fear of his father and because of society
                      but his mind never felt in the books. He has inherited the
                      rites of helping others from his mother and fearlessness
                      from his father. It often seems that even God tests such
                      people, robbing them of their mother’s happiness at an
                      early age. Whenever such an incident took place, even a
                      person with a rock-like mind would fall, but Satish did
                      not lose courage and did not allow anyone else to lose
                      courage.
                      <br />
                      <br />
                      Not only was he interested in teaching but he was also
                      under pressure from his family. He had taken admitted in
                      civil but he was a direct student !! Despite taking
                      admission in civil, he used to go and sit in mechanical
                      class. It is said that something similar happened to
                      Satish. He failed in civil because of his teaching by
                      Param, so the family members were very upset with him.
                      Listening to him a lot, forcing him to do something
                      because the family also has some expectations from him
                      when the boy is old enough. But Satish had a different
                      tune in his mind and he wanted to do something new.
                    </p>
                  </div>
                  <div className="pb-20 col-sm-12 col-md-10 col-lg-5 col-xl-5 ps-5">
                    <img src="/e-veg.png" alt="satishsir" />
                  </div>
                  <div>
                    <p>
                      For this, he had no one from his family to support him.
                      Naturally, if you don’t even have two rupees in your
                      pocket and you are talking about lakhs, will anyone
                      believe it?? His dreams with Satish were high but he did
                      not have anything special with which he could make a fresh
                      start. However, he did not lose heart and continued his
                      hard work. But it is said that good men have to travel a
                      lot. Satish started his career and there he had a terrible
                      accident. An accident that made everyone talk, this person
                      may not be able to stand on his own. But Satish loses his
                      courage!!! He also beat death and got out of bed in just
                      two months Then a new Satish was born and now this Satish
                      could not be stopped by anyone.
                    </p>

                    <div>
                      <img
                        src="/socialwork1.jpeg"
                        alt="socialwork"
                        className="py-4"
                      />
                    </div>
                    <p>
                      Satish Share could have started his career by going abroad
                      but Satish, who loved his country and gave more importance
                      to his family, started the company in his own country. A
                      company is a very well-known exporting company in today’s
                      exports i.e. “Eveg International Private Limited” Eveg
                      means how to bring the vegetable or farmer’s kai to the
                      international market through the internet. The work that
                      Satish did with his thoughts and hard work. Eveg is one of
                      the existing top-ranked companies. Which currently teaches
                      a lot of young people how to export. Satish’s dream is to
                      teach 10,000 young people like him how to export and take
                      the country’s economy forward.
                      <br />
                      <br />
                      Satish is always at the forefront of helping others as he
                      has inherited it from his mother. People always party in
                      celebration of their birthdays or go out with their
                      friends. But Satish doesn’t believe in all this, he always
                      uniquely celebrates his birthday. That day he does
                      something new and helps people who are like to inspire
                      today’s youth. Satish motivates many people with his work.
                      His dream is for every youth of India to move forward in
                      their way and make the country famous.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
          <Copyright />
          <TopBtn />
          <Whatsapp></Whatsapp>
        </div>
      )}
    </div>
  );
};

export default Success;
