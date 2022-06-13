import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './Resume.scss';

const local = `https://github.com/OldEphraim/storage/blob/main/RESUME%2006-11-22.pdf`;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${ pdfjs.version }/pdf.worker.js`;

const Resume = () => {
  return (
  <div className="Resume">
  <Document className={"PDFDocument"} file={local} onLoadError={console.error} options={{ workerSrc: `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js` }}>
    <Page className={"PDFPage"} pageNumber={1} />
  </Document>
  </div>
)
}

export default Resume;
