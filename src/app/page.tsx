import Navbar from "../../components/Navbar";
import { Button } from "@/components/ui/button"
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Topcard from "../../components/Topcard";
import Techstack from "../../components/Techstack";


const techstack=require("../../data.json")
const impProject=require("../../impproject.json")

export default function Home() {
  // console.log("hi techstack dsdsd",techstack)
  return (
    <main className="bg-slate-900 text-white ">
      <Header/>
      <br />
      <div className="overflow-hidden">
        {/* hidden */}
      <div className="float-left w-60 h-screen"> 
        <Navbar/>
      </div>
      <div className="flex-auto overflow-x-auto">
      <Banner/>
      <div className="flex flex-wrap">
      {impProject.map((e:any)=>{return(<Topcard key={e} data={e}/>)})}
      </div>
      <div className="flex flex-wrap">{techstack.map((e:any)=>{return(<Techstack key={e} data={e} />)})}
      </div>
      </div>
       </div>
      
    </main>
  );
}
