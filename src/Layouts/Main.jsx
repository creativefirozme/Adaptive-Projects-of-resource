import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Main = () => {

  const location = useLocation();

  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');

  return (
    <div draggable="false max-w-screen-xl mx-auto">
      {noHeaderFooter || <NavBar />}
      <Outlet />
      {/* {noHeaderFooter || <Footer />} */}
    </div>
  );
};

export default Main;
