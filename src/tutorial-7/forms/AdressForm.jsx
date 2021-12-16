import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import style from '../style.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { string } from 'yup';

const schema = yup
  .object({
    city: yup.string().min(2, 'Too Short').required(),
    street: yup.string().min(2, 'Too Short').required(),
  })
  .required();

function PersonalInfoForm({ nextStep, setFormValue }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      city: '',
      street: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setFormValue((prev) => {
      return { ...prev, ...data };
    });
    nextStep('result');
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
              name="city"
              {...register('city')}
              helperText={errors.city && errors.city.message}
              error={!!errors.city}
              label="City"
              fullWidth
            />
            <TextField
              style={{ marginBottom: '15px' }}
              name="street"
              {...register('street')}
              helperText={errors.street && errors.street.message}
              error={!!errors.street}
              label="Street"
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
