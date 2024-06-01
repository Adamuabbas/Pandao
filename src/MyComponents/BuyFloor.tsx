import logo from "@/img/234.webp"
import Aptos from "@/img/Aptos.svg"


const BuyFloor = () => {
  return (
    <div className='BuyFloor'>
 <div className=' flex flex-col mt-10 justify-center items-center '  >
       <div className=' p-2 m-6 z-10'>
       <h1 className='text-4xl text-white text-center font-bold'>BUY THE FLOOR</h1>
        <div className='w-72 h-52 bg-green-500 bg-opacity-25 backdrop-blur-lg flex justify-between text-white rounded-lg mt-5 p-10
            md:w-96 md:h-60 lg:w-96 lg:h-60'>
          <img src={logo} alt="logo" className='w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 m-5'/>
          <div className='flex flex-col justify-between'>
            <h2 className=' md:text-xl lg:text-2xl  font-bold'>Chad Panda</h2>
            <div className=' text-center'>
              <h2 className=''>Buy price</h2>
              <div className='flex gap-2 justify-center items-center ' >
                <img src={Aptos} className='w-4 h-4' alt="" />
              <h2 className='font-bold'> 3.7</h2>
              </div>
            </div>
            <a href='https://www.mercato.xyz/aptos/collection/chad-panda-2ac9320a?bottomTab=trades&tab=items'><button className="z-10 bg-transparent border border-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-5 w-20 md:w-24 lg:w-32" > BUY NOW </button></a>
          </div>


        </div>
       </div>
    </div>
    </div>
   
  )
}

export default BuyFloor