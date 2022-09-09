import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TeamData from "./TeamData";
import Card from "./Card";
import "./Card.css";
import TeamDataLead from "./TeamDataLead";

import CommunityData from "./CommunityData";
import Back from "../BackToHomePage/back";

const Team = () => {
  const [data, setData] = useState(TeamData);
  const [datacom, setDataCom] = useState(CommunityData);
  const [show, setShow] = useState(false);
  const [leadData, setleadData] = useState(TeamDataLead);

  let button;
  let priyanka;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [show]);
  if (show) {
    button = (
      <button
        onClick={() => setShow(!show)}
        className="text-white text-3xl color p-3 rounded-lg"
      >
        Show less
      </button>
    );
    priyanka = (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 md:p-8 pt-4">
        {data.map((person) => {
          const { name, image, team, insta, linkedin, github } = person;
          return (
            <div className="flex justify-center color rounded-lg">
              <Card
                name={name}
                image={image}
                team={team}
                insta={insta}
                linkedin={linkedin}
                github={github}
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    button = (
      <button
        onClick={() => setShow(!show)}
        className="text-white text-3xl color p-3 rounded-md"
      >
        {" "}
        Show More
      </button>
    );
    priyanka = (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 md:p-8 pt-4">
        {leadData.map((person) => {
          const { name, image, team, insta, linkedin, github } = person;
          return (
            <div className="flex justify-center color rounded-lg">
              <Card
                name={name}
                image={image}
                team={team}
                insta={insta}
                linkedin={linkedin}
                github={github}
              />
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <>
      <div className="App">
        <Back />

        <div className="text-[48px] text-white flex justify-center pt-8">
          Team
        </div>
        {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 md:p-8 pt-4'>
       
      {
        data.map((person)=> {
          const {name,image,team,insta,linkedin,github} = person;
          return(
            <div className='flex justify-center color rounded-lg'>    
            <Card  name={name} image={image} team={team} insta={insta} linkedin={linkedin} github={github}/>   
            </div>
          )

        })
      }
      </div> */}
        <div>{priyanka}</div>
        <div className="flex justify-center">{button}</div>

        <div className="text-[32px] md:text-[40px] lg:text-[48px] text-white flex justify-center pt-10 mt-10">
          Community Partners
        </div>
        <div className=" flex flex-wrap p-2 lg:p-10 justify-evenly">
          {datacom.map((com) => {
            const { imglink, contact } = com;
            return (
              <div className="flex justify-center align-middle  mt-4 w-[190px]  p-4 m-2">
                <a href={contact} className="flex justify-center">
                  <img className="" src={imglink} alt="a" />
                </a>
                <div className="flex justify-center">
                  <img className="" src={imglink} alt="a" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Team;
