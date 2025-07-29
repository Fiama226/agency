"use client";
import React from 'react'
import { CardStack } from "../../components/ui/card-stack";
//import { cn } from "@/lib/utils";

const CARDS = [
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
        name: "- Design that Converts",
        designation: "#Persuasion",
        content: (
            <p>
                - Our design isn't just pretty—it's strategic. We prioritize user flow, clarity, and persuasive design to help drive engagement and results.

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
                - We focus on the end user’s real-life needs, behaviors, and frustrations to create solutions that genuinely improve lives.

            </p>
        ),
    },
    {
        id: 5,
        name: "- Security First",
        designation: "#Protection",
        content: (
            <p>
                - Clients trust us because we take data protection seriously. Our apps are designed to meet modern security standards and best practices.
            </p>
        ),
    },
    {
        id: 6,
        name: "- Transparent Collaboration",
        designation: "#Trust",
        content: (
            <p>
                - We value long-term relationships, not transactions. Our team communicates openly, provides updates regularly, and welcomes feedback throughout every stage.

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
                We equip clients with tools, dashboards, and insight to own and grow their digital assets—even after launch.            </p>
        ),
    },
];

const Whychooseus = () => {
    return (
        <div style={{ color: "white" }}>
            <div className="h-[40rem] flex items-center justify-center w-full">
                <CardStack items={CARDS} offset={10} scaleFactor={0.09} />
            </div>
        </div>
    )
}

export default Whychooseus