import React from 'react'
import Button from '../Buttons/Button'
import * as Cp from './HeroComponents'
const HeroSection = () => {
    return (
        <section name="hero">
          <Cp.HeroWrapper>
            <Cp.HeroContent>
                <Cp.HeroTitle>
                    <h3>We provide the best <strong>strategy </strong> <br/> to grow up your <strong>business</strong></h3>
                </Cp.HeroTitle>
                <Cp.HeroDesc>
                    <p>Softy Pinko is a professional Bootstrap 4.0 theme designed by Template Mo for your company at absolutely free of charge</p>
                </Cp.HeroDesc>
                <Cp.HeroBtn>
                <Button bgColor='#ff589e' text='Discover More' hoverColor='#8261ee'/>
                </Cp.HeroBtn>
            </Cp.HeroContent>
        </Cp.HeroWrapper>  
        </section>
        
    )
}

export default HeroSection
