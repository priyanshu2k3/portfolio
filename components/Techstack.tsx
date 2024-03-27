import { Divide } from 'lucide-react'
import React from 'react'


function Techstack(props:any) {
    const techstack=props.data.techstack
    const data=props.data.data
    console.log(data)
  return (
    <div className='p-8 m-5 max-w-sm rounded-lg bg-gradient-to-r from-black to-blue-500'>
        <p className='text-3xl pb-5'>
           {techstack}
        </p>
        {data.map((e:string)=>{return(
    <button key={e} className="m-2 relative overflow-hidden border-2 border-green-500 rounded-full py-2 px-4 bg-transparent hover:animate-bounce text-green-500 font-semibold hover:bg-blue-800  hover:text-white transition duration-300 ease-in-out">
        <span className="absolute top-0 left-0 w-full h-full bg-green-500 mix-blend-overlay animate-neon"></span>
            {e}
    </button>
    )})}

    </div>

  )
}

export default Techstack