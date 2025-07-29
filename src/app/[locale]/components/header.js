'use client'
import { useState } from "react";
import { Menu, X } from 'lucide-react';




const MenuofAll = () => {

    const listitemstyles = {
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 700,
        fontSize: "75px",
        lineHeight: "95px",
        transformOrigin: "left center",
        letterSpacing: "-0.01em",
        transition: "color .45s cubic-bezier(0.475,0.425,0,0.995)",
        position: "relative",
        backfaceVisibility: "hidden",
        boxSizing: "border-box",
        opacity: 1,
        transform: "none",

    }
    return (
        <div className="w-screen h-screen bg-yellow-500"
            style={{
                margin: "0px auto",
                maxWidth: "1200px",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                position: "relative",
                color: "rgb(111, 111, 111)",
            }}>
            <nav>
                <ul style={{
                    listStyle: "none",
                    padding: "0px",
                    margin: "0px",
                    marginLeft: "60px",
                    transform: "translate3d(0px, -20px, 0px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    color: "#fff",

                }}>
                    <div
                        className="label type-comp2"
                        style={{
                            fontFamily: '"Neue Plak W01 Bold", sans-serif',
                            fontSize: "12px",
                            lineHeight: "24px",
                            letterSpacing: "0.25em",
                            display: "inline-block",
                            textTransform: "uppercase",
                            transform: "rotate(-90deg) translate3d(-45px, 0px, 0px)",
                            transformOrigin: "left bottom",
                        }}
                    >
                        Menu
                    </div>
                    <li style={listitemstyles}>   <a href="/" >Home</a></li>
                    <li style={listitemstyles}>  <a href="/about">Services</a></li>
                    <li style={listitemstyles}> <a href="/contact">About</a> </li>
                    <li style={listitemstyles}> <a href="/contact">contacts</a> </li>

                </ul>
            </nav>
            <div style={{
                alignSelf: "flex-end",
                position: "absolute",
                right: "60px",
                opacity: 1,
                color: "rgb(111, 111, 111)",
                display: "flex",
                flexDirection: "column",
                marginBottom: "60px",
            }}
            >
                <a
                    href="mailto:landrykabore70719366@gmail.com"
                    style={{
                        backgroundColor: "transparent",
                        textDecoration: "none",
                        fontFamily: '"Neue Plak W01 Regular"',
                        lineHeight: "32px",
                        letterSpacing: "0.05em",
                        fontSize: "17px",
                        marginBottom: "6px",
                        display: "inline-block",
                        color: "#f84525",
                    }}
                >landrykabore70719366@gmail.com</a>
                <a
                    href="tel:+22670719366"
                    style={{
                        backgroundColor: "transparent",
                        textDecoration: "none",
                        fontFamily: '"Neue Plak W01 Regular"',
                        lineHeight: "32px",
                        letterSpacing: "0.05em",
                        fontSize: "17px",
                        marginBottom: "6px",
                        display: "inline-block",
                        color: "#f84525",
                    }}
                >+22670719366</a>
                <div
                    style={{
                        fontFamily: '"Neue Plak W01 Regular"',
                        fontSize: "16px",
                        lineHeight: "32px",
                        letterSpacing: "0.05em",
                        maxWidth: "250px",
                        marginTop: "20px",
                    }}

                >
                    14yaar ,Ouagadougou, Burkina Faso
                </div>


            </div>
        </div>
    )
}



export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (<>
        <div className="flex h-15 w-dvw flex-row">
            <a href="/" className="w-1/2">
                <img src="https://designbygio.it/images/logo.png" alt="logo" />
            </a>
            <div
                className="w-1/2"
                onClick={() => setIsNavOpen((prev) => !prev)}
            >

                <Menu />

            </div>
            {isNavOpen && (
                <div className="absolute top-0 right-0 w-full h-screen bg-white flex flex-col z-10">
                    <div
                        className=""

                    >
                        <div style={{ position: "absolute", top: "20px", right: "20px" }} onClick={() => setIsNavOpen(false)}>
                            <X />

                        </div>
                        <MenuofAll />
                    </div>
                </div>
            )}


        </div>

    </>
    );
}