import { Button, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { changeModalStatus } from '../store/actions/modalActions';
import FormLogin from './FormLogin';
import TextField from '../components/TextField';
import { RegisterFormValues } from './register/types';
import { useFormik } from 'formik';
import {
  initialValuesRegister,
  registerFieldsPerson,
  registerFieldsSecurity,
} from './register/form';
import { registerSchema } from './register/validation';
import { registerUserServer } from '../store/actions/authActions';

const FormSignUp: FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(registerUserServer(values));
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    touched,
    handleSubmit: handleLoginSubmit,
  } = useFormik({
    initialValues: initialValuesRegister,
    validationSchema: registerSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: handleSubmit,
  });

  const handleLoginClick = () => {
    dispatch(changeModalStatus({ status: true, content: <FormLogin /> }));
  };

  return (
    <Stack>
      <Stack flexDirection="row" gap="15px">
        {registerFieldsPerson.map((el) => (
          <Stack flexDirection="column">
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[el.name]}
              customError={errors[el.name]}
              {...el}
            />
          </Stack>
        ))}
      </Stack>
      <Stack mt="35px" gap="35px" alignItems="center">
        {registerFieldsSecurity.map((el) => (
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[el.name]}
            customError={errors[el.name]}
            {...el}
          />
        ))}
        <Button
          sx={{ border: '1px solid #1c71d2', borderRadius: '10px' }}
          fullWidth
          size="large"
          onClick={handleSubmit}
          disabled={!!Object.keys(errors).length}
        >
          Get started
        </Button>
        <Stack justifyContent="flex-end">
          <Typography
            sx={{ color: '#1c71d2', cursor: 'pointer' }}
            onClick={handleLoginClick}
          >
            Have account ?
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FormSignUp;
