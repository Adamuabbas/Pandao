import Card from "@/components/Cardlist/Card" 
import Data from "@/components/Cardlist/data.json"


const Cardlist = () => {
    // const logo = "./yasuke.jpg"
    // const coinslogo = "./coins.jpg"
    

  return (
   <div className="flex items-center justify-center ">

    <div className="  text-white flex flex-col ">
      <div className=" z-10"><h1 className="font-bold text-4xl text-center">TEAM</h1></div>
     <div className="flex  mt-5">
     {Data && Data.map( myData => {
        return(
          <div key={myData.id} className="mr-5"> <Card Name={myData.Name} src={myData.logo} bio={myData.bio} twitter={myData.twitter} /> </div>
        )
      })}
     </div>
   
   
    </div>
   </div>
  )
}
export default Cardlist