import About from "./components/About/AboutUs";
import Footer from "./components/footer/Footer";
import Header from "./components/HeroLandingPage/Header";
import Prize from "./components/Prize/prize";
import Stats from "./components/statistics/Stats";
import Timeline from "./components/Timeline/Timeline";
import Track from "./components/Track/Track";
import bgWeb from "./assets/new-bg.png";
import Events from "./components/Events/events";

import "./App.css";
import Loader from "./components/Loaders/Loader";
import { useEffect, useState } from "react";
import FAQ from "./components/FAQ/FAQ";
import {
  BronzeSponsors,
  GoldSponsors,
  PlatinumSponsors,
  SilverSponsors,
} from "./components/Sponsor/sponsor";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="App">
      <Header />
      <div className="blob" style={{ backgroundImage: `url(${bgWeb})` }}>
        <About />
        <Stats />
        <Track />
        <Events />
        <Prize />
        <Timeline />
        <PlatinumSponsors />
        <GoldSponsors />
        <SilverSponsors />
        <BronzeSponsors />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;
