import React from 'react'
import Button from '../../Buttons/Button'
import { DescWrapper, TitleWrapper } from '../../InfoSection/InfoComponents'
import * as Cp from './CardComponents'

const Card = ({src,alt,title,desc}) => {
    return (
        <Cp.CardWrapper>
            <Cp.CardContent>
                <Cp.ImageWrapper>
                    <img src={src} alt={alt} />
                </Cp.ImageWrapper>
                <Cp.TextWrapper>
                    <TitleWrapper id='title'>{title}</TitleWrapper>
                    <DescWrapper id='desc'>{desc}</DescWrapper>
                </Cp.TextWrapper>
                <Cp.ButtonWrapper> <Button id='button' text='Read More' bgColor='#8261ee' hoverColor='#ff589e'/> </Cp.ButtonWrapper>
            </Cp.CardContent>
        </Cp.CardWrapper>
    )
}

export default Card
