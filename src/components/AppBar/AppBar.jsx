import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AppBar() {
    const navItems = [
        { href: '/', text: 'Home' },
        { href: 'movies', text: 'Movies' }
    ]

    return (
        <header>
            <nav>
                {navItems.map(({ href, text }) => {
                    return <NavLink to={href} key={href}>{text}</NavLink>
                })}
            </nav>
        </header>
    )
}
