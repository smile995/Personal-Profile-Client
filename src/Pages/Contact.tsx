import { FaLink, FaLocationPin, FaPhone } from "react-icons/fa6";
import HeaderTitle from "../Component/ReusableComps/HeaderTitle";
import SocialLink from "../Component/ReusableComps/SocialLink";
import { MdEmail, MdLocationOn } from "react-icons/md";
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

      <div className="grid md:grid-cols-2 gap-10 md:p-8 p-1">
        <div className="space-y-3">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Let's Connect</h2>
            <p className="text-md text-gray-600">
              I'm always open to discussing new opportunities, creative
              projects, or just having a chat about technology and development.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center md:gap-3 gap-1">
              <div className="p-2 bg-blue-600 rounded">
                <MdEmail className="md:text-2xl text-white " />
              </div>
              <div>
                <p className="font-semibold md:text-xl">Email</p>
                <p>
                  <a
                    href="mailto:amirhamzaismail275@gmail.com"
                    className="hover:underline flex gap-2 items-center font-semibold"
                  >
                    amirhamzaismail275@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center md:gap-3 gap-1">
              <div className="p-2 bg-blue-600 rounded">
                <FaPhone className="md:text-2xl text-white " />
              </div>
              <div>
                <p className="font-semibold md:text-xl">Phone</p>
                <p>
                  <a
                    href="https://wa.me/8801925010228"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex gap-2 items-center font-semibold"
                  >
                    +880-1925010228 (WhatsApp)
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center md:gap-3 gap-1">
              <div className="p-2 bg-blue-600 rounded">
                <MdLocationOn className="md:text-2xl text-white " />
              </div>
              <div>
                <p className="font-semibold md:text-xl">Location</p>
                <p>Kotbati, Comilla, Bangladesh</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl flex md:gap-3 gap-1 items-center font-semibold text-gray-800 mb-1">
                Follow Me
              </h2>
              <div className="flex -mt-4">
                <SocialLink heading=" " />
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:gap-3 gap-1 md:grid-cols-2 sm:w-full">
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
