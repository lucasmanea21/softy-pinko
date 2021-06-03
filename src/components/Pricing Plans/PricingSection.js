import React from 'react'
import Card from '../Cards/Pricing Card/Card'
import { DescWrapper, TitleWrapper } from '../InfoSection/InfoComponents'
import * as Cp from './PricingComponents'
import {pricingData} from '../Data'

const PricingSection = () => {
    const cards = pricingData.map((item) => (
        
           <Card {...item} /> 
        
        
    ))
    return (
        <section id='plans' name='plans'>
        <Cp.SectionWrapper>
            <Cp.ContentWrapper>
                <Cp.TextWrapper>
                    <TitleWrapper>Pricing Plans</TitleWrapper>
                    <DescWrapper>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</DescWrapper>
                </Cp.TextWrapper>
               
                    <Cp.CardsSection>
                        <Cp.CardsWrapper>
                              {cards}  
                        </Cp.CardsWrapper> 
                    </Cp.CardsSection>
              
            </Cp.ContentWrapper>
        </Cp.SectionWrapper>
        </section>
    )
}

export default PricingSection
