import React, { useState } from "react";

const arr = [
  "Playing Cricket",
  "Playing Chess",
  "Playing football",
  "Playing Hocky",
];

export const Checkbox = () => {
  const [copyArr, setCopyArr] = useState(arr);
  const [selectedBoxes, setSelectedBoxes] = useState([]);

  const selectBox = (index) => {
    setSelectedBoxes((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter((selected) => selected !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  };

  const handelDelete = (indexItem) => {
    const filteredArr = copyArr.filter((item, index) => {
      return !selectedBoxes.includes(index);
    });
    setCopyArr(filteredArr);
    setSelectedBoxes([]);
  };

  return (
    <div>
      <ul>
        {copyArr.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={selectedBoxes.includes(index)}
              onChange={() => selectBox(index)}
            />
            {item}
            {selectedBoxes.includes(index) && (
              <button onClick={() => handelDelete(index)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
