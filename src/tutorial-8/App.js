import React from 'react';

function App() {
  const [users, setUsers] = React.useState([]);

  async function getUsers() {
    try {
      let respons = await fetch('https://61bcac53d8542f0017824937.mockapi.io/users');
      let users = await respons.json();

      setUsers(users);
    } catch {
      alert('Error');
    }

    return users;
  }

  return (
    <div>
      <ul>
        {users.map((obj) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
      <button onClick={getUsers}>Get list users</button>
    </div>
  );
}

export default App;
