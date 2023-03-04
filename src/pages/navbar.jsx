import {  Text,Button } from '@chakra-ui/react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {  Link  } from 'react-scroll'
import resume from './resume/Muhammed-Sadique-Resume.pdf'
import './navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
        <div className='header' >
            <nav className='navbar'>
                <a href='/' className='logo'>
            
                    <Text bgGradient='linear(to-l, #7928CA, #FF0080)'bgClip='text'fontStyle={"italic"}
  fontSize='2xl'fontWeight='extrabold'>MUHAMMED SADIQUE</Text>
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' ,cursor:"pointer"}} />)
                        : (<FaBars size={30} style={{ color: '#ffffff',cursor:"pointer" }} />)}
                </div>
             
                <ul className={click ? "nav-menu active" : "nav-menu"} >
                    <li className='nav-item' style={{cursor:'pointer'}}>
                        <Link to="home"  activeStyle={{color: "orange"}}  spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item' style={{cursor:'pointer'}}>
                <Link to="about" activeStyle={{color: "orange"}} spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item' style={{cursor:'pointer'}}>
                        <Link to="skills" activeStyle={{color: "orange"}} spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Skills</Link>
                    </li>
                    <li className='nav-item' style={{cursor:'pointer'}}>
                        <Link to="projects" activeStyle={{color: "orange"}} spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Projects</Link>
                    </li>
                    <li className='nav-item' style={{cursor:'pointer'}}>
                
                        <Link to="contact" activeStyle={{color: "orange"}} spy={true} smooth={true} offset={100} duration={500} onClick={closeMenu}>Contact</Link>
                    </li>
                <a target="_blank" rel="noopener noreferrer" href={resume} download> 
  <Button bgColor={'rgba(0,0,0,.9)'} onClick={()=>window.open("https://drive.google.com/file/d/1XF55OnCmbYdXk1PwR3Sgg7woUTsERSOe/view?usp=sharing",'_blank')} >
  <Text bgGradient='linear(to-r, red.500, yellow.500)'   bgClip='text'
  fontSize='xl'
  fontWeight='extrabold'>RESUME</Text> 
  </Button> 
   </a>
  </ul>
            </nav>
        </div>
    )
}
export default Navbar



