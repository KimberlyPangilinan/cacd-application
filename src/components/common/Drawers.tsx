import { Icon } from "@iconify/react/dist/iconify.js";

interface DrawerProps {
  handleClick: () => void;
}
export const Drawer = ({ handleClick }: DrawerProps) => {
  return (
    <>
      <div
        onClick={handleClick}
        className="bg-[#23232357] h-screen w-full fixed top-0 z-[99]"
      ></div>
      <div className="fixed top-0 right-0 bg-white  min-h-screen w-[24%]  z-[100]">
        <div className="bg-cacdRed w-full min-h-[30vh] p-8 flex flex-col justify-between">
          <div className="flex items-center justify-between gap-4 text-white">
            <div className="rounded-full w-12 h-12 bg-neutral-50 border-cacdRed flex items-center justify-center">
              <Icon icon="uil:user" width="20" height="20" color="#b3261e" />
            </div>
            <Icon
              onClick={handleClick}
              icon="mingcute:right-line"
              width="20"
              height="20"
            />
          </div>
          <span className="text-white">Guest User</span>
        </div>
        <div className="">
          <h3 className="pt-8 px-8">Join us</h3>
          <p className="pb-4 pt-2 px-8">
            Stay informed about our latest and upcoming events.
          </p>
          <ul>
            <li className="py-4 px-8 hover:bg-red-50">Login</li>
            <li className="py-4 px-8 hover:bg-red-50">Sign up</li>
            <li className="py-4 px-8 hover:bg-red-50">Contact us</li>
            <li className="py-4 px-8 hover:bg-red-50">Donate</li>
          </ul>
        </div>
      </div>
    </>
  );
};
