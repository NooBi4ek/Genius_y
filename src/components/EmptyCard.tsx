import { Card, Stack, Typography } from '@mui/material';
import { FC } from 'react';

interface Props {
  height: string;
  text: string;
}

const EmptyCard: FC<Props> = ({ height, text }) => {
  return (
    <Card
      sx={{
        backgroundColor: '#101828',
        borderRadius: '30px',
        padding: '30px',
        flex: '0 0 calc(33.33% - 15px)',
        height: height,
      }}
    >
      <Stack height="100%" justifyContent="center" alignItems="center">
        <Typography variant="h5" color="#fff">
          {text}
        </Typography>
      </Stack>
    </Card>
  );
};

export default EmptyCard;
