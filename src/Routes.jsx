import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import  'react-toastify/dist/ReactToastify.css';
 
const RegisterInstitute = React.lazy(() => import("pages/RegisterInstitute"));
const IssuedCertificate = React.lazy(() => import("pages/IssuedCertificate"));
const IssueCertificate = React.lazy(() => import("pages/IssueCertificate"));
const Certificate = React.lazy(() => import("pages/Certificate"));
const VerifyCertificate = React.lazy(() => import("pages/VerifyCertificate"));
const Landingpage = React.lazy(() => import("pages/Landingpage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/verifycertificate" element={<VerifyCertificate />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/issuecertificate" element={<IssueCertificate />} />
          <Route path="/issuedcertificate" element={<IssuedCertificate />} />
          <Route path="/registerinstitute" element={<RegisterInstitute />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
