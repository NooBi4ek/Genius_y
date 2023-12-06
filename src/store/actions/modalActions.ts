import { ReactNode } from 'react';

export const CHANGE_MODAL_STATUS = 'CHANGE_MODAL_STATUS';

export interface ChangeModalStatus {
  status: boolean;
  content: ReactNode | null;
}

export const changeModalStatus = ({ status, content }: ChangeModalStatus) => ({
  type: CHANGE_MODAL_STATUS,
  payload: {
    status,
    content,
  },
});
