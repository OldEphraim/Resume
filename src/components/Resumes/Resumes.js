import React from 'react';
import './Resumes.scss';

import resumePDF from '../../assets/resume.pdf';
import resumeIMG from '../../assets/resumeimg.jpg';

const Resumes = () => {
  return (
  <div className="Resume">
  <iframe className="PDFDocument" src={`${resumePDF}#view=fit`} type="application/pdf" title="title" />
  <img src={resumeIMG} alt="image"></img>
  </div>
)
}

export default Resumes;
