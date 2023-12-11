import { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Stack, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  getModalContent,
  getModalStatus,
} from '../store/reducers/modalReducer';
import { changeModalStatus } from '../store/actions/modalActions';

const Modal: FC = () => {
  const status = useSelector(getModalStatus);
  const content = useSelector(getModalContent);

  const dispatch = useDispatch();

  const handleCloseModalClick = () => {
    dispatch(changeModalStatus({ status: false, content: null }));
  };

  return (
    <Box
      sx={{
        display: status ? 'flex' : 'none',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        position: 'fixed',
        backdropFilter: 'blur(2px)',
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ModalContent>
        <Stack justifyContent="flex-end" flexDirection="row">
          <CloseIconMui onClick={handleCloseModalClick} />
        </Stack>
        <Stack justifyContent="center" padding="30px">
          {content}
        </Stack>
      </ModalContent>
    </Box>
  );
};

export default Modal;

const ModalContent = styled(Box)({
  width: '436px',
  maxWidth: '95%',
  background: '#202740',
  padding: '20px',
  borderRadius: '10px',
});

const CloseIconMui = styled(CloseIcon)({
  transition: '0.3s ease-in-out',
  ':hover': {
    color: '#fff',
  },
});
