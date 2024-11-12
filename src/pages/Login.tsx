import { Link } from "react-router-dom";
import {
  PrimaryStateButton,
  SecondaryButton,
} from "../components/common/Buttons";
import LOGO from "/images/cacd_logo.jpg";
export const Login = () => {
  return (
    <main className="w-screen h-screen flex">
      <div className=" text-center grow  w-full h-full flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-neutral-400 font-bold uppercase">
            WELCOME TO
          </span>
          <div className="flex gap-2 items-center">
            <img
              className="w-12 h-12 object-cover"
              src={LOGO}
              alt="CACD logo"
            />
            <span className="!text-5xl font-bold text-cacdRed">CACD</span>
          </div>
          <p className="my-4 w-[80%] text-center text-neutral-400">
            Login to get in the moment updates on the events and fellowship
          </p>
        </div>
        <div>
          <div className="flex flex-col grow gap-4">
            <div>
              <label className="grow text-gray-700 font-medium mb-1">
                Email/Username
              </label>
              <input
                type="text"
                name="firstName"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="grow text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="text"
                name="firstName"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <PrimaryStateButton title="Sign in" className="w-100" />
            <SecondaryButton
              to="/"
              title="Continue as a Guest"
              className="w-full"
            />
            <p>
              Don't have an account? <Link to="">Sign up Now</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="grow text-white w-full h-full gap-4 bg-cacdRed bg-login-image flex flex-col items-center justify-center">
        <span className="!text-6xl font-bold">CACD</span>
        <span>CHURCH OF CHRIST</span>
        <p className="w-[60%] text-center">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu
          nulla sed nisl gravida efficitur id ut turpis. Praesent{" "}
        </p>
      </div>
    </main>
  );
};
