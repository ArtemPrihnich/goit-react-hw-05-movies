import CastListItem from 'components/CastListItem/CastListItem'
import React from 'react'
import { List } from './CastList.styled'

export default function CastList({ data }) {
    return (
        <List>
            {data.map((item) => {
                return (
                    <CastListItem key={item.cast_id} data={item} />
                )
            })}
        </List>
    )
}
