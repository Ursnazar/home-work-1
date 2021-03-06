import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import style from './style.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { string } from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().min(2, 'Too Short').required(),
  lastName: yup.string().min(2, 'Too Short').required(),
  email: yup.string().email('This is not email').required(),
  password: yup.string().when('email', {
    is: (value) => value.includes('@'),
    then: yup.string().min(6).max(12),
  }),
});

console.log(schema);

function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleClearForm = () => {
    reset();
  };

  return (
    <div className={style.App}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.form}>
          <h2>Registration form</h2>
          <div className={style.form__item}>
            <TextField
              style={{ marginBottom: '15px' }}
              name="firstName"
              {...register('firstName')}
              helperText={errors.firstName && errors.firstName.message}
              error={!!errors.firstName}
              label="Name"
              fullWidth
            />
            <TextField
              style={{ marginBottom: '15px' }}
              name="lastName"
              {...register('lastName')}
              label="Last Name"
              fullWidth
            />
          </div>
          <div className={style.form__item}>
            <TextField
              style={{ marginBottom: '15px' }}
              name="email"
              {...register('email')}
              label="E-mail"
              fullWidth
            />
            <TextField
              type="password"
              {...register('password')}
              style={{ marginBottom: '15px' }}
              name="password"
              label="Password"
              fullWidth
            />
          </div>
          <div className={style.form__button}>
            <Button onClick={handleSubmit(onSubmit)} variant="contained">
              Register
            </Button>
            <Button onClick={handleClearForm} variant="outlined">
              Clear form
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
