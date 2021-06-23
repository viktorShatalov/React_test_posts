import React from 'react'

export const Users = ({ users, postsId, className }) => {
    return (
        <>
            {users.filter(user => user.id === postsId).map(u => {
                return <div
                    key={u.id}
                    className={className}
                ><span>{u.name}</span><span>(nikname:{u.username})</span></div>
            }
            )}
        </>
    )
}
