import styled from 'styled-components'

export const SectionWrapper = styled.div `
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const ContentWrapper = styled.div `
    display:flex;
    justify-content: space-between;
    width: 80%;
    padding: 45px 0;
    flex-direction: ${({imgStart}) => (imgStart ? 'row' : 'row-reverse')};

    @media screen and (max-width: 1000px) {
       flex-direction: ${({imgStart}) => (imgStart ? 'column' : 'column-reverse')};; 
    }
`
export const ImageWrapper = styled.div `
    margin: 0 10%;
    display:flex;
    
    img {
        max-width: 100%;
        max-height: 100%;
    }

    @media screen and (max-width: 1000px) {
       max-width: 100%;
       max-height: 100%;
       justify-content: center;
       margin: 0 0 10% 0;
    }
`
export const TextWrapper = styled.div `
    max-width: 45%;


    @media screen and (max-width: 1000px) {
       max-width: 100%;
    }
`
export const TitleWrapper = styled.h3 `
    font-size: 24px;
    font-weight: 500;
    margin: 10px 0 40px 0;
`
export const DescWrapper = styled.p `
    color: #777777;
    font-size: 16px;
`