import React from 'react'
import movieAPI from '../../services/MovieDatabaseAPI'
import { useEffect } from 'react'
import { useState } from 'react'
import HomeGallery from 'components/HomeGallery/HomeGallery'

export default function Home() {
    const [storage, setStorage] = useState([])
    useEffect(() => {
        async function foo() {
            try {
                const res = await movieAPI.trendingMovies()
                setStorage((prevStorage) => {
                    return [...prevStorage, ...res.data.results]
                })
            } catch (error) {
                console.log(error)
            }
        }
        foo()
    }, [])
    return (
        <div>
            {storage && <HomeGallery data={storage} />}
            {/* <ul>
                {console.log(storage)}
                {storage.map(({ id, title }) => {
                    return <li key={id}>{title}</li>
                })}
            </ul> */}
        </div>
    )
}
