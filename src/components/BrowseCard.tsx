import { FC } from 'react';
import { Avatar, Box, Card, Stack, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import TypographyStatus from './TypographyStatus';
import { BrowseItems } from '../models/BrowseItems';

interface Props {
  card: BrowseItems;
}

const BrowseCard: FC<Props> = ({ card }) => {
  const {
    title,
    avatar,
    subtitle,
    raised,
    raisedCrpt,
    tokensAllocation,
    Participants,
    ParticipantsTotal,
    finishDate,
    status,
    id,
  } = card;

  const PercentParticipants = Math.floor(
    (Participants / ParticipantsTotal) * 100,
  );
  return (
    <Card
      sx={{
        backgroundColor: '#101828',
        borderRadius: '30px',
        padding: '30px',
        flex: '0 0 calc(33.33% - 15px)',
      }}
    >
      <Stack height="100%">
        <Stack flexDirection="row">
          <Stack flexDirection="column" alignItems="flex-start">
            <TypographyStatus status={status} />
            <Typography fontSize="28px" color="#fff" mb="14px">
              {title}
            </Typography>
            <Typography sx={{ color: '#7787B1', fontSize: '14px', mt: '7px' }}>
              Finish:
              <Typography
                sx={{ color: '#57FEA8', marginLeft: '5px', fontSize: '14px' }}
                component="span"
              >
                02d : 02h : 26m : 38s
              </Typography>
            </Typography>
          </Stack>
          <Avatar
            sx={{ width: '112px', height: '112px' }}
            variant="rounded"
            src={avatar}
          />
        </Stack>
        <Stack flex="1">
          <Typography color="#7787B1" fontSize="14px" mt="26px">
            {subtitle}
          </Typography>
        </Stack>
        <Stack>
          <Stack flexDirection="row" gap="5px" mt="28px">
            <Box>
              <Typography color="#7787B1" fontSize="14px">
                Raised:
              </Typography>
            </Box>
            <Typography color="#fff" fontSize="14px">
              {`${raised} ${raisedCrpt}`}
            </Typography>
          </Stack>

          <Stack flexDirection="row" gap="10px" mt="4px">
            <Box>
              <Typography color="#7787B1" fontSize="14px">
                Tokens allocation:
              </Typography>
            </Box>
            <Typography color="#fff" fontSize="14px">
              {`${tokensAllocation} ${raisedCrpt}`}
            </Typography>
          </Stack>
        </Stack>
        <Stack flexDirection="row" mt="36px" justifyContent="space-between">
          <Typography fontSize="14px" color="#B9CAED">
            Participants: {Participants}/{ParticipantsTotal}
          </Typography>
          <Typography fontSize="14px" color="#B9CAED">
            {`${PercentParticipants}%`}
          </Typography>
        </Stack>
        <LinearProgress
          color="success"
          sx={{
            fontSize: '10px',
            mt: '13px',
            height: '10px',
            borderRadius: '10px',
          }}
          variant="determinate"
          value={PercentParticipants > 100 ? 100 : PercentParticipants}
        />
        <Typography
          textAlign="center"
          mt="31px"
          color="#7787B1"
          fontSize="12px"
        >
          Powered by Cardano
        </Typography>
      </Stack>
    </Card>
  );
};

export default BrowseCard;
