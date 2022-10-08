import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Item = styled.li`
    display: inline-block;
    max-width: 300px;
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
    color: black;
    font-size: 18px;
    transition: 250ms;

    &:hover {
        color: blue;
        transform: scale(1.1)
    }
`