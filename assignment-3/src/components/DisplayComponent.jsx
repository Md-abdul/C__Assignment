import React from "react";
import { connect } from "react-redux";

const DisplayComponent = ({ notes }) => {
  return (
    <div className="card mt-3 bg-light">
      <h2 className="card-header">Stored Notes (Descending Order)</h2>
      <div className="card-body p-0">
        <ul className="list-group list-group-flush">
          {notes.map((note, index) => (
            <li key={index} className="card">
              <strong>Date:</strong> {note.date},<strong>Title:</strong>{" "}
              {note.title},<strong>Description:</strong> {note.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notes: state.noteReducer.notes
    .slice()
    .sort((a, b) => b.timestamp - a.timestamp),
});

export default connect(mapStateToProps)(DisplayComponent);
