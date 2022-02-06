import React from 'react';
import samplePDF from '/home/sutripa/eumicrobe_db_check/eumicrocheck/src/components/pages/JBrowse_screenshots.pdf';
// import AllPages from '../pdf/allpages';
import SinglePage from '../pdf/singlepage';
import AllPages from '../pdf/allpages';
import "/home/sutripa/eumicrobe_db_check/eumicrocheck/src/components/pages/styless.css";
const Help = () => {
  return (
    <div className="About">

      <h3>For a detailed layout of JBrowse2 click <a href="https://jbrowse.org/jb2/docs/combined/"> HERE </a></h3>
{/* <h4>Given below describes the functionality of JBrowse2 on EumicrobeDB</h4>
      <SinglePage pdf={samplePDF} /> */}

      <hr />

      <h4>Given below is a brief description of the functionality of JBrowse2 on the beta EumicrobeDB app </h4>
      <div>
        <AllPages pdf={samplePDF} />
      </div>

      <hr />

{/* 
     <h4> To know about Jbrowse functionality   
        </h4>
      <a href="file:///src/components/pages/JBrowse_screenshots.pdf" target="_blank">.  Click here</a>
  */}
    </div>
  );
};
  
export default Help;
