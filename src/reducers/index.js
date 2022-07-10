import usersReducer from "./users";
import questions from "./questions";
import authedReducer from "./authed";
import { combineReducers } from "redux";

export const reducers = combineReducers({
    users: usersReducer,
    questions,
    authed: authedReducer,
})