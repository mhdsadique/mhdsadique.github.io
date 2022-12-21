import { Box, Button, Center, color, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

export const Contact = () => {
  return (
    <Box id='contact'  w='100%' bg='rgba(0,0,0,.9)' textalign='center' marginTop={'70px'} >
      <Center>

      <Heading color={'white'} marginTop={'40px'} marginBottom='30px'>Contact Me</Heading>
      </Center>
      <Box>
               {/* <Center> */}
          <Center>
        <Grid gap={10}>
       <a href="https://www.linkedin.com/in/muhammed-sadique-064385230/">
       <Button color={'white'} gap='10px' size='md' height='48px' width='230px'border='2px'
  bgGradient={[ 'linear(to-tr, rgba(0,0,0,.9), rgba(0,0,0,.9))' ]}
  _hover={{
    bgGradient:'linear(to-l, #7928CA, #FF0080)'}}>
       <Image w="25px" src="https://media-exp1.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831589865?e=1678924800&v=beta&t=g39mEwT0a4f25zx4YdClQnGd6q0Yb2ilFisuB3EPfng" alt="linkedIn"></Image>
       <Text color={'white'} _hover={{color:"blue"}}
       >Linkedin</Text>
   </Button>
       </a>


       <a href="https://github.com/mhdsadique">
       <Button color={'white'} gap='10px' size='md' height='48px' width='230px'border='2px'
  bgGradient={[ 'linear(to-tr, rgba(0,0,0,.9), rgba(0,0,0,.9))' ]}
  _hover={{
    bgGradient:'linear(to-l, #7928CA, #FF0080)'}}>
       <Image w="25px" src="https://www.bing.com/th?id=OIP.ckeUFk-yid0vfWnd56w7wAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="github"></Image>
       <Text color={'white'} _hover={{color:"blue"}}
       >Github</Text>
</Button>
       </a>
       <a href="mailto:mhdsadique8@gmail.com">
       <Button color={'white'} gap='10px' size='md' height='48px' width='230px'border='2px'
  bgGradient={[ 'linear(to-tr, rgba(0,0,0,.9), rgba(0,0,0,.9))' ]}
  _hover={{
    bgGradient:'linear(to-l, #7928CA, #FF0080)'}}>
       <Image w="30px" src="https://www.bing.com/th?id=OIP.ZYBoGvR_bfdiAQLZZpVHQAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="email"></Image>
       <Text color={'white'} _hover={{color:"blue"}}
       >mhdsadique8@gmail.com</Text>
   </Button>
       </a>

       <Button marginBottom='50px' color={'white'} gap='10px' size='md' height='48px' width='230px'border='2px'
        // _hover={{color:"blue"}}
  bgGradient={[ 'linear(to-tr, rgba(0,0,0,.9), rgba(0,0,0,.9))' ]}
  _hover={{
    bgGradient:'linear(to-l, #7928CA, #FF0080)',
    color:'white'
    }}>
      <PhoneIcon/>
       <Text color={'white'} _hover={{color:"blue"}}
       >+91 8075342600</Text>
   </Button>
        </Grid>
       </Center>

        </Box>  
    </Box>
  )
}
