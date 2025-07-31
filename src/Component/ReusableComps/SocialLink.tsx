import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const SocialLink = ({heading}:{heading:string}) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-lg font-bold">{heading}</h2>
      <div className="flex gap-4 mt-4">
        {/* Twitter */}
        <a href="#" target="_blank" aria-label="Twitter">
          <FaXTwitter className="w-6 h-6 hover:text-blue-400 transition-colors duration-200" />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@amirhamzaismail-dev"
          aria-label="YouTube"
           target="_blank"
        >
          <FaYoutube className="w-6 h-6 hover:text-red-500 transition-colors duration-200" />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/badsha.vai.96343"
          aria-label="Facebook"
           target="_blank"
        >
          <FaFacebook className="w-6 h-6 hover:text-blue-600 transition-colors duration-200" />
        </a>

        {/* ✅ LinkedIn */}
        <a
          href="https://www.linkedin.com/in/amir-hamza-ismail"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6 hover:text-blue-500 transition-colors duration-200" />
        </a>

        {/* ✅ GitHub */}
        <a
          href="https://github.com/smile995"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6 hover:text-gray-700 transition-colors duration-200" />
        </a>
      </div>
    </div>
  );
};

export default SocialLink;
