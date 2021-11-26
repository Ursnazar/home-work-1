import React from 'react';

function Form() {
  function handlerOnChange(event, name) {
    if (name === 'email') {
      let email = event.target.value;
      // console.log(email);
    } else {
      let password = event.target.value;
      // console.log(password);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    if (!email || !password) {
      alert('Заполните все поля формы пожалуйста');
    } else {
      console.log(email, password);
    }
    event.target.email.value = '';
    event.target.password.value = '';
  }

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <h4>Форма авторизации</h4>
        <input
          type="text"
          placeholder="E-mail"
          name="email"
          onChange={(e) => handlerOnChange(e, 'email')}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handlerOnChange(e, 'password')}
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default Form;
