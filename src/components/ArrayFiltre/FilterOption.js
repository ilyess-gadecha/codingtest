import React, { useState } from "react";
import { FaCaretDown } from 'react-icons/fa';
import './Filtrage.css';

function FilterOption({ optionName }) {
  // State to manage the visibility of the filter options
  const [isOpen, setIsOpen] = useState(false);

  // State to store the selected filter option
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to toggle the options' visibility
  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle option selection
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the options list when an option is selected
  };

  return (
    <div className="filter-dropdown">
      {/* Filter Name */}
      <div className={`filter-header ${isOpen ? "open" : ""}`} onClick={toggleOptions}>
        <div className="filter-header-content">
          <h6>{optionName}</h6>
          <FaCaretDown className={`caret ${isOpen ? "open" : ""}`} />
        </div>
      </div>
      {isOpen && (
     <ul className="filter-options">
     <li>
       <input type="checkbox" id="element1" />
       <label htmlFor="element1">
         <span className="checkbox-label-text">Element A</span>
       </label>
     </li>
     <li>
       <input type="checkbox" id="element2" />
       <label htmlFor="element2">
         <span className="checkbox-label-text">Element B</span>
       </label>
     </li>
   </ul>
   
      )}
    </div>
  );
}

export default FilterOption;
