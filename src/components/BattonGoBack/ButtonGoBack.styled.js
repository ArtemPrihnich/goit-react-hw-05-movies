import styled from "@emotion/styled";
import { Link } from 'react-router-dom'

export const GoBackLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    font-size: 18px;
`

export const ButtonBox = styled.div`
    display: block;
    padding: 10px 0;
`