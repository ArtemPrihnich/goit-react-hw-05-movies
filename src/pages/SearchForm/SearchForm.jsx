import React, { useState } from 'react'

export default function SearchForm({ onSubmit }) {
    const [name, setName] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.currentTarget
        if (name === 'name') {
            return setName(value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.trim() === '') {
            return alert('Fill in the input field');
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
                required
                autoComplete='off'
                onChange={handleChange}
            />
            <button type='submit'>Find Movie</button>
        </form>
    )
}
