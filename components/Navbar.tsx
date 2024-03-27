import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Home=require("../asset/svg/home.svg")
const Trending=require("../asset/svg/trending.svg")
const Snippet=require("../asset/svg/snippet.svg")
const Videos=require("../asset/svg/videos.svg")
const Github=require("../asset/svg/github.svg")
const Twetter=require("../asset/svg/twetter.svg")
const Linkdin=require("../asset/svg/linkdin.svg")
const Instagram=require("../asset/svg/insta.svg")


function Navbar() {
  return (
    <div className='bg-slate-800 text-white w-60 fixed top-30 h-full rounded-lg '>
      <div className="flex justify-end">
      <Button className='m-2 hover:bg-red-500 '>Close</Button>
      </div>
    <a><div  className='flex space-x-2 p-4 hover:pl-6 pr-2 hover:bg-gradient-to-r from-green-500 to-blue-500'><Image src={Home} alt=""></Image> <p>Home </p> </div></a>
    <a><div  className='flex space-x-2 p-4 hover:pl-6 pr-2 hover:bg-gradient-to-r from-green-500 to-blue-500'><Image src={Trending} alt=''></Image> <p>Trending</p></div></a>
    <a><div  className='flex space-x-2 p-4 hover:pl-6 pr-2 hover:bg-gradient-to-r from-green-500 to-blue-500'><Image src={Snippet} alt=''></Image> <p>Snippet</p></div></a>
    <a><div  className='flex space-x-2 p-4 hover:pl-6 pr-2 hover:bg-gradient-to-r from-green-500 to-blue-500'><Image src={Videos} alt=''></Image> <p>Videos</p></div></a>
       <h1   className='flex  pt-4 pl-3 pb-4 text-xl'><p>Social</p></h1>
    <a><div  className='flex space-x-2 p-4 hover:pl-6 pr-2 hover:bg-gradient-to-r from-green-500 to-blue-500'><Image src={Github} alt=''></Image><p>Github</p></div></a>
    <a><div  className='flex space-x-2 p-4 hover:pl-6 pr-2 hover:bg-gradient-to-r from-green-500 to-blue-500'><Image src={Twetter} alt=''></Image><p>Twetter</p></div></a>
    <a><div  className='flex space-x-2 p-4 hover:pl-6 pr-2 hover:bg-gradient-to-r from-green-500 to-blue-500'><Image src={Linkdin} alt=''></Image><p>Linkdin</p></div></a>
    <a> <div  className='flex space-x-2 p-4 hover:pl-6 pr-2 hover:bg-gradient-to-r from-green-500 to-blue-500'><Image src={Instagram} alt=''></Image><p>Instagram</p></div></a>

    </div>
  )
}

export default Navbar