import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultRoute from "./DefaultRoute";
import App from "../App";

/* import { lazy, Suspense } from "react";
import PlaceLoader from "../components/PlaceLoader/PlaceLoader";

const DefaultRoute = lazy(() => import("./DefaultRoute"));
const App = lazy(() => import("../App")); */

const AppRoutes = () => {
  return (
    <BrowserRouter>
      {/*   <Suspense fallback={<PlaceLoader />}> */}
      <Routes>
        {/* Default route, handles lng redirection */}
        <Route path="/" element={<DefaultRoute />} />
        {/* Routes */}
        <Route path="/:lang/*" element={<App />} />
      </Routes>
      {/*   </Suspense> */}
    </BrowserRouter>
  );
};

export default AppRoutes;
