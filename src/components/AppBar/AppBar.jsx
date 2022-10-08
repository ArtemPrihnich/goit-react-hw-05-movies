import React from 'react'
// import { NavLink } from 'react-router-dom'
import { Header, Nav, NavigLink } from './AppBar.styled'

export default function AppBar() {
    const navItems = [
        { href: `/`, text: 'Home' },
        { href: 'movies', text: 'Movies' }
    ]

    return (
        <Header>
            <Nav>
                {navItems.map(({ href, text }) => {
                    return <NavigLink to={href} key={href}>{text}</NavigLink>
                })}
            </Nav>
        </Header>
    )
}
