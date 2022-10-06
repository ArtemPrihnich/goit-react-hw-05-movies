import HomeGalleryItem from 'components/HomeGalleryItem/HomeGalleryItem'
import React from 'react'

export default function HomeGallery({ data }) {
    return (
        <ul>
            {console.log(data)}
            {data.map((data) => {
                return (
                    <HomeGalleryItem key={data.id} movieInfo={data} />
                )
            })}
        </ul>
    )
}
