import React from 'react';

function Form({ getInfoFromForm, disabledButton }) {
  return (
    <>
      <form onSubmit={(event) => getInfoFromForm(event)} className="app-form">
        <input name="input" type="text" className="app-input" placeholder="GitHub Acc" />
        <button type="submit" disabled={disabledButton} className="app-form__btn">
          Find
        </button>
        {disabledButton && <p>loading in progress...</p>}
      </form>
    </>
  );
}

export default Form;
