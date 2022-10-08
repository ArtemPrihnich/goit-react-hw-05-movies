import React from 'react'

export default function MovieInfoItem({ data }) {
    const { poster_path, title, status, vote_average, overview, genres, release_date } = data
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width='300' />
            <h1>{title}</h1>
            <p>Release Date: {new Date(release_date).toLocaleDateString()}</p>
            <p>Rating: {`${Number(vote_average).toFixed(1)}/10`}</p>
            <p>Overview: <span>{overview}</span></p>
            <div>Genres:{genres.map(({ name, id }) => <span key={id}>{name}</span>)}</div>
            <p>Status: <span>{status}</span></p>
        </div>
    )
}
