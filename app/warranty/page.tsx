import WarrantySection from "./WarrantySection";

export const metadata = {
  title: "Atithi Homestay Guwahati — Warranty Policy & Guest Assurance",
  description:
    "Read the Atithi Homestay warranty policy for booking protection, room readiness, service response standards, and support claim process.",
  keywords:
    "Atithi Homestay warranty, Guwahati homestay policy, booking warranty, room readiness guarantee, guest assurance Atithi",

  alternates: {
    canonical: "https://www.atithihome.com/warranty",
  },

  openGraph: {
    images: "/assets/about.jpg",
  },

  twitter: {
    card: "summary_large_image",
    images: "/assets/about.jpg",
  },
};

export default function Page() {
  return <WarrantySection />;
}
