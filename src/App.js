import React, { useState } from 'react';
import './App.css';

import UserForm from "./users/UserForm";
import UserList from "./users/UserList";

function App() {

  const [users, setUsers] = useState([]);

  const createUser = (newUser) => {
    setUsers(currentUser => [
      newUser, 
      ...currentUser
    ]);
  }

  const deleteUser = (index) => {
    setUsers(currentUser => 
      currentUser.filter((post, i) => i !== index)
    );
  }

  return (
    <div className="App">
      <UserForm createUser={createUser} />
      <UserList users={users} deleteUser={deleteUser} setUsers={setUsers} />
    </div>
  );
}

export default App;
