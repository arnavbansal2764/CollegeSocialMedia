import React from "react";

export const Button = ({ name }) => {
  return (
    <>
      <div>
        <button className="px-16 py-2.5 rounded bg-blue-500 text-white m-4">
          {name}
        </button>
      </div>
    </>
  );
};

export default Button;
