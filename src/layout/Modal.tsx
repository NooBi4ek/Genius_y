import { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Stack, styled } from '@mui/material';
import { useSelector } from 'react-redux';
import {
  getModalContent,
  getModalStatus,
} from '../store/reducers/modalReducer';

const Modal: FC = () => {
  const status = useSelector(getModalStatus);
  const content = useSelector(getModalContent);

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
        <CloseIcon />
        <Stack>{content}</Stack>
      </ModalContent>
    </Box>
  );
};

export default Modal;

const ModalContent = styled(Box)({
  width: '436px',
  maxWidth: '95%',
  background: '#202740',
});
