import {ChevronFirst, ChevronLast} from "lucide-react"
import logo from '@/img/pandao-high-resolution-logo-transparent.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './State/Store'
import { toggleValue } from './State/toggle'
import { Link,useNavigate } from "react-router-dom";


type props = {
   children: string | JSX.Element | JSX.Element[];


}

const Sidebar = ({children} : props) => {
  const toggle = useSelector((state : RootState) => state.toggle.value);
  const dispatch = useDispatch();
 
  return (
    <nav className={ ` h-screen ml-0 z-50 absolute flex flex-col items-center overflow-hidden transition-all ${toggle? "w-full " : "w-0"}`}>
            <nav className={`fixed h-full flex flex-col  bg-green-500 bg-opacity-10 backdrop-blur-lg border-r shadow-sm ${toggle? "w-full " : "w-0"}`}>
                      <div className={`p-4 pb-2 flex justify-between items-center `}>
                         <Link to="/"> <img src={logo} className={ ` overflow-hidden transition-all ${toggle? "w-32" : "w-0"}`} alt="" /></Link>

                                <button onClick={() => dispatch (toggleValue())}>
                                    {toggle ? <ChevronFirst size={24} color='red' className={` overflow-hidden transition-all `} /> : <ChevronLast size={24} color='red' className={`${toggle? "w-8 h-8" : "hidden"} `} /> }
                                </button>

                      </div>
                <ul className={`flex flex-col px-3 items-center justify-center `}>{children}</ul>
            </nav> 
    </nav>
  )
}
export default Sidebar

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  url: string;
}

export function SidebarItem({ icon, text, url }: SidebarItemProps) {
  const toggle = useSelector((state: RootState) => state.toggle.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(toggleValue());
    navigate(url);
  };

  return (
    <li
      className={`relative py-1 px-3 my-1 flex items-center text-white overflow-hidden transition-all hover:bg-green-800 ${
        toggle ? 'w-32' : 'hidden'
      }`}
      onClick={handleClick}
    >
      {icon}
      <span className={`flex overflow-hidden transition-all ${toggle ? 'w-52' : 'w-0'}`}>{text}</span>
    </li>
  );
}



