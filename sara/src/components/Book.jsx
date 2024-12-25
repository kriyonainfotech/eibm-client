// import React, { useState, useRef } from "react";
// import "../styles/Utility.css";

// const Book = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const pageRefs = useRef([]);

//   const toggleClass = (element, toggleClassName) => {
//     if (element) {
//       element.classList.toggle(toggleClassName);
//     }
//   };

//   const movePage = (index, page) => {
//     const element = pageRefs.current[index];

//     if (page === currentPage) {
//       setCurrentPage((prevPage) => {
//         const newPage = prevPage + 2;
//         toggleClass(element, "left-side");
//         if (index + 1 < pageRefs.current.length) {
//           toggleClass(pageRefs.current[index + 1], "left-side");
//         }
//         return newPage;
//       });
//     } else if (page === currentPage - 1) {
//       setCurrentPage((prevPage) => {
//         const newPage = prevPage - 2;
//         toggleClass(element, "left-side");
//         if (index - 1 >= 0) {
//           toggleClass(pageRefs.current[index - 1], "left-side");
//         }
//         return newPage;
//       });
//     }
//   };

//   const handlePageClick = (e, index, page) => {
//     e.preventDefault();
//     e.stopPropagation();
//     movePage(index, page);
//   };

//   return (
//     <section className="BookSec pb-28 pt-14 relative bg-purple-50">
//       <img src="public/vector7.png" alt="v7" className="absolute" />
//       <div className="container">
//         <div className="py-4">
//           <div className="flex flex-wrap justify-between">
//             <div className="col-sm-10 col-md-10 col-lg-4 col-xl-4 relative mx-auto h-[400px]">
//               <div className="book h-100">
//                 <div
//                   ref={(el) => (pageRefs.current[0] = el)}
//                   className="page cursor-pointer cover-front"
//                   onClick={(e) => handlePageClick(e, 0, 1)}
//                   onTouchStart={(e) => handlePageClick(e, 0, 1)}
//                 >
//                   <h6 className="text-white text-2xl w-3/4 mx-auto leading-normal mt-11 font-bold">
//                     Course Content Facilities .
//                   </h6>
//                   <p>Open Me</p>
//                   <div className="hat">
//                     <i className="fab fa-pied-piper-hat" />
//                   </div>
//                 </div>
//                 <div
//                   ref={(el) => (pageRefs.current[1] = el)}
//                   className="page cursor-pointer cover-front"
//                   onClick={(e) => handlePageClick(e, 1, 2)}
//                   onTouchStart={(e) => handlePageClick(e, 1, 2)}
//                 />
//                 {/* Page 1 */}
//                 <div
//                   ref={(el) => (pageRefs.current[2] = el)}
//                   className="page cursor-pointer text-page p-4"
//                   onClick={(e) => handlePageClick(e, 2, 3)}
//                   onTouchStart={(e) => handlePageClick(e, 2, 3)}
//                 >
//                   <p>Course Content</p>
//                   <p>
//                     Our Certified Import-Export Course is meticulously designed
//                     to provide students with comprehensive knowledge and
//                     practical skills in the global trade industry. This course
//                     covers essential topics such as international trade
//                     regulations, logistics, documentation, and customs
//                     procedures.
//                   </p>
//                 </div>
//                 <div
//                   ref={(el) => (pageRefs.current[3] = el)}
//                   className="page text-page"
//                   onClick={(e) => handlePageClick(e, 3, 4)}
//                   onTouchStart={(e) => handlePageClick(e, 3, 4)}
//                 />
//                 {/* Page 2 */}
//                 <div
//                   ref={(el) => (pageRefs.current[4] = el)}
//                   className="page text-page p-4"
//                   onClick={(e) => handlePageClick(e, 4, 5)}
//                   onTouchStart={(e) => handlePageClick(e, 4, 5)}
//                 >
//                   <p className="text-xl">
//                     {" "}
//                     <font className="text-4xl font-semibold">F</font>aculties
//                   </p>
//                   <p>
//                     Our esteemed faculties comprise seasoned professionals and
//                     experts with extensive experience in the field of
//                     international trade and commerce. Each member of our faculty
//                     brings a wealth of knowledge and practical insights, having
//                     worked in various capacities across global markets.
//                   </p>
//                 </div>
//                 <div
//                   ref={(el) => (pageRefs.current[5] = el)}
//                   className="page text-page"
//                   onClick={(e) => handlePageClick(e, 5, 6)}
//                   onTouchStart={(e) => handlePageClick(e, 5, 6)}
//                 />
//                 {/* Page 3 */}
//                 <div
//                   ref={(el) => (pageRefs.current[6] = el)}
//                   className="page text-page p-4"
//                   onClick={(e) => handlePageClick(e, 6, 7)}
//                   onTouchStart={(e) => handlePageClick(e, 6, 7)}
//                 >
//                   <p className="text-xl">
//                     {" "}
//                     <font className="text-4xl font-semibold">E</font>xam
//                     Documents Learning
//                   </p>
//                   <p>
//                     Mastering the preparation and understanding of exam
//                     documents is crucial for academic success. Our focused
//                     learning module on exam documents equips students with the
//                     skills to effectively create, organize, and review essential
//                     materials.
//                   </p>
//                 </div>
//                 <div
//                   ref={(el) => (pageRefs.current[7] = el)}
//                   className="page text-page"
//                   onClick={(e) => handlePageClick(e, 7, 8)}
//                   onTouchStart={(e) => handlePageClick(e, 7, 8)}
//                 />
//                 {/* Page 4 */}
//                 <div
//                   ref={(el) => (pageRefs.current[8] = el)}
//                   className="page text-page p-4"
//                   onClick={(e) => handlePageClick(e, 8, 9)}
//                   onTouchStart={(e) => handlePageClick(e, 8, 9)}
//                 >
//                   <p className="text-xl">
//                     {" "}
//                     <font className="text-4xl font-semibold">P</font>ractical
//                     Exposure
//                   </p>
//                   <p>
//                     Practical exposure in business management involves hands-on
//                     experience through real-world projects, internships, and
//                     case studies, allowing students to apply theoretical
//                     knowledge in practical settings. This approach enhances
//                     their understanding of business operations, decision-making
//                     processes, and strategic thinking, preparing them for the
//                     dynamic challenges of the business world.
//                   </p>
//                 </div>
//                 <div
//                   ref={(el) => (pageRefs.current[9] = el)}
//                   className="page text-page"
//                   onClick={(e) => handlePageClick(e, 9, 10)}
//                   onTouchStart={(e) => handlePageClick(e, 9, 10)}
//                 />
//                 {/* Page 5 */}
//                 <div
//                   ref={(el) => (pageRefs.current[10] = el)}
//                   className="page text-page p-4"
//                   onClick={(e) => handlePageClick(e, 10, 11)}
//                   onTouchStart={(e) => handlePageClick(e, 10, 11)}
//                 >
//                   <p className="text-xl">
//                     {" "}
//                     <font className="text-4xl font-semibold">P</font>roduct
//                     Selection Exposure
//                   </p>
//                   <ul className="list-decimal">
//                     <li className="pt-2">Market Research</li>
//                     <li className="pt-2">Profitability</li>
//                     <li className="pt-2">Pricing Strategy</li>
//                     <li className="pt-2">Regulatory Compliance</li>
//                     <li className="pt-2">Cultural and Regional Preferences</li>
//                     <li className="pt-2">Risk Assessment</li>
//                     <li className="pt-2">Logistics and Distribution</li>
//                   </ul>
//                 </div>
//                 <div
//                   ref={(el) => (pageRefs.current[11] = el)}
//                   className="page text-page"
//                   onClick={(e) => handlePageClick(e, 11, 12)}
//                   onTouchStart={(e) => handlePageClick(e, 11, 12)}
//                 />
//                 {/* Page 6 */}
//                 <div
//                   ref={(el) => (pageRefs.current[12] = el)}
//                   className="page text-page p-4"
//                   onClick={(e) => handlePageClick(e, 12, 13)}
//                   onTouchStart={(e) => handlePageClick(e, 12, 13)}
//                 >
//                   <p className="text-xl">
//                     {" "}
//                     <font className="text-4xl font-semibold">M</font>arketing
//                     Exposure
//                   </p>
//                   <p>
//                     Exposure to practical marketing is crucial in international
//                     business as it bridges the gap between theoretical knowledge
//                     and real-world application, enabling businesses to navigate
//                     complex global markets effectively.
//                   </p>
//                 </div>
//                 <div
//                   ref={(el) => (pageRefs.current[13] = el)}
//                   className="page text-page"
//                   onClick={(e) => handlePageClick(e, 13, 14)}
//                   onTouchStart={(e) => handlePageClick(e, 13, 14)}
//                 />
//                 {/* Page 7 */}
//                 <div
//                   ref={(el) => (pageRefs.current[14] = el)}
//                   className="page text-page p-4"
//                   onClick={(e) => handlePageClick(e, 14, 15)}
//                   onTouchStart={(e) => handlePageClick(e, 14, 15)}
//                 >
//                   <p className="text-xl">
//                     {" "}
//                     <font className="text-4xl font-semibold">S</font>ales
//                     Exposure
//                   </p>
//                   <p>
//                     Exposure to practical sales experience is crucial in
//                     international business as it equips individuals with the
//                     skills to effectively engage with diverse markets, negotiate
//                     deals, and navigate complex sales environments across
//                     different cultures and regions.
//                   </p>
//                 </div>
//                 <div
//                   ref={(el) => (pageRefs.current[15] = el)}
//                   className="page text-page"
//                   onClick={(e) => handlePageClick(e, 15, 16)}
//                   onTouchStart={(e) => handlePageClick(e, 15, 16)}
//                 />
//                 {/* Page 8 */}
//                 <div
//                   ref={(el) => (pageRefs.current[16] = el)}
//                   className="page cover-back"
//                   onClick={(e) => handlePageClick(e, 16, 17)}
//                   onTouchStart={(e) => handlePageClick(e, 16, 17)}
//                 />
//                 <div
//                   ref={(el) => (pageRefs.current[17] = el)}
//                   className="page cover-back"
//                   onClick={(e) => handlePageClick(e, 17, 18)}
//                   onTouchStart={(e) => handlePageClick(e, 17, 18)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Book;
import React, { useState } from "react";
import "../styles/Utility.css";
import { Link } from "react-router-dom";

const Book = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const toggleClass = (element, toggleClassName) => {
    element.classList.toggle(toggleClassName);
  };

  const movePage = (element, page) => {
    const pages = Array.from(document.querySelectorAll(".page"));
    const index = pages.indexOf(element);

    if (page === currentPage) {
      setCurrentPage(prevPage => {
        const newPage = prevPage + 2;
        toggleClass(element, "left-side");
        if (index + 1 < pages.length) {
          toggleClass(pages[index + 1], "left-side");
        }
        return newPage;
      });
    } else if (page === currentPage - 1) {
      setCurrentPage(prevPage => {
        const newPage = prevPage - 2;
        toggleClass(element, "left-side");
        if (index - 1 >= 0) {
          toggleClass(pages[index - 1], "left-side");
        }
        return newPage;
      });
    }
  };


  return (
    <section className="BookSec pb-28 pt-14 cursor-pointer relative bg-purple-50">
      <img src="public/vector7.png" alt="v7" className="absolute"/>
      <div className="container">
        <div className="py-4">
          <div className="flex flex-wrap justify-between">
            <div className="col-sm-10 col-md-10 col-lg-4 col-xl-4 relative mx-auto h-[400px]">
              <div className="book h-100">
                <div
                  className="page cursor-pointer cover-front"
                  onClick={(e) => movePage(e.currentTarget, 1)}
                  // onTouchStart={(e) => movePage(e.currentTarget, 1)}
                >
                  <h6 className="text-white text-2xl w-3/4 mx-auto  leading-normal mt-11 font-bold">Course Content Facilities .</h6>
                  <p>Open Me</p>
                  <div className="hat">
                    <i className="fab fa-pied-piper-hat" />
                  </div>
                </div>
                <div
                  className="page cursor-pointer cover-front"
                  onClick={(e) => movePage(e.currentTarget, 2)}
                  // onTouchStart={(e) => movePage(e.currentTarget, 2)}
                />
                {/* p1 */}
                <div
                  className="page cursor-pointer text-page p-4"
                  onClick={(e) => movePage(e.currentTarget, 3)}
                  // onTouchStart={(e) => movePage(e.currentTarget, 3)}
                >
                  <p>
                    Course Content
                  </p>
                  <p>
                  Our Certified Import-Export Course is meticulously designed to provide students with comprehensive knowledge and practical skills in the global trade industry. This course covers essential topics such as international trade regulations, logistics, documentation, and customs procedures.
                  </p>
                </div>
                <div
                  className="page cursor-pointer text-page"
                  onClick={(e) => movePage(e.currentTarget, 4)}
                  // onTouchStart={(e) => movePage(e.currentTarget, 4)}
                >
                 
                </div>
                {/* p2 */}
                <div
                  className="page cursor-pointer text-page p-4"
                  onClick={(e) => movePage(e.currentTarget, 5)}
                  onTouchStart={(e) => movePage(e.currentTarget, 5)}
                >
                  <p className="text-xl">
                    {" "}
                    <font className="text-4xl font-semibold">F</font>aculties
                  </p>
                  <p>Our esteemed faculties comprise seasoned professionals and experts with extensive experience in the field of international trade and commerce. Each member of our faculty brings a wealth of knowledge and practical insights, having worked in various capacities across global markets.</p>
                </div>
                <div
                  className="page cursor-pointer text-page"
                  onClick={(e) => movePage(e.currentTarget, 6)}
                  onTouchStart={(e) => movePage(e.currentTarget, 6)}
                >
                </div>
                {/* p3 */}
                <div
                  className="page cursor-pointer text-page p-4"
                  onClick={(e) => movePage(e.currentTarget, 7)}
                  onTouchStart={(e) => movePage(e.currentTarget, 7)}
                >
                  <p className="text-xl">
                    {" "}
                    <font className="text-4xl font-semibold">E</font>xam Documents Learning
                  </p>
                  <p>Mastering the preparation and understanding of exam documents is crucial for academic success. Our focused learning module on exam documents equips students with the skills to effectively create, organize, and review essential materials. </p>
                </div>
                <div
                  className="page cursor-pointer text-page"
                  onClick={(e) => movePage(e.currentTarget, 8)}
                  onTouchStart={(e) => movePage(e.currentTarget, 8)}
                >
                </div>
                {/* p4 */}
                <div
                  className="page cursor-pointer text-page p-4"
                  onClick={(e) => movePage(e.currentTarget, 9)}
                  onTouchStart={(e) => movePage(e.currentTarget, 9)}
                >
                  <p className="text-xl">
                    {" "}
                    <font className="text-4xl font-semibold">P</font>ractical Exposure
                  </p>
                  <p>Practical exposure in business management involves hands-on experience through real-world projects, internships, and case studies, allowing students to apply theoretical knowledge in practical settings. This approach enhances their understanding of business operations, decision-making processes, and strategic thinking, preparing them for the dynamic challenges of the business world. </p>
                </div>
                <div
                  className="page cursor-pointer text-page"
                  onClick={(e) => movePage(e.currentTarget, 10)}
                  onTouchStart={(e) => movePage(e.currentTarget, 10)}
                >
                </div>
                 {/* p5 */}
                 <div
                  className="page cursor-pointer text-page p-4"
                  onClick={(e) => movePage(e.currentTarget, 11)}
                  onTouchStart={(e) => movePage(e.currentTarget, 11)}
                >
                  <p className="text-xl">
                    {" "}
                    <font className="text-4xl font-semibold">P</font>roduct Selection Exposure
                  </p>
                  <ul className="list-decimal">
                    <li className="pt-2">Market Research</li>
                    <li className="pt-2">Profitability</li>
                    <li className="pt-2">Pricing Strategy</li>
                    <li className="pt-2">Regulatory Compliance</li>
                    <li className="pt-2">Cultural and Regional Preferences</li>
                    <li className="pt-2">Risk Assessment</li>
                    <li className="pt-2">Logistics and Distribution</li>
                  </ul>
                </div>
                <div
                  className="page cursor-pointer text-page"
                  onClick={(e) => movePage(e.currentTarget, 12)}
                  onTouchStart={(e) => movePage(e.currentTarget, 12)}
                >
                </div>
                {/* p6 */}
                <div
                  className="page cursor-pointer text-page p-4"
                  onClick={(e) => movePage(e.currentTarget, 13)}
                  onTouchStart={(e) => movePage(e.currentTarget, 13)}
                >
                  <p className="text-xl">
                    {" "}
                    <font className="text-4xl font-semibold">P</font>roduct Analysis & Research
                  </p>
                  <ul className="list-decimal">
                    <li className="pt-2">Market Research</li>
                    <li className="pt-2">Product Selection</li>
                    <li className="pt-2">Supplier Analysis</li>
                    <li className="pt-2">Pricing Strategy</li>
                    <li className="pt-2">Legal Considerations</li>
                    <li className="pt-2">Risk Assessment</li>
                    <li className="pt-2"> Marketing and Sales Strategy</li>
                  </ul>
                </div>
                <div
                  className="page cursor-pointer text-page"
                  onClick={(e) => movePage(e.currentTarget, 14)}
                  onTouchStart={(e) => movePage(e.currentTarget, 14)}
                >
                </div>
                 {/* p7 */}
                 <div
                  className="page cursor-pointer text-page p-4"
                  onClick={(e) => movePage(e.currentTarget, 15)}
                  onTouchStart={(e) => movePage(e.currentTarget, 15)}
                >
                  <p className="text-xl">
                    {" "}
                    <font className="text-4xl font-semibold">M</font>arket Analysis & Research
                  </p>
                  <ul className="list-decimal">
                    <li className="pt-2">Market Trends</li>
                    <li className="pt-2">Competitor Analysis</li>
                    <li className="pt-2">Regulatory Environment</li>
                    <li className="pt-2">Consumer Preferences</li>
                    <li className="pt-2">Logistics and Supply Chain</li>
                  </ul>
                </div>
                <div
                  className="page cursor-pointer text-page"
                  onClick={(e) => movePage(e.currentTarget, 16)}
                  onTouchStart={(e) => movePage(e.currentTarget, 16)}
                >
                </div>
                {/* p8 */}
                <div
                  className="page cursor-pointer text-page p-4"
                  onClick={(e) => movePage(e.currentTarget, 17)}
                  onTouchStart={(e) => movePage(e.currentTarget, 17)}
                >
                  <p className="text-xl">
                    {" "}
                    <font className="text-4xl font-semibold">E</font>port Import Materials
                  </p>
                  <ul className="list-decimal">
                    <li className="pt-2">Market Trends</li>
                    <li className="pt-2">Competitor Analysis</li>
                    <li className="pt-2">Regulatory Environment</li>
                    <li className="pt-2">Consumer Preferences</li>
                    <li className="pt-2">Logistics and Supply Chain</li>
                  </ul>
                </div>
                <div
                  className="page cursor-pointer text-page"
                  onClick={(e) => movePage(e.currentTarget, 18)}
                  onTouchStart={(e) => movePage(e.currentTarget, 18)}
                >
                </div>
                {/* Additional pages can be added here */}
                {Array.from({ length: 60 }).map((_, index) => (
                  <div key={index} className="page cursor-pointer" />
                ))}
              </div>
            </div>
            <div className="BookPara  col-sm-10 col-md-10 col-lg-6 col-xl-6 xs:pt-16 sm:pt-16 lg:pt-0 mx-auto">
            <h2 className="font-bold sm:text-3xl lg:text-4xl xl:text-4xl">
                    Export Import Certified{" "}
                    <font className="text-mainblue">Course</font>
                  </h2>
        <p className="mx-auto pt-3 text-center text-mainblue">By Uka Tarasadiya University</p>
        <p className="pt-5 sm:text-sm lg:text-base sm:leading-normal">Our Export-Import Certified Course is designed to equip professionals with the essential knowledge and skills needed to excel in the global trade industry. This comprehensive program covers key areas such as international trade laws, global supply chain management, import-export documentation, and customs regulations. Participants will gain insights into market analysis, trade finance, and risk management, ensuring they are well-prepared to navigate the complexities of international commerce.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
