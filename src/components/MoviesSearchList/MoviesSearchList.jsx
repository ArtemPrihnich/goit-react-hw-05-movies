import React from 'react'
import HomeGalleryItem from '../HomeGalleryItem/HomeGalleryItem'

export default function MoviesSearchList({ data }) {
    return (
        <ul>
            {data.map((item) => {
                return (
                    <HomeGalleryItem key={item.id} movieInfo={item} />
                )
            })}
        </ul>
    )
}
