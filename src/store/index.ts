import { combineReducers } from "redux"
import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import { authReduser } from "./auth-reduser"
import { userReduser } from "./user-reduser"

const rootReduser = combineReducers({
    authReduser,
    userReduser
})

export const store = createStore(rootReduser, composeWithDevTools())