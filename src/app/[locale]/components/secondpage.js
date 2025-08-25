'use client'
import React from 'react'
import "./secondpage.css"
import { useTranslations } from 'next-intl';




function Secondpage() {
    const t = useTranslations('secondPage');


    return (
        <div className="relative w-full h-full overflow-hidden" style={{ backgroundColor: "#17181f", color: "white", justifyContent: "center", width: "100dvw" }}>
            <div className="el">
            </div>

            <p className='text-3xl text-center md:text-6xl lg:text-8xl p-3 font-extrabold'>{t('title')}</p>
            <p className='text-center p-5 text-lg  md:text-2xl'> {t('description')}</p>

            <video
                autoPlay
                width={1000}
                height={1000}
                muted
                loop
                preload="auto"
                playsInline
                style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    verticalAlign: "baseline",
                    width: "100dvw",
                    height: "100%",
                    opacity: 0.9,
                    justifySelf: "center"

                }}
            >
                <source src="/videos/2ndpage.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>




        </div>
    )
}

export default Secondpage
