import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
    display: block;
    padding: 20px 0;
    text-align: center;
    border-top: ${props => `1px solid ${props.theme.colors.black}`};
    border-bottom: ${props => `1px solid ${props.theme.colors.black}`};
`

export const URL = styled(NavLink)`
    display: inline-block;
    margin-right: 20px;
    padding: 5px 10px;
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    font-size: 24px;
    font-weight: 500;
    border: ${props => `2px solid ${props.theme.colors.white}`};
    border-radius: 5px;
    transition: transform 250ms;

    &:last-child {
        margin-right: 0;
    }

    &.active {
        
        color: ${props => props.theme.colors.secondaryTextColor};
        border-color: ${props => props.theme.colors.secondaryTextColor};
    }

    :hover:not(.active),
    :focus-visible:not(.active) {
        transform: scale(1.1);
    }
`