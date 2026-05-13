import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import AboutVSS from "../pages/AboutVSS";
import FacilitiesActivities from "../pages/FacilitiesActivities";
import EarnLearn from "../pages/EarnLearn";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Donate from "../pages/Donate";
import Resources from "../pages/Resources";
import SupportUs from "../pages/Supportus";
import DigitalInitiatives from "../pages/DigitalInitiatives";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vssf/digital-initiatives" element={<DigitalInitiatives />} />
          <Route path="/vss-pune" element={<Navigate to="/vss-pune/about" replace />} />
          <Route path="/vss-pune/about" element={<AboutVSS />} />
          <Route path="/vss-pune/facilities" element={<FacilitiesActivities />} />
          <Route path="/vss-pune/earn-learn" element={<EarnLearn />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/support" element={<SupportUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}