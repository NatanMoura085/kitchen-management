import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageLogin from "../pages/PageLogin";
import PageReset from "../pages/PageReset";
import NotFound from "../pages/NotFound";
import useAuth from "../hooks/useAuth";
import PageLayout from "../layouts/PageLayout";
import AuthLayout from "../layouts/AuthLayout";

const Ways = () => {
  const { user, isLoading, login, logout } = useAuth();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<PageLayout />}>
            <Route path="/home" index element={<PageHome />} />
          </Route>
        ) : (
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<PageLogin onLogin={login} />} />
            <Route path="/reset" element={<PageReset />} />
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Ways;
