import { useEffect, useState, useRef } from "react";
import { useDispatch } from 'react-redux';
import { toggleValue } from './State/toggle';
import { Menu } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from '@/img/pandao-high-resolution-logo-transparent.png';
import { LockKeyhole, Gem, SearchX, Award } from "lucide-react";

function NavBar() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between pt-2">
      <div className="flex gap-10 ml-10 w-50">
        <div className="flex justify-between">
          <button onClick={() => dispatch(toggleValue())} className="z-20 md:hidden">
            <Menu className="z-10 text-white" />
          </button>
          <Link to="/">
            <img src={logo} alt="Logo" className="w-30 h-10 absolute" />
          </Link>
        </div>
        <div className="ml-7">
          <nav className="hidden md:block relative flex-col items-center">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="bg-green-700 w-full text-gray-50 p-1 flex items-center justify-between text-lg rounded-lg tracking-wider border-4 border-transparent active:border-green-500 duration-300 active:text-green-500"
            >
              
              <span className="flex items-center">
                {isOpen ? (
                  <>
                  <div className="flex">
                
                    <span className="ml-1">Panda it</span>
                    <AiOutlineCaretUp className="h-4 ml-1" />
                  </div>
                    
                  </>
                ) : (
                  <>
                   
                    <span className="ml-1">Panda it</span>
                    <AiOutlineCaretDown className="h-4 ml-1" />
                  </>
                )}
              </span>
            </button>
            {isOpen && (
              <div
                ref={dropdownRef}
                className="bg-green-500 bg-opacity-10 backdrop-blur-lg text-white absolute top-16 flex flex-col items-center rounded-lg p-2 w-72 z-50"
              >
               <a onClick={()=> window.open("https://bruh.xyz/airdrop", "_blank")}> <div className="transition-all hover:bg-green-800 py-1 px-3 my-1 flex items-center gap-2" ><Gem size={15} /> AIRDROP</div></a>
                <Link to="/Honoray"> <div className="transition-all hover:bg-green-800 py-1 px-3 my-1 flex items-center gap-2"><Award size={15}/>HONORARY</div></Link>
                <div className="transition-all hover:bg-green-800 py-1 px-3 my-1 flex items-center gap-2"><LockKeyhole size={15}/>STAKING <sup>NA</sup></div>
                <div className="transition-all hover:bg-green-800 py-1 px-3 my-1 flex items-center gap-2"><SearchX size={15} /> RARITY <sup>NA</sup></div>
               
              </div>
            )}
          </nav>
        </div>
      </div>

      <div className="flex">
        <Link
          to="/"
          className="z-10"
        >
          <button className="z-10 bg-transparent border border-blue-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded mr-5">
            Home
          </button>
        </Link>
        <div className="z-10 flex gap-4 mr-2">
          <a onClick={()=> window.open("https://discord.com/invite/4K34sgkheS", "_blank")} className="z-10">
            <FaDiscord className="hidden md:block bg-white w-10 h-10 rounded hover:bg-gray-400" />
          </a>
          <a onClick={()=> window.open("https://x.com/pandaobruhbears", "_blank")} className="z-10">
            <CiTwitter className="hidden md:block bg-white hover:bg-gray-400 w-10 h-10 rounded" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
