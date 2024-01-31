import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Desktop = React.lazy(() => import("pages/Desktop"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Desktop />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
