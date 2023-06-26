// importation
import { combineReducers } from "redux";
import userReducer from "./user";
// create rootReducer
const rootReducer = combineReducers({ userReducer });
// export
export default rootReducer;
