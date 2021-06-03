import React from 'react'
import * as Cp from './FooterComponents'
import {socialData} from '../Data'

const Footer = () => {
    const icons = socialData.map((item) => (
        <Cp.SocialIconWrapper>
            {item}
        </Cp.SocialIconWrapper>
    ))
    return (
        <section>
        <Cp.FooterWrapper>
            <Cp.ContentWrapper>
                    <Cp.SocialWrapper>
                        {icons}
                    </Cp.SocialWrapper>
                <Cp.Line/>
                    <Cp.TextWrapper>
                <p>COPYRIGHT © 2020 SOFTY PINKO COMPANY - Design: TEMPLATEMO <br /> Coded by <a href='https://github.com/lucasmanea21'>Lucas Manea</a></p>
                    </Cp.TextWrapper>
            </Cp.ContentWrapper>
        </Cp.FooterWrapper>
        </section>
    )
}

export default Footer
