import React from "react";
import "./prizepage.css";
import PrizePageData from "./PrizePageData";
import bg from "../../assets/new-bg.png";
import Back from "../BackToHomePage/back";
import logo from "../../assets/logo.png";
import { BsArrowRight } from "react-icons/bs";

function PrizeBox({ title, prizelist }) {
  return (
    <div className="containerp lg:w-[40vw] md:w-[60vw] align-middle justify-center">
      <ul className="text-[24px]  text-white mx-[10px] p-3">
        {" "}
        <span className="text-slate-50"> {title}</span>
        {prizelist.map((prize) => (
          <li className="text-[16px] text-slate-200 text-left mx-[16px] p-1">
            <BsArrowRight /> <span className="ml-2"> {prize} </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const PrizePage = () => {
  return (
    <div
      className="flex-col bg-indigo-900"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Back />

      <div className="w-full flex justify-center">
        {" "}
        <img src={logo} alt="Hackodisha 2.0" className="w-48"></img>
      </div>
      <div className=" justify-center align-middle text-center">
        <h1 className="sponsors_heading "> Prizes </h1>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 ">
        {PrizePageData.map((items) => (
          <PrizeBox title={items.title} prizelist={items.prizelist}></PrizeBox>
        ))}
      </div>
    </div>
  );
};

export default PrizePage;
