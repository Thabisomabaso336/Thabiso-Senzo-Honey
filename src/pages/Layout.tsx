import React from "react";
import  {BrowserRouter, Link, Outlet, Routes, Route } from "react-router-dom";
export default function layout() {
  return (
    <div>
      <nav>
        <a>
          <Link to="/">HomePage</Link>
          <Link to="AboutUs">AboutUs</Link>
          <Link to="Product">Product</Link>
          <Link to="Layout">Layout</Link>
          {/* <Link to="Template">Template</Link> */}

        </a>
      </nav>
      <Outlet />
      <footer>This is my Footer</footer>
    </div>
  );
}
