import React from "react";
import { MDBFooter, MDBCol } from "mdb-react-ui-kit";
import {
  FaFacebookF,
  FaGit,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <MDBFooter className="text-center text-white bg-orange-700">
      <div className="flex flex-col gap-4 p-2">
        <div className="flex flex-row justify-between p-2">
          <div>
            <h5 className="text-lg flex font-bold">Join Us on Our Journey</h5>

            <p className="flex text-wrap w-96">
              We invite you to explore our product,services and experience
              MyBuddyBazzar for yourself. Whether you are here to “find the
              perfect gift” or “discover your new favorite products”, we are
              excited to have you with us. Thank you for being a part of our
              community!
            </p>
          </div>

          <div className="">
            <p className="font-bold text-lg">ABOUT</p>
            <ul className="flex flex-col">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Stories</li>
              <li>Press</li>
              <li>Corporate Information</li>
            </ul>
          </div>

          <div className="">
            <p className="font-bold text-lg">HELP</p>
            <ul className="flex flex-col">
              <li>Payment</li>
              <li>Shipping</li>
              <li>Cancellation & Return</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-lg">CUSTOMER POLICY</p>
            <ul className="flex flex-col">
              <li>Cancellation & Return</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>Term Of Use</li>
              <li>EPR Complinces</li>
              <li>Grievence Redressal</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-6 p-2 m-3">
        <button>
          <FaFacebookF />
        </button>
        <button>
          <FaTwitter />
        </button>
        <button>
          <FaGoogle />
        </button>
        <button>
          <FaInstagram />
        </button>
        <button>
          <FaLinkedinIn />
        </button>
        <button>
          <FaGit />
        </button>
      </div>
      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright
        <a className="text-dark" href="#">
          :MyBuddy.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
