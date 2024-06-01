import Card from "@/components/HonorList/HonorCards" 
import Data from "@/components/HonorList/honorData.json"


const HonorCardlist = () => {
   

  return (
   <div className="flex items-center justify-center ">

    <div className="  text-white flex flex-col p-5">
      <div className=" z-10"><h1 className="font-bold text-5xl md:text-7xl lg:text-9xl  text-center">HONORARY <br /> CHADS</h1></div>
     <div className="flex justify-between flex-wrap mt-5 ">
     {Data && Data.map( myData => {
        return(
          <div key={myData.id} className="mr-5 mb-24"> <Card key={myData.id} twitter={myData.twitter} Name={myData.Name} logo={myData.logo} bio={myData.bio} /> </div>
        )
      })}
     </div>
   
   
    </div>
   </div>
  )
}
export default HonorCardlist