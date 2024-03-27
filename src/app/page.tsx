"use client"
import Navbar from "../../components/Navbar";
import { Button } from "@/components/ui/button"
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Topcard from "../../components/Topcard";
import Techstack from "../../components/Techstack";
import { useState } from "react";



const techstack=require("../../data.json")
const impProject=require("../../impproject.json")

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);


  // console.log("hi techstack dsdsd",techstack)
  return (
    <main className="bg-slate-900 text-white ">
      <Header statefunction={setIsVisible}/>
      <br />
      <div className="overflow-hidden">
        {/* hidden */}
        {isVisible ?(
            <div className="float-left w-60 h-screen"> 
             <Navbar statefunction={setIsVisible} onOff={isVisible}/>
            </div>
        ):null}
     
      <div className="flex-auto overflow-x-auto">
      <Banner/>
      <p className="p-10 text-3xl">Few Projects ...</p>
      <div className="flex flex-wrap">
      {impProject.map((e:any)=>{return(<Topcard key={e} data={e}/>)})}
      </div>
      <p className="p-10 text-3xl">What I Know</p>
      <div className="flex flex-wrap">{techstack.map((e:any)=>{return(<Techstack key={e} data={e} />)})}
      </div>
      </div>
       </div>
      
    </main>
  );
}
