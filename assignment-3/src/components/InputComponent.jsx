// import React, { useState } from "react";
// import { connect } from "react-redux";
// import { addNote } from "../Redux/action";

// const InputComponent = ({ addNote }) => {
//   const [date, setDate] = useState("");
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [timestamp, setTimestamp] = useState("");

//   const handleDateChange = (selectedDate) => {
//     setDate(selectedDate);
//     setTimestamp(new Date().getTime()); // Capture the current timestamp
//   };

//   const handleSubmit = () => {
//     const note = {
//       date,
//       title,
//       description,
//       timestamp,
//     };
//     addNote(note);
//     setDate("");
//     setTitle("");
//     setDescription("");
//     setTimestamp("");
//   };

//   return (
//     <div>
//       <input
//         type="date"
//         placeholder="Date"
//         value={date}
//         onChange={(e) => handleDateChange(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default connect(null, { addNote })(InputComponent);

import React, { useState } from "react";
import { connect } from "react-redux";
import { addNote } from "../Redux/action";
import "../style/style.css"
const InputComponent = ({ addNote }) => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleSubmit = () => {
    const note = {
      date,
      title,
      description,
    };
    addNote(note);
    setDate("");
    setTitle("");
    setDescription("");
  };

  return (
    <div className="card mt-3">
      <h2>Add a New Note</h2>
      <form>
        <div className="form-group card">
          <label>Date</label>
          <input
            type="date"
            className="form-control "
            placeholder="Date"
            value={date}
            onChange={(e) => handleDateChange(e.target.value)}
          />
        </div>
        <div className="form-group card">
          <label class="text-monospace">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group card">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-success mt-4"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect(null, { addNote })(InputComponent);
