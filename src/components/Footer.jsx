import React from "react";
import { NavLink } from "react-router";
import { FaFacebook } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { SiYoutube } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-4 mb-4  p-4 pt-8 bg-white">
      <div className="flex justify-center items-center gap-4">
        <NavLink className="flex justify-center items-center gap-2" to="/">
          <div>
            <img src="/logo.png" alt="" />
          </div>
          <div className="text-3xl font-extrabold">Phudu</div>
        </NavLink>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current after:rounded-full"
                : ""
            }
            end
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/myBookings"
            className={({ isActive }) =>
              isActive
                ? "relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current after:rounded-full"
                : ""
            }
            end
          >
            My-Bookings
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current after:rounded-full"
                : ""
            }
            end
          >
            Blogs
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/contactUs"
            className={({ isActive }) =>
              isActive
                ? "relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current after:rounded-full"
                : ""
            }
            end
          >
            Contact Us
          </NavLink>
        </div>
      </div>
      <div className="border-t-2 border-dashed border-gray-300 w-[70%] mx-auto my-8"></div>
      <div className="flex justify-center items-center gap-4">
        <div>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook
              className="text-[#1877F2] hover:opacity-80 transition"
              size={20}
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <RiInstagramFill
              className="text-[#E4405F] hover:opacity-80 transition"
              size={20}
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <BsLinkedin
              className="text-[#0A66C2] hover:opacity-80 transition"
              size={20}
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <SiYoutube
              className="text-[#FF0000] hover:opacity-80 transition"
              size={20}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
