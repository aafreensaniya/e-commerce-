import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Categories } from "./categories/Categories";
import { ContactPage } from "./categories/ContactPage";
import { Services } from "./categories/Services";
import { HomePage } from "./HomePage";
import { LogOut } from "./LoginAndSignUp/LogOut";
import { Nav } from "./Nav";

export const LandingPage = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/Logout" element={<LogOut />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
