"use client";
import React from 'react'
import { CardStack } from "../../components/ui/card-stack";
import { usePathname } from 'next/navigation'


const cardEn = [
    {
        id: 0,
        name: "Unified Digital Experience",
        designation: "#Consistency",
        content: (
            <p>
                We build web apps, mobile apps, and websites that feel seamlessly integrated, creating a consistent experience across all platforms.
            </p>
        ),
    },
    {
        id: 1,
        name: "Design that Converts",
        designation: "#Persuasion",
        content: (
            <p>
                Our design isn't just pretty. it's strategic. We prioritize user flow, clarity, and persuasive design to help drive engagement and results.

            </p>
        ),
    },
    {
        id: 2,
        name: "- Performance-Optimized Tech",
        designation: "#Speed",
        content: (
            <p>
                Speed and stability are non-negotiables. We use cutting-edge tech stacks and best practices to ensure lightning-fast load times and minimal downtime.
            </p>
        ),
    },
    {
        id: 4,
        name: "Human-Centered Development",
        designation: "#Empathy",
        content: (
            <p>
                We focus on the end user’s real-life needs, behaviors, and frustrations to create solutions that genuinely improve lives.

            </p>
        ),
    },
    {
        id: 5,
        name: "- Security First",
        designation: "#Protection",
        content: (
            <p>
                Clients trust us because we take data protection seriously. Our apps are designed to meet modern security standards and best practices.
            </p>
        ),
    },
    {
        id: 6,
        name: "- Transparent Collaboration",
        designation: "#Trust",
        content: (
            <p>
                We value long-term relationships, not transactions. Our team communicates openly, provides updates regularly, and welcomes feedback throughout every stage.

            </p>
        ),
    },
    {
        id: 7,
        name: "Quick Turnaround Without the Drama",
        designation: "#Efficiency",
        content: (
            <p>
                We streamline processes so clients get results faster, without unnecessary delays, revisions, or surprises.
            </p>
        ),
    },
    {
        id: 8,
        name: "Future-Ready Thinking",
        designation: "#Innovation",
        content: (
            <p>
                Emerging trends like AI integration, progressive web apps, and accessibility are already baked into our strategy—we future-proof your presence.            </p>
        ),
    },
    {
        id: 9,
        name: "We Don’t Just Build. We Empower.",
        designation: "#Ownership",
        content: (
            <p>
                We equip clients with tools, dashboards, and insight to own and grow their digital assets—even after launch.
            </p>
        ),
    },
];
const cardFr = [
    {
        id: 0,
        name: "Expérience numérique unifiée",
        designation: "Cohérence",
        content: (
            <p>
                Nous développons des applications web, des applications mobiles et des sites web qui s'intègrent parfaitement, offrant une expérience cohérente sur toutes les plateformes.</p>
        ),
    },
    {
        id: 1,
        name: "Un design qui convertit",
        designation: "#Persuasion",
        content: (
            <p>
                Notre conception n'est pas seulement esthétique, elle est aussi stratégique. Nous privilégions le flux utilisateur, la clarté et une conception convaincante afin de favoriser l'engagement et les résultats.
            </p>
        ),
    },
    {
        id: 2,
        name: "Technologies optimisées pour la performance",
        designation: "#Speed",
        content: (
            <p>
                La vitesse et la stabilité sont indispensables. Nous utilisons des technologies de pointe et les meilleures pratiques pour garantir des temps de chargement ultra-rapides et des temps d'arrêt minimaux. </p>
        ),
    },
    {
        id: 4,
        name: "Développement centré sur l'humain",
        designation: "#Empathie",
        content: (
            <p>
                Nous nous concentrons sur les besoins réels, les comportements et les frustrations des utilisateurs finaux afin de créer des solutions qui améliorent véritablement leur quotidien.
            </p>
        ),
    },
    {
        id: 5,
        name: "La sécurité avant tout",
        designation: "#Protection",
        content: (
            <p>
                Nos clients nous font confiance car nous prenons la protection des données très au sérieux. Nos applications sont conçues pour répondre aux normes de sécurité modernes et aux meilleures pratiques.
            </p>
        ),
    },
    {
        id: 6,
        name: "Collaboration transparente",
        designation: "#Trust",
        content: (
            <p>
                Nous privilégions les relations à long terme plutôt que les transactions ponctuelles. Notre équipe communique ouvertement, fournit régulièrement des mises à jour et accueille favorablement les commentaires à chaque étape.
            </p>
        ),
    },
    {
        id: 7,
        name: "Réalisation rapide sans complications",
        designation: "#Efficacité",
        content: (
            <p>
                Nous rationalisons les processus afin que nos clients obtiennent des résultats plus rapidement, sans retards, révisions ou surprises inutiles.            </p>
        ),
    },
    {
        id: 8,
        name: "Une réflexion tournée vers l'avenir",
        designation: "#Innovation",
        content: (
            <p>
                Les nouvelles tendances telles que l'intégration de l'IA, les applications web progressives et l'accessibilité font déjà partie intégrante de notre stratégie : nous assurons la pérennité de votre présence.
            </p>
        ),
    },
    {
        id: 9,
        name: "Nous ne nous contentons pas de construire. Nous donnons les moyens d'agir.",
        designation: "#Propriété",
        content: (
            <p>
                Nous fournissons à nos clients des outils, des tableaux de bord et des informations leur permettant de gérer et de développer leurs actifs numériques, même après leur lancement.                </p>
        ),
    },
]


const Whychooseus = () => {
    const pathname = usePathname()
    console.log("the pathname is:", pathname)
    const CARDS = pathname === '/en' ? cardEn : cardFr


    return (

        <div style={{ color: "white" }}>
            <div className="h-[30rem] flex items-center justify-center w-full">
                <CardStack items={CARDS} offset={5} scaleFactor={0.1} />
            </div>
        </div>

    )
}

export default Whychooseus