import React from "react";
import FilterOption from "./FilterOption.js"; // Import the FilterOption component
import './Filtrage.css';

function Filtrage() {
  return (
    <div className="filtrage">
      <h5>Filters (131 Results)</h5>
      <FilterOption optionName="Sectors" />
      <FilterOption optionName="Smart Beta" />
      <FilterOption optionName="ESG" />
      <FilterOption optionName="SFDR" />
      <FilterOption optionName="Geographical Exposure" />
        <FilterOption optionName="Asset Class" />
        <FilterOption optionName="Fund Domicile" />
        <FilterOption optionName="Fund Currency" />
        <FilterOption optionName="Fund Size" />
        <FilterOption optionName="Fund Currency" />
        <FilterOption optionName="Fund Size" />
        <FilterOption optionName="Fund Currency" />
        <FilterOption optionName="Fund Size" />


    </div>
  );
}

export default Filtrage;
