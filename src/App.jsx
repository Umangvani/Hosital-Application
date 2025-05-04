import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/Sign/SignUp";
import Login from "./components/Sign/Login";
import DashboardLayout from "./components/Doctor Dashboard/DashboardLayout";
import PatientDashboardLayout from "./components/Patient Dashboard/PatientDashboardLayout";
import AboutPage from "./components/About page/AboutPage";
import ContactPage from "./components/Contact Page/ContactPage";
import TelehealthPage from "./components/Services Pages/TelehealthPage";
import EmergencyAmbulancePage from "./components/Services Pages/EmergencyAmbulancePage";
import AppointmentBooking from "./components/Services Pages/AppointmentBooking";


function App() {
  const location = useLocation();

  // ✅ Actual route paths where header/footer should be hidden
  const noLayoutRoutes = ["/doctor", "/patient"];

  // Check if the current path matches one that should hide layout
  const isLayoutHidden = noLayoutRoutes.includes(location.pathname.toLowerCase());

  return (
    <>
      {!isLayoutHidden && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/consultation" element={<TelehealthPage />} />
        <Route path="/EmergencyAmbulance" element={<EmergencyAmbulancePage />} />        
        <Route path="/appointment" element={<AppointmentBooking/>} />        

        {/* 💡 These are layout-based dashboards */}
        <Route path="/doctor" element={<DashboardLayout />} />
        <Route path="/patient" element={<PatientDashboardLayout />} />
      </Routes>

      {!isLayoutHidden && <Footer />}
    </>
  );
}

export default App;
