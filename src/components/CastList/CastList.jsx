import CastListItem from 'components/CastListItem/CastListItem'
import React from 'react'

export default function CastList({ data }) {
    return (
        <ul>
            {console.log(data)}
            {data.map((item) => {
                return (
                    <CastListItem key={item.id} data={item} />
                )
            })}
        </ul>
    )
}
