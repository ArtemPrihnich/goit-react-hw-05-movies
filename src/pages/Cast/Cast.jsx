import CastList from 'components/CastList/CastList'
import CastNotify from 'components/CastNotify/CastNotify'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import movieAPI from '../../services/MovieDatabaseAPI'

export default function Cast() {
    const { movieId } = useParams()
    const [storage, setStorage] = useState(null)

    useEffect(() => {
        async function foo() {
            try {
                const res = await movieAPI.getCastInformation(movieId)
                setStorage(() => {
                    return [...res.data.cast]
                })
            } catch (error) {
                console.log(error)
            }
        }
        foo()
    }, [movieId])

    return (
        <div>
            {storage?.length === 0 && <CastNotify />}
            {storage?.length > 0 && <CastList data={storage} />}
        </div>
    )
}
