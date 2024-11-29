import React from "react";
import "./Resumes.scss";

import resumePDF from "../../assets/resume-11-29-2024.pdf";
import resumeIMG from "../../assets/resume-11-29-2024.jpg";

const Resumes = () => {
  return (
    <div className="Resume">
      <iframe
        className="PDFDocument"
        src={`${resumePDF}#view=fit`}
        type="application/pdf"
        title="title"
      />
      <img src={resumeIMG} alt="resume-image"></img>
    </div>
  );
};

export default Resumes;
