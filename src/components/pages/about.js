import React from 'react';
import samplePDF from '/home/sutripa/eumicrobe_db_check/eumicrocheck/src/components/pages/JBrowse Writeup.pdf';
import "/home/sutripa/eumicrobe_db_check/eumicrocheck/src/components/pages/styless.css";
 import AllPages from '../pdf/allpages';
const About = () => {
  return (
    <div className="About">
    
      <h4>Eumicrobedb.org V12.0 and transcriptomics DB is maintained at CSIR-IICB in 
          collaboration with Center for Genome Research and Biocomputing, 
          Oregon state university</h4>
      
      <AllPages pdf={samplePDF} />

      <hr />
{/* <h4>Eumicrobedb.org V12.0 and transcriptomics DB is maintained at CSIR-IICB in 
          collaboration with Center for Genome Research and Biocomputing, 
          Oregon state university </h4>
      <div className="all-page-container">
        <AllPages pdf={samplePDF} /> */}
      </div>
    
  );
};
  
export default About;
