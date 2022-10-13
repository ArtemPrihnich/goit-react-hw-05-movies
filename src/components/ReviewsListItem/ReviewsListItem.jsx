import React from 'react'
import { Author, Item } from './ReviewListItem.styled'
import PropTypes from 'prop-types'

export default function ReviewsListItem({ data }) {
    const { author, content, created_at } = data
    console.log(data)
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

ReviewsListItem.propTypes = {
    data: PropTypes.shape({
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
    })
}