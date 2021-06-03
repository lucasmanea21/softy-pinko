import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.div `
    background-color: ${({bgColor}) => bgColor};
    border-radius: 40px;
    cursor: pointer;
    transition: 0.3s ease;

    p {
        padding: 13px 20px;
        text-transform: uppercase;
        font-size: 13px;
        color: #fff;
    }

    &:hover {
        background-color: ${({hoverColor}) => hoverColor};
    }
`

const Button = ({bgColor,text,hoverColor}) => {
    return (
        <ButtonWrapper bgColor={bgColor} hoverColor={hoverColor} to='contact'>
            <p>{text}</p>
        </ButtonWrapper>
    )
}

export default Button
