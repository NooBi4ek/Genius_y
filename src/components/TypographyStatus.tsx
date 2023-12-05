import { Typography, styled } from "@mui/material";
import { FC } from "react";
import { BrowseStatus } from "../models/BrowseItems";

interface Props {
  status: BrowseStatus;
}

const variantStyles = () => ({
  active: {
    color: "green",
  },
  completed: {
    color: "red",
  },
  upcoming: {
    color: "orange",
  },
});

const TypographyStatus: FC<Props> = ({ status }) => {
  return <StyledTypography status={status}>{status}</StyledTypography>;
};

export default TypographyStatus;

const StyledTypography = styled(Typography)<{ status: BrowseStatus }>(
  ({ status }) => ({
    ...variantStyles()[status || "active"],

    display: "inline-block",
    fontSize: "13px",
    mb: "19px",
    padding: "5px 10px",
    border: "1px solid #1C263C",
    borderRadius: "5px",
    backgroundColor: "#1C263C",
  })
);
