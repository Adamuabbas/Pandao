import ParticlesBG from "@/Particles/ParticlesBG";
import NavBar from "../../MyComponents/NavBar";
import Sidebar from "@/MyComponents/Sidebar";
import { SidebarItem } from "@/MyComponents/Sidebar";
import { LockKeyhole, Gem, SearchX, Award } from "lucide-react";
import HonorCard from "./HonorCardlist";


const Honoray = () => {
  return (
    <div className="">
      <ParticlesBG />
      <div>
        
      </div>
      <Sidebar>
          <a onClick={()=> window.open("https://bruh.xyz/airdrop", "_blank")}><SidebarItem icon={<Gem size={40} />} text="AIRDROP" url ="" /></a>
            <SidebarItem icon={<LockKeyhole size={40} />} text="STAKING" url =""/>
            <SidebarItem icon={<SearchX size={40} />} text="RARITY" url =""/>
            <SidebarItem icon={<Award size={40} />} text="HONORARY" url ="/Honoray" />
          </Sidebar>
      <NavBar />
      <HonorCard />
      
    </div>
  );
};

export default Honoray;
