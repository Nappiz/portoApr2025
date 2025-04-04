export default function Contact() {
  return (
    <div className="animate-fadeIn px-6 py-8 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-600 text-left">
          Contact Me
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-left">
          Ingin menghubungi saya? Silakan kirim email ke{" "}
          <a
            href="mailto:email@example.com"
            className="text-blue-500 underline"
          >
            email@example.com
          </a>{" "}
          atau isi form di bawah ini:
        </p>
        <form className="space-y-4 text-left">
          <div>
            <label className="block text-lg mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-lg mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="youremail@example.com"
            />
          </div>
          <div>
            <label className="block text-lg mb-1">Message</label>
            <textarea
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Message"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
