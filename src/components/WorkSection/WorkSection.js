import React from 'react'
import WorkCard from '../Cards/WorkCard/WorkCard'
import * as Cp from './WorkComponents'
import {workData} from '../Data'

const WorkSection = () => {
    const cards = workData.map((item) => (
        <WorkCard {...item} />
    ) )
    return (
        <section id='work' name='work'>
        <Cp.SectionWrapper>
            <Cp.ContentWrapper>
                <Cp.TextWrapper>
                    <Cp.WorkTitle>Work Process</Cp.WorkTitle>
                    <Cp.WorkDesc>Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam.</Cp.WorkDesc>
                </Cp.TextWrapper>

                <Cp.CardsWrapper id='cards-wrapper'>
                    <Cp.CardsRow>
                       {cards}
                    </Cp.CardsRow>
                </Cp.CardsWrapper>
            </Cp.ContentWrapper>
        </Cp.SectionWrapper>
        </section>
    )
}

export default WorkSection
