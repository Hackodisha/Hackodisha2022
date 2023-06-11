import React from "react";
import App from "./App";
import Team from "./components/team/Team";
import { Routes, Route } from "react-router-dom";
import PrizePage from "./components/prizes2/PrizePage";

const Home = () => {
  return (
    <>
    <div style="position: relative; width: 100%; height: 0; padding-top: 100.0000%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFli2rG7co&#x2F;watch?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFli2rG7co&#x2F;watch?utm_content=DAFli2rG7co&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Rakia Animated Band Logo</a> by Ankit Kiran Sahu
  </>
//     <Routes>
//       <Route exact path="/prizes" element={<PrizePage />} />
//       <Route exact path="/team" element={<Team />} />
//       <Route path="*" element={<App />} />
//     </Routes>
  );
};

export default Home;
