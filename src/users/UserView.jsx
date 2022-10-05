import React from 'react'

function UserView({ user, deleteUser, index }) {
    return (
        <>
            <hr/>
            <p>Name: {user.firstName} {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>UserId: {index+1}</p>
            <button name="delete" onClick={deleteUser}>
                Remove User
            </button>
        </>
    )
}

export default UserView