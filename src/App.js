import React from "react";
import Home from "./components/Home";
import "./style.css";

export default function App() {
  return (
    <>
      <div>
        <nav class="d-flex justify-content-evenly  align-items-center position-fixed w-100">
          <div>
            <img
              src="../logo.svg"
              alt="logo"
              className="text-white nav-img cursor-pointer"
            />
          </div>
          <ul className="nav-list list-unstyled d-flex justify-content-evenly  align-items-center">
            <li className="cursor-pointer">
              <a>Home</a>
            </li>
            <li className="cursor-pointer">
              <a>About Us</a>
            </li>
            <li className="cursor-pointer">
              <a>Fearture</a>
            </li>
            <li className="cursor-pointer">
              <a>Product</a>
            </li>
            <li className="cursor-pointer">
              <a>Feedback</a>
            </li>
            <li className="cursor-pointer">
              <a>Pricing</a>
            </li>
          </ul>
          <div>
            <button className="btn-white">Request A Demo</button>
          </div>
        </nav>
      </div>
      <Home />
    </>
  );
}
