import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

interface ProjectProps {
  title: string;
  description: string;
  githubLink: string;
  image: string;
  imageView: string[]; // Updated to support multiple images
  technologies: string[];
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
      image: "src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif",
      imageView: [
        "src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif", // Example image paths
        "src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif",
        "src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif",
        "src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif"
      ],
      technologies: ["C#", "Microsoft Access Database"]
    },
    {
      title: "Project 2",
      description: "Group Project: Web-Based Hotel Reservation & Management System.",
      githubLink: "https://github.com/your-repo-link",
      image: "src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif",
      imageView: [
        "src/images/image1.jpg",
        "src/images/image2.jpg",
        "src/images/image3.jpg"
      ],
      technologies: ["PHP", "Xampp Server", "Bootstrap", "CSS"]
    },
    {
      title: "Project 3",
      description: "Final Project: Web-Based Hotel Reservation & Management System.",
      githubLink: "https://github.com/your-repo-link",
      image: "src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif",
      imageView: [
        "src/images/image1.jpg",
        "src/images/image2.jpg",
        "src/images/image3.jpg"
      ],
      technologies: ["C#", "SQL Server"]
    },
    {
      title: "Project 4",
      description: "Tic-Tac-Toe Game",
      githubLink: "https://github.com/your-repo-link",
      image: "src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif",
      imageView: [
        "src/images/image1.jpg",
        "src/images/image2.jpg",
        "src/images/image3.jpg"
      ],
      technologies: ["Java"]
    },
    {
      title: "Project 5",
      description: "Portfolio Website",
      githubLink: "https://github.com/your-repo-link",
      image: "src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif",
      imageView: [
        "src/images/image1.jpg",
        "src/images/image2.jpg",
        "src/images/image3.jpg"
      ],
      technologies: ["React", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "Project 6",
      description: "Group Project: Web-Based Hotel Reservation & Management System.",
      githubLink: "https://github.com/your-repo-link",
      image: "src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif",
      imageView: [
        "src/images/image1.jpg",
        "src/images/image2.jpg",
        "src/images/image3.jpg"
      ],
      technologies: ["C#", "Microsoft Access Database"]
    }
  ]);

  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageView = (images: string[]) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImages([]);
  };

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
              <div className="mt-3">
                <p className="text-sm text-gray-700"><b>Technologies Used:</b></p>
                <div className="flex gap-2 mt-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-200 rounded-md text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => handleImageView(project.imageView)}
                className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Image View
              </button>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-3 text-blue-500 hover:text-blue-700"
              >
                <FaGithub className="w-5 h-5 mr-2" />
                View Code on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

     {/* Modal for image view */}
{isModalOpen && (
  <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
    <div className="relative bg-white p-4 rounded-lg overflow-auto max-w-full md:max-w-4xl w-full">
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
      >
        Close
      </button>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {selectedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Modal image ${index + 1}`}
            className="w-full max-w-[300px] h-auto object-cover rounded-md border border-gray-200"
          />
        ))}
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default Project;
