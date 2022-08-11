import React,{ useState,useEffect} from 'react'

const Prizes = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

{/* Performs similarly to componentDidMount in classes */}
useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
}, [isMobile]);

  return (
     
    <section id="Prizes">
    <div className={`${isMobile ? "none" : "container"} h-[400px] text-white pl-5 md:pl-28 sm:pl-9  p-4 sm:pr-9 md:pr-28`}>

        <div className='text-[44px]'>Prizes</div>
        <div className='text-[64px] pl-1 '>Updating soon...</div>
        {/* <div className='grid lg:grid-cols-3 gap-9 md:grid-cols-2 grid-cols-1'>
          <div className=''><img className='h-44 rounded-lg' src='https://www.bing.com/th?id=ORMS.7b5bdfa3f3d9024e1544311bd14f3e39&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.5&p=0'/></div>
          <div className=''><img className='h-44 rounded-lg' src='https://www.bing.com/th?id=ORMS.7b5bdfa3f3d9024e1544311bd14f3e39&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.5&p=0'/></div>
          <div className=''><img className='h-44 rounded-lg' src='https://www.bing.com/th?id=ORMS.7b5bdfa3f3d9024e1544311bd14f3e39&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.5&p=0'/></div>
      
        </div> */}
    </div>
    </section>
  )
}

export default Prizes
