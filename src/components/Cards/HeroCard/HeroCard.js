import React from 'react'
import * as Cp from './HeroCardComponents'

const HeroCard = ({title,desc}) => {
    return (
        <Cp.CardWrapper id='card-wrapper'>
            <Cp.CardContent>
                <Cp.CardImg id='img'> <img src= 'https://templatemo.com/templates/templatemo_535_softy_pinko/assets/images/featured-item-01.png' alt='card-icon' /> </Cp.CardImg>
                <Cp.CardTitle> <h3>{title}</h3></Cp.CardTitle>
                <Cp.CardDesc><p>{desc}</p></Cp.CardDesc>
            </Cp.CardContent>
        </Cp.CardWrapper>
    )
}

export default HeroCard
