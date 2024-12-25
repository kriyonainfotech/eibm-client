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
import axios from "axios";
import Whatsapp from "../components/Whatsapp";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { signInWithPopup } from "firebase/auth";
import { auth, GoogleauthProvider } from "../config/firabaseconfig";
const Registration = () => {
  const [name,setname] = useState("")
  const [phone,setphone] = useState("")     
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const [confirmpassword,setconfirmpassword] = useState("")
  const [loading, setLoading] = useState(false);
  const [message,setmessage] = useState()
  const apiurl = import.meta.env.VITE_API_URL
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 8000);
  }, []);
  useEffect(()=>{
    document.title = 'EIBM || SignUp'
  })
const navigate = useNavigate()
const handlesubmit = async(e) => {
  e.preventDefault();
  if(!name||!phone||!email||!password||!confirmpassword){
    setmessage("Please fill all the fields")
  }
  if(password != confirmpassword){
    setmessage("password is not matched")
    return false;
  }
  let obj = {
    name:name,
    phone:phone,
    email:email,
    password:password
  }
  
  try {
    let res = await axios.post(`${apiurl}/auth/signup`,obj,{ withCredentials: true })
  setmessage(res.data.message);
  toast.success('Registration successful!', {
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
    
    setmessage(error.response.data.message);
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
          <section className="py-20">
            <div className="container">
              <div className="flex flex-wrap items-center">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
                  <div className=" xs:mb-20 sm:mb-20 md:mb-20 lg:mb-0 xl:mb-0 lg:w-[85%] xl:w-[85%] shadow-lg p-6 rounded-lg border bordder-2 border-blue-300">
                    <h3 className="text-center py-4 text-mainblue">
                      Create Your Account
                    </h3>
                    <form onSubmit={handlesubmit}>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                        required
                        onChange={(e) => setname(e.target.value)} value={name}
                      />
                      <input
                        type="phone"
                        placeholder="Your Contact Number"
                        className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                        required
                        onChange={(e) => setphone(e.target.value)} value={phone}
                      />
                      <input
                        type="email"
                        placeholder="E-Mail Address"
                        className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                        required
                        onChange={(e) => setemail(e.target.value)} value={email}
                      />
                      <input
                        type="password"
                        placeholder="Create a strong password"
                        className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                        required
                        onChange={(e) => setpassword(e.target.value)} value={password}
                      />
                      <input
                        type="password"
                        placeholder="Confirm password"
                        className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                        required
                        onChange={(e) => setconfirmpassword(e.target.value)} value={confirmpassword}
                      />
                      <button type="submit"
                        className="button-main transition-all duration-700 p-3 d-flex justify-center items-center text-decoration-none text-center rounded-3xl w-100 shadow-sm outline-none mb-3 mt-4 text-white bg-mainblue "
                      >
                        Register
                      </button>
                      <div className="py-4">
                        <h6 className="text-center relative before:absolute before:content-[''] before:bg-slate-300 before:w-[35%] before:top-2 before:right-0 before:h-[1px]  after:absolute after:content-[''] after:bg-slate-300 after:w-[35%] after:top-2 after:left-0 after:h-[1px]">
                          or SignUp with
                        </h6>
                      </div>
                      <div className="col-12 pb-4">
                        <button type="submit" onClick={handlegooglelogin} className="bg-gray-200 rounded-3xl font-bold flex items-center w-100 py-3 text-center justify-center">
                          <img
                            src="/google.png"
                            alt="google"
                            className="h-5 pe-2"
                          />{" "}
                          Google
                        </button>
                      </div>
                      <div className="flex justify-center">
                        <Link
                          to={"/signin"}
                          className="text-decoration-none text-secondary "
                        >
                          Have an Account ?{" "}
                          <font className="text-mainblue">SignIn</font>
                        </Link>
                      </div>
                      <div className="message">
                        <p style={{color : "red"}}>{message}</p>
                      </div>
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
          <TopBtn />
          <Whatsapp></Whatsapp>
        </div>
      )}
    </div>
  );
};
export default Registration;