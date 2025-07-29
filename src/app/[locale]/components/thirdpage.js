import React from 'react'
import './thirdpage.css'
import Ballpit from './Ballpit'
import { useTranslations } from 'next-intl';



function Thirdpage() {
    const t = useTranslations('thirdPage');

    return (
        <div className="relative overflow-hidden container" style={{ backgroundColor: "#17181f", width: "100vw", height: "100vh", display: "flex", color: "white", flexDirection: "column" }}>
            <div className='snow'></div>
            <Ballpit
                count={50}
                gravity={0.7}
                friction={0.8}
                wallBounce={0.95}
                followCursor={true}
                className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
                colors={["red", "yellow", "green"]}
            />


            <p className='thirdText'>
                {t("title")}

            </p>
            <p className='fourthText'>
                {t("description")}

            </p>

        </div>

    )
}

export default Thirdpage