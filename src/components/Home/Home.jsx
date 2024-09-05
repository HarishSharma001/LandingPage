import React from "react";
import Navbars from "../Home/Navbars.jsx";
import HomeCards from "./HomeCards.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <>
      <Navbars />
      <div>
        <h1 className="h2 text-center p-3 bg-info  text-white">
          What are you looking to buy
        </h1>
        <HomeCards />

        <section className="services">
          <div className="container">
            <h2>Our Services</h2>
            <div className="service">
              <h3>New Gadgets</h3>
              <p>Fast and reliable to provide information about devices</p>
            </div>
            <div className="service">
              <h3>Compare with another device</h3>
              <p>Compare device and know their cons and props</p>
            </div>
            <div className="service">
              <h3>Lauch Event</h3>
              <p>Provides information regarding new devices lauch event</p>
            </div>
          </div>
        </section>

        <section className="offer">
          <div className="container">
            <h2>Special Offer</h2>
            <p>Get 5% OFF Use code: FIRST20</p>
            <a href="#offer" className="btn">
              Claim Offer
            </a>
          </div>
        </section>

        <section className="testimonials">
          <div className="container">
            <h2>What Our Customers Say</h2>
            <div className="testimonial">
              <p>"Excellent service and quick turnaround!"</p>
              <p>- Jane Doe</p>
            </div>
            <div className="testimonial">
              <p>"Great experience. My phone looks brand new!"</p>
              <p>- John Smith</p>
            </div>
            <div className="testimonial">
              <p>"Friendly staff and professional service."</p>
              <p>- Emily Johnson</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <p> 2024 MobileWeb &copy;Copyright All rights reserved.</p>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </footer>
        <Footer />
      </div>
    </>
  );
};

export default Home;
