'use client'
import React from 'react'
import "./secondpage.css"
import { useTranslations } from 'next-intl';


function Secondpage() {
    const t = useTranslations('secondPage');

    return (
        <div className="relative w-full  overflow-hidden" style={{ backgroundColor: "#17181f", color: "white", justifyContent: "center", width: "100vw" }}>
            <div className="el">
            </div>

            <p className='firstText'>{t('title')}</p>
            <p className='secondText'> {t('description')}</p>

            <video
                autoPlay
                width={1000}
                height={1000}
                muted
                loop
                playsInline
                style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    verticalAlign: "baseline",
                    width: "100vw",
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
