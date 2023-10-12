

import { ADD_NOTE } from "./actionType";

export const addNote = (note) => {
  // Save the note to Local Storage
  localStorage.setItem('notes', JSON.stringify([note, ...JSON.parse(localStorage.getItem('notes') || '[]')]));

  return {
    type: ADD_NOTE,
    payload: note,
  };
};
