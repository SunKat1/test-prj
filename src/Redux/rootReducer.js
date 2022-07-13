import { combineReducers } from "@reduxjs/toolkit";
import layoutReducer from './MainSlice'

export const rootReducer = combineReducers({
  layout: layoutReducer
})