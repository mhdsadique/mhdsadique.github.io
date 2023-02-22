
import './App.css';
import { About } from './pages/about';
import { Project } from './pages/project';
import { Skills } from './pages/skills';
import { Contact } from './pages/contact';
import Navbar from './pages/navbar';
import Home from './pages/home';
import { CalenderAndState } from './pages/calender';
function App() {
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






