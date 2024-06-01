import { CiTwitter } from "react-icons/ci";

interface Props {
    src : string;
    Name: string;
    bio: string;
    twitter: string;
}

const Card = ({src,Name, bio,twitter}: Props) => {
  return (
    <div className='flex '> 
                        <div className='w-20 h-20 z-10  flex flex-col'>
                        <img src={src} alt="" />
                      <div className="flex flex-col items-center justify-center bg-green-500 bg-opacity-10 backdrop-blur-lg  "> 
                      <h1 className='font-bold'>{Name}</h1>
                        <h2>{bio}</h2>
                        <div className="flex gap-2">
                        <a  onClick={()=> window.open(`${twitter}`, "_blank")}><CiTwitter /></a>
                        </div>
                      </div>
                        </div>
    </div>
  )
}

export default Card