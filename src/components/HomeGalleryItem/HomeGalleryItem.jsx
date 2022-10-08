import React from 'react'
import { useLocation } from 'react-router-dom'
import { Item, URL } from './HomeGalleryItem.styled'

export default function HomeGalleryItem({ movieInfo }) {
    const location = useLocation()
    return (
        <Item>
            <URL to={`/movies/${movieInfo.id}`} state={{ from: location }}>{movieInfo.title}</URL>
        </Item>
    )
}
