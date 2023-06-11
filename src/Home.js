import React from "react";
import App from "./App";
import Team from "./components/team/Team";
import { Routes, Route } from "react-router-dom";
import PrizePage from "./components/prizes2/PrizePage";

const Home = () => {
  return (
   <iframe src="https://lottie.host/?file=684ca39b-5fc0-46d7-b0f9-5259777c2dbd/utsi1I1Cij.json"></iframe>
//     <Routes>
//       <Route exact path="/prizes" element={<PrizePage />} />
//       <Route exact path="/team" element={<Team />} />
//       <Route path="*" element={<App />} />
//     </Routes>
  );
};

export default Home;
