import React from 'react'
import { ImgBox, Container, Genres, GenresBox, IMG, InfoContainer, Overview, Rating, ReleaseDate, Status, StatusInfo, Title, OverviewText } from './MoviInfoItem.styled'

export default function MovieInfoItem({ data }) {
    const { poster_path, title, status, vote_average, overview, genres, release_date } = data
    return (
        <Container>
            <ImgBox><IMG src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width='300' /></ImgBox>
            <InfoContainer>
                <Title>{title}</Title>
                <ReleaseDate>Release Date: {new Date(release_date).toLocaleDateString()}</ReleaseDate>
                <Rating>Rating: {`${Number(vote_average).toFixed(1)}/10`}</Rating>
                <OverviewText><Overview>Overview:</Overview> {overview}</OverviewText>
                <GenresBox>Genres:{genres.map(({ name, id }) => <Genres key={id}>{name}</Genres>)}</GenresBox>
                <Status>Status: <StatusInfo>{status}</StatusInfo></Status>
            </InfoContainer>
        </Container>
    )
}
