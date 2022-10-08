import HomeGalleryItem from 'components/HomeGalleryItem/HomeGalleryItem'
import React from 'react'

export default function HomeGallery({ data }) {
    return (
        <ul>
            {data.map((data) => {
                return (
                    <HomeGalleryItem key={data.id} movieInfo={data} />
                )
            })}
        </ul>
    )
}
