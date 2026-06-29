import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Best Hotel in Guwahati: Top Tips for Booking Your Stay",
  description:
    "Discover how to find the best hotel in Guwahati with modern amenities, comfortable family rooms, and exceptional services at highly affordable prices.",
  keywords:
    "best hotel in guwahati, budget hotel in guwahati, affordable hotel in guwahati, hotel near VIP Road Guwahati, hotel near Pratiksha Hospital, family stay guwahati",
  alternates: {
    canonical:
      "https://www.atithihome.com/blog/best-hotel-in-guwahati-travelers-guide",
  },
};

export default function BlogDetailPage() {
  return <BlogContent />;
}
