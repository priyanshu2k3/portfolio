import React from 'react'
import Image from 'next/image';
// const img=require("../asset/pexels.png")
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
function Topcard(props:any) {
    const projectName=props.data.projectName
    const img=props.data.image
    const description=props.data.description
    const technologiesUsed=props.data.technologiesUsed
    const projectLink=props.data.projectLink
    const features=props.data.features
  return (
  

<div className="m-5 max-w-sm bg-gradient-to-t from-green-500 to-blue-500 border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
        <div className=" w-full h-48 relative"><Image  src={img} alt="" fill={true} className="rounded-t-lg z-3 "/>
        </div>
    <div className="p-5">
       
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">{projectName}</h5>
     
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <div  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <AlertDialog>
  <AlertDialogTrigger >Read More</AlertDialogTrigger>
  <AlertDialogContent className='bg-gradient-to-r from-purple-400 to-pink-500' >
    <AlertDialogHeader>
      <AlertDialogTitle >{projectName}</AlertDialogTitle>
      <AlertDialogDescription>
        <h1 className='bg-green-500 text-white'>Techstack</h1>
        <ul className=' text-black'>{technologiesUsed.map((value:string,i:number)=>{return( <li  key={i}>{value}</li>)})}
        </ul>
        <h1 className='bg-green-500 text-white'>Feature</h1>
            <ul className=' text-black'>
                {features.map((value:string,i:number)=>{return( <li className='float-left' key={i}>🎯{value}<br/></li>)})}
            </ul>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel className='bg-red-500'>Close</AlertDialogCancel>
      <AlertDialogAction><a href={projectLink} target="_blank">💻 View code</a></AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
        </div>
    </div>
</div>

  )
}

export default Topcard;