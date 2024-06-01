import { CiTwitter } from "react-icons/ci";

interface Props {
   
    Name: string;
    bio: string;
    twitter: string;
    logo:string;

}

const HonorCard = ({logo, Name, bio, twitter}: Props) => {
  return (
    <div className='flex ' > 
                        <div className='w-20 h-20 flex z-10 lg:w-32 lg:h-32 flex-col'>
                                  <img src={logo} alt="" />
                                <div className="flex flex-col items-center justify-center bg-green-500 bg-opacity-10 backdrop-blur-lg text-center "> 
                                          <h1 className='font-bold'>{Name}</h1>
                                            <h2>{bio}</h2>
                                          <div className="flex gap-2">
                          
                                          <a  onClick={()=> window.open(`${twitter}`, "_blank")}> <CiTwitter /></a>
                                          </div>
                                </div>
                        </div>
    </div>
  )
}

export default HonorCard