import {
  CHANGE_MODAL_STATUS,
  ChangeModalStatus,
} from '../actions/modalActions';
import { RootReducer } from './rootReducer';

export interface ModalInitialType extends ChangeModalStatus {}

const ModalInitialState: ModalInitialType = {
  status: false,
  content: null,
};

export const modalReducer = (state = ModalInitialState, action: any) => {
  switch (action.type) {
    case CHANGE_MODAL_STATUS: {
      const { status, content } = action.payload;
      return { ...state, status, content };
    }

    default:
      return state;
  }
};

export const getModalStatus = (state: RootReducer) => state.modal.status;
export const getModalContent = (state: RootReducer) => state.modal.content;
