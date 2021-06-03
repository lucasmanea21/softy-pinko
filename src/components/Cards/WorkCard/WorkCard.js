import React from 'react'
import * as Cp from './WorkCardComponents'

const WorkCard = ({title}) => {
    return (
        <Cp.CardBackground>
          <Cp.CardWrapper>
             <Cp.CardContent>
                <Cp.CardImg>
                <img src='https://templatemo.com/templates/templatemo_535_softy_pinko/assets/images/work-process-item-01.png' alt='rocket' />
                </Cp.CardImg>
                <Cp.CardTitle>{title}</Cp.CardTitle>
                <Cp.CardDesc>Lorem ipsum dolor sit amet</Cp.CardDesc>
            </Cp.CardContent>
          </Cp.CardWrapper>
        </Cp.CardBackground>
    )
}

export default WorkCard
