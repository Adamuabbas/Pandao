import chad3 from "@/img/3.webp"
import chad96 from "@/img/96.webp"
import chad159 from "@/img/159.webp"
import chad166 from "@/img/166.webp"
import chad234 from "@/img/234.webp"
import chad251 from "@/img/251.webp"
import Marquee from "react-fast-marquee";

function Slider() {
  return (

    <div className="z-10">
      
    < Marquee speed={100} direction="right" className="">
      <img src={chad3} className="w-28 h-28 ml-6 md:w-36 md:h-36 md:ml-8 lg:w-48 lg:h-48 lg:ml-10" alt="" />
      <img src={chad96} className="w-28 h-28 ml-6 md:w-36 md:h-36 md:ml-8 lg:w-48 lg:h-48 lg:ml-10" alt="" />
      <img src={chad159} className=" w-28 h-28 ml-6 md:w-36 md:h-36 md:ml-8 lg:w-48 lg:h-48 lg:ml-10" alt="" />
      <img src={chad166} className=" w-28 h-28 ml-6 md:w-36 md:h-36 md:ml-8 lg:w-48 lg:h-48 lg:ml-10" alt="" />
      <img src={chad234} className=" w-28 h-28 ml-6 md:w-36 md:h-36 md:ml-8 lg:w-48 lg:h-48 lg:ml-10" alt="" />
      <img src={chad251} className="w-28 h-28 ml-6 md:w-36 md:h-36 md:ml-8 lg:w-48 lg:h-48 lg:ml-10" alt="" />
    
     </Marquee>
    </div>
  
  
  )
}

export default Slider
