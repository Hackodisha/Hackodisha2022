import React from "react";
import App from "./App";
import Team from "./components/team/Team";
import { Routes, Route } from "react-router-dom";
import PrizePage from "./components/prizes2/PrizePage";

const Home = () => {
  return (
    <div className="h-screen w-screen">
   <iframe src="https://embed.lottiefiles.com/animation/79561"></iframe>
    <div>
//     <Routes>
//       <Route exact path="/prizes" element={<PrizePage />} />
//       <Route exact path="/team" element={<Team />} />
//       <Route path="*" element={<App />} />
//     </Routes>
  );
};

export default Home;
