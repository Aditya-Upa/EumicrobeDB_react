import React from 'react';
import { useState, createContext } from 'react';
import View from '../../jbrowse/jbrowse';
import Trees from '../tree';
const jbrowsetree = () => {
// useState React Hook is used within function. An array is used where inputField is the first variable storing the initial state. setInputField is 
// the second variable which stores the fuction that is used to update the state. This JSX syntax is called array destructuring.    
const [inputField , setInputField] = useState({
    first_name: ''
    // first_name is a property within a JS object present inside the useState. It is has null value initially
  })
  
  
  //inputsHandler is an arrow function which takes e as prop
  const inputsHandler = (e) =>{
  // e is the synthetic (user-defined) event to update the value or state of the inputField   
  setInputField({
                  
        [e.target.name]: e.target.value     //changing the state of name variable ( assigned the value of the parameter first_name in the input div)as is typed in the placeholder in the input div
      })
  }
    return (
      <React.Fragment> 
          
    <View id = {inputField.first_name || "Phyag_NZFS3770"} />
{/* //       Ideally whatever input has been provided by the user is the correct basename of the files present within the genomedata folder. This basename 
//       is fed as value to the genomename prop which is used by the NAV JS Route  
//       if user doesn't select anything it will take Phyag_NZFS3770 as default */}
        <h15 style={{ textAlign:"left" }}> Organism ID Query Box </h15>  
        <small style={{ textAlign:"left" }}> (Enter correct organism ID into this box and click on Jbrowse in Navbar above)</small>


    <div>
    <input 
            type="text" 
            name="first_name" 
            // // on entering / changing any value within the placeholder, the inputsHandler function is called which is a function within App 
            // //component which  is called to change the state of the inputField variable
           onChange={inputsHandler} 
            placeholder="enter the organism id" 
            value={inputField.first_name}
            />
            </div>

      <h3 style={{ textAlign:"left" }}> Organism List </h3> 
//       <div>Organism ID Search Box </div> 
//         <div className="Tree"> <Trees /> </div> {/* Tree is a component imported from another JS file. It is used to generate a 
//          tree-like structure using organism data which has currently been hardcoded into the program */}

      </React.Fragment>
    );
}
export default jbrowsetree;