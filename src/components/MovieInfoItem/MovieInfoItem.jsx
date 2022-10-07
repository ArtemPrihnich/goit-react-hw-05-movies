import React from 'react'

export default function MovieInfoItem({ data }) {
    const { poster_path, title, relise, vote_average, status } = data
    return (
        <div>
            <img src={poster_path} alt={title} />
            <p>{title}</p>
            <p>{relise}</p>
            <p>{vote_average}</p>
            <p>{status}</p>
        </div>
    )
}
