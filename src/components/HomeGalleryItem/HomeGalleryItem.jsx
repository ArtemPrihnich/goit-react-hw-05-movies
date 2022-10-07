import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function HomeGalleryItem({ movieInfo }) {
    const location = useLocation()
    return (
        <li>
            <NavLink to={`/movies/${movieInfo.id}`} state={{ from: location }}>{movieInfo.title}</NavLink>
        </li>
    )
}
