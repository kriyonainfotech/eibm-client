import React, { useEffect, useState } from "react";
import TopHedaer from "../../components/admincomponwents/TopHedaer";
import FooterCopyright from "../../components/admincomponwents/FooterCopyright";
import { IoIosSearch } from "react-icons/io";
import "../../styles/Style.css";
import TopBtn from "../../components/admincomponwents/Topbtn";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageUsers = () => {
  const [Alluser, setAllUser] = useState([]);
  const [UserAdmission, setUserAdmission] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [purchaseStatus, setPurchaseStatus] = useState({});
  const [submittedAdmission, setSubmittedAdmission] = useState({});
  const [openAdmissionId, setOpenAdmissionId] = useState(null); // New state
  const [updatingStatusId, setUpdatingStatusId] = useState(null); // State to track which user's status is being updated
  const recordsPerPage = 10;
  const apiurl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${apiurl}/auth/admin/getuser`, {
          withCredentials: true,
        });
        const { usersFromUserModel, usersFromGoogleModel } = res.data;

        // Combine the user data from both models
        const combinedUsers = [
          ...usersFromUserModel.map((user) => ({
            ...user,
            source: "UserModel",
          })),
          ...usersFromGoogleModel.map((user) => ({
            ...user,
            source: "GoogleModel",
          })),
        ];

        setAllUser(combinedUsers);
        const admissionStatus = {};
        combinedUsers.forEach((user) => {
          admissionStatus[user._id] = user.AdmissionId || false; // Assuming you have this data
        });
        setSubmittedAdmission(admissionStatus);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch users.", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    };

    fetchUsers();
  }, [apiurl]);
  

  const handleAdmission = async (id) => {
    if (openAdmissionId === id) {
        // If the same user's admission is already open, close it
        setOpenAdmissionId(null);
        return;
    }

    setOpenAdmissionId(id); // Open the new user's admission details

    // Fetch admission details only if not already fetched
    if (!UserAdmission[id]) {
        try {
            let res = await axios.post(
                `${apiurl}/auth/admin/admissionDetais`,
                { id },
                { withCredentials: true }
            );

            // Check if res.data is an array and retrieve the first item if it exists
            const admissionDetails = Array.isArray(res.data) && res.data.length > 0 ? res.data[0] : null;

            if (admissionDetails) {
                setUserAdmission((prevState) => ({
                    ...prevState,
                    [id]: admissionDetails,
                }));
                console.log("Admission Details:", admissionDetails);
            } else {
                throw new Error("Admission details not found.");
            }

        } catch (error) {
            setUserAdmission((prevState) => ({
                ...prevState,
                [id]: error.response?.data?.message || "Failed to fetch admission details.",
            }));
            console.log(error);
            toast.error(
                error.response?.data?.message || "Failed to fetch admission details.",
                {
                    position: "top-right",
                    autoClose: 5000,
                }
            );
        }
    }
};


  const toggleUserStatus = async (id) => {
    try {
      setUpdatingStatusId(id); // Indicate that this user's status is being updated

      const res = await axios.post(
        `${apiurl}/auth/admin/toggleUserStatus`,
        { userId: id },
        { withCredentials: true }
      );

      // Update the local state to reflect the change
      setAllUser((prevUsers) =>
        prevUsers.map((user) =>
          user._id === id ? { ...user, status: res.data.status } : user
        )
      );

      // Show a success toast notification
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error toggling user status:", error);
      toast.error(
        error.response?.data?.message || "Failed to toggle user status.",
        {
          position: "top-right",
          autoClose: 5000,
        }
      );
    } finally {
      setUpdatingStatusId(null); // Reset the updating state
    }
  };

  const handleSingleUpdate = async (id, newStatus) => {
    if (newStatus === "Select Status") {
      toast.warn("Please select a valid status.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    try {
      // Make an API call to update the purchase status of the single user
      const res = await axios.post(
        `${apiurl}/auth/admin/updateSingleUserStatus`,
        {
          userId: id,
          purchaseStatus: newStatus,
        },
        { withCredentials: true }
      );

      // Update the local state to reflect the change
      setAllUser((prevUsers) =>
        prevUsers.map((user) =>
          user._id === id ? { ...user, purchaseStatus: res.data.purchaseStatus } : user
        )
      );

      // Update the purchaseStatus state if needed
      setPurchaseStatus((prevStatus) => ({
        ...prevStatus,
        [id]: res.data.purchaseStatus,
      }));

      // Show a success toast notification
      toast.success("Purchase status updated successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error updating purchase status:", error);
      toast.error(
        error.response?.data?.message || "Failed to update purchase status.",
        {
          position: "top-right",
          autoClose: 5000,
        }
      );
    }
  };

  const filteredUsers = Alluser.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (user.phone && user.phone.includes(searchTerm)) // Check if phone exists before using includes
  );

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredUsers.slice(firstIndex, lastIndex);

  const npage =
    filteredUsers.length > 0
      ? Math.ceil(filteredUsers.length / recordsPerPage)
      : 1;
  const numbers =
    npage > 0 ? [...Array(npage).keys()].map((num) => num + 1) : [];

  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <div className="background_color overflow-auto h-screen">
      <ToastContainer />
      <TopHedaer />
      <section className="product_create pt-10 pb-20">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="col-12 bg-white p-3 rounded-md">
              <div className="flex items-center justify-between mb-4">
                {/* Search Bar */}
                <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 w-1/2">
                  <IoIosSearch className="text-slate-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search List..."
                    className="outline-none w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Users Table */}
              <table className="table-auto w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-4 py-2">Sr</th>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Email</th>
                    <th className="border px-4 py-2">Phone Number</th>
                    <th className="border px-4 py-2">Action</th>
                    <th className="border px-4 py-2">Course Authority</th>
                    <th className="border px-4 py-2">Purchase Status</th>
                    <th className="border px-4 py-2">Select Purchase Status</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((val, index) => (
                    <React.Fragment key={val._id}>
                      <tr className="hover:bg-gray-100">
                        {/* Serial Number */}
                        <td className="border px-4 py-2 text-center">
                          {firstIndex + index + 1}
                        </td>

                        {/* Name */}
                        <td className="border px-4 py-2">{val.name}</td>

                        {/* Email */}
                        <td className="border px-4 py-2">{val.email}</td>

                        {/* Phone Number */}
                        <td className="border px-4 py-2">{val.phone}</td>

                        {/* Action Button */}
                        <td className="border px-4 py-2 text-center">
                        <button
                          className={`${
                            submittedAdmission[val._id]
                              ? "bg-green-600"
                              : "bg-red-600"
                          } text-white px-3 py-1 rounded-md`}
                          onClick={() =>
                            handleAdmission(
                              val.source === "GoogleModel" ? val.uid : val._id
                            )
                          }
                        >
                          {submittedAdmission[val._id]
                            ? "View Admission"
                            : "Not Submitted"}
                        </button>
                      </td>
                        {/* Course Authority */}
                        <td className="border px-4 py-2 text-center">
                          <button onClick={() => toggleUserStatus(val._id)}
                            className={`${
                              val.status === "Pending"
                                ? "bg-red-600"
                                : "bg-[#6366f1]"
                            } text-white px-3 py-1 rounded-md`}
                          >
                            {val.status}
                          </button>
                        </td>

                        {/* Purchase Status Display */}
                        <td className="border px-4 py-2 text-center">
                          {val.purchaseStatus}
                        </td>

                        {/* Purchase Status Select Dropdown */}
                        <td className="border px-4 py-2 text-center">
                          <select
                            className="border rounded-md p-2"
                            value={purchaseStatus[val._id] || val.purchaseStatus || "Select Status"}
                            onChange={(e) => {
                              const newStatus = e.target.value;
                              // Update the local purchaseStatus state
                              setPurchaseStatus((prevStatus) => ({
                                ...prevStatus,
                                [val._id]: newStatus,
                              }));
                              // Call the individual update function
                              handleSingleUpdate(val._id, newStatus);
                            }}
                          >
                            <option value="Select Status" disabled>
                              Select Status
                            </option>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                            <option value="Not Purchased">Not Purchased</option>
                          </select>
                        </td>

                        {/* Toggle Status Button */}
                      
                      </tr>

                      {/* Admission Details Row */}
                      {openAdmissionId === (val.source === "GoogleModel" ? val.uid : val._id) &&
                        UserAdmission[val.source === "GoogleModel" ? val.uid : val._id] &&
                        typeof UserAdmission[val.source === "GoogleModel" ? val.uid : val._id] === "object" && (
                          <tr>
                            <td colSpan="9" className="border px-4 py-2">
                              <div className="p-4 bg-gray-100 rounded-md relative">
                                {/* Close Button */}
                                <button
                                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                  onClick={() => setOpenAdmissionId(null)}
                                  aria-label="Close Admission Details"
                                >
                                  &times;
                                </button>
                                <h5 className="font-bold mb-2">Admission Details:</h5>
                                <p>
                                  <strong>Name:</strong>{" "}
                                  {UserAdmission[
                                    val.source === "GoogleModel" ? val.uid : val._id
                                  ].name || "N/A"}
                                </p>
                                <p>
                                  <strong>Email:</strong>{" "}
                                  {UserAdmission[
                                    val.source === "GoogleModel" ? val.uid : val._id
                                  ].email || "N/A"}
                                </p>
                                <p>
                                  <strong>Phone:</strong>{" "}
                                  {UserAdmission[
                                    val.source === "GoogleModel" ? val.uid : val._id
                                  ].phone || "N/A"}
                                </p>
                                <p>
                                  <strong>Alt Number:</strong>{" "}
                                  {UserAdmission[
                                    val.source === "GoogleModel" ? val.uid : val._id
                                  ].altphone || "N/A"}
                                </p>
                                <p>
                                  <strong>City:</strong>{" "}
                                  {UserAdmission[
                                    val.source === "GoogleModel" ? val.uid : val._id
                                  ].city || "N/A"}
                                </p>
                                <p>
                                  <strong>Address:</strong>{" "}
                                  {UserAdmission[
                                    val.source === "GoogleModel" ? val.uid : val._id
                                  ].address || "N/A"}
                                </p>
                                <p>
                                  <strong>Permanet Address:</strong>{" "}
                                  {UserAdmission[
                                    val.source === "GoogleModel" ? val.uid : val._id
                                  ].permanetaddress || "N/A"}
                                </p>
                                <p>
                                  <strong>Batch:</strong>{" "}
                                  {UserAdmission[
                                    val.source === "GoogleModel" ? val.uid : val._id
                                  ].batch || "N/A"}
                                </p>
                                <p>
                                  <strong>Branch:</strong>{" "}
                                  {UserAdmission[
                                    val.source === "GoogleModel" ? val.uid : val._id
                                  ].branch || "N/A"}
                                </p>
                                <p>
                                  <strong>Occupation:</strong>{" "}
                                  {UserAdmission[
                                    val.source === "GoogleModel" ? val.uid : val._id
                                  ].occupation || "N/A"}
                                </p>
                                <p>
                                  <strong>Qualification:</strong>{" "}
                                  {UserAdmission[
                                    val.source === "GoogleModel" ? val.uid : val._id
                                  ].qualification || "N/A"}
                                </p>
                              </div>
                            </td>
                          </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <nav>
                <ul className="pagination pt-6 flex justify-end space-x-2">
                  <li>
                    <button
                      className="px-3 py-1 bg-gray-200 rounded-md"
                      onClick={prePage}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                  </li>
                  {numbers.map((n) => (
                    <li key={n}>
                      <button
                        className={`px-3 py-1 rounded-md ${
                          currentPage === n
                            ? "bg-[#6366f1] text-white"
                            : "bg-gray-200"
                        }`}
                        onClick={() => changeCPage(n)}
                      >
                        {n}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      className="px-3 py-1 bg-gray-200 rounded-md"
                      onClick={nextPage}
                      disabled={currentPage === npage}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <TopBtn />
      <FooterCopyright />
    </div>
  );
};

export default ManageUsers;
