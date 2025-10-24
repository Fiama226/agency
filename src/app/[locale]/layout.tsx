import { getTranslations } from "next-intl/server";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Image from "next/image";
import Contactsbanner from "./components/Contactsbanner";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Script from "next/script";
import type { MetadataRoute } from "next";

export function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://digitlstation.it.com/fr",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
export function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    generator: "Next.js",
    applicationName: "Digitalstation",
    icons: {
      icon: "https://res.cloudinary.com/dxvnon94f/image/upload/v1756924566/logo.png",
      shortcut:
        "https://res.cloudinary.com/dxvnon94f/image/upload/v1756182029/logo.png",
      apple:
        "https://res.cloudinary.com/dxvnon94f/image/upload/v1756182029/logo.png",
    },
    referrer: "origin-when-cross-origin",
    keywords: [
      "Digitalstation",
      "agence web Burkina Faso",
      "création de site web Burkina Faso",
      "site internet professionnel Ouagadougou",
      "développement web responsive",
      "site vitrine et e-commerce",
      "agence web Burkina Faso",
      "SEO Burkina Faso",
      "site web pour PME",
      "Création de site web professionnel à Ouagadougou",
      "Développement de site internet moderne au Burkina Faso",
      "Conception de site vitrine pour entreprises locales",
      "Création de site e-commerce sécurisé au Burkina Faso",
      "Développement web responsive et mobile-friendly",
      "Agence web à Ouagadougou pour PME et startups",
      "Création de site web optimisé pour le marché africain",
      "Développement de site web multilingue (français, anglais, mooré)",
      "Création d’app mobile Android/iOS au Burkina Faso",
      "Développement d’application mobile pour entreprises locales",
      "Création d’app mobile pour startups à Ouagadougou",
      "Solutions mobiles pour digitaliser les services au Burkina Faso",
      "Application mobile avec interface intuitive et design moderne",
      "Agence digitale à Ouagadougou : web, mobile, design",
      "Création de site web professionnel au Burkina Faso",
      "Services numériques pour entreprises à Ouagadougou",
      "Création de site web et application mobile à Ouagadougou",
      "Développement web et mobile pour la transformation digitale",
      "Accompagnement digital pour PME et entrepreneurs à Ouagadougou",
      "Conception d’affiches publicitaires et institutionnelle",
      "Création de visuels pour réseaux sociaux et campagnes marketing",
      "Design d’affiches pour événements, concerts, conférence",
      "Création de flyers, brochures, cartes de visite personnalisée",
      "	Création d’affiches pour communication locale et nationale",
      "Agence digitale au Burkina Faso : web, mobile, design",
      "Création de site web et application mobile pour entreprises africaines",
      "Développement digital à Ouagadougou pour PME et startups",
      "Services de branding, SEO, UX/UI et développement web",
      "Solutions numériques pour entrepreneurs au Burkina Faso",
      "Création de site web, app mobile et affiches publicitaires",
      "Agence de communication digitale à Ouagadougou",
      "Développement web et mobile avec design professionnel",
    ],

    authors: [
      {
        name: "KABORE Pawendtaore Landry",
        url: "https://www.instagram.com/landrykabore226/",
      },
    ],
    creator: "KABORE Pawendtaore Landry",
    publisher: "KABORE Pawendtaore Landry",
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "www.digitalstation.tech",
      siteName: "Digitalstation",
      images: [
        {
          url: "https://res.cloudinary.com/dxvnon94f/image/upload/v1756182029/logo.png",
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="0aaXTUSrm_Gtk2SYIe84IJeGo7OIdUiJSubTn0YQ5pc"
        />
        <meta
          name="description"
          content="Digitalstation est une agence digitale complète, experte en développement web/mobile, stratégie de marque et accompagnement digital.Nous développons des sites web et des applications mobiles évolutifs, optimisés pour le référencement naturel (SEO) et dotés d'un design moderne."
        />
        <title>
          DigitalStation | Agence de developpement web , mobile , de solutions
          numériques, technologies et conseil en transformation numérique
        </title>
        <meta name="robots" content="index, follow" />
        <meta name="generator" content="Next js"></meta>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Digitalstation",
              url: "https://digitalstation.it.com/fr",
              logo: {
                "@type": "ImageObject",
                url: "https://res.cloudinary.com/dxvnon94f/image/upload/v1756924566/logo.png",
                width: 500,
                height: 500,
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61579090841259",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+22666616962",
                  email: "contact@digitalstation.it.com",
                  contactType: "Customer Service",
                  areaServed: "Burkina Faso",
                  availableLanguage: ["French", "English"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Rue 28269,Tabtenga, Ouagadougou, Kadiogo, Burkina Fas ",
                addressLocality: "Ouagadougou",
                addressRegion: "Centre",
                postalCode: "10010",
                addressCountry: "BF",
              },
              founder: {
                "@type": "Person",
                name: "KABORE Pawendtaore Landry",
              },
              description:
                "Digitalstation est une agence de développement et de conseil spécialisée dans la création de sites web, d'applications web et mobiles. Nous transformons des idées audacieuses en solutions technologiques rentables, prêtes à être commercialisées. Notre approche, basée sur les données et adaptée au marché, garantit un impact mesurable et une valeur durable.",
            }),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WQ819BTVE4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WQ819BTVE4');
        `}
        </Script>
      </head>
      <NextIntlClientProvider>
        <body>
          <Image
            src={
              "https://res.cloudinary.com/dxvnon94f/image/upload/v1756924566/logo.png"
            }
            alt="logo"
            width={1000}
            height={1000}
            style={{
              position: "absolute",
              top: -40,
              left: -40,
              backgroundColor: "transparent",
              zIndex: 500,
              width: "15.5rem",
              height: "15.5rem",
            }}
          />
          <div style={{ position: "fixed", bottom: 15, left: 15, zIndex: 500 }}>
            <Contactsbanner />
          </div>
          <SpeedInsights />
          <Analytics />
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=123"
          />
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
