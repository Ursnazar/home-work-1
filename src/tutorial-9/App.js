import React from 'react';

import './style.css';
import Form from './components/Form';
import FormResponse from './components/FormResponse';
import axios from 'axios';

function App() {
  const [targetAcc, setTargetAcc] = React.useState();
  const [disabledButton, setDisabledButton] = React.useState(false);

  const getInfoFromForm = (event) => {
    event.preventDefault();
    if (!event.target.input.value || event.target.input.value.trim().length === 0) {
      alert('Please enter username');
      return;
    } else sendRequest(event.target.input.value);
    setDisabledButton(true);
    event.target.reset();
  };

  const sendRequest = async (accName) => {
    try {
      let { data } = await axios.get(`https://api.github.com/users/${accName}`);
      console.log(data);
      setTargetAcc(data);
      setDisabledButton(false);
    } catch (error) {
      alert('User is not found');
    }
  };

  return (
    <div id="app">
      <div className="app-container">
        <Form
          getInfoFromForm={getInfoFromForm}
          targetAcc={targetAcc}
          disabledButton={disabledButton}
        />
        {targetAcc && <FormResponse targetAcc={targetAcc} />}
      </div>
    </div>
  );
}

export default App;
