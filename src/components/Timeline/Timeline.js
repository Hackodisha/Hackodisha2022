import React,{useState,useEffect} from 'react'

const Timeline = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

{/* Performs similarly to componentDidMount in classes */}
useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
}, [isMobile]);
  return (
   <section id='Timeline'>
    <div className={`${isMobile ? "none" : "container"} h-[400px] text-white pl-5 md:pl-28 sm:pl-9 pt-4 pb-4 `} >

        <div className='text-[44px]'>Timeline</div>
        <div className='text-[64px] pl-1 mt-8'>Updating soon...</div>
    </div>
    </section>
  )
}

export default Timeline
