import { FC, ReactNode } from 'react';

import { Container as MuiContainer } from '@mui/material';

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <MuiContainer sx={{ maxWidth: '1440px', width: '95%' }}>
      {children}
    </MuiContainer>
  );
};

export default Container;
