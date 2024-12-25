import React from "react";
import Coursesupload from "./coursesupload";

const Payment = () => {
  return (
    // <div>
    //   {/* modal */}
    //   {/* Button trigger modal  */}
    //   <div>
    //     <button
    //       type="button"
    //       className="btn btn-primary"
    //       data-bs-toggle="modal"
    //       data-bs-target="#staticBackdrop"
    //     >
    //       Submit
    //     </button>
    //    {/* Modal */} 
    //     <div
    //       className="modal fade"
    //       id="staticBackdrop"
    //       data-bs-backdrop="static"
    //       data-bs-keyboard="false"
    //       tabIndex={-1}
    //       aria-labelledby="staticBackdropLabel"
    //       aria-hidden="true"
    //     >
    //       <div className="modal-dialog modal-dialog-scrollable">
    //         <div className="modal-content">
    //           <div className="modal-header">
    //             <h5 className="modal-title" id="staticBackdropLabel">
    //                 All PDFs are Available below :-
    //             </h5>
    //             <button
    //               type="button"
    //               className="btn-close"
    //               data-bs-dismiss="modal"
    //               aria-label="Close"
    //             />
    //           </div>
    //           <div className="modal-body">
    //           <Coursesupload/>
    //           </div>
    //           <div className="modal-footer">
    //             <button
    //               type="button"
    //               className="btn btn-secondary"
    //               data-bs-dismiss="modal"
    //             >
    //               Close
    //             </button>
    //             <button type="button" className="btn btn-primary">
    //               Understood
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <Coursesupload/>
    </div>
  );
};

export default Payment;
