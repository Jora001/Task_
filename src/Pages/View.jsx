import React from 'react'

export default function View({ users, deleteUser }) {
    return (
        users.map(user => (
            <div key={user.name}>
                <p>{user.name} {user.lastName} <button onClick={() => deleteUser(user.name)}>x</button></p>
            </div>
        ))
    )
}