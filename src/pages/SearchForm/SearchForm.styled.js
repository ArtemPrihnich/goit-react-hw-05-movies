import styled from "@emotion/styled";

export const Form = styled.form`
    display: block;
`

export const Input = styled.input`
    outline: none;
    width: 200px;
    padding: 8px;
    border: ${props => `3px solid ${props.theme.colors.primaryTextColor}`};
    border-radius: 5px;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.inputbgc};
`

export const Button = styled.button`
    display: inline-block;
    margin: 0 0 0 10px;
    padding: 8px;
    border: ${props => `3px solid ${props.theme.colors.primaryTextColor}`};
    border-radius: 5px;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.inputbgc};
    transition-property: background-color;
    transition-duration:  250ms;

    &:hover{
        background-color: ${props => props.theme.colors.secondaryTextColor};
        cursor: pointer;
    }
`