import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Casestudy = () => {
//   const { id } = useParams();
  const { state } = useLocation();
  const caseStudyData = state?.caseStudyData;

  if (!caseStudyData) {
    return <p>No case study data available.</p>;
  }

  return (
    <div>
      <h1>{caseStudyData.title}</h1>
      <p>{caseStudyData.about}</p>
    </div>
  );
}

export default Casestudy;
