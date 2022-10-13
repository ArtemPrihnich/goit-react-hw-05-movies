import HomeGalleryItem from 'components/HomeGalleryItem/HomeGalleryItem'
import React from 'react'
import { List } from './HomeGallery.styled'
import PropTypes from 'prop-types'

export default function HomeGallery({ data }) {
    return (
        <List>
            {data.map((data) => {
                return (
                    <HomeGalleryItem key={data.id} movieInfo={data} />
                )
            })}
        </List>
    )
}


HomeGallery.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.object
    )
}