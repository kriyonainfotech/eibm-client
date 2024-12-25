import React, { useEffect, useState } from 'react'
import TopHedaer from '../../components/admincomponwents/TopHedaer'
import FooterCopyright from '../../components/admincomponwents/FooterCopyright'
import TopBtn from "../../components/admincomponwents/Topbtn";
import axios from "axios"
const Dashboard = () => {
    const [userCount, setUserCount] = useState(0);
    const [admissionCount, setadmissionCount] = useState(0);
    const [Course, setCourse] = useState(0);
    const apiurl = import.meta.env.VITE_API_URL
    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const res = await axios.get(`${apiurl}/auth/admin/usercount`, { withCredentials: true });
                setUserCount(res.data.count);
            } catch (error) {
                console.error('Error fetching user count:', error);
            }
        };

        fetchUserCount();
    }, []);
    useEffect(() => {
        const fetchAdmissionCount = async () => {
            try {
                const res = await axios.get(`${apiurl}/auth/admin/admissioncount`, { withCredentials: true });
                setadmissionCount(res.data.count);
            } catch (error) {
                console.error('Error fetching user count:', error);
            }
        };

        fetchAdmissionCount();
    }, []);
    useEffect(() => {
        const fetchcourseCount = async () => {
            try {
                const res = await axios.get(`${apiurl}/auth/admin/coursecount`, { withCredentials: true });
                setCourse(res.data.count);
            } catch (error) {
                console.error('Error fetching user count:', error);
            }
        };

        fetchcourseCount();
    }, []);
  return (
      <div className='background_color overflow-auto h-screen'>
      <TopHedaer></TopHedaer>
      <section className='py-28'>
        <div className="container">
          <div className="flex flex-wrap">
            <div className="col-4 px-3">
              <div className='bg-green-600 p-5 shadow-lg rounded-lg h-60'>
                  <h2 className='text-white'>Total Users</h2>
                  <h2 className='text-white'>{userCount}</h2>
              </div>
            </div>
            <div className="col-4 px-3">
              <div className='bg-yellow-500 p-5 shadow-lg rounded-lg h-60'>
                  <h2 className='text-white'>Total Admissions</h2>
                  <h2 className='text-white'>{admissionCount}</h2>
              </div>
            </div>
            <div className="col-4 px-3">
              <div className='bg-red-600 p-5 shadow-lg rounded-lg h-60'>
                  <h2 className='text-white'>Total Course Purchased</h2>
                  <h2 className='text-white'>{Course}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TopBtn></TopBtn>
      <FooterCopyright></FooterCopyright>
    </div>
  )
}

export default Dashboard
