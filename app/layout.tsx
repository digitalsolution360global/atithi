// app/layout.tsx

import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import BookYourStayCTA from "@/components/home/BookYourStayCTA";

export const metadata = {
  title: "Atithi Homes | Premium Guest House in Guwahati",
  description:
    "Experience top-tier comfort & Assamese hospitality at Atithi Homes. Secure rooms, free Wi-Fi, & easy transit in Guwahati. Book your budget-friendly stay!",
  keywords:
    "Atithi Homestay Guwahati, homestay in Guwahati, luxury rooms Guwahati, premium homestay Assam, Guwahati accommodation, family homestay Guwahati, business stay Guwahati, guest house Guwahati",

  alternates: {
    canonical: "https://atithihome.com", // 
  },

  openGraph: {
    title: "Atithi Homestay Guwahati — Luxury Rooms",
    description:
      "Premium hospitality, luxury rooms & homely environment in Guwahati.",
    url: "https://atithihome.com/",
    siteName: "Atithi Homestay Guwahati",
    images: [
      {
        url: "/assets/images/home-img1.jpg", // replace with your banner
      },
    ],
  },

  icons: {
    icon: "/favicon.png", // <-- yaha aap favicon file dal diya
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Atithi Homestay",
    "alternateName": "Atithi Home",
    "url": "https://www.atithihome.com/",
    "telephone": "+91-6000891365",
    "priceRange": "₹₹",
    "description":
      "Affordable hotel and homestay near Pratiksha Hospital, VIP Road, Barbari, Guwahati. Open 24/7 with comfortable rooms, family-friendly accommodation, and emergency stay support.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Alokpur, Near Pratiksha Hospital, VIP Road, Barbari",
      "addressLocality": "Guwahati",
      "addressRegion": "Assam",
      "postalCode": "781036",
      "addressCountry": "IN",
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "areaServed": {
      "@type": "City",
      "name": "Guwahati",
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "24/7 Check-in",
        "value": true,
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Air Conditioned Rooms",
        "value": true,
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Family Friendly",
        "value": true,
      },
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-6000891365",
      "contactType": "Reservations",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Assamese"],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {/* HEADER FIXED */}
        <Header />

        {/* PAGE CONTENT */}
        <main className="pt-16">{children}</main>

        {/* BOOK YOUR STAY - ABOVE FOOTER */}
        <BookYourStayCTA />

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
