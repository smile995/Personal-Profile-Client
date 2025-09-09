import Lottie from "lottie-react";
import contact from "../../assets/Lotties/contact.json";
import HeaderTitle from "./HeaderTitle";
const EmailSection = () => {
  return (
    <div className="mt-10">
      <div>
        <HeaderTitle
          title="Get in Touch"
          subTitle="Have a question or idea? Drop me an email and I’ll get back to you soon."
        />
      </div>
      <div>
        <div className="grid md:grid-cols-2 gap-10 md:p-8 p-1">
          <div className="flex justify-center items-center">
            <Lottie animationData={contact} loop={true} />
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
              className="bg-gradient-to-r from-primary to-secondary text-white p-3 rounded-lg hover:bg-blue-700 w-full "
              disabled
              title="Static only. Backend coming soon!"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
