import React, { useState, useEffect } from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import "../styles/Companies.css";
import HashLoader from "react-spinners/HashLoader";
import TopBtn from "../components/Topbtn";
import Whatsapp from "../components/Whatsapp";
import "../styles/MQ.css";
import "../styles/blog.css";
import axios from 'axios';

const Blog = () => {
  const [loading, setLoading] = useState(true); // Initialize loading as true
  const [blog, setBlog] = useState([]);  // Ensure blog is initialized as an array
  const [error, setError] = useState(null); // State for error handling
  const apiurl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${apiurl}/auth/getblog`, {
          withCredentials: true,
        });
       
        setBlog(res.data.blog);  // Access the array inside res.data
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error(error);
        setError("Failed to load blogs. Please try again later.");
        setLoading(false); // Set loading to false even if there's an error
      }
    };
    fetchBlog();
  }, [apiurl]);

  // Loader Styling
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div>
      {/* Top Header and Navigation */}
      <div className="success bg-mainpurple">
        <TopHeader />
        <Header />

        {/* Page Title */}
        <h3 className="text-mainblue text-center bg-mainpurple m-0 pt-7 text-3xl font-bold">
          Blogs
        </h3>

        {/* Main Section */}
        <section className="py-16 bg-mainpurple relative">
          <div className="container">
            {/* Loading Spinner */}
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <HashLoader
                  color={"#6366f1"}
                  loading={loading}
                  cssOverride={override}
                  size={60}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            ) : error ? (
              // Error Message
              <div className="alert alert-danger text-center" role="alert">
                {error}
              </div>
            ) : (
              // Blog Grid
              <div className="row">
                {blog && blog.length > 0 ? (
                  blog.map((val) => (
                    <div className="col-lg-4 col-md-6 mb-6" key={val._id}>
                      <div className="card h-100 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                        {/* Blog Image */}
                        <div className="card-image d-flex justify-center">
                          <img
                            src={`${apiurl}/uploads/${val.image}`}
                            alt={val.name}
                            className="w-50"
                          />
                        </div>
                        {/* Blog Content */}
                        <div className="card-content p-4 flex flex-col justify-between h-60">
                          <div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                              {val.name}
                            </h3>
                            <p className="text-gray-600 overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                              {val.description}
                            </p>
                          </div>
                          <a
                            href={val.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block bg-[#6366f1] text-white px-4 py-2 rounded-md hover:bg-[#4f46e5] transition-colors duration-300"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  // No Blogs Message
                  <div className="col-12">
                    <div className="alert alert-info text-center" role="alert">
                      No blogs available at the moment.
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Footer and Additional Components */}
        <Footer />
        <Copyright />
        <TopBtn />
        <Whatsapp />
      </div>
    </div>
  );
};

export default Blog;
