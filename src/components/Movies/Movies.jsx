import MoviesSearchList from 'components/MoviesSearchList/MoviesSearchList'
import SearchForm from 'pages/SearchForm/SearchForm'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import movieAPI from '../../services/MovieDatabaseAPI'

export default function Movies() {
    const [input, setInput] = useState('')
    const [storage, setStorage] = useState([])

    useEffect(() => {
        async function foo() {
            if (input === '') {
                return
            }

            const res = await movieAPI.getMovieList(input)
            setStorage((prevStorage) => {
                console.log(res)
                return [...prevStorage, ...res.data.results]
            })
        }
        foo()
    }, [input])

    const handleFormSubmit = (inputValue) => {
        if (inputValue === input) {
            return
        }
        setInput(inputValue)
    }

    return (
        <div>
            {storage && console.log(storage)}
            {<SearchForm onSubmit={handleFormSubmit} />}
            {storage.length > 0 && <MoviesSearchList data={storage} />}
            <Outlet />
        </div>
    )
}
