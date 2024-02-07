import React, { useState } from "react";

export const ToogleText = () => {
  const [change, setChange] = useState(false);
  const [back, setBack] = useState(false);
  return (
    <>
      <button onClick={() => setChange(!change)}>
        {change ? "Hide Text" : "Show text"}
      </button>
      {change && <h1>"I am a Text you Toogle me useing this button ?"</h1>}

      <br />

      <button onClick={() => setBack(!back)}>{back ? "Light Theme" : "Dark Theme"}</button>
      {back && <div style={{ backgroundColor: "black", width:'100px', height:'100px' , alignItems:'center', border:'1px solid black' }}>bo</div>}
    </>
  );
};
