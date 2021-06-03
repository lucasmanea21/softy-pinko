import styled from 'styled-components'

export const CardWrapper = styled.div `
    background-color: #fff;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin: 25px;
    width: 350px;
    cursor:pointer;
    box-shadow: 0 2px 48px 0 rgb(0 0 0 / 10%);
     &:hover #img{
        background-color: #ff589e;
    }
    
`
export const CardContent = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 60px;
    /* max-width: 60%; */

    @media screen and (max-width: 1250px) {
        padding: 20px 30px;
    }
`
export const CardImg = styled.div `
    background-color: #8261ee;
    border-radius: 50%;
    transition: 0.5s ease;

    img {
        padding: 20px;
    }

   
`
export const CardTitle = styled.div `
    h3 {
        margin: 20px 0 5px 0;
        font-weight: 500;
    }
`
export const CardDesc = styled.div `
    color: #777777;
    text-align: center;
`