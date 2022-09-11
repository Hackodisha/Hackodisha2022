import React from 'react'
import img1 from "../../assets/Media Partners logo/rourkelashines.png";
//import img2 from "../../assets/Media Partners logo/bhubaneswarbuzz-dark.png";
import img3 from "../../assets/Media Partners logo/bizodisha-logo.png";
import img4 from "../../assets/Media Partners logo/boronrourkela.jpg";
import img5 from "../../assets/Media Partners logo/ODISHA NOW.jpeg";
import img6 from "../../assets/Media Partners logo/Rourkela -360dark.png";
import img7 from "../../assets/Media Partners logo/Rouekela 360 -light.png";

const Media = () => {
  return (
    <div className='container pb-6'>
        <div className="text-4xl flex text-white justify-center mt-6 mb-8">Media Partners</div>
        <div className="flex justify-center">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  pl-10">
          <div className=" flex justify-center w-[200px]"><img src={img1}/></div>
          <div className=" flex justify-center w-[200px]"><img src="https://pbs.twimg.com/profile_images/1277593626063839235/C63OvMXP_400x400.jpg"/></div>
          <div className=" flex justify-center w-[200px]"><img src={img4}/></div>
          <div className=" flex justify-center w-[200px]"><img src={img5}/></div>
          <div className=" flex justify-center w-[200px]"><img src={img6}/></div>
          <div>
          <div className=" flex justify-center w-[200px]"><img src={img7}/></div>
          <div className=" flex justify-center w-[275px] lg:w-[300px]"><img src={img3}/></div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Media