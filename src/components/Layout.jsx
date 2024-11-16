import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./index";
import { CartTab } from "./index";
import { purpleChair } from "../assets/img";

const Layout = () => {
  return (
    <div>
      <p>layout</p>

      <main className="w-[1200] max-w-full m-auto p-5">
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </div>
  );
};

export default Layout;
