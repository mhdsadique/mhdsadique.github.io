import { Box, Text, } from '@chakra-ui/react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button, Link  } from 'react-scroll'

import './navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
            
                    <Text bgGradient='linear(to-l, #7928CA, #FF0080)'bgClip='text'
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
                        {/* <a href='#about' onClick={closeMenu}>About</a> */}
                        <Link to="about" activeStyle={{color: "orange"}} spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item' style={{cursor:'pointer'}}>
                        {/* <a href='#skills' onClick={closeMenu}>Skills</a> */}
                        <Link to="skills" activeStyle={{color: "orange"}} spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>skills</Link>
                    </li>
                    <li className='nav-item' style={{cursor:'pointer'}}>
                        {/* <a href='#projects' onClick={closeMenu}>Projects</a> */}
                        <Link to="projects" activeStyle={{color: "orange"}} spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>projects</Link>
                    </li>
                    <li className='nav-item' style={{cursor:'pointer'}}>
                        {/* <a href='#contact' onClick={closeMenu}>Contact</a> */}
                        <Link to="contact" activeStyle={{color: "orange"}} spy={true} smooth={true} offset={100} duration={500} onClick={closeMenu}>contact</Link>
                    </li>
              
                <a href="https://drive.google.com/file/d/14xFKToC0yuN5EGO8NvGuLcoto6mSQb3D/view?usp=sharing"> 
  <button  style={{marginLeft:"20px"}}> 
  <Text bgGradient='linear(to-r, red.500, yellow.500)'   bgClip='text'
  fontSize='xl'
  fontWeight='extrabold'>RESUME</Text></button>
  </a>
  </ul>
            </nav>
        </div>
    )
}

export default Navbar



