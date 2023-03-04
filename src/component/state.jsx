import React from "react";
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Stats = () => {
  useEffect(()=>{
    AOS.init()
     },[])
  return (
    <div>
      <div  data-aos="zoom-in" style={{ display: "flex",  justifyContent:'center',margin:'auto'}}>
        <a href="https://github.com/mhdsadique" target={"_blank"} rel="noreferrer">
          <img  align="left" src="https://github-readme-streak-stats.herokuapp.com/?user=mhdsadique"/>
        </a>
      </div>
      <div  data-aos="zoom-in"
        style={{
          height: "100%",
          display: "flex",
          margin: "auto",
          alignItems:'center',
          justifyContent:'center'
        }}>
        <a href="https://github.com/mhdsadique" target={"_blank"} rel="noreferrer">  
          <img  src="https://github-readme-stats.vercel.app/api/top-langs/?username=mhdsadique"/>   
        </a>
        <a href="https://github.com/mhdsadique" target={"_blank"} rel="noreferrer">
          <img  align="left"  src="https://github-readme-stats.vercel.app/api?username=mhdsadique&count_private=true&show_icons=true" />
        </a>
      </div>
    </div>
  );
};

export default Stats;