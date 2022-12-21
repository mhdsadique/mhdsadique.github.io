import { Avatar, Box, Button, Center, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import './home.css'
import  mhdsadique from "./image/mhdsadique.jpg"

const Home = () => {
    return (
        <div className='hero' id='home' >
 <SimpleGrid columns={{lg:2,md:1,sm:1}} >
<Center>


<Box w={'100%'} >
  <Center>

  <Image height={'80%'} width={"50%"} name='muhammrd sadique'  src={mhdsadique} alt="mhd sadique" 
style={{borderRadius:"10%"}} />
</Center>
</Box>
</Center><Center>
            <Box className='content'>
            <Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='2xl'
  fontWeight='extrabold'>
Hi, I am Muhammed Sadique,</Text >
<Text bgGradient='linear(to-r, red.500, yellow.500)'   bgClip='text'
  fontSize='2xl'
  fontWeight='extrabold'>
Full Stack Web Developer !,
</Text>
<Text   fontSize='33xl'>
I am a Full stack web developer doing militry style coding and learning MERN Stack at Masai School. I have done various group as well as individual projects in my coding journey.

</Text>
<a href="https://drive.google.com/file/d/14xFKToC0yuN5EGO8NvGuLcoto6mSQb3D/view?usp=sharing"> 
  <Button size='lg'   bgGradient={[
    'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]} > 
  <Text bgGradient='linear(to-r, red.500, yellow.500)'   bgClip='text'
  fontSize='2xl'
  fontWeight='extrabold'>RESUME</Text></Button></a>


            
<Box>
               {/* <Center> */}
          <Center>
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
       </Center>

        </Box>    
            </Box>
            </Center>
            </SimpleGrid>
        </div>
    )
}

export default Home
