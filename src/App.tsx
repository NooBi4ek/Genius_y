import { FC } from 'react';
import MainLayout from './layout/MainLayout';
import { Box } from '@mui/material';
import './App.css';

const App: FC = () => {
  return (
    <Box sx={{ width: '100%', height: '100%', backgroundColor: '#050810' }}>
      <MainLayout />
    </Box>
  );
};

export default App;
