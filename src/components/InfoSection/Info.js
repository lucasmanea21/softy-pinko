import React from 'react'
import * as Cp from './InfoComponents'
import Fade from 'react-reveal/Fade'

const Info = ({src,alt,title,desc,imgStart}) => {
    return (
        <section id='about' name='about'>
            <Cp.SectionWrapper>
            <Cp.ContentWrapper imgStart={imgStart}>
                <Cp.ImageWrapper>
                    <Fade {...(imgStart ? {'left' : 'right'} : {'right' : 'left'})}>
                        <img src={src} alt={alt} />   
                    </Fade>
                    
                </Cp.ImageWrapper>
                <Cp.TextWrapper>
                    <Cp.TitleWrapper>{title}</Cp.TitleWrapper>
                    <Cp.DescWrapper>{desc}</Cp.DescWrapper>
                </Cp.TextWrapper>
            </Cp.ContentWrapper>
            <hr style={{color: '#000'}}/>
            </Cp.SectionWrapper> 
        </section>
       
    )
}

export default Info
