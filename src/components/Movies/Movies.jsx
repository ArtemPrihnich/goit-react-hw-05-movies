import React from 'react'
import { Outlet } from 'react-router-dom'


export default function Movies() {
    return (
        <div>
            MOVIES
            <Outlet />
        </div>
    )
}
