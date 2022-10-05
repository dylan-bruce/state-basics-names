import React from 'react'

import UserView from "./UserView";


function UserList({ users, deleteUser, setUsers }) {
  
  function clearUsers() {
    setUsers([]);
  }

  return (
    <div>
      <h2>Users</h2>
      {users.length>1 && <button onClick={clearUsers}>Clear Users</button>}
      {users.map((user, index) => (
        <UserView
          deleteUser={() => deleteUser(index)}
          key={index}
          user={user}
          index={index}
        />
      ))}
    </div>
  )
}

export default UserList