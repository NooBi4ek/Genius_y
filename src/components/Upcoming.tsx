import { FC } from 'react';
import Container from './Container';

import { Box, Stack, Typography } from '@mui/material';
import UpcomingCard from './UpcomingCard';

const mock = [
  {
    title: 'Crypto Summit 2025',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1200.jpg',
    finishDate: '2025-04-15T14:30:00.000Z',
    raised: 2350000,
    raisedCrpt: 'ETH',
    tokensAllocation: 6500000,
  },
  {
    title: 'DeFi Revolution Conference',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1400.jpg',
    finishDate: '2025-07-22T10:45:00.000Z',
    raised: 3100000,
    raisedCrpt: 'BTC',
    tokensAllocation: 7200000,
  },
  {
    title: 'NFT Innovation Expo',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1600.jpg',
    finishDate: '2025-11-10T16:15:00.000Z',
    raised: 2700000,
    raisedCrpt: 'ADA',
    tokensAllocation: 7800000,
  },
];

const Upcoming: FC = () => {
  return (
    <Box>
      <Container>
        <Typography variant="h4" color="white">
          Upcoming hot sales
        </Typography>
        <Stack
          justifyContent="space-between"
          flexDirection="row"
          gap="20px"
          mt="24px"
        >
          {mock.map((cryptoEvents) => (
            <UpcomingCard
              avatar={cryptoEvents.avatar}
              title={cryptoEvents.title}
              timeOut={cryptoEvents.finishDate}
              tokenType={cryptoEvents.raisedCrpt}
              raisedTokens={cryptoEvents.raised}
              allocationTokens={cryptoEvents.tokensAllocation}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Upcoming;
