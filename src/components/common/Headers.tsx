import { Link } from "react-router-dom";
import LOGO from "/images/cacd_logo.jpg";
import { PrimaryOutline } from "./Buttons";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Drawer } from "./Drawers";
import { useState } from "react";
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      {isDrawerOpen && <Drawer handleClick={() => setIsDrawerOpen(false)} />}
      <header className="py-6 px-5 flex justify-between items-center min-h-[10vh]">
        <Link
          to="/"
          id="company-logo"
          className="hover:text-red-800 flex items-center gap-4"
        >
          <img className="w-10 h-10 object-cover" src={LOGO} alt="CACD logo" />
          <span className="text-black hover:text-red-800 font-bold">
            CACD Church of Christ
          </span>
        </Link>
        <nav>
          <ul className="flex">
            {/* <Link to="/" className="text-black hover:text-red-700">
            <li className="px-8 text-sm font-semibold">Home</li>
          </Link> */}
            <Link to="/events" className="text-black hover:text-red-700">
              <li className="px-8 text-sm font-semibold">Events</li>
            </Link>
            <Link to="/about" className="text-black hover:text-red-700">
              <li className="px-8 text-sm font-semibold">About</li>
            </Link>
            <Link to="/events" className="text-black hover:text-red-700">
              <li className="px-8 text-sm font-semibold">Find Us</li>
            </Link>
            <Link to="/gallery" className="text-black hover:text-red-700">
              <li className="px-8 text-sm font-semibold">Gallery</li>
            </Link>
            <Link to="/contact" className="text-black hover:text-red-700">
              <li className="px-8 text-sm font-semibold">Contact Us</li>
            </Link>
          </ul>
        </nav>
        <div className="flex gap-2">
          <PrimaryOutline title="Get Involved" />
          <div
            onClick={() => setIsDrawerOpen(true)}
            className="rounded-full w-12 h-12 bg-neutral-50 border-cacdRed flex items-center justify-center"
          >
            <Icon icon="uil:user" width="20" height="20" color="#b3261e" />
          </div>
        </div>
      </header>
    </>
  );
};

export const SimpleHeader = () => {
  return <div>Headers</div>;
};
