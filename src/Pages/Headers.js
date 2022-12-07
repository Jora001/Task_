import React, { useContext } from 'react'

export default function Headers({ users }) {
    return (
        <div className='parent-small-user'>
            {users.map(user => (
                <div key={user.name} className='ss'>
                    <div className='header-samall-user'>
                        {user.name[0]}
                        {user.lastName[0]}
                    </div>
                </div>
            ))}
        </div>
    )
}