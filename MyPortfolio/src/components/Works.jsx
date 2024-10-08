import React, { useState, useEffect } from "react";
import DesCard from "./DesCard";
import DevCard from "./DevCard";
import { fetchProjects } from "../lib/api";
import ImageLoader from "../loader";

export default function Works() {
  const [designprojects, setDesignProjects] = useState([]);
  const [devprojects, setDevProjects] = useState([]);
  const [isActive, setActive] = useState("Design");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      const fetchedDesignProjects = await fetchProjects(
        "/api/design-projects?populate=*	"
      );
      const fetchedDevProjects = await fetchProjects(
        "/api/development-projects?populate=*"
      );
      if (fetchedDesignProjects) {
        setDesignProjects(fetchedDesignProjects.data);
      }
      if (fetchedDevProjects) {
        setDevProjects(fetchedDevProjects.data);
      }
      setLoading(false);
    };
    getProjects();
  }, []);

  const handleActive = (button) => {
    setActive(button);
  };

  return (
    <section
      id="work"
      className="text-portfolioTextDark w-screen py-16 xl:py-20 px-4"
    >
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
        <>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {Array.from({length: 4}).map((_, index) =>
            <ImageLoader key={index} />
              )}
            </div>
          ) : (
            <>
              {isActive === "Design" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                  {designprojects.map((project) => (
                    <DesCard key={project.id} project={project} />
                  ))}
                </div>
              )}
              {isActive === "Development" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                  {devprojects.map((project) => (
                    <DevCard key={project.id} project={project} />
                  ))}
                </div>
              )}
            </>
          )}
        </>
        {/* <SkeletalLoading /> */}
      </div>
    </section>
  );
}
