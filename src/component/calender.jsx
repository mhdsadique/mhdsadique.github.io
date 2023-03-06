import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
const Calender = () => {

  useEffect(()=>{
    AOS.init(({
      offset: 150,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    }))
     },[])
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 10;
    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      ); 
    });};
  return (
    <Box  data-aos="zoom-in" w={"100%"}margin='auto' >
      <Heading textAlign={'center'} marginBottom='15px' >Github Calendar</Heading>
      <Box  margin='auto' justifyContent={"center"}display='flex' alignItems="center">

      <GitHubCalendar  
      username="mhdsadique"
      blockSize={18}
      fontSize={10}>
         <ReactTooltip delayShow={20} html /> 
      </GitHubCalendar>
          </Box>
    </Box>
  );
};
export default Calender;