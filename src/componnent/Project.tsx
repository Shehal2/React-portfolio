import React, { useState } from 'react';

interface ProjectProps {
  title: string;
  description: string;
  githubLink: string;
  image: string;
}

interface ProjectState {
  projects: ProjectProps[];
}

const Project: React.FC = () => {
  const [projects, setProjects] = useState<ProjectState["projects"]>([
    {
      title: "Project 1",
      description: "1 year Project: Web-Based Hotel Reservation & Management System.",
      githubLink: "https://github.com/your-repo-link",
      image: "src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif"
    },
    {
      title: "Project 2",
      description: "Group Project: Web-Based Hotel Reservation & Management System.",
      githubLink: "https://github.com/your-repo-link",
      image: "src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif"
    },
    {
      title: "Project 3",
      description: "Final Project: Web-Based Hotel Reservation & Management System.",
      githubLink: "https://github.com/your-repo-link",
      image: "src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif"
    },
    {
      title: "Project 4",
      description: "Tic-Tac-Toe Game",
      githubLink: "https://github.com/your-repo-link",
      image: "src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif"
    },
    {
      title: "Project 5",
      description: "Group Project: Web-Based Hotel Reservation & Management System.",
      githubLink: "https://github.com/your-repo-link",
      image: "src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif"
    },
    {
      title: "Project 6",
      description: "Group Project: Web-Based Hotel Reservation & Management System.",
      githubLink: "https://github.com/your-repo-link",
      image: "src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif"
    }
  ]);

  return (
    <section id="project" className="pb-10">
      <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-center text-blue-600 mb-8">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-4 p-4 mt-4">
        {projects.map((project, index) => (
          <div key={index} className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-50 object-cover" />
            <div className="p-4">
              <p className="mt-4 text-sm text-gray-600">
                <b>{project.title}:</b> {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-3 text-blue-500 hover:text-blue-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.417 2.868 8.166 6.839 9.489.5.09.683-.217.683-.482 0-.237-.009-.867-.014-1.703-2.782.605-3.37-1.34-3.37-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.621.069-.608.069-.608 1.003.071 1.53 1.03 1.53 1.03.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.637-1.338-2.22-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.03-2.683-.103-.254-.446-1.276.097-2.659 0 0 .84-.269 2.75 1.025A9.573 9.573 0 0112 6.843c.851.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.383.201 2.405.099 2.659.641.699 1.03 1.592 1.03 2.683 0 3.841-2.338 4.688-4.566 4.936.36.31.682.92.682 1.852 0 1.336-.012 2.414-.012 2.742 0 .267.18.576.688.478C19.134 20.165 22 16.417 22 12c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
                View Code on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
