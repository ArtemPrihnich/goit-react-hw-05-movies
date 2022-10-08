import AppBar from 'components/AppBar/AppBar'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <AppBar />
            <Suspense>
                <Outlet />
            </Suspense>
        </div>
    )
}
