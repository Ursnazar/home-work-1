import React from 'react';

import TextField from '@mui/material/TextField';
import { useFormContext } from 'react-hook-form';

function FormField({ name, label }) {
  const { register, formState } = useFormContext();
  const { errors } = formState;

  return (
    <TextField
      style={{ marginBottom: '15px' }}
      name={name}
      {...register(name)}
      helperText={errors[name] && errors[name].message}
      error={!!errors[name]}
      label={label}
      fullWidth
    />
  );
}

export default FormField;
