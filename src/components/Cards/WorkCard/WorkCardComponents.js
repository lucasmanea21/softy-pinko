import styled from 'styled-components'

export const CardWrapper = styled.div `
    display:inline-block;
    border-radius: 20px;
    background-color: #Fff;
    box-shadow: 0 2px 48px 0 rgb(255 0 0 / 8%);
    width: 100%;
    height: auto;
    cursor: pointer;
    transform: translate(-10px, -15px);
    opacity: 100% !important;
    

    /* &:hover {
        transform: translate(-5%, -30%);
    } */
`
export const CardBackground = styled.div `
    width: 160px;
    background-color: #a679dd;
    margin-left: 30px;
    border-radius: 20px;
    margin: 15px;
    transition: 0.3s ease;
    
    &:hover {
        transform: translate(0, -10px);
    }

    @media screen and (max-width: 1200px) {
        width: 130px;
    }

    @media screen and (max-width: 1000px) {
        width: 140px;
    }
    @media screen and (max-width: 800px) {
        width: 36%;
    }

`
export const CardContent = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
    opacity: 100% !important;
`
export const CardImg = styled.div ``
export const CardTitle = styled.h4 `
    margin: 15px 0 10px 0;
    font-weight: 500;
`
export const CardDesc = styled.p `
    margin: 0;
    color: #777777;

`