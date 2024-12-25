import React, { useEffect, useState } from "react"; 
import TopHeader from "../../components/admincomponwents/TopHedaer";
import FooterCopyright from "../../components/admincomponwents/FooterCopyright";
import { IoIosSearch } from "react-icons/io";
import "../../styles/Style.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const ManageContacts = () => {
  const [allContacts, setAllContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const apiurl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get(`${apiurl}/auth/showcontact`, {
          withCredentials: true,
        });

        if (Array.isArray(res.data.data)) {
          setAllContacts(res.data.data);
        } else {
          toast.error("Invalid response format.", {
            position: "top-right",
            autoClose: 5000,
          });
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch contacts.", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    };

    fetchContacts();
  }, [apiurl]);

  const filteredContacts = allContacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (contact.phone && contact.phone.includes(searchTerm))
  );

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredContacts.slice(firstIndex, lastIndex);
  const npage =
    filteredContacts.length > 0
      ? Math.ceil(filteredContacts.length / recordsPerPage)
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

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await axios.post(
        `${apiurl}/auth/toggle-status`,
        { id, newStatus: newStatus },
        { withCredentials: true }
      );
      const updatedContact = response.data;

      // Update the local state with the updated contact
      setAllContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact._id === updatedContact._id ? updatedContact : contact
        )
      );

      toast.success(`Contact status updated to ${updatedContact.status}.`, {
        position: "top-right",
        autoClose: 5000,
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to update status.", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  const handlePaymentStatusChange = async (id, newPaymentStatus) => {
    try {
      const response = await axios.post(
        `${apiurl}/auth/toggle-payment-status`,
        { id, newPaymentStatus },
        { withCredentials: true }
      );
      const updatedContact = response.data;

      // Update the local state with the updated contact
      setAllContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact._id === updatedContact._id ? updatedContact : contact
        )
      );

      toast.success(`Payment status updated to ${updatedContact.paymentStatus}.`, {
        position: "top-right",
        autoClose: 5000,
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to update payment status.", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="background_color overflow-auto h-screen">
      <ToastContainer />
      <TopHeader />
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
                    placeholder="Search Contacts..."
                    className="outline-none w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Contacts Table */}
              <table className="table-auto w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-4 py-2">Sr</th>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Email</th>
                    <th className="border px-4 py-2">Phone Number</th>
                    <th className="border px-4 py-2">Purpose</th>
                    <th className="border px-4 py-2">Status</th>
                    <th className="border px-4 py-2">Payment Status</th> {/* New Column */}
                  </tr>
                </thead>
                <tbody>
                  {records.map((val, index) => (
                    <tr key={val._id} className="hover:bg-gray-100">
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
                      <td className="border px-4 py-2">{val.purpose}</td>

                      {/* Status Dropdown */}
                      <td className="border px-4 py-2 text-center">
                        <select
                          value={val.status}
                          onChange={(e) =>
                            handleStatusChange(val._id, e.target.value)
                          }
                          className="border p-1 rounded-md"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Call Not Receive">Call Not Receive</option>
                          <option value="Not Confirmed">Not Confirmed</option>
                          <option value="Delay">Delay</option>
                          <option value="Converted">Converted</option>
                          <option value="Cancel">Cancel</option>
                        </select>
                      </td>

                      {/* Payment Status Dropdown */}
                      {val.status === "Converted" && (
  <td className="border px-4 py-2 text-center">
    <select
      value={val.paymentStatus}
      onChange={(e) => handlePaymentStatusChange(val._id, e.target.value)}
      className="border p-1 rounded-md"
    >
      <option value="Pending">Pending</option>
      <option value="Complete">Complete</option>
    </select>
  </td>
)}

                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="flex justify-between mt-4">
                <button onClick={prePage} disabled={currentPage === 1}>
                  Prev
                </button>
                <div>
                  {numbers.map((num) => (
                    <button key={num} onClick={() => changeCPage(num)}>
                      {num}
                    </button>
                  ))}
                </div>
                <button onClick={nextPage} disabled={currentPage === npage}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterCopyright />
    </div>
  );
};

export default ManageContacts;
