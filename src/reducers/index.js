import usersReducer from "./users";
import questions from "./questions";
import { combineReducers } from "redux";

export const reducers = combineReducers({
    users: usersReducer,
    questions,
})