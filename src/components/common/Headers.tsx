import LOGO from "../../assets/images/cacd_logo.jpg"
export const Header = () => {
  return (
    <header className="w-[100vw] py-6 px-5 flex justify-between items-center">
        <div id="company-logo" className="flex items-center gap-4">
            <img className="w-10 h-10 object-cover" src={LOGO} alt="CACD logo"/>
            <span className="font-bold">CACD Church of Christ</span>
        </div>
        <nav>
            <ul className="flex">
                <li className="px-8 text-sm font-semibold">Home</li>
                <li className="px-8 text-sm font-semibold">Events</li>
                <li className="px-8 text-sm font-semibold">About</li>
                <li className="px-8 text-sm font-semibold">Gallery</li>
                <li className="px-8 text-sm font-semibold">Contact Us</li>
            </ul>
        </nav>
        <div>
            <button className="border-2 border-cacdRed rounded-full px-6 py-2 text-sm text-cacdRed font-bold">Get Involved</button>
        </div>
    </header>
  )
}

export const SimpleHeader = () => {
  return (
    <div>Headers</div>
  )
}

