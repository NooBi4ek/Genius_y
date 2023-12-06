import { combineReducers } from 'redux';
import { UpComingInitialType, upcomingReducer } from './upcomingReducer';
import { BrowseInitialType, browseReducer } from './browseReducer';
import { ModalInitialType, modalReducer } from './modalReducer';

export interface RootReducer {
  upcoming: UpComingInitialType;
  browse: BrowseInitialType;
  modal: ModalInitialType;
}

export const rootReducer = combineReducers({
  upcoming: upcomingReducer,
  browse: browseReducer,
  modal: modalReducer,
});
