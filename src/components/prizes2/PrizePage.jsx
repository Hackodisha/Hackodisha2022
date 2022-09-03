import React from 'react'
import "./prizepage.css"
import PrizePageData from './PrizePageData'


function PrizeBox({title,prizelist}){
    return (
        <div className='containerp lg:w-[40vw] md:w-[60vw] align-middle justify-center'>
          <ul className="text-[40px]  text-white mx-[10px] p-3"> {title}
          {
            prizelist.map(prize=>(
                <li className='text-[20px] text-white text-left mx-[50px] p-1'>&#10687;  {prize}</li>
            ))
          }
          </ul>
        </div>
    )
}

export default function PrizePage() {
  return (
    <div className=' flex-col'>
        <div className=' justify-center align-middle text-center'>
            <h1 className="sponsors_heading "> Prizes </h1>
        </div>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 '>
            {PrizePageData.map(items=>(
                <PrizeBox
                title= {items.title}
                prizelist={items.prizelist}
                ></PrizeBox>
             ))
            }
        </div>
    </div>
  )
}





