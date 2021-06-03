import styled from 'styled-components'

export const CardWrapper = styled.div `
    width: 350px;
    box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.10);
    border-radius: 20px;
    margin: 15px;
    transition: 0.5s ease;

    @media screen and (max-width: 1200px) {
        width: 300px;
    }
    @media screen and (max-width: 700px) {
        width: 100%;
    }

    &:hover #details-wrapper{
        transform: translate(15px);
    }
`
export const CardContent = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 23px;
`
export const ImageWrapper = styled.div ``
export const TextWrapper = styled.div `
    padding: 10px 0;
    p {
        color: #777777;
    }
`
export const NameWrapper = styled.h4 `
    font-weight: 500;
    margin-bottom: 0;
`
export const FunctionWrapper = styled.h4 `
    font-weight: 500;
    color: #ff589e;
    margin-top: 10px;
`
export const DetailsWrapper = styled.div `
    transition: 0.3s ease;
`