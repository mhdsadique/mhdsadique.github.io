import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
const Calender = () => {
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
    <Box  w='80%' margin={'auto'} >
      <Heading textAlign={'center'} marginBottom='15px' >Github Calendar</Heading>
      <GitHubCalendar
        username="mhdsadique"
        // transformData={selectLastHalfYear}
        blockSize={20}
        fontSize={20}>
         <ReactTooltip delayShow={20} html /> 
      </GitHubCalendar>
    </Box>
  );
};
export default Calender;