

import { Button, Box, Center, Flex, Grid, Heading, Image, SimpleGrid, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AuthContext } from '../component/auth'
// import  Scroll from 'react-scroll';
// import { Link, Button, Element, Events, animateScroll 
//   as scroll, scrollSpy, } from 'react-scroll'
var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;
export const Navb = () => {
  scroll.scrollToBottom();
  return (
    <Box display="flex" justifyContent="end" >
      {/* <Flex justifyContent={"space-around"}> */}

      {/* <Link to="section1"></Link> */}
      <Button activeClass="active" className="btn" type="submit" value="Test 2" to="test2" spy={true} smooth={true} offset={50} duration={500} >
          Test 2
        </Button>  
      <SimpleGrid columns={{lg:2,md:1,sm:1}} >
    <Center>

      <Box  w="50%">
        <img  src="https://avatars.githubusercontent.com/u/101445847?v=4" alt="mhd sadique" 
      style={{borderRadius:"50%"}} />
      </Box>
    </Center>
    <Center>
      <Box  w="50%" display={"grid"} justifyContent="center" alignItems={"center"} gap={8} >
         <Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='2xl'
  fontWeight='extrabold'>
Hi, I am Muhammed Sadique,</Text>
  {/* <Heading as='h3' size='lg'></Heading> */}
  <Text   bgGradient='linear(to-r, red.500, yellow.500)'
  bgClip='text'
  fontSize='2xl'
  fontWeight='extrabold'
>
Full Stack Web Developer !,
</Text>
<Text noOfLines={[1, 2, 3]}>
I  hereby  declare  that  all  the  information 
 mentioned  above  is  true  to  the  best  of  my  knowledge. I will make it my earnest endeavor to discharge competently and carefully  the duties you may be pleased to entrust with me
</Text>

           <a href="https://drive.google.com/file/d/14xFKToC0yuN5EGO8NvGuLcoto6mSQb3D/view?usp=sharing">   <Button size='lg'   bgGradient={[
    'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]} > <Text bgGradient='linear(to-r, red.500, yellow.500)'   bgClip='text'
  fontSize='2xl'
  fontWeight='extrabold'>RESUME</Text></Button></a>

 
             
       <Box>
               {/* <Center> */}
        <Flex gap={10}>
       <a href="https://www.linkedin.com/in/muhammed-sadique-064385230/">
       <Image w="50px" src="https://media-exp1.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831589865?e=1678924800&v=beta&t=g39mEwT0a4f25zx4YdClQnGd6q0Yb2ilFisuB3EPfng" alt="linkedIn"></Image>

       </a>
       <a href="https://github.com/mhdsadique">
       <Image w="50px" src="https://www.bing.com/th?id=OIP.ckeUFk-yid0vfWnd56w7wAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="github"></Image>

       </a>
       <a href="mailto:mhdsadique8@gmail.com">
       <Image w="55px" src="https://www.bing.com/th?id=OIP.ZYBoGvR_bfdiAQLZZpVHQAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="email"></Image>

       </a>

        </Flex>

        </Box>     
   <Box>

        {/* <Element name="test2" className="element">
          test 2
        </Element> */}
   </Box>
      </Box>

</Center>
   
        </SimpleGrid>
    </Box>
  )
}
