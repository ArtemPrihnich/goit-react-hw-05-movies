import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom'

export const Header = styled.header`
    display: block;
    border-bottom: ${props => `1px solid ${props.theme.colors.black}`};
    background-color: ${props => props.theme.colors.headerbgc};
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
    color: ${props => props.theme.colors.primaryTextColor};
    transition: transform 250ms;

    &:last-child {
        margin-right: 0;
    }

    &:hover{
        color: ${props => props.theme.colors.secondaryTextColor};;
        transform: scale(1.1);
    }
`;