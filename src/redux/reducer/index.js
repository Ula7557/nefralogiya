import { combineReducers } from "redux";
import {reducer} from './reducer'
export const reducers = combineReducers ({
    data:reducer
})