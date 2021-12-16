import React from 'react';

import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import style from './style.module.scss';
import UseFormContextExaple from './UseFormContextExaple';

const schema = yup.object().shape({
  firstName: yup.string().min(2, 'Too Short').required(),
  lastName: yup.string().min(2, 'Too Short').required(),
  email: yup.string().email('This is not email').required(),
});

function App() {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    
  }

  return (
    <div className={style.App}>
      <FormProvider {...methods}>
        <UseFormContextExaple />
      </FormProvider>
    </div>
  );
}

export default App;
