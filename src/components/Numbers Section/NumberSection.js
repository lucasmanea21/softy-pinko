import React,{useState, useEffect} from 'react'
import * as Cp from './SectionComponents'
import CountUp from 'react-countup';
import {numbersData} from '../Data'
import { Fade } from 'react-reveal';
import ReactVisibilitySensor from 'react-visibility-sensor';

const NumberSection = () => {
    const items = numbersData.map((item,index) => {
        const length = numbersData.length
        return (
        <React.Fragment>
        <Cp.Item>
            <CountUp id='counter'end={item.number} /> <br />
            <p>{item.title}</p>
        </Cp.Item>
        {!(index === length - 1) &&
            <div id='image'><img src='https://templatemo.com/templates/templatemo_535_softy_pinko/assets/images/circle-dec.png' /> </div>
        }
        </React.Fragment>
    )})
    return (
        <section id='numbers-section'>
             <Fade>
              <Cp.SectionWrapper>
                 <Cp.ContentWrapper>
                    {items}
                   </Cp.ContentWrapper>
              </Cp.SectionWrapper>   
              </Fade> 
        </section>
        
    )
}

export default NumberSection
