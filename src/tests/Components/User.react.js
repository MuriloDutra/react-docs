import React, {useState, useEffect } from 'react'

function User(props){
    const [user, setUser] = useState(null)

    async function fetchUserData(id){
        const response = await fetch(`https://swapi.dev/api/people/${id}/`)
        setUser(await response.json())
    }

    useEffect(() => {
        fetchUserData(props.id)
    }, [props.id])

    if(!user){
        return 'Loading...'
    }

    return (
        <details>
            <summary>{user.name}</summary>
            <strong>{user.height}</strong> height
            <br />
            <p>{user.homeworld}</p>
        </details>
    )
}

export default User