import React from 'react'
import Button from '../../Buttons/Button'
import * as Cp from './CardComponents'

const Card = ({primary,title,price,space,transfer, support,emails,security}) => {
    return (
        <Cp.CardWrapper id='card-wrapper'>
            <Cp.CardContent>
                <Cp.CardTitle> <h4>{title}</h4></Cp.CardTitle>
                <Cp.CardPrice primary={primary}><p id='price'> ${price} </p> <p>monthly</p></Cp.CardPrice>
                <Cp.CardFeatures>
                    <ul>
                        <li><p>{space} GB space</p></li>
                        <li><p>{transfer} GB transfer</p></li>
                        <li><p>Pro Design Panel</p></li>
                        <li><p  style={{textDecoration: support ? 'none' : 'line-through'}} >15-minute support</p></li>
                        <li><p style={{textDecoration: emails ? 'none' : 'line-through'}}>Unlimited Emails</p></li>
                        <li style={{textDecoration: security ? 'none' : 'line-through'}}><p>24/7 Security</p></li>
                    </ul>
                </Cp.CardFeatures>
                <Cp.CardButton><Button bgColor='#8261ee' text='Purchase now' hoverColor='#ff589e'/></Cp.CardButton>
            </Cp.CardContent>
        </Cp.CardWrapper>
    )
}

export default Card
