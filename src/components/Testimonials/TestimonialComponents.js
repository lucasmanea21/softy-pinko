import styled from 'styled-components'

export const SectionWrapper = styled.div `
    display:flex;
    justify-content: center;
`
export const ContentWrapper = styled.div `
    width: 90%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 90px 0;

     @media screen and (max-width:700px) {
        width: 90%;
    }
`
export const TextWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 50%;
    padding: 15px;

    @media screen and (max-width:1000px) {
        max-width: 630px;
    }

    #title {
        margin-bottom: 10px;
    }
`
export const CardsWrapper = styled.div `
    display:flex;
    justify-content: center;
    flex-wrap:wrap;
    align-items: center;
`
export const CardsRow = styled.div `
    display:flex;
    align-items: center;
    
    
    @media screen and (max-width:1000px) {
        width: 660px;
        flex-wrap:wrap;
    }
    @media screen and (max-width:700px) {
        width: 100%;
    }


`
