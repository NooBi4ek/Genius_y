import { Box, Container, Typography, Stack, Chip } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import BrowseCard from './BrowseCard';
import { useDispatch, useSelector } from 'react-redux';
import { getBrowseData } from '../store/reducers/browseReducer';
import { getBrowseDataServer } from '../store/actions/browseActions';
import { BrowseStatus } from '../models/BrowseItems';
import Pagination from './Pagination';
import { COUNT_ELEMENT_PER_PAGE } from '../lib/constants/countElementPerPage';

type ChipStatus = BrowseStatus | '';

const chipItems = [
  { id: 1, status: 'All project', value: '' },
  { id: 2, status: 'Active', value: 'active' },
  { id: 3, status: 'Upcoming', value: 'upcoming' },
  { id: 3, status: 'Completed', value: 'completed' },
];

const Browse: FC = () => {
  const dispatch = useDispatch();
  const browseData = useSelector(getBrowseData);
  const [currentStatus, setCurrentStatus] = useState<ChipStatus>('');
  const [page, setPage] = useState(1);
  const browseDataFilter = browseData.filter(
    (cryptoEvent) =>
      cryptoEvent.status === currentStatus || currentStatus === '',
  );

  const paginationStart =
    page * COUNT_ELEMENT_PER_PAGE - COUNT_ELEMENT_PER_PAGE;
  const paginationEnd = page * COUNT_ELEMENT_PER_PAGE;

  useEffect(() => {
    dispatch(getBrowseDataServer());
  }, []);

  const handleStatusClick = (status: ChipStatus) => () => {
    setCurrentStatus(status);
    setPage(1);
  };

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  return (
    <Box>
      <Container>
        <Stack flexDirection="row" justifyContent="space-between">
          <Typography variant="h4" color="white">
            Browse Projects
          </Typography>
          <Stack gap="10px" flexDirection="row">
            {chipItems.map((status) => (
              <Chip
                label={status.status}
                sx={{
                  background:
                    status.value === currentStatus
                      ? 'linear-gradient(90deg, rgba(255,181,74,1) 0%, rgba(255,74,139,1) 100%)'
                      : '#1B2335',
                  color: '#fff',
                  cursor: 'pointer',
                }}
                onClick={handleStatusClick(status.value as ChipStatus)}
              />
            ))}
          </Stack>
        </Stack>
        <Stack flexDirection="row" flexWrap="wrap" gap="20px" mt="24px">
          {browseDataFilter
            .slice(paginationStart, paginationEnd)
            .map((cryptoEvents) => (
              <BrowseCard card={cryptoEvents} />
            ))}
        </Stack>
        <Pagination
          count={Math.ceil(browseDataFilter.length / COUNT_ELEMENT_PER_PAGE)}
          variant="outlined"
          onChange={handlePaginationChange}
        />
      </Container>
    </Box>
  );
};

export default Browse;
