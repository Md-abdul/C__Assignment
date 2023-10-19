import React from "react";
import { Route, Routes } from "react-router-dom";
import AppointmentBooking from "../Pages/AppointmentBooking";
import ClinicManagement from "../Pages/ClinicManagement";
import DoctorManagement from "../Pages/DoctorManagement";
import AvailabilityCheck from "../Pages/AvailabilityCheck";
import AppointmentHistory from "../Pages/AppointmentHistory";
import { Home } from "../Pages/Home";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/appointmentbooking" element={<AppointmentBooking />} />
        <Route path="/clinicmanagment" element={<ClinicManagement />} />
        <Route path="/doctormanagement" element={<DoctorManagement />} />
        <Route path="/availabilitycheck" element={<AvailabilityCheck />} />
        <Route path="/appointmenthistory" element={<AppointmentHistory />} />
      </Routes>
    </div>
  );
};
