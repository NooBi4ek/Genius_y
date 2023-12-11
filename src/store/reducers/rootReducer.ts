import { combineReducers } from 'redux';
import { UpComingInitialType, upcomingReducer } from './upcomingReducer';
import { BrowseInitialType, browseReducer } from './browseReducer';
import { ModalInitialType, modalReducer } from './modalReducer';
import { AuthInitialType, authReducer } from './authReducer';

export interface RootReducer {
  upcoming: UpComingInitialType;
  browse: BrowseInitialType;
  auth: AuthInitialType;
  modal: ModalInitialType;
}

export const rootReducer = combineReducers({
  upcoming: upcomingReducer,
  browse: browseReducer,
  modal: modalReducer,
  auth: authReducer,
});
