import { FaPhone } from "react-icons/fa6";
import HeaderTitle from "../Component/ReusableComps/HeaderTitle";
import SocialLink from "../Component/ReusableComps/SocialLink";
import { MdEmail, MdLocationOn } from "react-icons/md";
import network from "../assets/Lotties/networking.json";
import Lottie from "lottie-react";
import EmailForm from "../Component/ReusableComps/EmailForm";
const Contact = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1200">
      <HeaderTitle
        title="Get in Touch"
        subTitle="  Whether you want to collaborate, have a question, or just want to say hi —
          feel free to drop a message!"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 space-y-3d items-center lg:p-10  p-3">
        <div className="space-y-3 ">
          <div className="flex items-center md:gap-3 gap-1">
            <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded">
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
            <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded">
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
            <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded">
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
        <div>
          <Lottie animationData={network} loop={true} />
        </div>
        <div>
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
