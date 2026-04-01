import type { Metadata } from "next";
import BlogPost from "./BlogPost";

export const metadata: Metadata = {
  title: "Why Atithi Home is the Perfect Choice for Long-Stay Accommodation in Guwahati | Atithi Home",
  description:
    "Discover the benefits of choosing a homestay over a traditional hotel for your extended visits to Guwahati. Enjoy home-like comfort, privacy, and budget-friendly rates.",
  keywords:
    "long stay guwahati, homestay guwahati, atithi home guwahati, extended stay guwahati, budget homestay guwahati, best place to stay in guwahati",
  alternates: {
    canonical: "https://www.atithihome.com/blog/best-homestay-guwahati-for-long-stays",
  },
};

export default function BlogDetailPage() {
  return <BlogPost />;
}
