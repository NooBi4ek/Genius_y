import { FC } from 'react';
import MainLayout from './layout/MainLayout';
import { Box } from '@mui/material';
import './App.css';
import Modal from './layout/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        backgroundColor: '#050810',
      }}
    >
      <MainLayout />
      <Modal />
      <ToastContainer />
    </Box>
  );
};

export default App;
