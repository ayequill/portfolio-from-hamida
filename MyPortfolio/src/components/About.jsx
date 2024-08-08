import React, { useState, useEffect, Fragment } from "react";
import { fetchProjects } from "../lib/api";
import ImageLoader from "../loader";

export default function About() {
  const [currentStory, setCurrentStory] = useState(0);
  const [fetchedAbout, setFetchedAbout] = useState([]);
  const [isImage, setIsImage] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAbout = async () => {
      setLoading(true)
      const fetchedAboutData = await fetchProjects("/api/about");
      const stories = fetchedAboutData.story.content;
      setFetchedAbout(stories);
      setLoading(false)
    };

    getAbout();
  }, []);

  useEffect(() => {
    if (fetchedAbout.length > 0) {
      setIsImage(checkIsImage(fetchedAbout[currentStory].image));
      const interval = setInterval(() => {
        setCurrentStory((prevStory) => (prevStory + 1) % fetchedAbout.length);
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [fetchedAbout, currentStory]);

  if (fetchedAbout.length === 0) {
    return <p>Loading...</p>;
  }
  const checkIsImage = (url) => {
    return /\.(jpeg|jpg|png|gif)$/i.test(url);
  };

 

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="border border-gray-400 sticker-shadow rounded-3xl bg-white w-full h-72  overflow-hidden flex justify-center items-center -rotate-3">
          {loading ? (
            <div className="w-full h-72">
              
            <ImageLoader  />
              
            </div>
            ) : (
              <>

              {isImage ? (
                
                <img
                src={fetchedAbout[currentStory].image}
                className="object-cover w-full h-full"
                alt="About me"
                />
              ) : (
                <video
                src={fetchedAbout[currentStory].image}
                className="object-cover w-full h-full"
                autoPlay
                loop
                />
              )}
              
              </>
            )}
          </div>
          <div className=" text-left w-full mb-4 leading-8 font-medium">
            <p className={currentStory === 0 ? "inline-paragraph" : ""}>
            {fetchedAbout[currentStory].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
