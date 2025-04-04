"use client";
import Link from "next/link";
import Divider from "../../components/Divider";

const projects = [
  {
    id: 1,
    title: "Project One",
    description:
      "This is a description of project one. It uses React, Node.js, and Tailwind CSS.",
    image: "/images/projects/project1.jpg",
    link: "https://contoh-link-project1.com",
    frameworks: [
      { id: 1, name: "React", logo: "/images/logos/react.png" },
      { id: 2, name: "Node.js", logo: "/images/logos/nodejs.png" },
      { id: 3, name: "Tailwind CSS", logo: "/images/logos/tailwind.png" },
    ],
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "This is a description of project two. It uses Next.js, GraphQL, and TypeScript.",
    image: "/images/projects/project2.jpg",
    link: "https://contoh-link-project2.com",
    frameworks: [
      { id: 1, name: "Next.js", logo: "/images/logos/nextjs.png" },
      { id: 2, name: "GraphQL", logo: "/images/logos/graphql.png" },
      { id: 3, name: "TypeScript", logo: "/images/logos/typescript.png" },
    ],
  },
];

export default function Projects() {
  return (
    <div className="animate-fadeIn px-6 py-8 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <section className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 text-left">
            Projects
          </h1>
          <p className="mt-2 text-lg text-gray-700 text-left">
            Several projects that I have worked on, both private and open source.
          </p>
          <Divider/>
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl font-semibold">
                      View this project
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-base text-gray-600">{project.description}</p>
                  {project.frameworks && (
                    <div className="mt-4 flex flex-wrap items-center gap-4">
                      {project.frameworks.map((fw) => (
                        <img
                          key={fw.id}
                          src={fw.logo}
                          alt={fw.name}
                          title={fw.name}
                          className="h-8 w-auto"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
