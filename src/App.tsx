import pandao from "./img/pandao.jpg";
import NavBar from "./MyComponents/NavBar";
import { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import Body from "./MyComponents/Body";
import Stats from "./MyComponents/Stats";
import Cardlist from "@/components/Cardlist/Cardlist";
import ParticlesBG from "./Particles/ParticlesBG";
import BuyFloor from "./MyComponents/BuyFloor";
import Footer from "./MyComponents/Footer";
import { LockKeyhole, Gem, SearchX, Award } from "lucide-react";
import Sidebar from "./MyComponents/Sidebar";
import { SidebarItem } from "./MyComponents/Sidebar";
import { useSelector } from 'react-redux';
import { RootState } from "@/MyComponents/State/Store";
import { Route, Routes } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggle = useSelector((state: RootState) => state.toggle.value);

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" />
       <div className="min-h-screen flex flex-col">
      <ParticlesBG />
      {loading ? (
        <div className="flex-grow flex items-center justify-center relative">
          <PuffLoader
            color="#36d7b7"
            loading={loading}
            size={300}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <img
            src={pandao}
            alt="Loading"
            className="w-20 h-20 absolute rounded-full"
          />
        </div>
      ) : (
        <div className="flex-grow flex">
          <Sidebar>
          <a onClick={()=> window.open("https://bruh.xyz/airdrop", "_blank")}><SidebarItem icon={<Gem size={40} />} text="AIRDROP" url ="" /></a>
            <SidebarItem icon={<LockKeyhole size={40} />} text="STAKING" url =""/>
            <SidebarItem icon={<SearchX size={40} />} text="RARITY" url =""/>
            <SidebarItem icon={<Award size={40} />} text="HONORARY" url ="/Honoray" />
          </Sidebar>
          <div className={`flex-grow ${toggle ? "fixed" : ""} overflow-y-auto`}>
            <Body />
            <Stats />
            <BuyFloor />
            <Cardlist />
          </div>
        </div>
      )}
    </div>
    </Routes>

    <Footer />

    </>
   
  );
}

export default App;
