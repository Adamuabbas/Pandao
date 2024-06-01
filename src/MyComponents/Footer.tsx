
import { FaDiscord } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import logo from "@/img/logo-no-background.svg"
function Footer() {
  return (
    <div className='flex  flex-col mt-32 ml-5 mr-5 bottom-0'>
        <div className=' flex justify-between z-10'>
            
                <img className="w-30 h-10 z-10 " src={logo} alt="" />
               <div> <p className='text-white'>© 2024 PANDAO</p></div>
                <div className=" flex gap-4 ">
                    <a onClick={()=> window.open("https://discord.com/invite/4K34sgkheS", "_blank")} className="z-10 ">
                    <FaDiscord  className=" bg-white w-10 h-10 rounded  hover:bg-gray-400 "/>
                    </a>
                    <a onClick={()=> window.open("https://x.com/pandaobruhbears", "_blank")} className="z-10">
                    <CiTwitter className= " bg-white hover:bg-gray-400 w-10 h-10 rounded " />
                    </a>
             </div>
 

        </div>
    </div>
  )
}

export default Footer
