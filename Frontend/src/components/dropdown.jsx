import React from "react";

const Dropdown = ({ listofitems }) => {
  return (
    <div>
      <select className="w-[20rem] border border-gray-300 m-1 p-2.5  bg-gray-100 text-gray-400 relative justify-center items-center ">
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
