import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Best places to visit in Guwahati During Your Next Holiday",
  description:
    "Plan your travel itinerary with the best places to visit in Guwahati. Book your cozy stay at Atithi Guest House Guwahati.",
  alternates: {
    canonical: "https://www.atithihome.com/blog/things-to-do-in-guwahati-during-your-stay",
  },
};

export default function SimpleBlogPage() {
  return <BlogContent />;
}
