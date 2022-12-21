// import { PhoneIcon, AddIcon, SunIcon, MoonIcon, 
//   HamburgerIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons'
// import { Box,Button, IconButton, Menu, MenuButton,
//   Center, Lorem, MenuList, SimpleGrid,Heading, Text, Modal, MenuItem } from '@chakra-ui/react'
// import { useState } from 'react'
// import { useContext } from 'react'
// import { NavLink } from 'react-router-dom'
// import { AuthContext } from './auth'
// import"../App.css"
// import { Flex, Spacer } from '@chakra-ui/react'

// export const Menudata=()=>{
//   return(
//     <Box className="Big">
//           <Menu>
//   <MenuButton
//     as={IconButton}
//     aria-label='Options'
//     icon={<HamburgerIcon />}
//     variant='outline'
//   />
//   <MenuList  >
//     <MenuItem  display="Media" >
   
//     <NavLink to={"/"} >
//         <Button colorScheme='teal' w={"xs"} display="flex" alignItems={"center"} justifyContent="center" > Home</Button>
//           </NavLink>
//     </MenuItem>
//     <MenuItem display="" >
//     <NavLink to="/about">
//         <Button colorScheme='teal' w={"xs"}> About</Button>
//         </NavLink>
//     </MenuItem>
//     <MenuItem display="" >
//     <NavLink to={"/skill"}>
//         <Button colorScheme='teal' w={"xs"}> Skills</Button>
//         </NavLink>
//     </MenuItem>
//     <MenuItem display="">
//     <NavLink to="/project">
//         <Button colorScheme='teal' w={"xs"}> Projects</Button>  </NavLink>
//     </MenuItem>
//     <MenuItem display="">
//     <NavLink to="contact">
//         <Button colorScheme='teal' w={"xs"}> Contact</Button>
//         </NavLink>
//     </MenuItem>
//   </MenuList>
// </Menu>
// </Box>

// )
// }



// export const Navbar = () => {
//   const {changeTheme,theme}=useContext(AuthContext)
//   return (
//     <>
//        <Box className="Sm"  color={"#1D4044"} >
//       {
//         theme?
      
//         <Box color={"#718096"} w={"100%"} >
//         <Flex >
//         {/* <SimpleGrid  columns={{lg:2,md:1,sm:1}} > */}
//         <Box w={"45%"}  >
//           <Center>

//           <Text bgGradient='linear(to-l, #7928CA, #FF0080)'bgClip='text'
//   fontSize='2xl'fontWeight='extrabold'>MUHAMMED SADIQUE</Text>
//           </Center>
//           </Box>

//           <Box   w={"55%"} color={"#4A5568"}>
//           <Flex justifyContent="space-around">
//             <Center>
//           <NavLink to={"/"} >
//         <Button  bg={"#718096"} size={{lg:"md",md:"sm",sm:"sm"}}> Home</Button>
//           </NavLink>
//           <NavLink to="/about">
//         <Button bg={"#718096"} size={{lg:"md",md:"sm",sm:"sm"}}> About</Button>
//         </NavLink>
//           <NavLink to={"/skill"}>
//         <Button bg={"#718096"} size={{lg:"md",md:"sm",sm:"sm"}}> Skills</Button>
//         </NavLink>
//           <NavLink to="/project">
//         <Button bg={"#718096"} size={{lg:"md",md:"sm",sm:"sm"}}> Projects</Button>  </NavLink>
//           <NavLink to="contact">
//         <Button bg={"#718096"} size={{lg:"md",md:"sm",sm:"sm"}}> Contacts</Button>
//         </NavLink>
//         <Button onClick={changeTheme} bg={"#718096"} size={{lg:"md",md:"sm",sm:"sm"}} >{theme? <SunIcon/>:<MoonIcon/>} </Button>
//         </Center>
//         </Flex>
//       </Box>
//       {/* </SimpleGrid> */}
//       </Flex>
//       </Box>:



//       <Box color={"#FAF5FF"} w={"100%"} >
//         <Flex >
//         {/* <SimpleGrid  columns={{lg:2,md:1,sm:1}} > */}
//         <Box w={"45%"} >
//           <Center>

//         {/* <Heading color='orenge' bgGradient='linear(to-l, #7928CA, #FF0080)'  display="flex" alignItems={"center"}
//           size={{lg:"xl",md:"xl",sm:"md"}}  >
//           MUHAMMED SADIQUE</Heading> */}

//           <Text bgGradient='linear(to-l, #7928CA, #FF0080)'bgClip='text'
//   fontSize='2xl'fontWeight='extrabold'>MUHAMMED SADIQUE</Text>

//           </Center>
//           </Box>

//           <Box   w={"55%"}>
//           <Flex justifyContent="space-around">
//             <Center>
//           <NavLink to={"/"} >
//         <Button color='white' fontWeight='bold' bgGradient='linear(to-r, teal.500, green.500)' _hover={{
//     bgGradient: 'linear(to-r, red.500, yellow.500)'}} size={{lg:"md",md:"sm",sm:"sm"}}> Home</Button>
//           </NavLink>
//           <NavLink to="/about">
//         <Button fontWeight='bold' bgGradient='linear(to-r, teal.500, green.500)' _hover={{
//     bgGradient: 'linear(to-r, red.500, yellow.500)'}} size={{lg:"md",md:"sm",sm:"sm"}}> About</Button>
//         </NavLink>
//           <NavLink to={"/skill"}>
//         <Button fontWeight='bold' bgGradient='linear(to-r, teal.500, green.500)' _hover={{
//     bgGradient: 'linear(to-r, red.500, yellow.500)'}} size={{lg:"md",md:"sm",sm:"sm"}}> Skills</Button>
//         </NavLink>
//           <NavLink to="/project">
//         <Button fontWeight='bold' bgGradient='linear(to-r, teal.500, green.500)' _hover={{
//     bgGradient: 'linear(to-r, red.500, yellow.500)'}} size={{lg:"md",md:"sm",sm:"sm"}}> Projects</Button>  </NavLink>
//           <NavLink to="contact">
//         <Button fontWeight='bold' bgGradient='linear(to-r, teal.500, green.500)' _hover={{
//     bgGradient: 'linear(to-r, red.500, yellow.500)'}} size={{lg:"md",md:"sm",sm:"sm"}}> Contacts</Button>
//         </NavLink>
//         <Button onClick={changeTheme} fontWeight='bold' bgGradient='linear(to-r, teal.500, green.500)' _hover={{
//     bgGradient: 'linear(to-r, red.500, yellow.500)'}} size={{lg:"md",md:"sm",sm:"sm"}} >{theme? <SunIcon/>:<MoonIcon/>} </Button>
//         </Center>
//         </Flex>
//       </Box>
//       {/* </SimpleGrid> */}
//       </Flex>
//       </Box>
//       }
//        </Box>

       
//     </>
//   )
// }
