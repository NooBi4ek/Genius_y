import { Stack, Button, Typography } from '@mui/material';
import { FC } from 'react';
import { changeModalStatus } from '../store/actions/modalActions';
import FormSignUp from './FormSignUp';
import { useDispatch } from 'react-redux';
import TextField from '../components/TextField';
import { useFormik } from 'formik';
import { initialValuesLogin, loginField } from './login/form';
import { loginSchema } from './login/validation';
import { loginUserServer } from '../store/actions/authActions';
import { toast } from 'react-toastify';

const FormLogin: FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(loginUserServer(values));
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    touched,
    handleSubmit: handleLoginSubmit,
  } = useFormik({
    initialValues: initialValuesLogin,
    validationSchema: loginSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: handleSubmit,
  });

  const handleSignUpClick = () => {
    dispatch(changeModalStatus({ status: true, content: <FormSignUp /> }));
  };

  return (
    <Stack mt="70px" gap="35px" alignItems="center">
      {loginField.map((el) => (
        <TextField
          {...el}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[el.name]}
          customError={errors[el.name]}
        />
      ))}

      <Button
        sx={{ border: '1px solid #1c71d2', borderRadius: '10px' }}
        onClick={handleSubmit}
        disabled={!!Object.keys(errors).length}
      >
        Login
      </Button>
      <Stack justifyContent="flex-end">
        <Typography
          sx={{ color: '#1c71d2', cursor: 'pointer' }}
          onClick={handleSignUpClick}
        >
          Haven't account ?
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FormLogin;
