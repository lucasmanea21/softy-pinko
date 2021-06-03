import styled from 'styled-components'

export const CardWrapper = styled.div `
    display:flex;
    width: 350px;
    margin: 15px;

    @media screen and (max-width: 1200px) {
        width: 300px;
    }
    @media screen and (max-width: 1000px) {
        width: 350px;
    }
    @media screen and (max-width: 780px) {
        width: 100%;
    }
`
export const CardContent = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #button {
        
            color: Red !important;
        
    }
`

export const ImageWrapper = styled.div `
    margin-bottom: 0;
    display:flex;

    img {
        width: 100%;
        overflow: hidden;
    }
`
export const TextWrapper = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    text-align: center;

    h3 {
        margin-bottom: 10px !important;
        font-size: 18px;
        color: #1e1e1e;
        cursor: pointer;
        transition: 0.2s ease;

        &:hover {
            color: #ff589e;
        }
    }

    p {
        color: #777;
        font-size: 13px;
    }

    @media screen and (max-width: 780px) {

        width: 80%;
    }
`

export const ButtonWrapper = styled.div `

`