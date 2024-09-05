import React from "react";
import iphone15 from "../../assets/iphone15.png";

const HomeCards = ({ img, title }) => {
  return (
    <div className="d-flex flex-wrap justify-content-evenly   align-items-center p-4 m-4">
      <img src={iphone15} alt="..." className="img-fluid" />
      <ol className="list">
        <h2>Mobile</h2>
        <li>Phone comes with good Camera</li>
        <li>Phone comes with best processor</li>
        <li>Phone comes with big battery and superfast charging </li>
        <li>Phone comes with 2K OLED display</li>
        <li>All Rounder phones</li>
      </ol>
      <ol className="list">
        <h2>Tablets</h2>
        <li>Tablet comes with big screen size</li>
        <li>Tablet comes with best processor</li>
        <li>Tablet comes with big battery and superfast charging </li>
        <li>Tablet comes with 2K OLED display</li>
        <li>Connect with keyboard</li>
      </ol>
      <ol className="list">
        <h2>Android Watch</h2>
        <li>Watch comes with good styling</li>
        <li>Watch comes with best processor</li>
        <li>Watch comes with big battery </li>
        <li>Watch comes with AMLOAD display</li>
        <li>Rich of Features(sleep monitoring,stopwatch,heart rate monitor)</li>
      </ol>
      <ol className="list">
        <h2>Laptop</h2>
        <li>Laptop comes with good styling with metal finish</li>
        <li>
          Laptop comes with best processor i9 12<sup>th</sup> Generation{" "}
        </li>
        <li>Laptop comes with big battery </li>
        <li>Laptop comes with 4K AMLOAD display</li>
        <li>Laptop comes with 8GB Navida Graphic Card</li>
      </ol>
    </div>
  );
};

export default HomeCards;
