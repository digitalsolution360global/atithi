import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Experience the Best Luxury hotel in Guwahati Today | Atithi Homes",
  description:
    "Discover a stunning luxury stay at affordable prices in Guwahati. Enjoy premium amenities, serene vibes, and unmatched comfort right in the heart of the city.",
  alternates: {
    canonical: "https://www.atithihome.com/blog/luxury-stay-affordable-prices-guwahati",
  },
};

export default function SimpleBlogPage() {
  return <BlogContent />;
}
