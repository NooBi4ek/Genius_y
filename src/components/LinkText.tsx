import { Link, styled } from '@mui/material';
import { FC } from 'react';

interface Props {
  text: string;
}

const LinkText: FC<Props> = ({ text }) => {
  return <StyledLink href="#">{text}</StyledLink>;
};

const StyledLink = styled(Link)(() => ({
  color: '#FF4F6E',
  textDecoration: 'none',
}));

export default LinkText;
