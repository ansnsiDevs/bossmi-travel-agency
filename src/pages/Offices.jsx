import React from 'react'
import portal from "../assets/portal.png";

const Offices = () => {
  return (
    <div className='m-[100px]'>
      <p className='md:text-3xl  flex mx-auto text-center justify-center '> We now have two major offices one in <span className='font-bold px-2'>Nairobi</span> and another in <span className='font-bold px-2'>Kitale</span></p>
     
        <div className='md:flex grid-cols-1 justify-around md:grid-cols-2'>
          <div className='pt-8'>
            <h1 className='text-2xl font-bold'>Kitale Offices</h1>
            <p className='font-bold text-red-600'>Address</p>
               <span className='font-bold ' >P.O BOX: -30200, Kitale  </span>  <br />
            <span className='text-sm font-bold text-red-600'>  New   Ambwere Plaza 2nd Floor office Suite Room 2</span>
            <img src="" alt="" />
          </div>
          <div>
            <h1 className='pt-8 text-2xl font-bold'>Nairobi Offices</h1>
             <p className='font-bold text-red-600'>Address</p>
             <span className='font-bold'>P.O BOX: -00100, Nairobi</span>, <br />
             <span className='text-sm font-bold  text-red-600'>  Biashara Street, Biashara House 5th Floor , office Suite R9, Nairobi</span>
           
            </div>
        </div>

      
    </div>
  )
}

export default Offices
