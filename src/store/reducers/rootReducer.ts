import { combineReducers } from "redux";
import { UpComingInitialType, upcomingReducer } from "./upcomingReducer";
import { BrowseInitialType, browseReducer } from "./browseReducer";

export interface RootReducer {
  upcoming: UpComingInitialType;
  browse: BrowseInitialType;
}

export const rootReducer = combineReducers({
  upcoming: upcomingReducer,
  browse: browseReducer,
});
