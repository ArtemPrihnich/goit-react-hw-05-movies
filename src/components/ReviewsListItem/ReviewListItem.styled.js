import styled from "@emotion/styled";

export const Item = styled.li`
    padding: 10px 0;
    border-bottom: ${props => `1px dashed ${props.theme.colors.black}`};
`

export const Author = styled.p`
    font-size: 20px;
    color: ${props => props.theme.colors.textColor};
`