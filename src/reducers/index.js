import { combineReducers } from "redux";
import UserAuth from "./user-auth";

const rootReducer = combineReducers({
    userAuth: UserAuth,
})

export default rootReducer;