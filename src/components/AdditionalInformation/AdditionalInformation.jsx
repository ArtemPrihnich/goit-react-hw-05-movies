import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AdditionalInformation() {
    const navItems = [
        { href: 'cast', text: 'Cast' },
        { href: 'reviews', text: 'Reviews' }
    ]

    return (
        <div>
            {navItems.map(({ href, text }) => <NavLink to={href} key={href}>{text}</NavLink>)}
        </div>
    )
}
