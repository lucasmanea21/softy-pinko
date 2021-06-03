import React from 'react'
import { DescWrapper, TitleWrapper } from '../InfoSection/InfoComponents'
import { TextWrapper } from '../WorkSection/WorkComponents'
import * as Cp from './Components'
import Button  from '../Buttons/Button'
const Contact = () => {
    return (
        <section name='contact' id='contact'>
        <Cp.SectionWrapper>
            <Cp.ContentWrapper>
                <TextWrapper>
                    <TitleWrapper id='title'>Talk To Us</TitleWrapper>
                    <DescWrapper>Maecenas pellentesque ante faucibus lectus vulputate sollicitudin. Cras feugiat hendrerit semper.</DescWrapper>
                </TextWrapper>
                <Cp.DetailsWrapper>
                    <Cp.AddressWrapper>
                        <h4>Keep in touch</h4>
                        <p>110-220 Quisque diam odio, maximus ac consectetur eu, 10260 auctor non lorem</p>
                        <p>You are NOT allowed to re-distribute Softy Pinko template on any template collection websites. Thank you.</p>
                    </Cp.AddressWrapper>
                    <Cp.FormWrapper>
                        <Cp.Form>
                            <input placeholder='Full Name' />
                            <input placeholder='Email Address' type='email'/>  
                            <input placeholder = 'Your message' id='message' />         
                        </Cp.Form>
                       <Cp.BtnWrapper><Button text='send message' bgColor='#8261ee'/> </Cp.BtnWrapper> 
                    </Cp.FormWrapper>
                </Cp.DetailsWrapper>
            </Cp.ContentWrapper>
        </Cp.SectionWrapper>
    </section>
    )
}

export default Contact
