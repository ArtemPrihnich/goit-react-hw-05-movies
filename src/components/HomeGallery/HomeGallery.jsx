import HomeGalleryItem from 'components/HomeGalleryItem/HomeGalleryItem'
import React from 'react'
import { List } from './HomeGallery.styled'

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
