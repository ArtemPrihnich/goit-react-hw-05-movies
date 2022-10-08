import React from 'react'

export default function CastListItem({ data }) {
    const { profile_path, name, character } = data
    return (
        <li>
            <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} width='100' />
            <p>Character: {character}</p>
            <p>Name: {name}</p>
        </li>
    )
}
