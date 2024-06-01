import { motion} from "framer-motion";
import Slider from "./Slider";

const heading = "CHAD PANDAS";
const text =
  "Introducing the Chad Panda NFT Collection, the groundbreaking release by Panda DAO Bruh Bears subDAO on Aptos. Embrace the enchanting world of Pandas through limited edition NFTs, fusing charm and creativity. Don't miss your chance to be part of NFT history.";
const charVarients = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};
function Body() {
  const splitText = text.split("");
  const splitHeading = heading.split("");

  return (
    <div className="h-screen  justify-center " id="hero">

      <div className="flex flex-col h-full">
      <div className="h-80 w-100  z-10 flex flex-col justify-center items-center md:h-80 w-100  lg:h-80 w-100  ">
      <motion.h1
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.02 }}
          >
            {splitHeading.map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                transition={{ duration: 0.5 }}
                variants={charVarients}
                className="text-2xl md:text-4xl lg:text-6xl text-white font-bold"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.02 }}
            className="w-30 text-white text-wrap text-2xl mt-5 m-5 text-center"
          >
            {splitText.map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                transition={{ duration: 0.5 }}
                variants={charVarients}
                className="text-sm md:text-base lg:text-lg"
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        
      </div>
      <div className="mt-10">
        <Slider />
      </div>
    
      </div>
    

    </div>
  );
}

export default Body;


