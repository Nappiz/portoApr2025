import Divider from "../../components/Divider";

export default function About() {
  return (
    <div className="animate-fadeIn px-6 py-8 bg-white min-h-screen">
      <section className="mb-2">
        <h1 className="text-3xl font-bold text-gray-800 text-left">
          About
        </h1>
        <p className="mt-4 text-2xl text-gray-500 text-left">
          a short story of me
        </p>
        <Divider />
      </section>

      <section className="mb-12">
        <p className="text-lg text-gray-700 leading-relaxed text-left">
          I am a passionate developer who loves blending modern design with
          robust code. My journey started with a spark of curiosity and has
          grown into a career filled with creativity, continuous learning, and
          innovation.
        </p>
        <Divider />
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4 text-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-blue-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V5a1 1 0 011-1h6a1 1 0 011 1v2m-1 0v12a2 2 0 01-2 2H9a2 2 0 01-2-2V7m6 0H9"
            />
          </svg>
          <h2 className="text-3xl font-bold text-gray-800">Career</h2>
        </div>
        <p className="mt-2 text-xl text-gray-600 text-left">
          My professional career journey
        </p>
        <div className="mt-6 space-y-6">
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">
              Senior Developer
            </h3>
            <p className="mt-2 text-gray-600">
              Leading development teams to build scalable software solutions that make an impact.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">
              Tech Consultant
            </h3>
            <p className="mt-2 text-gray-600">
              Advising startups on technology strategies and innovative software architectures.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">
              Open Source Contributor
            </h3>
            <p className="mt-2 text-gray-600">
              Actively participating in open source projects and community-driven initiatives.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3 text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5c-3.86 0-7.317-1.965-9.16-5.422L12 14z"
              />
            </svg>
            <h2 className="text-3xl font-bold text-gray-800">
              Education
            </h2>
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300">
            Download Resume
          </button>
        </div>
        <p className="text-xl text-gray-600 mb-6 text-left">
          My Educational Journey
        </p>
        <div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">
              Bachelor's Degree in Computer Science
            </h3>
            <p className="mt-2 text-gray-600">
              University Name &mdash; Graduated 2020. Engaged in research and project development to push creative boundaries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
