import styled from 'styled-components'

export const CardWrapper = styled.div `
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.10);
    margin: 15px;
    width: 350px;

    @media screen and (max-width: 1300px) {
        width: 300px;
    }
    @media screen and (max-width: 750px) {
        width: 270px;
    }
    @media screen and (max-width: 700px) {
        width: 80%;
    }
`
export const CardContent = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`
export const CardTitle = styled.div `
    h4 {
        margin: 15px 0;
        font-weight: 500;
    }
`
export const CardPrice = styled.div `
    background-color: ${({primary}) => (primary ? '#8261ee' : '#ff589e')}  ;
    width: 80%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 20px;
    padding: 15px;

    p {
        margin: 0;
        font-size: 0.85rem;
    }
    #price {
        font-size: 1.4rem;
        font-weight: 500;
        margin-bottom: 5px;
    }
`
export const CardFeatures = styled.div `

    ul {
        list-style-type: none;
        margin-left: 0;
        padding: 15px;
    }

    li p{
        margin: 10px;
        font-size: 13px;
        color: #777;
    }
`
export const CardButton = styled.div ``