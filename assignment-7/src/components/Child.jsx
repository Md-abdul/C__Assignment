import React, { useState } from "react";

export const Child = ({ getcolour }) => {
  const [activeColour, setActivecolour] = useState();

  const handelChange = (e) => {
    const { value } = e.target;
    setActivecolour(value);
    getcolour(value);
  };

  return (
    <div>
      <input
        type="text"
        aria-label="value"
        onChange={handelChange}
        value={activeColour}
      />
    </div>
  );
};
