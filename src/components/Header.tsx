import { FC } from 'react';
import LogoSvg from './LogoSvg';
import { Box, Container, Stack, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import Button from './Button';

const Header: FC = () => {
  return (
    <Box>
      <Container sx={{ maxWidth: '1440px', width: '95%' }}>
        <Stack
          sx={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            paddingRight: '50px',
          }}
        >
          <Box
            sx={{
              svg: {
                width: '200px',
                height: '50px',
              },

              flex: 1,
            }}
          >
            <LogoSvg />
          </Box>
          <Box
            sx={{
              display: 'flex',
              color: '#fff',
              gap: '40px',
              marginRight: '20px',
            }}
          >
            <Typography>Markets</Typography>
            <Typography>How to invest</Typography>
            <Typography>My Portfolio</Typography>
            <Typography>Profile</Typography>
          </Box>
          <Box
            sx={{
              color: '#fff',
              display: 'flex',
              gap: '20px',
            }}
          >
            <Button variant="contained" size="small" text="Connect Wallet" />
            <InstagramIcon />
            <TelegramIcon />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
