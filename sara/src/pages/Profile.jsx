import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import TopHeader from '../components/TopHeader';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import '../styles/MQ.css';
import TopBtn from '../components/Topbtn';
import Whatsapp from '../components/Whatsapp';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const [user, setuser] = useState(null); 
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [image, setimage] = useState("");
  const apiurl = import.meta.env.VITE_API_URL
  useEffect(() => {
    const fetchUser = async () => {
      try {
        let res = await axios.get(`${apiurl}/auth/getuser`, { withCredentials: true });
        
        
        // Check if the response contains googleuser or user and set state accordingly
        if (res.data.googleuser) {
          setuser(res.data.googleuser);
          setname(res.data.googleuser.name || '');
          setphone(res.data.googleuser.phone || '');
          setemail(res.data.googleuser.email || '');
          setimage(res.data.googleuser.profilePic || '');
        } else if (res.data.users) {
          setuser(res.data.users);
          setname(res.data.users.name || '');
          setphone(res.data.users.phone || '');
          setemail(res.data.users.email || '');
          setimage(res.data.users.profilePic || '');
        } else {
          console.error("No user data found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchUser();
  }, []); // Dependency array to avoid infinite loop
  // Dependency array to avoid infinite loop

  const handlesubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email);
    if (image instanceof File) {
      formData.append('image', image);
    }
  
    try {
      let res = await axios.put(`${apiurl}/auth/updateprofile`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      // Assuming the response has the updated user data
      setuser(res.data.user); // Ensure you're setting the correct data here
      toast.success('Profile Update successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error("Error during profile update:", error.message);
      toast.error('Profile Update failed!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  

  if (!user) return null; 

  return (
    <div className='bg-mainpurple profiles'>
      <ToastContainer />
      <TopHeader />
      <Header />
      <div className="background_color">
        <section className="product_create pt-10 pb-20">
          <div className="container">
            <div className="flex flex-wrap items-center">
              <div className="col-12 p-3 rounded-md px-4">
                <h3 className="font-semibold text-2xl">Profile</h3>
                <form onSubmit={handlesubmit} className="py-4 flex flex-wrap items-center justify-between" encType='multipart/form-data'>
                  {/* img */}
                  <div className="flex fex-wrap items-center col-12 pt-3 pb-6">
                  {
  user && (
    <img 
      src={user.profilePic.startsWith('http') 
        ? user.profilePic 
        : `${apiurl}/uploads/${user.profilePic}`} 
      alt="user" 
      className="rounded-circle w-[150px] h-[150px]" 
    />
  )
}

                    <p className="ps-4">
                      <span className="text-lg font-medium block">{name}</span>
                      <span className="pt-2 text-gray-400 text-sm">User</span>
                    </p>
                  </div>
                  {/* upload */}
                  <div className="col-12">
                    <div className="">
                      <input
                        type="file"
                        className="block my-3 w-100 text-xs p-3 background_color rounded-md outline-none"
                        onChange={(e) => setimage(e.target.files[0])}
                      />
                    </div>
                  </div>
                  {/* 1 */}
                  <div className="px-2 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="w-100">
                      <label className="text-sm">Name</label>
                      <input
                        type="text"
                        placeholder="Add Name"
                        className="text-xs block my-3 w-100 p-3 rounded-md outline-none"
                        required
                        onChange={(e) => setname(e.target.value)}
                        value={name}
                      />
                    </div>
                  </div>
                  <div className="px-2 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="w-100">
                      <label className="text-sm">Contact</label>
                      <input
                        type="number"
                        className="block my-3 w-100 text-xs p-3 rounded-md outline-none"
                        required
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="px-2 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="w-100">
                      <label className="text-sm">E-Mail</label>
                      <input
                        type="email"
                        placeholder="Your Mail Address"
                        className="block my-3 w-100 text-xs p-3 rounded-md outline-none"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="py-4 me-auto col-12 flex justify-center">
                    <button className="w-25 text-white rounded-md ms-2 h-10 bg-mainblue" type='submit'>
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <Copyright />
      <TopBtn />
      <Whatsapp />
    </div>
  );
}

export default Profile;
