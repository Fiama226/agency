import Firstpage from "./components/firstpage";
import Ourjob from './components/Ourjob'
import Secondpage from "./components/secondpage";
import Thirdpage from "./components/thirdpage";
import Fourthpage from "./components/fourthpage";
import SixthPage from "./components/sixthPage";

export default function Home() {
  return (
    <div className="relative w-screen flex flex-col ">
      <Firstpage/>
      <Secondpage/> 
      <Thirdpage/> 
      <Fourthpage/>
       <Ourjob />
      
      <SixthPage />
     

<footer>


    <div className="w-full relative bottom-0 bg-bergundy bg-gray-400 h-fit py-10">


    <div className="md:w-[70%] sm:w-[80%] w-[96%] mx-auto flex md:gap-4 gap-2 items-center justify-center">
        <hr className="w-full md:border-2 border-gold" />
        <h1 className="w-fit sm:text-2xl text-xl font-semibold font-serif text-white">Digital station</h1>
        <hr className="w-full md:border-2 border-gold" />
    </div>
    <div className="flex justify-center items-center py-4 capitalize">
<address className="text-white sm:text-xl font-smibold text-lg"> 📍 Taabtenga ,Ouagadougou,Burkina-Faso  | +226 6616962</address> 
</div>

    <div className="flex justify-center items-center py-4 capitalize">
  <p className="text-white sm:text-xl font-smibold text-lg">&copy;2025 All rights reserved</p> 
    </div>
    </div>


</footer>


  </div>



  );
}




