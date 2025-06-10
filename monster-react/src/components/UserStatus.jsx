import React from 'react'

const UserStatus = ({ loggedIn, isAdmin }) => {
    if (loggedIn && isAdmin) {
        return <h1>Welcome admin</h1>
    } else {
        return <h1>Welcome user</h1>
    }
}

export default UserStatus