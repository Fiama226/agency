'use client'
import React from 'react'
import Particles from "./Particles";
import Orb from './Orb';
import Hyperspeed from './Hyperspeed';
import { useMediaQuery } from 'react-responsive'
import { useTranslations } from 'next-intl';
import { useRef, useEffect } from 'react';

const TextTodisplay = () => {
    const t = useTranslations("firstPage");
    return (
        <div className='absolute top-5/15 ml-[calc(15dvw-50px)] text-white w-1/2'>
            <h1 className='text-xl font-extrabold uppercase text-indigo-900 lg:text-6xl pb-5'>DIGITAL STATION</h1>
            <p className='text-sm lg:text-2xl w-1/2'>{t("description")}</p>
        </div>
    )
}





function Firstpage() {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            // Try to play the video after load
            video.play().catch(err => {
                console.warn('Autoplay failed:', err.message);
            });
        }
    }, []);


    return (
        <div className="relative w-screen h-screen overflow-hidden" style={{ width: "100dvw" }} >
            {isMobile ? <Hyperspeed
                effectOptions={{
                    onSpeedUp: () => { },
                    onSlowDown: () => { },
                    distortion: 'turbulentDistortion',
                    length: 400,
                    roadWidth: 10,
                    islandWidth: 2,
                    lanesPerRoad: 4,
                    fov: 90,
                    fovSpeedUp: 150,
                    speedUp: 2,
                    carLightsFade: 0.4,
                    totalSideLightSticks: 20,
                    lightPairsPerRoadWay: 40,
                    shoulderLinesWidthPercentage: 0.05,
                    brokenLinesWidthPercentage: 0.1,
                    brokenLinesLengthPercentage: 0.5,
                    lightStickWidth: [0.12, 0.5],
                    lightStickHeight: [1.3, 1.7],
                    movingAwaySpeed: [60, 80],
                    movingCloserSpeed: [-120, -160],
                    carLightsLength: [400 * 0.03, 400 * 0.2],
                    carLightsRadius: [0.05, 0.14],
                    carWidthPercentage: [0.3, 0.5],
                    carShiftX: [-0.8, 0.8],
                    carFloorSeparation: [0, 5],
                    colors: {
                        roadColor: 0x080808,
                        islandColor: 0x0a0a0a,
                        background: 0x000000,
                        shoulderLines: 0xFFFFFF,
                        brokenLines: 0xFFFFFF,
                        leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                        rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                        sticks: 0x03B3C3,
                    }
                }}
            /> : <Particles
                mouseRepulsion={true}
                mouseInteraction={true}
                density={1.5}
                glowIntensity={0.5}
                saturation={0.8}
                hueShift={240}
            />
            }

            {!isMobile ?

                <div
                    style={{
                        boxSizing: "border-box",
                        borderRadius: "50%",
                        overflow: "hidden",
                        position: "absolute",
                        zIndex: 1,
                        boxShadow: "rgb(29, 32, 101) 0rem 0rem 200rem",
                        top: "50vh",
                        left: "51vw",
                        width: "67vw",
                        paddingTop: "67vw",
                        color: "rgb(255, 255, 255)",
                    }}

                >
                    <video
                        autoPlay
                        muted
                        loop
                        ref={videoRef}

                        playsInline
                        style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            verticalAlign: "baseline",
                            position: "absolute",
                            opacity: 1,
                            width: "100%",
                            height: "100%",
                            zIndex: 10,
                            top: "0px",
                            left: "0px",
                        }}
                    >
                        <source src="/videos/background.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                : null}
            <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}

            />

            <TextTodisplay />


        </div>
    )
}

export default Firstpage