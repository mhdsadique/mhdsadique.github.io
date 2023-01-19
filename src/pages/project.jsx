import { ArrowRightIcon,} from '@chakra-ui/icons'
import {Avatar, Box, Button, Grid, Heading, SimpleGrid, Spacer, Text} from "@chakra-ui/react"
import myntra from "./image/myntraImage.png"
import kfc from "./image/kfcImage.png"
import mailtrap from "./image/mailtrapImage.png"
import revv from "./image/revvImage.png"
export const Project = () => {
  return (
    <Box id='projects' w='80%' margin={'auto'} marginTop='100px'marginBottom={'50px'} >
      <Heading  textAlign='center' marginBottom={'50px'}>Projects</Heading>
      <SimpleGrid columns={{lg:2,md:1,sm:1}} gap='50px'>

      <Box   bgGradient= 'linear(to-r, red.500, yellow.500)' backgroundSize='cover'  backgroundRepeat= 'no-repeat' boxShadow='dark-lg' p='6' rounded='md'  color={'rgba(0,0,0,.9)'} >
      <Box>
        <img src="https://camo.githubusercontent.com/7d12732bab4e92ccaf01286a2d03f0999777bf0422d891afd664846f9b092670/68747470733a2f2f6d617361692d636f757273652e73332e61702d736f7574682d312e616d617a6f6e6177732e636f6d2f656469746f722f75706c6f6164732f323032322d31322d32312f6e656d6f775f6c616e64696e675f706167655f3234353838312e706e67" alt="" srcset="" />
      </Box>
        <Grid gap={'30px'}>

        <Heading color={'white'} marginTop={'10px'}   size={'md'}>Sephora </Heading>
        <Text  fontSize={'2xl'} >Sephora.com is leading E-commerce web applicaton which provides wide range of beauty products.</Text>
        
        <Text ><Text as='b'>Tech Stack :</Text> React.js | Redux | Chackra UI | HTML | CSS | Javascript</Text>
        <Spacer/>
        <Box  w={'80%'} display='flex' justifyContent='space-around'  >
        <a  target="_blank" rel="noopener noreferrer" href="https://github.com/gprasadbhat948231/unequaled-cracker-7155">  <Button
      w='130px'p={4} color='white' fontWeight='bold'
  borderRadius='md'
  bgGradient='linear(to-r, pink.400, pink.400)'
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
  bgGradient='linear(to-r, pink.400, pink.400)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>Live <ArrowRightIcon/>
  </Button>
  </a>
  </Box>
  </Grid>
      </Box>
      <Box bgGradient= 'linear(to-r, red.500, yellow.500)'  boxShadow='dark-lg' p='6' rounded='md'  color={'rgba(0,0,0,.9)'}>
      <Box>
        <img src={revv} alt="" srcset="" />
      </Box>
        <Grid gap={'30px'}>

        <Heading color={'white'} marginTop={'10px'} size={'md'}>Revv</Heading>
        <Text fontSize={'2xl'}>Revv is an Indian Car-rental startup that offers multiple option to meet all your self drive needs.</Text>
        
        <Text><Text as='b'>Tech Stack :</Text>  HTML | CSS | Javascript</Text>
        <Spacer/>
        <Box w={'80%'} display='flex' justifyContent='space-around'>
      
        <a  target="_blank" rel="noopener noreferrer" href="https://github.com/GauravPimplekar/redundant-war-8078">  <Button
      w='130px'
  p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
  bgGradient='linear(to-r, pink.400, pink.400)'
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
  bgGradient='linear(to-r, pink.400, pink.400)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>Live <ArrowRightIcon/>
  </Button>
  </a>
  </Box>
  </Grid>
      </Box>
      <Box bgGradient= 'linear(to-r, red.500, yellow.500)'  boxShadow='dark-lg' p='6' rounded='md'  color={'rgba(0,0,0,.9)'}>
     
      <Box>
        <img src={myntra} alt="mayntra" srcset="" />
      </Box>
        <Grid gap={'30px'}>

        <Heading color={'white'} marginTop={'10px'} size={'md'}>Myntra</Heading>
        <Text fontSize={'2xl'}>Myntra is leading E-commerce web applicaton which provides wide personal care, accessories & more.

Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra products.</Text>
        
        <Text><Text as='b'>Tech Stack :</Text>  HTML | CSS | Javascript</Text>
        <Spacer/>
        <Box w={'80%'} display='flex' justifyContent='space-around'>
      
        <a  target="_blank" rel="noopener noreferrer" href="https://github.com/Gauravkumar03/myntra-website">  <Button
      w='130px'
  p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
  bgGradient='linear(to-r, pink.400, pink.400)'
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
  bgGradient='linear(to-r, pink.400, pink.400)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>Live <ArrowRightIcon/>
  </Button>
  </a>
  </Box>
  </Grid>
      </Box>
      <Box bgGradient= 'linear(to-r, red.500, yellow.500)'  boxShadow='dark-lg' p='6' rounded='md'  color={'rgba(0,0,0,.9)'}>
      <Box>
        <img src={mailtrap} alt="mailtrap" srcset="" />
      </Box>
        <Grid gap={'30px'}>

        <Heading color={'white'} marginTop={'10px'} size={'md'}>Mailtrap </Heading>
        <Text fontSize={'2xl'}>Mailtrap is an email sandbox service for safe and easy but comprehensive email testing.</Text>
        
        <Text><Text as='b'>Tech Stack :</Text> React.js |Chackra UI | HTML | CSS | Javascript</Text>
        <Spacer/>
        <Box w={'80%'} display='flex' justifyContent='space-around'>
      
        <a  target="_blank" rel="noopener noreferrer" href="https://github.com/mhdsadique/eight-club-5364">  <Button
      w='130px'
  p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
  bgGradient='linear(to-r, pink.400, pink.400)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>Source Code
  <Avatar size='xs' src='https://www.bing.com/th?id=OSK.b15146a8bebfb993c6dad4725c884d6d&w=148&h=148&c=7&o=6&dpr=1.3&pid=SANGAM' alt='github'/>
  </Button>
  </a>
<a  target="_blank" rel="noopener noreferrer" href="https://miltron.vercel.app/">
<Button
      w='100px'
  p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
  bgGradient='linear(to-r, pink.400, pink.400)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>Live <ArrowRightIcon/>
  </Button>
  </a>
  </Box>
  </Grid>
      </Box>
      <Box   bgGradient='linear(to-r, red.500, yellow.500)'  boxShadow='dark-lg' p='6' rounded='md' color={'rgba(0,0,0,.9)'}>
      <Box>
        <img src={kfc} alt="kfc" srcset="" />
      </Box>
       <Grid gap={'30px'}>

        <Heading color={'white'} marginTop={'10px'} size={'md'}>KFC </Heading>
        <Text fontSize={'2xl'}>KFC is a popular fast food chain that serves chicken , biscuits and other delicious dishes.</Text>
        
        <Text ><Text as='b'>Tech Stack :</Text> React.js | Chackra UI | HTML | CSS | Javascript</Text>
        <Spacer/>
        <Box w={'80%'} display='flex' justifyContent='space-around'>
      
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mhdsadique/utopian-magic-4570-kfc">  <Button
      w='130px'
  p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
  bgGradient='linear(to-r, pink.400, pink.400)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>Source Code
  <Avatar size='xs' src='https://www.bing.com/th?id=OSK.b15146a8bebfb993c6dad4725c884d6d&w=148&h=148&c=7&o=6&dpr=1.3&pid=SANGAM' alt='github'/>
  </Button>
  </a>
<a target="_blank" rel="noopener noreferrer" href="https://my-app-wheat-ten.vercel.app/">
<Button
      w='100px'
  p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
  bgGradient='linear(to-r, pink.400, pink.400)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>Live <ArrowRightIcon/>
  </Button>
  </a>
  </Box>
  </Grid>
      </Box>
      </SimpleGrid>
    </Box>
  )
}
