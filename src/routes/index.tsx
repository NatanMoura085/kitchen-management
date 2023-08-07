import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageLogin from "../pages/PageLogin";

const Ways = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PageLogin />} />
        <Route path="/Home" element={<PageHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Ways;
