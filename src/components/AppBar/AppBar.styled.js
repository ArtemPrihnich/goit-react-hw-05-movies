import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom'

export const Header = styled.header`
    display: block;
    border-bottom: 1px solid black;
`;

export const Nav = styled.nav`
    display: block;
    padding: 0 15px;
`;

export const NavigLink = styled(NavLink)`
    display: inline-block;
    padding: 10px;
    margin-right: 15px;
    text-decoration: none;
    font-size: 20px;
    color: black;
    transition: transform 250ms;

    &:last-child {
        margin-right: 0;
    }

    &:hover{
        color: blue;
        transform: scale(1.1);
    }

`