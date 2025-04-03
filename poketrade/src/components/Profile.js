import React from 'react'

// The Profile component displays the user's profile information.
// If no user is provided, it defaults to 'Guest'.
export default function Profile({ user = 'Guest' }) {
    return (
        <div>Profile {user}</div>
    )
}
