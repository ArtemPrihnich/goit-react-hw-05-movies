import ReviewsListItem from 'components/ReviewsListItem/ReviewsListItem'
import React from 'react'

export default function ReviewsList({ data }) {
    console.log(data)
    return (
        <ul>
            {data.map((item) => {
                return (
                    <ReviewsListItem key={item.id} data={item} />
                )
            })}
        </ul>
    )
}
