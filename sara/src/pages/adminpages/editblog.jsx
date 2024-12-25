import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import TopHeader from "../../components/TopHeader";

const EditBlog = () => {
  const { id } = useParams(); // Get blog ID from the URL
  const [blog, setBlog] = useState({ name: "", description: "", image: "", externalLink: "" });
  const [newImage, setNewImage] = useState(null); // For uploading a new image
  const navigate = useNavigate();
  const apiurl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${apiurl}/auth/admin/getblog?id=${id}`, { withCredentials: true });
        setBlog(res.data.blog);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlog();
  },[id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewImage(e.target.files[0]); // Store the new image file
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", blog.name);
    formData.append("description", blog.description);
    formData.append("externalLink", blog.externalLink);
    if (newImage) formData.append("image", newImage); // If a new image is uploaded

    try {
      await axios.put(`${apiurl}/auth/admin/updateblog?id=${id}`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/admin/showblog"); // Navigate back to the blog list after updating
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="background_color h-screen">
    <TopHeader/>
      <div className="py-28">
        <div className="container">
        <h2>Edit Blog</h2>
      <form onSubmit={handleUpdate} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="blogName" className="form-label">Blog Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={blog.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="blogDescription" className="form-label">Blog Description</label>
          <textarea
            className="form-control"
            name="description"
            value={blog.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="blogImage" className="form-label">Blog Image</label>
          <input
            type="file"
            className="form-control"
            onChange={handleFileChange}
          />
          {blog.image && (
            <img src={`${apiurl}/uploads/${blog.image}`} alt="Current blog" width="200" />
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="blogLink" className="form-label">Blog Link</label>
          <input
            type="text"
            className="form-control"
            name="externalLink"
            value={blog.externalLink}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Blog</button>
      </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
