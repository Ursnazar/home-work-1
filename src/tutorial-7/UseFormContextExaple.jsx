import React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from './style.module.scss';
import FormField from './components/FormField';

import { useForm, FormProvider, useFormContext } from 'react-hook-form';

function UseFormContextExaple() {
  const onSubmit = (data) => {
    console.log(data);
  };

  const { handleSubmit } = useFormContext();

  return (
    <div>
      <form>
        <div className={style.form}>
          <h2>Registration form</h2>
          <div className={style.form__item}>
            <FormField name="firstName" label="Name" />
            <FormField name="lastName" label="Last Name" />
            <FormField name="email" label="Email" />
          </div>
          <div className={style.form__button}>
            <Button onClick={handleSubmit(onSubmit)} variant="contained">
              Next
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UseFormContextExaple;
