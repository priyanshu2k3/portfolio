import React from 'react'
import Image from 'next/image'

const self=require("../asset/self.png")
function Banner() {
  return (
    <div className="flex items-center justify-evenly bg-blue-300 p-2 rounded-lg m-2 ">
        <div className=''><Image src={self} alt="" height={300} className='rounded-full'></Image></div>
        <div className='p-4'><p className='text-green-500  font-semibold text-3xl text-shadow-lg  '>Priyanshu Prasad Gupta</p>
        <br/>
        <p className='text-black'>FullStack Web Developer 
        </p></div>
    </div>
  )
}

export default Banner