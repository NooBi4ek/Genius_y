import { FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Upcoming from '../components/Upcoming';
import Browse from '../components/Browse';
import { Box, Stack } from '@mui/material';

const MainLayout: FC = () => {
  return (
    <Stack minWidth="100vw" minHeight="100vh">
      <Header />
      <Box sx={{ flex: 1 }}>
        <Upcoming />
        <Browse />
      </Box>
      <Footer />
    </Stack>
  );
};

export default MainLayout;
