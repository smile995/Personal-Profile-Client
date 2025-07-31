const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 rounded">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Navigation */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h2 className="text-lg font-bold">Explore</h2>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Projects</a>
          <a className="link link-hover">Blog</a>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-lg font-bold">Connect with me</h2>
          <div className="flex gap-4 justify-center mt-4">
            {/* Twitter */}
            <a href="#" aria-label="Twitter">
              <svg
                className="w-6 h-6 hover:text-blue-400 transition-colors duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-0.883 0.392-1.832 0.656-2.828 0.775..." />
              </svg>
            </a>

            {/* YouTube */}
            <a href="#" aria-label="YouTube">
              <svg
                className="w-6 h-6 hover:text-red-500 transition-colors duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-0.246-11.631-0.245-15.23 0..." />
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" aria-label="Facebook">
              <svg
                className="w-6 h-6 hover:text-blue-600 transition-colors duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l0.358-4h-4v-1.667..." />
              </svg>
            </a>

            {/* ✅ LinkedIn */}
            <a
              href="https://www.linkedin.com/in/amir-hamza-ismail"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6 hover:text-blue-500 transition-colors duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 
               5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 
               19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 
               1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 
               1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.062-1.867-3.062-1.869 
               0-2.156 1.46-2.156 2.969v5.697h-3v-10h2.881v1.367h.041c.401-.761 
               1.379-1.562 2.838-1.562 3.033 0 3.593 1.995 3.593 
               4.59v5.605z"
                />
              </svg>
            </a>

            {/* ✅ GitHub */}
            <a
              href="https://github.com/smile995"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                className="w-6 h-6 hover:text-gray-700 transition-colors duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 
        3.29 9.41 7.86 10.95.58.11.79-.25.79-.56 
        0-.28-.01-1.02-.01-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.73-1.3-1.73-1.07-.73.08-.72.08-.72 
        1.18.08 1.8 1.21 1.8 1.21 1.05 1.8 2.74 1.28 
        3.41.98.11-.76.41-1.28.74-1.57-2.56-.3-5.26-1.28-5.26-5.7 
        0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.12-3.18 
        0 0 .97-.31 3.18 1.18a11.08 11.08 0 012.9-.39c.99 0 
        1.98.13 2.9.39 2.2-1.5 3.17-1.18 
        3.17-1.18.64 1.66.24 2.88.12 
        3.18.75.82 1.2 1.86 1.2 3.11 
        0 4.43-2.71 5.4-5.29 5.69.42.36.8 1.07.8 2.16 
        0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56 
        4.56-1.54 7.85-5.85 7.85-10.95C23.5 5.74 18.26.5 12 .5z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <h2 className="text-lg font-bold">Contact</h2>
          <p>
            Email:{" "}
            <a href="mailto:amirhamzaismail275@gmail.com" className="link link-hover">
             amirhamzaismail275@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+8801XXXXXXX" className="link link-hover">
              +8801863743696
            </a>
          </p>
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All rights reserved — Amir Hamza Ismail
        </p>
      </div>
    </footer>
  );
};

export default Footer;
