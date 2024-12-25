import React, { useEffect, useState, useRef } from "react";
import TopHedaer from "../../components/admincomponwents/TopHedaer";
import FooterCopyright from "../../components/admincomponwents/FooterCopyright";
import TopBtn from "../../components/admincomponwents/Topbtn";
import axios from "axios";

const Addblog = () => {
  const [name, setname] = useState("");
  const [des, setdes] = useState("");
  const [image, setimage] = useState(null);
  const [link, setlink] = useState("");
  const [notification, setNotification] = useState(null); // New state for notifications
  const [error, setError] = useState(null); // New state for error notifications
  const apiurl = import.meta.env.VITE_API_URL;

  const fileInputRef = useRef(null); // Create a ref for the file input

  const handlesubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", des);
    formData.append("image", image);
    formData.append("externalLink", link);

    try {
      const res = await axios.post(
        `${apiurl}/auth/admin/createBlog`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
      setNotification("Blog created successfully!"); // Set success notification
      setError(null); // Clear any existing error
      setname(""); // Reset form fields
      setdes("");
      setimage(null);
      setlink("");
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Reset the file input value
      }
    } catch (error) {
      console.log(error);
      setNotification(null); // Clear the success notification
      setError("Failed to create blog. Please try again."); // Set error notification
    }
  };

  return (
    <div className="background_color overflow-auto h-screen">
      <TopHedaer />
      <section className="py-28">
        <div className="container">
          {/* Show notification if present */}
          {notification && (
            <div className="alert alert-success" role="alert">
              {notification}
            </div>
          )}
          {/* Show error if present */}
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handlesubmit} encType="multipart/form-data">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Blog Name
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setname(e.target.value)}
                value={name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Blog Description
              </label>
              <textarea
                className="form-control"
                onChange={(e) => setdes(e.target.value)}
                value={des}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Blog Image
              </label>
              <input
                type="file"
                className="form-control"
                ref={fileInputRef} // Attach the ref to the file input
                onChange={(e) => setimage(e.target.files[0])}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Blog Link
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setlink(e.target.value)}
                value={link}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>
      <TopBtn />
      <FooterCopyright />
    </div>
  );
};

export default Addblog;
