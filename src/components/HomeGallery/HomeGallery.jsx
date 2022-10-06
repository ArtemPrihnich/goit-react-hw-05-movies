import React from 'react'

export default function HomeGallery({ data }) {
    return (
        <ul>
            {console.log(data)}
            {data.map(({ id, title }) => {
                return (<li key={id}>{title}</li>)
            })}
        </ul>
    )
}
