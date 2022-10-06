import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HomeGalleryItem({ movieInfo }) {
    return (
        <li>
            {/* {console.log(movieInfo)} */}
            <NavLink to={`/movies/${movieInfo.id}`}>{movieInfo.title}</NavLink>
        </li>
    )
}
