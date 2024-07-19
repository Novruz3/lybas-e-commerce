import React, { useState } from 'react';

function Toggle() {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={"md:w-10 md:h-5 w-10 h-4 flex items-center rounded-full p-1 cursor-pointer " + (toggle ? 'bg-green-600' : 'bg-gray-300')}
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <div
        className={
          "bg-white md:w-4 md:h-4 h-3 w-3 rounded-full shadow-md transform duration-300 ease-in-out " +
          (toggle ? ' transform translate-x-4' : '')
        }
      ></div>
    </div>
  );
}

export default Toggle;
