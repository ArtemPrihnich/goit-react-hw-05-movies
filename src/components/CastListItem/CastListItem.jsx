import React from 'react'

export default function CastListItem({ data }) {
    const { profile_path, name, character } = data
    return (
        <li>
            <img href={profile_path} alt={name} />
            <p>{character}</p>
            <p>{name}</p>
        </li>
    )
}
