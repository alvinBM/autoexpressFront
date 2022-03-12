// Store/configureStore.js

import { createStore, combineReducers } from "redux";
import {panierReducer} from "./reducers/panierReducer";

export default createStore(
    combineReducers({ panierReducer : panierReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //For redux devtool extension
);
