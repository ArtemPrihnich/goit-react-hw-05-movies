import AppBar from 'components/AppBar/AppBar'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from './Layout.styled'

export default function Layout() {
    return (
        <Container>
            <AppBar />
            <Suspense>
                <Outlet />
            </Suspense>
        </Container>
    )
}
