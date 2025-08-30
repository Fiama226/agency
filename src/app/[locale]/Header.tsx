'use client'
import React from 'react'
import Head from 'next/head';
import { useTranslations } from 'next-intl';



  function websiteJsonLd() {
    return {
      __html: `{
  "@context": "https://schema.org",
  "@type": "Agency ",
  "name": "Digitalstation",
  "url": "www.digitalstation.tech",
  "logo": "https://res.cloudinary.com/dxvnon94f/image/upload/v1756182029/logo.png",
  "foundingDate": "2025-06-01",
  "description": "A full-service digital agency specializing in web/mobile development branding and consulting",
  "email": "contact@digitalstation.tech",
  "telephone": "+22666169362",
  "sameAs": [
    "https://www.facebook.com/landryagency",
    "https://www.linkedin.com/company/landryagency"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rue 12, Tabtenga",
    "addressLocality": "Ouagadougou",
    "addressRegion": "Centre",
    "postalCode": "BF-01",
    "addressCountry": "BF"
  },
  "founder": {
    "@type": "Person",
    "name": "KABORE Pawendtaore Landry",
    "jobTitle": "Founder & Full-stack Engineer"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+22666169362",
    "email": "support@digitalstation.tech"
  }
}
`}
    }

const Header = () => {
    const t = useTranslations("meta");
  return (
            <Head>
           <title>{t("title")}</title>
    <meta name="description" content={t("description")} key="desc" />
        <meta property="og:title" content={t("title")} />
        <meta
          property="og:description"
          content={t("description")}
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dxvnon94f/image/upload/v1756182029/logo.png"
        />
                <script
          type="application/ld+json"
          dangerouslySetInnerHTML={websiteJsonLd()}
          key="product-jsonld"
        />
        

            </Head>
  )
}

export default Header