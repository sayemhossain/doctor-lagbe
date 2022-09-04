import React from "react";
import { Link } from "react-router-dom";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <div className="pt-10">
      <footer
        className="footer py-10 flex justify-between px-10 md:px-20"
        style={{ background: `url(${footer})`, backgroundSize: "cover" }}
      >
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Teeth Orthodontics</a>
          <a className="link link-hover">Cosmetic Dentistry</a>
          <a className="link link-hover">Teeth Cleaning</a>
          <a className="link link-hover">Cavity Protection</a>
        </div>
        <div>
          <span className="footer-title">Links</span>
          <Link to="/contactus" className="link link-hover">
            Contact Us
          </Link>
          <Link to="/appointment" className="link link-hover">
            Appointment
          </Link>
          <Link to="/login" className="link link-hover">
            Login
          </Link>
          <Link to="/signup" className="link link-hover">
            Sign Up
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <hr />
      <div className="text-center py-5">
        <p>Copyright © 2022 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
