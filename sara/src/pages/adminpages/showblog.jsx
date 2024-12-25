import React, { useEffect, useState } from "react";
import TopHedaer from "../../components/admincomponwents/TopHedaer";
import FooterCopyright from "../../components/admincomponwents/FooterCopyright";
import TopBtn from "../../components/admincomponwents/Topbtn";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Showblog = () => {
  const [blog, setBlog] = useState([]);
  const navigate = useNavigate();
  const apiurl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${apiurl}/auth/getblog`, {
          withCredentials: true,
        });
        console.log(res.data);
        setBlog(res.data.blog); // Access the array inside res.data
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlog();
  });
  const handledelete = async (id) => {
    console.log(id);

    try {
      let res = await axios.post(
        `${apiurl}/auth/admin/deleteblog`,
        { id },
        { withCredentials: true }
      );
      navigate("/admin/showblog");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="background_color overflow-auto h-screen">
      <TopHedaer />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Blog Title</th>
                    <th>Blog Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {blog.map((val, index) => (
                    <tr key={val._id}>
                      <td>{index + 1}</td>
                      <td>{val.name}</td>
                      <td>{val.description}</td>
                      <td>
                        <button
                          className="btn btn-danger me-3"
                          onClick={() => handledelete(val._id)}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-primary"
                          onClick={() => navigate(`/admin/editblog/${val._id}`)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <TopBtn />
      <FooterCopyright />
    </div>
  );
};

export default Showblog;
