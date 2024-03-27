import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const human=require("../asset/human.png")

function Header() {
  return (
    <div className="flex justify-between p-4 bg-slate-800 sticky top-0 ">
        <div className="">
        <span className="h-6 w-6 bg-green-500 rounded-full inline-block m-1"></span>
        <span className="h-6 w-6 bg-red-500 rounded-full inline-block m-1"></span>
        <span className="h-6 w-6 bg-blue-500 rounded-full inline-block m-1"></span>
        </div>
        <div className='w-3/4 flex '>
        <button type="button" className=" text-white bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-3/4">
        <a href='https://drive.google.com/file/d/1GVWL5WDYgfAIZ9bxnHq89wUWoVPqJ4fU/view?usp=sharing' 
        target='blank'><div className='animate-bounce'>Download Resume  📁</div>
        </a>
        </button>

        </div>
      </div>
  )
}

export default Header