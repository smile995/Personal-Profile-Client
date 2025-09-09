import {  FaPhone } from "react-icons/fa6";
import HeaderTitle from "../Component/ReusableComps/HeaderTitle";
import SocialLink from "../Component/ReusableComps/SocialLink";
import { MdEmail, MdLocationOn } from "react-icons/md";
import network from "../assets/Lotties/networking.json";
import Lottie from "lottie-react";
const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-2 md:px-4 py-10">

      <div className="text-center mb-12">
        <HeaderTitle
          title="Get in Touch"
          subTitle="  Whether you want to collaborate, have a question, or just want to say hi —
          feel free to drop a message!"
        />
      </div>

    
      <div className="grid md:grid-cols-2 items-center gap-10 md:p-8 p-1">
        <div>
          <div className="space-y-3">
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
        </div>

       <div>
        <Lottie animationData={network} loop={true} />
       </div>
      </div>
    </div>
  );
};

export default Contact;
