import React from 'react'
import * as Cp from './CardComponents'

const Card = ({desc, name, role}) => {
    return (
        <Cp.CardWrapper>
            <Cp.CardContent>
                <Cp.ImageWrapper> <img src='https://templatemo.com/templates/templatemo_535_softy_pinko/assets/images/testimonial-icon.png' alt='quote-icon'/> </Cp.ImageWrapper>
                <Cp.TextWrapper><p> {desc}</p></Cp.TextWrapper>
                <Cp.DetailsWrapper id='details-wrapper'>
                    <Cp.NameWrapper>{name}</Cp.NameWrapper>
                    <Cp.FunctionWrapper>{role}</Cp.FunctionWrapper>
                </Cp.DetailsWrapper>
            </Cp.CardContent>
        </Cp.CardWrapper>
    )
}

export default Card
