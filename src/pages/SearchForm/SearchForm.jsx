import React, { useState } from 'react'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function SearchForm({ value, onSubmit }) {
    const [name, setName] = useState(value)

    const handleChange = (e) => {
        const { name, value } = e.currentTarget
        if (name === 'name') {
            return setName(value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.trim() === '') {
            return Notify.failure('Fill in the input field', { timeout: 1500, clickToClose: true });
        }
        onSubmit(name)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // required
                autoComplete='off'
                onChange={handleChange}
            />
            <button type='submit'>Find Movie</button>
        </form>
    )
}
