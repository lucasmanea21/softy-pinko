import styled from 'styled-components'

export const FooterWrapper = styled.div `
    background-image: linear-gradient(127deg,#a759d1 0%, #8261ee 91%);;
`
export const ContentWrapper = styled.div `
    padding: 35px 0 15px 0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const SocialWrapper = styled.div `
    display:flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 500px) {
        flex-wrap: wrap;
    }
    
`
export const SocialIconWrapper = styled.a `
    display:flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    background-color: #fff;
    border-radius: 50%;
    margin: 10px;


    svg {
        padding: 10px;
        /* background-color: #fff;
        border-radius: 50%; */
        color: #9d5bd9;
        cursor: pointer;
        
    }
    &:hover {
            background-color: #ff589e;
        }
`
export const Line = styled.hr `
    width: 80%;
    border:none;
    background-color: rgb(219, 219, 219, .25);
    height: 1px;
    margin: 20px 0;
    align-items: center;
`
export const TextWrapper = styled.div `
    color: #fff;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 14px;

    a {
        text-decoration: none;
        color: #f06013;
    }
`