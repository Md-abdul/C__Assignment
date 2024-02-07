import React, { useState } from "react";
import { Child } from "./Child";

export const Parent = () => {
  const [UIcolor, setUIcolor] = useState(null);

  const parentCallBack = (color) => {
    setUIcolor(color);
  };

  return (
    <div>
      <div
        className="Box-color"
        style={{
          backgroundColor: `${UIcolor}`,
          border: "2px solid",
          width: "100px",
          height: "90px",
        }}
      >
        <h1>sjflksjlf</h1>
      </div>
      <Child CallBack={parentCallBack} />
    </div>
  );
};

// import React, { useState } from 'react';
// import { Child } from './Child';

// export const Parent = () => {
//   const [backgroundColor, setBackgroundColor] = useState('');

//   // Callback function to receive input from Child
//   const handleChildInput = (inputColor) => {
//     setBackgroundColor(inputColor);
//   };

//   return (
//     <div>
//       <div className='box' style={{ backgroundColor: backgroundColor }}>
//         <h2>Parent Component</h2>
//         <p>Background Color: {backgroundColor}</p>
//       </div>
//       <Child onInputChange={handleChildInput} />
//     </div>
//   );
// };

// // export default Parent;
