import React from 'react';
import { Switch, Route, useHistory, useLocation, useRouteMatch, Redirect } from 'react-router-dom';

import style from './style.module.scss';
import AppReactHooksForm from './forms/PersonalInfoForm';
import AdressForm from './forms/AdressForm';
import Result from './forms/Result';

function App() {
  const [formValue, setFormValue] = React.useState({});

  console.log(formValue);

  const history = useHistory();

  const nextStep = (name) => {
    history.push(name);
  };

  return (
    <div className={style.App}>
      <Route
        path="/"
        render={() => <AppReactHooksForm nextStep={nextStep} setFormValue={setFormValue} />}
        exact
      />
      <Route
        path="/adress"
        render={() => <AdressForm nextStep={nextStep} setFormValue={setFormValue} />}
      />
      <Route path="/result" render={() => <Result formValue={formValue} />} />
    </div>
  );
}

export default App;
