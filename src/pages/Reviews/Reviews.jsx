import ReviewsList from 'components/ReviewsList/ReviewsList'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import movieAPI from '../../services/MovieDatabaseAPI'

export default function Reviews() {
    const { movieId } = useParams()
    const [storage, setStorage] = useState(null)

    useEffect(() => {
        async function foo() {
            try {
                const res = await movieAPI.getReviews(movieId)
                setStorage(() => {
                    return [...res.data.results]
                })
            } catch (error) {
                console.log(error)
            }
        }
        foo()
    }, [movieId])
    return (
        <div>
            {storage?.length > 0 && <ReviewsList data={storage} />}
            {storage?.length === 0 && <div>No one review found</div>}
        </div>
    )
}
