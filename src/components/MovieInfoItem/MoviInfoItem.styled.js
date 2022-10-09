import styled from "@emotion/styled";
import backgroundColorPicker from "utils/backgroundColorPicker";

export const Container = styled.div`
    display: flex;
    padding: 20px 0;
`

export const ImgBox = styled.div`
    display:block;
    width: 300px;
    height: 450px;
    background-color: ${props => props.theme.colors.gray};
`

export const IMG = styled.img`
    display: inline-block;
`

export const InfoContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: 20px;
    padding: 0;
`

export const Title = styled.h1`
    display: block;
    margin: 0;
    color: ${props => props.theme.colors.white};
`

export const ReleaseDate = styled.p`
    display: block; 
    color: ${props => props.theme.colors.textColor};
    font-size: 18px;
`

export const Rating = styled.p`
    display: block; 
    color: ${props => props.theme.colors.textColor};
    font-size: 18px;
`

export const Status = styled.p`
    display: block; 
    color: ${props => props.theme.colors.textColor};
    font-size: 18px;
`

export const Overview = styled.span`
    display: inline-block; 
    color: ${props => props.theme.colors.textColor};
    font-size: 18px;
`

export const StatusInfo = styled.span`
    padding: 5px;
    border: ${props => `1px solid ${props.theme.colors.primaryTextColor}`};
    border-radius: 5px;
    background-color: ${backgroundColorPicker};
`

export const GenresBox = styled.div`
    display:block;
    margin: 10px 0;
    list-style: none;
    font-size: 18px;
    color: ${props => props.theme.colors.textColor};
`

export const Genres = styled.span`
    margin-left: 5px;
    padding: 3px 6px;
    border: ${props => `1px solid ${props.theme.colors.textColor}`};
    border-radius: 5px;
    color: ${props => props.theme.colors.textColor};
`

export const OverviewText = styled.p`
    color: ${props => props.theme.colors.white};
`