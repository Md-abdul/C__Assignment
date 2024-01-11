import React, { useEffect, useRef, useState } from "react";

export const InputCounter = () => {
  const [textCount, setTextCount] = useState(0);
  const [text, setText] = useState("");
  const charLimit = 10;
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handelChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setTextCount(newText.length);

    if(newText.length === charLimit){
        alert("YOU CAN'TYPE MORE THAN 10 WORDS")
    }
  };


  return (
    <>
      <input
        type="text"
        placeholder="Your Text"
        onChange={handelChange}
        ref={ref}
        maxLength={charLimit}
        style={{
          width: "250px",
          height: "25px",
          padding: "5px",
          fontSize: "20px",
          border: "2px solid red",
        }}
      />
      <h1>
        Text Counter = {textCount}/{charLimit}
      </h1>
    </>
  );
};
