import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function AdditionalInformation() {
    const location = useLocation()
    const navItems = [
        { href: 'cast', text: 'Cast' },
        { href: 'reviews', text: 'Reviews' }
    ]

    return (
        <div>
            {navItems.map(({ href, text }) => <NavLink to={href} state={{ from: location.state?.from }} key={href}>{text}</NavLink>)}
        </div>
    )
}
