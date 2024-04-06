import React from 'react'
import video from "../assets/video/Tesla.webm"

const Home = () => {
  return (
    <div className='main overflow-hidden'>
      
        <div className="section1 h-[100vh] w-[100vw] overflow-hidden bg-slate-400 relative">

            <video className='w-full h-full object-cover' src={video} autoPlay loop muted></video>

        <div className="content absolute inset-0 text-white flex flex-col justify-end items-start medium mx-5 mb-32 lg:mx-16">
           <p className='md:text-[40px] m:leading-[48px] text-[28px] leading-[36px] lg:pb-2'>Find the Tesla for You</p>
           <p className='text-[14px] leading-[20px] pb-4 px-1 '>Discover which model is best for you based on your budget, driving habits <br className='hidden lg:block'/> and lifestyle.</p>
           <button className='bg-[#E2E3E3] px-6 py-2 text-black rounded-[5px]'>Help Me Choose</button>
        </div>

        </div>

    </div>
  )
}

export default Home
