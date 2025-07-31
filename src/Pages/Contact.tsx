const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Get in Touch</h1>
      <p className="text-center text-gray-600 mb-10">
        Whether you want to collaborate, have a question, or just want to say hi — feel free to drop a message!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">📍 Location</h2>
            <p className="text-gray-700">Dhaka, Bangladesh</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">📧 Email</h2>
            <a
              href="mailto:amirhamzaismail275@gmail.com"
              className="text-blue-600 hover:underline"
            >
              amirhamzaismail275@gmail.com
            </a>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">📞 Phone</h2>
            <p className="text-gray-700">+880-1XXXXXXXXX</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">🔗 Social Links</h2>
            <div className="flex gap-4 text-lg">
              <a
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin-username"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                LinkedIn
              </a>
              <a
                href="https://facebook.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded-md w-full"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded-md w-full"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="p-3 border rounded-md w-full"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 border rounded-md w-full"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/80 transition"
            disabled
            title="Static only. Backend coming soon!"
          >
            Send Message (Coming Soon)
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
