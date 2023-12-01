import { Box, Container, Typography, Stack } from '@mui/material';
import { FC } from 'react';
import BrowseCard from './BrowseCard';

const mock = [
  {
    title: 'Crypto Event 1',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1100.jpg',
    subtitle:
      'Join us for the exciting launch of a groundbreaking new cryptocurrency that promises to revolutionize the digital finance industry. Explore innovative features, meet the creators, and learn about the future of decentralized finance.',
    raised: 68,
    raisedCrpt: 'BTC',
    tokensAllocation: 75,
    Participants: 63,
    ParticipantsTotal: 66,
    status: 'completed',
    finishDate: '2024-01-04T20:53:46.692Z',
    id: '1',
  },
  {
    title: 'Blockchain Summit',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/639.jpg',
    subtitle:
      'Explore the future of blockchain technology at our Blockchain Summit event. Engage with industry experts, discover emerging trends, and gain insights into how blockchain is reshaping various sectors, from finance to healthcare and beyond.',
    raised: 80,
    raisedCrpt: 'ETH',
    tokensAllocation: 20,
    Participants: 77,
    ParticipantsTotal: 87,
    status: 'active',
    finishDate: '2024-07-01T22:54:32.502Z',
    id: '2',
  },
  {
    title: 'Decentralized Finance Expo',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/92.jpg',
    subtitle:
      'Join us for a deep dive into the world of decentralized finance (DeFi). Learn about DeFi protocols, yield farming, and the future of financial services on the blockchain. Engage with leading DeFi projects and industry pioneers.',
    raised: 61,
    raisedCrpt: 'BNB',
    tokensAllocation: 46,
    Participants: 70,
    ParticipantsTotal: 65,
    status: 'active',
    finishDate: '2024-10-07T11:45:35.248Z',
    id: '3',
  },
  {
    title: 'NFT Revolution',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/206.jpg',
    subtitle:
      'Dive into the world of Non-Fungible Tokens (NFTs) and their transformative impact on art, gaming, and digital collectibles. Learn about the latest NFT trends, marketplaces, and the future of unique digital assets.',
    raised: 60,
    raisedCrpt: 'SOL',
    tokensAllocation: 86,
    Participants: 31,
    ParticipantsTotal: 30,
    status: 'upcoming',
    finishDate: '2024-07-27T15:56:34.381Z',
    id: '4',
  },
  {
    title: 'Crypto Innovators Hackathon',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1030.jpg',
    subtitle:
      'Calling all developers, designers, and crypto enthusiasts! Participate in our Crypto Innovators Hackathon and showcase your skills by building innovative blockchain solutions. Win exciting prizes, mentorship opportunities, and network with industry leaders.',
    raised: 60,
    raisedCrpt: 'DOT',
    tokensAllocation: 4,
    Participants: 94,
    ParticipantsTotal: 61,
    status: 'completed',
    finishDate: '2024-02-24T16:04:03.167Z',
    id: '5',
  },
  {
    title: 'Web3 Summit',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/602.jpg',
    subtitle:
      'Discover the future of the internet with Web3 technologies. Learn about decentralized applications, identity solutions, and the evolution of the internet towards a user-centric, privacy-focused ecosystem. Engage with Web3 pioneers and thought leaders.',
    raised: 58,
    raisedCrpt: 'ATOM',
    tokensAllocation: 18,
    Participants: 28,
    ParticipantsTotal: 26,
    status: 'active',
    finishDate: '2024-01-03T04:23:41.023Z',
    id: '6',
  },
  {
    title: 'Staking and Yield Farming Workshop',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/715.jpg',
    subtitle:
      'Learn the art of staking and yield farming in the cryptocurrency ecosystem. Understand different staking protocols, liquidity provision, and maximize your earnings through yield farming strategies. Dive into the world of DeFi yield optimization.',
    raised: 70,
    raisedCrpt: 'UNI',
    tokensAllocation: 58,
    Participants: 5,
    ParticipantsTotal: 43,
    status: 'active',
    finishDate: '2024-05-03T21:20:59.078Z',
    id: '7',
  },
  {
    title: 'NFT Masterclass',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/954.jpg',
    subtitle:
      'Dive deep into the world of Non-Fungible Tokens (NFTs) with our NFT Masterclass. Explore the creation, trading, and investment strategies for NFTs. Learn from successful NFT artists, collectors, and market analysts. Unlock the potential of digital art ownership.',
    raised: 24,
    raisedCrpt: 'XRP',
    tokensAllocation: 60,
    Participants: 70,
    ParticipantsTotal: 68,
    status: 'active',
    finishDate: '2024-09-17T16:47:59.124Z',
    id: '8',
  },
  {
    title: 'Crypto Investment Symposium',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1176.jpg',
    subtitle:
      'Explore the art and science of crypto investments at our Crypto Investment Symposium. Gain insights into portfolio diversification, risk management, and emerging investment opportunities in the ever-changing crypto market. Connect with top investment strategists and analysts.',
    raised: 93,
    raisedCrpt: 'LINK',
    tokensAllocation: 67,
    Participants: 8,
    ParticipantsTotal: 89,
    status: 'active',
    finishDate: '2024-02-17T19:22:56.189Z',
    id: '9',
  },
  {
    title: 'DeFi Summit 2024',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/27.jpg',
    subtitle:
      'Immerse yourself in the world of decentralized finance at our DeFi Summit 2024. Explore the latest DeFi protocols, yield optimization strategies, and lending platforms. Engage with DeFi developers, investors, and thought leaders. Discover the future of open finance.',
    raised: 71,
    raisedCrpt: 'DOGE',
    tokensAllocation: 79,
    Participants: 80,
    ParticipantsTotal: 100,
    status: 'active',
    finishDate: '2024-10-22T13:35:46.294Z',
    id: '10',
  },
  {
    title: 'Metaverse Conference',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/289.jpg',
    subtitle:
      'Step into the future of digital reality at our Metaverse Conference. Explore virtual worlds, blockchain-based gaming, and immersive experiences. Learn about NFT-based virtual real estate, social metaverse platforms, and the evolution of digital ecosystems.',
    raised: 46,
    raisedCrpt: 'LTC',
    tokensAllocation: 84,
    Participants: 94,
    ParticipantsTotal: 81,
    status: 'active',
    finishDate: '2024-05-11T04:28:59.566Z',
    id: '11',
  },
  {
    title: 'Crypto Art Showcase',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1042.jpg',
    subtitle:
      'Immerse yourself in the world of crypto art at our Crypto Art Showcase. Discover unique digital artworks, meet talented crypto artists, and learn about the intersection of art and blockchain technology. Collect exclusive NFT artworks and support digital creativity.',
    raised: 31,
    raisedCrpt: 'XLM',
    tokensAllocation: 48,
    Participants: 13,
    ParticipantsTotal: 6,
    status: 'active',
    finishDate: '2024-03-25T14:18:40.729Z',
    id: '12',
  },
  {
    title: 'NFT Gaming Expo',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/331.jpg',
    subtitle:
      'Experience the future of gaming at our NFT Gaming Expo. Dive into blockchain-based games, play-to-earn mechanics, and virtual reality experiences. Meet game developers, explore gaming metaverse projects, and discover the potential of NFTs in the gaming industry.',
    raised: 56,
    raisedCrpt: 'MATIC',
    tokensAllocation: 3,
    Participants: 7,
    ParticipantsTotal: 79,
    status: 'active',
    finishDate: '2024-08-19T06:26:19.065Z',
    id: '13',
  },
  {
    title: 'Blockchain for Social Impact Summit',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/368.jpg',
    subtitle:
      'Explore the potential of blockchain technology in driving positive social change. Learn about blockchain solutions for humanitarian aid, sustainable development, and environmental conservation. Engage with NGOs, activists, and tech innovators working towards social impact.',
    raised: 6,
    raisedCrpt: 'XTZ',
    tokensAllocation: 46,
    Participants: 50,
    ParticipantsTotal: 26,
    status: 'active',
    finishDate: '2023-12-30T23:19:46.941Z',
    id: '14',
  },
  {
    title: 'Crypto Ethics and Regulation Forum',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1108.jpg',
    subtitle:
      'Delve into the ethical considerations and regulatory challenges of the crypto industry. Discuss topics related to consumer protection, data privacy, and regulatory compliance. Engage with legal experts, policymakers, and industry insiders shaping the future of crypto ethics.',
    raised: 51,
    raisedCrpt: 'DASH',
    tokensAllocation: 41,
    Participants: 22,
    ParticipantsTotal: 9,
    status: 'active',
    finishDate: '2024-02-01T18:35:31.078Z',
    id: '15',
  },
];

const Browse: FC = () => {
  return (
    <Box>
      <Container>
        <Typography variant="h4" color="white">
          Browse Projects
        </Typography>
        <Stack flexDirection="row" flexWrap="wrap" gap="20px" mt="24px">
          {mock.map((cryptoEvents) => (
            <BrowseCard
              title={cryptoEvents.title}
              avatar={cryptoEvents.avatar}
              subtitle={cryptoEvents.subtitle}
              raisedTokens={cryptoEvents.raised}
              tokenType={cryptoEvents.raisedCrpt}
              allocationTokens={cryptoEvents.tokensAllocation}
              Participants={cryptoEvents.Participants}
              ParticipantsTotal={cryptoEvents.ParticipantsTotal}
              status={cryptoEvents.status}
              timeOut={cryptoEvents.finishDate}
              key={cryptoEvents.id}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Browse;
