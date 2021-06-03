import styled from 'styled-components'

export const HeroWrapper = styled.div `
    background: url('https://templatemo.com/templates/templatemo_535_softy_pinko/assets/images/banner-bg.png');
    background-repeat: no-repeat;
    background-position: center center;
    height: 100vh;
    background-size: cover;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    /* @media screen and (max-width: 1000px) {
        background-size: 100%;
    } */
`
export const HeroContent = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #Fff;
    width: 50%;
    text-align: center;

    @media screen and (max-width: 1000px) {
        width: 90%;
    }
`
export const HeroTitle = styled.div `
       h3 {
            font-size: 36px;
            font-weight: 500;

            @media screen and (max-width: 1000px) {
                 font-size: 30px;
              }
       } 
    
`
export const HeroDesc = styled.div `
   
   p {
       font-size: 15px;
       font-weight: 400;

       @media screen and (max-width: 1000px) {
            font-size: 14px;
        }
    }
`
export const HeroBtn = styled.div ``
