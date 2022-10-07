import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function MovieInfoItem({ data }) {
    const location = useLocation()
    console.log(location.state.from)
    const { poster_path, title, relise, vote_average, status } = data
    return (
        <div>
            <Link to={location.state.from}>Go back</Link>
            <img src={poster_path} alt={title} />
            <p>{title}</p>
            <p>{relise}</p>
            <p>{vote_average}</p>
            <p>{status}</p>
        </div>
    )
}
