import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const About = () => {
  return (
    <Box id='about' w={'100%'} bg='rgba(0,0,0,.9)' color={'white'} marginTop='80px' >

    <Box w={'70%'}  display='grid' alignItems='center'  textAlign="center" margin={"auto"}>
      <Heading fontSize='2xl'
  fontWeight='extrabold' marginTop={'50px'}>
About
</Heading>
  <Text fontSize='xl' marginTop={'50px'} marginBottom={'80px'}>
  Full-Stack Web Developer with the ability to learn and collaborate in rapidly 
  changing environments and compositions. Worked through 1000+ hours of Bootcamp structure learning JavaScript, Node.Js, React.Js, MongoDB, Express, HTML5, and CSS3.
  I  hereby  declare  that  all  the  information 
 mentioned  above  is  true  to  the  best  of  my  knowledge. I will make it my earnest endeavor to discharge competently and carefully  the duties you may be pleased to entrust with me..
  </Text>
    </Box>
    </Box>
  )
}


