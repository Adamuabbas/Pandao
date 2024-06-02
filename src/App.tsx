
import { Route, Routes } from "react-router-dom";
import Home from "@/MyComponents/Home"
import Honoray from "./components/HonorList/Honoray";


const App = () => {
  return (
   <div>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Honor" element={<Honoray />} />
    
   </Routes>
   </div>
  )
}

export default App;