import React, { useState, useEffect } from "react";
import Card from "./Card";
import { fetchProjects } from "../lib/api";

export default function Works() {
  const [designprojects, setDesignProjects] = useState([]);
  const [devprojects, setDevProjects] = useState([])
  const [isActive, setActive] = useState("Design");

  useEffect(() => {
    const getProjects = async () => {
      const fetchedDesignProjects = await fetchProjects("/api/design-projects");
      const fetchedDevProjects = await fetchProjects("/api/development-projects")
      console.log(fetchedDevProjects.data);
      if (fetchedDesignProjects) {
        setDesignProjects(fetchedDesignProjects.data);
      }
    if (fetchedDevProjects) {
        setDevProjects(fetchedDevProjects.data)
      }
    };
    getProjects();
  }, []);

  const handleActive = (button) => {
    setActive(button);
  };

  return (
    <section id="work" className="text-portfolioTextDark w-screen py-16 xl:py-20 px-4">
      <div className="flex gap-8 flex-col max-w-3xl mx-auto justify-center items-center">
        <p className="text-3xl xl:text-[40px] font-bold">Work</p>
        <p>A showcase of my proudest creations</p>
        <div className="text-portfolioTextLight flex w-full max-w-[270px] bg-gray-300 justify-between p-[1px] rounded-full">
          <button
            type="button"
            className={`py-2 px-6 transition duration-300 ease-in-out rounded-full ${
              isActive === "Design"
                ? "bg-portfolioWhite buttonGroup-shadow text-portfolioTextDark font-semibold"
                : ""
            }`}
            onClick={() => handleActive("Design")}
          >
            Design
          </button>

          <button
            type="button"
            className={`py-2 px-6 transition duration-300 ease-in-out rounded-full ${
              isActive === "Development"
                ? "bg-portfolioWhite buttonGroup-shadow text-portfolioTextDark font-semibold"
                : ""
            }`}
            onClick={() => handleActive("Development")}
          >
            Development
          </button>
        </div>
        {isActive === "Design" && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full">
            {designprojects.map((project) => (
              <Card
                key={project.id}
                project={project}

              />
            ))}
          </div>
        )}
        {isActive === "Development" && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full">
          {devprojects.map((project) => (
            <Card
              key={project.id}
              project={project}

            />
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
