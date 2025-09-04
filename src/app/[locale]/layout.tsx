import {getTranslations} from 'next-intl/server';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import Image from "next/image";
import Contactsbanner from "./components/Contactsbanner";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Script from 'next/script';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});

 
  return {
    title: t('title'),
    description: t('description'),
    generator: 'Next.js',
    applicationName: 'Digitalstation',
    icons: {
        icon: 'https://res.cloudinary.com/dxvnon94f/image/upload/v1756924566/logo.png',
        shortcut: 'https://res.cloudinary.com/dxvnon94f/image/upload/v1756182029/logo.png',
        apple: 'https://res.cloudinary.com/dxvnon94f/image/upload/v1756182029/logo.png',
    },
    referrer: 'origin-when-cross-origin',
    keywords: ['Next.js', 'React', 'JavaScript'],
    authors: [{ name: 'KABORE Pawendtaore Landry', url: 'https://www.instagram.com/landrykabore226/' }],
    creator: 'KABORE Pawendtaore Landry',
    publisher: 'KABORE Pawendtaore Landry',
    openGraph: {
    title: t('title'),
    description: t('description'),
    url: 'www.digitalstation.tech',
    siteName: 'Digitalstation',
    images: [
      {
        url: 'https://res.cloudinary.com/dxvnon94f/image/upload/v1756182029/logo.png',
        width: 800,
        height: 600,
      },
    ]
}
  };
}





export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}){
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }  
  return (
    <html lang="en">
      <head>
     
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="0aaXTUSrm_Gtk2SYIe84IJeGo7OIdUiJSubTn0YQ5pc" />
    <meta name="description" content="Digitalstation est une agence digitale complète, experte en développement web/mobile, stratégie de marque et accompagnement digital.Nous développons des sites web et des applications mobiles évolutifs, optimisés pour le référencement naturel (SEO) et dotés d'un design moderne." />
    <title>DigitalStation | Agence de developpement web , mobile , de solutions numériques, technologies et conseil en transformation numérique</title>
<meta name="robots" content="index, follow" />    
<meta name="generator" content="Next js"></meta>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Digitalstation",
  "url": "https://digitlstation.it.com/fr",
  "logo": "https://res.cloudinary.com/dxvnon94f/image/upload/v1756924566/logo.png",
  "sameAs": [
    "https://www.facebook.com/landrydigital",
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+2266616962",
    "contactType": "customer service",
    "areaServed": "BF",
    "availableLanguage": ["French", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ouagadougou",
    "addressRegion": "Centre",
    "addressCountry": "BF"
  },
  "founder": {
    "@type": "Person",
    "name": "KANORE Pawendtaore Landry"
  },
  "description": "Digitalstation est une agence de développement et de conseil spécialisée dans les sites web, les applications web, les applications mobiles, etc. qui transforme des idées audacieuses en technologies rentables et prêtes à être commercialisées.Nous sommes spécialisés dans la résolution de défis commerciaux réels grâce à des solutions numériques sur mesure, conçues avec précision, basées sur les données et axées sur les résultats.Notre approche de développement est basée sur les données et tient compte du marché, ce qui garantit que chaque produit que nous créons a un impact mesurable et une valeur à long terme."
}
</script>

        </head>
         <NextIntlClientProvider>
        


      <body
   

      >
         

        <Image src={"https://res.cloudinary.com/dxvnon94f/image/upload/v1756924566/logo.png"} alt="logo" width={1000} height={1000} style={{position:"absolute",top:-40,left:-40,backgroundColor:"transparent",zIndex:500,width:"15.5rem",height:"15.5rem"}} />
        <div style={{position:"fixed",bottom:15,left:15,zIndex:500}}>
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
