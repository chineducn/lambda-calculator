import React from "react";

const OperatorButton = ({ operatorItem, key }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{operatorItem}</button>
    </>
  );
};


export default OperatorButton;