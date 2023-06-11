import React from "react";
import App from "./App";
import Team from "./components/team/Team";
import { Routes, Route } from "react-router-dom";
import PrizePage from "./components/prizes2/PrizePage";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-violet-900 text-white flex items-center justify-center font-bold italic text-2xl">
     <h1> COMING SOON 🚀 </h1>
    </div>
//     <Routes>
//       <Route exact path="/prizes" element={<PrizePage />} />
//       <Route exact path="/team" element={<Team />} />
//       <Route path="*" element={<App />} />
//     </Routes>
  );
};

export default Home;
