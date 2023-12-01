import { FC } from 'react';
import { Avatar, Box, Card, Stack, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

interface Props {
  avatar: string;
  title: string;
  timeOut: string | Date;
  raisedTokens: number;
  allocationTokens: number;
  tokenType: string;
  status: string;
  Participants: number;
  ParticipantsTotal: number;
  subtitle: string;
}

const BrowseCard: FC<Props> = ({
  avatar,
  title,
  timeOut,
  raisedTokens,
  allocationTokens,
  tokenType,
  status,
  Participants,
  ParticipantsTotal,
  subtitle,
}) => {
  return (
    <Card
      sx={{
        backgroundColor: '#101828',
        borderRadius: '30px',
        padding: '30px',
        margin: '20px',
      }}
    >
      <Stack flexDirection="row">
        <Stack flexDirection="column" flex="1" alignItems="flex-start">
          <Typography
            sx={{
              display: 'inline-block',
              fontSize: '13px',
              color: 'green',
              mb: '19px',
              padding: '5px 10px',
              border: '1px solid #1C263C',
              borderRadius: '5px',
              backgroundColor: '#1C263C',
            }}
          >
            {status}
          </Typography>
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
      <Stack>
        <Typography color="#7787B1" fontSize="14px" mt="26px" width="320px">
          {subtitle}
        </Typography>
      </Stack>
      <Stack>
        <Stack flexDirection="row" gap="5px" mt="28px">
          <Box flex="1">
            <Typography color="#7787B1" fontSize="14px">
              Raised:
            </Typography>
          </Box>
          <Typography color="#fff" fontSize="14px">
            {`${raisedTokens} ${tokenType}`}
          </Typography>
        </Stack>

        <Stack flexDirection="row" gap="10px" mt="4px">
          <Box flex="1">
            <Typography color="#7787B1" fontSize="14px">
              Tokens allocation:
            </Typography>
          </Box>
          <Typography color="#fff" fontSize="14px">
            {`${allocationTokens} ${tokenType}`}
          </Typography>
        </Stack>
      </Stack>
      <Stack flexDirection="row" mt="36px">
        <Typography flex="1" fontSize="14px" color="#B9CAED">
          Participants: {Participants} / {ParticipantsTotal}
        </Typography>
        <Typography fontSize="14px" color="#B9CAED">
          35%
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
        value={65}
      />
      <Typography textAlign="center" mt="31px" color="#7787B1" fontSize="12px">
        Powered by Cardano
      </Typography>
    </Card>
  );
};

export default BrowseCard;
