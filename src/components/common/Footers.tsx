import { PrimaryButton } from "./Buttons";
import LOGO from "/images/cacd_logo.jpg"
export const Footer = () => {
  return (
    <footer className="font-sans h-[60vh] text-white bg-[#131313] w-[100vw] py-6 px-[6rem] flex flex-col">
      <div className="flex grow flex-1 gap-16 justify-between items-center">
        <div className="flex-[1.9] ">
          <h2 className="font-sans mb-4 text-2xl font-bold">Header</h2>
          <p className="w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare
            cursus sed nunc eget dictum Sed ornare cursus sed nunc eget dictumd
            nunc eget dictum Sed ornare cursus sed nunc eget dictum{" "}
          </p>
        </div>
        <div className="flex-1">
         <h2 className="font-sans mb-4 text-2xl font-bold">Header</h2>
          <ul>
            <li>Button</li>
            <li>Button</li>
            <li>Button</li>
            <li>Button</li>
          </ul>
        </div>
        <div className="flex-1">
         <h2 className="font-sans mb-4 text-2xl font-bold">Header</h2>
          <ul>
            <li>Button</li>
            <li>Button</li>
            <li>Button</li>
            <li>Button</li>
          </ul>
        </div>
      </div>
      <div className="border-t pt-6 flex justify-between">
        <div className="space-x-4 flex items-center font-bold"><img src={LOGO} className="rounded-full object-cover w-10 h-10"/><span>CACD Church of Christ</span></div>
        <PrimaryButton title="Visit Us"/>
      </div>
    </footer>
  );
};
