'use client'
import React from 'react'
import './fourthpage.css'
import Whychooseus from './whychooseus'
import Profilecard from './Profilecard'
import { useMediaQuery } from 'react-responsive'
//import './bgfouthpage.css'




function Fourthpage() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


    return (
        <div style={{ width: "100vw", justifyContent: "center" }}>
            {!isTabletOrMobile ?
                <div style={{ width: "100vw", position: "absolute", zIndex: 1 }}  >
                    <div className="bg">

                    </div>

                    <div className="star-field">
                        <div className="layer"></div>
                        <div className="layer"></div>
                        <div className="layer"></div>
                    </div>

                </div> : null

            }


            <div style={{ display: "flex", flexDirection: isTabletOrMobile ? "column" : "row", width: "100vw", height: isTabletOrMobile ? "200vh" : "100vh", justifyContent: "center", justifySelf: "center" }}>
                <div style={{ width: !isTabletOrMobile ? "40vw" : "100vw", justifySelf: "center" }}>
                    <h1 style={{ zIndex: 20, fontSize: "70px", color: "white", position: "relative", top: "5px", fontWeight: "bold", textAlign: "center", marginTop: "100px" }}> why Us ?</h1>
                    <Whychooseus />

                </div>
                <div style={{ width: !isTabletOrMobile ? "40vw" : "95vw", paddingRight: "50px", paddingLeft: "50px", zIndex: 2 }}>
                    <Profilecard />
                </div>
            </div>
        </div>
    )
}

export default Fourthpage