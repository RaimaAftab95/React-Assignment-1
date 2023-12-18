import React from "react";

const  MyButton = ({ onClick, className, children }) => {
    return (
      <button type="button" onClick={onClick} className={className}>
        {children}
      </button>
    );
  };
  
  export default  MyButton;