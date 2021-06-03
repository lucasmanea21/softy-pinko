import styled from 'styled-components'

export const SectionWrapper = styled.div `
    background-color: #f2f2fe;
    display:flex;
    justify-content: center;
    align-items: center;
`
export const ContentWrapper = styled.div `
    width: 90%;
    padding: 50px 0;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const TextWrapper = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 50px 0;
    width: 50%;

    h3 {
        margin-bottom: 0;
    }
`
export const CardsSection = styled.div `
    display:flex;
    justify-content: center;
    width: 100%;
`
export const CardsWrapper = styled.div `
    display: flex;
    width: 100%;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        justify-content: flex-start;
        width: 661px;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 750px) {
        width: 600px;
    }
    @media screen and (max-width: 700px) {
        justify-content: center;
    }

`