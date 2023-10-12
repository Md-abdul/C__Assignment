

import { ADD_NOTE } from './actionType';

const initialState = {
  notes: JSON.parse(localStorage.getItem('notes')) || [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const updatedNotes = [action.payload, ...state.notes];
      // Save the updated notes to Local Storage
      localStorage.setItem('notes', JSON.stringify(updatedNotes));

      return {
        ...state,
        notes: updatedNotes,
      };
    default:
      return state;
  }
};
