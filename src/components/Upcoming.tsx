import { ChangeEventHandler, FC, useEffect, useState } from "react";
import Container from "./Container";
import { Box, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { getUpcomingData } from "../store/reducers/upcomingReducer";
import { getUpcomingDataServer } from "../store/actions/upcomingActions";

import UpcomingCard from "./UpcomingCard";
import { COUNT_ELEMENT_PER_PAGE } from "./Browse";
import StyledPagination from "./Browse";
import Pagination from "./Pagination";

const Upcoming: FC = () => {
  const dispatch = useDispatch();
  const upcomingData = useSelector(getUpcomingData);
  const [page, SetPage] = useState(1);

  const paginationStart =
    page * COUNT_ELEMENT_PER_PAGE - COUNT_ELEMENT_PER_PAGE;
  const paginationEnd = page * COUNT_ELEMENT_PER_PAGE;

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number
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
        <Stack
          flexDirection="row"
          flexWrap="wrap"
          gap="20px"
          mt="24px"
          mb="71px"
        >
          {upcomingData
            .slice(paginationStart, paginationEnd)
            .map((cryptoEvent) => (
              <UpcomingCard card={cryptoEvent} />
            ))}
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
