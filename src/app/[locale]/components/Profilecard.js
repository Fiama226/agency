import React from 'react'
import "./Profilecard.css"
import { Facebook, Instagram, Linkedin, Mail, } from 'lucide-react';



function Profilecard() {
    return (
        <div style={{ height: "100vh", alignContent: "center", color: "white", justifyContent: "center", display: "flex", flexDirection: "column" }}>
            <h1 style={{ zIndex: 20, fontSize: "70px", color: "white", position: "relative", top: "5px", fontWeight: "bold", textAlign: "center", marginTop: "100px" }}> OUR C.E.O</h1>
            <div className="background"></div>

            <div className="outer-div">
                <div className="inner-div">
                    <div className="front">
                        <div className="front__bkg-photo"></div>
                        <div className="front__face-photo"></div>
                        <div className="front__text">
                            <h3 className="front__text-header">KABORE.P.Landry</h3>
                            <p className="front__text-para">👨🏼‍💻 Lead Developer </p>
                            <br />


                            <span >At Digital Station, we turn ideas into powerful digital realities.
                                Every design, every feature, every platform—built for impact.
                                We don’t follow trends. We build what lasts.
                            </span>
                        </div>
                    </div>
                    <div className="back">
                        <div className="social-media-wrapper">
                            <a href="http://facebook.com/landry.kabore.399" className="social-icon"><Mail /></a>
                            <a href="https://www.instagram.com/landrykabore226/" className="social-icon"><Instagram /></a>
                            <a href="https://www.linkedin.com/in/kabore-landry-482591197/" className="social-icon"><Linkedin /></a>
                            <a href="http://facebook.com/landry.kabore.399" className="social-icon"><Facebook /></a>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Profilecard