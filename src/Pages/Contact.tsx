import {
  FaLink,
  FaLocationPin,
  FaPhone,
} from "react-icons/fa6";
import HeaderTitle from "../Component/ReusableComps/HeaderTitle";
import SocialLink from "../Component/ReusableComps/SocialLink";
import { MdEmail } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-2 md:px-4 py-10">
      {/* Title & Subtitle */}
      <div className="text-center mb-12">
        <HeaderTitle
          titleColor="Touch"
          titleStart="Get in"
          subTitle="  Whether you want to collaborate, have a question, or just want to say hi —
          feel free to drop a message!"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-10 md:p-8 p-3">
        {/* Contact Info */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          {/* Location Card */}
          <div className="shadow-sm rounded md:p-6  flex items-start sm:w-full hover:shadow-md p-2">
            <div>
              <h2 className="text-lg flex gap-3 items-center font-semibold text-gray-800 mb-1">
                <FaLocationPin />
                Location
              </h2>
              <p className="text-gray-600">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="shadow-sm rounded md:p-6  flex items-start sm:w-full hover:shadow-md p-2">
            <div>
              <h2 className="text-lg flex gap-3 items-center font-semibold text-gray-800 mb-1">
                <MdEmail />
                Email
              </h2>
              <p className="inline-block">
                <a
                  href="mailto:amirhamzaismail275@gmail.com"
                  className="hover:underline flex gap-2 items-center text-blue-600 font-bold"
                >
                  <FaLink/> Mail Me
                </a>
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="shadow-sm rounded md:p-6  flex items-start sm:w-full hover:shadow-md p-2">
            <div>
              <h2 className="text-lg flex gap-3 items-center font-semibold text-gray-800 mb-1">
                <FaPhone />
                Phone
              </h2>
              <p className="text-gray-600">+880-1863743696</p>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="shadow-sm rounded md:p-6  flex items-start sm:w-full hover:shadow-md p-2">
            <div>
              <h2 className="text-lg flex gap-3 items-center font-semibold text-gray-800 mb-1">
                <GiWorld />
                Social Links
              </h2>
              <div >
                <SocialLink heading=" " />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 sm:w-full">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 w-full"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 w-full"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 w-full"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 w-full"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 w-full "
            disabled
            title="Static only. Backend coming soon!"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
