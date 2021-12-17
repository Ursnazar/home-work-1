import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import style from '../style.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { string } from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().min(2, 'Too Short').required(),
  lastName: yup.string().min(2, 'Too Short').required(),
  email: yup.string().email('This is not email').required(),
  password: yup.string().when('email', {
    is: (value) => value.includes('@'),
    then: yup.string().min(6, 'Too Short').max(12),
  }),
});

function PersonalInfoForm({ nextStep, setFormValue }) {
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
    setFormValue(data);
    nextStep('adress');
  };

  const handleClearForm = () => {
    reset();
  };

  return (
    <div>
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
              {...register('email')}
              helperText={errors.email && errors.email.message}
              error={!!errors.email}
              label="E-mail"
              fullWidth
            />
            <TextField
              type="password"
              {...register('password')}
              helperText={errors.password && errors.password.message}
              error={!!errors.password}
              style={{ marginBottom: '15px' }}
              name="password"
              label="Password"
              fullWidth
            />
          </div>
          <div className={style.form__button}>
            <Button onClick={handleClearForm} variant="outlined">
              Clear form
            </Button>
            <Button onClick={handleSubmit(onSubmit)} variant="contained">
              Next
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfoForm;
