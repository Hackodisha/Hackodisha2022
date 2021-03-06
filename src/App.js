import About from "./components/About/AboutUs";
import Footer from "./components/footer/Footer";
import Header from "./components/HeroLandingPage/Header";
import Prizes from "./components/Prizes/Prizes";
import SponserFinal from "./components/Sponsors/SponsorFinal";
import Stats from "./components/statistics/Stats";
import Timeline from "./components/Timeline/Timeline";
import Track from "./components/Track/Track";
import './App.css';
import Loader from "./components/Loading/Loader";
import { useState } from "react"

function App() {
  const [loading,setLoading] =useState(true); 
  
  if(loading){
    setTimeout(()=>{
      
      setLoading(false);
    },2000)
     return <Loader/>
    
  }  
  return (
      !loading &&  
   
    <div  className="App" >
      <Header />
      <About />
      <Stats />
      <Track/>
      <Prizes/>
      <Timeline/>
      <SponserFinal/>
      <Footer />
    </div>
    
  );
}

export default App;
