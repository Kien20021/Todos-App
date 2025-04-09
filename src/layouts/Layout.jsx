import React from "react";
import { Outlet } from "react-router-dom";
import HeaderTodo from "../components/header/HeaderTodo";

const Layout = () => {
  return (
    <div>
      <HeaderTodo />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
