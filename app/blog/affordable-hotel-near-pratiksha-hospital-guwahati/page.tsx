import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Affordable Hotel near pratiksha hospital Guwahati | Atithi Guest House",
  description:
    "Book your comfortable stay near Pratiksha Hospital Guwahati at Atithi Guest House. Enjoy budget-friendly hotel rooms in Guwahati with top-notch hospitality today.",
  alternates: {
    canonical: "https://www.atithihome.com/blog/affordable-hotel-near-pratiksha-hospital-guwahati",
  },
};

export default function AffordableHotelBlogPage() {
  return <BlogContent />;
}
