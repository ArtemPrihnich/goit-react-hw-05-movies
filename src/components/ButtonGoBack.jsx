import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function ButtonGoBack() {
    const location = useLocation()
    const backLink = location.state?.from ?? '/'
    return (
        <div>
            <Link to={backLink}>Go back</Link>
        </div>
    )
}
