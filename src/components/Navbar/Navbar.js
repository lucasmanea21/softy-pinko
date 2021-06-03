import React,{useState} from 'react'
import * as Cp from './NavbarComponents'


const Navbar = () => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }


    return (
        <section id='navbar'>
        <Cp.NavWrapper>
        <Cp.Nav>
            <Cp.ContentWrapper id='content'>
                <Cp.LogoWrapper>
                    <img src='https://templatemo.com/templates/templatemo_535_softy_pinko/assets/images/logo.png' alt='softy-pinko-logo' />
                </Cp.LogoWrapper>
                <Cp.TextWrapper>
                    <Cp.MenuWrapper>
                        <Cp.MenuItem to="hero" spy={true} smooth={true} offset={-150} duration={500}><p>Home</p></Cp.MenuItem>
                        <Cp.MenuItem to="about" spy={true} smooth={true}  offset={-150} duration={500} ><p>About</p></Cp.MenuItem>
                        <Cp.MenuItem to="work" spy={true} smooth={true} offset={-150} duration={500} ><p>Work Process</p></Cp.MenuItem>
                        <Cp.MenuItem to="testimonials" spy={true} smooth={true} offset={-150} duration={500} ><p>Testimonials</p></Cp.MenuItem>
                        <Cp.MenuItem to="plans" spy={true} smooth={true} offset={-150} duration={500} ><p>Pricing Tables</p></Cp.MenuItem>
                        <Cp.MenuItem to="blog" spy={true} smooth={true} offset={-100} duration={500} ><p>Blog Entries</p></Cp.MenuItem>
                        <Cp.MenuItem to="contact"  spy={true} smooth={true} offset={-150} duration={500} ><p>Contact Us</p></Cp.MenuItem>
                    </Cp.MenuWrapper>
                </Cp.TextWrapper>
                <Cp.MobileWrapper>
                    <Cp.IconsWrapper>
                        <Cp.MenuIcon open={open} onClick={toggle}/>
                        <Cp.CloseIcon open={open} onClick={toggle}/>
                    </Cp.IconsWrapper>
                </Cp.MobileWrapper>
            </Cp.ContentWrapper>
            <Cp.DropdownMenu open={open}>
                    <Cp.DropdownItem to="hero" spy={true} smooth={true} offset={50} duration={500}  onClick={toggle}><p>Home</p></Cp.DropdownItem>
                    <Cp.DropdownItem to="about" spy={true} smooth={true}  offset={50} duration={500} onClick={toggle}><p>About</p></Cp.DropdownItem>
                    <Cp.DropdownItem to="work" spy={true} smooth={true} offset={50} duration={500} onClick={toggle}><p>Work Process</p></Cp.DropdownItem>
                    <Cp.DropdownItem to="testimonials" spy={true} smooth={true} offset={50} duration={500} onClick={toggle}><p>Testimonials</p></Cp.DropdownItem>
                    <Cp.DropdownItem to="plans" spy={true} smooth={true} offset={50} duration={500} onClick={toggle}><p>Pricing Tables</p></Cp.DropdownItem>
                    <Cp.DropdownItem to="blog" spy={true} smooth={true} offset={50} duration={500} onClick={toggle}><p>Blog Entries</p></Cp.DropdownItem>
                    <Cp.DropdownItem to="contact"  spy={true} smooth={true} offset={50} duration={500} onClick={toggle}><p>Contact Us</p></Cp.DropdownItem>
            </Cp.DropdownMenu>  
        </Cp.Nav>
        </Cp.NavWrapper>
            
            </section>
    )
}

export default Navbar
