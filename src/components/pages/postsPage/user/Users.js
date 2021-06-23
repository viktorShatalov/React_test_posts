import React from 'react'

export const Users = ({ users, postsId, className }) => {
    return (
        <>
            {users.filter(user => user.id === postsId).map(u => {
                return <div
                    key={u.id}
                    className={className}
                >{u.name}</div>
            }
            )}
        </>
    )
}
