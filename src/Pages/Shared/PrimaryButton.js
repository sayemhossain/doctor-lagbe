import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn btn-primary text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-3">
      {children}
    </button>
  );
};

export default PrimaryButton;
