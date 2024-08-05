import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Casestudy = () => {
  const { state } = useLocation();
  const caseStudyData = state?.caseStudyData;
  const [process, setProcess] = useState([]);

  useEffect(() => {
    if (caseStudyData?.designProcess?.process) {
      setProcess(caseStudyData.designProcess.process);
    }
  }, [caseStudyData]);

  if (!caseStudyData) {
    return <p>No case study data available.</p>;
  }

  return (
    <>
      <section className="text-portfolioTextDark w-screen py-16  px-4">
        <img
          className="rounded-3xl w-full max-w-3xl mx-auto"
          src={caseStudyData.thumbnail}
        />
      </section>
      <section className="text-portfolioTextDark w-screen   px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 justify-between  max-w-3xl mx-auto p-4 rounded-xl shadow-md bg-[#fafafa] border-b border-[#CCCCCC]">
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-portfolioTextLight">
              Duration
            </p>
            <p className="text-sm">{caseStudyData.projectDuration}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-portfolioTextLight">
              Platform
            </p>
            <p className="text-sm">{caseStudyData.platform}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-portfolioTextLight">
              Role
            </p>
            <p className="text-sm">{caseStudyData.role}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-portfolioTextLight">
              Client
            </p>
            <p className="text-sm">{caseStudyData.clientName}</p>
          </div>
        </div>
      </section>
      <section className="text-portfolioTextDark text-left w-screen py-16  px-4">
        <div className="flex gap-11 flex-col max-w-3xl mx-auto">
          <div className="border border-[#CCCCCC] p-4 rounded-xl flex flex-col gap-6 items-start bg-[#FAFAFA]">
            <h3 className="text-2xl">🤔 About {caseStudyData.clientName}</h3>
            <p>{caseStudyData.clientInfo}</p>
          </div>
          <div className="border border-[#FF1F00] p-4 rounded-xl flex flex-col gap-6 items-start bg-[#FFDCD7]">
            <h3 className="text-2xl">🤯 The Problem</h3>
            <p>{caseStudyData.problemStatement}</p>
            <div className="flex items-center gap-2">
              <div className="bg-[#CF3030] rounded-full w-8 h-8">
                <img src={caseStudyData.clientImage} />
              </div>
              <p className="text-[12px]">Brian, {caseStudyData.clientName}</p>
            </div>
          </div>
          <div className="border border-[#FF9900] p-4 rounded-xl flex flex-col gap-6 items-start bg-[#FFEFD7]">
            <h3 className="text-2xl">Proposed Solution</h3>
            <p>{caseStudyData.solution}</p>
            <div className="flex items-center gap-2">
              <div className="bg-[#FFBF60] rounded-full w-8 h-8">
                <img src={caseStudyData.clientImage} />
              </div>
              <p className="text-[12px]">Meeda</p>
            </div>
          </div>
                      {/* {
              "process": [
                {
                  "gif": "",
                  "description": "Second description"
                },
                {
                  "gif": "",
                  "description": "First description"
                },
                {
                  "gif": "",
                  "description": "Third description"
                }
              ]
              } */}
          <div className="flex flex-col gap-24 pb-16">
            <h3 className="text-2xl">The Process</h3>
            {process.map((para, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-y-6"
              >
                <p>{para.description}</p>
                <div className="bg-gray-600 max-w-sm w-full max-h-64 h-auto rounded-3xl overflow-hidden mb-4">
                  <img
                    className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
                    src={para.gif}
                    alt={`Process step ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="text-portfolioTextDark text-left w-screen py-16  px-4">
      <div className="flex gap-20 flex-col max-w-3xl mx-auto">
        <h1 className="font-bold text-6xl ">Final Mockups</h1>
            <video className="w-full max-h-64" controls autoPlay loop src={caseStudyData.finalMockups}>Your browser does not support this video</video>
            <h1 className="font-bold text-6xl ">Next Steps</h1>
      
      <p>{caseStudyData.conclusion}</p>
      </div>
      </section>
      <section className="text-portfolioTextDark w-screen py-16  px-4">
        <img
          className="rounded-3xl w-full max-w-3xl mx-auto"
          src={caseStudyData.thanksImage}
        />
      </section>
    </>
  );
};

export default Casestudy;
