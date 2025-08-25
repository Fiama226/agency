"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image';

import "./sixthPage.css"




function SixthPage() {
    const pathname = usePathname()
    const French = pathname === '/fr'
    console.log("the pathname of sixth page is:", pathname)

    const data = [{
        title: "еCommеrcе",
        Imagebackgorund: "еCommеrcе.jpeg",
        icon: "еCommеrcе.svg",
        descriptionEn: " From intuitive product catalogs to seamless payment integrations, our eCommerce web solutions are conversion-driven and mobile-ready. We optimize for speed and scalability, ensuring your online store is a dynamic hub for your business.",
        descriptionFr: "Des catalogues de produits intuitifs aux intégrations de paiement fluides, nos solutions web de commerce électronique sont axées sur la conversion et adaptées aux appareils mobiles. Nous optimisons la vitesse et l'évolutivité afin que votre boutique en ligne soit un centre dynamique pour votre entreprise."
    }, {
        title: "Websites",
        Imagebackgorund: "websites.jpg",
        icon: "Websites.svg",
        descriptionEn: " Whether you need a simple landing page or a complex platform, we build websites that captivate users and drive results. Our websites look stunning on every device (desktops, tablets, and mobiles)",
        descriptionFr: "Que vous ayez besoin d'une simple page d'accueil ou d'une plateforme complexe, nous créons des sites web qui captivent les utilisateurs et génèrent des résultats. Nos sites web sont magnifiques sur tous les appareils (ordinateurs de bureau, tablettes et mobiles).",
    },
    {
        title: "mobile App",
        Imagebackgorund: "mobileApp.jpg",
        icon: "mobileApp.svg",
        descriptionEn: " We create mobile apps that deliver a seamless user experience. Our apps are built for speed, scalability, and user engagement, ensuring your business is always ahead of the curve.",
        descriptionFr: "Nous créons des applications mobiles qui offrent une expérience utilisateur fluide. Nos applications sont conçues pour être rapides, évolutives et attrayantes, afin que votre entreprise garde toujours une longueur d'avance."
    },
    {
        title: "Consulting",
        Imagebackgorund: "consulting.jpg",
        icon: "Consulting.svg",
        descriptionEn: "We provide strategic consulting for business owners, entrepreneurs, and executives—whether scaling startups or leading established enterprises. Our mission is to help clients reimagine their operating models and unlock greater productivity through human-centered digital experiences.",
        descriptionFr: "Nous fournissons des services de conseil stratégique aux chefs d'entreprise, aux entrepreneurs et aux cadres supérieurs, qu'ils développent des start-ups ou dirigent des entreprises bien établies. Notre mission est d'aider nos clients à repenser leurs modèles opérationnels et à améliorer leur productivité grâce à des expériences numériques centrées sur l'humain."
    },

    ]
    return (
        <div className="relative w-full h-screen overflow-hidden ">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/videos/sixthpage.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay (optional for dark effect) */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white flex flex-row items-center gap-15 flex-wrap">


                {data.map((item, index) => (
                    <div key={item.title} className="book">
                        <div className="para ">
                            <div className=' pl-10'>
                                <Image
                                    src={`/icons/${item.icon}`}
                                    alt='Hello guys'
                                    className="w-20 h-20 text-deep-purple-accent-400 float-left mr-2"
                                    width={1000}
                                    height={1000}

                                />

                                <p className=" text-sm text-gray-900 text-left">
                                    {French ? item.descriptionFr : item.descriptionEn}
                                </p>
                            </div>

                        </div>
                        <div
                            className="cover bg-no-repeat"
                            style={{ backgroundImage: `url(/Imagebackgorund/${item.Imagebackgorund})` }}
                        >


                            <p className="book-title bottom-5 absolute font-extrabold">{item.title}</p>
                        </div>
                    </div>

                ))}



            </div>

        </div>
    );
}

export default SixthPage;





