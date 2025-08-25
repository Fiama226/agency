import Firstpage from "./components/firstpage";
import Ourjob from './components/Ourjob'
import Secondpage from "./components/secondpage";
import Thirdpage from "./components/thirdpage";
import Fourthpage from "./components/fourthpage";
import SixthPage from "./components/sixthPage";

export default function Home() {
  return (
    <div className="relative w-screen ">
      <Firstpage/>
      <Secondpage/> 
      <Thirdpage/> 
      <Fourthpage/>
      <Ourjob />
      <SixthPage />

<footer>


    <div className="w-full relative bottom-0 bg-bergundy bg-gray-950 h-fit">


    <div className="md:w-[70%] sm:w-[80%] w-[96%] mx-auto flex md:gap-4 gap-2 items-center justify-center">
        <hr className="w-full md:border-2 border-gold" />
        <h1 className="w-fit sm:text-2xl text-xl font-semibold font-serif text-white">DIGITAL STATION</h1>
        <hr className="w-full md:border-2 border-gold" />
    </div>
    <div className="flex justify-center items-center py-4 capitalize">
<h4 className="text-white sm:text-xl font-smibold text-lg"> Saaba ,Ouagadougou,Burkina-Faso | 70719366</h4> 
</div>

    <div className="flex justify-center items-center py-4 capitalize">
  <h4 className="text-white sm:text-xl font-smibold text-lg">&copy;2025 All rights reserved</h4> 
    </div>
    </div>


</footer>


  </div>



  );
}




