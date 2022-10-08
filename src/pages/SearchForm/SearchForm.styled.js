import styled from "@emotion/styled";

export const Form = styled.form`
    display: block;
`

export const Input = styled.input`
    outline: none;
    width: 200px;
    padding: 5px;
`

export const Button = styled.button`
    display: inline-block;
    margin: 0 0 0 10px;
    padding: 5px;
    border: 1px solid gray;
    transition: background-color 250ms;

    &:hover{
        background-color: gray;
        cursor: pointer;
    }
`