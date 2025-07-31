import SocialLinnk from "../ReusableComps/SocialLinnk";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content  md:px-16 p-8 rounded">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Navigation */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h2 className="text-lg font-bold">Quick Links</h2>
          <a href="/contact" className="link link-hover">Contact</a>
          <a href="/about" className="link link-hover">About</a>
          <a href="projets/" className="link link-hover">Projects</a>
          <a href="/blogs" className="link link-hover">Blogs</a>
        </div>

        {/* Socials */}
        <div>
          <SocialLinnk />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <h2 className="text-lg font-bold">Contact Info</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:amirhamzaismail275@gmail.com"
              className="link link-hover"
            >
              amirhamzaismail275@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+8801863743696" className="link link-hover">
              +8801863743696
            </a>
          </p>
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All rights reserved — Amir Hamza
          Ismail
        </p>
      </div>
    </footer>
  );
};

export default Footer;
