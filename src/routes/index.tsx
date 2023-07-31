import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/PageHome";

const Ways = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PageHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Ways;
