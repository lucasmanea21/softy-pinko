import styled from 'styled-components'

export const SectionWrapper = styled.div `
    background: url('https://templatemo.com/templates/templatemo_535_softy_pinko/assets/images/work-process-bg.png');
    background-repeat: no-repeat;
    background-position: (50% 50%);
    background-size: cover;
    display:flex;
    justify-content: center;

`
export const ContentWrapper = styled.div `
    padding: 50px 0;
    width: 90%;
    display:flex;
    justify-content: center;
    flex-direction: column;
  
`
export const TextWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: #fff;
    padding: 15px;
`
export const WorkTitle = styled.h4 `
    font-size: 20px;
`
export const WorkDesc = styled.p `
    margin: 0;
`
export const CardsWrapper = styled.div `
    margin-top: 50px;
    display:flex;
    justify-content: center;
    align-items: center;
`
export const CardsRow = styled.div `
    display:flex;

    @media screen and (max-width: 1000px) {
        width: 690px;
        flex-wrap: wrap;
    }
    @media screen and (max-width: 800px) {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
    }
`