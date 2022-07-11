import usersReducer from "./users";
import questions from "./questions";
import authedReducer from "./authed";
import { combineReducers } from "redux";
import { loadingBarReducer  } from "react-redux-loading-bar";

export const reducers = combineReducers({
    users: usersReducer,
    questions,
    authed: authedReducer,
    loadingBar: loadingBarReducer,
})