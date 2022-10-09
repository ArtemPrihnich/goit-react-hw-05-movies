import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container, URL } from './AdditionalInformation.styled'

export default function AdditionalInformation() {
    const location = useLocation()
    const navItems = [
        { href: 'cast', text: 'Cast' },
        { href: 'reviews', text: 'Reviews' }
    ]

    return (
        <Container>
            {navItems.map(({ href, text }) => <URL to={href} state={{ from: location.state?.from }} key={href}>{text}</URL>)}
        </Container>
    )
}
