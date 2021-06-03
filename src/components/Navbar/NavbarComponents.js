import styled from 'styled-components'
import {CgMenuLeft} from 'react-icons/cg'
import {GrClose} from 'react-icons/gr'
import {Link } from 'react-scroll'

export const NavWrapper = styled.div `
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    
    
`
export const Nav = styled.div `
    position: fixed;
    top: 30px;
    border-radius: 40px;
    box-shadow: 0px 0px 15px rgb(0 0 0 / 10%);
    display:flex;
    height:80px;
    align-items: center;
    transition: 0.5s ease;
    background-color: #fff;
    z-index: 99;
    

    @media screen and (max-width: 1000px) {
        width: 80%;
        flex-direction: column;
        height:auto;
    }
    
`
export const ContentWrapper = styled.div `
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
`
export const LogoWrapper = styled.div `
    padding: 50px;
    align-items: center;
    img {
        cursor: pointer;
    }
    @media screen and (max-width: 1200px) {
        padding-right: 60px;
    }
    @media screen and (max-width: 1000px) {
        position: absolute;
        left: 40px;
        padding: 0;
    }
    @media screen and (max-width: 500px) {
        left: 15px;
    }

`
export const TextWrapper = styled.div `
    @media screen and (max-width: 1000px) {
        display: none;
    }
`
export const MenuWrapper = styled.div `
    display:flex;
    color: #1e1e1e;

    /* @media screen and (max-width: 1000px) {
        display: none;
    } */
`
export const MenuItem = styled(Link) `
    padding: 15px;
    font-size: 15px;
    p {
        cursor: pointer;

        &:hover {
            color: #ff589e;
        }
    }
    
    @media screen and (max-width: 1200px) {
        padding: 8px;
    }
`
export const MobileWrapper = styled.div `
    display:none;

    @media screen and (max-width: 1000px) {
        display:flex;
    }
`
export const IconsWrapper = styled.div `
    font-size: 2rem;
    padding: 25px;
    align-items: center;
    display:flex;
    justify-content: center;
`
export const MenuIcon = styled(CgMenuLeft) `
   display: ${({open}) => (open ? 'none' : 'flex' )};

   @media screen and (max-width: 1000px) {
        position:absolute;
        right:20px;
    }
`
export const CloseIcon = styled(GrClose) `
    display: ${({open}) => (open ? 'flex' : 'none' )};
    
    @media screen and (max-width: 1000px) {
        position:absolute;
        right:20px;
    }
`
export const DropdownMenu = styled.div `
    width: 100%;
    /* background-color: red; */
    position: relative;
    display:none;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    overflow: hidden;
    transition: 0.5s ease;

    :last-child {
        border-radius: 0 0 40px 40px;
    }

    @media screen and (max-width: 1000px) {
       display: ${({open}) => (open ? 'flex' : 'none' )};
    }
`
export const DropdownItem = styled(Link) `
    border-top: 1px solid #000;
    cursor: pointer;
    display:flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    color: #3B566E;
    transition: 0.3s ease;

    &:hover {
        background-color: #eee;
    }
    
`