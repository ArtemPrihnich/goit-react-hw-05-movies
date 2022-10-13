import { List } from 'components/HomeGallery/HomeGallery.styled'
import React from 'react'
import HomeGalleryItem from '../HomeGalleryItem/HomeGalleryItem'
import PropTypes from 'prop-types'

export default function MoviesSearchList({ data }) {
    return (
        <List>
            {data.map((item) => {
                return (
                    <HomeGalleryItem key={item.id} movieInfo={item} />
                )
            })}
        </List>
    )
}

MoviesSearchList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.object
    )
}