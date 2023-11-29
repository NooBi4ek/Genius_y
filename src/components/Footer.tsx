import { FC } from 'react';
import LogoSvg from './LogoSvg';
import LinkText from './LinkText';

import { Box, Container, Stack, Typography } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer: FC = () => {
  return (
    <Box
      sx={{
        color: '#fff',
      }}
    >
      <Container sx={{ maxWidth: '1440px', width: '95%' }}>
        <Stack
          sx={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            paddingRight: '50px',
            marginBottom: '20px',
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
              justifyContent: 'center',
              flex: 1,
              gap: '10px',
            }}
          >
            <InstagramIcon />
            <TelegramIcon />
            <PinterestIcon />
            <GoogleIcon />
            <TwitterIcon />
          </Box>
          <Box
            sx={{
              color: '#fff',
              display: 'flex',
              gap: '20px',
            }}
          >
            <Typography>Careers</Typography>
            <LinkText text="Genius Yield" />
            <LinkText text="Genius Academy" />
          </Box>
        </Stack>
        <Box
          sx={{
            marginBottom: '50px',
          }}
        >
          <Typography
            sx={{
              width: '300px',
            }}
          >
            Assisting early-stage startups attain speed, scale and edge.
          </Typography>
        </Box>
        <Box>
          <Stack
            sx={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              paddingRight: '50px',
              marginBottom: '20px',
            }}
          >
            <Box
              sx={{
                flex: 1,
              }}
            >
              <Typography
                sx={{
                  width: '390px',
                }}
              >
                Using Smart Contracts, Tokens and Crypto is always a risk. DYOR
                before investing.
              </Typography>
            </Box>
            <Typography>2022 Genius X - all rights reserved</Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
