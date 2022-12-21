
import './App.css';
import { AuthContext } from './component/auth';
import { useContext } from 'react';
import { About } from './pages/about';
import { Project } from './pages/project';
import { Skills } from './pages/skills';
import { Contact } from './pages/contact';
import Navbar from './pages/navbar';
import Home from './pages/home';
import { CalenderAndState } from './pages/calender';
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
    <CalenderAndState/>
    <Contact/>
   </>
    )
 }
export default App






