import React from 'react'
import { useLocation } from 'react-router-dom'
import { Item, URL } from './HomeGalleryItem.styled'
import PropTypes from 'prop-types'

export default function HomeGalleryItem({ movieInfo }) {
    const location = useLocation()
    const { id, title } = movieInfo
    return (
        <Item>
            <URL to={`/movies/${id}`} state={{ from: location }}>{title}</URL>
        </Item>
    )
}

HomeGalleryItem.propTypes = {
    movieInfo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    })
}