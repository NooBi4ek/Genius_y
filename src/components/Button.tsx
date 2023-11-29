import { FC } from 'react';
import { Button as MuiButton, styled } from '@mui/material';

interface Props {
  variant: 'outlined' | 'contained' | 'text';
  size: 'small' | 'medium' | 'large';
  text: string;
}

const variantStyles = () => ({
  outlined: {
    borderRadius: '5px',
  },
  contained: { borderRadius: '30px' },
  text: {},
});

const Button: FC<Props> = ({ variant, size, text }) => {
  return (
    <StyledButton variant={variant} size={size}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled(MuiButton)(({ variant, size }) => ({
  ...variantStyles()[variant || 'outlined'],
  backgroundColor:
    'linear-gradient(90deg, #ff7e4a 35%, rgba(255,74,139,1) 100%)',
}));
