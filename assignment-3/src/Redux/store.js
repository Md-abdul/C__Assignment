

import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as noteReducer } from "./reducer";

const rootReducer = combineReducers({ noteReducer });

const initialState = {
  noteReducer: {
    notes: JSON.parse(localStorage.getItem('notes')) || [],
  },
};

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);
