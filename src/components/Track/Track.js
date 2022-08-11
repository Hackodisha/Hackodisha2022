import React,{useState,useEffect} from 'react'

const Track = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

{/* Performs similarly to componentDidMount in classes */}
useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
}, [isMobile]);
  return (
    <section id='Tracks'>
   
    <div className={`${isMobile ? "none" : "container"} text-white pl-5 h-[400px] sm:pl-9 md:pl-28 p-4 pb-9 overflow-hidden`}>

        <div className='text-[44px]'>Tracks</div>
        <div className='text-[64px] pl-1 '>Updating soon...</div>
        
        
    </div>
    </section>
  )
}

export default Track
