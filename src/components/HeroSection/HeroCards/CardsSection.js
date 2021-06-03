import React from 'react'
import styled from 'styled-components'
import HeroCard from '../../Cards/HeroCard/HeroCard'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.div `
    display:flex;
    justify-content:center;

`
const CardsWrapper = styled.div `
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    transform: translate(0, -220px);
    margin-bottom: -140px;
    width: 70%;
    

    @media screen and (max-width: 1250px) {
        #card-wrapper{
            width: 250px;
        }
        flex-wrap: wrap;
    }

    @media screen and (max-width: 1000px) {
        flex-wrap: wrap;
        width: 690px;
        #card-wrapper{
            width: 280px ;
        }
    }

        @media screen and (max-width: 700px) {
            width: 100%;
        #card-wrapper {
            width: 100%;
            transform: translate(0, 0);
        }
        }
`
const CardsRow = styled.div `
    display:flex;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        display:flex;
        justify-content: flex-start !important;
        width: 660px;
        flex-wrap:wrap;
    }
`


const CardsSection = () => {
    return (
        <section id='hero-cards'>
            <Fade bottom>
                <Wrapper>
                    <CardsWrapper>
                    
                    <CardsRow>   
                            <HeroCard id='card' title='Modern Strategy' desc='Customize anything in this template to fit your website needs'/>
                                <HeroCard id='card' title='Best Relationship' desc='Contact us immediately if you have a question in mind'/>
                                <HeroCard id='card' title='Ultimate Marketing' desc='You just need to tell your friends about our free templates'/>  
                    </CardsRow>
                    
                    </CardsWrapper> 
                </Wrapper>
            </Fade>
        </section>               
    )
}

export default CardsSection
