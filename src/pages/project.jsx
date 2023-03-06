import { ArrowRightIcon,} from '@chakra-ui/icons'
import {Avatar, Box, Button, Flex, Grid, Heading, SimpleGrid, Spacer, Text} from "@chakra-ui/react"
import myntra from "./image/myntraImage.png"
import revv from "./image/revvImage.png"
import nyka from "./image/landing-nyka.png"
import sephora from "./image/sephora-landing.png"
import "./project.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export const Project = () => {
  

  useEffect(()=>{
    AOS.init(({
      offset: 160,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    }))
     },[])
  return (
    <Box className='boxses'  id='projects' margin={'auto'}  marginTop='100px'marginBottom={'50px'} >
      <Heading  textAlign='center' marginBottom={'50px'}>Projects</Heading>
      <SimpleGrid columns={{lg:1,md:1,sm:1}} gap='50px'>
{/* ------------main */} {/* /------------box1 */}
<Box   bgGradient='linear(to-r, red.500, yellow.500)'  boxShadow='dark-lg' p='6' rounded='md' color={'rgba(0,0,0,.9)'} data-aos="zoom-in" >
       <Grid gap={'20px'}>
      <Box >
        <img src={"https://camo.githubusercontent.com/b59381c77c8b9f47e89632b2a689b1d201df5b6a1b1d5753d00d8d532dfc07f2/68747470733a2f2f692e706f7374696d672e63632f4276395756686a342f53637265656e73686f742d313033342e706e67"} alt="clothiyard"  />
      </Box>

        <Heading color={'white'} marginTop={'10px'} size={'md'}>Clotheyard </Heading>
        <Text fontSize={'2xl'}>Clotheyard, is an shopping mall–based retailer of casual apparel and accessories, principally targeting young adults and teenagers through its Aéropostale stores.</Text>
        
        <Text ><Text as='b'>Tech Stack :</Text> React.js | Chackra UI | HTML | CSS | Javascript | Express | Mongoose | Mongodb</Text>
        <Spacer/>
        <Box w={'80%'} display='flex' alignItems={"center"} justifyContent="center"gap={"15px"} margin="auto">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/PriyanshuPatil/Clotheyard.com">  <Button
      w='130px'
  p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
   bgGradient='linear(to-l, #7928CA, #FF0080)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>Source Code
  <Avatar size='xs' src='https://www.bing.com/th?id=OSK.b15146a8bebfb993c6dad4725c884d6d&w=148&h=148&c=7&o=6&dpr=1.3&pid=SANGAM' alt='github'/>
  </Button>
  </a>
<a target="_blank" rel="noopener noreferrer" href="https://clothiyard.netlify.app/">
<Button
      w='100px'
  p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
   bgGradient='linear(to-l, #7928CA, #FF0080)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>Live <ArrowRightIcon/>
  </Button>
  </a>
  {/* </Flex> */}
  </Box>
  </Grid>
      </Box>
           {/* ---------box4 */}
           <Box data-aos="zoom-in" bgGradient= 'linear(to-r, red.500, yellow.500)'  boxShadow='dark-lg' p='6' rounded='md'  color={'rgba(0,0,0,.9)'}>
        <Grid gap={'20px'}>
      <Box>
        <img src={nyka} alt="nyka"  />
      </Box>

        <Heading color={'white'} marginTop={'10px'} size={'md'}>Nyka </Heading>
        <Text fontSize={'2xl'}>Nyka is an e-commerce website where all types of Skincare, Eyecare, Hairstyle and many more related products are available for men, women and kids.</Text>
        
        <Text><Text as='b'>Tech Stack :</Text> Next.js | Redux | Chackra UI | CSS | Javascript</Text>
        <Spacer/>
        <Box w={'80%'} display='flex' alignItems={"center"} justifyContent="center"gap={"15px"} margin="auto">
      
        <a  target="_blank" rel="noopener noreferrer" href="https://github.com/ankitraju123/secretive-form-5947">  <Button
      w='130px'
  p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
   bgGradient='linear(to-l, #7928CA, #FF0080)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>Source Code
  <Avatar size='xs' src='https://www.bing.com/th?id=OSK.b15146a8bebfb993c6dad4725c884d6d&w=148&h=148&c=7&o=6&dpr=1.3&pid=SANGAM' alt='github'/>
  </Button>
  </a>
<a  target="_blank" rel="noopener noreferrer" href="https://secretive-form-5947-umber.vercel.app/">
<Button
      w='100px'
  p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
   bgGradient='linear(to-l, #7928CA, #FF0080)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>Live <ArrowRightIcon/>
  </Button>
  </a>
  </Box>
  </Grid>
      </Box>
      {/* ////box 2 */}
      <Box data-aos="zoom-in"  bgGradient= 'linear(to-r, red.500, yellow.500)'  boxShadow='dark-lg' p='6' rounded='md'  color={'rgba(0,0,0,.9)'}>
  <Grid gap={"20px"}>
      <Box border="solid 1px white" w={"100%"} h="100%">
        <img src={sephora} alt="sephora"  />
      </Box>


        <Heading color={'white'} marginTop={'10px'}   size={'md'}>Nemow </Heading>
        <Text  fontSize={'2xl'} >Nemow.com is leading E-commerce web applicaton which provides wide range of beauty products.</Text>
        
        <Text ><Text as='b'>Tech Stack :</Text> React.js | Redux | Chackra UI | HTML | CSS | Javascript | Redux</Text>
        <Spacer/>
        <Box  w={'80%'}  display='flex' alignItems={"center"} justifyContent="center"gap={"15px"} margin="auto"  >
        <a  target="_blank" rel="noopener noreferrer" href="https://github.com/gprasadbhat948231/unequaled-cracker-7155">  <Button
      w='130px'p={4} color='white' fontWeight='bold' borderRadius='md'
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>Source Code
  <Avatar size='xs' src='https://www.bing.com/th?id=OSK.b15146a8bebfb993c6dad4725c884d6d&w=148&h=148&c=7&o=6&dpr=1.3&pid=SANGAM' alt='github'/>
  </Button>
  </a>
<a  target="_blank" rel="noopener noreferrer" href="https://nemow.vercel.app/">
<Button
      w='100px'
  p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
   bgGradient='linear(to-l, #7928CA, #FF0080)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>Live <ArrowRightIcon/>
  </Button>
  </a>
  </Box>
</Grid>
  </Box>
  {/* </SimpleGrid> */}
    
      {/* /------------box2 */}
      <Box data-aos="zoom-in" bgGradient= 'linear(to-r, red.500, yellow.500)'  boxShadow='dark-lg' p='6' rounded='md'  color={'rgba(0,0,0,.9)'}>
        <Grid gap={'20px'}>
      <Box>
        <img src={revv} alt="revv"  />
      </Box>

        <Heading color={'white'} marginTop={'10px'} size={'md'}>Revv</Heading>
        <Text fontSize={'2xl'}>Revv is an Indian Car-rental startup that offers multiple option to meet all your self drive needs.</Text>
        
        <Text><Text as='b'>Tech Stack :</Text>  HTML | CSS | Javascript</Text>
        <Spacer/>
        <Box w={'80%'}  display='flex' alignItems={"center"} justifyContent="center"gap={"15px"} margin="auto">
      
        <a  target="_blank" rel="noopener noreferrer" href="https://github.com/GauravPimplekar/redundant-war-8078">  <Button
      w='130px'
  p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
   bgGradient='linear(to-l, #7928CA, #FF0080)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>Source Code
  <Avatar size='xs' src='https://www.bing.com/th?id=OSK.b15146a8bebfb993c6dad4725c884d6d&w=148&h=148&c=7&o=6&dpr=1.3&pid=SANGAM' alt='github'/>
  </Button>
  </a>
<a  target="_blank" rel="noopener noreferrer" href="https://lovely-baklava-8f1573.netlify.app/">
<Button
      w='100px'
  p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
   bgGradient='linear(to-l, #7928CA, #FF0080)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>Live <ArrowRightIcon/>
  </Button>
  </a>
  </Box>
  </Grid>
      </Box>
      {/* ---------box3 */}
      <Box data-aos="zoom-in" bgGradient= 'linear(to-r, red.500, yellow.500)'  boxShadow='dark-lg' p='6' rounded='md'  color={'rgba(0,0,0,.9)'}>
     
        <Grid gap={'20px'}>
      <Box>
        <img src={myntra} alt="mayntra"  />
      </Box>

        <Heading color={'white'} marginTop={'10px'} size={'md'}>Myntra</Heading>
        <Text fontSize={'2xl'}>Myntra is leading E-commerce web applicaton which provides wide personal care, accessories & more.

Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra products.</Text>
        
        <Text><Text as='b'>Tech Stack :</Text>  HTML | CSS | Javascript</Text>
        <Spacer/>
        <Box w={'80%'}  display='flex' alignItems={"center"} justifyContent="center"gap={"15px"} margin="auto" >
       
        <a  target="_blank" rel="noopener noreferrer" href="https://github.com/Gauravkumar03/myntra-website"> 
         <Button
      w='130px'
  p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
   bgGradient='linear(to-l, #7928CA, #FF0080)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>Source Code
  <Avatar size='xs' src='https://www.bing.com/th?id=OSK.b15146a8bebfb993c6dad4725c884d6d&w=148&h=148&c=7&o=6&dpr=1.3&pid=SANGAM' alt='github'/>
  </Button>
  </a>
<a  target="_blank" rel="noopener noreferrer" href="https://tangerine-lokum-eb294a.netlify.app/">
<Button
      w='100px'
  p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
   bgGradient='linear(to-l, #7928CA, #FF0080)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>Live <ArrowRightIcon/>
  </Button>
  </a>
  </Box>
  </Grid>
      </Box>
   
        {/* ---------box5 */}
      </SimpleGrid>
    </Box>
  )
}
