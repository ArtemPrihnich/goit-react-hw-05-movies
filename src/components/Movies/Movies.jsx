import MoviesSearchList from 'components/MoviesSearchList/MoviesSearchList'
import SearchForm from 'pages/SearchForm/SearchForm'
import React, { Suspense } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import movieAPI from '../../services/MovieDatabaseAPI'
import { Box } from './Movie.styled'

export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query') ?? ''
    const [storage, setStorage] = useState(null)


    useEffect(() => {
        async function foo() {
            if (!query) {
                return
            }

            const res = await movieAPI.getMovieList(query)
            setStorage(() => {
                return [...res.data.results]
            })
        }
        foo()
    }, [query])

    const handleFormSubmit = (inputValue) => {
        setSearchParams(inputValue !== '' ? { query: inputValue } : {})
    }

    return (
        <Box>
            {<SearchForm value={query} onSubmit={handleFormSubmit} />}
            {storage && <MoviesSearchList data={storage} />}
            <Suspense>
                <Outlet />
            </Suspense>
        </Box>
    )
}
