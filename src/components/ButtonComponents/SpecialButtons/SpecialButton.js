import React from "react";

const SpecialButton = ({specialItem}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{specialItem}</button>
    </>
  );
};


export default SpecialButton;