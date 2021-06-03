import styled from 'styled-components'

export const SectionWrapper = styled.div `
    background: url('https://templatemo.com/templates/templatemo_535_softy_pinko/assets/images/fun-facts-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    justify-content: center;
    display:flex;
`
export const ContentWrapper = styled.div `
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    padding: 35px 0;

    #image {
        justify-content: center;
        align-items: center;
        display:flex;
        @media screen and (max-width: 1000px) {
            display: none;
        }
    }

    @media screen and (max-width: 1000px) {
        flex-wrap: wrap; 
    }
`
export const Item = styled.div `
    color: #Fff;
    display: flex;
    flex-direction: column;
    margin: 15px;
    align-items: center;
    
    @media screen and (max-width: 1000px) {
        width: 45%;
    }
    @media screen and (max-width: 770px) {
        width: 100%;
    }

   span {
        font-size: 1.8rem;
        font-weight: 600;
    }

    p {
        margin: 0;
    }
`