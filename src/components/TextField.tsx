import {
  TextField as MuiTextField,
  TextFieldProps,
  Typography,
} from '@mui/material';
import { FC } from 'react';

interface CustomProps {
  label?: string;
  placeholder: string;
  customError?: string;
}

type Props = CustomProps & TextFieldProps;

const TextField: FC<Props> = ({
  label,
  placeholder,
  customError,
  ...props
}) => {
  return (
    <>
      <MuiTextField
        {...props}
        required
        label={label}
        placeholder={placeholder}
        sx={{
          borderRadius: '10px',
          '.MuiOutlinedInput-input': {
            color: '#fff',
          },
          '.MuiInputLabel-root': {
            color: '#fff',
          },
          '.MuiOutlinedInput-input:-webkit-autofill': {
            boxShadow: '0 0 0 30px #202740 inset !important',
            borderRadius: '0px',
            '-webkit-text-fill-color': '#fff ',
          },
        }}
      />
      {customError && <Typography color="error">{customError}</Typography>}
    </>
  );
};

export default TextField;
