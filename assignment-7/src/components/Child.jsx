import React, { useState } from "react";

export const Child = ({ CallBack }) => {
  const [activecolor, setactiveColor] = useState("");

  const handelChange = (e) => {
    const { value } = e.target;
    setactiveColor(value);
    CallBack(value);
  };

  return (
    <div>
      <input type="text" value={activecolor} onChange={handelChange} />
    </div>
  );
};


// import React, { useState } from 'react';

// export const Child = ({ onInputChange }) => {
//   const [inputColor, setInputColor] = useState('');

//   // Function to handle input change and send data to parent
//   const handleInputChange = (e) => {
//     const { value } = e.target;
//     setInputColor(value);
//     onInputChange(value); // Send input data to parent
//   };

//   return (
//     <div>
//       <label>Enter Color:</label>
//       <input type='text' value={inputColor} onChange={handleInputChange} />
//     </div>
//   );
// };
