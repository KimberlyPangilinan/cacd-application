import { Link } from "react-router-dom"
import LOGO from "../../assets/images/cacd_logo.jpg"
import { PrimaryOutline } from "./Buttons"
export const Header = () => {
  return (
    <header className="w-[100vw] py-6 px-5 flex justify-between items-center">
        <div id="company-logo" className="flex items-center gap-4">
            <img className="w-10 h-10 object-cover" src={LOGO} alt="CACD logo"/>
            <span className="font-bold">CACD Church of Christ</span>
        </div>
        <nav>
            <ul className="flex">
            <Link to="/" className="text-black hover:text-red-700"><li className="px-8 text-sm font-semibold">Home</li></Link>
            <Link to="/events" className="text-black hover:text-red-700"><li className="px-8 text-sm font-semibold">Events</li></Link>
                <li className="px-8 text-sm font-semibold">About</li>
                <li className="px-8 text-sm font-semibold">Gallery</li>
                <li className="px-8 text-sm font-semibold">Contact Us</li>
            </ul>
        </nav>
        <div>
          <PrimaryOutline title="Get Involved"/>
        </div>
    </header>
  )
}

export const SimpleHeader = () => {
  return (
    <div>Headers</div>
  )
}

