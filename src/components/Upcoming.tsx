import { FC, useEffect, useState } from 'react';
import Container from './Container';
import { Box, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { getUpcomingData } from '../store/reducers/upcomingReducer';
import { getUpcomingDataServer } from '../store/actions/upcomingActions';

import UpcomingCard from './UpcomingCard';
import { COUNT_ELEMENT_PER_PAGE } from '../lib/constants/countElementPerPage';
import Pagination from './Pagination';
import EmptyCard from './EmptyCard';

const Upcoming: FC = () => {
  const dispatch = useDispatch();
  const upcomingData = useSelector(getUpcomingData);
  const [page, SetPage] = useState(1);

  const emptyCard = Array(3)
    .fill(null)
    .map((_, index) => (
      <EmptyCard height="200px" text="Upcoming data is empty" key={index} />
    ));

  const paginationStart =
    page * COUNT_ELEMENT_PER_PAGE - COUNT_ELEMENT_PER_PAGE;
  const paginationEnd = page * COUNT_ELEMENT_PER_PAGE;

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    SetPage(value);
  };
  useEffect(() => {
    dispatch(getUpcomingDataServer());
  }, []);

  return (
    <Box>
      <Container>
        <Typography variant="h4" color="white">
          Upcoming hot sales
        </Typography>
        <Stack flexDirection="row" flexWrap="wrap" gap="20px" mt="24px">
          {upcomingData.length
            ? upcomingData
                .slice(paginationStart, paginationEnd)
                .map((cryptoEvent) => (
                  <UpcomingCard key={cryptoEvent.id} card={cryptoEvent} />
                ))
            : emptyCard}
        </Stack>
        <Pagination
          count={Math.ceil(upcomingData.length / COUNT_ELEMENT_PER_PAGE)}
          variant="outlined"
          onChange={handlePaginationChange}
        />
      </Container>
    </Box>
  );
};

export default Upcoming;
