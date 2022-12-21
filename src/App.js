import logo from './logo.svg';
import './App.css';
// import { Menudata, Navbar } from './component/navbar';
// import { Routes } from 'react-router-dom';
import { Routerpage } from './component/routes';
import { Box, color } from '@chakra-ui/react';
import { AuthContext } from './component/auth';
import { useContext } from 'react';
import { About } from './pages/about';
import { Project } from './pages/project';
import { Skills } from './pages/skills';
import { Contact } from './pages/contact';
import Navbar from './pages/navbar';
import Home from './pages/home';
const mytheme={
 color:"white",
 backgroundColor: "#4A5568",
}//#805AD5
const myfalse={

 }
function App() {
  const {theme}=useContext(AuthContext)

  return ( <>

    <Navbar />
    <Home/>
    <About />
    <Skills/>
    <Project/>
    <Contact/>
   </>
    )
 }
export default App








// theme?    <Box style={mytheme} >

//           <Menudata/>
//      <Routerpage />
// </Box>:
//   <Box 
//   bgGradient={[
//  'linear(to-tr, teal.300, yellow.400)',
//  'linear(to-t, blue.200, teal.500)',
//  'linear(to-b, orange.100, purple.300)',
// ]}>
//            <Menudata/>
//       <Routerpage />

//  </Box>