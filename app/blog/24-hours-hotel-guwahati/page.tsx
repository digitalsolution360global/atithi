import type { Metadata } from "next";
import BlogPost from "./BlogPost";

export const metadata: Metadata = {
  title: "Emergency Stay Near Pratiksha Hospital Guwahati with 24/7 Room Access | Atithi Home",
  description:
    "Secure an emergency stay near Pratiksha Hospital Guwahati. Atithi Homes provides immediate check-in for medical families needing a safe, quiet, and clean place to rest.",
  keywords:
    "emergency stay near pratiksha hospital guwahati, 24/7 hotel guwahati, atithi homes guwahati, hotel near pratiksha hospital guwahati, best 24 hour hotel guwahati, secure hotel guwahati",
  alternates: {
    canonical: "https://www.atithihome.com/blog/24-hours-hotel-guwahati",
  },
};

export default function BlogDetailPage() {
  return <BlogPost />;
}
