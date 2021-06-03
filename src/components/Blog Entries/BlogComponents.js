import styled from 'styled-components'

export const SectionWrapper = styled.div ``
export const ContentWrapper = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 100px 0;

    #text {
        width: 40%;
        padding-top: 0;
        @media screen and (max-width: 1000px) {
            width: 60%
         }
         @media screen and (max-width: 780px) {
          width: 80%;
         }
    }

`

export const CardsSection = styled.div `
    @media screen and (max-width: 780px) {
        display:flex;
        justify-content: center;
    }
    
`
export const CardsWrapper= styled.div `
    display:flex;

    @media screen and (max-width: 1000px) {
        width: 760px;
        flex-wrap: wrap;
    }
    @media screen and (max-width: 780px) {
        justify-content: center;
        width: 80%;
    }
`