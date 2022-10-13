import CastListItem from 'components/CastListItem/CastListItem'
import React from 'react'
import { List } from './CastList.styled'
import PropTypes from 'prop-types'

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

CastList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.object
    )
}