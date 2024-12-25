import React from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import "../styles/Utility.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosMailOpen } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import TopBtn from "../components/Topbtn";
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect } from "react";
import Whatsapp from "../components/Whatsapp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from  'axios'
import { signInWithPopup } from "firebase/auth";
import { auth, GoogleauthProvider } from "../config/firabaseconfig";
const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [email1,setemail1] =  useState("")
  const [password1,setpassword1] =  useState('')
  const [message,setmessage] = useState()
  const navigate = useNavigate()
  const apiurl = import.meta.env.VITE_API_URL

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  const handlelogin  = async(e) =>{
    e.preventDefault()
    const obj = {
      email1,password1
    }
    try {
      let res = await axios.post(`${apiurl}/auth/login`,obj,{ withCredentials: true })
      toast.success('Login successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
     navigate('/')
  
    } catch (error) {
      console.log(error);
      setmessage(error.response.data.message)
    }
  } 
  const handlegooglelogin = async() => {
    try {
      const res = await signInWithPopup(auth, GoogleauthProvider);
      const { uid, displayName, email, photoURL, phoneNumber } = res.user;
  
      const userData = {
        uid: uid,
        name: displayName,
        email: email,
        profilePic: photoURL,
      };
  
      if (phoneNumber) {
        userData.phone = phoneNumber;
      }
  
      const response = await axios.post(`${apiurl}/auth/google`, userData,{ withCredentials: true });
      
      navigate('/');
    } catch (error) {
      console.log("Login error:", error);
    }
    
  }
  return (
    <div className="load bg-mainpurple">
      <ToastContainer />
      {loading ? (
         <div className="">
         <HashLoader
           color={"blue"}
           className="h-100 w-100"
           loading={loading}
           size={50}
           aria-label="Loading Spinner"
           data-testid="loader"
         />
       </div>
      ) : (
        <div className="bg-mainpurple">
          <TopHeader></TopHeader>
          <Header></Header>
          <section className="py-20 bg-mainpurple">
            <div className="container">
              <div className="flex flex-wrap items-center">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
                  <div className="shadow-lg xs:mb-20 sm:mb-20 md:mb-20 lg:mb-0 xl:mb-0 lg:w-[75%] xl:w-[75%] p-6 rounded-lg border bordder-2 border-blue-300">
                    <h3 className="text-center py-4 text-mainblue m-0">
                      Sign In
                    </h3>
                    <p className=" text-center text-secondary pb-2">
                      Welcome back! Let's continue with,
                    </p>
                    <div className="col-12 pb-4">
                      <button onClick={handlegooglelogin} className="bg-gray-200 rounded-3xl font-bold flex items-center w-100 py-3 text-center justify-center" type="submit">
                        <img
                          src="/google.png"
                          alt="google"
                          className="h-5 pe-2"
                        />{" "}
                        Google
                      </button>
                    </div>
                   
                    <div className="pb-4">
                      <h6 className="text-center relative before:absolute before:content-[''] before:bg-slate-300 before:w-[35%] before:top-2 before:right-0 before:h-[1px]  after:absolute after:content-[''] after:bg-slate-300 after:w-[35%] after:top-2 after:left-0 after:h-[1px]">
                        or Signin with
                      </h6>
                    </div>
                    <form onSubmit={handlelogin}>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                        required
                        onChange={(e) => setemail1(e.target.value)}
                        value={email1}
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                        required
                        onChange={(e) => setpassword1(e.target.value)}
                        value={password1}
                      />
                      <Link
                        to={"/forgetpsw"}
                        className="text-decoration-none py-3"
                      >
                        Forget Password ?
                      </Link>

                      <button
                        type="submit"
                       className="button-main transition-all duration-700 p-3 mt-4 rounded-3xl w-100 shadow-sm outline-none mb-3 text-white bg-mainblue d-flex justify-center items-center"
                      >
                        SignIn
                      </button>
                      <div className="flex justify-center">
                        <Link
                          to={"/registration"}
                          className="text-decoration-none text-secondary "
                        >
                          Don't Have an Account ?{" "}
                          <font className="text-mainblue">SignUp</font>
                        </Link>
                      </div>
                      <p>{message}</p>
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
            </div>
          </section>
          <Footer></Footer>
          <Copyright></Copyright>
          <TopBtn></TopBtn>
          <Whatsapp></Whatsapp>
        </div>
      )}
    </div>
  );
};

export default Signin;
