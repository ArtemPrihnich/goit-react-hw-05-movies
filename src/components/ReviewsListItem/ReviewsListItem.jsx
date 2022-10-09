import React from 'react'
import { Author, Item } from './ReviewListItem.styled'

export default function ReviewsListItem({ data }) {
    const { author, content, created_at } = data
    return (
        <div>
            <Item>
                <Author>{author}</Author>
                <p style={{ color: 'white' }}>{content}</p>
                <p>{new Date(created_at).toLocaleDateString()}</p>
            </Item>
        </div>
    )
}
