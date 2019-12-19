import { createStore, combineReducers } from "redux";
import { app } from "./reducers/app";

const reducers = combineReducers({
  app
});

export const store = createStore(reducers);
