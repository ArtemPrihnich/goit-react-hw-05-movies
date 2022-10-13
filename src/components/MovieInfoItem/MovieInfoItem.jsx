import React from 'react'
import { ImgBox, Container, Genres, GenresBox, IMG, InfoContainer, Overview, Rating, ReleaseDate, Status, StatusInfo, Title, OverviewText } from './MoviInfoItem.styled'
import PropTypes from 'prop-types'
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

MovieInfoItem.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        overview: PropTypes.string,
        genres: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
            })
        ),
        release_date: PropTypes.string.isRequired,
    })
}