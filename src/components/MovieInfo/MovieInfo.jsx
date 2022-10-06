import React from 'react'
import { useParams } from 'react-router-dom'
import movieAPI from '../../services/MovieDatabaseAPI'
import { useEffect, useState } from 'react'

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
            <img src={storage.poster_path} alt={storage.title} />
            <p>{storage.title}</p>
            <p>{storage.relise}</p>
            <p>{storage.vote_average}</p>
            <p>{storage.status}</p>
            {console.log(storage)}
        </div>
    )
}
