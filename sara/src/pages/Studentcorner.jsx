import React from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import "../styles/Utility.css";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { Link, useNavigate } from "react-router-dom";
import TopBtn from "../components/Topbtn";
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect } from "react";
import "../styles/MQ.css";
import axios from "axios";
import Whatsapp from "../components/Whatsapp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Studentcorner = () => {
  const [loading, setLoading] = useState(false);
  const [name, setname] = useState();
  const [phone, setphone] = useState();
  const [altphone, setaltphone] = useState();
  const [email, setemail] = useState();
  const [city, setcity] = useState();
  const [address, setaddress] = useState();
  const [peraddress, setperaddress] = useState();
  const [message, setmessage] = useState();
  const [date, setdate] = useState();
  const [qualification, setqualification] = useState();
  const [occupation, setoccupation] = useState();
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const apiurl = import.meta.env.VITE_API_URL
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  let exportproduct = [
    {
      name: "Rice - Basmati",
    },
    {
      name: "Rice(Other Than basmati)",
    },
    {
      name: "Pulses",
    },
    {
      name: "Wheat",
    },
    {
      name: "Tobacco",
    },
    {
      name: "Cashew",
    },
    {
      name: "Sesame Seeds",
    },
    {
      name: "Groundnut",
    },
    {
      name: "Vegetable Oils",
    },
    {
      name: "Other Cereals",
    },
    {
      name: "CRUDE PETROLEUM",
    },
    {
      name: "GOLD",
    },
    {
      name: "COAL",
    },
    {
      name: "DIAMOND",
    },
    {
      name: "ELECTRICAL MACHINERY AND EQUIPMENT",
    },
    {
      name: "NATURAL GAS",
    },
    {
      name: "CHEMICALS",
    },
    {
      name: "FERTILIZERS",
    },
    {
      name: "MACHINERY",
    },
    {
      name: "IRON AND STEEL",
    },
  ];
  let importproduct = [
    {
      name: "Rice",
    },
    {
      name: "Wheat",
    },
    {
      name: "Sugar(1701)",
    },
    {
      name: "Onion",
    },
    {
      name: "Maize(CORN)(1005)",
    },
  ];
  const handleBatchChange = (e) => {
    setSelectedBatch(e.target.value);
  };
  const handlebatchchange = (e) => {
    setSelectedBranch(e.target.value);
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert('You must agree to the terms and conditions before submitting.');
      return false;
    }
    const obj = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      city: city,
      permanetaddress: peraddress,
      branch: selectedBranch,
      batch: selectedBatch,
      altphone: altphone,
      date: date,
      occupation: occupation,
      qualification: qualification,
    };
    try {
      let res = await axios.post(
        `${apiurl}/auth/create-admission`,
        obj,
        { withCredentials: true }
      );
      
      
      toast.success("Admission Form Submitted successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // if (location.state === "true") {
      //   setmessage("Admission Form submitted successfully");
      //   toast.success("Admission Form Submitted successful!", {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //   });
      //   navigate("/courses");
      //   toast.success("Admission Form Submitted successful!", {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //   });
      // } else {
      //   setmessage(res.data.message);
      // }
      // emailjs
      //   .sendForm('service_70z06d9', 'template_9kaieyc', form.current, {
      //     Key: '01LAHmwEOu9CQD981',
      //   })
      //   .then(
      //     () => {
      //       console.log('SUCCESS!');
      //     },
      //     (error) => {
      //       console.log('FAILED...', error.text);
      //     },
      //   );
    } catch (error) {
      console.log(error);
      
      setmessage(error.response.data.message);
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      message.style.color = "red";
      console.log(error);
      
    }
  };
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
        <div className="student-corner bg-mainpurple">
          <ToastContainer />
          <TopHeader></TopHeader>
          <Header></Header>
          <h3 className="text-mainblue fw-bold text-4xl text-center pt-5">
            Student Corner
          </h3>
          {/* form */}
          <section className="py-24 relative bg-mainpurple">
            <img
              src="voice.png"
              alt="voice"
              className="sc1 h-24 absolute right-28 swing  xs:hidden sm:hidden md:hidden lg:block xl:block"
            />
            <img
              src="bookcontact.png"
              alt="book"
              className="sc2 h-24 absolute right-[500px] bottom-40 swing  xs:hidden sm:hidden md:hidden lg:block xl:block"
            />
            <img
              src="mail.png"
              alt="mail"
              className="sc3 h-24 absolute right-32 bottom-80 swing  xs:hidden sm:hidden md:hidden lg:block xl:block"
            />
            <div className="container">
              <div className="flex flex-wrap items-center">
                <div className="col-xs-10 col-sm-12 col-md-12 col-lg-7 col-xl-7">
                  <div className="shadow-lg xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[75%] xl:w-[75%] p-6 rounded-lg border bordder-2 border-blue-300">
                    <h3 className="text-center py-4 text-mainblue">
                      Admission Form
                    </h3>
                    <form onSubmit={handlesubmit}>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                        required
                        onChange={(e) => setname(e.target.value)}
                        value={name}
                      />
                      <input
                        type="date"
                        className="p-3 rounded-3xl w-[46%] shadow-sm outline-none mb-3"
                        required
                        onChange={(e) => setdate(e.target.value)}
                        value={date}
                      />
                      <input
                        type="text"
                        placeholder="Your Qualification"
                        className="p-3 rounded-3xl w-[48%] ms-4 shadow-sm outline-none mb-3"
                        required
                        onChange={(e) => setqualification(e.target.value)}
                        value={qualification}
                      />
                      <input
                        type="text"
                        placeholder="Current Occupation"
                        className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                        required
                        onChange={(e) => setoccupation(e.target.value)}
                        value={occupation}
                      />
                      <input
                        type="number"
                        maxLength={10}
                        placeholder="Your Contact Number"
                        className="p-3 rounded-3xl w-[46%] shadow-sm outline-none mb-3"
                        required
                        onChange={(e) => setphone(e.target.value)}
                        value={phone}
                      />
                      <input
                        type="number"
                        maxLength={10}
                        placeholder="Alt Contact Number"
                        className="p-3 rounded-3xl w-[48%] ms-4 shadow-sm outline-none mb-3"
                        required
                        onChange={(e) => setaltphone(e.target.value)}
                        value={altphone}
                      />
                      <input
                        type="email"
                        placeholder="E-Mail Address"
                        className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                        required
                        onChange={(e) => setemail(e.target.value)}
                        value={email}
                      />
                      <select
                        value={selectedBranch} // Bind the state to the select value
                        onChange={handlebatchchange} // Handle changes
                        className="pe-2 px-2 py-2 rounded-2xl w-[48%] ms-4 shadow-sm outline-none mb-3"
                        required
                      >
                        <option value="">Select Branch</option>
                        <option value="Surat">Surat</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Vadodara">Vadodara</option>
                        <option value="Rajkot">Rajkot</option>
                      </select>
                      <select
                        type="text"
                        className="pe-2 px-2 py-2 rounded-2xl w-[48%] ms-4 shadow-sm outline-none mb-3"
                        required
                        value={selectedBatch} // Bind the state to the select value
                        onChange={handleBatchChange} // Handle changes
                      >
                        <option value="">Select Batch (Date & Time)</option>
                        <option value="Morning">Morning</option>
                        <option value="Evening">Evening</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Enter Your City"
                        className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                        required
                        onChange={(e) => setcity(e.target.value)}
                        value={city}
                      />
                      <textarea
                        placeholder="Your current Address"
                        className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                        onChange={(e) => setaddress(e.target.value)}
                        value={address}
                      ></textarea>
                      <textarea
                        placeholder="Your Permanent Address"
                        className="p-3 rounded-3xl w-100 shadow-sm outline-none mb-3"
                        onChange={(e) => setperaddress(e.target.value)}
                        value={peraddress}
                      ></textarea>
                      <div className="py-4 px-2">
                        <input
                          type="checkbox"
                          className="p-2"
                          checked={isChecked} // Bind the state to the checkbox
                          onChange={handleCheckboxChange} // Handle changes
                        />
                        <label className="ps-3">Terms and Conditions</label>
                      </div>
                      <button
                        type="submit"
                        className="button-main p-3 text-decoration-none text-center d-flex justify-center items-center rounded-3xl w-100 shadow-sm outline-none mb-3 text-white bg-mainblue transition-all duration-700"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-sm-10 col-md-12 col-lg-5 col-xl-5 xs:hidden sm:hidden md:hidden lg:block xl:block">
                  <img
                    src="/admission.png"
                    alt="admission"
                    className="animate-translatey w-[24rem] h-[400px]"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* benefits */}
          <section className="xs:pt-0 sm:pt-0 md:py-24 lg:pt-24 xl:pt-24 relative">
            <img
              src="/vector8.png"
              alt="v8"
              className="absolute right-0 animate-pulse"
            />
            <div className="container">
              <div className="flex flex-wrap justify-between items-center">
                <div className="col-sm-10 col-md-10 col-lg-3 col-xl-3 mx-auto sm:pb-10 lg:pb-0">
                  <img
                    src="/framevec1.svg"
                    alt="framevec1"
                    className="mx-auto"
                  />
                </div>
                <div className="col-sm-10 col-md-10 col-lg-9 col-xl-9 relative mx-auto ps-16">
                  <h2 className="font-bold sm:text-3xl lg:text-4xl xl:text-4xl">
                    <font className="text-mainblue">Benefits</font> of Import &
                    Export
                  </h2>
                  <ul className="list-decimal pt-4 xs:text-sm sm:text-sm flex-wrap md:text-lg lg:text-lg xl:text-lg xs:block sm:block md:flex lg:flex xl:flex">
                    <div className="col-sm-12 col-md-4 col-lg-6 col-xl-6">
                      <li className="py-2 sm:text-sm lg:text-base">
                        No Goverment Taxes.
                      </li>
                      <li className="py-2 sm:text-sm lg:text-base">
                        Develope Global Brand.
                      </li>
                      <li className="py-2 sm:text-sm lg:text-base">
                        Market Diversification
                      </li>
                      <li className="py-2 sm:text-sm lg:text-base">
                        Govt. Incentives / Benefits
                      </li>
                      <li className="py-2 sm:text-sm lg:text-base">
                        Govt. Support
                      </li>
                      <li className="py-2 sm:text-sm lg:text-base">
                        High Turnover
                      </li>
                      <li className="py-2 sm:text-sm lg:text-base">
                        High profit margin
                      </li>
                      <li className="py-2 sm:text-sm lg:text-base">
                        Currency Benefits
                      </li>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-6 col-xl-6 md:ps-16 lg:ps-4 xl:ps-4">
                      <li className="py-2 sm:text-sm lg:text-base">
                        Party's risk cover by ECGC.
                      </li>
                      <li className="py-2 sm:text-sm lg:text-base">
                        MDA Scheme Benefits (Foreign Exhibition).
                      </li>
                      <li className="py-2 sm:text-sm lg:text-base">
                        No Manufacturing Investment (As a Merchant).
                      </li>
                      <li className="py-2 sm:text-sm lg:text-base">
                        Buyers & Sellers Range (200 + Countries).
                      </li>
                      <li className="py-2 sm:text-sm lg:text-base">
                        Payment Terms (Advance / Letter of Credit).
                      </li>
                      <li className="py-2 sm:text-sm lg:text-base">
                        Recession / Inflation Advantage.
                      </li>

                      <li className="py-2 sm:text-sm lg:text-base">
                        No effect of Govt. Policy (GST / Demonetisation)
                      </li>
                      <li className="py-2 sm:text-sm lg:text-base">
                        Totally White Business
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* Top Export Product List */}
          <section className="xs:pt-20 sm:pt-20 md:pt-0 lg:pt-24 xl:pt-24 relative bg-mainpurple">
            <div className="container">
              <h3 className="font-bold text-4xl text-center">
                Top <font className="text-mainblue">Import</font> Product List
              </h3>
              <div className="py-14 flex flex-wrap justify-center">
                {importproduct.map((product, index) => (
                  <div className="p-3 col-sm-4 col-md-3 col-lg-2 col-xl-2">
                    <button className="Btn uppercase text-xs w-[85%] inline-block font-semibold">
                      {product.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Top Import Product List */}
          <section className="pt-24 relative">
            <div className="container">
              <h3 className="font-bold text-4xl text-center">
                Top <font className="text-mainblue">Export</font> Product List
              </h3>
              <div className="py-14 flex flex-wrap justify-center">
                {exportproduct.map((product, index) => (
                  <div className="p-3 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                    <button className="Btn uppercase text-xs w-[85%] inline-block font-semibold">
                      {product.name}
                    </button>
                  </div>
                ))}
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

export default Studentcorner;
