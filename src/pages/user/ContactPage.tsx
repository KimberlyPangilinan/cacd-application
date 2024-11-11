import { useState } from "react";
import { PrimaryStateButton } from "../../components/common/Buttons"

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  return (
    <>
      <section className="flex flex-col min-h-[60vh] py-8">
        <div className="w-full justify-between flex mb-10">
          <h2 className="flex flex-col">
            <span className="text-cacdRed font-bold text-xs mb-2">
              CACD Church of Christ
            </span>
            <span className="uppercase font-bold text-3xl">
             Contact Us
            </span>
          </h2>
        </div>
        <div className="flex-1 flex grow border rounded-md w-full p-4 gap-8">
          <div className="grow max-w-[50%] space-y-4">
            <img className="w-[100%] mb-4 h-[50vh] object-cover" src="https://via.placeholder.com/150"/>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean justo lacus, eleifend quis faucibus in, consectetur a libero.</span>
            <ul className="text-neutral-500">
              <li>sample@email.com</li>
              <li>+639 123 451234</li>
              <li>Send a message @facebook</li>
            </ul>
          </div>
          <div className="grow flex flex-col gap-6">
          <div className="flex gap-2 w-full">
         
          <div>
            <label className="grow text-gray-700 font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="grow text-gray-700 font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          </div>
          <div>
            <label className="grow text-gray-700 font-medium mb-1">Email</label>
            <input
              type="text"
              name="firstName"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="grow text-gray-700 font-medium mb-1">Contact Number</label>
            <input
              type="text"
              name="firstName"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="grow text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows={4} cols={50}
              name="firstName"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            ></textarea>
          </div>
            <PrimaryStateButton title="Send a message" className="w-100"/>
          </div>
        </div>
      </section>
    </>
  )
}
