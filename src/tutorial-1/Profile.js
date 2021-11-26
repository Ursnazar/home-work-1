import React from 'react';

function Profile({ registredAt, name }) {
  function parseDataUser(params, name) {
    let data = {};
    let dtFormat = new Intl.DateTimeFormat('ru-RU', {
      month: 'long',
    });
    data.name = name.split(' ')[0];
    data.day = String(params).split(' ')[2];
    data.month = dtFormat.format(params);
    data.year = String(params).split(' ')[3];
    return data;
  }

  const data = parseDataUser(registredAt, name);

  return (
    <div>
      <h1>Привет, {data.name}</h1>
      <h2>
        Дата регистрации: {data.day} {data.month} {data.year}
      </h2>
    </div>
  );
}

export default Profile;
