import React from 'react'
import PropTypes from 'prop-types'

const Users = ({ users, postsId, className }) => {
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

Users.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        username: PropTypes.string,
        id: PropTypes.number,
    }),
    postsId: PropTypes.number
}
export default Users