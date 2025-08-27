import './fourthpage.css'
import Whychooseus from './whychooseus'
import Profilecard from './Profilecard'
import { HexagonBackground } from '@/components/animate-ui/backgrounds/hexagon';


function Fourthpage() {


    return (
        <div className='w-screen justify-center flex relative h-full flex-wrap flex-row' >


            <div className='sm:w-1/2 w-full justify-center items-center flex flex-col' >
                <HexagonBackground className="absolute inset-0 flex items-center justify-center  w-full h-full bg-gray-200 md:h-100vw " />
                <h1 className='relative text-4xl font-extrabold text-white'> why Us ?</h1>
                <Whychooseus />

            </div>
            <div className='sm:w-1/2 w-full justify-center items-center flex bg-black'  >


                <Profilecard />
            </div>
        </div>
    )
}

export default Fourthpage