import { Box, Button, Center, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import './home.css'
import MovingText from 'react-moving-text'
import  mhdsadique from "./image/mhdsadique.png"
import resume from './resume/Muhammed-Sadique-Resume.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
const Home = () => {
  useEffect(()=>{
    AOS.init(({
      offset: 160,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    }))
     },[])
    return (
        <Box  className='hero' id='home'>
 <SimpleGrid columns={{lg:2,md:1,sm:1}} >
<Center>


<Box w={'100%'}  
  size='md' >
  <Center>

  <Image data-aos="zoom-in" boxShadow='base' p='6' rounded='md' bg='white' height={'100%'} width={"60%"} name='muhammrd sadique'  src={mhdsadique} alt="mhd sadique" 
style={{borderRadius:"10%"}} />
</Center>
</Box>
</Center><Center>
            <Box   data-aos="zoom-in"
     className='content'>
       <SimpleGrid columns={{lg:1,md:1,sm:1}} >
            <Text fontStyle={'italic'} data-aos="zoom-in"
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
 className='names'
  fontWeight='extrabold'> 
Hi, I am  </Text > 
<Text fontStyle={'italic'} data-aos="zoom-in"
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
 className='names'
  fontWeight='extrabold'>  Muhammed Sadique, </Text >
  </SimpleGrid>

<Text bgGradient='linear(to-r, red.500, yellow.500)'   bgClip='text'
 data-aos="zoom-in"
 className='names'
  fontWeight='extrabold'>
      <MovingText type="typewriter"
  dataText={[
   " Full Stack Web Developer !,",
   "MERN Stack Developer !,"]}/>
</Text>
<Text className='bttexpalin'   fontSize='33xl' data-aos="zoom-in">
I am a Full stack web developer doing militry style coding and learning MERN Stack at Masai School. I have done various group as well as individual projects in my coding journey.

</Text>
<a href={resume} download> 
  <Button data-aos="zoom-in" onClick={()=>window.open("https://drive.google.com/file/d/18TexLXt6ZI91jwV4jv_QRPk1jyv6rFRB/view?usp=sharing",'_blank')} size='lg'   bgGradient={[
    'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]} > 
  <Text bgGradient='linear(to-r, red.500, yellow.500)'   bgClip='text'
  fontSize='2xl'
  fontWeight='extrabold'>RESUME</Text></Button> </a>           
<Box>
          <Center>
        <Flex gap={10}>
       <a href="https://www.linkedin.com/in/muhammed-sadique-064385230/" target={"_blank"} rel="noreferrer">
       <Image data-aos="zoom-in" w="50px" src="http://t0.gstatic.com/images?q=tbn:ANd9GcRMCA3j2A8hfLl9p5UAU5nd9lvqLlNZvqoU4xOsZ192uH4IYS6X" alt="linkedIn"></Image>

       </a>
       <a href="https://github.com/mhdsadique" target={"_blank"} rel="noreferrer">
       <Image data-aos="zoom-in" w="50px" src="https://www.bing.com/th?id=OIP.ckeUFk-yid0vfWnd56w7wAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="github"></Image>

       </a>
       <a href="mailto:mhdsadique8@gmail.com" >
       <Image data-aos="zoom-in" w="55px" src="https://www.bing.com/th?id=OIP.ZYBoGvR_bfdiAQLZZpVHQAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="email"></Image>

       </a>
        </Flex>
       </Center>

        </Box>    
            </Box>
            </Center>
            </SimpleGrid>
        </Box>
    )
}

export default Home
