import React from 'react';

import styles from '../style.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Form(props) {
  const addCommentHandler = props.onClick;

  return (
    <>
      <form onSubmit={(event) => addCommentHandler(event)} className={styles.form}>
        <h2>Feedback</h2>
        <TextField
          style={{ marginBottom: '20px' }}
          id="outlined-basic_1"
          label="Name"
          variant="outlined"
          name="name"
        />
        <TextField
          style={{ marginBottom: '20px' }}
          id="outlined-basic_2"
          label="Email"
          variant="outlined"
          name="email"
        />
        <TextField
          style={{ marginBottom: '20px' }}
          id="outlined-textarea"
          label="Your comment"
          placeholder="Some text..."
          multiline
          name="comment"
        />
        <Button type="submit" style={{ marginBottom: '10px', width: '100%' }} variant="contained">
          Send
        </Button>
      </form>
    </>
  );
}

export default Form;
