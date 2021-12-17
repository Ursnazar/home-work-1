import React from 'react';

import { Paper } from '@mui/material';

function Result({ formValue }) {
  return (
    <Paper style={{ padding: 15 }}>
      <h1>Full Form</h1>
      <ul>
        <li>
          <b>Name:</b>
          {formValue.firstName}
        </li>
        <li>
          <b>Last Name:</b>
          {formValue.lastName}
        </li>
        <li>
          <b>Email:</b>
          {formValue.email}
        </li>
        <li>
          <b>City:</b>
          {formValue.city}
        </li>
        <li>
          <b>Street:</b>
          {formValue.street}
        </li>
      </ul>
    </Paper>
  );
}

export default Result;
