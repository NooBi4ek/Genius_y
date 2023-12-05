import { Avatar, Card, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { splitNumber } from "../lib/splitNumber";
import { UpcomingItem } from "../models/UpComingItems";

interface Props {
  card: UpcomingItem;
}

const UpcomingCard: FC<Props> = ({ card }) => {
  const { avatar, title, finishDate, raised, tokensAllocation, raisedCrpt } =
    card;

  return (
    <Card
      sx={{
        backgroundColor: "#101828",
        borderRadius: "30px",
        padding: "30px",
        flex: "1 0 calc(33.33% - 15px)",
      }}
    >
      <Stack gap="34px" flexDirection="row">
        <Avatar
          sx={{
            width: "76px",
            height: "76px",
            backgroundColor: "#3C4A64",
          }}
          variant="rounded"
          src={avatar}
        />
        <Stack>
          <Typography sx={{ color: "#FFFFFF" }}>{title}</Typography>
          <Typography sx={{ color: "#7787B1", fontSize: "14px", mt: "7px" }}>
            Finish:
            <Typography
              sx={{ color: "#57FEA8", marginLeft: "5px", fontSize: "14px" }}
              component="span"
            >
              02d : 02h : 26m : 38s
            </Typography>
          </Typography>
        </Stack>
      </Stack>
      <Stack>
        <Stack flexDirection="row" gap="5px" mt="28px">
          <Typography color="#7787B1" fontSize="14px">
            Raised:
          </Typography>
          <Typography color="#fff" fontSize="14px">
            {`${splitNumber(raised)} ${raisedCrpt}`}
          </Typography>
        </Stack>

        <Stack flexDirection="row" gap="5px" mt="4px">
          <Typography color="#7787B1" fontSize="14px">
            Tokens allocation:
          </Typography>
          <Typography color="#fff" fontSize="14px">
            {`${splitNumber(tokensAllocation)} ${raisedCrpt}`}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default UpcomingCard;
