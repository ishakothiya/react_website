import { combineReducers } from "redux";

import { apiReducer } from "./apiReducer";
import { simpleReducer } from "./simpleReducer";


export const rootReducer = combineReducers({
    api : apiReducer,
    simple: simpleReducer
})