import React, { useState, useEffect, Fragment } from "react";
import { fetchProjects } from "../lib/api";

export default function About() {
  const [currentStory, setCurrentStory] = useState(0);
  const [fetchedAbout, setFetchedAbout] = useState([]);

  useEffect(() => {
    const getAbout = async () => {
      const fetchedAboutData = await fetchProjects("/api/about");
      const stories = fetchedAboutData.story.content;
      console.log(stories)
      setFetchedAbout(stories);
    };

    getAbout();
  }, []);

  useEffect(() => {
    if (fetchedAbout.length > 0) {
      const interval = setInterval(() => {
        setCurrentStory((prevStory) => (prevStory + 1) % fetchedAbout.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [fetchedAbout]);

  if (fetchedAbout.length === 0) {
    return <p>Loading...</p>;
  }

 

  return (
    <section
      id="about"
      className="text-portfolioTextDark w-screen pt-16 pb-24 xl:py-20 px-4"
    >
      <div className="flex gap-8 flex-col max-w-3xl mx-auto justify-center items-center">
        <p className="text-3xl xl:text-[40px] font-bold">About Me 😉</p>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full">
          
        
            
          <div className="border border-gray-400 sticker-shadow rounded-3xl bg-white w-full h-auto max-h-72 overflow-hidden flex justify-center items-center -rotate-3">
            <img
         
              src={fetchedAbout[currentStory].image}
              className="object-contain"
              alt="About me"
              />
          </div>
          <div className="max-w-sm text-left w-full mb-4">
            <p className={currentStory === 0 ? "inline-paragraph" : ""}>
            {fetchedAbout[currentStory].text}
              
            </p>
          
          </div>
        
              
      
        </div>
      </div>
    </section>
  );
}
