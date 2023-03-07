import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export const About = () => {
  useEffect(()=>{
    AOS.init(({
      offset: 150,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    }))
  },[])
  return (
    <Box className='aboutbox'  id='about'  w={'100%'}  color='rgba(0,0,0,.9)'>
       <SimpleGrid columns={{lg:2,md:1,sm:1}} >
    <Box data-aos="zoom-in" width={'80%'}  margin="auto" display='grid' alignItems='center'  textAlign="center" >
      <Heading fontSize='2xl'
  fontWeight='extrabold' marginTop={'50px'}>
About
</Heading>
  <Text className='about'  marginTop={'20px'} marginBottom={'80px'}>
  Full-Stack Web Developer with the ability to learn and collaborate in rapidly 
  changing environments and compositions. Worked through 1000+ hours of Bootcamp structure learning JavaScript, Node.Js, React.Js, MongoDB, Express, HTML5, and CSS3.
  I  hereby  declare  that  all  the  information 
 mentioned  above  is  true  to  the  best  of  my  knowledge. I will make it my earnest endeavor to discharge competently and carefully  the duties you may be pleased to entrust with me..
  </Text>
    </Box>
    <Box    margin="auto" width={'80%'} >
        <img data-aos="zoom-in"  width={'100%'}  src="https://devtechnosys.com/insights/wp-content/uploads/2021/07/full-stack-development.gif" alt="animation" />
      </Box>
    </SimpleGrid>
    </Box>
  )
}


