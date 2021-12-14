import React from 'react';

import { useForm } from 'react-hook-form';

import style from './style.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

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
              {...register('firstName', { required: 'This field is required' })}
              helperText={errors.firstName && errors.firstName.message}
              error={!!errors.firstName}
              label="Name"
              fullWidth
            />
            <TextField
              style={{ marginBottom: '15px' }}
              name="lastName"
              {...register('lastName', { required: 'This field is required' })}
              helperText={errors.lastName && errors.lastName.message}
              error={!!errors.lastName}
              label="Last Name"
              fullWidth
            />
          </div>
          <div className={style.form__item}>
            <TextField
              style={{ marginBottom: '15px' }}
              name="email"
              {...register('email', { required: 'This field is required' })}
              helperText={errors.email && errors.email.message}
              error={!!errors.email}
              label="E-mail"
              fullWidth
            />
            <TextField
              type="password"
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
