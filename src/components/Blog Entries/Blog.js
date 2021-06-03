import React from 'react'
import Card from '../Cards/Blog Card/Card'
import { DescWrapper, TitleWrapper } from '../InfoSection/InfoComponents'
import { TextWrapper } from '../Pricing Plans/PricingComponents'
import * as Cp from './BlogComponents'
import {blogData} from '../Data'

const Blog = () => {
    const cards = blogData.map((item) => (
        <Card {...item} />
    ))
    return (
        <section id='blog' name='blog'>
        <Cp.SectionWrapper>
            <Cp.ContentWrapper>
                <TextWrapper id='text'>
                    <TitleWrapper>Blog Entries</TitleWrapper>
                    <DescWrapper>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</DescWrapper>
                </TextWrapper>
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

export default Blog
