import React from "react";

const Dropdown = ({ listofitems }) => {
  return (
    <div className="w-[20em] p-1  ">
      <select className="w-[100%] p-2  bg-gray-100 text-gray-400 border relative justify-center items-center ">
        {listofitems.map((item) => {
          return (
            <option key={item} value={item} className="text-2xl text-">
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
