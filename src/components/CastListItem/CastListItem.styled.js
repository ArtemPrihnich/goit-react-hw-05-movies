import styled from "@emotion/styled";

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-bottom: 10px;
    width: 300px;
    padding: 20px 0;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.headerbgc};
`

export const ImgBox = styled.div`
    display: block;
    margin: 0 auto;
    width: 150px;
    height: 225px;
    background-color: ${props => props.theme.colors.gray};
`

export const IMG = styled.img`
    display: block;
`

export const Character = styled.p`
    display: block;
    text-align: center;
    color: ${props => props.theme.colors.textColor};
`

export const Name = styled.p`
    display: block;
    text-align: center;
    margin: 0;
    color: ${props => props.theme.colors.textColor};
`