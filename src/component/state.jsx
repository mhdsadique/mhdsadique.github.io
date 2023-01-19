import React from "react";
const Stats = () => {
  return (
    // streak 
    <div>
      <div style={{ display: "flex",  justifyContent:'center',margin:'auto'}}>
        <a href="https://github.com/mhdsadique">
          <img  align="left" src="https://github-readme-streak-stats.herokuapp.com/?user=mhdsadique"/>
        </a>
      </div>
 
      <div
        style={{
          height: "100%",
          display: "flex",
          margin: "auto",
          alignItems:'center',
          justifyContent:'center'
        }}>
        <a href="https://github.com/mhdsadique">  
          <img  src="https://github-readme-stats.vercel.app/api/top-langs/?username=mhdsadique"/>   
        </a>
        <a href="https://github.com/mhdsadique">
          <img  align="left"
        src="https://github-readme-stats.vercel.app/api?username=mhdsadique&count_private=true&show_icons=true" //stats
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;