import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Item = styled.li`
    display: inline-block;
    padding: 0;
    margin-bottom: 5px;

    &:last-child{
        margin-bottom: 0;
    }
`;

export const URL = styled(Link)`
    display: inline-block;
    padding: 10px;
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    font-size: 18px;
    transition-property: transform, color;
    transition-duration:  250ms;

    &:hover {
        color: ${props => props.theme.colors.secondaryTextColor};
        border: ${props => `1px solid ${props.theme.colors.secondaryTextColor}`};
        border-radius: 10px;
        transform: scale(1.1)
    }
`