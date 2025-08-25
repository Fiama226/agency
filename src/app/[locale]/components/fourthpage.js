'use client'
import React from 'react'
import './fourthpage.css'
import Whychooseus from './whychooseus'
import Profilecard from './Profilecard'
import { useMediaQuery } from 'react-responsive'
import { HexagonBackground } from '@/components/animate-ui/backgrounds/hexagon';
import { FireworksBackground } from '@/components/animate-ui/backgrounds/fireworks';


//import './bgfouthpage.css'




function Fourthpage() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


    return (
        <div style={{ width: "100dvw", justifyContent: "center", height: "full", position: "relative" }}>


            <div className='flex flex-row flex-wrap w-screen relative' >
                <div className='sm:w-1/2 w-full justify-center items-center flex flex-col' >
                    <HexagonBackground className="absolute inset-0 flex items-center justify-center  w-full h-full bg-gray-200 md:h-100vw " />
                    <h1 className='relative text-4xl font-extrabold text-white'> why Us ?</h1>
                    <Whychooseus />

                </div>
                <div className='sm:w-1/2 w-full justify-center items-center flex bg-black'  >


                    <Profilecard />
                </div>
            </div>
        </div>
    )
}

export default Fourthpage