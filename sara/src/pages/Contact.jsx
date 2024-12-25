import React from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import "../styles/Utility.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosMailOpen } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import TopBtn from "../components/Topbtn";
import { ToastContainer, toast } from "react-toastify";
import "../styles/MQ.css";
import HashLoader from "react-spinners/HashLoader";
import emailjs from "@emailjs/browser";
import { useState, useEffect, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import Whatsapp from "../components/Whatsapp";
import axios from "axios";
const apiurl = import.meta.env.VITE_API_URL;

const Contact = () => {
  const form = useRef();


  // const sendEmail = (e) => {
  //   e.preventDefault();
  
    // emailjs
    //   .sendForm("service_qkj0yqe", "template_9kaieyc", form.current, "A2NC0ty7sO3tgKYxU")
    //   .then(
    //     () => {
    //       console.log("success");
    //       toast.success('Form Sent Successfully and our support team will contact you in 48 hours', {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //       });
  
    //       // Reset the form fields after successful submission
    //       form.current.reset();
    //     },
    //     (error) => {
    //       console.log("FAILED...", error);
    //     }
    //   );
  // };
  
  const sendEmail = async (e) => {
    e.preventDefault();
    
    // Get form data from the form fields
    const formData = {
      from_name: form.current.from_name.value,
      Phone_Number: form.current.Phone_Number.value,
      Email: form.current.Email.value,
      purpose: form.current.purpose.value,
      Address: form.current.Address.value
    };
  
    try {
      // Send form data to backend
      const response = await axios.post(`${apiurl}/auth/addcontact`, formData);
      
      if (response.data.success) {
        // Display success toast
        emailjs
      .sendForm("service_m7j4i5n", "template_q7ap7my", form.current, "ZWXz7y_7lnG_M6EFD")
      .then(
        () => {
          console.log("success");
          toast.success('Form Sent Successfully and our support team will contact you in 48 hours', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
  
          // Reset the form fields after successful submission
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
      }
    } catch (error) {
      console.error('Failed to send form data:', error);
      toast.error('Failed to send form. Please try again later.', {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
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
        <div className="bg-mainpurple">
           <ToastContainer/> 
          <TopHeader></TopHeader>
          <Header></Header>
          <section className="py-20 bg-mainpurple">
            <div className="container">
              <div className="flex flex-wrap items-center">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
                  <div className="shadow-lg lg:w-[75%] xl:w-[75%] p-6 rounded-lg border bordder-2 border-blue-300">
                    <h3 className="text-center py-4 text-mainblue">
                      Get In Touch with Us
                    </h3>
                    <form ref={form} onSubmit={sendEmail}>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                        required
                        name="from_name"
                      />
                      <input
                        type="number"
                        placeholder="Your Contact Number"
                        className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                        name="Phone_Number"
                        required
                      />
                      <input
                        type="email"
                        placeholder="E-Mail Address"
                        className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                        name="Email"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Purpose"
                        className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                        name="purpose"
                        required
                      />
                      <textarea
                        placeholder="Your Address"
                        className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                        name="Address"
                      ></textarea>
                      <button
                        type="submit"
                        className="bg-mainblue button-main border-blue p-3 rounded-3xl w-100 shadow-sm outline-none mb-3 text-white d-flex justify-center items-center transition-all duration-700"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                  <img
                    src="/contact.webp"
                    alt="contact"
                    className="animate-translatey"
                  />
                </div>
              </div>
              <div className="flex flex-wrap pt-20 justify-between items-center">
                <div className="iframe col-xs-12 col-sm-12 col-md-12 col-xl-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4533422764316!2d72.88369137388216!3d21.213864381397883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f708f3f3c75%3A0x22819f3cf6b1cc28!2sThe%20Palladium%20Mall!5e0!3m2!1sen!2sin!4v1722763225717!5m2!1sen!2sin"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    className="w-100"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                  <ul>
                    <li className="pt-8 flex flex-wrap items-center">
                      <div className="bg-mainblue h-10 w-10 rounded-full pt-[11px]">
                        <IoLocationOutline className="mx-auto text-white text-lg" />
                      </div>
                      <div className="w-75 ps-6">
                        <h3 className="text-mainblue font-bold m-0">
                          Location
                        </h3>
                        <p className="">
                          Corporate office 4007-08 The Palladium Mall, Yogi
                          Chowk, Surat, Gujarat 395010
                        </p>
                      </div>
                    </li>
                    <li className="pt-8 flex flex-wrap items-center">
                      <div className="bg-mainblue h-10 w-10 rounded-full pt-[11px]">
                        <IoIosMailOpen className="mx-auto text-white text-lg" />
                      </div>
                      <div className="w-75 ps-6">
                        <h3 className="text-mainblue font-bold m-0">Email</h3>
                        <p className="">EIBM@evegimpex.com</p>
                      </div>
                    </li>
                    <li className="pt-8 flex flex-wrap items-center">
                      <div className="bg-mainblue h-10 w-10 rounded-full pt-[11px]">
                        <IoMdCall className="mx-auto text-white text-lg" />
                      </div>
                      <div className="w-75 ps-6">
                        <h3 className="text-mainblue font-bold m-0">Call</h3>
                        <p className="">+91 97269 08478</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <Footer></Footer>
          <Copyright></Copyright>
          <TopBtn />
          <Whatsapp></Whatsapp>
        </div>
      )}
    </div>
  );
};

export default Contact;
