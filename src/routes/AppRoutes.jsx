import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultRoute from "./DefaultRoute";
import App from "../App";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route, handles lng redirection */}
        <Route path="/" element={<DefaultRoute />} />
        {/* Routes */}
        <Route path="/:lang/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
