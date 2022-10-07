import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import movieAPI from '../../services/MovieDatabaseAPI'
import { useEffect, useState } from 'react'
import MovieInfoItem from 'components/MovieInfoItem/MovieInfoItem'
import AdditionalInformation from 'components/AdditionalInformation/AdditionalInformation'

export default function MovieInfo() {
    const { movieId } = useParams()

    const [storage, setStorage] = useState(null)
    useEffect(() => {
        async function foo() {
            try {
                const res = await movieAPI.getMovieDetails(movieId)
                setStorage(() => {
                    return { ...res.data }
                })
                // console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
        foo()
    }, [movieId])

    if (!storage) {
        return
    }
    return (
        <div>
            <MovieInfoItem data={storage} />
            <AdditionalInformation />
            <Outlet movieId={movieId} />
        </div>
    )
}
