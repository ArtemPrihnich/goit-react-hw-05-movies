import React from 'react'
import { useLocation } from 'react-router-dom'
import { ButtonBox, GoBackLink } from './ButtonGoBack.styled'

export default function ButtonGoBack() {
    const location = useLocation()
    const backLink = location.state?.from ?? '/'
    return (
        <ButtonBox>
            <GoBackLink to={backLink}>Go back</GoBackLink>
        </ButtonBox>
    )
}
