import styled from 'styled-components'

export const SectionWrapper = styled.div `
    display:flex;
    justify-content: center;
    background-color: #f2f2fe;
`
export const ContentWrapper = styled.div `
    width: 80%;
    padding: 85px 0;
    #title {
        color: #1e1e1e;
    }
`
export const DetailsWrapper = styled.div `
    display:flex;
    width: 100%;
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
    
`
export const AddressWrapper = styled.div `
    width: 30%;
    padding: 25px;

    p {
        font-size: 14px;
        color: #777;
    }
    h4 {
        font-weight: 500;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        padding: 0;
    }
`
export const FormWrapper = styled.div `
    /* justify-content: center; */
    align-items: center;
    width: 70%;
    display:flex;
    flex-direction: column;
    @media screen and (max-width: 800px) {
        width: 100%;
    }
`

export const Form = styled.div `
    width: 100%;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;

   input {
      width: 300px;
      margin: 10px;
      height: 2rem;
      border-radius: 20px;
      padding: 5px 0 5px 15px;
      border: 0;
      outline: 0;

      :focus {
          border: 2px solid rgb(128, 189, 255, 0.75);
      }

      @media screen and (max-width: 1250px) {
        width: 80%;
        }
        @media screen and (max-width: 800px) {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
    }
   } 

    #message {
        width: 628px;
        height: 6rem;

        @media screen and (max-width: 1250px) {
        width: 80%;
        }
        @media screen and (max-width: 800px) {
        width: 100%;
    }
    }

    
`
export const BtnWrapper = styled.div `
`