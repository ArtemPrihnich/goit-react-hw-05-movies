import React from 'react'

export default function ReviewsListItem({ data }) {
    const { author, content, created_at } = data
    return (
        <div>
            <li>
                <p>{author}</p>
                <p>{content}</p>
                <p>{new Date(created_at).toLocaleDateString()}</p>
            </li>
        </div>
    )
}
