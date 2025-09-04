'use client'
import Image from 'next/image'
import ScrollVelocity from './ScrollVelocity';
import { useMediaQuery } from 'react-responsive'
import { useTranslations } from 'next-intl';
import './Ourjob.css'
import Particles from './realParticle';
import { usePathname } from 'next/navigation'


const domainFr = ["⚖️ Cabinets d'avocats  🏛️ Services gouvernementaux et portails publics   ✈️ Agences de voyage  🍽️ Restaurants et cafés  📐👷🏻‍♀️ Cabinets d'architecture  🥳 Organisateurs d'événements  🛠️ Services automobiles  💰 Cabinets comptables et fiscaux  🙏 Groupes religieux et églises  🎓 Établissements d'enseignement  📝 Assureurs 👨🏻‍💻 Cabinets de recrutement et agences d'intérim  🌱 Organisations environnementales  📦 Entreprises de logistique et de transport", "🛒 Boutiques en ligne  🏋🏽 Fitness et coaching personnel  🏠 Agences immobilières  🐶 Services de soins pour animaux  🫂 ONG et organisations à but non lucratif  💇🏻‍♀️ Salons de beauté et spas  📈 Applications d'investissement et de technologie financière  🏭 Entreprises manufacturières  Centres communautaires et programmes de sensibilisation  🛠️ Services de réparation à domicile(plombiers, électriciens)  🚢 Entreprises d'import/export  📰 Journaux locaux et magazines numériques Galeries d'art et musées  Startups dans tous les secteurs, clubs sociaux et groupes de loisirs,🚗 Concessionnaires automobiles,🏗️Entreprises de construction"]

const domainEn =
    ["⚖️Law firms  🏛️ Government services & public portals  ✈️ Travel agencies  🍽️ Restaurants & cafes  📐👷🏻‍♀️ Architecture firms  🥳 Event planners  🛠️ Automotive services  💰 Accounting & tax firms  🙏 Religious groups & churches  🎓 Educational institutions  📝 Insurance providers  👨🏻‍💻 Recruitment & staffing firms  🌱 Environmental organizations  📦 Logistics & shipping companies", "🛒 E-commerce stores  🏋🏽 Fitness & personal training  🏠 Real estate companies  🐶 Pet care services  🫂 NGO & nonprofit organizations  💇🏻‍♀️ Beauty salons & spas  📈 Investment & fintech apps  🏭 Manufacturing firms  Community centers & outreach programs  🛠️ Home repair services (plumbers, electricians)  🚢 Import/export companies  📰 Local newspapers & digital magazines Art galleries & museums  Startups in any industry, Social clubs & hobby groups,🚗 Car dealerships,🏗️Construction companies"];



function Ourjob() {
    const t = useTranslations('fouthPage');
    const pathname = usePathname()
    const domain = pathname === '/en' ? domainEn : domainFr



    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className="bg-gray-800 w-screen justify-center flex flex-col pt-20" >
            <Particles />

            <div style={{ width: "90vw", justifySelf: "center", display: "flex", flexDirection: isTabletOrMobile ? "column" : "row", overflow: "hidden", alignItems: "center", alignSelf: 'center', placeSelf: "center" }}>
                <div
                    style={{
                        boxSizing: "inherit",
                        padding: "0px 77px 25px 77px",
                        textAlign: "center",
                        justifyContent: "center",
                        position: "relative",
                        outline: "none",
                        borderColor: "white",
                        borderRightWidth: !isTabletOrMobile ? "5px" : null,
                        height: "60%",
                        borderBottom: isTabletOrMobile ? "5px solid white" : null,
                    }}
                >
                    <Image src="/Think.webp" alt="" width={100} height={100}


                        style={{
                            boxSizing: "inherit",
                            borderStyle: "none",
                            maxWidth: "100%",
                            width: "150px",
                            height: "150px",
                            margin: "0px 0px 28px 0px",
                            outline: "none",
                            justifySelf: "center",
                        }}


                    />

                    <p
                        style={{
                            boxSizing: "inherit",
                            marginTop: "0px",
                            overflowWrap: "break-word",
                            fontSize: "36px",
                            fontWeight: 500,
                            lineHeight: 0.97,
                            textTransform: "uppercase",
                            marginBottom: "20px",
                            color: "white"
                        }}
                    >
                        {t('think')}
                    </p>
                    <ul style={{ boxSizing: "inherit", color: "white" }}>
                        <li>{t('think1')} </li>
                        <li>{t('think2')}</li>
                        <li>{t('think3')}</li>
                        <li>{t('think4')}</li>
                    </ul>

                </div>
                <div
                    style={{
                        boxSizing: "inherit",
                        padding: "0px 77px 25px 77px",
                        textAlign: "center",
                        justifyContent: "center",
                        position: "relative",
                        outline: "none",
                        borderColor: "white",
                        borderRightWidth: !isTabletOrMobile ? "5px" : null,
                        height: "60%",
                        borderBottom: isTabletOrMobile ? "5px solid white" : null,
                    }}
                >
                    <Image src="/Envision.webp" alt="" width={100} height={100}


                        style={{
                            boxSizing: "inherit",
                            borderStyle: "none",
                            maxWidth: "100%",
                            width: "150px",
                            height: "150px",
                            margin: "0px 0px 28px 0px",
                            outline: "none",
                            justifySelf: "center",
                        }}


                    />

                    <p
                        style={{
                            boxSizing: "inherit",
                            marginTop: "0px",
                            overflowWrap: "break-word",
                            fontSize: "36px",
                            fontWeight: 500,
                            lineHeight: 0.97,
                            textTransform: "uppercase",
                            marginBottom: "20px",
                            color: "white"
                        }}
                    >
                        {t('envision')}
                    </p>
                    <ul style={{ boxSizing: "inherit", color: "white" }}>
                        <li>{t('envision1')}</li>
                        <li>{t('envision2')}</li>
                        <li>{t('envision3')}</li>
                        <li>{t('envision4')}</li>
                    </ul>

                </div>
                <div
                    style={{
                        boxSizing: "inherit",
                        padding: "0px 77px 25px 77px",
                        textAlign: "center",
                        justifyContent: "center",
                        position: "relative",
                        outline: "none",

                        height: "60%"
                    }}
                >
                    <Image src="/Build.webp" alt="" width={100} height={100}


                        style={{
                            boxSizing: "inherit",
                            borderStyle: "none",
                            maxWidth: "100%",
                            width: "150px",
                            height: "150px",
                            margin: "0px 0px 28px 0px",
                            outline: "none",
                            justifySelf: "center",
                        }}


                    />

                    <p
                        style={{
                            boxSizing: "inherit",
                            marginTop: "0px",
                            overflowWrap: "break-word",
                            fontSize: "36px",
                            fontWeight: 500,
                            lineHeight: 0.97,
                            textTransform: "uppercase",
                            marginBottom: "20px",
                            color: "white"
                        }}
                    >
                        {t('build')}
                    </p>
                    <ul style={{ boxSizing: "inherit", color: "white" }}>
                        <li>{t('build1')}</li>
                        <li>{t('build2')}</li>
                        <li>{t('build3')}</li>
                        <li>{t('build4')}</li>
                    </ul>

                </div>
            </div>
            <div>
                <div className="secondTitle" >
                    <p style={{ color: "white", fontSize: isTabletOrMobile ? "25px" : "50px", fontWeight: "bold", width: "100vw", textAlign: "center", padding: "5vw" }} >
                        {t('title2')}
                    </p>
                </div>
                <ScrollVelocity
                    texts={domain}
                    velocity={100}
                    numCopies={50}
                    className="custom-scroll-text"
                />
            </div>
        </div>

    )
}

export default Ourjob