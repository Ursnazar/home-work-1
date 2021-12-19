import React from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = React.useState([]);
  const [senduser, setSenduser] = React.useState([]);
  const [upLoading, setUpLoading] = React.useState(false);

  const input = React.useRef();

  /*   async function getUsers() {
    try {
      let respons = await fetch('https://61bcac53d8542f0017824937.mockapi.io/users');
      let users = await respons.json();

      setUsers(users);
    } catch {
      alert('Error');
    }

    return users;
  } */

  const getUsers = async () => {
    const res = await axios.get('https://61bcac53d8542f0017824937.mockapi.io/users');
    setUsers(res.data);
  };

  function createUsers(event) {
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;

    const data = {
      name: name,
      email: email,
    };

    setSenduser(data);

    axios.post('https://61bcac53d8542f0017824937.mockapi.io/users', senduser);

    /*   fetch('https://61bcac53d8542f0017824937.mockapi.io/users', {
      method: 'POST',
      headers: {
        Accept: 'application-json',
        'Content-Type': 'application-json',
      },
      body: JSON.stringify(senduser),
    }); */
  }

  const upLoadFile = async (event) => {
    event.preventDefault();
    const file = input.current.value;
    console.log(file);

    setUpLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    await axios.post('http://localhost:9999', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    setUpLoading(false);
  };

  return (
    <div>
      <div style={{ marginBottom: 50 }}>
        <ul>
          {users.map((obj) => (
            <li key={obj.id}>{obj.name}</li>
          ))}
        </ul>
        <button onClick={getUsers}>Get list users</button>
      </div>
      <div style={{ marginBottom: 50 }}>
        <form onSubmit={(event) => createUsers(event)}>
          <h4>Create User</h4>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <button type="submit">Send</button>
        </form>
      </div>
      <div>
        <form onSubmit={(event) => upLoadFile(event)}>
          <h4>Upload file to Server</h4>
          <input ref={input} type="file" id="file" name="file" />
          <button disabled={upLoading} type="submit">
            Load
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
