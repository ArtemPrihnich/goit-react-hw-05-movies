import React, { useState } from 'react'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Button, Form, Input } from './SearchForm.styled';
import PropTypes from 'prop-types'

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
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                autoComplete='off'
                onChange={handleChange}
            />
            <Button type='submit'>Find Movie</Button>
        </Form>
    )
}

SearchForm.propTypes = {
    value: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
}