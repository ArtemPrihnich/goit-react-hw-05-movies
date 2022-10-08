import React, { Suspense } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import movieAPI from '../../services/MovieDatabaseAPI'
import { useEffect, useState } from 'react'
import MovieInfoItem from 'components/MovieInfoItem/MovieInfoItem'
import AdditionalInformation from 'components/AdditionalInformation/AdditionalInformation'
import ButtonGoBack from 'components/ButtonGoBack'

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
            <ButtonGoBack />
            <MovieInfoItem data={storage} />
            <AdditionalInformation />
            <Suspense fallback={<h1>LOADING...</h1>}>
                <Outlet />
            </Suspense>
        </div>
    )
}
