import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BasicCourse from '../pages/BasicCourse';


function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/basiccourse" element={<BasicCourse/>} />
    </Routes>
  );
}

export default DashboardRoutes;

