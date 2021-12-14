import React from 'react';

import style from './style.module.scss';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  const [fields, setFields] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleClickClear = () => {
    setFields({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  };

  const handleClickRegister = () => {
    if (!fields.email.includes('@')) {
      alert('You have entered incorrect mail');
      return;
    }

    if (fields.firstName.length < 3 || fields.firstName.length < 3) {
      alert('You have entered incorrect Your name or last name');
      return;
    }

    if (fields.password.length < 6) {
      alert('The password must contain at least 6 characters');
      return;
    }

    console.log('Зарегистрировались', fields);
    handleClickClear();
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const isValidButtonRegister =
    !!fields.firstName && !!fields.lastName && !!fields.email && !!fields.password;

  const isValidButtonClear =
    !!fields.firstName || !!fields.lastName || !!fields.email || !!fields.password;

  return (
    <div className={style.App}>
      <div className={style.form}>
        <h2>Registration form</h2>
        <div className={style.form__item}>
          <TextField
            onChange={handleChangeInput}
            style={{ marginBottom: '15px' }}
            value={fields.firstName}
            name="firstName"
            label="Name"
            fullWidth
          />
          <TextField
            onChange={handleChangeInput}
            style={{ marginBottom: '15px' }}
            value={fields.lastName}
            name="lastName"
            label="Last Name"
            fullWidth
          />
        </div>
        <div className={style.form__item}>
          <TextField
            onChange={handleChangeInput}
            style={{ marginBottom: '15px' }}
            value={fields.email}
            name="email"
            label="E-mail"
            fullWidth
          />
          <TextField
            onChange={handleChangeInput}
            type="password"
            style={{ marginBottom: '15px' }}
            value={fields.password}
            name="password"
            label="Password"
            fullWidth
          />
        </div>
        <div className={style.form__button}>
          <Button
            disabled={!isValidButtonRegister}
            variant="contained"
            onClick={handleClickRegister}>
            Register
          </Button>
          <Button disabled={!isValidButtonClear} variant="outlined" onClick={handleClickClear}>
            Clear form
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
