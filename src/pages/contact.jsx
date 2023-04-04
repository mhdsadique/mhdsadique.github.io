import { Box, Button,  Flex, Heading} from '@chakra-ui/react'

import { Container, IconButton,
   VStack, HStack,
  Wrap, WrapItem,} from '@chakra-ui/react';
import {
  MdPhone, MdEmail,} from 'react-icons/md';
import { BsGithub,BsLinkedin } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
export const Contact = () => {
  useEffect(()=>{
    AOS.init(({
      offset: 160,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    }))
     },[])
  return (
    <Box id='contact'  w='100%'  textalign='center' marginTop={'70px'} data-aos="zoom-in">
        <Container bg="#02054B" maxW="full" mt={0} centerContent >
      
          <Box 
          bgGradient='linear(to-r, red.500, yellow.500)'
            color="#02054B"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 10 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading   color="white"  textAlign={'center'}>Contact Me</Heading>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="250px"
                          variant="ghost"
                          color="#02054B"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                          +91-8075342600
                        </Button>
                        <a href="mailto:mhdsadique8@gmail.com">
                        <Button
                          size="md"
                          height="48px"
                          width="250px"
                          variant="ghost"
                          color="#02054B"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                          mhdsadique8@gmail.com
                        </Button></a>
                      </VStack>
                    </Box>
                    <HStack justifyContent={"center"}
                      mt={{ lg: 5, md: 5 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                        <a href="https://www.linkedin.com/in/muhammed-sadique-064385230/" target={"_blank"} rel="noreferrer">
                      <IconButton
                        aria-label="linkedin"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsLinkedin size="28px" />}
                      /></a>
                       <a href="https://github.com/mhdsadique" target={"_blank"} rel="noreferrer">
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsGithub size="28px" />}
                      /></a>
                    </HStack>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
      </Container>
    </Box>
  )
}
