"use client";
import Divider from "../../components/Divider";

export default function Contact() {
  return (
    <div className="animate-fadeIn px-6 py-8 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-left">
          Contact
        </h1>
        <p className="mt-2 text-xl text-gray-700 text-left">
          Let's get in touch
        </p>
        <Divider/>

        <p className="mt-4 text-lg text-gray-700 text-left">
          Find me on Social Media
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6">
          <div className="relative overflow-hidden rounded-xl p-6 text-white bg-gradient-to-br from-red-600 to-red-800 shadow hover:shadow-lg transition-shadow">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent, rgba(0,0,0,0.1))",
              }}
            ></div>
            <div className="relative flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-2 opacity-80">
                Stay in Touch
              </h2>
              <p className="mb-4 opacity-80">
                Reach out via email for inquiries or collaborations.
              </p>
              <div className="mt-auto">
                <a
                  href="mailto:email@example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white/80 text-red-800 px-4 py-2 rounded-xl font-semibold hover:bg-white/90 transition-colors"
                >
                  Go to Gmail
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-4xl font-bold opacity-30">
              M
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-xl p-6 text-white bg-gradient-to-b from-purple-600 via-pink-600 to-orange-600 shadow hover:shadow-lg transition-shadow">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent, rgba(0,0,0,0.1))",
              }}
            ></div>
            <div className="relative flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-2 opacity-80">
                Follow My Journey
              </h2>
              <p className="mb-4 opacity-80">
                Stay updated with my latest posts and stories on Instagram.
              </p>
              <div className="mt-auto">
                <a
                  href="https://instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white/80 text-pink-800 px-4 py-2 rounded-xl font-semibold hover:bg-white/90 transition-colors"
                >
                  Go to Instagram
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-4xl font-bold opacity-30">
              IG
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl p-6 text-white bg-gradient-to-r from-cyan-500 to-blue-900 shadow hover:shadow-lg transition-shadow">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent, rgba(0,0,0,0.1))",
              }}
            ></div>
            <div className="relative flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-2 opacity-80">
                Let's Connect
              </h2>
              <p className="mb-4 opacity-80">
                Connect with me on LinkedIn for professional updates.
              </p>
              <div className="mt-auto">
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white/80 text-blue-900 px-4 py-2 rounded-xl font-semibold hover:bg-white/90 transition-colors"
                >
                  Go to LinkedIn
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-4xl font-bold opacity-30">
              in
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-xl p-6 text-white bg-gradient-to-br from-gray-600 to-gray-800 shadow hover:shadow-lg transition-shadow">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent, rgba(0,0,0,0.1))",
              }}
            ></div>
            <div className="relative flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-2 opacity-80">
                Join the Fun
              </h2>
              <p className="mb-4 opacity-80">
                Follow me on TikTok for entertaining and engaging content.
              </p>
              <div className="mt-auto">
                <a
                  href="https://www.tiktok.com/@yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white/80 text-gray-800 px-4 py-2 rounded-xl font-semibold hover:bg-white/90 transition-colors"
                >
                  Go to TikTok
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-4xl font-bold opacity-30">
              T
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl p-6 text-white bg-gradient-to-r from-gray-700 to-black shadow hover:shadow-lg transition-shadow">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent, rgba(0,0,0,0.1))",
              }}
            ></div>
            <div className="relative flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-2 opacity-80">
                Explore the Code
              </h2>
              <p className="mb-4 opacity-80">
                Browse the source code for my projects on GitHub.
              </p>
              <div className="mt-auto">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white/80 text-gray-900 px-4 py-2 rounded-xl font-semibold hover:bg-white/90 transition-colors"
                >
                  Go to GitHub
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-4xl font-bold opacity-30">
              GH
            </div>
          </div>
        </div>

        <Divider/>

        <p className="mt-4 text-lg text-gray-700 text-left">
          Or send me a message
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full sm:w-1/2 border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full sm:w-1/2 border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
          />
        </div>
        <div className="mt-4">
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
          ></textarea>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-gray-500 text-white px-6 py-3 rounded-xl hover:bg-gray-600 transition-colors duration-300 cursor-pointer"
          >
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
}
