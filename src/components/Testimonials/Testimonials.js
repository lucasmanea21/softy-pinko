import React from 'react'
import Card from '../Cards/TestimonialCard/Card'
import { DescWrapper, TitleWrapper } from '../InfoSection/InfoComponents'
import * as Cp from './TestimonialComponents'
import {testimonialData} from '../Data'

const Testimonials = () => {
    const cards = testimonialData.map((item,index) => (
        <Card {...item}/>
    ))
    return (
        <section id='testimonials' name='testimonials'>
        <Cp.SectionWrapper>
            <Cp.ContentWrapper>
                <Cp.TextWrapper>
                    <TitleWrapper id='title'>What do they say?</TitleWrapper>
                    <DescWrapper>Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero.</DescWrapper>
                </Cp.TextWrapper>
                <Cp.CardsWrapper>
                    <Cp.CardsRow>   
                         {cards}  
                    </Cp.CardsRow>
                </Cp.CardsWrapper>
            </Cp.ContentWrapper>
        </Cp.SectionWrapper>
        </section>
    )
}

export default Testimonials
