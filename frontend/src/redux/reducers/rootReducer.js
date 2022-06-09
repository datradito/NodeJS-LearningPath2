import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { cityReducer } from "./cityReducer";
import { itineraryReducer } from "./itineraryReducer";

const rootReducer = combineReducers({
    itineraryR: itineraryReducer,
    cityR: cityReducer,
    authR: authReducer
})

export default rootReducer