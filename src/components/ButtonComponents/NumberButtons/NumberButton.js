import React from "react";

const NumberButton = ({ numberItem }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{numberItem}</button>
    </>
  );
};


export default NumberButton;