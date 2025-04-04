"use client";
import Link from "next/link";
import Divider from "../components/Divider";

export default function Home() {
  const skills = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "GraphQL",
    "Redux",
    "HTML5",
    "CSS3",
  ];

  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="animate-fadeIn px-6 py-8 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-gray-800 text-left">
            Hi, I'm Your Name
          </h1>
          <div className="mt-2 text-base text-gray-600 text-left">
            <span>• Lokasi: Your City</span>
            <span className="mx-2">•</span>
            <span>Onsite / Remote</span>
          </div>
          <p className="mt-3 max-w-2xl text-gray-700 text-left">
            I'm a passionate developer with a keen eye for modern design and robust
            code. I enjoy crafting responsive and interactive web experiences.
          </p>
          <Divider />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 18l6-6-6-6M8 6l-6 6 6 6"
              />
            </svg>
            <h2 className="text-3xl font-bold text-gray-800 text-left">
              Skills
            </h2>
          </div>
          <p className="text-base text-gray-600 mb-6 text-left">
            My Professional Skills
          </p>
          <div className="overflow-hidden whitespace-nowrap mb-4">
            <div className="inline-flex animate-scroll-left">
              {duplicatedSkills.map((skill, index) => (
                <button
                  key={index}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full inline-flex items-center gap-2 mx-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                    />
                  </svg>
                  <span className="text-base">{skill}</span>
                </button>
              ))}
            </div>
          </div>
          <Divider />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5l2 2h5a2 2 0 012 2v12a2 2 0 01-2 2z"
              />
            </svg>
            <h2 className="text-3xl font-bold text-gray-800 text-left">
              Services
            </h2>
          </div>
          <p className="text-base text-gray-600 mb-8 text-left">
            I offer a range of services to help bring your ideas to life.
          </p>
          <div className="w-full bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Let's work together!
            </h3>
            <p className="text-base text-gray-600 mb-6 max-w-2xl">
              Whether you have a new project or need a consultation, I am here to
              help you build and grow your ideas. Let's collaborate and create
              something amazing!
            </p>
            <Link href="/contact">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                Contact Me
              </button>
            </Link>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
