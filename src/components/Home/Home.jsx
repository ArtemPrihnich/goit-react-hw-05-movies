import React from 'react'
import movieAPI from '../../services/MovieDatabaseAPI'
import { useEffect } from 'react'
import { useState } from 'react'
import HomeGallery from 'components/HomeGallery/HomeGallery'
import { Box, Title } from './Home.styled'

export default function Home() {
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
        <Box>
            <Title>Top movies for today</Title>
            {storage && <HomeGallery data={storage} />}
        </Box>
    )
}
