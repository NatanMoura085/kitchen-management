import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageLogin from "../pages/PageLogin";
import useCheckLogin  from "../hooks/useCheckLogin.ts"
import PageLayout from "../layouts/PageLayout/index.tsx";
import AuthLayout from "../layouts/AuthLayout/index.tsx";
import NotFound from "../pages/NotFound/index.tsx";
const Ways = () => {
  const isLogged = useCheckLogin();
  return (
    <BrowserRouter>
      <Routes>
        {isLogged ? (
          <Route path="/" element={<PageLayout />}>
            <Route path="/home" index element={<PageHome />} />

          </Route>
        ) : (
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<PageLogin />} />
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Ways;
