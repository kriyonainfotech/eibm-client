import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopHeader from './components/TopHeader';
import Home from './pages/Home';
import FastClick from 'fastclick';
import { useEffect } from 'react';
import Team from "./pages/Team";
import Companies from './pages/Companies';
import Contact from './pages/Contact';
import Studentcorner from './pages/Studentcorner';
import Courses from './pages/Courses';
import Signin from './pages/Signin';
import Registration from './pages/Registration';
import Forgetpsw from './pages/Forgetpsw';
import Resetpsw from './pages/Resetpsw';
import Success from './pages/Success';
import Coursesupload from './pages/coursesupload';
// import HomeLogin from './pages/homeIsLogin';
import BasicCourse from './pages/BasicCourse';
import Payment from './pages/Payment';
// import DashboardRoutes from './components/coursenested';
import Profile from './pages/Profile';
import ManageUsers from './pages/adminpages/manageusers';
import Dashboard from './pages/adminpages/dashboard';
import PrivateRoute from './pages/privateRoute';
import Headers from './components/Header';
import Blog from './pages/blog';
import Addblog from './pages/adminpages/addblog';
import Showblog from './pages/adminpages/showblog';
import EditBlog from './pages/adminpages/editblog';
import ManageContacts from './pages/adminpages/showcontact';

const App = () => {
  useEffect(() => {
    // Detect if the device is an iPhone
    const isIPhone = /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    // Apply FastClick if the device is an iPhone
    if (isIPhone) {
      FastClick.attach(document.body);
    }
  }, []);
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/companies' element={<Companies />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/studentcorner' element={<Studentcorner />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/basic_course' element={<BasicCourse />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/forgetpsw' element={<Forgetpsw />} />
          <Route path='/resetpsw' element={<Resetpsw />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/headers' element={<Headers/>} />
          <Route path='/success' element={<Success />} />
          <Route path='/courseprovide' element={<Coursesupload />} />
          <Route path='/accesscourse' element={<Payment />} />
          <Route path='/admin/manageusers' element={
            <PrivateRoute>
                <ManageUsers/>
            </PrivateRoute>
            } />
          <Route path='/admin/dashboard' element={
            <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
          
          } />
          <Route path='/admin/addblog' element={
            <PrivateRoute>
                <Addblog/>
            </PrivateRoute>
            } />
            <Route path='/admin/showblog' element={
            <PrivateRoute>
                <Showblog/>
            </PrivateRoute>
            } />
            <Route path="/admin/editblog/:id" element={
            <PrivateRoute>
                <EditBlog />
            </PrivateRoute>
            } />
             <Route path="/admin/showcontact" element={
            <PrivateRoute>
                <ManageContacts/>
            </PrivateRoute>
            } />

          { /* <Route path='/homei' element={<HomeLogin />} /> */ }
        </Routes>
      </BrowserRouter>
  );
};

export default App;
