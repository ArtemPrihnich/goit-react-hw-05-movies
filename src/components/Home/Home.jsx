import React from 'react'
import movieAPI from '../../services/MovieDatabaseAPI'
import { useEffect } from 'react'
import { useState } from 'react'
import HomeGallery from 'components/HomeGallery/HomeGallery'

export default function Home({ responce }) {
    const [storage, setStorage] = useState(null)
    useEffect(() => {
        async function foo() {
            try {
                const res = await movieAPI.trendingMovies()
                setStorage(() => {
                    return [...res.data.results]
                })
            } catch (error) {
                console.log(error)
            }
        }
        foo()
    }, [])
    return (
        <div>
            <h1>Top movies for today</h1>
            {storage && <HomeGallery data={storage} />}
        </div>
    )
}
