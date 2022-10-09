import React from 'react'
import { Character, IMG, ImgBox, Item, Name } from './CastListItem.styled'

export default function CastListItem({ data }) {
    const { profile_path, name, character } = data
    return (
        <Item>
            <ImgBox><IMG src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} width='150' /></ImgBox>
            <Character>Character: {character}</Character>
            <Name>Name: {name}</Name>
        </Item>
    )
}
