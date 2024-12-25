import React from "react";
import '../styles/Utility.css'
const Coursesupload = () => {
  let coursesdata = [
    {
      id: 1,
      name: "Day-1",
      description: "This is day 1 course",
      ppt: "../assets/materials/Day-1.1 (Business road map).pptx",
      img: "../..//ppt1.png",
    },
    {
      id: 1,
      name: "Day-1.1",
      description: "This is day 1 course",
      ppt: "../assets/materials/Day-1.pptx",
      img: "../..//ppt1.png",
    },
    {
      id: 2,
      name: "Day-2",
      description: "This is day 2 course",
      ppt: "../assets/materials/Day-2.pptx",
      img: "../..//ppt1.png",
    },
    {
      id: 3,
      name: "Day-3",
      description: "This is day 3 course",
      ppt: "../assets/materials/Day-3.pptx",
      img: "../..//ppt1.png",
    },
    {
      id: 4,
      name: "Day-4",
      description: "This is day 4 course",
      ppt: "../assets/materials/Day-4.pptx",
      img: "../..//ppt1.png",
    },
    {
      id: 5,
      name: "Day-5",
      description: "This is day 5 course",
      ppt: "../assets/materials/Day-5.pptx",
      img: "../..//ppt1.png",
    },
    {
      id: 6,
      name: "Day-6",
      description: "This is day 6 course",
      ppt: "../assets/materials/Day-6.pptx",
      img: "../..//ppt1.png",
    },
    {
      id: 7,
      name: "Day-7",
      description: "This is day 7 course",
      ppt: "../assets/materials/Day-7.pptx",
      img: "../..//ppt1.png",
    },
    {
      id: 8,
      name: "Day-8",
      description: "This is day 8 course",
      ppt: "../assets/materials/Day-8.pptx",
      img: "../..//ppt1.png",
    },
    {
      id: 9,
      name: "Day-9",
      description: "This is day 9 course",
      ppt: "../assets/materials/Day-9.pptx",
      img: "../..//ppt1.png",
    },
    {
      id: 10,
      name: "Day-10",
      description: "This is day 10 course",
      ppt: "../assets/materials/Day-10.pptx",
      img: "../..//ppt1.png",
    },
    {
      id: 11,
      name: "Day-11",
      description: "This is day 12 course",
      ppt: "../assets/materials/Day-11.pptx",
      img: "../..//ppt1.png",
    },
    {
      id: 12,
      name: "Day-12",
      description: "This is day 12 course",
      ppt: "../assets/materials/Day-12.pptx",
      img: "../..//ppt1.png",
    },
    {
      id: 10,
      name: "Day-13",
      description: "This is day 13 course",
      ppt: "../assets/materials/Day-13.pptx",
      img: "../..//ppt1.png",
    },
    {
      id: 10,
      name: "Day-14",
      description: "This is day 14 course",
      ppt: "../assets/materials/Day-14.pptx",
      img: "../..//ppt1.png",
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="row d-flex">
          <div className="col-12  col-sm-12 col-md-8 col-lg-6 col-xl-3">
            {
                coursesdata.map((val)=>{
                    return(
                        <div className="mx-auto my-5">
                        <div className="rounded-xl p-3 w-100 border-2 border-blue" >
                            <img src={val.img} className="card-img-top" alt="..." />
                            <div className="card-body p-4">
                              <h5 className="card-title pb-3">{val.name}</h5>
                              <p className="card-text">
                               {val.description}
                              </p>
                              <a href={val.ppt} download="" className="button-main bg-mainblue text-white text-decoration-none px-5 py-2 rounded-3xl mt-21 transition-all duration-700 inline-block">
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                    )
                })
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default Coursesupload;
