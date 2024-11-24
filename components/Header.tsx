import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const human=require("../asset/human.png")

function Header(props:any) {
  const onNavbar=()=>{props.statefunction(true)}
  
  return (
    <div className="flex justify-between p-4 bg-slate-800 sticky top-0 z-96">
        <div className="">
        <span className="h-6 w-6 bg-green-500 rounded-full inline-block m-1"></span>
        <span className="h-6 w-6 bg-red-500 rounded-full inline-block m-1"></span>
        <span className="h-6 w-6 bg-blue-500 rounded-full inline-block m-1"></span>
        </div>
        <div className='w-2/4 flex '>
        <button type="button" className=" text-white bg-green-500 font-medium rounded-lg text-sm  py-2.5 text-center me-2 mb-2 w-full">
        <a href='https://drive.google.com/file/d/1GVWL5WDYgfAIZ9bxnHq89wUWoVPqJ4fU/view?usp=sharing' 
        target='blank'><div className='animate-bounce text-3xl'>Download Resume  📁</div>
        </a>
        </button>
        
        </div>
        <div className="p-4" onClick={onNavbar}>
        <svg fill='white' height="30" viewBox="0 -960 960 960" width="50"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
         
        </div>
      </div>
  )
}

export default Header
